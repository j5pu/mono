import { IncomingRequestCf } from "./deps.ts";
import { WorkerEnv } from './worker_env.d.ts';

export default {
  async fetch(request: IncomingRequestCf, env: WorkerEnv): Promise<Response> {
    const fetchUrl = new URL("https://api.github.com/repos/j5pu/bbin/contents/bin/bbin");
    const headers = new Headers();
    headers.set("Accept", "application/vnd.github.VERSION.raw");
    headers.set("User-Agent", request.headers.get("User-Agent") || "bbin");
    console.log(request)
    try {
      const token = await env.kv.get("TOKEN", { type: "text" });
      headers.set("Authorization", `token ${token}`);
    } catch (e) {
      if (e.message.includes("not implemented")) {
        console.log("no token")
      } else {
        throw e;
      }
    }
    const content = new Request(fetchUrl.toString(), {
      headers,
      method: "GET",
    });
    console.log(content)
    return await fetch(content)
  }
};
