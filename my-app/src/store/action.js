export function setData(payload){
    return {type:"SETDATA", payload}
}

export function setLoading(payload){
    return {type:"SETLOADING", payload}
}

export function setError(payload){
    return {type:"SETERROR", payload}
}

export function fetchFlag(payload){
    return (dispatch)=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>{
            for(let i = 0 ; i < data.length;i++){
                // console.log(data[i])
                dispatch(setData(data))
            }
            
        })
        .catch(err=>console.log(err))
    }
}   