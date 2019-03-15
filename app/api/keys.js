var mongoose = require('mongoose')

module.exports = function (app) {
    var keys = {};

    keys.save = async (req, res) => {
        try {
            let result = await 'ToDo'
            rres.status(200).json('Key registred');
        } catch (error) {
            res.status(500).json('Key is not registred');
        }
    },
    keys.search = async (req, res) => {
        try {
            let result = await 'ToDo'
            rres.status(200).json('not seach allow');
        } catch (error) {
            res.status(500).json('not to allow');
        }        
    },
    keys.delet = async (req, res) => {
        try {
            let result = await 'ToDo'
            rres.status(200).json('Key registred');
        } catch (error) {
            res.status(500).json('Key is not registred');
        }        
    }
}