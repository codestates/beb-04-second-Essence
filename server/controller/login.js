const express = require('express');
const router = express.Router();
const lightwallet = require("eth-lightwallet");
const { User } = require("../models");
const Web3 = require("web3");

const web3 = new Web3("http://localhost:7545");

exports.login = async(req,res) => {
  // 포스트맨에서 userName, password를 넣으면
  let reqUserName, reqPassword;
  reqUserName = req.body.userName;
  reqPassword = req.body.password;

  // user에서 find로 userName을 찾고,
  User.findOrCreate({
    where: {
      userName: reqUserName
    },
    default: {
      password: reqPassword
    }
  })
  .then(([User, created]) => {
    if (!created) {
      // 있으면 있다고 응답
      res.status(200).json({
        loginSuccess: true,
        message: "로그인 되셨습니다.",
      });
    // 없으면 DB에 저장
    } else {
      // 니모닉코드 생성  
      let wallet = web3.eth.accounts.create();
      console.log(wallet)
      const newAccount = User.update(
        {
          username: reqUserName,
          password: reqPassword,
          address: wallet.address,
          privateKey: wallet.privateKey,
          balance: "0",
        }, {
            where: {
              userName: reqUserName
            }
          })
          .then(result => {
            // 주소를 보여준다
            res.json(wallet.address);
          })
          .catch(err => {
            console.error(err);
          })
        };
      });
  };