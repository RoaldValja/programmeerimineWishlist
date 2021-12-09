
const mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost:27017/WishlistDB',
{ useNewUrlParser: true, useUnifiedTopology: true});
*/
//mongodb+srv://<username>:<password>@arhitektuurk5.khrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI,
{ useNewUrlParser: true, useUnifiedTopology: true});
require('./wish');