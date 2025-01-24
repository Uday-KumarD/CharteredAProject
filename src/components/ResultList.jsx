import React from 'react'
import { NavLink } from 'react-router-dom'

const ResultList = ({users}) => {
  // Check if users are empty or undefined then show the message
  if(!Array.isArray(users) || users.length === 0){
    return <p className='text-center text-gray-500'>No accounts Found</p>
  }
  // transform transition-transform hover:scale-105 hover:shadow-2xl
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {
        users.map((account)=>(
          <div key={account.id}
          className="bg-white shadow-lg bg-opacity-80 rounded-lg p-4 flex flex-col items-center text-center hover:scale-105 hover:shadow-4xl"
          >
            <img src={account.image} 
            className="w-30 h-30 mb-4 rounded shadow"
             />
             <h2 className="text-lg font-semibold">{account.name}</h2>
             <h2 className="text-lg font-semibold">{account.rating}</h2>
             <p className='"text-sm text-gray-500"'>{account.taskComplexity}</p>
             <p className='"text-sm text-gray-500"'>{account.about.from}</p>

            <NavLink
                to={`/details/${account.id}`}
                className="mt-4"
              >
                <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-400'>More Details</button>
            </NavLink>
          </div>
        ))
      }       
    </div>
  )
}

export default ResultList