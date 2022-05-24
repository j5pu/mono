# Workers

```shell
npx create-nx-workspace --name mono --preset=apps --nxCloud --ci github --cli nx
# npm init nx-workspace
# npx create-nx-workspace

npm i -D nx @nrwl/node
nx generate @nrwl/node:app bbin --directory functions --setParserOptionsProject 

# Plugin for cf (generators/executors)
npm install -D @nrwl/nx-plugin
nx g @nrwl/nx-plugin:plugin nx-cf --directory plugins --importPath @mnopi/nx-cf --setParserOptionsProject 
```
