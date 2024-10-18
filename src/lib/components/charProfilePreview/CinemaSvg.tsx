import { circle, MOVIE_MAPPING } from "../constantsUI";

export const CinemaPreview = (charMovie: number) => {
    return (
        <>
            {Object.entries(MOVIE_MAPPING).map(([id, value], index_jsx) =>
                MoviePreview(id, value, charMovie, index_jsx)
            )}
        </>
    )
}

const MoviePreview = (key: string, value: string, charMovie: number, index_jsx: number) => {
    const color = getMovieColor(+key, charMovie);
    const shadow = "drop-shadow(0px 0px 6px rgb(0 0 0 / 0.7)";
    return (
        <>
            <svg key={index_jsx} viewBox="0 0 80 80" style={{ width: "42px", height: "42px", color: `${color}`, filter: `${shadow}` }}>
                <path fill="currentColor" d={value} />
                <path fill="currentColor" d={circle} />
            </svg>
        </>
    )
}

function getMovieColor(i: number, charMovie: number) {
    const cinema_on = "rgb(255, 240, 0)"
    const cinema_off = "rgb(175, 175, 175)"
    if (charMovie >= i) {
        return cinema_on;
    }

    return cinema_off
}