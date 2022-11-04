const { User } = require("../models")


module.exports = {
    async getAllUsers(req,res){
        try {
          const data =  await User.find()
          res.json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
    async findOneUser(req,res){
      try {
        const data = await User.findById(req.params.userId)
        .populate("thoughts")
        .populate("friends")
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }  
    },
    async postUser(req,res){
      try{
        const data = await User.create(req.body)
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }
    },
    async putUser(req,res){
      try {
        const data = await User.findByIdAndUpdate(req.params.userId, req.body)
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }
    },
    async deleteUser (req,res){
      try {
        const data = await User.findByIdAndDelete(req.params.userId)
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }
    } ,
    async addFriend (req,res){
      try {
        const data = await User.findByIdAndUpdate(req.params.userId, {$addToSet:{freinds:req.params.friendId}})
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }
    },
    async removeFriend (req,res){
      try {
        const data = await User.findByIdAndUpdate(req.params.userId, {$pull:{freinds:req.params.friendId}})
        res.json(data)
      } catch (error) {
        res.status(500).json(error.message)
      }
    },
};


