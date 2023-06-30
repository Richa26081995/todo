import React, { useState } from "react";
const Todo = () =>{
    // state
    const [inputdata,setInputdata]=useState('');
    const [displaydata,setDisplaydata] = useState([]);

// function
 const addHandler = (e) =>{
setInputdata(e.target.value)
    }

    const addClickHandler = ()=>{
   setDisplaydata((prev)=>{
return [...prev,inputdata]
   })
   setInputdata('')
    }
return(
   
    <>
    
    <div className="container">
        <h3>Todo App📝📔</h3>
        <br/>
        <form>
            
            <input type="text" className="" placeholder="Add Item ✍️" onChange={addHandler} value={inputdata} />
            <button type="button" class="btn btn-success" onClick={addClickHandler}>Add</button>
            
        </form>
        <table class="table">
  <thead class="table-dark">
  <tr>
      <th scope="col">S.no</th>
      <th scope="col">Item</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
  
      { displaydata.map((item,index)=>{
        return(
            <>
      <tr>      
     <th scope="row" key={index}>{index+1}</th>
      <td>{item}</td>
      <td>
      <button type="button" className="btn btn-primary mx-2">Edit</button>
      <button type="button" className="btn btn-danger">Delete</button>
      </td>
      </tr>
            </>
           
        )
       
      })
     
      }
      
    

  </tbody>
</table>
    </div>
    </>
)
}
export default Todo;