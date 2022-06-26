const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
const { sequelize } = require('./models');
//
//app.set('port', process.env.PORT || 4000);

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
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