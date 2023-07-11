import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const AddStudent = () => {

  const navigate = useNavigate()

  const [student, setStudent] = useState({
    name: '',
    email: '',
    password:'',
    batch: '',
  })
  

  const handleChange = (e) => {
    setStudent((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addstudent()
    console.log(student);
    navigate('/')
  }
  


  
  async function addstudent(){
    await axios.post('http://localhost:5000/api/student',student)
    .then(()=>{
      console.log("Student added Successfully")
    }).catch((err)=>{
       console.log("error in post")
    })
  }

  return (

    <div> 

      <form onSubmit={handleSubmit}>
        <h3>ADDING A CONTACT</h3>
        <div>
          <h5>NAME</h5>
          <input name='name'
            placeholder='name'
            value={student.name}
            onChange={handleChange} />
        </div>
        <div>
          <h5>EMAIL</h5>
          <input name='email'
            placeholder='Email'
            value={student.email}
            onChange={handleChange} />
        </div>
        <div>
          <h5>PASSWORD</h5>
          <input name='password'
            placeholder='password'
            value={student.password}
            onChange={handleChange} />
        </div>
        <div>
          <h5>BATCH</h5>
          <input name='batch'
            placeholder='batch'
            value={student.batch}
            onChange={handleChange} />
        </div>
        <br />
        <button type='submit'>Add Student</button>

      </form>

    </div>
  )
}
