import { off } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import Manager from '../../services/firebase/Manager';

const Training = ({ startTraining }) => {

  const [planning, setPlanning] = useState('loading');

  useEffect(() => {

    if (planning === 'loading') return;

    // Planning
    let date = new Date();
    let dayNumber = date.getDay(); // 0 to 6
    if (dayNumber === 0) dayNumber = 7; // I want sunday to be the last day as 0 corresponds to sunday
    dayNumber--; // to get a number between 0 and 6

    let currentDayTr = document.querySelectorAll('#planning table tr')[dayNumber];
    currentDayTr.style.backgroundColor = 'rgb(230, 230, 230)';
  }, [planning]);

  useEffect(() => {
    let planningManager = new Manager('planning');

    planningManager.getAll(snapshot => {
      let data = snapshot.val();
      setPlanning(data);
    });

    return () => off(planningManager.ref);
  }, []);

  if (planning === 'loading') {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <table>
      <tbody>
        <tr data-exercises={planning[0].categories}>
          <th>Lundi</th>
          <td>{planning[0].translation}</td>
          <td><button onClick={() => startTraining(0)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[1].categories}>
          <th>Mardi</th>
          <td>{planning[1].translation}</td>
          <td><button onClick={() => startTraining(1)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[2].categories}>
          <th>Mercredi</th>
          <td>{planning[2].translation}</td>
          <td><button onClick={() => startTraining(2)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[3].categories}>
          <th>Jeudi</th>
          <td>{planning[3].translation}</td>
          <td><button onClick={() => startTraining(3)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[4].categories}>
          <th>Vendredi</th>
          <td>{planning[4].translation}</td>
          <td><button onClick={() => startTraining(4)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[5].categories}>
          <th>Samedi</th>
          <td>{planning[5].translation}</td>
          <td><button onClick={() => startTraining(5)}>Start</button></td>
        </tr>
        <tr data-exercises={planning[6].categories}>
          <th>Dimanche</th>
          <td>{planning[6].translation}</td>
          <td><button onClick={() => startTraining(6)}>Start</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Training;
