const {Thought} = require("../models")


module.exports = {
async getAllThoughts(req,res){
    try {
        const data = await Thought.find()
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
},
async findOneThought(req,res) {
    try {
        const data = await Thought.findById(req.param.thoughtId)
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
},
async postThought (req,res){
    try {
        const data = await Thought.findByIdAndUpdate(req.params.thoughtId, {$addToSet:{thoughts:req.params.userId}})
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
},
async postReaction (req,res){
    try {
        const data = await Thought.findByIdAndUpdate(req.params.thoughtId,{$addToSet:{reactions:req.params.reactionId}})
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
},
async removeReaction (res,req){
    try {
        const data = await Thought.findByIdAndUpdate(req.params.thoughtId,{$pull:{reactions:req.params.reactionId}})
        res.json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
}