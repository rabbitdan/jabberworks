import type { Config } from "tailwindcss"

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                jw_red: "#da0000",
                jw_blue: "#C7EAFF",
            },
            fontFamily: {
                body: ["Georgia", "Cambria", "\"Times New Roman\"", "Times", "serif"],
                heading: ["Rockwell", "\"Rockwell Nova\"", "\"Roboto Slab\"", "\"DejaVu Serif\"", "serif"],
            },
        },
    },
}
