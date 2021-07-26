import React from 'react'

export default function Flags(props) {
    return (
        <>
            <option>
                <img src={props.data.flag} alt="" />
                {props.data.name}
            </option>
        </>
    )
}
