import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Store from './Store';

const EditStudent = () => {
    const Navigate = useNavigate()
    const indexData = useLocation().state.index;
    const contextData = useContext(Store)
    // console.log(indexData);


    const updateData ={
      Name : contextData.data[indexData].Name,
      Age : contextData.data[indexData].Age ,
      Course : contextData.data[indexData].Course ,
      Batch : contextData.data[indexData].Batch
    }


    function handleChange(e){
      updateData[e.target.name] = e.target.value;

    }

    const handleUpdate=()=>{
      // console.log('handleUpdate');
      // console.log(contextData.data[indexData]);
      contextData.data[indexData] = updateData;
      Navigate('/student')
    }
  return (
    <>
    <div className='editsection'>
       <div className='editStuTop'>
        <div>
       <label>Name : </label>
       <input name='Name' placeholder={contextData.data[indexData].Name } type='text' onChange={handleChange}/>
       </div>
       <div>
       <label>Age : </label>
       <input name='Age' placeholder={contextData.data[indexData].Age } type='Number' onChange={handleChange}/>
       </div>
       </div>
       

       <div className='editStudown'>
       <div>
       <label>Course</label>
       <input name='Course' placeholder={contextData.data[indexData].Course } type='text' onChange={handleChange}/>
       </div>

       <div>
       <label>Batch</label>
       <input name='Batch' placeholder={contextData.data[indexData].Batch } type='text' onChange={handleChange}/><br/>
       </div>
       </div>
       

       <div className='editStudentbtn'>

       <button name='Batch' onClick={()=>Navigate('/student')}>Cancel</button>
       <button onClick={handleUpdate}>Update </button>
       </div>
       </div>
    </>
  )
}

export default EditStudent