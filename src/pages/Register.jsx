import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {

  const {updateUserInfo,user,setUser,createUser,loginWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then((res) => {
      console.log(res.user)
      setUser(res.user)
      toast.success(`successfully login`,{
         position:'top-center'
      })
      navigate('/')
  })
  .catch(error => {
      console.log(error.message)
      setUser(null)
      toast.error(`login Unsuccessful`,{
        position:'top-center'
      })
  })
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    console.log(email,password,name,photo);

     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

     if(!regex.test(password)){
      toast.error(`Please give a valid password with at lease one Uppercase, one Lowercase and length must be 6 character or more.`,{
        position:'top-center'
     })
     return
     }

    createUser(email,password)
    .then((res) => {
      console.log(res.user)
      setUser(res.user)
      event.target.reset();
      navigate('/')
      toast.success(`successfully register done`,{
         position:'top-center'
      })
      const profile = {
        displayName: name,
        photoURL: photo
      }
      updateUserInfo(profile)
      .then((res)=>{
        // console.log(res.user)
        // setUser(res.user)
      })
      .catch(err => {
        // setUser(null)
      })
  })
  .catch(error => {
      console.log(error.message)
      setUser(null)
      toast.error(`Register Unsuccessful ${error.message}`,{
         position:'top-center'
      })
  })
  }

  return (
    <div className='my-8'>
    <div className="hero md:w-7/12 lg:w-4/12 mx-auto bg-base-200 rounded-xl py-5">
<div className="hero-content flex-col">
<div className="text-center lg:text-left">
  <h1 className="text-3xl font-bold mb-3">Register now!</h1>
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleRegister} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="name" className="input input-bordered"/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text" name='photo' placeholder="photo URL" className="input input-bordered"/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control relative">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type={showPassword?'text':'password'} name='password' placeholder="password" className="input input-bordered" required />
      <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-60">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
      
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <div className="mx-auto">
    <button onClick={handleGoogleLogin} className="btn btn-primary px-[70px] mb-4">
    <i className="fa-brands fa-google"></i>
    Login With Google</button>
  </div>
  <p className='font-semibold text-center px-5 mb-6'>Already have an account? please <Link className='border-b-2 border-blue-600 text-blue-700' to='/login'>Login</Link></p>
</div>
</div>
</div>
</div>
  )
}
