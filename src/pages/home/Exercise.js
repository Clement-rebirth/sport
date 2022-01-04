import React from 'react';

import ExerciseActions from './ExerciseActions';

const Exercise = ({ exercise, user }) => {
  return (
    <div className='exercise'>
      <a href={exercise.link} rel='noopener noreferrer nofollow' target='_blank'>
        <img src={"https://firebasestorage.googleapis.com/v0/b/sport-9fd66.appspot.com/o/exercises%2F" + exercise.image + "?alt=media"} />
      </a>
      <div className="content">
        <h3 className="exercise-title">
          <span>{exercise.title}</span>
          { user && <ExerciseActions exercise={exercise} /> }
        </h3>
        <p className="exercise-summary">{exercise.summary}</p>
        <p className="sets-and-reps"><b>{exercise.set}</b> séries de <b>{exercise.reps}</b> {exercise.time ? '' : 'reps'}</p>
      </div>
    </div>
  );
};

export default Exercise;
