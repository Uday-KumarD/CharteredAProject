import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchAccountants} from '../api/FetchAccounts'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

const Accounts = () => {

  const [accoounts,setAccounts]=useState([]);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const AllAccounts = async () =>{
      try {
        const data = await fetchAccountants();
        setAccounts(data);
      } catch (error) {
        console.log("faild to load account",error)
      }finally{
        setLoading(false);
      }
    }

    AllAccounts();
  },[])

  if(loading){
    return <h1 className='text-center text-blue-700 text-4xl font-bold my-2'>Loading...</h1>
  }

  const handleAccountSelect = (accountant) => {
    navigate(`/details/${accountant.id}`);
  };


  return (
    <>
    <div className='p-5 bg-img '>
      <p className='text-center text-4xl font-bold py-3 text-blue-700'>CHARTERED ACCOUNTANTS</p>

       <div className='my-5'>
       <SearchBar users={accoounts} onSelect={handleAccountSelect} />
       </div>
      <ResultList users={accoounts}/>
    </div>
    <Footer className='footer-accounts'/>
    </>
  )
}


  

export default Accounts;