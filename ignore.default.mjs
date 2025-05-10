import fs from 'node:fs';

const ignoreHandlerDefault = ".gitignore";

export function mapperCallbackDefault(plainStringContent){
    return plainStringContent;
}

export function clearingCallbackDefault(mappedContent){
    return mappedContent
        .replace("\r", "")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));
}

export function retrieveIgnoreList(ignoreHandler = ignoreHandlerDefault, mapperCallback = mapperCallbackDefault, clearingCallback = clearingCallbackDefault) {
    let content = "";
    try {
        content = fs.readFileSync(ignoreHandler, "utf8", (err) => {
            if (err) {
                throw err;
            }
        });
    } catch (e) {
        console.error(e);
    } finally {
        content = mapperCallback(content);
        content = clearingCallback(content);
    }
    return content;
}

export default { retrieveIgnoreList };