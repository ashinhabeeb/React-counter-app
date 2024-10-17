import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset,changeRange } from './redux/counterSlice';


function App() {

  const [range,setrange] = useState("")
  const count = useSelector((state)=>state.counter.value)
  console.log(count)

  const dispatch = useDispatch()

  console.log(range)

  return (
    <>
      <div style={{height:'100vh',width:'100%', backgroundColor:'black'}} className=' d-flex justify-content-center align-items-center'>
        <div className='bg-light p-4 rounded' style={{width:'500px'}}>
          <h1 className='text-center'>COUNTER APP</h1>
          <h1 style={{fontSize:'75px'}} className='text-center'>{count}</h1>

         <div className='d-flex justify-content-center gap-4 mt-3'>
            <Button onClick={()=>dispatch(increment())} variant="warning">Increment</Button>{' '}
            <Button onClick={()=>dispatch(decrement())} variant="danger">Decrement</Button>{' '}
            <Button onClick={()=>dispatch(reset())} variant="success">Reset</Button>{' '}
         </div>

         <div className='d-flex gap-2 mt-5'>
          <input type="text"  className='form-control' placeholder='Range' onChange={(e)=>{setrange(e.target.value)}} />
          <Button onClick={(()=>dispatch(changeRange(Number(range))))} variant="primary">click</Button>{' '}
         </div>
        </div>
      </div>
    </>
  )
}

export default App
