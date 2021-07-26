import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
export default function Contacts() {
const [selectedDate, setSelectedDate] = useState(null)
    return (
        <>
            <div className="flex">
                <div className="w-1/2 p-5">
                    <h3>Email Address <span className="text-red-600 pb-3">*</span></h3>
                    <input placeholder="Email Address" className='w-full' type="text" name="" id="" />
                </div>
                <div>
                    <h3>Date Of Birth <span className="text-red-600">*</span></h3>
                    <DatePicker 
                        placeholderText="Date Of Birth"
                        selected={selectedDate}
                        onChange={datess=> setSelectedDate(datess)}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
        </>
    )
}
