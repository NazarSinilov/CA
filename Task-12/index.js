const ulrs = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplace31313'];

const correctApi = async (arrUrls) => {
  const arrRes = [];

  try {
    for (let i = 0; i < arrUrls.length; i++) {
      await fetch(arrUrls[i]);
      arrRes.push(true)
    }
  } catch (err) {
    arrRes.push(false)
    console.log(err);
  }
  return arrRes;
}

correctApi(ulrs).then(res => console.log(res));

