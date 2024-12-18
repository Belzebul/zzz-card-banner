import { HOYO_2P_DISCSET } from "../constants"
import { HOYO_MAP, StatsBase } from "./StatsBase"

export class Stat {
    id: number = 0
    value: number = 0
}


export class Disc {
    lvl: number = -1
    pos: number = 0
    rarity: string = ""
    equipset_id: number = 0
    main_stats: Stat = new Stat()
    substats: Stat[] = []
}


export class DiscSet {
    discs: Record<number, Disc> = {};
    disc_sets_bonus: { [setid: number]: number } = {};
    statBase: StatsBase = new StatsBase();

    constructor() {
        this.emptyDiscSet();
    }

    public emptyDiscSet() {
        Array(6).forEach((_, index) => {
            this.discs[index] = new Disc();
        });
    }

    public sumDiscs(): StatsBase {
        this.statBase = new StatsBase()
        Object.values(this.discs).forEach((value) => this.sumStats(value));

        Object.entries(this.disc_sets_bonus).forEach(([disc_id, numSet]) => {
            if (numSet >= 2) {
                const stats_name = HOYO_MAP[HOYO_2P_DISCSET[+disc_id][0]];
                this.statBase[stats_name] += HOYO_2P_DISCSET[+disc_id][1];
            }
        })

        return this.statBase
    }

    private sumStats(disc: Disc) {
        const mainStats: Stat = disc.main_stats;
        this.statBase[HOYO_MAP[mainStats.id]] += mainStats.value;

        for (const stat of disc.substats) {
            this.statBase[HOYO_MAP[stat.id]] += stat.value;
        }
    }
}