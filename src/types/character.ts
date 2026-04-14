export interface CharacterProfile {
  id: string;
  name: string;
  description?: string;
  emoji?: string;
  avatar?: string;
  background?: string;
  systemPrompt: string;
  thinkingEnabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export type CharacterProfileDraft = Pick<
  CharacterProfile,
  | 'name'
  | 'description'
  | 'emoji'
  | 'avatar'
  | 'background'
  | 'systemPrompt'
  | 'thinkingEnabled'
>;

export type CharacterProfileUpdate = Partial<CharacterProfileDraft>;
