import { ICON_FROM_STAT_MAPPING } from "./components/constantsUI";
import { Stat } from "./models/Disc";

import discset_data from "../data/base_discset_data.json";
import { dataDiscSetsMeta as DataDiscSetsMeta } from "./types/discs_metadata";

export class Assets {
    private static BASE_PATH = "";

    private static getBlank() {
        return Assets.getImageUrl('/misc/blank.webp')
    }

    private static getImageUrl(name: string) {
        return new URL(this.BASE_PATH + `/assets${name}`, import.meta.url).href
    }

    public static getStatIcon(stat: Stat) {
        return Assets.getImageUrl(`/icon/property/${ICON_FROM_STAT_MAPPING[stat.id]}`)
    }

    public static getCharacterAvatarById(id: string) {
        return Assets.getImageUrl(`/icon/avatar/${id}.webp`)
    }

    public static getDiscSetById(id: string) {
        const discs_meta: DataDiscSetsMeta = discset_data
        return Assets.getImageUrl(`/icon/disc/${discs_meta[+id]['icon']}`)
    }

    public static getRarity(id: string) {
        return Assets.getImageUrl(`/icon/rarity/rarity${id}.png`)
    }
}