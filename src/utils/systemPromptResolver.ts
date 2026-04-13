import type {Pal} from '../types/pal';
import type {CharacterProfile} from '../types/character';
import type {Model} from './types';
import {generateFinalSystemPrompt} from './palshub-template-parser';

export interface SystemPromptDependencies {
  character?: CharacterProfile | null;
  pal?: Pal | null;
  model?: Model | null;
}

/**
 * Resolves the system prompt based on priority:
 * 1. Selected character's system prompt
 * 2. Pal's system prompt (with parameter rendering if needed)
 * 3. Fallback to model's chat template system prompt
 * 4. Empty string if neither exists
 */
export function resolveSystemPrompt(
  dependencies: SystemPromptDependencies,
): string {
  const {character, pal, model} = dependencies;

  // Priority 1: Selected character's system prompt
  if (character?.systemPrompt?.trim()) {
    return character.systemPrompt.trim();
  }

  // Priority 2: Pal's system prompt
  if (pal?.systemPrompt) {
    // Check if the pal has parameters that need rendering
    if (pal.parameters && Object.keys(pal.parameters).length > 0) {
      return generateFinalSystemPrompt(pal.systemPrompt, pal.parameters);
    } else {
      return pal.systemPrompt;
    }
  }

  // Priority 3: Model's chat template system prompt
  if (model?.chatTemplate?.systemPrompt) {
    return model.chatTemplate.systemPrompt;
  }

  // Priority 4: Empty string
  return '';
}

/**
 * Resolves system prompt and formats it as a system message array
 * Returns empty array if no system prompt is available
 */
export function resolveSystemMessages(
  dependencies: SystemPromptDependencies,
): Array<{role: 'system'; content: string}> {
  const systemPrompt = resolveSystemPrompt(dependencies);

  if (!systemPrompt.trim()) {
    return [];
  }

  return [
    {
      role: 'system' as const,
      content: systemPrompt,
    },
  ];
}
