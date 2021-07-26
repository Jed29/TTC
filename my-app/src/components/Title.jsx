import React from 'react'

export default function Title() {
    return (
        <>
            <div>
            <input type="checkbox" value="Mrs" />
                <label className="p-2" for="Mrs">Mrs</label>
            <input type="checkbox" value="Ms" />
                <label className="p-2" for="Ms">Ms</label>
            <input type="checkbox" value="Mdm" />
                <label className="p-2" for="Mdm">Mdm</label>
            <input type="checkbox" value="Mr" />
                <label className="p-2"  for="Mr">Mr</label>
            <input type="checkbox" value="Dr" />
                <label className="p-2" for="Dr">Dr</label>
            </div>
        </>
    )
}
