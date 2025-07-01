import { createPlainText } from "./create-plain-text/index";
import { getTitle } from "./get-title/index";

const main = () => {
  try {
  const title = getTitle(); // タイトルを取得
  const url = window.location.href; // ページのURLを取得

  const plainText = createPlainText(title, url);

  const textItem = new ClipboardItem({
    'text/plain': new Blob([plainText], { type: 'text/plain' }),
    'text/html': new Blob([`<a href=${url}>${title}</a>`], { type: 'text/html' })
  });

  navigator.clipboard.write([textItem]) // クリップボードにコピー
    .then(() => {
      createSuccessNotification('ページのハイパーリンクをクリップボードにコピーしました');
    })
    .catch(err => {
      console.error('クリップボードへのコピーに失敗しました', err);
      createErrorNotification('クリップボードへのコピーに失敗しました');
    });

  } catch (error) {
    console.error('ページデータの取得に失敗しました', error);
    createErrorNotification('ページデータの取得に失敗しました');
  }
}

const createSuccessNotification = (message: string) => {
  const snackbarConfig: SnackbarConfig = {
    message: message,
    backgroundColor: '#4CAF50', // 成功時の背景色
    textColor: 'white' // 成功時のテキスト色
  };
  
  displaySnackbar(snackbarConfig);
}

const createErrorNotification = (message: string) => {
  const snackbarConfig: SnackbarConfig = {
    message: message,
    backgroundColor: '#f44336', // エラー時の背景色
    textColor: 'white' // エラー時のテキスト色
  };
  
  displaySnackbar(snackbarConfig);
}

type SnackbarConfig = {
  message: string;
  backgroundColor?: string;
  textColor?: string;
}

const displaySnackbar = (config: SnackbarConfig) => {
    // Snackbarを作成
  const snackbar = document.createElement('div');
  snackbar.textContent = config.message;
  snackbar.style.position = 'fixed';
  snackbar.style.bottom = '20px';
  snackbar.style.left = '50%';
  snackbar.style.transform = 'translateX(-50%)';
  snackbar.style.backgroundColor = config.backgroundColor || '#323232';
  snackbar.style.color = config.textColor || 'white';
  snackbar.style.padding = '10px 20px';
  snackbar.style.borderRadius = '5px';
  snackbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  snackbar.style.zIndex = '1000';
  snackbar.style.fontSize = '14px';
  snackbar.style.opacity = '0';
  snackbar.style.transition = 'opacity 0.5s ease';
  document.body.appendChild(snackbar);

  // 徐々に表示
  setTimeout(() => {
    snackbar.style.opacity = '1';
  }, 10);

  // 3秒後に徐々に消える
  setTimeout(() => {
    snackbar.style.opacity = '0';
    snackbar.addEventListener('transitionend', () => {
      snackbar.remove();
    });
  }, 3000);
}

main();