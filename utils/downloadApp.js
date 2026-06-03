export const handleDownloadApp = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Android devices
  if (/android/i.test(userAgent)) {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anonymous.Rekory&hl=en_IN",
      "_blank"
    );
    return;
  }

  // iPhone / iPad devices
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.open(
      "https://apps.apple.com/us/app/rekory/id6759279994",
      "_blank"
    );
    return;
  }

  // Desktop or unknown device
  window.open(
    "https://play.google.com/store/apps/details?id=com.anonymous.Rekory&hl=en_IN",
    "_blank"
  );
};