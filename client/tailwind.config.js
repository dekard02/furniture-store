/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                textPrimary: "#666666",
                bgPrimary: "#f51c1c",
                secondary: "#121a25",
                sidebarItem: "#fc5130",
            },
        },
    },
    plugins: [],
};
