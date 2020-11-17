const router = require('express').Router()
const tasks = require('../controllers/tasksControllers')

router.get('/',tasks.listTasks)
router.get('/add',(req,res)=>{
    res.render('addtask.ejs')
})
router.get('/:id',tasks.listTask)
router.post('/',tasks.createTask)
router.get('/edit/:id',tasks.editTask)
router.post('/edit/:id',tasks.updateTask)
router.get('/delete/:id',tasks.deleteTask)

module.exports = router