import { MOVIE_MAPPING, circle } from "../../../lib/constantsUI";


export const CinemaPreview = ({ charMovie }: { charMovie: number }) => {
    return (
        <>
            {Object.entries(MOVIE_MAPPING).map(([id, value], index_jsx) =>
                <MoviePreview id={+id} value={value} movie={charMovie} react_id={index_jsx} />
            )}
        </>
    )
}

const MoviePreview = (props: { id: number, value: string, movie: number, react_id: number }) => {
    const { id, value, movie, react_id } = props;
    const color = (movie >= id) ? "fill-cinema-on" : "fill-cinema-off";
    return (
        <svg key={react_id} viewBox="0 0 80 80" className={`w-[42px] h-[42px] ${color} drop-shadow-primary`}>
            <path d={value} />
            <path d={circle} />
        </svg>
    )
}