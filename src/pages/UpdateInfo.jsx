import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function UpdateInfo() {

    const {setUser,updateUserInfo} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        navigate('/myProfile')

        const profile = {
            displayName: name,
            photoURL: photo
          }
          updateUserInfo(profile)
          .then((res)=>{
          })
          .catch(err => {
          })
    }
  return (
    <div className='my-8'>
    <div className="hero md:w-7/12 lg:w-4/12 mx-auto bg-base-200 rounded-xl py-5">
<div className="hero-content flex-col">
<div className="text-center lg:text-left">
  <h1 className="text-3xl font-bold mb-3">Update now!</h1>
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleUpdate} className="card-body">
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
    
    <div className="form-control mt-6 mx-auto">
      <button  className="btn btn-primary">Update Info</button>
    </div>
  </form>
</div>
</div>
</div>
</div>
  )
}
