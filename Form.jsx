import React ,{useState, useEffect} from "react";

const bgstyle={
    textAlign:"center",background:"black"
} 
 
const Form=(props)=>{
    const[searchitem,setsearchitem]=useState("");
    const[selecttype,setselecttype]=useState("");
    // const[hint,sethint]=useState("............")

    const searchdata=(e)=>{
    setsearchitem(e.target.value)
    }
    const selectsearch=(event)=>{
        setselecttype(event.target.value)
        // if(selecttype==="Search by"){
        //     sethint(".............")
        // }
        // if(selecttype==="Country"){
        //     sethint("enter country name")
        // }
        // if(selecttype==="Region"){
        //     sethint("enter region name")
        // }
        // if(selecttype==="Capital"){
        //     sethint("enter capital name")
        // }
    }
const startsearch=()=>{
    // console.log(props.datas)
    // console.log(searchitem);
    props.searchvalue(selecttype,searchitem);
}
     return(
         <div>
         <h1 style={bgstyle}><b style={{color:"white"}}>COUNTRY</b>
         <small className="text-muted"><b>App</b></small>
         </h1>
         <div className="row">
         <select className="col-md-3 btn btn-dark" style={{color:"white"}} onChange={selectsearch}>
             <option className="btn btn-dark" style={{color:"white"}}>Search by</option>
             <option className="btn btn-dark" style={{color:"white"}}>Country</option>
             <option className="btn btn-dark" style={{color:"white"}}>Region</option>
             <option className="btn btn-dark" style={{color:"white"}}>Capital</option>
         </select>
         <input className="col-md-6" placeholder="enter search key..." onChange={searchdata}></input>
         <button className="col-md-3 btn btn-dark btn-lg btn-block" onClick={startsearch}><b>SEARCH</b></button>
         </div>
         </div>
        )
}
export default Form
 