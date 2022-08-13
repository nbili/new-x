export default {
  input: "main.js",
  plugins: [
    {
      load(id) {
        if (id.indexOf("/build.js") > 0) {
          return `export const type = "production"`;
        }
      }
    }
  ],
  output: {
    file: "bundle.js",
    format: "es"
  }
};
