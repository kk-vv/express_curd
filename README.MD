
### Run

```
npm init
npm run start
```

### Step by step build

- init

```
mkdir projectname
cd projectname
npm init
npm install express typescript ts-node @types/node @types/express --save-dev
```

- tsconfig.json

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- code

```
src/
```

- package.json scripts

```
"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js"
}
> npm run start
```