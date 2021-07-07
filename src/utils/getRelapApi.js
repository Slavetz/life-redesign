let relapAPIPromise;

export default function getRelapApi({ token, url }) {
  if (relapAPIPromise) return relapAPIPromise;

  relapAPIPromise = new Promise((resolve) => {
    const relapScript = document.createElement('script');
    relapScript.src = 'https://relap.io/v7/relap.js';

    window.relapTasks = window.relapTasks || [];
    window.relapTasks.push((relapAPI) => {
      relapAPI
        .init({
          token,
          url,
        })
        .then(() => {
          resolve(relapAPI);
        });
    });

    document.body.appendChild(relapScript);
  });

  return relapAPIPromise;
}
