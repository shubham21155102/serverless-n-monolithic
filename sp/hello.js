module.exports.handler=async(event)=>{
    return {
        statusCode:200,
        body:JSON.stringify({
            message:"Hello world"
        }),
        headers:{
            'Content-Type':'application/json'
        }
    }
}