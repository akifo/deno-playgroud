async function main() {
  // 2-1
  const conn = await Deno.dial("tcp", "127.0.0.1:8888");
  // 2-2
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  // 2-3
  await conn.write(encoder.encode("hello!"));
  const buffer = new Uint8Array(1024);
  const { eof, nread } = await conn.read(buffer);
  const reply = decoder.decode(buffer.slice(0, nread));
  console.log(reply); // => hello!
}
main();
