import React from 'react';

import './NoEquipments.css';

const NoEquipments = () => {
  return (
    <div className='no-equipments'>
      <header>
          <h1>Musculation sans matériel</h1>
      </header>

      <section className="text" id="no-equipments">
          <h2><span>Programmes</span></h2>

          <p>Pour trouver des programmes <strong>sans matériel</strong> vous pouvez allez sur l'excellent site <a rel="noopener noreferrer nofollow" target="_blank" href="https://darebee.com/">darebee</a> qui contient une multitude de programmes pour tout le corps.</p>
          <p>Ensuite vous avez les <b>applications</b> dont voici une liste :</p>
          <ul>
              <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=homeworkout.homeworkouts.noequipment">Exercices à la maison</a> : propose des programmes complets avec plusieurs niveaux de difficulté</li>
              <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=homeworkout.homeworkouts.workoutathome.musclebuilding">Fitness à la maison</a> : des programmes plus ciblés sur des groupes de muscles en particulier, mais rien n'empêche de faire un jour un entraînement bras/pecs et le lendemain de faire celui épaules/dos.</li>
              <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=sixpack.sixpackabs.absworkout">Des muscles abdominaux en 30 jours</a> : un programme de 30 jours ciblé uniquement sur les abdos. 3 niveaux de difficulté disponibles.</li>
          </ul>
      </section>
    </div>
  );
};

export default NoEquipments;
