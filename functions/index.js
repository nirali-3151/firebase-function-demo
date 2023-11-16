// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

var serviceAccount = require("./fir-function-demo-932a9-firebase-adminsdk-jfvlr-69df023650.json")
const express = require('express')

const router=express.Router()

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

// Take the text parameter passed to this HTTP endpoint and insert it into 
// // Firestore under the path /messages/:documentId/original
// // Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {

    // Grab the text parameter.
    const original = 123;

    console.log("original" , original);
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({original: original});

    console.log("writeResult" ,writeResult);
    // Send back a message that we've successfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });

  
  
// console.log("users are" , users);

// const express=require('express')
// const port = process.env.PORT || 3000
// const app = express()
// app.use(express.urlencoded({extended:true}))
// app.use(express.json());
// // view engine setup

// //firebase configuration
// var admin = require("firebase-admin");

// var serviceAccount = require("./fir-functions-1ca91-firebase-adminsdk-5n0pz-b3cc75e68c.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://fir-project-1-58a04.firebaseio.com",
// //   storageBucket: process.env.BUCKET_URL
// });
// // app.locals.bucket = admin.storage().bucket()
// //routes

// const uploadRoutes=require('./Controller/index')

// app.use(uploadRoutes)

// app.listen(port, (req,res)=>{
//   console.info(`Running on ${port}`)
// })

// // Take the text parameter passed to this HTTP endpoint and insert it into 
// // Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into Firestore using the Firebase Admin SDK.
//     const writeResult = await admin.firestore().collection('messages').add({original: original});
//     // Send back a message that we've successfully written the message
//     res.json({result: `Message with ID: ${writeResult.id} added.`});
//   });
  