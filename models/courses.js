var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
	suscribers:Object,
    elements:Array,
    tasks:Array,
    vr_tasks:Array
});

module.exports = mongoose.model('Courses', CourseSchema, 'Courses');