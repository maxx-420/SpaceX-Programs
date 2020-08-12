const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const universal = require(`${process.cwd()}/dist/test-app/server/main`).app();

exports.ssr = functions.https.onRequest(universal);
