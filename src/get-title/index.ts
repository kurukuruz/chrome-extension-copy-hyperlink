import { GoogleDocumentGetTitlePlugin } from "./plugins/google-document";
import { GoogleSpreadsheetsGetTitlePlugin } from "./plugins/google-spreadsheets";
import { GetTitlePlugin } from "./type";

const plugins = [
    GoogleDocumentGetTitlePlugin,
    GoogleSpreadsheetsGetTitlePlugin
] satisfies GetTitlePlugin[];

export const getTitle = (): string => {
    return plugins.find(plugin => plugin.match(window.location.href))?.getTitle() ||
    document.title ||
    window.location.href;
}