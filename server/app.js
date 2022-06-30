const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 5001;
const path = require('path');
const Web3 = require('web3');
const { sequelize } = require('./models');
//
//app.set('port', process.env.PORT || 4000);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

  function getWeb3() { 
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    return web3;
}

async function getAccounts() {
    try {
        const accounts = await getWeb3().eth.getAccounts(); 
        console.log(accounts);
        return accounts;
    } catch (e) {
        console.log(e);
        return e;
    }
}

app.get('/', (req, res) => {
    getAccounts().then((accounts) => {
        res.send(accounts);
    })
});


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
app.use('/', indexRouter);

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});



