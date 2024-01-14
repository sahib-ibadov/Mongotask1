const express = require("express")

const router = express.Router()
const { ControllerProduct } = require("../Controller/Product.controller")

router.get("/", ControllerProduct.getAll)
router.get("/:id", ControllerProduct.getById)
router.post("/", ControllerProduct.add)
router.put("/:id", ControllerProduct.edit)
router.delete("/:id", ControllerProduct.delete)


module.exports = router

