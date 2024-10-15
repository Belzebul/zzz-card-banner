export interface WengineMetadata {
    [id: number]: Wengine
}

export interface Wengine {
    icon: string;
    rank: number;
    type: number;
    EN: string;
    desc: string;
    KO: string;
    CHS: string;
    JA: string;
}
