import { Flex } from "antd";
import { circle, MOVIE_MAPPING } from "../constantsUI";

export const CinemaPreview = (charMovie: number) => {
    return (
        <Flex vertical gap="small">
            {Object.entries(MOVIE_MAPPING).map(([id, value]) => MoviePreview(id, value, charMovie))}
        </Flex>
    )
}

const MoviePreview = (key: string, value: string, charMovie: number) => {
    const color = getMovieColor(+key, charMovie);
    const shadow = "drop-shadow(0px 0px 4px rgb(0 0 0 / 0.4)";
    return (
        <>
            <svg viewBox="0 0 80 80" style={{ width: "42px", height: "42px", color: `${color}`, filter: `${shadow}` }}>
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