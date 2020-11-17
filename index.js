const app = require('./src/app')
const db = require('./src/database')

app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'))
})