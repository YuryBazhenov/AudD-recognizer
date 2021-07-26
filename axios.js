const axios = require("axios");


const token = '7a0d2accf5e00ee09c5ca9704df75532'


async function axiosFn (url) {
  const response = await axios({
    method: 'post',
    url: 'https://api.audd.io/',
    data: {
      'api_token': token,
      'url': url,
      'return': 'apple_music,spotify',
  },
    headers: { 'Content-Type': 'multipart/form-data' },
})
  return response.data

}


module.exports = axiosFn
