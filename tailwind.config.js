module.exports = {
  content: ["./src/tailwind-style.css",
            "./index.html",
          "./output/script.js",
        "./src/script.ts"],
  theme: {
    extend: {
      backgroundColor:{
        "very-dark-blue":"hsl(216, 12%, 8%)",
        "normal-dark-blue":"hsl(216, 12%, 25%)",
        "Light-Grey":"hsl(217, 12%, 63%)",
        "Dark-Blue": "hsl(213, 19%, 18%)",
        "Medium-Grey": "hsl(216, 12%, 54%)"
      },
      height:{
        "vh":"100vh",
        "fourty":"400px",
      },
      width:{
        "fourty":"40%",
      },
      margin:{
        "20":"20px",
      }
    },
  },
  plugins: [],
}
