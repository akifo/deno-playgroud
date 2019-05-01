async function main() {
  // 1-1
  const listener = Deno.listen("tcp", "127.0.0.1:8888");
  // 1-2
  const conn = await listener.accept();
  // 1-3
  const buffer = new Uint8Array(1024);
  const { eof, nread } = await conn.read(buffer);
  // 1-4
  await conn.write(buffer.slice(0, nread));
  // 1-5
  conn.close();
}
main();
