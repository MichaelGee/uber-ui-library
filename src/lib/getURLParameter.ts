export const getURLParameter = (name, url) => {
  return (
    decodeURIComponent(
      (new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).exec(url) || [null, ''])[1].replace(
        /\+/g,
        '%20'
      )
    ) || null
  );
};
