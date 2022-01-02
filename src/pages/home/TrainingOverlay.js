import React from 'react';

import Exercise from './Exercise';

const TrainingOverlay = ({ closeTraining, trainingExercises }) => {
  return (
    <div id="training">
      <div id="close" onClick={closeTraining}>
        <span className="material-icons-round">close</span>
      </div>

      <h2><span>Avant de commencer</span></h2>
      <div>
        <div className="warning">
          <img src={require("../../assets/img/water-bottle.jpg")} />
          <p>Pense à prendre de l'eau</p>
        </div>
        <div className="warning">
          <img src={require("../../assets/img/fitbit-versa-2.png")} />
          <p>Démarre ta montre</p>
        </div>
    </div>

      <h2><span>On s'échauffe !</span></h2>
      <ul>
        <li>Échauffer les poignets</li>
        <li>Courir sur place</li>
        <li>Montées de genoux</li>
        <li>Épaules</li>
        <li>Burpees</li>
        <li>Jumping jack</li>
      </ul>

      <h2><span>C'est parti !</span></h2>

      <div id="training-exercises">
      { trainingExercises &&
        Object.keys(trainingExercises).map(id => (
          <Exercise
            key={id}
            link={trainingExercises[id].link}
            image={trainingExercises[id].image}
            title={trainingExercises[id].title}
            summary={trainingExercises[id].summary}
            set={trainingExercises[id].set}
            reps={trainingExercises[id].reps}
            time={trainingExercises[id].time}
          />
        ))
      }
      </div>

      <div className="warning">
        <img src={require("../../assets/img/fitbit-versa-2.png")} />
        <p>Pense à stopper ta montre !</p>
      </div>
    </div>
  );
};

export default TrainingOverlay;
