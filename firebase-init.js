import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
    apiKey: 'AIzaSyCYfIlHU7ZT-Cs8VHxugTaSSFXjfSDiaPg',
    authDomain: 'eneng-b34ee.firebaseapp.com',
    projectId: 'eneng-b34ee',
    storageBucket: 'eneng-b34ee.appspot.com',
    messagingSenderId: '401693608382',
    appId: '1:401693608382:web:a912bbb51dac61d88151ef',
    measurementId: 'G-LSC3PG9XKM',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export { app };
