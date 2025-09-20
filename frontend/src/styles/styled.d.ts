import type { Theme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line @typescript-eslint/no-empty-object-type
}
