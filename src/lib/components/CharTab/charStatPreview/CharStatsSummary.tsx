
import { Assets } from "../../../assets"
import { Character } from "../../../models/Character"
import { Stat } from "../../../models/DiscSet"
import { viewStats } from "../../../models/StatsBase"
import { StatRow } from "./StatRow"

const CharStatSummary = (x: { char: Character }) => {
    const char = x.char;
    const total_stats = viewStats(char)
    const wengine_stats = viewStats(char.wengine)
    const wengine_icon = Assets.getWEngine(char.wengine.id)
    const wengine_rarity = Assets.getRarity(char.wengine.rarity)
    const camp = Assets.getCamp(char.charMetadata.camp)
    const wengine_lvl = (char.wengine.lvl === 0) ? "" : "Lv." + char.wengine.lvl;
    const wengine_stars = (char.wengine.star === 0) ? "" : "R" + char.wengine.star;

    return (
        <div className="flex flex-col justify-center gap-2 items-center h-[750px]">
            <div className="flex justify-center w-[275px]">
                <img src={camp} className="w-[200px] h-auto" />
            </div>
            <div className="flex justify-between w-[275px] p-[10px]">
                <div className="relative w-[72px] h-[72px]">
                    <img src={wengine_rarity} className="absolute w-[28px] h-auto bottom-0 right-0" />
                    <img src={wengine_icon} height="72px" />
                </div>
                <div className="flex flex-col justify-between gap-[6px] w-[190px]">
                    {wengine_stats.map((stat: Stat, index) => <StatRow stat={stat} index={index} />)}
                    <div className="relative flex left-6 gap-2">
                        <span className="font-['zzz']">{wengine_lvl}</span>
                        <span className="font-['zzz']">{wengine_stars}</span>
                    </div>
                </div>
            </div>
            <div className="w-[275px] p-[10px] self-center">
                <div className="flex flex-col justify-stretch gap-1">
                    {total_stats.map((stat: Stat, index) => <StatRow stat={stat} index={index} />)}
                </div>
            </div>
        </div>
    )
}

export default CharStatSummary