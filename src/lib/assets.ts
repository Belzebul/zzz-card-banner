
import { Stat } from "./models/DiscSet";

import discset_data from "../data/base_discset_data.json";
import wengine_data from "../data/base_wengine_data.json";
import { ICON_FROM_CAMP_MAPPING, ICON_FROM_ELEMENT_MAPPING, ICON_FROM_ROLE_MAPPING, ICON_FROM_SKILL_MAPPING, ICON_FROM_STAT_MAPPING, ICON_FROM_WEAPON_MAPPING } from "./constantsUI";
import { dataDiscSetsMeta as DataDiscSetsMeta } from "./types/discs_metadata";
import { WengineMetadata } from "./types/wengine_metadata";

export class Assets {
    private static BASE_PATH = "/zzz-card-banner";

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
        return Assets.getImageUrl(`/image/avatar_cinema/${id}.webp`)
    }

    public static getDiscSetById(id: string) {
        if (id === '0') return Assets.getBlank();

        const discs_meta: DataDiscSetsMeta = discset_data;
        return Assets.getImageUrl(`/icon/disc/${discs_meta[+id]['icon']}`)
    }

    public static getRarity(id: string) {
        if (!id) return Assets.getBlank();
        return Assets.getImageUrl(`/icon/rarity/rarity${id}.webp`)
    }

    static getWeapon(id: string) {
        if (!id) return Assets.getBlank();

        return Assets.getImageUrl(`/icon/weaponType/${ICON_FROM_WEAPON_MAPPING[+id]}`);
    }

    static getElement(elementid: string) {
        return Assets.getImageUrl(`/icon/property/${ICON_FROM_ELEMENT_MAPPING[+elementid]}`);
    }

    static getCamp(camp: string) {
        if (!camp) return Assets.getBlank();
        return Assets.getImageUrl(`/icon/camp/${ICON_FROM_CAMP_MAPPING[+camp]}`);
    }

    static getWEngine(id: string) {
        if (!id) return Assets.getBlank();

        const wengine_meta: WengineMetadata = wengine_data;
        return Assets.getImageUrl(`/icon/wengine/${wengine_meta[+id]['icon']}.webp`)
    }

    static getSkill(id: number) {
        return Assets.getImageUrl(`/icon/skill/${ICON_FROM_SKILL_MAPPING[id]}`)
    }

    static getTutorialAllChars() {
        return Assets.getImageUrl(`/misc/zzz_card_banner_scraper_instructions.webp`)
    }

    static getTutorialSingleChar() {
        return Assets.getImageUrl(`/misc/zzz_card_banner_instructions.webp`)
    }

    static getRole(id: number) {
        return Assets.getImageUrl(`/icon/role/${ICON_FROM_ROLE_MAPPING[id]}`)
    }
}
