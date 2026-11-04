// Login settings.
//  mode 'local'    — users and password hashes in auth/users.json (managed in the app: Users).
//  mode 'firebase' — Firebase Authentication. Paste your Firebase web config below and set mode to 'firebase'.
//                     Add users in the Firebase console (Authentication → Users → Add user).
//                     Optional: list the e-mails allowed in, and which of them are admins.
export const AUTH = {
  mode: 'firebase',
  firebase: {
    apiKey: "AIzaSyB0m5g-kksGDpmfESVlV-br_q7ooLpdLns",
    authDomain: 'mapanimator-51bcd.firebaseapp.com',
    projectId: 'mapanimator-51bcd',
    storageBucket: 'mapanimator-51bcd.firebasestorage.app',
    messagingSenderId: '783384298447',
    appId: '1:783384298447:web:5890c3b310a44ff80508ba',
  },
  allowedEmails: [], // empty = every account in your Firebase project may sign in
  adminEmails: [],
  sessionDays: 14,
};
