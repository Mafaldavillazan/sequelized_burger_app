var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {

            var hbsObject = {
                burgers: results
            };

            console.log("object =" + JSON.stringify(hbsObject))

            res.render("index", hbsObject);

        }).catch(function (err) {
            console.log("Error:", err);
            res.sendStatus(500);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        }).catch(function (err) {
            console.log("Error:", err);
            res.sendStatus(500);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        //burger.updateOne({devoured: req.body.devoured}, {id: req.params.id}, function (result) {
        db.Burger.update({
            devoured: 1
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    });
}