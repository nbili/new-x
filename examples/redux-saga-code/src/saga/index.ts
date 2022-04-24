function* generator(): Generator<1 | 2, void, unknown> {
  let foo = yield 1;
  console.log(foo);
  let bar = yield 2;
  console.log(bar);
}

let it = generator();

it.next();
it.next(`bar`);
it.next(`foo`);

// it.throw()
// it.return()

export { generator };
