import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {fetchFlag,setError,setLoading}  from '../store/action'
import Language from '../components/Language'
import Title from '../components/Title'
import Flags from '../components/Flags'
import Country from '../components/Country'
import Contacts from '../components/Contacts'
import Privacy from '../components/Privacy'

export default function Form () {
    const dispatch= useDispatch()
    const dataa = useSelector(state=>state.fetchFlag)
    useEffect(()=>{dispatch(fetchFlag())},[dispatch])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            {/* <h1>{JSON.stringify(dataa)} </h1> */}
            <form className="bg-white rounded shadow-md w-5/6 p-4">
                <div className="flex justify-between">
                    <div className="ml-28">
                        <h1 className="ml-96">Logo</h1>
                    </div>
                    <div className="float-right p-5">
                        <label htmlFor="">Language:</label>
                        <select name="" id="">
                            <Language/>
                        </select>
                    </div>   
                </div>
                <div className="bg-yellow-400 block text-center p-2 rounded w-full">
                    <h2>You Don't Have an account yet, please create a new account</h2>
                </div>
                <div className="p-5 font-bold">
                    <h2>Create new Account</h2>
                        <h3>Title</h3>
                    <div className="flex-auto pl-4">
                        <Title/>
                    </div>
                </div>
                <div className="flex p-5">
                    <div className="w-1/2">
                        <label className="border-gray-300" htmlFor="">Last Name <span className="text-red-600">*</span></label>
                        <input placeholder="Last Name" className="block w-5/6 border-solid border-current" type="text" />
                    </div>
                    <div className="w-1/2">
                        <label className="border-gray-300" htmlFor="">First Name <span className="text-red-600">*</span></label>
                        <input placeholder="First Name" className="block w-5/6" type="text" />
                    </div>
                </div>
                <div className="p-5">
                    <label htmlFor="">Mobile Number Phone <span className="text-red-600">*</span></label>
                    <div className="flex">
                        <select className='' name="" id="">
                            <option defaultValue selected>Test</option>
                            {dataa.map(data=>{
                                return (
                                    <Flags data={data} key={data.id} />
                                )
                            })}
                        </select>
                            <input className="p-2" placeholder="Mobile Number Phone" className="bg-gray-300" type="text" name="" id="" />
                    </div>
                </div>
                <div className='p-5'>
                    <h2 className="font-semibold">Address</h2>
                    <input className="w-full" type="text" placeholder="Address"/>
                    <div className="flex">
                        <div className="block">
                            <label htmlFor="">Country/Location  <span className="text-red-600">*</span></label>
                            <select className="block" name="" id="">
                                <option disabled selected >Country/Location</option>
                                {
                                    dataa.map(data=>{
                                        return( <Country data={data}/>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="block pl-8 w-5/6">
                                <label className="block" htmlFor="">Province/District <span className="text-red-600">*</span></label>
                                <select className="w-5/6">
                                    <option disabled selected> Province/Disctrict </option>
                                </select>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h2 className="font-medium">Contacts</h2>
                    <Contacts/>
                </div>
                <div>
                    <h2>Standart Privacy Note</h2>
                    <Privacy/>
                </div>
                <div className="p-1 flex text-xs">
                    <input type="checkbox" name="" id="" />
                    <h6 className>I have read and understood the above terms and conditions and hereby agree that i will be bounded by these conditions and policies once i
                        have submitted this application form.
                    </h6>
                </div>
                <div className="float-right pr-4 pt-6">
                <input className='bg-yellow-400 p-3' type="submit" name="" id="" value="CREATE CUSTOMER" />
                </div>
            </form>
        </div>
    )
}
