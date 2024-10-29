import DB from "../../lib/DB/db";
import { SaveState } from "../../lib/DB/saveState";
import { ServiceHoyolab } from "../../lib/importer/hoyolab_parser";


export const ButtonImportFile = (x: { onChange: any }) => {

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
            const charAux = new ServiceHoyolab(json).buildCharacter();
            DB.setCharacter(charAux);
            SaveState.save();
            x.onChange(charAux);
        };
    }


    return (
        <label className="flex justify-center my-4 ">
            <input type="file" onChange={useImportFile} accept="application/json" className="block w-full button-base file:h-full file:opacity-90 file:border-hidden" title="json load" />
        </label>
    )
}
