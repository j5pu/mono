// Use 127.0.0.1

import { assertEquals, assertMatch }
  from "https://deno.land/std@0.140.0/testing/asserts.ts";

Deno.test("Content", async () => {
  const resp = await fetch("http://127.0.0.1:8080");
  assertEquals(resp.status, 200);
  assertMatch(await resp.text(), /\/denoflare\.dev/);
  }
);
