import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { fetchAccountantDetails } from '../api/FetchAccounts';

const DetailsPage = () => {

   // get the id from route  
    const {id} = useParams();
    const [accoount,setAccounts]=useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const navigate = useNavigate();
  
    useEffect(()=>{
      const AccountsDetails = async () =>{
        try {
          const data = await fetchAccountantDetails(id);
          setAccounts(data);
          setError(null)
          console.log(id)
        } catch (error) {
          setError("faild to load account details")
        }finally{
          setLoading(false);
        }
      }
  
      AccountsDetails();
    },[id])
  
    if(loading){
      return <div className='text-center text-blue-700 font-bold my-2'>Loading...</div>
    }
    if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6 my-2 w-[70%] border-2 shadow-xl bg-white opacity-90 text-center">
     
      {
        <div className="container mx-auto p-6 ">
        <h1 className="text-2xl font-bold text-center mb-4">{accoount.name}</h1>
        <img
          src={accoount.image}
          alt={accoount.name}
          className="w-48 h-48 mx-auto mb-4 rounded shadow object-cover"
        />
        <div className='mx-auto '>
          <p className='font-bold text-lg text-blue-700'>About  </p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>From</span> : {accoount.about.from}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Partner Since</span> : {accoount.about.partnerSince}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Description</span> : {accoount.about.description}</p><br />

        <p className="text-lg text-gray-700"><span className='font-bold  text-blue-700'>Id</span> : {accoount.id}</p>
        <p className="text-lg text-gray-700"><span className='font-bold  text-blue-700'>Rating</span> : {accoount.rating}</p>
        <p className="text-lg text-gray-700"><span className='font-bold  text-blue-700'>Review Count</span> : {accoount.reviewCount}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Price</span> : {accoount.price}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Task Complexity</span> : {accoount.taskComplexity}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Delivery Time</span> : {accoount.deliveryTime}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Intro</span> : {accoount.intro}</p> <br />

        <p className='font-bold text-lg text-blue-700'>Testimonial</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Text</span> : {accoount.testimonial.text}</p>
        <p className="text-lg text-gray-700"><span className='font-bold text-blue-700'>Tuthor</span> : {accoount.testimonial.author}</p>
       

        </div>
      </div>
       
      }
       <div className='flex justify-end'>
       <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Back
      </button>
       </div>

  </div>
  )
}

export default DetailsPage