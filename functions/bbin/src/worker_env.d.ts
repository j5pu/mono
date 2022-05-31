import { KVNamespace } from './deps.ts';

export type Env = KVNamespace | typeof Deno.env;

export interface WorkerEnv {
    kv: Env;
}
