import 'normalize.css';
import styles from './index.module.scss';
import $ from 'jquery';
import sourceImg from './images/andre-alexander-N3V2uhtuDCo-unsplash.jpg';
import sourceSvg from './images/01079 Quote Wild.svg';
import '@babel/polyfill';

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';

    const imgElement = document.createElement('img');
    imgElement.src = sourceSvg;
    imgElement.classList = styles.sourceImg;

    console.log(sourceImg);
    console.log(styles);
    element.appendChild(imgElement);

    element.classList = styles.helloWebpack;

    return element;
}

document.body.appendChild(component());
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION: ${IS_PRODUCTION}`);