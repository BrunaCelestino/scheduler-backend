const ScheduleSchema = require('../models/schedule');
const mongoose = require('mongoose');



const create = async (req, res) => {
    const {
        activity,
        date,
        time,
        owner,
        place,
        solved,
        status
    } = req.body;
    try {

        const newSchedule = new ScheduleSchema({
            activity,
            date,
            time,
            owner,
            place,
            solved,
            status
        });

        await newSchedule.save();

        return res.status(201).json({
            message: 'New schedule successfully created'
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findAll = async (res) => {
    try {
        const allSchedules = await ScheduleSchema.find();

        return res.status(200).json({
            allSchedules,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

const update = async (req, res) => {
    const {
        activity,
        date,
        time,
        owner,
        place,
        solved,
        status
    } = req.body;

    try {

        const scheduleFound = await ScheduleSchema.findById(req.params.id);

        if (scheduleFound === null) {
            return res.status(404).json({
                message: 'The schedule update have failed'
            });
        }

        scheduleFound.activity = activity || scheduleFound.activity;
        scheduleFound.date = date || scheduleFound.date;
        scheduleFound.time = time || scheduleFound.time;
        scheduleFound.owner = owner || scheduleFound.owner;
        scheduleFound.place = place || scheduleFound.place;
        scheduleFound.solved = solved || scheduleFound.solved;
        scheduleFound.status = status || scheduleFound.status;

        await scheduleFound.save();

        return res.status(200).json({
            message: 'Schedule successfully updated.'
        });



    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const erase = async (req, res) => {
    try {
        const findSchedule = await ScheduleSchema.findById(req.params.id);

        if (!findSchedule) {
            return res.status(404).json({
                message: 'We could not find the schedule.'
            });
        }

        await findSchedule.delete();

        return res.status(200).json({
            message: 'Schedule successfully deleted.'
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    create,
    findAll,
    update,
    erase
};