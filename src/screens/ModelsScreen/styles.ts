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
        paddingHorizontal: 14,
        backgroundColor: theme.colors.background,
      },
      listContainer: {
        paddingTop: 8,
        paddingBottom: 180,
        gap: 14,
      },
      headerStack: {
        gap: 14,
      },
      heroCard: {
        ...design.cardStyle,
        padding: 22,
        gap: 12,
      },
      heroEyebrow: {
        ...design.sectionTitle,
      },
      heroTitle: {
        color: theme.colors.onSurface,
        fontWeight: '800',
      },
      heroDescription: {
        color: design.palette.textMuted,
        lineHeight: 22,
      },
      searchBar: {
        borderRadius: design.innerRadius,
        backgroundColor: design.inputSurface,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        elevation: 0,
      },
      searchInput: {
        color: theme.colors.onSurface,
        fontSize: 15,
      },
      statsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
      },
      statCard: {
        flex: 1,
        minWidth: 92,
        borderRadius: design.innerRadius,
        backgroundColor: design.rowSurface,
        borderWidth: 1,
        borderColor: design.subtleBorderColor,
        paddingHorizontal: 14,
        paddingVertical: 12,
      },
      statLabel: {
        color: design.palette.textMuted,
        letterSpacing: 0.3,
      },
      statValue: {
        color: theme.colors.onSurface,
        fontWeight: '800',
        marginTop: 6,
      },
      filtersSection: {
        ...design.cardStyle,
        padding: 16,
        gap: 10,
        backgroundColor: design.rowSurface,
      },
      filtersLabel: {
        ...design.sectionTitle,
      },
      filtersHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      },
      filtersMeta: {
        color: design.palette.textMuted,
      },
      filtersRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
      },
      filterChip: {
        borderRadius: 999,
        backgroundColor: design.rowSurfaceMuted,
        borderWidth: 1,
        borderColor: design.subtleBorderColor,
      },
      groupSpacing: {
        marginBottom: 14,
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
      emptyCard: {
        ...design.cardStyle,
        padding: 28,
        gap: 12,
        alignItems: 'center',
        backgroundColor: design.rowSurface,
      },
      emptyTitle: {
        color: theme.colors.onSurface,
        fontWeight: '700',
      },
      emptyText: {
        color: design.palette.textMuted,
        textAlign: 'center',
        lineHeight: 22,
      },
    };
  })());
