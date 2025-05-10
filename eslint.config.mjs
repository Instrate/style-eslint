import { defineConfig, globalIgnores } from "eslint/config";

import ignore from "./ignore.default.mjs";
import { JsConfig, JsonConfig } from "./versions/node18/lint.mjs";

const ignoreList = ignore.retrieveIgnoreList();

export default defineConfig([globalIgnores(ignoreList), JsConfig, JsonConfig]);
