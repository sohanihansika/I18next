# I18next

Make sure your tsconfig compilerOptions has the strict flag or the strictNullChecks set to true.
The newest i18next versions only support TypeScript v5. Older TypeScript versions are not supported any longer with i18next > v23.
To use it with TypeScript v4, use i18next@22.5.1.

npm create vite@latest i18next-demo --template react-ts
cd i18next-demo
npm install
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
