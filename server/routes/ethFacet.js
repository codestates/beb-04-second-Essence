const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const { User } = require("../models");
require("dotenv").config();
const env = process.env;
const web3 = new Web3('http://localhost:7545');

router.post("/", (req, res) => {
  let reqUserName, reqPassword;
  reqUserName = req.body.userName; //서버만받도록
  reqPassword = req.body.password;

  if (reqUserName === "server") {
    User
      .findOne({
        where: {
          userName: reqUserName,
          password: reqPassword,
        },
      })
      .then((result) => {
        if (result == null) {
          res.status(502).send({ message: "Error Transaction Failed" });
        } else {
          //console.log("private key가",result.dataValues)
          const server = web3.eth.accounts.privateKeyToAccount(result.dataValues.privateKey); //검색한 사용자의 프라이빗키
          
          const ganache = web3.eth.accounts.privateKeyToAccount(env.GANACHE_PRIVATEKEY); //가나슈의 프라이빗키
          //console.log(ganache)
          web3.eth.accounts
            .signTransaction(
              //서명 후 전송처리
              {
                to: server.address,
                value: '1000000000000000000',
                gas: 2000000,
              },
              ganache.privateKey
            )
            
            .then((value) => {
              console.log("value값",value)
              return value.rawTransaction;
            })
            
            .then(async (tx) => {
              web3.eth.sendSignedTransaction(tx, async function (err, hash) {
                if (!err) {
                  const addressBalance = await web3.eth.getBalance(
                    result.dataValues.address
                  );
                  //console.log("이게 머지",value.rawTransaction)
                  res.status(200).send({
                    message: "Faucet Successed",
                    data: {
                      username: reqUserName,
                      address: result.dataValues.address,
                      balance: addressBalance,
                      txHash: hash,
                    },
                  });
                } else {
                  console.log("transfer failed!");
                }
              });
            });
        }
      });
  } else {
    res.status(501).send({ message: "You are not server" });
  }
});

module.exports = router;