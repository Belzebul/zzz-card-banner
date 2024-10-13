export interface dataDiscSetsMeta {
    [id: number]: DiscSetMeta
}

export interface DiscSetMeta {
    icon: string;
    EN: Language;
    KO: Language;
    CHS: Language;
    JA: Language;
}

export interface Language {
    name: string;
    desc2: string;
    desc4: string;
}
