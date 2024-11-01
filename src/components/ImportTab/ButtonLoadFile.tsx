import DB from "../../lib/DB/db";
import { SaveState } from "../../lib/DB/saveState";
import { ServiceHoyolab } from "../../lib/importer/hoyolab_parser";


const ButtonImportFile = () => {

    const loadData = (hoyolabJson: any) => {
        const arrAux = Array.isArray(hoyolabJson) ? hoyolabJson : [hoyolabJson];

        arrAux.forEach((value) => {
            const charAux = new ServiceHoyolab(value).buildCharacter();
            DB.setCharacter(charAux);
        })

        SaveState.save();
    }

    const useImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0])
            return;

        const updatedJSON = e.target.files[0];
        if (updatedJSON.type !== "application/json")
            return;

        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
            const target = e.target;
            if (target === null)
                return;

            const result = target.result as string;
            const json = JSON.parse(result);
            loadData(json);
        };
    }

    return (
        <label className="flex justify-center my-4 ">
            <input type="file" onChange={useImportFile} accept="application/json" className="block w-full button-base file:h-full file:opacity-90 file:border-hidden" title="json load" />
        </label>
    )
}

export default ButtonImportFile