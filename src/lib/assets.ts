import { AttributeID } from "./constants";
import { Stat } from "./models/Disc";

export class Assets {
    private static BASE_PATH = "";

    public static iconFromStatMapping: { [id: number]: string } = {
        [AttributeID.HP_BASE]: "prop-hp-icon.png",
        [AttributeID.HP_P]: "prop-hp-icon.png",
        [AttributeID.HP_FLAT]: "prop-hp-icon.png",
        [AttributeID.ATK_BASE]: "prop-atk-icon.png",
        [AttributeID.ATK_P]: "prop-atk-icon.png",
        [AttributeID.ATK_FLAT]: "prop-atk-icon.png",
        [AttributeID.IMPACT]: "prop-impact-icon.png",
        [AttributeID.IMPACT_P]: "prop-impact-icon.png",
        [AttributeID.DEF_BASE]: "prop-def-icon.png",
        [AttributeID.DEF_P]: "prop-def-icon.png",
        [AttributeID.DEF_FLAT]: "prop-def-icon.png",
        [AttributeID.CRIT_RATE_BASE]: "prop-crit-rate-icon.png",
        [AttributeID.CRIT_RATE]: "prop-crit-rate-icon.png",
        [AttributeID.CRIT_DMG_BASE]: "prop-crit-dmg-icon.png",
        [AttributeID.CRIT_DMG]: "prop-crit-dmg-icon.png",
        [AttributeID.PEN_BASE]: "prop-pen-ratio-icon.png",
        [AttributeID.PEN_P]: "prop-pen-value-icon.png",
        [AttributeID.PEN_FLAT]: "prop-pen-ratio-icon.png",
        [AttributeID.ENERGY_RATE]: "prop-energy-regen-icon.png",
        [AttributeID.ENERGY_P]: "prop-energy-regen-icon.png",
        [AttributeID.ANOMALY_PROF_BASE]: "prop-anomaly-proficiency-icon.png",
        [AttributeID.ANOMALY_PROF]: "prop-anomaly-proficiency-icon.png",
        [AttributeID.ANOMALY_MAST_BASE]: "prop-anomaly-mastery-icon.png",
        [AttributeID.ANOMALY_MAST]: "prop-anomaly-mastery-icon.png",
        [AttributeID.PHYS_DMG]: "IconPhysical.webp",
        [AttributeID.FIRE_DMG]: "IconFire.webp",
        [AttributeID.ICE_DMG]: "IconIce.webp",
        [AttributeID.ELEC_DMG]: "IconElectric.webp",
        [AttributeID.ETHER_DMG]: "IconEther.webp",
    }

    private static getImageUrl(name: string) {
        return new URL(this.BASE_PATH + `/assets${name}`, import.meta.url).href
    }

    public static getStatIcon(stat: Stat) {
        return Assets.getImageUrl("/icon/property/" + this.iconFromStatMapping[stat.id])
    }

    public static getCharacterAvatarById(id: string) {
        return Assets.getImageUrl(`/icon/avatar/${id}.webp`)
    }
    static getBlank() {
        throw new Error("Method not implemented.");
    }
}