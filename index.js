(() => {
  const $btn = document.querySelector('#js-btn');
  const $modal = document.querySelector('#js-modal');
  const $modalCloseBtn = document.querySelector('#js-close-btn');
  const $modalContents = document.querySelector('#js-modal-contents');

  // ボタンを押下時にモーダルを開く
  $btn.addEventListener('click', () => {
    $modal.style.display = 'block';
  });

  // モーダルの閉じるボタンを押下時にモーダルを閉じる
  $modalCloseBtn.addEventListener('click', () => {
    $modal.style.display = 'none';
  });

  // モーダルのオーバーレイを押下時にモーダルを閉じる
  $modal.addEventListener('click', () => {
    $modal.style.display = 'none';
  });

  // モーダルの中身を押下時にモーダルが閉じないように制御
  $modalContents.addEventListener('click', (event) => {
    event.stopPropagation();
  });
})();
