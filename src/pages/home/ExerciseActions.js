import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Manager from '../../services/firebase/Manager';

const ExerciseActions = ({ exercise }) => {

  const navigate = useNavigate();

  const confirmDelete = onConfirm => {
    let text;
    let quit = false;
    let wordToEnter = 'oui';

    do {
      text = prompt(`
        Êtes-vous sûr de vouloir supprimer l'exercice "${exercise.title}" ?
        (cette action est irréversible !)
        Écrivez "${wordToEnter}" pour confirmer :
      `);

      if (text === null) quit = true; // user cliked "cancel" button

      if (text === wordToEnter) deleteExercise();
    } while (!quit && text !== wordToEnter);
  };

  const deleteExercise = () => {

    // if the exercise has an image we delete it
    if (exercise.image) {
      const storage = getStorage();
      const imageRef = ref(storage, `exercises/${exercise.image}`);

      deleteObject(imageRef).catch(error => console.error(error));
    }

    let exercisesManager = new Manager(`exercises/${exercise.id}`);
    exercisesManager.delete(() => alert('L\'exercice a bien été supprimé.'));
  };

  return (
    <div className='exercise-actions'>
      <button id='edit-exercise' onClick={() => navigate(`/edit/${exercise.id}`)}>
          <span className='material-icons-round'>edit</span>
      </button>
      <button id='delete-exercise' onClick={confirmDelete}><span className='material-icons-round'>delete</span></button>
    </div>
  );
};

export default ExerciseActions;
