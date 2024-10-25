import { Character } from "../models/Character"

type CharacterID = string

export type ZZZBannerStore = {
    setCharacters(character: Character[]): void
    setCharactersById(charactersById: Record<string, Character>): void

    characters: Character[]
    charactersById: Record<CharacterID, Character>

}