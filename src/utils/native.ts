import { isAndroid, isIos } from './utils';

/**
 *
 * @param type
 * @param data
 */
export function postMessage(type: string, data: any) {
  console.log(`[* >>> *] aos - ${isAndroid()} / ios - ${isIos}`);
  console.log(`[* >>> *] ${type}  `, data);
  window.ReactNativeWebView?.postMessage(JSON.stringify({ type, data }));
}
