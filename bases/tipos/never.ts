(()=>{
    const error = (mesage: string):never =>{
        throw new Error(mesage)
    }

    error('Auxilio');
    console.log('Hola mundo!')
})()