const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://PackUp-DB:_Packup123456789_@cluster0.lql2n.mongodb.net/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!");
});