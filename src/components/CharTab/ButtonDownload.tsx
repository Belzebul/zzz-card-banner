import { toPng } from "html-to-image";
import { RefObject } from "react";

const ButtonDownload = (x: { refDiv: RefObject<HTMLDivElement>, name: string }) => {
    const current = x.refDiv.current

    const png_download = () => {
        if (current === null) {
            return;
        }

        toPng(current, { cacheBust: false })
            .then(async (dataUrl) => {
                const link = document.createElement("a");
                link.download = x.name + ".png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex w-auto items-center z-30 my-4">
            <button type="button" onClick={png_download} className="py-1 px-2 button-base">
                Download
            </button>
        </div>
    )
}



export default ButtonDownload