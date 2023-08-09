import Link from "next/link"
import { SpotifyPlaylist } from "../common/SpotifyPlaylist"

export default function Projects() {
    return (
        <>
            <title> my projects </title>
            <h1 className = "text-black font-bold text-7xl text-center py-5"> MY PROJECTS </h1>
            <h1 className = "text-stone-600 font-bold text-xl text-center"> This page has all the projects I have worked on &#40;not many at the moment&#41;.</h1>
            <p className = "text-center"> This website is one of them </p>
            <p className = "text-center pt-8 pb-4"> Here is another one of my Spotify playlists. This is not a project, but I have nothing else to show on this page :&#41; </p>
            <div className = "grid justify-items-center pb-8"> 
                <SpotifyPlaylist width = "60%" link = "https://open.spotify.com/playlist/6xAPYq06f4rRFnbFa2A81F?si=e60216f49764493c"/>
            </div>
        </>
    )
}