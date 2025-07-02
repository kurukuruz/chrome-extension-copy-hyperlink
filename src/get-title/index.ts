import { GoogleDocumentGetTitlePlugin } from "./plugins/google-document";
import { GoogleSpreadsheetsTabFirstGetTitlePlugin } from "./plugins/google-spreadsheets-tab-first";
import { GetTitlePlugin } from "./type";

const plugins = [
    GoogleDocumentGetTitlePlugin,
    GoogleSpreadsheetsTabFirstGetTitlePlugin
] satisfies GetTitlePlugin[];

export const getTitle = (): string => {
    return plugins.find(plugin => plugin.match(window.location.href))?.getTitle() ||
    document.title ||
    window.location.href;
}
