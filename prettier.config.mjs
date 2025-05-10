/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export const prettierConfigDefault = {
    trailingComma: "none",
    endOfLine: "lf",
    useTabs: false,
    tabWidth: 4,
    quoteProps: "as-needed",
    objectWrap: "preserve"
};

export default { prettierConfigDefault };