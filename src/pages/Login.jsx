import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='my-8'>
        <div className="hero w-4/12 mx-auto bg-base-200 rounded-xl py-5">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold mb-3">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
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
        <p className='font-semibold text-center'>Don't have an account? please <Link className='border-b-2 border-blue-600 text-blue-700' to='/register'>Register</Link></p>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
