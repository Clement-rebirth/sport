import React, { useState } from 'react';

import './Nutrition.css';

const Nutrition = () => {

  const [weight, setWeight] = useState(0);

  return (
    <div className='nutrition'>
      <header>
        <h1>Nutrition</h1>
      </header>

      <section className="text" id="to-know">
        <h2><span>Tout savoir</span></h2>

        <ul>
            <li>La <b>whey protéine</b> n’est rien d’autre que de la protéine de « petit lait » (lactosérum) sous forme de poudre déshydratée</li>
            <li>30 min avant l’entraînement, la whey vous permettra d’augmenter la synthèse protéique et de réduire le <b>catabolisme</b> dû à l’entraînement</li>
            <li>Immédiatement après l’entraînement, la protéine en poudre améliore la récupération et participe à <b>l’anabolisme</b></li>
            <li><b>L'anabolisme</b> correspond au développement du muscle, elle va intervenir après l'entrainement si les nutriments apportés après cette séance sont suffisants.</li>
            <li>Le <b>catabolisme musculaire</b> est un processus naturel qui consiste pour votre organisme à puiser dans vos tissus musculaires pour aller trouver l’énergie dont il a besoin lorsque vous produisez un effort physique intense</li>
            <li><b>1g de lipides</b> par kg par jour (en prise de masse)</li>
            <li><b>2g de protéines</b> par kg par jour (en prise de masse)</li>
            <li><b>3g à 4g de glucides</b> par kg par jour (en prise de masse)</li>
        </ul>

        <div className="center">
          <a id="go-to-calculate" className="btn-primary" href="#calculator">Calculer mes besoins</a>
        </div>
      </section>

      <hr className="separator" />

      <section className="text" id="calculator">
        <h2><span>Caclculer mes besoins</span></h2>
        <p className="subtitle center">Un calculateur spécial <b>prise de masse</b></p>
        
        <form id="calculator-form" className="center">
          <div>
              <label htmlFor="weight">Votre poids (en kg) :</label>
              <input required id="weight" type="number" name="weight" placeholder="60" onChange={e => setWeight(e.target.value)} value={weight} />
          </div>
          {/* <button id="calculate" className="btn-primary" type="submit">Calculer !</button> */}
        </form>

        { weight !== 0 &&
          <div id="results" className="center">
            <p>Par jour, il vous faudra :</p>
            <div>
              <ul>
                <li><b>{weight}g</b> de lipides</li>
                <li><b>{weight * 2}g</b> de protéines</li>
                <li><b>{weight * 3}g à {weight * 4}g</b> de glucides.</li>
              </ul>
            </div>
          </div>
        }
      </section>

      <hr className="separator" />

      <section className="text" id="list">
        <h2><span>Aliments sains</span></h2>

        <p>Voici une liste non exhaustive. Vous n'êtes biensûr pas obligé de manger uniquement ces aliments.</p>

        <h3>Protéines</h3>
        <ul>
          <li>Viande blanche (poulet, dinde) de préférence bleu blanc coeur</li>
          <li>Viande rouge 5% de matière grasse</li>
          <li>Oeuf élevé en plein air</li>
          <li>Saumon sauvage, truite saumonée</li>
          <li>Poisson blanc (cabillaud, la lotte, la dorade, le merlan...)</li>
          <li>Crevettes et fruits de mer</li>
          <li>Lentilles</li>
          <li>Amandes</li>
          <li>Haricots rouges</li>
          <li>Noix de cajou</li>
          <li>Beurre de cacahuète</li>
          <li>Graines de chia</li>
        </ul>

        <h3>Fruits & légumes</h3>
        <ul>
          <li>Fruits de saison</li>
          <li>Légumes de saison</li>
        </ul>

        <h3>Glucides</h3>
        <ul>
          <li>Riz basmati, riz complet, riz noir</li>
          <li>Pâtes complètes</li>
          <li>Patate douce</li>
          <li>Quinoa</li>
          <li>Flocons d'avoine</li>
          <li>Farine de châtaigne, blé complet, de seigle et toutes les farines sans gluten</li>
        </ul>

        <h3>Boissons</h3>
        <ul>
          <li>Café</li>
          <li>Thé</li>
          <li>Eau pétillante</li>
          <li>Eau plate</li>
          <li>Jus de citron bio</li>
          <li>Lait de coco</li>
          <li>Lait d'amande</li>
        </ul>

        <h3>Les bons lipides</h3>
        <ul>
          <li>Huile de coco</li>
          <li>Huile d'olive</li>
          <li>Crème de coco</li>
          <li>Avocat</li>
          <li>Sauce soja salé</li>
        </ul>

        <h3>À consommer avec modération</h3>
        <ul>
          <li>Fromage blanc 3% de matière grasse</li>
          <li>Yaourt de soja nature</li>
          <li>Miel</li>
          <li>Sirop d'agave</li>
          <li>Chocolat noir 85%</li>
        </ul>
      </section>

      <hr className="separator" />

      <section className="text" id="recipes">
        <h2><span>Recettes</span></h2>

        <h3>Petit déjeuner</h3>
        <img src={require('../../assets/img/recipes/bowlcake-chocolat-dietetique.jpg')} />
        <img src={require('../../assets/img/recipes/bowl-gourmand-paleo.jpg')} />
        <img src={require('../../assets/img/recipes/le-parfait-oeuf-bacon-aux-epinards.jpg')} />
        <img src={require('../../assets/img/recipes/bowlcake-chocolat-dietetique.jpg')} />
        <img src={require('../../assets/img/recipes/morning-champion.jpg')} />
        <img src={require('../../assets/img/recipes/omelette-paleo.jpg')} />
        <img src={require('../../assets/img/recipes/pancakes-express.jpg')} />
        <img src={require('../../assets/img/recipes/pancakes-sucres-patate-douce.jpg')} />
        
        <h3>Repas</h3>
        <img src={require('../../assets/img/recipes/des-de-poulet-sauce-beurre-cacahuete-tomate.jpg')} />
        <img src={require('../../assets/img/recipes/escalope-milanaise-facile.jpg')} />
        <img src={require('../../assets/img/recipes/lamelles-de-boeuf-courgette.jpg')} />
        <img src={require('../../assets/img/recipes/meli-melo-sucre-sale.jpg')} />
        <img src={require('../../assets/img/recipes/nid-d-oeuf.jpg')} />
        <img src={require('../../assets/img/recipes/pancakes-sales-paleo.jpg')} />
        <img src={require('../../assets/img/recipes/pates-boulettes-boeuf-sauce.jpg')} />
        <img src={require('../../assets/img/recipes/pates-carbo-healthy.jpg')} />
        <img src={require('../../assets/img/recipes/riz-a-la-thaie.jpg')} />
        <img src={require('../../assets/img/recipes/salade-detox.jpg')} />
        <img src={require('../../assets/img/recipes/salade-fraicheur.jpg')} />
        <img src={require('../../assets/img/recipes/salade-performance.jpg')} />
        <img src={require('../../assets/img/recipes/wrap-thon-avocat.jpg')} />

        <h3>post entraînement</h3>
        <img src={require('../../assets/img/recipes/barre-proteines-maison.jpg')} />
        <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.musculaction.com/recette-barres-proteines.htm">
            <img src={require('../../assets/img/recipes/recette-barres.jpg')} />
        </a>

        <h3>En-cas</h3>
        <img src={require('../../assets/img/recipes/brownie-fondant.jpg')} />
        <img src={require('../../assets/img/recipes/crepes-chocolat-healthy.jpg')} />
        <img src={require('../../assets/img/recipes/granola-en-barre.jpg')} />
        <img src={require('../../assets/img/recipes/verrine-fromage-blanc.jpg')} />
      </section>

      <hr className="separator" />

      <section id="links">
        <h2><span>Liens utiles</span></h2>

        <ul>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://darebee.com/nutrition.html">https://darebee.com/nutrition.html</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://darebee.com/nutrition/protein-sources-and-amounts-for-muscle-building.html">https://darebee.com/nutrition/protein-sources-and-amounts-for-muscle-building.html</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.musculation-halteres.fr/regime-alimentaire-musculation/">https://www.musculation-halteres.fr/regime-alimentaire-musculation</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.fitnessboutique.fr/quel-dosage-de-proteines-pour-la-musculation/cc-54.html">https://www.fitnessboutique.fr/quel-dosage-de-proteines-pour-la-musculation/cc-54.html</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.foodspring.fr/programme-alimentaire-musculation">https://www.foodspring.fr/programme-alimentaire-musculation</a></li>
        </ul>
      </section>

      <hr className="separator" />

      <section id="sources">
        <h2><span>Sources</span></h2>

        <ul>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.fitnessboutique.fr/guide-achat-whey-proteine-qu-est-ce-que-c-est/cc-448.html#DEFINITION">https://www.fitnessboutique.fr/guide-achat-whey-proteine-qu-est-ce-que-c-est/cc-448.html#DEFINITION</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://www.nutridiscount.fr/blog/whey-danger-sante">https://www.nutridiscount.fr/blog/whey-danger-sante</a></li>
          <li><a rel="noopener noreferrer nofollow" target="_blank" href="https://musculation-crosstraining.decathlon.fr/musculation-et-nutrition-comment-calculer-ses-macronutriments">https://musculation-crosstraining.decathlon.fr/musculation-et-nutrition-comment-calculer-ses-macronutriments</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Nutrition;
