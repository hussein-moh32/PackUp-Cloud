var express = require('express');
var router = express.Router();
const Members = require('../schemas/members.schema')


/* GET user info */
router.get('/', async function(req, res, next) {
  const { _id } = req.body
  const member =  await Members.findById(_id)
  res.send(member);
});


router.post('/',async function (req, res, next) {
const { userName, psasword, email, firstName, sureName,  birthDate } = req.body 

const newMember = await Members.create({
  
    userName,
    firstName,
    email,
    psasword,
    sureName,
    birthDate,
    createdAt : new Date()
})
res.send(newMember);


})


router.post('/Registration',async function (req, res, next) {
  const { userName, psasword} = req.body 
  
  // Check member
  const member = await Members.findOne({
    
      userName,
      psasword
      
  })
  console.log(userName);

  if(member){
    res.send({state: 'done'});
    console.log(member)

  }else{

    res.send({state: 'Error Data'});
  }
  
  
  
  })
  

router.put('/',async function (req, res, next) {
  const { _id, userName, psasword, email, firstName, sureName,  birthDate } = req.body 
  
  const newMember = await Members.findByIdAndUpdate(_id,{
        userName,
        psasword,
        email,
        firstName,
        sureName,
        birthDate,
        
        },{new: true})

    res.send(newMember);
  })


router.delete('/',async function (req, res, next) {
  const { _id} = req.body 
  
  const newMember = await Members.findByIdAndUpdate(_id,{
   
   
    isVisible: false


        },{new: true})

    res.send(newMember);
  })
  

module.exports = router;
