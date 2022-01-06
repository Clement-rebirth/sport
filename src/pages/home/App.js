import TrainingOverlay from './TrainingOverlay';
import Planning from './Planning';
import { useContext, useEffect, useState } from 'react';
import Manager from '../../services/firebase/Manager';
import { UserContext } from '../../providers/UserProvider';
import { off } from 'firebase/database';

import Exercise from './Exercise';
import { Link } from 'react-router-dom';

import './App.css';

function App() {

  const [exercises, setExercises] = useState('loading');
  const [exercisesToShow, setExercisesToShow] = useState('loading');
  const [showTraining, setShowTraining] = useState(false);
  const [currentDayNumber, setCurrentDayNumber] = useState(false);
  const [trainingExercises, setTrainingExercises] = useState(false);

  let { user } = useContext(UserContext);

  useEffect(() => {
    let date = new Date();
    let dayNumber = date.getDay(); // 0 to 6
    if (dayNumber === 0) dayNumber = 7; // I want sunday to be the last day as 0 corresponds to sunday
    dayNumber--; // to get a number between 0 and 6

    setCurrentDayNumber(dayNumber);
  }, []);

  useEffect(() => {
    let exercisesManager = new Manager('exercises');

    exercisesManager.getAll(snapshot => {
      let data = snapshot.val();
      setExercises(data);
    });

    return () => off(exercisesManager.ref);
  }, []);

  useEffect(() => {
    setExercisesToShow(exercises);
  }, [exercises]);

  const handleChange = e => {
    let categoryToShow = e.target.value;

    // if none category is selected, we display the default list
    if (categoryToShow === 'none') {
        setExercisesToShow(exercises);
        return;
    }

    let exercisesToShow = [];

    Object
      .keys(exercises)
      .filter(id => exercises[id].category === categoryToShow)
      .forEach(id => exercisesToShow.push(exercises[id]));
      
    setExercisesToShow(exercisesToShow);
  };

  const startTraining = dayNumber => {
    let dayTr = document.querySelectorAll('#planning table tr')[dayNumber];

    let exercisesCategories = dayTr.dataset.exercises.split(',');
    let exercisesToDo = [];

    exercisesCategories.forEach(exercisesCategory => {
      let matchingExercises = [];
      
      Object
        .keys(exercises)
        .filter(key => exercises[key].category === exercisesCategory)
        .forEach(key => matchingExercises.push(exercises[key]));
      exercisesToDo = [...exercisesToDo, ...matchingExercises];
    });

    setTrainingExercises(exercisesToDo);
    
    let todayIsRest = exercisesCategories[0] === 'rest';
    let todayIsCardio = exercisesCategories[0] === 'cardio';

    if (todayIsRest) {
      alert("Pas d'entraînement aujourd'hui, repose toi !");
      return;
    }

    if (window.confirm("Êtes-vous sûr de vouloir lancer l'entraînement ?")) {
      openTraining();
    }
  };

  const openTraining = () => {
    setShowTraining(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTraining = () => {
    setShowTraining(false);
    document.body.style.overflow = 'visible';
  }
  
  return (
    <div className="App">
      <header>
        <h1><span>Mon programme musculation</span></h1>
        <button className="btn-primary" id="start-exercises" onClick={() => startTraining(currentDayNumber)}>Lancer l'entraînement !</button>
      </header>

      { showTraining && 
        <TrainingOverlay
          closeTraining={closeTraining}
          trainingExercises={trainingExercises} />
      }

      <section id="planning">
        <h2><span>Planning</span></h2>
        <Planning startTraining={startTraining} />
      </section>  

      <hr className="separator" />

      <section id="exercises">
        <div className='wrap'>
          <h2><span>Exercices</span></h2>

          { user &&
            <Link to='/add-exercise'><span className="icon material-icons-round">add</span></Link>
          }
        </div>

        <label htmlFor="category">Choisissez une catégorie :</label>
        <select name="category" id="category" onChange={handleChange}>
          <option value="none">Aucune</option>
          <option value="thighs">Cuisses</option>
          <option value="calves">Mollets</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="abs">Abdos</option>
          <option value="pecs">Pecs</option>
          <option value="back">Dos</option>
          <option value="shoulders">Épaules</option>
          <option value="cardio">Cardio</option>
        </select>

        <div id="exercises-list">
          { exercisesToShow !== 'loading' &&
            Object.keys(exercisesToShow).map(key => (
              <Exercise
                key={key}
                exercise={{ ...exercisesToShow[key], id: key }}
                user={user}
              />
            ))
          }
        </div>
      </section>

      <hr className="separator" />

      <section id="sources">
        <h2><span>Sources</span></h2>

        <ul>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.musculation-halteres.fr/">https://www.musculation-halteres.fr/</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://darebee.com/">https://darebee.com/</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://fr.myprotein.com/thezone/entrainement/meilleurs-exercices-biceps-triceps-prendre-de-la-masse/">https://fr.myprotein.com/thezone/entrainement/meilleurs-exercices-biceps-triceps-prendre-de-la-masse/</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
