import Constants from 'expo-constants';
import { Platform } from 'react-native';

import { BareSessionUrlProvider } from './BareSessionUrlProvider';
import { ManagedSessionUrlProvider } from './ManagedSessionUrlProvider';

export interface SessionUrlProvider {
  getDefaultReturnUrl: () => string;
  getStartUrl: (authUrl: string, returnUrl: string) => string;
  getRedirectUrl: (urlPath?: string) => string;
}

export function getSessionUrlProvider(): SessionUrlProvider {
  if (Constants.manifest && Platform.OS !== 'web') {
    return new ManagedSessionUrlProvider();
  }
  return new BareSessionUrlProvider();
}
