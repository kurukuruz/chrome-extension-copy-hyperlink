import { MarkdownHyperlinkCreatePlainTextPlugin } from "./plugins/markdown-hyperlink"

const PLUGIN = MarkdownHyperlinkCreatePlainTextPlugin;
export const createPlainText = (title: string, url: string): string => {
    // プラグインを使用してプレーンテキストを生成
    return PLUGIN.createPlainText(title, url);
}
