import { useState } from "react";
import DB from "../../lib/DB/db";
import { SaveState } from "../../lib/DB/saveState";
import { ServiceHoyolab } from "../../lib/importer/hoyolab_parser";
import TooltipBox from "../TooltipBox";


const ButtonImportFile = () => {
    const [msg, setMsg] = useState("");
    const [active, setActive] = useState(false);

    const blinkTooltip = () => {
        setActive((prev) => !prev)
        setTimeout(() => {
            setActive((prev) => !prev);
        }, 2000);
    };

    const loadData = (hoyolabJson: any) => {
        const arrAux = Array.isArray(hoyolabJson) ? hoyolabJson : [hoyolabJson];

        arrAux.forEach((value) => {
            const charAux = new ServiceHoyolab(value).buildCharacter();
            DB.setCharacter(charAux);
        })

        SaveState.save();
    }

    const useImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) {
            setMsg("Loading error!");
            return;
        }

        const updatedJSON = e.target.files[0];
        if (updatedJSON.type !== "application/json") {
            setMsg("File is not a json!");
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
            const target = e.target;
            if (target === null)
                return;

            const result = target.result as string;
            const json = JSON.parse(result);
            loadData(json);
            setMsg("Characters loaded!");
        };

        blinkTooltip();
    }

    return (
        <label className="flex relative z-50 justify-center my-4 ">
            <TooltipBox msg={msg} active={active} />
            <input type="file" onChange={useImportFile} accept="application/json" className="block w-full button-base file:h-full file:opacity-90 file:border-hidden" title="json load" />
        </label>
    )
}

export default ButtonImportFile