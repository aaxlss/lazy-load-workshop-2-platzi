/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy.js'
console.log('Happy hacking :)')
//URL info
const baseURL = 'https://randomfox.ca/'
const apiURL = () => {
    let min = Math.ceil(1);
    let max = Math.floor(123);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return `${baseURL}images/${randomNumber}.jpg`}
//main div
const images = document.querySelector('#images');

//add btn
const btnAddImg = document.createElement('button');
btnAddImg.textContent = 'Add image';

const addImageFn = () => {
    window.fetch(apiURL())
    .then(({url}) =>{
        const divImg = document.createElement('div');
        const img = document.createElement('img');
        
        divImg.className = 'p-4';
        img.className = 'mx-auto';
        img.width = 320;
        img.dataset.src = url

        registerImage(divImg);

        divImg.append(img);
        images.append(divImg)
    });
}
btnAddImg.addEventListener('click', addImageFn);
images.append(btnAddImg)
//image elements
