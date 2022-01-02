import React, { useEffect } from 'react';

const Training = ({ startTraining }) => {

  useEffect(() => {
    // Planning
    let date = new Date();
    let dayNumber = date.getDay(); // 0 to 6
    if (dayNumber === 0) dayNumber = 7; // I want sunday to be the last day as 0 corresponds to sunday
    dayNumber--; // to get a number between 0 and 6

    let currentDayTr = document.querySelectorAll('#planning table tr')[dayNumber];
    currentDayTr.style.backgroundColor = 'rgb(230, 230, 230)';
  }, []);

  return (
    <table>
      <tbody>
        <tr data-exercises="back,biceps,triceps,abs" data-day-number="0">
            <th>Lundi</th>
            <td>dos/bras/abdos</td>
            <td><button onClick={() => startTraining(0)}>Start</button></td>
        </tr>
        <tr data-exercises="thighs,calves,pecs,shoulders" data-day-number="1">
            <th>Mardi</th>
            <td>jambes/pecs/épaules</td>
            <td><button onClick={() => startTraining(1)}>Start</button></td>
        </tr>
        <tr data-exercises="cardio" data-day-number="2">
            <th>Mercredi</th>
            <td>cardio</td>
            <td><button onClick={() => startTraining(2)}>Start</button></td>
        </tr>
        <tr data-exercises="back,biceps,triceps,abs" data-day-number="3">
            <th>Jeudi</th>
            <td>dos/bras/abdos</td>
            <td><button onClick={() => startTraining(3)}>Start</button></td>
        </tr>
        <tr data-exercises="thighs,calves,pecs,shoulders" data-day-number="4">
            <th>Vendredi</th>
            <td>jambes/pecs/épaules</td>
            <td><button onClick={() => startTraining(4)}>Start</button></td>
        </tr>
        <tr data-exercises="cardio" data-day-number="5">
            <th>Samedi</th>
            <td>cardio</td>
            <td><button onClick={() => startTraining(5)}>Start</button></td>
        </tr>
        <tr data-exercises="rest" data-day-number="6">
            <th>Dimanche</th>
            <td>repos</td>
            <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Training;
