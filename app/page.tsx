import Link from "next/link"
import Image from "next/image"
import { SpotifyPlaylist } from "./common/SpotifyPlaylist"
import { serif } from "./layout"
import { bodyI } from "./layout"


function Homepage() {
    return (
        <>
            <title> genesis fu </title>
            <div className={serif.className}>
                <h1 className = "text-black text-7xl text-center py-5 pb-8"> home </h1>
            </div>
            <div className={bodyI.className}>
                <div className="grid grid-cols-7 pb-10">
                    <h1 className = "col-start-2 col-span-4 text-black text-4xl"> hello! i&apos;m genesis fu, a student at georgia tech. welcome to my website, where you get some insight into who i am and what i work on. :&#41; </h1>
                </div>
            </div>
            <div className="grid grid-cols-2 pt-8 pb-8 justify-items-center">
                <Image id = "img" className = "col-start-1 rounded-lg shadow-md" src = "/homepagepic.JPG" width = {300} height = {400} alt = "me and friends"/>
                <p className="col-start-2 justify-self-start text-xl my-auto"> me and my friends! </p>
            </div>
            <div className="grid grid-cols-2 pb-8">
                    <p className = "justify-self-center my-auto text-xl"> here is a playlist i made of one of my favorite artists: lizzy mcalpine. </p>
                    <div className = "justify-self-start">
                        <SpotifyPlaylist width = "200%" link = "https://open.spotify.com/playlist/1GstlEIs5mf4MydCU28zdq?si=620dfa056cd64a4e"/>
                    </div>
            </div>
            {/*<p className = "text-center pb-4"> This is still a huge work in progress. I have yet to even make a wireframe for this website, so it&apos;s looking a little disastrous. I&apos;m getting to that very soon though.</p>*/}
        </>
    )
}

export default Homepage
