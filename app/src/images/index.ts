import linux from './icons/icon_platform_linux.png';
import mac from './icons/icon_platform_mac.png';
import windows from './icons/icon_platform_win.png';

interface platformIconsProps {
  [key: string]: string;
  windows: string;
  mac: string;
  linux: string;
}

export const platformIcons: platformIconsProps = {
  windows: windows,
  mac: mac,
  linux: linux,
};
