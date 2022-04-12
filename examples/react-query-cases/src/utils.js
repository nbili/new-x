const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

async function client(post) {
  return new Promise(resolve => {
    if (post) {
      console.log(`mock mutation once ..`);
      data.push(post);
      resolve(data);
    } else {
      console.log(`mock query once ..`);
      resolve(data);
    }
  });
}

export { client };
