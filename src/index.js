import defaults from '../config/defaults';
import version from '../config/version';

import inBrowser from './utils/inBrowser';
import isSupportIntersectionObserver from './utils/isSupportIntersectionObserver';

class Lazyload {
  constructor(els, opt) {
    this.$els = els;
    this.options = {
      ...defaults,
      ...opt,
    };
    this.loadingCount = 0;
    this.observer = null;
    this.init();
    this.version = version;
  }

  init() {
    if (!this.$els) {
      throw new Error('this.$els must be exsits.');
    }

    this.instance();
    this.loadAll();
  }

  instance() {
    if (!isSupportIntersectionObserver) return false;

    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.lazyEnter(entry.target);
        } else {
          this.lazyExit(entry.target);
        }
      });
    }, {
      root: this.options.target === document ? null : this.options.target,
      rootMargin: this.options.thresholds || `${this.options.threshold}px`,
    });

    return true;
  }

  lazyEnter(el) {
    this.observer.unobserve(el);
    this.elHandle(el);
  }

  lazyExit() {

  }

  elHandle(el) {
    el.setAttribute('src', el.dataset.src);

    this.loadingCount += 1;

    el.addEventListener('load', () => {
      console.log('xx')
    });
  }

  loadAll() {
    this.$els.forEach((el) => {
      this.observer.observe(el);
    });
  }

  add(el) {
    this.observer.observe(el);
  }

  remove(el) {
    this.observer.unobserve(el);
  }
}

if (inBrowser) {
  window.Lazyload = Lazyload;
  window.console.log('plugin is running browser.');
}

export default Lazyload;
