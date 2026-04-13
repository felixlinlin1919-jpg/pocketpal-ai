import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pressable: {
    flexShrink: 1,
  },
  container: {
    flexShrink: 1,
    gap: 1,
  },
  title: {
    flexShrink: 1,
  },
  subtitle: {
    opacity: 0.86,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flexShrink: 1,
  },
  statusText: {
    opacity: 0.74,
    fontSize: 11,
    flexShrink: 1,
  },
  statusDivider: {
    opacity: 0.48,
    fontSize: 11,
  },
  menuAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  menuAvatarFallback: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
  },
  menuStatusText: {
    fontSize: 11,
    opacity: 0.72,
  },
  clearRoleItem: {
    opacity: 0.9,
  },
  createRoleItem: {
    opacity: 0.96,
  },
});
