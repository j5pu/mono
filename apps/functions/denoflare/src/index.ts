import { IncomingRequestCf, ModuleWorkerContext } from "./deps.ts";
import { WorkerEnv } from './worker_env.d.ts';

export async function token(env: WorkerEnv) {
  if (env.kv === undefined) {
    return "undefined";
  } else {
    return "defined";
  }
}

export default {
  // handle the request
  async fetch(request: IncomingRequestCf,
              env: WorkerEnv,
              context: ModuleWorkerContext){
    const tok = await token(env)
    console.log(request, env, context);

    return await fetch("https://api.my-ip.io/ip");
  },
};
