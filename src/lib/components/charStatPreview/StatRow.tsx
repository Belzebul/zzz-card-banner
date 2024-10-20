import { Assets } from "../../assets"
import { StatsToReadableMin } from "../../constants"
import { Stat } from "../../models/DiscSet"
import { Utils } from "../../Utils"

export const iconSize = 16

export const StatRow = (stat: Stat, index: number): JSX.Element => {
    return (
        <>
            <div key={index} className="flex justify-between self-stretch">
                <img className="w-4 h-4 m-1" src={Assets.getStatIcon(stat)} />
                <span className="font-['zzz'] text-[17px]">{StatsToReadableMin[stat.id]}</span>
                <div className="flex border border-dashed box-border clear-both opacity-15 grow my-auto mx-[10px] " />
                <span className="font-['zzz'] text-[17px]"> {Utils.isFlat(stat)} </span>
            </div>
        </>
    )
}
