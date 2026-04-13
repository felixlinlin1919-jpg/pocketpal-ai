import {characterProfileStore} from '../store';

export const useCharacterProfiles = () => ({
  profiles: characterProfileStore.characterProfiles,
  selectedCharacterId: characterProfileStore.selectedCharacterId,
  selectedCharacter: characterProfileStore.selectedCharacter,
  isHydrated: characterProfileStore.isHydrated,
  getCharacterProfile: (id: string) =>
    characterProfileStore.getCharacterProfile(id),
  addCharacterProfile: characterProfileStore.addCharacterProfile.bind(
    characterProfileStore,
  ),
  updateCharacterProfile: characterProfileStore.updateCharacterProfile.bind(
    characterProfileStore,
  ),
  deleteCharacterProfile: characterProfileStore.deleteCharacterProfile.bind(
    characterProfileStore,
  ),
  setSelectedCharacter: characterProfileStore.setSelectedCharacter.bind(
    characterProfileStore,
  ),
});
