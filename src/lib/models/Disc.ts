import { HOYO_MAP, StatsBase } from "./StatsBase"

export class Stat {
    id: number = 0
    value: number = 0
}


export class Disc {
    lvl: number = 15
    pos: number = 0
    rarity: string = "S"
    equipset_id: number = 0
    main_stats: Stat = new Stat()
    substats: Stat[] = []
}


export class DiscSet {
    discs: Disc[] = []
    disc_sets_bonus: { [setid: number]: number } = {}
    statBase: StatsBase = new StatsBase()

    public sumDiscs(): StatsBase {
        this.statBase = new StatsBase()
        for (const disc of this.discs) {
            this.sumStats(disc);
        }

        return this.statBase
    }

    private sumStats(disc: Disc) {
        const mainStats: Stat = disc.main_stats
        this.statBase[HOYO_MAP[mainStats.id]] += mainStats.value;

        for (const stat of disc.substats) {
            this.statBase[HOYO_MAP[stat.id]] += stat.value;
        }
    }
}