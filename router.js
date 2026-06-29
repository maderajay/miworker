// router.js 
// Importa los manejadores de ruta necesarios. 
import { getTodo } from  "./routes/todoRoute.js" ; 
import { getMedia } from  "./routes/mediaRoute.js" ; 

export  async  function  routeRequest ( request, env, ctx ) { 
    // Analiza la URL para extraer la ruta. 
    const url = new  URL (request. url ); 
    const path = url. pathname . split ( "/" ). slice ( 1 ); 

    // Enruta la solicitud según el primer segmento de la ruta. 
    switch (path[ 0 ]) { 
        case  "todo" : 
            // Maneja la ruta '/todo'. 
            return  getTodo (request, ctx); 
        case  "media" : 
            // Maneja la ruta '/media'. 
            return  getMedia (); 
        default : 
            // Caso predeterminado, devuelve una respuesta 404 no encontrada. 
            return  new  Response ( "No encontrado" , { status : 404 }); 
    } 
}