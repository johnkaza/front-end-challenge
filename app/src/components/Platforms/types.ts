export interface PlatformsProps {
  readonly platformsList?: {
    [key: string]: boolean;
    windows: boolean;
    mac: boolean;
    linux: boolean;
  };
}
