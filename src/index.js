import 'intersection-observer';

import defaults from '../config/defaults';
import version from '../config/version';

import inBrowser from './utils/inBrowser';
import isSupportLoading from './utils/isSupportLoading';
// import isSupportIntersectionObserver from './utils/isSupportIntersectionObserver';

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

    if (this.options.native && isSupportLoading()) {
      this.loadNativeAll();
    } else {
      this.instance();
      this.loadAll();
    }
  }

  instance() {
    // if (!isSupportIntersectionObserver) return false;

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
    if (this.options.setBg) {
      el.removeAttribute('loading');
      el.setAttribute('style', `background-image: url('${el.dataset.src}');`);
    } else {
      el.setAttribute('src', el.dataset.src);
    }

    this.loadingCount += 1;
    el.addEventListener('load', () => {
      if (this.options.fade) {
        el.classList.add('loaded');
      }

      if (this.options.icon) {
        el.classList.remove('loading');
      }
      console.log('xx');
    });

    el.addEventListener('error', () => {
      if (this.options.icon) {
        el.classList.remove('loading');
        el.classList.add('loading-error');
      }
    });
  }

  loadAll() {
    this.$els.forEach((el) => {
      if (this.options.fade) {
        el.classList.add('fade');
      }

      if (this.options.icon) {
        el.classList.add('loading');
      }

      el.setAttribute('loading', 'lazy');
      this.observer.observe(el);
    });
  }

  loadNativeAll() {
    this.$els.forEach((el) => {
      el.setAttribute('loading', 'lazy');
      el.setAttribute('src', el.dataset.src);
      this.elHandle(el);
    });
  }

  add(el) {
    if (this.options.native && isSupportLoading()) {
      el.setAttribute('loading', 'lazy');
    } else {
      this.observer.observe(el);
    }
  }

  remove(el) {
    if (this.options.native && isSupportLoading()) {
      el.setAttribute('loading', 'eager');
    } else {
      this.observer.unobserve(el);
    }
  }
}

if (inBrowser) {
  window.Lazyload = Lazyload;
  window.console.log('plugin is running browser.');
}

export default Lazyload;
