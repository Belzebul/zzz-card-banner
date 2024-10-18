import { DiscSet } from "../../models/DiscSet";
import { DiscStatBGImg } from "./DiscStatCard";

export const DiscSetPreview = (discSet: DiscSet) => {
    return (
        <div className="flex w-[430px] gap-2 flex-wrap">
            {DiscStatBGImg(discSet.discs.get(1))}
            {DiscStatBGImg(discSet.discs.get(6))}
            {DiscStatBGImg(discSet.discs.get(2))}
            {DiscStatBGImg(discSet.discs.get(5))}
            {DiscStatBGImg(discSet.discs.get(3))}
            {DiscStatBGImg(discSet.discs.get(4))}
        </div>
    )
}