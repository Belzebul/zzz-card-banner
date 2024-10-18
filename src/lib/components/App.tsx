import { toPng } from "html-to-image";
import React, { useRef, useState } from "react";
import { Assets } from "../assets";
import { ServiceHoyolab } from "../importer/hoyolab_parser";
import { HoyolabData } from "../types/hoyolab_types";
import { CharProfile } from "./charProfilePreview/CharProfile";
import { CharStatSummary } from "./charStatPreview/CharStatsSummary";
import { DiscSetPreview } from "./discSetPreview/DiscSetPreview";

export const ExternalLayout: React.FC = () => {
    const [json, setJson] = useState<HoyolabData | undefined>(undefined);
    const [tooltip, setTooptip] = useState("Invalid Card!");

    const refToPng = useRef(null);
    const current = refToPng.current;

    const png_clipboard = () => {
        if (current === null) {
            return;
        }

        toPng(current, { cacheBust: false })
            .then(async (dataUrl) => {
                let data = await fetch(dataUrl);
                let blob = await data.blob();
                navigator.clipboard.write([
                    new ClipboardItem({
                        [blob.type]: blob,
                    }),
                ]);
                setTooptip("copy to clipboard!");
            })
            .catch((err) => {
                setTooptip("Failed to copy!")
                console.log(err);
            });
    };

    const png_download = () => {
        if (current === null) {
            return;
        }

        toPng(current, { cacheBust: false })
            .then(async (dataUrl) => {
                const link = document.createElement("a");
                link.download = char.charMetadata.name + ".png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const updatedJSON = e.target.files[0];

            if (updatedJSON.type === "application/json") {
                const fileReader = new FileReader();
                fileReader.readAsText(e.target.files[0], "UTF-8");
                fileReader.onload = (e) => {
                    const target = e.target;
                    if (target !== null) {
                        const result = target.result as string;
                        const json = JSON.parse(result);
                        setJson(json);
                    }
                };
            }
        }
    };

    const serviceHoyoLab = new ServiceHoyolab(json);
    const char = serviceHoyoLab.buildCharacter();
    char.calc_all();
    const discSet = char.discSet;

    return (
        <div className="flex flex-col bg-neutral-950 box-border min-h-min min-w-min m-4 rounded-md">

            <div className="flex justify-between items-center h-[60px] w-full bg-gradient-to-r from-amber-600 to-orange-950 rounded-t-md">
                <span className='text-[38px] font-["paybooc"] text-stone-100 mx-4'>
                    Capiroto ZZZ Card Build
                </span>
                <div className="flex flex-row gap-2">
                    <label className="flex justify-center my-4 ">
                        <input type="file" onChange={handleFileChange} accept="application/json" className="block w-full text-sm text-gray-900 border border-stone-300 rounded-md cursor-pointer bg-gray-50 dark:text-stone-400 focus:outline-none dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 text-[22px] font-['paybooc'] opacity-90 file:h-full file:opacity-90 file:border-hidden" title="json load" />
                    </label>
                    <div className="flex group w-auto items-center z-30 my-4">
                        <button type="button" onClick={png_download} className="py-1 px-2 text-sm text-stone-900 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 dark:text-stone-400 focus:outline-none dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 font-['paybooc'] opacity-90">Download
                        </button>
                    </div>
                    <div className="flex group w-[60px] items-center z-30 my-4">
                        <button type="button" onClick={png_clipboard} className="py-1 px-2 text-sm text-stone-900 border border-stone-300 rounded-lg cursor-pointer bg-stone-50 dark:text-stone-400 focus:outline-none dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 font-['paybooc'] opacity-90">Copy
                            <div className="absolute bg-stone-800 opacity-0 top-[90px] right-[30px] rounded-md px-3 py-2 items-center font-medium text-white shadow-sm dark:bg-gray-700 group-active:opacity-80 duration-[3000ms] group-active:ease-[cubic-bezier(0,1.55,0,.75)]">
                                {tooltip}
                                <div className="absolute"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div />
            <div className="flex items-center p-[10px] m-0 mx-auto h-min-[100%]">
                <div ref={refToPng} className="flex gap-2 bg-stone-900 p-2 rounded-2xl">
                    <div className="flex flex-col">{CharProfile(char)}</div>

                    <div className="flex flex-col">{CharStatSummary(char)}</div>

                    <div className="flex flex-col">{DiscSetPreview(discSet)}</div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="text-4xl my-8">Instructions</span>
                <img className="my-8" src={Assets.getTutorial()} />
            </div>
        </div>
    );
};
