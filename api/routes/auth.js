const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) =>{
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        hobby: req.body.hobby,
        profilePic: req.body.profilePic
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
