importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyA5TVeXQv2xyxLf-P_CU0ubYr771cc1o-Y",
  authDomain: "timepilot-27958.firebaseapp.com",
  projectId: "timepilot-27958",
  storageBucket: "timepilot-27958.firebasestorage.app",
  messagingSenderId: "1075780400734",
  appId: "1:1075780400734:web:9841bd9ae261fa1c1e66cf"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/LogoBlacknotext.png"
  });
});