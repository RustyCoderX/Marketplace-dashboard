



"use client"


import {usePathname} from 'next/navigation'

export default function Comp() {


    const pathname  = usePathname();


    return(
        <div>
            <p>Current path :{pathname}</p>
        </div>
    )
}