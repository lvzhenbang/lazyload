const isSupportIntersectionObserver = () => (typeof window != 'undefined' &&'IntersectionObserver' in window);

export default isSupportIntersectionObserver;
