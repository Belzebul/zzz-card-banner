import { Assets } from "../../assets"
import { StatsToReadableMin } from "../../constants"
import { Disc, Stat } from "../../models/DiscSet"
import { Utils } from "../../Utils"

export const iconSize = 14

export const DiscStatBGImg = (disc: Disc | undefined) => {
    if (!disc)
        disc = new Disc();

    const url = Assets.getDiscSetById(String(disc.equipset_id))

    return (
        <div className="overflow-hidden w-[210px] h-[245] rounded-xl" >
            <div className="relative z-20 ">
                <img src={url} className="absolute w-[180px] h-auto -top-10 -right-10 z-10 opacity-35 blur-[2px]" />
                {DiscCard(disc)}
            </div>
        </div >
    )
}

const DiscCard = (disc: Disc) => {
    if (disc.lvl === 0)
        return (
            <div className="relative w-[210px] h-[245px] border border-solid rounded-xl border-stone-700 bg-stone-800 transition-all duration-500 hover:border-opacity-15 bg-opacity-60 border-opacity-50 shadow-xl" />
        );

    return (
        <div className="relative w-[210px] h-[245px] border border-solid rounded-xl border-stone-700 bg-stone-800 transition-all duration-500 hover:border-opacity-15 bg-opacity-60 border-opacity-50 shadow-xl">
            <div className="absolute z-30 w-[154px] m-7">
                <div className="flex justify-between self-center">
                    <img src={Assets.getRarity(disc.rarity)} style={{ width: 34, height: "auto" }} />
                    <div className="flex flex-col self-center">
                        <span className="font-['zzz'] text-[17px]">Lv.{disc.lvl}</span>
                    </div>
                </div>
                <div className="flex border-[0.75px] border-solid box-border divide-solid clear-both opacity-15 my-[10px] mx-auto" />
                {DiscStats(disc.main_stats)}
                <div className="flex border-[0.75px] border-solid box-border divide-solid clear-both opacity-15 my-[10px] mx-auto" />
                {disc.substats.map((stat) => (
                    DiscStats(stat)
                ))}

            </div>
        </div>
    )
};


const DiscStats = (stat: Stat) => {
    return (
        <div className="flex justify-between" >
            <img src={Assets.getStatIcon(stat)} style={{ width: iconSize, height: iconSize, margin: "4px" }} />
            <span className="font-['zzz']">
                {StatsToReadableMin[stat.id]}
            </span >
            <div className="flex border border-dashed box-border clear-both opacity-15 grow my-auto mx-[10px]" />
            <span className="font-['zzz']">
                {Utils.isFlat(stat)}
            </span>
        </div>
    )
}