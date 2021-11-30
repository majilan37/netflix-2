import { useEffect, useState } from "react"

function Header() {
    const [header, setHeader] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setHeader(true)
            } else {
                setHeader(false)
            }
        })
    }, [])
    return (
        <header className={`flex items-center justify-between px-6 py-2 z-50 fixed w-full top-0 bg-transparent  transition duration-200 ${header && '!bg-gray-700 shadow-md'}`}>
            <img className="object-contain h-16" src="https://bit.ly/3o4UHll" alt="" />
            <img
                className="h-8 object-contain"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt=""
            />
        </header>
    )
}

export default Header
