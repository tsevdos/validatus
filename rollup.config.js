import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
// import serve from "rollup-plugin-serve";

export default {
  input: "src/validatus.js",
  output: [
    {
      file: "dist/validatus.js",
      name: "validatus",
      format: "umd",
      sourcemap: true,
    },
    {
      file: "dist/validatus.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel(),
    // serve({
    //   verbose: true,
    //   port: 3000,
    // }),
  ],
};
