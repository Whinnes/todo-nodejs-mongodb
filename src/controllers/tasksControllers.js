const Tasks = require('../models/taskModel')
const tasksController = {}


tasksController.listTasks = async(req, res)=>{
    await Tasks.find({},(err, tasks)=>{
        if(err)
            res.send(err)
        res.render('index.ejs',{tasks})
    })
}

tasksController.listTask = async(req, res)=>{
    await Tasks.findById({_id: req.params.id},(err, tasks)=>{
        if(err)
            res.send(err)
        res.render('index.ejs',{tasks})
    })
}

tasksController.addtasks = (req, res)=>{
    res.render('addtask.ejs')
}

tasksController.editTask = async(req, res)=>{
    await Tasks.findById({_id: req.params.id},(err, task)=>{
        if(err)
            res.send(err)
        res.render('edittask.ejs',{task})
    })
}

tasksController.createTask = (req, res)=>{
    const newTask = new Tasks(req.body)
    newTask.save((err,task)=>{
        if(err)
            res.send(err)
        res.redirect('/')
    })
}

tasksController.updateTask = async(req, res)=>{
    await Tasks.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true},(err, task)=>{
        if(err)
            res.send(err)
        res.redirect('/')
    })
}

tasksController.deleteTask = (req, res)=>{
    Tasks.findByIdAndDelete({_id: req.params.id},(err)=>{
        if(err)
            res.send(err)
        res.redirect('/')
    })
}

module.exports = tasksController

