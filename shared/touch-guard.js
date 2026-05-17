// iOS Safari ignores user-scalable=no, so intercept gesture events to prevent pinch-zoom.
// Gated on visualViewport.scale: if the page is already zoomed (e.g. carried over from a prior
// session), let the pinch through so the user can pinch back out — never trap them zoomed in.
(function () {
  if (!window.visualViewport) return;
  function block(event) {
    if (window.visualViewport.scale > 1.001) return;
    event.preventDefault();
  }
  document.addEventListener('gesturestart', block, { passive: false });
  document.addEventListener('gesturechange', block, { passive: false });
})();
