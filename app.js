const express=require('express'); // para requerir el modulo express dentro de mi proyecto
const app=express(); // para Utilizar las funciones de express
const path=require('path')

app.use(express.static('/mercadoliebre'))


app.get('/', (req,res)=>{ // localhost:3000
    res.status(200).sendFile(path.join(__dirname,'views/home.html'))
});

app.get('/login', (req,res)=>{ // localhost:3000
    res.status(200).sendFile(path.join(__dirname,'views/login.html'))
});

app.get('/register', (req,res)=>{ // localhost:3000
    res.status(200).sendFile(path.join(__dirname,'views/register.html'))
});

app.listen(process.env.PORT || 3000,()=>{ // SI EN CONSOLA TIRA  LO DEL CONSOLE.LOG, VA TODO PERFECTO
    console.log("Servidor corriendo en host 3000")
});
