import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
});
