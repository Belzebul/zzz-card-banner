import { StoreApi, UseBoundStore } from "zustand";
import { ZZZBannerStore } from "../types/store";
import DB from "./db";
import { SaveState } from "./saveState";

declare global {
    interface Window {
        store: UseBoundStore<StoreApi<ZZZBannerStore>>
        DB: typeof DB

        SaveState: typeof SaveState
    }
}