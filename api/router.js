const express = require('express');
const router = express.Router();
const db = require('../data/nflTeamsModel');

router.get('/', (req, res) => {
    db
        .getAll()
        .then(teams => {
            res.status(200).json(teams);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const team = req.body;
    db
        .insert(team)
        .then(team => {
            res.status(201).json(team);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db
        .remove(id)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
 