
let btn = document.querySelector('button')
let url = document.getElementById('userUrl')

btn.addEventListener('click', function (e) {
  e.preventDefault()

  let userUrl = url.value

  if (!userUrl) {
    alert("Campo de URL vazio !")
    document.getElementById('imageQRCode').src = "";
    return
  }

  let GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  let imagemQRCode = GoogleCharts + userUrl;

  document.getElementById('imageQRCode').src = imagemQRCode;
  url.value = ""
})



