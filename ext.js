(async function test() {
  const req = await fetch(
    'https://my-json-server.typicode.com/typicode/demo/comments'
  );
  const data = await req.json();
  console.log(data);
})();
