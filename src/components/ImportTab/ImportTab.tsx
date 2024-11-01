import { Assets } from "../../lib/assets"
import ButtonImportFile from "./ButtonLoadFile"

const ImportTab = () => {
    return (
        <div className="w-full ">
            <div className="flex flex-col items-center justify-center">
                <span className="text-4xl my-8">Instructions</span>
                <img className="my-8" src={Assets.getTutorial()} />
                <ButtonImportFile />
            </div>
        </div>
    )
}

export default ImportTab