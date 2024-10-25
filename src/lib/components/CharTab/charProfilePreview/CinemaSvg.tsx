import { MOVIE_MAPPING, circle } from "../../constantsUI";


export const CinemaPreview = (charMovie: number) => {
    return (
        <>
            {Object.entries(MOVIE_MAPPING).map(([id, value], index_jsx) =>
                <MoviePreview id={+id} value={value} charMovie={charMovie} index_jsx={index_jsx} />
            )}
        </>
    )
}

const MoviePreview = (prop: { id: number, value: string, charMovie: number, index_jsx: number }) => {
    const color = (prop.charMovie >= prop.id) ? "fill-cinema-on" : "fill-cinema-off";
    return (
        <svg key={prop.index_jsx} viewBox="0 0 80 80" className={`w-[42px] h-[42px] ${color} drop-shadow-primary`}>
            <path d={prop.value} />
            <path d={circle} />
        </svg>
    )
}