// function hello(){
//     return []
// }
//ye simple func bhi ek custom hook hai



import { useEffect,useState } from "react";
function use(currency){
    cosnt [data,setdata]=useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        
     },[currency])
     console.log(data);
     return data
     
}
export default use

//maximun time the value we get form api call is string 
//we hv to convert it into json format 