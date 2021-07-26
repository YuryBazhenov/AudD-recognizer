const urlBtn = document.getElementById('urlBtn')
urlBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  const url = document.getElementById('inputUrl').value 
  const preResult = await fetch ('/url' , {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({url})
  })
  const result = await preResult.json()
  document.location.href = result.result.song_link
})
