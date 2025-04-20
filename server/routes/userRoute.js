const express=require('express')
const router=express.Router()
const User=require('../models/userModel')

router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    const newUser=new User({name,email,password})

    try{
        newUser.save()
        res.send('user registerd successfully')
    }
    catch(error){
        return res.status(400).json({message:error})
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await User.findOne({ email, password });
      if (user) {
        res.json({
          _id: user._id, // ✅ Include this!
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  });

router.get('/getallusers',async(req,res)=>{
    try {
        const users=await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post('/deleteuser',async(req,res)=>{
    const userid=req.body.userid
    try {
        await User.findOneAndDelete({_id:userid})
        res.send('User deleted successfully')
    } catch (error) {
        res.status(400).json({message:error})
    }
})

module.exports=router