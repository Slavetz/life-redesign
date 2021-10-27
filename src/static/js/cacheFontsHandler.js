function cacheFonts(currentFonts, key) {
  if (!window.FontFace || !currentFonts || currentFonts.length === 0) {
    return;
  }

  const data = currentFonts.map((path) => {
    const options = { display: 'swap', style: 'normal' };
    let name;

    if (path.indexOf('roboto') > -1) {
      name = 'Roboto';
    } else if (path.indexOf('life') > -1) {
      name = 'Life';
    }

    if (path.indexOf('roboto-regular') > -1) {
      options.weight = 'normal';
    } else if (path.indexOf('roboto-medium') > -1) {
      options.weight = '500';
    } else if (path.indexOf('roboto-bold') > -1) {
      options.weight = '700';
    } else if (path.indexOf('roboto-black') > -1) {
      options.weight = '900';
    } else if (path.indexOf('life-bold') > -1) {
      options.weight = '700';
    }

    return { name, options, url: `url(/${path})` };
  });

  const fonts = data.map((font) => new window.FontFace(font.name, font.url, font.options));

  if (window.__fontsCached) {
    fonts.forEach((font) => {
      document.fonts.add(font);
    });
  } else {
    const promises = fonts.map(async (font) => {
      try {
        document.fonts.add(await font.load());
        return font.loaded;
      } catch (error) {
        console.error(error);
      }
    });

    Promise.all(promises).then(
      () => {
        window.localStorage.setItem(key, JSON.stringify(currentFonts));
      },
      (failure) => {
        console.error('failed loading fonts', failure);
      }
    );
  }
}

function isFontsCached(currentFonts, key) {
  function localStorageHandler() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }
  const canUseLocalStorage = localStorageHandler();

  const cachedFonts = canUseLocalStorage && JSON.parse(localStorage.getItem(key));
  let cacheStale = false;

  if (currentFonts && currentFonts.length > 0 && cachedFonts && cachedFonts.length > 0) {
    if (currentFonts.length !== cachedFonts.length) {
      cacheStale = true;
    } else {
      currentFonts.forEach((fontPath) => {
        if (cachedFonts.indexOf(fontPath) === -1) {
          cacheStale = true;
        }
      });
    }

    if (cacheStale) {
      localStorage.removeItem(key);
    }
  } else {
    cacheStale = true;
  }
  window.__fontsCached = !cacheStale;
}

const fonts = [
  'fonts/roboto-black-webfont.woff',
  'fonts/roboto-bold-webfont.woff',
  'fonts/roboto-medium-webfont.woff',
  'fonts/roboto-regular-webfont.woff',
  'fonts/space_mono_life-bold-webfont.woff',
];
isFontsCached(fonts, '__fontsCached');
cacheFonts(fonts, '__fontsCached');
