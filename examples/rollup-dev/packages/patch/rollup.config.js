export default {
  input: "main.js",
  plugins: [
    {
      transform(code) {
        return code.replace(/\/\*REMOVE\*\/[^\n]*\n/g, "");
      }
    }
  ],
  output: {
    file: "bundle.js",
    format: "es"
  }
};
