
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>

      {/* main section start*/}
      <div className=" py-20 px-8 text-center border-b-2">
        <h1 className="home-main text-4xl font-bold text-blue-850 mb-4 text-blue-800">Find Your Perfect Chartered Accountant</h1>
        <p className="home-side text-lg mb-6">Explore verified profiles of experienced Chartered Accountants tailored to meet your financial, tax, and audit needs.</p>
        <NavLink to="/account" className="bg-white px-6 py-2 font-medium rounded-md hover:bg-blue-500">
          Search Now
        </NavLink>
      </div>
      {/* main section end */}

       

      {/* Highlights   */}
      <div className="py-10 px-8 bg-white bg-opacity-40">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">1</div>
            <h3 className="text-lg font-semibold mt-4">Search Accountants</h3>
            <p className="text-gray-600">Use our advanced search bar to find qualified professionals.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">2</div>
            <h3 className="text-lg font-semibold mt-4">View Profiles</h3>
            <p className="text-gray-600">Review detailed profiles and connect with experts that suit your requirements.</p>
          </div>
          <div className='border-2 p-4 shadow-lg rounded-lg bg-white bg-opacity-80 transform transition-transform hover:scale-105 hover:shadow-2xl'>
            <div className="bg-blue-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center">3</div>
            <h3 className="text-lg font-semibold mt-4">Contact & Collaborate</h3>
            <p className="text-gray-600">Directly reach out to chartered accountants and start working together.</p>
          </div>
        </div>
      </div>
      {/* Highlights  */}

      {/* user responses start */}
      <div className="bg-white bg-opacity-40 py-10 px-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Users responses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"This platform helped me find the right accountant for my startup quickly and efficiently!"</p>
            <h4 className="font-semibold mt-4">— Uday</h4>
          </div>
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"Highly recommend! The accountants I found here were professional and knowledgeable."</p>
            <h4 className="font-semibold mt-4">— Akshay</h4>
          </div>
          <div className="text-center p-4 border rounded-lg  bg-white bg-opacity-70">
            <p className="italic text-gray-600">"Fantastic user experience and excellent customer support. Truly top-notch."</p>
            <h4 className="font-semibold mt-4">— Raju</h4>
          </div>
        </div>
      </div>
       {/* Users Say section end */}

      {/* footer section start */}
      <Footer/>
      {/* footer section end */}
    </div>
  )
}

export default HomePage;