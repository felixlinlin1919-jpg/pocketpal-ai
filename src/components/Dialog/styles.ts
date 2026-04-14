import {Dimensions, StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

const dialogHeight = Dimensions.get('window').height * 0.65;

export const createStyles = (theme: Theme, scrollableBorderShown?: boolean) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      dialog: {
        backgroundColor: design.sectionBackground,
        borderRadius: design.cardRadius,
        margin: 0,
        padding: 0,
        width: '92%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        overflow: 'hidden',
      },
      dialogTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.onSurface,
        paddingTop: 22,
      },
      dialogContent: {
        maxHeight: dialogHeight,
        paddingHorizontal: 24,
        paddingBottom: 4,
        borderTopWidth: scrollableBorderShown ? 1 : 0,
        borderBottomWidth: scrollableBorderShown ? 1 : 0,
        borderColor: design.subtleBorderColor,
        backgroundColor: design.sectionBackground,
      },
      dialogActionButton: {
        minWidth: 88,
        borderRadius: design.innerRadius,
      },
      actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 18,
        gap: 10,
        backgroundColor: design.mutedSurface,
        borderTopWidth: 1,
        borderTopColor: design.subtleBorderColor,
      },
    };
  })());
