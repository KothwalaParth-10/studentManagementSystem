import React, { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
import { useLocation } from 'react-router-dom'

function Admin() {
    const [loading, setLoading] = useState(true)
    const [Alldata,setAlldata]=useState([])
    const location=useLocation()
    const Admin=location.pathname.split("/").at(-1);
    const [Logged_admin,setLoggedAdmin]=useState([])
   async function getDetails()
    {   
       try{
           const res= await fetch("http://localhost:4000/getalldata",{
            method:"GET",
            headers:{
                'content-type': "application/json"
            },
           })
           const data=await res.json();
           const userLogs=data.data; 
           setLoggedAdmin(userLogs.filter((data)=>{
            if(data._id === Admin)
              {
                  return data.name;
              } 
         }))
           console.log(Logged_admin);
           
           setAlldata(userLogs.filter((data)=>{
            return  data._id !== '66a0d3d877790c5950b815af' && data._id !== '66a0d2dc3e4423236dcf6b01'
           }))
           console.log(Alldata);
           
           setLoading(false)
       }
       catch(error)
       {
        console.log(error);
       }
    }
    useEffect(()=>{
       getDetails()
    },[])
    return (
        <div>
            {
                loading?(<Spinner></Spinner>):(
                <div className='w-screen '>
                    {
                        Logged_admin.map((data)=>{
                            return <h1>{data.name}</h1>
                        })
                    }
                    <div className=' mt-10 grid grid-cols-1 border border-black w-11/12 mx-auto'>
                    {                    
                    Alldata.map((user)=>{
                      return <div className='flex justify-between  border-b border-black items-center'>
                          <p>{user.name}</p>
                          <div className='mt-2'>
                          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Accept</button>
                          
                          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reject</button>
                          </div>
                      </div>
                    })
                    }
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Admin
