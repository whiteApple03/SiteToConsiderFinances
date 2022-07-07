import * as CSTabCont from '../ChooseSystemTableController/controller.js';
// import express from 'express';

const butToAddNewSystem = document.querySelector('#elem');
butToAddNewSystem.addEventListener('click', CSTabCont.addNewSystem);