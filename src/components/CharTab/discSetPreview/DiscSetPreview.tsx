import { useEffect } from "react";
import { Assets } from "../../../lib/assets";
import { HOYO_DISC_SUB_RATE, StatsToReadableMin } from "../../../lib/constants";
import { Disc, DiscSet, Stat } from "../../../lib/models/DiscSet";
import { isFlat } from "../../../lib/Utils";

type StatProp = {
    stat: Stat
}

const DiscSetPreview = ({ discSet }: { discSet: DiscSet }) => {
    return (
        <div className="flex w-[428px] gap-2 flex-wrap">
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

const DiscStatsSummary = ({ disc }: { disc: Disc }) => {
    if (disc.lvl === -1)
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
                <DiscMainStat stat={disc.main_stats} />
                <div className="divider-base divider-disc" />
                {disc.substats.map((stat, index) => (
                    <DiscSubStat stat={stat} key={index} />
                ))}
            </div>
        </div>
    )
};


const DiscMainStat = ({ stat }: StatProp) => {
    const idString = "id" + String(stat.id);
    useEffect(() => idDOMcustom(idString), []);

    return (
        <div className={idString + ` flex justify-between pr-1 rounded-md `}>
            <img src={Assets.getStatIcon(stat)} className="w-[14px] h-[14px] m-1" />
            <span className="font-['zzz']">
                {StatsToReadableMin[stat.id]}
            </span >
            <div className="divider-base divider-text" />
            <span className="font-['zzz']">
                {isFlat(stat)}
            </span>
        </div>
    )
}

const numUpgrades = (stat: Stat) => {
    const upgrades = (stat.value / HOYO_DISC_SUB_RATE[stat.id]) - 1;
    console.log(stat.value);
    return upgrades === 0 ? "" : "·".repeat(upgrades);
}

const DiscSubStat = ({ stat }: StatProp) => {
    const idString = "id" + String(stat.id);
    useEffect(() => idDOMcustom(idString), []);


    return (
        <div className={idString + ` flex justify-between pr-1 rounded-md`} >
            <img src={Assets.getStatIcon(stat)} className="w-[14px] h-[14px] m-1" />
            <span className="font-['zzz']">
                {StatsToReadableMin[stat.id]}
            </span >
            <div className="flex grow justify-end" >
                <div className="flex mx-1">
                    <span className="self-center font-['zzz'] tracking-widest text-amber-500">
                        {numUpgrades(stat)}
                    </span >
                </div>

            </div>
            <span className="font-['zzz']">
                {isFlat(stat)}
            </span>
        </div>
    )
}

export const idDOMcustom = (idString: string) => {
    const hoverItems = document.querySelectorAll("." + idString);

    hoverItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            hoverItems.forEach((el) => {
                el.classList.add("bg-stone-600"); // Adiciona a classe do hover
            });
        });

        item.addEventListener("mouseleave", () => {
            hoverItems.forEach((el) => {
                el.classList.remove("bg-stone-600"); // Remove o hover
            });
        });
    });

    return () => {
        hoverItems.forEach(item => {
            item.removeEventListener("mouseenter", () => { });
            item.removeEventListener("mouseleave", () => { });
        });
    };
}

export default DiscSetPreview