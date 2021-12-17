var express = require('express');
var router = express.Router();
const Uploadedfiles = require('../schemas/uploadedfiles.schema')


/* GET File info. */
router.get('/', async function(req, res, next) {
  const { member } = req.body
  const uploadedfiles =  await Uploadedfiles.find({
    member
  })
  res.send(uploadedfiles);
});



/* Add new users. */
router.post('/',async function (req, res, next) {
const { userID, fileName, file, size, downloadNum, fileType } = req.body 
const newFile = await Uploadedfiles.create({

    userID,
    fileName,
    file,
    size,
    downloadNum,
    fileType,
    createdAt : new Date()
})
res.send(newFile);


})




/* Update users. */
router.put('/',async function (req, res, next) {
  const { _id, userID, fileName, file, size, downloadNum, fileType } = req.body 
  
  const newFile = await Uploadedfiles.findByIdAndUpdate(_id,{
          userID,
          fileName,
          file,
          size,
          downloadNum,
          fileType,
        },{new: true})

    res.send(newFile);
  })




/* Delete users. */
router.delete('/',async function (req, res, next) {
  const { _id} = req.body 
  
  const newFile = await Uploadedfiles.findByIdAndUpdate(_id,{
   
   
    isVisible: false


        },{new: true})

    res.send(newFile);
  })
  

module.exports = router;
