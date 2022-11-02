
 const http = require("http");

 const server = http.createServer((request, response)=>{
    console.log("El servidor a recibido una solicitud")
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log(hour)
    if(hour>6 && hour<12){
        response.end("Buenos dias")
    } else if(hour>12 && hour<20){
        response.end("Buenas tardes")
    } else{
        response.end("Buenas noches")
    }
})

 server.listen(8080,()=>console.log("Servidor corriendo en el puerto 8080"));