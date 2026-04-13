class MockCharacterProfileStore {
  profiles: any[] = [];
  selectedCharacterId: string | undefined = undefined;
  isHydrated = true;

  get characterProfiles() {
    return this.profiles;
  }

  get selectedCharacter() {
    return this.profiles.find(
      profile => profile.id === this.selectedCharacterId,
    );
  }

  getCharacterProfile = jest.fn((id: string) =>
    this.profiles.find(profile => profile.id === id),
  );

  addCharacterProfile = jest.fn((draft: any) => {
    const now = Date.now();
    const profile = {
      id: `mock-character-${Math.random()}`,
      createdAt: now,
      updatedAt: now,
      ...draft,
    };
    this.profiles.push(profile);
    if (!this.selectedCharacterId) {
      this.selectedCharacterId = profile.id;
    }
    return profile;
  });

  updateCharacterProfile = jest.fn((id: string, updates: any) => {
    const profile = this.profiles.find(item => item.id === id);
    if (!profile) {
      return undefined;
    }

    Object.assign(profile, updates, {updatedAt: Date.now()});
    return profile;
  });

  deleteCharacterProfile = jest.fn((id: string) => {
    this.profiles = this.profiles.filter(profile => profile.id !== id);
    if (this.selectedCharacterId === id) {
      this.selectedCharacterId = this.profiles[0]?.id;
    }
  });

  setSelectedCharacter = jest.fn((id?: string) => {
    this.selectedCharacterId = id;
  });

  getSelectedCharacter = jest.fn(() => this.selectedCharacter);
}

export const mockCharacterProfileStore = new MockCharacterProfileStore();
export const characterProfileStore = mockCharacterProfileStore;
