import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from './Store'

const AddStudent = () => {
    const back = useNavigate()
    const addData = useContext(Store)


    const addNewData= {
      Name :'',
      Age: '',
      Batch:'',
      Course:''
    }


    function handleAdd(e){
      addNewData[e.target.name] = e.target.value

    }

    const handleAddUpdate = () =>{
      addData.data.push(addNewData)
      back('/student')

    }





  return (
    <>
       <div className='editStuTop'>
        <div>
       <label>Name : </label>
       <input name='Name' placeholder='Name' type='text' onChange={handleAdd}/>
       </div>
       <div>
       <label>Age : </label>
       <input name='Age' placeholder='Age' type='Number' onChange={handleAdd}/>
       </div>
       </div>
       

       <div className='editStudown'>
       <div>
       <label>Course</label>
       <input name='Course' placeholder='Course' type='text' onChange={handleAdd}/>
       </div>

       <div>
       <label>Batch</label>
       <input name='Batch' placeholder='Batch' type='text' onChange={handleAdd}/><br/>
       </div>
       </div>

       
       <div className='editStudentbtn'>
        <button onClick={()=>back('/student')}>CANCEL</button>
        <button onClick={handleAddUpdate}>SUBMIT</button>
       </div>
    </>
  )
}

export default AddStudent