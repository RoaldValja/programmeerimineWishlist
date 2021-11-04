const date = require('../getDate.js');
const mongoose = require('mongoose');

const WishFromMongo = mongoose.model('Wish');

const Wish = require('../models/wish');

exports.getHomePage = (req, res) => {
    let today = date.getTodayDateShort();
    WishFromMongo.find((error, wishes) => {
        if(!error){
            console.log(wishes);
            res.render('index.ejs', {date: today, wishlist: wishes, admin: false});
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
            res.render('index.ejs', {date: today, wishlist: wishes, admin: true});
        } else {
            console.log(error);
        }
    });
}

exports.postNewWish = (req, res) => {
    const userWish = req.body.newWish;
    let newWish = new WishFromMongo();
    newWish.wish = userWish;

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