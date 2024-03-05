import React, { useState } from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function Counter() {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)

  const handleIncrementByAmount = () => {
    if(amount){
      dispatch(incrementByAmount(amount))
    }else{
      alert("enter a valid amount")
    }
  }

  return (
    <>
      <div className='container-fluid w-50 rounded border border-white mt-5 bg-dark'>
        <h1 className='text-light text-center'>{count}</h1>

        <div className='d-flex justify-content-evenly align-items-center mb-5'>
          <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
        </div>

          <div className='d-flex justify-content-evenly align-items-center mb-3'>
            <input onChange={e=>setAmount(e.target.value)} className='form-control' type="text" placeholder='enter the amount to be incremented' />
            <button onClick={handleIncrementByAmount} className='btn btn-primary'>increment by amount</button>
          </div>
      </div>
    </>
  )
}

export default Counter