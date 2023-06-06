 


<div id="header" align="center">
    <h1 style="position: absolute; top: 0; left: 0; width: 100%; text-align: center; color: white; font-size: 24px; padding: 20px; background-color: rgba(0, 0, 0, 0.7);">BIENVENUE DANS L'AVENTURE DE NOTRE PROJET JS</h1>
  <img src="https://media.giphy.com/media/hu1TLAaubiak9S4GT6/giphy.gif" width="600"/>
</div>
<div id="badges" align="center">
  <h1 style="color: white; font-size: 24px; padding: 20px; background-color: rgba(0, 0, 0, 0.7);">Tout d'abord, présentons les aventuriers :</h1>
</div>
<span style="font-size: 48px;">Arthur Parriaud</span>
<div>
    <a href="https://www.linkedin.com/in/arthur-parriaud-343a281a8/" style="display: flex; justify-content: center; align-items: center;">
        <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
      </a>  
 </div>
<span style="font-size: 48px;">David Berdugo</span>
<div>
    <a href="https://www.linkedin.com/in/david-berdugo-/" style="display: flex; justify-content: center; align-items: center;">
        <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
      </a>  
 </div>
<span style="font-size: 48px;">Théo Pinardin</span>
 <div>
    <a href="https://www.linkedin.com/in/th%C3%A9o-pinardin-728884209/" style="display: flex; justify-content: center; align-items: center;">
        <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
      </a>  
 </div>
</div>

## Présentation du projet

Nous avons créé un programme qui résout des équations polynomiales de degré 2 en trouvant les racines du polynôme. Les racines peuvent être réelles ou imaginaires. Tout cela a été fait en Javascript fonctionnel avec l'aide de la librairie Ramda.
## Ressources

[Ramda Documentation](https://ramdajs.com/docs/)

Le cours initiatique au JS et à l'environnement GitHub de Mr ROBIN Maxime

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="100" height="100"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="100" height="100"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="100" height="100"/>
</div>

## License

[Webstorm, version 2023.1.2](https://www.jetbrains.com/webstorm/promo/)

## How to run it?

### Installation
Pour commencer nous allons avoir besoin d'un environnement de travail, installer node js via ce lien ->
https://nodejs.org/fr/download

Ou sinon à l'ouverture de Webstorm, l'IDE propose de le faire à votre place.

Ensuite il va nous falloir un installateur de package:

Par défaut npm est installé quand vous installez NodeJs.

Pour ceux qui veulent utiliser Yarn pas de problème.

Ouvrez votre cmd et tapez:

    npm install --global yarn
    
Vous pouvez vérifier la bonne installation de yarn comme ceci:

    npm --version
   
De même pour nodeJs:

    node --version
    
Pour installer Ramda:

    npm install ramda

ou bien avec yarn:

    yarn add ramda
   
En haut de votre n'oubliez d'ajouter la ligne suivante pour pouvoir utiliser la librairie:

    const R = require('ramda');

### Informations supplémentaires
Pour lancer ce projet il vous suffit de le télécharger et de le lancer sur un IDE (nous vous conseillons Webstorm) et d'appuyer sur le bouton play.
Nous avons paramétré par défaut certaines équations. Pour pouvoir utiliser celles que vous souhaitez rien de plus simple.
Allez à cette section du code dans le V1:

    const Polynomes = [
    {degre2: 2, degre1: 1, degre0: 15 },
    {degre2: 14, degre1: 2, degre0: 3},
    {degre2: -4, degre1: 4, degre0: -1},
    {degre2: -8, degre1: 6, degre0: 0},
    {degre2: 4, degre1: 1, degre0: 9},
    {degre2: 6, degre1: -5, degre0: 4},
    {degre2: 5, degre1: -9, degre0: -3},
    {degre2: 4, degre1: -2, degre0: 3},
    ];
   
Et modifiez selon les valeurs selon vos souhaits.

## Remerciements

Nous voulons remercier notre professeur MR ROBIN Maxime pour ce projet.

En effet avec ce challenge nous avons pu découvrir la programmation Js via Ramda et nous familiariser encore plus avec l'environnement de GitHub.



