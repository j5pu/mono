import { KVNamespace } from './deps.ts';

export interface WorkerEnv {
    kv: KVNamespace;
    readonly flags?: string;
    readonly allowIps?: string;
    readonly denyIps?: string;
    readonly directoryListingLimit?: string; // default: 1000 (max) to workaround r2 bug
}
