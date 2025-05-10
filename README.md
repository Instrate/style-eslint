# style eslint preferences

## Usage example

* Node version >=v18
  - `eslint.config.mjs`
      ```javascript
          import { defineConfig, globalIgnores } from "eslint/config";
        
          import ignore from "./ignore.default.mjs";
          import {
              JsonConfig, 
              TsConfig
              /* or any other available */
          } from "./versions/node18/lint.mjs";
        
          const ignoreList = ignore.retrieveIgnoreList();
    
          export default defineConfig([
              globalIgnores(ignoreList),
              TsConfig,
              JsonConfig
          ]);
      ```