const router = require("express").Router();
const User = require("../models/User");

//GET ALL USERS
router.get("/", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET A USER
router.get("/find/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


//UPDATE USER
router.put("/:id", async (req, res) =>{
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, {new: true});
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
        