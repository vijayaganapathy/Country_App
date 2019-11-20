import React from "react";
 
const List=(props)=>{
    return(<div className="container">
        <table className="table">
            <thead style={{background:"black",color:"white"}}>
                <th>Id</th>
                <th>Country</th>
                <th>Region</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Flag</th>
            </thead>
            <tbody style={{background:"white",color:"black"}}>
                {
                    props.listdata.map((i,id)=>{
                        return(
                            <tr key={i.id}>
                                <td style={{background:"lightgrey"}}><b>{id+1}</b></td>
                                <td>{i.name}</td>
                                <td>{i.region}</td>
                                <td>{i.capital}</td>
                                <td>{i.population}</td>
                                <td>
                                <img style={{height:"30px",width:"50px"}} src={i.flag}/></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>)
}
export default List
 