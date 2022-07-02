window.addEventListener('DOMContentLoaded', supportFormatWebp);

function supportFormatWebp() {
  const elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    const isSupport = elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    if (isSupport) {
      document.documentElement.classList.add('webp');
    }
    return isSupport;
  } else {
    return false;
  }
}
