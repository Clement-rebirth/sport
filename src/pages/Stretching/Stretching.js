import React from 'react';

import './Stretching.css';

const Stretching = () => {
  return (
    <div className='stretching'>
      <header>
        <h1>Les étirements</h1>
      </header>

    <section id="stretching">
      <h2><span>C'est parti !</span></h2>

      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/quadriceps-stretching.jpg')} />
        <div className="content">
          <h3>Les quadriceps</h3>
          <p>Collez les genoux, gardez le dos bien droit et étirez en douceur pendant 15 secondes chaque cuisses. Faites le 2 ou 3 fois.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/ischios-jambiers-stretching.jpg')} />
        <div className="content">
          <h3>Les ischios-jambiers</h3>
          <p>Durant cet étirement, il est important de garder la jambe d'appui légèrement fléchie et de ne pas appuyer sur le genou de la jambe étirée. Penchez vous doucement en avant et étirez pendant 15 secondes chaque côté. Renouvelez 2 à 3 fois l'opération.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/mollets-stretching.jpg')} />
        <div className="content">
          <h3>Les mollets</h3>
          <p>Comme l'indique l'image, l'étirement se fait sur la jambe arrière. Il n'est pas nécessaire d'écarter de manière exagérée les jambes ni de pousser sur le mur. Le plus important est de garder le talon posé au sol et de ressentir l'étirement dans le mollet. Maintenez la position 15 secondes puis inversez les jambes. Faites cela 2 ou 3 fois.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/pecs-stretching.png')} />
        <div className="content">
          <h3>Les pectoraux</h3>
          <p>En prenant appui contre un point fixe (mur, cadre guidé ou montant d'une machine de musculation) avec un bras tendu vers l'arrière, faites une légère rotation du buste à l'opposé au bras tendu. Faites cette rotation jusqu'à ressentir un étirement dans le pectoral. Puis inversez la position. Maintenez chaque position 15 secondes et répétez l'exercice 2 à 3 fois.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/dorsaux-stretching.jpg')} />
        <div className="content">
          <h3>Les dorsaux</h3>
          <p>Dans cette position, il est important de garder les lombaires bien alignées avec la colonne vertébrale afin de ne pas les mettre sous tension. Les bras doivent restés légèrement fléchis et vous devez incliner le buste jusqu'à ce que vous ressentiez un étirement dans les grands dorsaux. Maintenez chaque position 15 secondes et répétez l'exercice 2 à 3 fois.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/epaules-stretching.png')} />
        <div className="content">
          <h3>Les épaules</h3>
          <p>Dans cette posture, l'étirement va cibler la zone externe et latérale des deltoïdes. Ici, il est important de garder le dos bien droit et de ne pas forcer sur l'articulation car les épaules sont relativement fragiles.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/epaules-stretching-2.jpg')} />
        <div className="content">
          <h3>Les épaules</h3>
          <p>Cet étirement cible la zone antérieure du deltoïde qui est très sollicitée notamment lors des mouvements de poussée. Encore une fois, il convient de garder le dos droit et de ne pas se cambrer. Tirez légèrement vos épaules vers l'arrière permet d'accentuer l'étirement mais ne les montez pas afin de ne pas mettre de tension dans les trapèzes. Maintenez les positions 15 secondes sur chaque côté et reproduisez l'exercice 2 ou 3 fois.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/biceps-avant-bras-stretching.jpg')} />
        <div className="content">
          <h3>Les biceps</h3>
          <p>Cet exercice permet d'étirer le triceps. Il suffit de mettre le bras à la verticale du buste puis de tirer légèrement sur de coude avec le bras opposé. Lorsque vous ressentez l'étirement, maintenez la position 15 secondes puis alternez avec l'autre bras.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/triceps-stretching.jpg')} />
        <div className="content">
          <h3>Les triceps</h3>
          <p>Cet exercice autorise un étirement complet de l'avant bras ainsi que du biceps et de la main sollicitée pour tenir les charges. Veillez à ne pas forcer sur l'articulation du coude en allant dans une hyper extension de ce dernier. Vous risqueriez de vous blesser. 15 secondes sur chaque bras suffisent. Répétez le mouvement 2 à 3 fois de chaque côté.</p>
        </div>
      </div>
      <div className="stretching-exercise">
        <img src={require('../../assets/img/stretching/chest-stretch-exercise-illustration.jpg')} />
        <div className="content">
          <h3>Pectoraux et biceps</h3>
          <p>Cet exercice consiste à poser la paume de ta main sur un mur. Tu vas tendre le bras et faire une pression en te tournant de l’autre côté du bras.</p>
        </div>
      </div>
    </section>

    <hr className="separator" />

    <section id="links">
        <h2><span>Liens utiles</span></h2>
        <ul>
            <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.mega-gear.net/fr/blog/167-les-etirements">https://www.mega-gear.net/fr/blog/167-les-etirements</a></li>
            <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.fitlane.com/blog/2019-11-18-musculation-et-etirements/">https://www.fitlane.com/blog/2019-11-18-musculation-et-etirements/</a></li>
        </ul>
    </section>
    </div>
  );
};

export default Stretching;
