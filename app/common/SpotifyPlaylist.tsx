interface SpotifyProps {
    [key: string] : any
    link: string;
    width?: number | string;
    height?: number | string;
    frameBorder?: number | string;
    allow?: string;
}

export const SpotifyPlaylist = ( {
    link,
    style = {},
    width,
    height = 352,
    frameBorder = 0,
    allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
    ...props
}: SpotifyProps ) => {
    const url = new URL(link);
    return (
        <iframe title = "Spotify Playlist"
            src = {`https://open.spotify.com/embed${url.pathname}`}
            width = {width}
            height = {height}
            frameBorder = {frameBorder}
            allow = {allow}
            style ={{
                borderRadius: 12,
                ...style
            }}
            {...props}
        />
    );
}