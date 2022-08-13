export default {
  input: "./main.js",
  plugins: [
    {
      async resolveId(src, importer) {
        const { id } = await this.resolve(src, importer, { skipSelf: true });

        if (id.indexOf("/log.dev.js")) {
          return "./log.prod.js";
        }
      }
    }
  ],
  output: {
    file: "bundle.js",
    format: "es"
  }
};
