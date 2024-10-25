import { create } from "zustand";
import { Character } from "../models/Character";

const state = {
    characters: [],
    metadata: {},
}

window.store = create((set) => ({
    characters: [],
    charactersById: {},

    setCharacters: (x) => set(() => ({ characters: x })),
    setCharactersById: (x) => set(() => ({ charactersById: x })),
}))

export const DB = {
    getMetadata: () => state.metadata,
    setMetadata: (x: any) => state.metadata = x,

    getCharacters: () => window.store.getState().characters,
    getCharacterById: (id: string) => window.store.getState().charactersById[id],

    getCharactersById: () => window.store.getState().charactersById,
    setCharactersById: (x: Record<string, Character>) => { window.store.getState().setCharactersById(x) },

    setCharacters: (x: Character[]) => {
        const charactersById: Record<string, Character> = {};
        for (const character of x) {
            charactersById[character.name] = character;
        }

        const newCharacterArray = [...x]
        window.store.getState().setCharacters(newCharacterArray)
        window.store.getState().setCharactersById(charactersById)
    },

    setCharacter: (x: Character) => {
        const charactersById = window.store.getState().charactersById
        charactersById[x.id] = x

        window.store.getState().setCharactersById(charactersById)
    },
    addCharacter: (x: Character) => {
        const characters = DB.getCharacters()
        characters.push(x)
        DB.setCharacters(characters)
    },
    getState: () => window.store.getState(),

    setStore: (x: { charactersById: Record<string, Character> }) => {
        //const dbCharacters = DB.getMetadata().characters

        DB.setCharactersById(x.charactersById)
    },

    resetStore: () => {
        DB.setStore({
            charactersById: {},
        })
    },
}

export default DB