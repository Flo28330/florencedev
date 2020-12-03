/*!
 * Florence Sivadier
 * florencedev 2020
 */

/*
|--------------------------------------------------------------------------
| Imports des librairies externes JavaScript
|--------------------------------------------------------------------------
*/
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';

/*
|--------------------------------------------------------------------------
| Imports des librairies externes CSS
|--------------------------------------------------------------------------
*/
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'devicon/devicon.css';
import 'devicon/devicon-colors.css';

/*
|--------------------------------------------------------------------------
| Imports des fichiers CSS du projet
|--------------------------------------------------------------------------
*/
import './style.css';

/*
|--------------------------------------------------------------------------
| Au chargement de la page
|--------------------------------------------------------------------------
*/
function onLoad() {
  this.$ = $;
  this.Popper = Popper;

  const year = new Date().getFullYear().toString();
  const yearSpan = document.querySelector('#year');

  if (yearSpan.textContent.indexOf(year) === -1) {
    yearSpan.textContent += ` - ${year}`;
  }
}

window.addEventListener('DOMContentLoaded', onLoad);
