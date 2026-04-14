import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  anchorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 1,
  },
  pressable: {
    flexShrink: 1,
    borderRadius: 18,
    backgroundColor: 'rgba(22, 28, 39, 0.92)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  container: {
    flexShrink: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flexShrink: 1,
    color: '#f8fafc',
  },
  subtitle: {
    opacity: 0.86,
    color: '#c9d2e3',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flexShrink: 1,
  },
  statusText: {
    opacity: 0.82,
    fontSize: 11,
    flexShrink: 1,
    color: '#b4bfd6',
  },
  statusDivider: {
    opacity: 0.48,
    fontSize: 11,
    color: '#94a3b8',
  },
  switchPill: {
    borderRadius: 999,
    backgroundColor: 'rgba(96, 165, 250, 0.16)',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  switchPillText: {
    fontSize: 10,
    color: '#bfdbfe',
    fontWeight: '600',
  },
  renameButton: {
    margin: 0,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(22, 28, 39, 0.92)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
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
    backgroundColor: '#1f2937',
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
