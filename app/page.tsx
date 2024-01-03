import Link from "next/link"
import Image from "next/image"
import { SpotifyPlaylist } from "./common/SpotifyPlaylist"
import { cospiogI } from "./layout"


function Homepage() {
    return (
        <>
            <title> genesis fu </title>
            <div className={cospiogI.className}>
                <h1 className = "text-black font-bold text-7xl text-center py-5"> HOME PAGE </h1>
            </div>
            <h1 className = "text-stone-600 font-bold text-xl text-center"> Welcome to Genesis Fu&apos;s Home Page </h1>
            <p className = "text-center pb-4"> This is still a huge work in progress. I have yet to even make a wireframe for this website, so it&apos;s looking a little disastrous. I&apos;m getting to that very soon though.</p>
            <Image id = "img" className = "rounded-lg shadow-md" src = "/homepagepic.JPG" width = {300} height = {400} alt = "me and friends"/>
            <p className = "text-center pb-4 pt-8"> Here is a playlist I made of one of my favorite artists. </p>
            <div className = "grid justify-items-center pb-8">
                <SpotifyPlaylist width = "50%" link = "https://open.spotify.com/playlist/1GstlEIs5mf4MydCU28zdq?si=620dfa056cd64a4e"/>
            </div>
        </>
    )
}

export default Homepage
