export default async function getPostsData() {
  const res1 = await fetch('https://api.corr.life/public/posts/lenta').then((res) => res.json());
  const res2 = await fetch(`https://api.corr.life/public/posts/lenta?after=${res1.meta.last}`).then((res) =>
    res.json()
  );
  const res3 = await fetch(`https://api.corr.life/public/posts/lenta?after=${res2.meta.last}`).then((res) =>
    res.json()
  );
  const categories = await fetch(`https://api.corr.life/public/categories`).then((res) => res.json());

  const arr = [...res1.data, ...res2.data, ...res3.data];

  const obj = {
    Categories: categories.data,
    AA: arr.splice(0, 6),
    B1: arr.splice(0, 1)[0],
    B2: arr.splice(0, 5),
    C1: arr.splice(0, 1)[0],
    C2: {
      Main: arr.splice(0, 8),
      Last: arr.splice(0, 8),
    },
    Rassledovaniya: arr.splice(0, 6),
    EdChoise: arr.splice(0, 6),
    Wow: arr.splice(0, 6),
    Dich: arr.splice(0, 8),
  };

  // eslint-disable-next-line no-console
  console.log('data loaded!:', !!obj);
  return obj;
}
