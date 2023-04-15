import React, {useState} from "react";
import TextFeild from "../components/TextFeild";

export default function Signin() {
    const[data, setData]=useState({})
    function handleChange(e) {
        const {id,value}=e.target;
        let dataCopy={
            ...data
        }
        dataCopy[id]=value
        setData(dataCopy)
    }
    return <div className ="container">
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                
                   <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                        
                        <TextFeild label="Email" placeholder="Enter your email id" id="email"
                         onChange={handleChange} type="email" />
                        <TextFeild label="Password" placeholder="**********" id="password"
                         onChange={handleChange} type="password" />
                            <div className="d-flex h-100vh flex-column justify-content-center"
                            style={{height:"100%"}}>
                                <button 
                                className={`btn btn-primary btn-sm`}
                                onClick={()=>{}}>Signin</button> 
                            </div>
                        </div>
                
                   
                </div>
         </div>
         </div>
         </div>
}        
// <input onChange={(e)=>{console.log(e.target.value)}} placeholder="Enter your email id" />
// <input onChange={(e)=>{console.log(e.target.value)}} placeholder="Enter password" />
// <div class="mb-3">
//<label for="password" class="form.label">Password</label>
//<input type="password" class="form.control" id="password"
 //onChange={(e)=>{console.log(e.target.value)}}
 //placeholder="**********"></input>
//</div>
// {/* <div class="mb-3">  */}
//<label for="email" class="form.label">Email</label>
//<input type="email" class="form.control" id="email"
//onChange={(e)=>{console.log(e.target.value)}} 
 //placeholder="Enter your email id"></input>
//</div>