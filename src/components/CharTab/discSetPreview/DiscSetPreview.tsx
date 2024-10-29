import { Assets } from "../../../lib/assets";
import { StatsToReadableMin } from "../../../lib/constants";
import { Disc, DiscSet, Stat } from "../../../lib/models/DiscSet";
import { Utils } from "../../../lib/Utils";


const DiscSetPreview = (x: { discSet: DiscSet }) => {
    const discSet = x.discSet;
    return (
        <div className="flex w-[430px] gap-2 flex-wrap">
            <DiscCard disc={discSet.discs[1]} />
            <DiscCard disc={discSet.discs[6]} />
            <DiscCard disc={discSet.discs[2]} />
            <DiscCard disc={discSet.discs[5]} />
            <DiscCard disc={discSet.discs[3]} />
            <DiscCard disc={discSet.discs[4]} />
        </div>
    )
}

const DiscCard = (x: { disc: Disc | undefined }) => {
    let disc = x.disc;

    if (!disc)
        disc = new Disc();

    const url = Assets.getDiscSetById(String(disc.equipset_id))

    return (
        <div className="card-primary w-[210px] h-[245px] p-6" >
            <div className="relative z-20">
                <img src={url} className="absolute w-[200px] max-w-none -top-[80px] -right-[72px] z-10 opacity-40 blur-[2px]" />
                <DiscStatsSummary disc={disc} />
            </div>
        </div >
    )
}

const DiscStatsSummary = (x: { disc: Disc }) => {
    const disc = x.disc;
    if (disc.lvl === 0)
        return (
            <></>
        );

    return (
        <div className="absolute z-30 w-[154px]">
            <div className="w-full h-full items-center">
                <div className="flex justify-between items-center">
                    <img src={Assets.getRarity(disc.rarity)} className="w-[34px] h-auto" />
                    <div className="flex flex-col self-center">
                        <span className="font-['zzz'] text-[17px]">Lv.{disc.lvl}</span>
                    </div>
                </div>
                <div className="divider-base divider-disc" />
                <DiscStat stat={disc.main_stats} />
                <div className="divider-base divider-disc" />
                {disc.substats.map((stat) => (
                    <DiscStat stat={stat} />
                ))}
            </div>
        </div>
    )
};


const DiscStat = (x: { stat: Stat }) => {
    const stat = x.stat;
    return (
        <div className="flex justify-between" >
            <img src={Assets.getStatIcon(stat)} className="w-[14px] h-[14px] m-1" />
            <span className="font-['zzz']">
                {StatsToReadableMin[stat.id]}
            </span >
            <div className="divider-base divider-text" />
            <span className="font-['zzz']">
                {Utils.isFlat(stat)}
            </span>
        </div>
    )
}

export default DiscSetPreview