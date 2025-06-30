import { GetTitlePlugin } from "../type";

export const GoogleDocumentGetTitlePlugin = {
  match: (url: string): boolean => {
    return url.match(/docs.google.com\/document\/d\//) !== null;
  },
  getTitle: (): string => {
    // Google Docsのタイトルはinput要素に格納されている
    const titleElement = document.querySelector<HTMLInputElement>('input.docs-title-input');
    if (titleElement) {
      return titleElement.value;
    }
    
    // タイトルが取得できない場合は、ページのタイトルを返す
    return document.title || window.location.href;
  }
} satisfies GetTitlePlugin;
