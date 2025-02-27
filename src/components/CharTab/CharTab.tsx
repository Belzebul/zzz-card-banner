import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { Assets } from "../../lib/assets"
import DB from "../../lib/DB/db"
import { SaveState } from "../../lib/DB/saveState.ts"
import CharProfile from "./charProfilePreview/CharProfile"
import CharStatSummary from "./charStatPreview/CharStatsSummary"
import DiscSetPreview from "./discSetPreview/DiscSetPreview"


const CharTab = () => {
    const [char, setChar] = useState(DB.getActiveChar());
    const refToImage = useRef<HTMLDivElement>(null);

    const MenuChars = () => {
        return (
            <div className="flex flex-row mx-2 mt-2 max-w-[1150px] self-center overflow-x-auto scrollbar-thin">
                {Object.values(DB.getCharactersById()).map((value, jsx_index) => (
                    <div key={jsx_index}>
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
            <div className="flex m-auto w-fit">
                <div className="flex flex-col items-start">
                    <MenuChars />
                    <div className="flex relative gap-2 m-2 bg-stone-900 rounded-2xl">
                        <div ref={refToImage} className="flex gap-2 p-2 bg-stone-900 rounded-2xl">
                            <div className="flex gap-2 bg-stone-900 rounded-2xl">
                                <CharProfile char={char} />
                            </div>

                            <div className="flex flex-col">
                                <CharStatSummary char={char} />
                            </div>

                            <div className="flex flex-col">
                                <DiscSetPreview discSet={char.discSet} />
                            </div>
                        </div>
                        <div className="flex absolute flex-row gap-2 m-auto w-fit z-50 right-1/2 translate-x-1/2 pr-2
                          opacity-30 delay-200 duration-500 ease-in-out hover:opacity-90">
                            <Suspense>
                                <LazyPngButton refDiv={refToImage} />
                                <LazyDownloadButton refDiv={refToImage} name={char.name} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default CharTab