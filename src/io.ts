const { open, copy, stdout } = Deno;

// Reader / Writer を使う
(async () => {
  const src = await open("example.txt");
  await copy(stdout, src);
})();
