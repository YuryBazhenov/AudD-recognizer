const router = require('express').Router()
const axios = require('../axios')
const multer = require('multer')
const upload = multer({ dest: './public/uploads/' })
const { axiosFs, axiosFsHum } = require('../axiosFs')
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)




router.get('/', (req, res) => {
  res.render('index')
})

router.post('/url', async (req, res) => {
  const { url } = req.body
  const result = await axios(url)
  res.json(result)
})

router.post('/upload', upload.single('uploadedfile'), async (req, res) => {
  const result = await axiosFs(req.file.path)
  await unlinkAsync(req.file.path)
  res.redirect(result)
})

router.post('/uploadBlob', upload.single('blob'), async (req, res) => {

  const result = await axiosFs(req.file.path)
  await unlinkAsync(req.file.path)
  res.send(result)
})

router.post('/uploadBlobHumming', upload.single('blob'), async (req, res) => {

  const result = await axiosFsHum(req.file.path)
  await unlinkAsync(req.file.path)
  res.json(result)
})
module.exports = router
