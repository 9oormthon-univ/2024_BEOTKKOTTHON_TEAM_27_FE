/**
 * Androi App 확인 함수 (sodong-aos)
 */
export function isAndroid() {
  if (window) {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /sodong_aos/i.test(userAgent);
  }
}
