# tauri-nuxt
Simple template to use Tauri with Nuxt 3 with some pre-installed and configured modules.  
The Nuxt configuration is based on the [official V2 recommandations](https://v2.tauri.app/start/frontend/nuxt/).  

The pre-installed modules are:
- eslint-module
- fonts
- icon
- tailwindcss

## Update the package's informations
After cloning, you need at least the following informations:
- package name in `package.json`.
- package informations in `src-tauri/Cargo.toml`.
- app information in `src-tauri/tauri.conf.json`.

## Start the app
This repo was built using `bun` but you can use an other package manager.  
Use the tauri npm script to start the app in development or production:  
```
bun tauri dev
# or 
bun tauri build
```

## Official documentation
[Nuxt 3](https://nuxt.com/)  
[Tauri V2](https://v2.tauri.app/)  