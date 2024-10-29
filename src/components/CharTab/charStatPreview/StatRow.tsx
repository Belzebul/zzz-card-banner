import { Assets } from "../../../lib/assets";
import { StatsToReadableMin } from "../../../lib/constants";
import { Stat } from "../../../lib/models/DiscSet";
import { Utils } from "../../../lib/Utils";


export const iconSize = 16

export const StatRow = (x: { stat: Stat, index: number }): JSX.Element => {
    const stat = x.stat;
    return (
        <div key={x.index} className="flex justify-between self-stretch">
            <img className="w-4 h-4 m-1" src={Assets.getStatIcon(stat)} />
            <span className="font-['zzz'] text-[17px]">{StatsToReadableMin[stat.id]}</span>
            <div className="flex border border-dashed box-border clear-both opacity-15 grow my-auto mx-[10px] " />
            <span className="font-['zzz'] text-[17px]"> {Utils.isFlat(stat)} </span>
        </div>
    )
}
