import Link from "next/link"
import Image from "next/image"
import { SpotifyPlaylist } from "../common/SpotifyPlaylist"
import { cospiog } from "../layout"
import { cospiogI } from "../layout"

//initialize fonts for this screen

function Aboutpage() {
    return (
        <>
            <title> about me </title>
            <div className={cospiogI.className}>
            <h1 className = "text-black font-bold text-7xl text-center py-5"> ABOUT ME </h1>
            </div>
            <h1 className = "text-stone-600 font-bold text-xl text-center"> Hello, this page is all about me! </h1>
            <p className = "text-center"> This will have the link to my socials and ways to contact me. </p>
            <p className = "text-center pb-4"> The picture below is of me and my friend&apos;s cat. </p>
            <Image id = "img" className = "rounded-lg shadow-md" src = "/aboutmepic.jpg" width = {450} height = {700} alt = "me and a friend&argos;s cat"/> 
            <div className = "grid grid-cols-9">
                <Link className = "col-start-4 col-span-1" href = "https://www.linkedin.com/in/genesis-fu-10b778249/" target = "_blank" rel = "noopener noreferrer">
                    <Image className = "py-10" src = "/linkedin.PNG" width = {50} height = {100} alt = "linkedin profile"/> 
                </Link>
                <Link className = "col-start-5 col-span-1" href = "https://www.instagram.com/genesisfuu/" target = "_blank" rel = "noopener noreferrer">
                    <Image className = "py-10" src = "/instagram.PNG" width = {50} height = {90} alt = "instagram profile"/>
                </Link>
                <Link className = "col-start-6 col-span-1" href = "https://www.youtube.com/@genegenesis" target = "_blank" rel = "noopener noreferrer">
                    <Image src = "/youtube.png" width = {130} height = {50} alt = "youtube channel"/>
                </Link>
            </div>
            <p className = "text-center pb-4"> Here is an instrumental playlist I made and really like. </p>
            <div className = "grid justify-items-center pb-8">
                <SpotifyPlaylist width = "40%" link = "https://open.spotify.com/playlist/7nsDIyWSe5EJ8EsRqvMBcm?si=39ce4588e1c94188"/>
            </div>
        </>
    )
}

export default Aboutpage