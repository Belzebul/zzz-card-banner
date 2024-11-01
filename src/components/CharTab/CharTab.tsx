import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { Assets } from "../../lib/assets"
import DB from "../../lib/DB/db"
import { SaveState } from "../../lib/DB/saveState.ts"
import { Character } from "../../lib/models/Character.ts"
import { ButtonImportFile } from "./ButtonImportFile"
import CharProfile from "./charProfilePreview/CharProfile"
import CharStatSummary from "./charStatPreview/CharStatsSummary"
import DiscSetPreview from "./discSetPreview/DiscSetPreview"


const CharTab = () => {
    const [tooltip, setTooptip] = useState("Invalid Card!");
    const [char, setChar] = useState(DB.getActiveChar());
    const refToImage = useRef<HTMLDivElement>(null);

    const MenuChars = () => {
        return (
            <div className="flex flex-row mx-2 mt-2 max-w-[1150px] self-center overflow-x-auto scrollbar">
                {Object.values(DB.getCharactersById()).map((value) => (
                    <div>
                        <button>
                            <img src={Assets.getRole(value.id)} onClick={() => setChar(value)} className="w-auto h-[80px] max-w-none" />
                        </button>
                    </div>
                ))}
            </div>
        );
    }

    const LazyPngButton = lazy(() => import("./ButtonToPng"));
    const LazyDownloadButton = lazy(() => import("./ButtonDownload"));

    useEffect(() => {
        if (char !== DB.getActiveChar()) {
            DB.setActiveChar(char)
            SaveState.save()
        }
    }, [char])

    return (
        <div className="w-full flex-col">
            <div className="flex justify-self-center w-fit">
                <div className="flex flex-col items-start ">
                    <MenuChars />
                    <div ref={refToImage} className="flex gap-2 m-2 bg-stone-900 p-2 rounded-2xl">
                        <div className="flex flex-col">
                            <CharProfile char={char} />
                        </div>

                        <div className="flex flex-col">
                            <CharStatSummary char={char} />
                        </div>

                        <div className="flex flex-col">
                            <DiscSetPreview discSet={char.discSet} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-2 justify-self-center w-fit">
                <Suspense>
                    <ButtonImportFile onChange={(char: Character) => setChar(char)} />
                    <LazyPngButton refDiv={refToImage} />
                    <LazyDownloadButton refDiv={refToImage} name={char.name} />
                    <div className="absolute bg-stone-800 opacity-0 top-[90px] right-[30px] rounded-md px-3 py-2 items-center font-medium text-white shadow-sm dark:bg-gray-700 group-active:opacity-80 duration-[3000ms] group-active:ease-[cubic-bezier(0,1.55,0,.75)]">
                        {tooltip}
                    </div>
                </Suspense>
            </div>
        </div >
    )
}


export default CharTab