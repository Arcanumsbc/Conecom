const wrapper = document.querySelector('.video');
const heroMediaPrew = document.querySelector('[data-prew]');
const button = document.querySelector('.video__button');
const iconYt = document.querySelector('.hero__media-watch-yt');
const iconShare = document.querySelector('.hero__media-share');
const iconWatch = document.querySelector('.hero__media-watch');
const iframe = document.createElement('iframe');

const initVideoPlayer = () => {
  button.addEventListener('click', () => {
    heroMediaPrew.classList.add('is-hidden');
    button.classList.add('is-hidden');
    iconYt.classList.add('is-hidden');
    iconShare.classList.add('is-hidden');
    iconWatch.classList.add('is-hidden');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('style', 'border:none');
    iframe.setAttribute('width', '482');
    iframe.setAttribute('heigth', '317');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/XQUk6sS0NvA?controls=0&autoplay=1');
    wrapper.append(iframe);
  });
};

export {initVideoPlayer};
