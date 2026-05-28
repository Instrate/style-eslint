import { lint } from "./index.mjs";

const ignoreList = [...lint.IgnoreListDefault];

export default lint.n18.defineConfig([
    lint.n18.globalIgnores(ignoreList),
    lint.n18.JsConfig,
    lint.n18.JsonConfig,
    lint.n18.MarkdownConfig
]);
