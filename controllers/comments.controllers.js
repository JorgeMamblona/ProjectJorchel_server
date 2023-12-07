const Comment = require("../models/Comment.model")

const create = (req, res, next) => {

    const { _id: owner } = req.payload

    const {
        parent,
        scope,
        content,
    } = req.body

    Comment
        .create({
            owner,
            parent,
            scope,
            content
        })
        .then(response => res.status(201).json(response))
        .catch(err => next(err))
}

const getParentComments = (req, res, next) => {

    const { parent } = req.body
    console.log(parent)
    Comment
        .find({ parent })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    create,
    getParentComments
}