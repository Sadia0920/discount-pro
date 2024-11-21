import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className=" bg-blue-100 my-8 rounded-3xl py-28 w-10/12 mx-auto px-20">
        <h2 className='text-red-500 text-center text-4xl font-bold mb-4'>Error 404</h2>
        <p className='text-center my-9 text-lg font-semibold text-gray-500'>
            Not Found Page
        </p>
        <div className="text-center">
        <Link to='/'><button className="btn btn-primary">Go to home</button></Link>
        </div>
    </div>
  )
}
