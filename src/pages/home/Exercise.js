import React from 'react';

const Exercise = ({ link, image, title, summary, set, reps, time }) => {
  return (
    <a className='exercise' href={link} rek='noopener noreferrer nofollow' target='_blank'>
      <img src={"https://firebasestorage.googleapis.com/v0/b/sport-9fd66.appspot.com/o/exercises%2F" + image + "?alt=media"} />
      <div className="content">
        <h3 className="exercise-title"><span>{title}</span></h3>
        <p className="exercise-summary">{summary}</p>
        <p className="sets-and-reps"><b>{set}</b> séries de <b>{reps}</b> {time ? '' : 'reps'}</p>
      </div>
    </a>
  );
};

export default Exercise;
