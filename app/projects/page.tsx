import Link from "next/link"
import { SpotifyPlaylist } from "../common/SpotifyPlaylist"
import { humbleNostalgia } from "../layout"
import { cospiogI } from "../layout"

export default function Projects() {
    return (
        <>
            <title> my projects </title>
            <div className={cospiogI.className}>
            <h1 className = "text-black font-bold text-7xl text-center py-5"> MY PROJECTS </h1>
            </div>
            {/*<div className={humbleNostalgia.className}>*/}
                <h1 className = "text-stone-600 font-bold text-xl text-center tracking-wide"> This page has all the projects I have worked on &#40;to be added&#41;.</h1>
            {/*</div>*/}
            <p className = "text-center"> This website is one of them </p>
            <p className = "text-center pt-8 pb-4"> Here is another one of my Spotify playlists for when I absolutely need to lock in and grind. :&#41; </p>
            <div className = "grid justify-items-center pb-8"> 
                <SpotifyPlaylist width = "60%" link = "https://open.spotify.com/playlist/6xAPYq06f4rRFnbFa2A81F?si=e60216f49764493c"/>
            </div>
        </>
    )
}