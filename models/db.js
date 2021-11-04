const mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost:27017/WishlistDB',
{ useNewUrlParser: true, useUnifiedTopology: true});
*/
//mongodb+srv://<username>:<password>@arhitektuurk5.khrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://Roald:kkPgSYbuNSf0Pi8Y@arhitektuurk5.khrrd.mongodb.net/wishlistDB',
{ useNewUrlParser: true, useUnifiedTopology: true});
require('./wish');