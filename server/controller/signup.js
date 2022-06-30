const express = require('express');
const router = express.Router();
const lightwallet = require("eth-lightwallet");
const { User } = require("../models");
const Web3 = require("web3");

const web3 = new Web3("http://localhost:7545");

router.post("/", async(req,res) => {
  // 포스트맨에서 userName, password를 넣으면
  let reqUserName, reqPassword, reqEmail;
  reqUserName = req.body.userName;
  reqPassword = req.body.password;
  reqEmail = req.body.email;
 console.log("성공") // user에서 find로 userName을 찾고,
  User.findOrCreate({
    where: {
      email:reqEmail
    },
    default: {
      password: reqPassword
    }
  })
  .then(([User, created]) => {
    if (!created) {
      // 있으면 있다고 응답
      res.status(409).json({
        message: "Error: Email Already Exists",
      });
    // 없으면 DB에 저장
    } else {
      let wallet = web3.eth.accounts.create();
      console.log(wallet)
      const newAccount = User.update(
        {
          userName: reqUserName,
          password: reqPassword,
          email:reqEmail,
          address: wallet.address,
          privateKey: wallet.privateKey,
          balance: "0",
        }, {
            where: {
              email:reqEmail
            }
          })
          .then((result) => {
            // 주소를 보여준다
            res.status(201).send({
             message: "회원가입이 성공했습니다."
          })
        })
          .catch(err => {
            console.error(err);
          })
          
        };
      });
      console.log(res)
  });

  module.exports = router;