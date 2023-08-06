import Link from "next/link"
import Image from "next/image"

function Aboutpage() {
    return (
        <>
            <title> about me </title>
            <h1 className = "text-black font-bold text-7xl text-center py-5"> ABOUT ME </h1>
            <h1 className = "text-stone-600 font-bold text-xl text-center"> hi this page is all about me </h1>
            <p className = "text-center pb-4"> this will have the links to my socials  to contact me and stuff about me </p>
            <Image id = "img" className = "rounded-lg shadow-md" src = "/aboutmepic.jpg" width = {450} height = {700} alt = "me and friends"/> 
            <div className = "grid grid-cols-9">
                <Link className = "col-start-4 col-span-1" href = "https://www.linkedin.com/in/genesis-fu-10b778249/" target = "_blank" rel = "noopener noreferrer">
                    <Image className = "py-10" src = "/linkedin.PNG" width = {50} height = {100} alt = "linkedin profile"/> 
                </Link>
                <Link className = "col-start-5 col-span-1" href = "https://www.instagram.com/genesisfuu/" target = "_blank" rel = "noopener noreferrer">
                    <Image className = "py-10" src = "/instagram.PNG" width = {50} height = {90} alt = "instagram profile"/>
                </Link>
                <Link className = "col-start-6 col-span-1" href = "https://www.youtube.com/channel/UC_DiUZz_UwS-bR3lFqvU4qw" target = "_blank" rel = "noopener noreferrer">
                    <Image src = "/youtube.png" width = {130} height = {50} alt = "youtube channel"/>
                </Link>
            </div>
        </>
    )
}

export default Aboutpage