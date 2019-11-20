import React ,{useState, useEffect} from "react";
import axios from "axios"
import Form from "./Form"
import List from "./List"
 
 
const App=()=>{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all").then(result=>{
            // console.log(result.data)
            // setlist(JSON.stringify(result.data))
            setlist(result.data)
        })
    },[])
    const searchproccess=(searchtype,searchelement)=>{
      if((searchtype.length===0)||(searchelement.length===0)||(searchtype==="Search by")){
        alert("Recheck your Search by & Input")
      }else{
        if(searchtype==="Country"){
          searchtype="name"
        }else{
          if(searchtype==="Region"){
            searchtype="region"
          }else{
            searchtype="capital"
          }
      } 
      axios.get("https://restcountries.eu/rest/v2/"+searchtype+"/"+searchelement).then(results=>{
        setlist(results.data)
    })
      }
    }
  return(
    <div className="container">
      <div className="container" style={{background:"black",paddingTop:"10px",position:"fixed",paddingBottom:"10px"}}>
      <Form searchvalue={searchproccess}/></div>
    <br></br>
    <div className="container" style={{paddingTop:"110px"}}>
    <List listdata={list}/>
    </div>
    </div>
  );
}
export default App
{/* <List items={title}/> */}

 