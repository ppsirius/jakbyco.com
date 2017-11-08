const mobileSize = '(max-width: 1024px)';
// const desktopSize = '(min-width: 1025px)';

class MediaQuery {
  static isMobile() {
    return window.matchMedia(mobileSize).matches;
  }
}

export default MediaQuery;