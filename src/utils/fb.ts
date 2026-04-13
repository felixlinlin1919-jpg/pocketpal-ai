let isAppCheckInitialized = false;

export const initializeAppCheck = async () => {
  if (isAppCheckInitialized) {
    return;
  }

  isAppCheckInitialized = true;
  console.info('Firebase App Check 已停用，將使用既有 fallback 流程。');
};

export const getAppCheckToken = async (): Promise<string | null> => {
  return null;
};
