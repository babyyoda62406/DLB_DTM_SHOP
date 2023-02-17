const fileUpload = require("express-fileupload")
const express = require("express")
const cors = require("cors")
const { db } = require('../db/conexion')
const hbs = require("hbs")

class Server {
    constructor(arg) {
        this.__port = arg
        this.app = express()
        this.middlewares()
        this.upDB()

        this.routes()
        this.run()
    }

    middlewares() {
        // cors
        this.app.use(cors())

        // Lectura y parseo del Body
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        // File Upload
        this.app.use(fileUpload({
            useTempFiles: false,
            tempFileDir: "/temp/"
        }))

        // Protocolos de seguridad 
        

        // hvs
        this.app.set('view engine', 'hbs')
        hbs.registerPartials(this.getDirection('/views/partials'))
        
        // Directorio publico
        this.app.use(express.static('public'))
    }

    async upDB() {
        return // La base de datos esta desconectada por el momento
        try {
            await db.authenticate()
            console.log("DB Online")
        } catch (err) {
            console.log("Error al conectar con la BD\n\n")
            console.log(err)
            throw new Error("\n\nNo se ha podido conectar con la base de datos")
            
        }
    }

    routes() {
        // Rutas HBS
        this.app.use("/" , require('../routes/hbs'))
        // Ritas Get
        this.app.use("/", require("../routes/get"))
        // Rutas Post
        this.app.use("/", require("../routes/post"))
    }


    run() {
        this.app.listen(this.__port, (arg) => {
            console.log(`Server run in port ${this.__port}`)
        })
    }

    getDirection(dir) {
        return  __dirname.substring(0, __dirname.length - 7) + dir
    }

}

module.exports = Server 