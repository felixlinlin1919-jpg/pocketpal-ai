import {
  getCharacterImageSource,
  resolveCharacterImageUri,
} from '../characterImageSource';

describe('characterImageSource', () => {
  it('returns undefined for empty values', () => {
    expect(resolveCharacterImageUri()).toBeUndefined();
    expect(resolveCharacterImageUri('')).toBeUndefined();
    expect(resolveCharacterImageUri('   ')).toBeUndefined();
  });

  it('preserves supported uri schemes', () => {
    expect(resolveCharacterImageUri('https://example.com/avatar.png')).toBe(
      'https://example.com/avatar.png',
    );
    expect(resolveCharacterImageUri('file:///tmp/avatar.png')).toBe(
      'file:///tmp/avatar.png',
    );
    expect(resolveCharacterImageUri('content://media/avatar.png')).toBe(
      'content://media/avatar.png',
    );
  });

  it('converts absolute local paths into file uris', () => {
    expect(resolveCharacterImageUri('/tmp/avatar.png')).toBe(
      'file:///tmp/avatar.png',
    );
  });

  it('creates react native image sources', () => {
    expect(getCharacterImageSource('/tmp/avatar.png')).toEqual({
      uri: 'file:///tmp/avatar.png',
    });
  });
});
