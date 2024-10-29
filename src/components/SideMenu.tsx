import { Link } from "react-router-dom"

const SideMenu = () => {

    const BASE_PATH = "/zzz-card-banner"

    return (
        <div className="flex flex-col max-w-fit bg-stone-900 items-start gap-2 p-7 text-[17px]">
            <Link to={BASE_PATH + "/"}>Characters</Link>
            <Link to={BASE_PATH + "/import"}>Import</Link>
        </div>
    )
}

export default SideMenu