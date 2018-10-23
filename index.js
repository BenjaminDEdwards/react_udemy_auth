/** @format */

/**
sudo dd if=kali-linux-light-2018.3a-i386.iso of=/dev/sdb bs=512k
 cd ${ANDROID_HOME}/emulator
 ./emulator -avd  Nexus_5X_API_28_x86 -wipe-data

  sudo qemu-system-x86_64 -enable-kvm -m 512 -hda ~/Downloads/kali-linux-light-2018.3a-amd64.iso
  * 
 * */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
