import { off } from 'firebase/database';
import { deleteObject, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Manager from '../../services/firebase/Manager';

const EditExercise = () => {

  const [exercises, setExercises] = useState('loading');
  const [exercise, setExercise] = useState('loading');
  const [previewImageSrc, setPreviewImageSrc] = useState(false);
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

  const { id } = useParams();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (exercise === 'loading') return;

    setExerciseFormData({
      category: exercise.category,
      image: exercise.image,
      link: exercise.link,
      reps: exercise.reps,
      set: exercise.set,
      summary: exercise.summary,
      time: exercise.time,
      title: exercise.title,
    });
  }, [exercise]);

  useEffect(() => {
    if (exercise === 'loading') return;

    setPreviewImageSrc('https://firebasestorage.googleapis.com/v0/b/sport-9fd66.appspot.com/o/exercises%2F' + exercise.image + '?alt=media');
  }, [exercise]);

  useEffect(() => {
    if (exercises === 'loading') return;

    setExercise(exercises[id]);
  }, [id, exercises]);

  useEffect(() => {
    let exercisesManager = new Manager('exercises');

    exercisesManager.getAll(snapshot => {
      let data = snapshot.val();
      setExercises(data);
    });

    return () => off(exercisesManager.ref);
  }, []);

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

    const updateExercise = () => {
      let exercisesManager = new Manager(`exercises/${id}`);
  
      exercisesManager
        .update(exerciseFormData)
        .then(() => navigate('/'));
    };

    // the image has been updated
    if (exercise.image !== exerciseFormData.image) {

      let file = fileInputRef.current.files[0];

      // if file size is more than 1mo
      if (file.size > 1024000) {
        alert(`L'image ne doit pas dépasser 1mo`);
        return;
      }

      const storage = getStorage();
      const exerciseImagesFolderName = 'exercises';

      // delete the old image
      const oldExerciseImageRef = ref(storage, `${exerciseImagesFolderName}/${exercise.image}`);

      deleteObject(oldExerciseImageRef).catch(error => console.error(error));

      // upload the new image
      const exerciseImageRef = ref(storage, `${exerciseImagesFolderName}/${file.name}`);
  
      uploadBytes(exerciseImageRef, file)
        .then(snapshot => {
          setExerciseFormData({ ...exerciseFormData, image: snapshot.metadata.name });
  
          updateExercise();
          return;
        })
        .catch(error => {
          console.error(error);
          return;
        });
    }
    
    updateExercise();
  };

  return (
    <div className='edit-exercise'>
      <h1>Modifier l'exercice</h1>

      <form className='exercise-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Titre</label>
          <input id='title' name='title' type='text' value={exerciseFormData.title} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor='category'>Choisissez une catégorie :</label>
          <select name='category' id='category' onChange={handleChange} value={exerciseFormData.category} required>
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
          <input type='checkbox' id='time' name='time' onChange={handleTime} checked={exerciseFormData.time} />
          <label htmlFor='time'>Les reps sont une durée</label>
        </div>

        <button className='btn-primary'>Modifier</button>
      </form>
    </div>
  );
};

export default EditExercise;
