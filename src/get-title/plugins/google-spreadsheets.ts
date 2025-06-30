import { GetTitlePlugin } from "../type";

export const GoogleSpreadsheetsGetTitlePlugin = {
  match: (url: string): boolean => {
    return url.match(/docs.google.com\/spreadsheets\/d\//) !== null;
  },
  getTitle: (): string => {
    // Google Sheetsのタイトルはinput要素に格納されている
    const titleElement = document.querySelector<HTMLInputElement>('input.docs-title-input');
    if (titleElement) {
      const sheetName = titleElement.value;

      const tabNameElement = document.querySelector<HTMLSpanElement>('div.docs-sheet-tab.docs-sheet-active-tab span.docs-sheet-tab-name');
      if (tabNameElement) {
        return `${sheetName} - ${tabNameElement.textContent}`;
      }

      return sheetName;
    }

    // タイトルが取得できない場合は、ページのタイトルを返す
    return document.title || window.location.href;
  }
} satisfies GetTitlePlugin;