import { toPng } from "html-to-image";
import { RefObject } from "react";

const ButtonToPng = (props: { refDiv: RefObject<HTMLDivElement> }) => {
    //const [tooltip, setTooptip] = useState("Invalid Card!");

    const current = props.refDiv.current;

    const png_clipboard = () => {
        console.log(current)
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
                console.log("copy to clipboard!");
            })
            .catch((err) => {
                console.log("Failed to copy!")
                console.log(err);
            });
    }

    return (
        <div className="flex w-auto items-center z-30 my-4">
            <button type="button" onClick={png_clipboard} className="py-1 px-2 button-base">
                Copy to Clipboard
            </button>
        </div>
    )
}

export default ButtonToPng