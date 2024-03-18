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
export function downloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
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

        console.log('다운로드 성공!');
        resolve();
      })
      .catch((e) => {
        console.error(e);
        reject();
      });
  });
}
