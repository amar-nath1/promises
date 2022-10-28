const posts=[{title:'post one',body:'this is post one',createdAt:new Date().getTime()},{title:'post two',body:'this is post two',createdAt:new Date().getTime()}]
let intervalId=0
function getPosts(){
clearInterval(intervalId)
   intervalId= setInterval(()=>{

    let output=''

    posts.forEach((post)=>{
        output+=`<li>${post.title} last edited At ${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`

    })

    document.body.innerHTML=output

},1000)
}

function createPost(post){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt:new Date().getTime()})
            const error=false
        if (!error){resolve()}
        else{reject('Error: Something went wrong.')}
    
        },2000)


    })
}

function deletepost(){

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{if (posts.length>0){

            resolve(posts.pop())
        }
        else{reject('post block is empty')}},1000)      
    })
}

function lastUserActivityTime(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve(`Last User Activity Time ${(new Date().getTime())}`)
        },2000)
        

    })
}


    
    // deletepost().then(()=>{

    //     getPosts()
    //     deletepost().then(()=>{

    //         getPosts()
    //         deletepost().then(()=>{

    //             getPosts()
    //             deletepost().then(()=>{})
    //             .catch((err)=>{console.log('Inside Catch Block', err)})

    //         }).catch(()=>{})
    //     }).catch(()=>{})
    // }).catch(()=>{})



// createPost({title:'post four',body:'this is post four'}).then(()=>{
//     getPosts()
//     setTimeout(()=>{deletepost()},1000)
//     })

// promise.all



Promise.all([createPost({title:'post three',body:'this is post three'}),lastUserActivityTime()]).then((a)=>{

    getPosts()
    console.log(a[1])
}).then(()=>{deletepost()})




