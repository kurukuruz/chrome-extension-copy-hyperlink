import { CreatePlainTextPlugin } from "../type";

export const MarkdownHyperlinkCreatePlainTextPlugin = {
  createPlainText: (title: string, url: string): string => {
    // Markdown形式のハイパーリンクを生成
    return `[${title}](${url})`;
  }
} satisfies CreatePlainTextPlugin;
