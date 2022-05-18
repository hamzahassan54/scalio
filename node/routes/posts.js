const express = require('express');
const app = express();
const router = express.Router();
const postJson = require('../postdata.json')



router.get("/posts/:id", (req, res) => {
    var id = req.params.id
    try {

        var postData = postJson.filter(data => {
            return data.id == id
        });

        if (postData[0].body && postData[0].title) {
            res.status(200).send(postData);
        }
    } catch (error) {
        res.status(404).send(`Failed to find an employee: ID ${id}`);
    }
});

module.exports = router;