import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
      safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: theme.colors.background,
      },
      listContainer: {
        paddingBottom: 160,
        gap: 12,
      },
      heroCard: {
        ...design.cardStyle,
        padding: 20,
        gap: 8,
        marginTop: 8,
        marginBottom: 14,
      },
      heroEyebrow: {
        ...design.sectionTitle,
      },
      heroTitle: {
        color: theme.colors.onSurface,
      },
      heroDescription: {
        color: theme.colors.onSurfaceVariant,
        lineHeight: 22,
      },
      statsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 4,
      },
      statChip: {
        borderRadius: 999,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: design.mutedSurface,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      statChipText: {
        color: theme.colors.onSurfaceVariant,
      },
      filtersSection: {
        gap: 10,
      },
      filtersLabel: {
        ...design.sectionTitle,
      },
      filtersRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
      },
      filterChip: {
        borderRadius: 999,
      },
      groupSpacing: {
        marginBottom: 12,
      },
      header: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: design.subtleBorderColor,
      },
      filterContainer: {
        flexDirection: 'row',
        padding: 4,
        gap: 1,
        justifyContent: 'flex-end',
      },
      filterIcon: {
        borderRadius: 8,
        marginHorizontal: 2,
      },
    };
  })());
