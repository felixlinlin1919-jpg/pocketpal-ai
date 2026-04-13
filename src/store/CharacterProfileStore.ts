import AsyncStorage from '@react-native-async-storage/async-storage';
import {makePersistable} from 'mobx-persist-store';
import {makeAutoObservable, runInAction} from 'mobx';

import {
  CharacterProfile,
  CharacterProfileDraft,
  CharacterProfileUpdate,
} from '../types/character';

const createCharacterProfileId = () =>
  `character-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

export class CharacterProfileStore {
  profiles: CharacterProfile[] = [];
  selectedCharacterId: string | undefined = undefined;
  isHydrated = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'CharacterProfileStore',
      properties: ['profiles', 'selectedCharacterId'],
      storage: AsyncStorage,
    }).then(() => {
      runInAction(() => {
        this.isHydrated = true;
      });
      this.ensureSelectedCharacterIsValid();
    });
  }

  get characterProfiles(): CharacterProfile[] {
    return [...this.profiles].sort((a, b) => b.updatedAt - a.updatedAt);
  }

  get selectedCharacter(): CharacterProfile | undefined {
    return this.profiles.find(profile => profile.id === this.selectedCharacterId);
  }

  getCharacterProfile(id: string): CharacterProfile | undefined {
    return this.profiles.find(profile => profile.id === id);
  }

  addCharacterProfile(draft: CharacterProfileDraft): CharacterProfile {
    const now = Date.now();
    const profile: CharacterProfile = {
      id: createCharacterProfileId(),
      name: draft.name.trim(),
      avatar: this.normalizeOptionalValue(draft.avatar),
      background: this.normalizeOptionalValue(draft.background),
      systemPrompt: draft.systemPrompt.trim(),
      thinkingEnabled: draft.thinkingEnabled,
      createdAt: now,
      updatedAt: now,
    };

    runInAction(() => {
      this.profiles.push(profile);
      if (!this.selectedCharacterId) {
        this.selectedCharacterId = profile.id;
      }
    });

    return profile;
  }

  updateCharacterProfile(
    id: string,
    updates: CharacterProfileUpdate,
  ): CharacterProfile | undefined {
    const profile = this.profiles.find(item => item.id === id);

    if (!profile) {
      return undefined;
    }

    runInAction(() => {
      if (updates.name !== undefined) {
        profile.name = updates.name.trim();
      }
      if (updates.systemPrompt !== undefined) {
        profile.systemPrompt = updates.systemPrompt.trim();
      }
      if (updates.avatar !== undefined) {
        profile.avatar = this.normalizeOptionalValue(updates.avatar);
      }
      if (updates.background !== undefined) {
        profile.background = this.normalizeOptionalValue(updates.background);
      }
      if (updates.thinkingEnabled !== undefined) {
        profile.thinkingEnabled = updates.thinkingEnabled;
      }
      profile.updatedAt = Date.now();
    });

    return profile;
  }

  deleteCharacterProfile(id: string) {
    runInAction(() => {
      this.profiles = this.profiles.filter(profile => profile.id !== id);

      if (this.selectedCharacterId === id) {
        this.selectedCharacterId = this.profiles[0]?.id;
      }
    });
  }

  setSelectedCharacter(id: string | undefined) {
    runInAction(() => {
      if (!id) {
        this.selectedCharacterId = undefined;
        return;
      }

      const exists = this.profiles.some(profile => profile.id === id);
      this.selectedCharacterId = exists ? id : this.selectedCharacterId;
    });
  }

  getSelectedCharacter(): CharacterProfile | undefined {
    return this.selectedCharacter;
  }

  private ensureSelectedCharacterIsValid() {
    runInAction(() => {
      if (
        this.selectedCharacterId &&
        this.profiles.some(profile => profile.id === this.selectedCharacterId)
      ) {
        return;
      }

      this.selectedCharacterId = this.profiles[0]?.id;
    });
  }

  private normalizeOptionalValue(value?: string): string | undefined {
    const trimmedValue = value?.trim();
    return trimmedValue ? trimmedValue : undefined;
  }
}

export const characterProfileStore = new CharacterProfileStore();
