importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var firebaseConfig = {
    apiKey: "AIzaSyBiuBam_SZ_LOTW5QLOmRrO7XdkWRbhDP8",
    authDomain: "cmc2021-f4f8b.firebaseapp.com",
    projectId: "cmc2021-f4f8b",
    storageBucket: "cmc2021-f4f8b.appspot.com",
    messagingSenderId: "364371829051",
    appId: "1:364371829051:web:7375833599efa45b9c971e",
    measurementId: "G-73KBH7SW8L"
  };tttttttt 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.333
const messaging = firebase.messaging();4444


 messaging.setBackgroundMessageHandler(function(payload) {
     console.log(payload); tessr 5

 });
444445555
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log(  fgfgf
//         "[firebase-messaging-sw.js] Received background message ",
//         payload,
//     );
//     // Customize notification here
//     const notificationTitle = "Background Message Title";
//     const notificationOptions = {
//         body: "Background Message body.",
//         icon: "/itwonders-web-logo.png",
//     };
tytytyt
//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions,
//     );
// });
fgfgf

tuest 1 main ghghghggh