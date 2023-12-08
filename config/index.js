const express = require("express")

const logger = require("morgan")

const cookieParser = require("cookie-parser")

const cors = require("cors")

const FRONTEND_URL = '*'

module.exports = (app) => {

  app.set("trust proxy", 1)

  app.use(
    cors(

    )
  )

  app.use(logger("dev"))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
}
