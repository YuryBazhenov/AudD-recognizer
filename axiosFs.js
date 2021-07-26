const axios = require("axios");
const fs = require('fs');

const FormData = require('form-data');
const token = '7a0d2accf5e00ee09c5ca9704df75532'


async function axiosFs (file) {
  const form = new FormData();
  form.append('api_token', token);
  form.append('file', fs.createReadStream(file));
  try {
    const response = await axios.post('https://api.audd.io/recognize/', form, { headers: form.getHeaders() })
    return response.data.result.song_link
  }
  catch (err) {
    console.log(err)
  }
}

async function axiosFsHum(file) {
  const form = new FormData();
  form.append('api_token', token);
  form.append('file', fs.createReadStream(file));
  try {
    const response = await axios.post('https://api.audd.io/recognizeWithOffset/ ', form, { headers: form.getHeaders() })
    return response.data.result.list
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { axiosFs, axiosFsHum }

