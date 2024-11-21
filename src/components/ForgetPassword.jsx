import React, { useContext, useRef } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {

    const {passwordReset} = useContext(AuthContext)
    const emailReference = useRef()
    const navigate = useNavigate()

    const handleResetPassword = () => {
        const email = emailReference.current.value;
        if(!email){
          toast.error(`please give a valid email`,{
            position:'top-center'
         })
        }
        else{
         passwordReset(email)
        .then(() => {
          toast.success(`Password reset email successfully sent, please check your email`,{
            position:'top-center'
         })
         navigate('/login')
        })
        }
      }

  return (
<div className='my-8'>
<div className="hero md:w-7/12 px-4 lg:w-4/12 mx-auto bg-base-200 rounded-xl py-5">
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
<form className="card-body">
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' ref={emailReference} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <a
           href='https://mail.google.com/mail/u/0/#inbox'
            target="_blank"
            onClick={handleResetPassword} 
            className="btn btn-primary">
            Reset Password</a>
        </div>
</form>
</div>
</div>
</div>
  )
}
