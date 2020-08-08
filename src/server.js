// Data of application

const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "11992418795", 
        bio: "<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time: "", 
        time_from: [720], 
        time_to: [1220] 
    },
    { 
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "11992418795", 
        bio: "<p>Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>", 
        subject: "Matemática", 
        cost: "20", 
        weekday: [2], 
        time: "", 
        time_from: [720], 
        time_to: [1220] 
    },
    { 
        name: "Edu Louzada", 
        avatar: "https://avatars1.githubusercontent.com/u/69180608?s=460&u=8853dd22d2070d8c0f2f50388ae7b38b9be68833&v=4", 
        whatsapp: "11992418795", 
        bio: "<p>Super antenado em tudo que acontece no cenário de Tecnologia e Design, seu lema é que tudo mudo, então bora mudar.<br><br>Focado em agregar experiência na vida do aluno de forma divertida, já ajudou mais de 10.000 pessoas pelo maravilhoso mundo do Design.</p>", 
        subject: "Design", 
        cost: "20", 
        weekday: [4], 
        time: "", 
        time_from: [720], 
        time_to: [1220] 
    }
] 

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Functions of application (page routes)

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters =req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    const data = req.query
    //console.log(data)
    const isNotEmpty = Object.keys(data).length > 0
    //Se tiver dados
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        
        //Adicionar dados à lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    // If not, show the page
    return res.render("give-classes.html", { subjects, weekdays })
}

// Server
const express = require('express')
const server = express()

// Config nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views' , {
    express: server,
    noCache: true,
    autoescape: false, // Permite colocar tags html dentro das variaveis
})

// Init and config to server
server
// Config static files (css, scripts, imgs)
.use(express.static("public"))
// Routes at application
.get("/" , pageLanding)
.get("/study" , pageStudy)
.get("/give-classes" , pageGiveClasses)
// Start server
.listen(5000)
