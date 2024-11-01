import { Link } from "react-router-dom";

const SideMenu = ({ show }: { show: boolean }) => {
    const BASE_PATH = "/zzz-card-banner";

    return (
        <div className={show ? 'side-menu-content w-[150px]' : 'side-menu-content w-0'}>
            <Link to={BASE_PATH + "/"} className="side-menu-button">Characters</Link>
            <Link to={BASE_PATH + "/import"} className="side-menu-button">Import</Link>
        </div>
    )
}

export default SideMenu