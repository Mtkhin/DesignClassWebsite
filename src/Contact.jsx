import React,{useState} from 'react';
import Datas from './Datas';


const Contact=()=> {
    const[data,setDatas]=useState({

       fullname:'',
       phone:''
    })
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setDatas((preVal)=>{
            return {
                ...preVal,
                [name]:value,

            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        alert(`${data.phone}`)
    }
  return (
      <div>
      <div className="my-5">
      <h1 className="text-center">Contact us for more Info</h1>
      </div>
      <div className="container contact_div">
      <div className="row">
      <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">FullName</label>
      <input type="text" name="fullname" onChange={inputEvent} value={data.fullname} class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Phone</label>
      <input type="text"  name="phone" onChange={inputEvent} class="form-control" value={data.phone} id="exampleFormControlInput1" placeholder="Enter your Mobile Number" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Email</label>
      <input type="email"  name="email" onChange={inputEvent} class="form-control" value={data.email} id="exampleFormControlInput1" placeholder="Enter your Email Address" />
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="col-12">
  <button type="submit" class="btn btn-outline-primary">SUBMIT FORM</button>
  </div>
      </form>
      
      
      </div>
      </div>
      </div>
      </div>
   
  );
}

export default Contact;