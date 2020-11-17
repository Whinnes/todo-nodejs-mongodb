const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tododb2', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then((db)=> console.log('DB is connected'))
.catch((err)=> console.log(err))
