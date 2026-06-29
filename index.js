import { routeRequest } from  "./router.js" ; 
//import { scheduledTasks } from "./scheduledTasks.js"; 

export  default { 
    async  fetch ( request, env, ctx ) { 
        return  routeRequest (env, request); 
    }, 

    /*async scheduled(event, env, ctx) { 
        ctx.waitUntil(scheduledTasks(env)); 
    }*/
 };