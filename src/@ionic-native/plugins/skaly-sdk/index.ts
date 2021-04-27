import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Skaly SDK
 * @description
 * The Skaly SDK Ionic Native wrapper
 *
 * @usage
 * ```typescript
 * import './ExploreContainer.css';
 * import { IonButton } from '@ionic/react';
 * import { SkalySDK } from "@skaly/ionic-native-skaly-sdk"
 * interface ContainerProps { }
 *
 * async function startSkaly() {
 *   await SkalySDK.start("my_rootkey") // Is your dashboard root key
 * }

 * const ExploreContainer: React.FC<ContainerProps> = () => {
 *   return (
 *     <div className="container">
 *       <IonButton color="light" onClick={startSkaly}>Start Skaly</IonButton>
 *     </div>
 *   );
 * };

 * export default ExploreContainer;
 * ```
 */
@Plugin({
  pluginName: 'SkalySDK',
  plugin: 'cordova-plugin-skaly-sdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'skalySDK', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class SkalySDK extends IonicNativePlugin {
  /**
   * Start the SDK
   * @param {string} rootKey The root key to talk to the dashboard (or an app using the dashboard SDK)
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  start(rootKey: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Check if user has a scale connected
   *
   * @returns A json object containing a boolean value at the key "hasScale". Example: {"hasScale": true}
   */
  @Cordova()
  hasScale(): Promise<HasScaleReply> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Check if user has a watch connected
   *
   * @returns A json object containing a boolean value at the key "hasWatch". Example: {"hasWatch": true}
   */
  @Cordova()
  hasWatch(): Promise<HasWatchReply> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Add watch
   *
   * @param {string} supportedWatches Comma-separated string of what watches to support (empty string = all watches) (Example: "withings")
   * @return {Promise<any>} Returns a promise that resolves when connection is succeeded
   */
  @Cordova()
  addWatch(supportedWatches: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Add scale
   *
   * @param {string} supportedScales Comma-separated string of what scales to support (empty string = all scales) (Example: "withings,virtual_scale")
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addScale(supportedScales: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Add user profile
   *
   * @param {string} handle the handle as to which the user is known
   * @param {number} sex biological gender of the user (0: male, 1: female)
   * @param {Date} birthday birthday of the user (javascript date object, required)
   * @param {number} length length of the user (in CM)
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addIdentity(handle: string, sex: number, birthday: Date, length: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Reads current user data
   *
   * @return {Promise<Array<WatchReply>>} A callback with an array of WatchReply objects in JSON.
   */
  @Cordova()
  getWatchData(): Promise<Array<WatchReply>> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Gets scale data for handle
   *
   * @param {string} handle the handle of which data to retrieve
   * @param {number} uid retrieve all data after this uid (useful for retrieving large amounts of data)
   * @return {Promise<GetScaleDataReply>} A callback with an array of ScaleReply objects in JSON + the last UID index.
   */
  @Cordova()
  getScaleData(handle: string, uid: number): Promise<GetScaleDataReply> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Reads current user data
   *
   * @return {Promise<UserScaleReply>} A callback with scannedHandle (string) + the scale reply. Example: {scannedHandle: "peter", scaleReply: {weight: "75", timestamp:686790000}}
   */
  @Cordova()
  startReading(): Promise<UserScaleReply> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Allows consent for a given handle
   *
   * @param {string} to Allow to send data to this root key (most likely the same as the dashboard root key)
   * @param {string} handle Allow sending data for this user / handle
   * @return {Promise<any>} A callback when the access is granted
   */
  @Cordova()
  allowAccessToData(to: string, handle: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}

/**
 * The response that will be recieved when a user wants to read their current weighting data.
 */
export interface UserScaleReply {
  scaleReply: ScaleReply;
  scannedHandle: string;
}

/**
 * The response that will be recieved when a user wants to read their current watch data.
 */
export interface WatchReply {
  steps: number | null;
  distance: string | null;
  calories: string | null;
  timestamp: number;
}

/**
 * The response that will be recieved when a scale has sent data.
 */
export interface ScaleReply {
  weight: string;
  timestamp: number;
  impedance: string | null;
  viceralFat: string | null;
  bmi: string | null;
  baw: string | null;
  bodyFat: string | null;
  muscleMass: string | null;
  muscleQuality: string | null;
  boneMass: string | null;
  bodyWater: string | null;
}

/**
 * The response that will be recieved when hasScale is called.
 */
export interface HasScaleReply {
  hasScale: boolean;
}

/**
 * The response that will be recieved when hasWatch is called.
 */
export interface HasWatchReply {
  hasWatch: boolean;
}

/**
 * The response that will be recieved when getScaleData is called.
 */
export interface GetScaleDataReply {
  scaleReplies: Array<ScaleReply>;
  lastUID: number;
}
