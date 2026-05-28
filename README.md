# style eslint preferences

## Usage example

* Node version >=v18
  - `eslint.config.mjs`
      ```javascript
          import { lint } from "instrate-eslint-preferences";
    
          const ignoreList = [...lint.IgnoreListDefault];
          
          export default lint.n18.defineConfig([
              lint.n18.globalIgnores(ignoreList),
              lint.n18.JsConfig,
              lint.n18.JsonConfig,
              lint.n18.MarkdownConfig
          ]);
      ```