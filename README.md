npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


@tailwind base;
@tailwind components;
@tailwind utilities;



npm install -g json-server

json-server --watch data.json --port 5000