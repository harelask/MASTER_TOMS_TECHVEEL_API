const express = require("express");
const SalesDetailsController = require("../../Toms_Techveel_Controller/TransactionController/SalesDetailsController");

const router = express.Router();
const jwt = require("jsonwebtoken");
function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

router.get("/GetAllSalesDetails", verifytoken, SalesDetailsController.GetAllSalesDetails);
router.get("/GetOneSalesDetails/:id", verifytoken, SalesDetailsController.GetOneSalesDetails);
router.post("/InsertSalesDetails", verifytoken, SalesDetailsController.InsertSalesDetails);
router.put("/UpdateSalesDetails/:id", verifytoken, SalesDetailsController.UpdateSalesDetails);
router.delete("/DeleteSalesDetails/:id", verifytoken, SalesDetailsController.DeleteSalesDetails);

module.exports = {
  Toms_Techveel_Route: router,
};
