/**
 * Android App 확인 함수 (sodong-aos)
 */
export function isAndroid() {
  if (window) {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /sodong_aos/i.test(userAgent);
  }
}

/**
 * 텍스트 복사 함수
 */
export function copyText(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator?.clipboard?.writeText)
        throw new Error('복사 기능이 제공되지 않는 브라우저입니다.');

      window.navigator.clipboard.writeText(text).then(() => {
        resolve();
      });
    } catch (e) {
      reject();
    }
  });
}

/**
 * 파일 다운로드 함수
 */
export function downloadImage(url: string): Promise<string> {
  return new Promise((resolve) => {
    fetch(url, {
      method: 'GET',
    })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);

        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.download = 'sodong_image.png';
        aTag.click();

        resolve('');
      });
  });
}

/**
 * 패키지 이름 가져오는 함수
 */
export function getPackageName(sns: string): string {
  if (sns == 'dangeun') return 'com.towneers.www';
  else if (sns == 'kakaochannel') return 'com.kakao.yellowid';
  else if (sns == 'kakaotalk') return 'com.kakao.talk';
  else return '';
}

/**
 * 이미지 Full Url 가져오는 함수
 * @param filename - 파일명
 */
export function getImageFullUrl(filename: string): string {
  const BASE_URL = import.meta.env.VITE_APP_FAST_URL;
  if (!filename) return '';
  return `${BASE_URL}/api/ibm/object/${filename.replace('.', '/.')}`;
}

/**
 * 시간 비교하는 함수 (sec)
 * @param date
 */
export function isOverThan(dateStr: string, sec: number): boolean {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  return diff / 1000 >= sec;
}

/**
 *  날짜 포맷팅 함수 (YYYY-MM-DD)
 * @param dateStr
 */
export function getFormattedDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
