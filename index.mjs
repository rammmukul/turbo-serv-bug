import App from 'turbo-serv'

let app = new App()
let router = app.getRouter()

router.post('/', function () {
  let result = `�M]-JP)�w�Vk䲸\u0001�k��\u0002[�r媸�\u0016\r���X�)�Fh��\u001c^&�3\u001c�E�XJ�\u0006V\u0019�T�c\u000f�L\u0006 END`
  console.log(result.length, result)
  this.res.send(result)
})

app.listen()
