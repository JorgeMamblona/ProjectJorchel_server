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
        .catch(err => console.log(err))
}

const getParentComments = (req, res, next) => {

    const { parent } = req.body
    console.log(parent)
    Comment
        .find({ parent })
        .then(response => res.json(response))
        .catch(err => console.log(err))

}

module.exports = {
    create,
    getParentComments
}