import { Route, Routes } from "react-router-dom"
import CharTab from "./CharTab/CharTab"
import ImportTab from "./ImportTab/ImportTab"
import SideMenu from "./SideMenu"

const Tabs = ({ show }: { show: boolean }) => {
    const BASE_PATH = "/zzz-card-banner"
    return (
        <div className="flex flex-row box-border self-stretch min-h-fit min-w-fit">
            <SideMenu show={show} />
            <Routes>
                <Route path={BASE_PATH + "/"} element={<CharTab />} />
                <Route path={BASE_PATH + "/import"} element={<ImportTab />} />
            </Routes>
        </div>
    )
}

export default Tabs