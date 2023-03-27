const ulrs = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplace31313', 'asdasd', [123]];

const correctApi = async (arrUrls) => {
  const arrRes = [];
    for (let i = 0; i < arrUrls.length; i++) {
      await fetch(arrUrls[i])
      .then(res => arrRes.push(true))
      .catch(err => arrRes.push(false))
    }
  return arrRes;
}

correctApi(ulrs).then(res => console.log(res));