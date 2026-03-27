import type { Config } from "tailwindcss"

export default <Partial<Config>>{
    safelist: [
        "h-24", "h-28", "h-32", "h-36", "h-40", "h-44", "h-48",
        "h-52", "h-56", "h-60", "h-64", "h-72", "h-80", "h-96",
    ],
    theme: {
        extend: {
            colors: {
                jw_red: "#da0000",
                jw_blue: "#C7EAFF",
                jw_grey: "#323232",
            },
            fontFamily: {
                body: ["Georgia", "Cambria", "\"Times New Roman\"", "Times", "serif"],
                heading: ["Rockwell", "\"Rockwell Nova\"", "\"Roboto Slab\"", "\"DejaVu Serif\"", "serif"],
            },
        },
    },
}
