import React, {useContext} from 'react';

import {observer} from 'mobx-react';
import {Text} from 'react-native-paper';

import {Dialog as AppDialog} from '../Dialog';
import {styles} from './styles';

import {L10nContext} from '../../utils';

type ModelsResetDialogProps = {
  testID?: string;
  visible: boolean;
  onDismiss: () => void;
  onReset: () => void;
};

export const ModelsResetDialog: React.FC<ModelsResetDialogProps> = observer(
  ({testID, visible, onDismiss, onReset}) => {
    const l10n = useContext(L10nContext);
    return (
      <AppDialog
        testID={testID}
        visible={visible}
        onDismiss={onDismiss}
        title={l10n.components.modelsResetDialog.confirmReset}
        actions={[
          {
            label: l10n.common.cancel,
            onPress: onDismiss,
            mode: 'text',
            testID: 'cancel-reset-button',
          },
          {
            label: l10n.components.modelsResetDialog.proceedWithReset,
            onPress: onReset,
            mode: 'contained',
            testID: 'proceed-reset-button',
          },
        ]}>
        <Text style={styles.paragraph}>
          這會將模型設定重設為預設值，包含
          <Text variant="labelMedium"> 系統提示詞、聊天模板、溫度 </Text>
          等自訂內容。
        </Text>

        <Text style={styles.paragraph}>
          你已下載的模型檔案不會被刪除。
        </Text>

        <Text style={styles.paragraph}>本機模型清單也會保留。</Text>
      </AppDialog>
    );
  },
);
