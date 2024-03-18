interface WebAppInterface {
  showToast(toast: string): void;
  downloadImage(imgUrl: String): String;
  shareInsta(uriStr: String): void;
}

declare var Android: WebAppInterface;
