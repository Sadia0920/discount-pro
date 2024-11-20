import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { toast } from 'react-toastify';

export default function Login() {
  const {setUser,loginUser,loginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then((res) => {
      console.log(res)
      toast.success(`successfully login`,{
         position:'top-center'
      })
      setUser(res.user)
      navigate('/')
  })
  .catch(error => {
      console.log(error.message)
      toast.error(`login unsuccessful`,{
         position:'top-center'
      })
      setUser(null)

  })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);

    loginUser(email,password)
    .then(res => {
      console.log(res.user)
      setUser(res.user)
      toast.success(`successfully login`,{
         position:'top-center'
      })
      event.target.reset();
      navigate('/')
     
    })
    .catch(error => {
      console.log(error.message)
      toast.error(`login unsuccessful`,{
         position:'top-center'
      })
      setUser(null)
    })

  }
  return (
    <div className='my-8'>
        <div className="hero md:w-7/12 px-4 lg:w-4/12 mx-auto bg-base-200 rounded-xl py-5">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold mb-3">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="mx-auto">
          <button onClick={handleGoogleLogin} className="btn btn-primary px-[70px] mb-4">
            <i className="fa-brands fa-google"></i>
            Login With Google</button>
      </div>
        <p className='font-semibold text-center px-5 mb-6'>Don't have an account? please <Link className='border-b-2 border-blue-600 text-blue-700' to='/register'>Register</Link></p>
    </div>
  </div>
</div>
    </div>
  )
}
