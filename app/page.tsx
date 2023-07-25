import Link from "next/link"
import Image from "next/image"

function Homepage() {
    return (
        <>
            <title> genesis fu home </title>
            <h1 className = "text-black font-bold text-7xl text-center py-5"> HOME PAGE </h1>
            <h1 className = "text-stone-600 font-bold text-xl text-center"> welcome to genesis fu's home page </h1>
            <p className = "text-center pb-4"> it was very hard for me to get to this point of the website </p>
            <Image id = "img" className = "rounded-lg shadow-md" src = "/homepagepic.JPG" width = {300} height = {400} alt = "me and friends"/>
        </>
    )
}

export default Homepage
