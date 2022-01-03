import React, { useRef, useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import Manager from '../../services/firebase/Manager';
import { useNavigate } from 'react-router-dom';

import './AddExercise.css';

const AddExercise = () => {

  const [exerciseFormData, setExerciseFormData] = useState({
    category: '',
    image: '',
    link: '',
    reps: '',
    set: '',
    summary: '',
    time: false,
    title: '',
  });

  const [previewImageSrc, setPreviewImageSrc] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleImageChange = e => {
    setPreviewImageSrc(URL.createObjectURL(e.target.files[0]));
    setExerciseFormData({ ...exerciseFormData, image: e.target.files[0].name });
  }

  const handleChange = e => {
    const {value, name} = e.target;
    setExerciseFormData({ ...exerciseFormData, [name]: value });
  };

  const handleTime = e => {
    setExerciseFormData({ ...exerciseFormData, time: e.target.value === 'on' });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let file = fileInputRef.current.files[0];

    // if file size is more than 1mo
    if (file.size > 1024000) {
      alert(`L'image ne doit pas dépasser 1mo`);
      return;
    }

    const storage = getStorage();
    const exerciseImagesFolderName = 'exercises';
    const exerciseImageRef = ref(storage, `${exerciseImagesFolderName}/${file.name}`);

    uploadBytes(exerciseImageRef, file)
      .then(snapshot => {
        setExerciseFormData({ ...exerciseFormData, image: snapshot.metadata.name });

        let exercisesManager = new Manager('exercises');

        exercisesManager
          .add(exerciseFormData)
          .then(() => navigate('/'));
      })
      .catch(error => {
        console.error(error);
        return;
      });
  };

  return (
    <div className='add-exercise'>
      <h1>Ajouter un exercice</h1>

      <form className='exercise-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Titre</label>
          <input id='title' name='title' type='text' value={exerciseFormData.title} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='category'>Choisissez une catégorie :</label>
          <select name='category' id='category' onChange={handleChange} required>
            <option value="none">Aucune</option>
            <option value="thighs">Cuisses</option>
            <option value="calves">Mollets</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">Triceps</option>
            <option value="abs">Abdos</option>
            <option value="pecs">Pecs</option>
            <option value="back">Dos</option>
            <option value="shoulders">Épaules</option>
          </select>
        </div>

        <div>
          <label htmlFor='image'>Sélectionner une image pour l'exercice</label>
          <input type='file' name='image' id='image' ref={fileInputRef} onChange={handleImageChange} />
        </div>

        { previewImageSrc && 
          <div className='image-preview'>
            <img
              src={previewImageSrc}
              alt={exerciseFormData.image} />
          </div>
        }

        <div>
          <label htmlFor='summary'>Résumé</label>
          <textarea name='summary' id='summary' value={exerciseFormData.summary} onChange={handleChange} required></textarea>
        </div>
        
        <div>
          <label htmlFor='link'>Lien</label>
          <input id='link' name='link' type='text' value={exerciseFormData.link} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='set'>Set</label>
          <input id='set' name='set' type='text' value={exerciseFormData.set} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='reps'>Reps</label>
          <input id='reps' name='reps' type='text' value={exerciseFormData.reps} onChange={handleChange} required />
        </div>

        <div>
          <input type='checkbox' id='time' name='time' onChange={handleTime} />
          <label htmlFor='time'>Les reps sont une durée</label>
        </div>

        <button className='btn-primary'>Créer</button>
      </form>
    </div>
  );
};

export default AddExercise;
