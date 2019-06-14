'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonajeSchema = Schema({
    id: String,
    male: Boolean,
    house: String,
    slug: String,
    name: String,

});

module.exports = mongoose.model('Personaje', PersonajeSchema)