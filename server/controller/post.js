const express = require("express");
const router = express.Router();
const { Post } = require("../models");
const { User } = require("../models");

const Web3 = require("web3");
const web3 = new Web3("http://localhost:7545");
const tokenabi = require("../contract/tokenAbi");

router.post("/", async (req, res) => {
  const newPost = await Post.create({
    writer:req.body.writer,
    post_id: req.body.id,
    content: req.body.content,
    title:req.body.title,
  });

  const receipt = await User.findOne({
    where: {
      userName: req.body.writer,
    },
  });
  //console.log(receipt.address);
  const value = "10";
  const erc20Contract = await new web3.eth.Contract(
    tokenabi,
    process.env.ERC20_CONTRACT,
    {
      from: process.env.SERVER_ADDRESS,
    }
  );
  
  const server = await web3.eth.accounts.wallet.add(process.env.SERVER_SECRET);
 
  await erc20Contract.methods.mintToken(receipt.address, value).send({
    from: server.address,
    to: process.env.ERC20_CONTRACT,
    gasPrice: 100,
    gas: 2000000,
  })
  
  await User.increment(
    { balance: 1 },
    {
      where: {
        userName: req.body.writer,
      },
    }
  );
  try {
    res.status(201).json({
      message: "Posting Successed",
      data: newPost,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: Posting Failed",
    });
  }
});

router.patch("/update", async (req, res) => {
  await Post.update(
    { id: req.body.id, content: req.body.content },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  const updatedPost = await Post.findOne({
    where: {
      id: req.body.id,
    },
  });

  try {
    res.status(201).json({
      message: "update Successed",
      data: updatedPost,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error: update Failed",
    });
  }
});

router.post("/delete", async (req, res) => {
  await Post.destroy({
    where: {
      id: req.body.id,
    },
  }).then(
    res.status(200).json({
      message: "delete Successed",
    })
  );
});
module.exports = router;