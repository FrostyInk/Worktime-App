const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();

app.get('/workers', (request, response) => {
  admin.firestore().collection('workers').get()
    .then(data => {
      let workers = [];
      data.forEach(doc => {
        workers.push(doc.data());
      });
      return res.json(workers);
    })
    .catch(err => console.error(err));
})

app.post('/worker', (request, response) => {
  const newWorker = {

  }
})

exports.api = functions.https.onRequest(app);