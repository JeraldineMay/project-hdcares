const patientSchema = require('../schema/Patients')
const mongoose = require('mongoose')

const Patients = mongoose.model('Patient', patientSchema)

module.exports = Patients