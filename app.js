if('serviceworker' in navigator){
    navigator.serviceWorker.register("sw.js").then(reg=>{
        console.log("worker is registered in scope:",reg.scope)

    }).catch(err =>{
        console.log("worker is not registered:",err)
    })
}