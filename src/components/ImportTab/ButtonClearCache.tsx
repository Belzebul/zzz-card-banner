import { useState } from "react";
import DB from "../../lib/DB/db";

const ButtonClearCache = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () => {
        console.log(isOpen)
        setIsOpen(true);
    }

    return (
        <div className="flex relative w-auto items-center z-50 my-4">
            <DialogBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <button onClick={openDialog} className="py-1 px-2 button-base">
                Clear Data
            </button>
        </div>

    )
}

const DialogBox = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const onDelete = () => {
        localStorage.clear();
        DB.resetStore();
        onClose();
    }

    if (isOpen)
        return (
            <div className="flex flex-col fixed bg-stone-200 rounded-lg py-2 z-50 justify-center w-[500px] h-[150px] p-8 gap-2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <span className="text-stone-900 text-[28px]">Clearing Cache</span>
                <span className="text-stone-900">Permanently delete your data? You can't undo this.</span>
                <div className="flex flex-row m-auto gap-4">
                    <button onClick={onClose} className="py-1 px-2 button-base">Cancel</button>
                    <button onClick={onDelete} className="py-1 px-2 button-base">Delete</button>
                </div>
            </div>
        )

    return null
}


export default ButtonClearCache