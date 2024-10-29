import { Route, Routes } from "react-router-dom"
import CharTab from "./CharTab/CharTab"
import ImportTab from "./ImportTab"
import SideMenu from "./SideMenu"

const Tabs = () => {
    const BASE_PATH = "/zzz-card-banner"
    return (
        <div className="flex flex-row self-stretch">
            <SideMenu />
            <Routes>
                <Route path={BASE_PATH + "/"} element={<CharTab />} />
                <Route path={BASE_PATH + "/import"} element={<ImportTab />} />
            </Routes>
        </div>
    )
}

export default Tabs