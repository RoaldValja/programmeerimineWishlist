const date = require('../getDate.js');
const shuffle = require('../shuffle.js');
const mongoose = require('mongoose');

const WishFromMongo = mongoose.model('Wish');

const Wish = require('../models/wish');

let lastRandom = {};

exports.getHomePage = (req, res) => {
    let today = date.getTodayDateShort();
    WishFromMongo.find((error, wishes) => {
        if(!error){
            console.log(wishes);
            wishes = shuffle.fisherYatesShuffle(wishes);
            res.render('index.ejs', {date: today, wishlist: wishes, permission: "user"});
        } else {
            console.log(error);
        }
    });
}

exports.getAdminPage = (req, res) => {
    let today = date.getTodayDateShort();
    WishFromMongo.find((error, wishes) => {
        if(!error){
            console.log(wishes);
            wishes = shuffle.fisherYatesShuffle(wishes);
            res.render('index.ejs', {date: today, wishlist: wishes, permission: "admin"});
        } else {
            console.log(error);
        }
    });
}

exports.getRandomWish = (req, res) => {
    let today = date.getTodayDateShort();
    WishFromMongo.aggregate(
        [{ $sample: { size: 2 } }]
    )
    .then(result => {
        console.log(result);
        if(lastRandom.wish == result[0].wish || lastRandom.image == result[0].image){
            lastRandom = result[1];
            result.splice(0, 1);
        } else {
            lastRandom = result[0];
            result.splice(1, 1);
        }
        res.render('index.ejs', {date: today, wishlist: result, permission: "random"});
    })
    .catch(error => {
        console.log(error);
    });
}

exports.postNewWish = (req, res) => {
    const userWish = req.body.newWish;
    const wishDescription = req.body.description;
    const wishImage = req.file.filename;

    let newWish = new WishFromMongo();
    newWish.wish = userWish;
    newWish.imageDescription = wishDescription;
    newWish.image = wishImage;

    newWish.save((error, response) => {
        if(!error){
            console.log(response);
            res.redirect('/admin');
        } else {
            console.log(error);
        }
    });
}

exports.postDeleteWish = (req, res) => {
    const checkedWishId = req.body.checkbox;

    WishFromMongo.findByIdAndRemove(checkedWishId, (error) => {
        if(!error){
            res.redirect('/admin');
        } else {
            console.log("Failed to delete.");
        }
    });
}