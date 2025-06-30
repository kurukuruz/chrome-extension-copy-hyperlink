import { getTitle } from "./get-title/index";

{
  const title = getTitle(); // タイトルを取得
  const url = window.location.href; // ページのURLを取得

  const textItem = new ClipboardItem({
    'text/plain': new Blob([`[${title}](${url})`], { type: 'text/plain' }),
    'text/html': new Blob([`<a href=${url}>${title}</a>`], { type: 'text/html' })
  });

  navigator.clipboard.write([textItem]) // クリップボードにコピー
    .then(() => {
      // Snackbarを作成
      const snackbar = document.createElement('div');
      snackbar.textContent = 'ページのハイパーリンクをクリップボードにコピーしました';
      snackbar.style.position = 'fixed';
      snackbar.style.bottom = '20px';
      snackbar.style.left = '50%';
      snackbar.style.transform = 'translateX(-50%)';
      snackbar.style.backgroundColor = '#323232';
      snackbar.style.color = 'white';
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
    })
    .catch(err => {
      console.error('クリップボードへのコピーに失敗しました', err);
    });
}