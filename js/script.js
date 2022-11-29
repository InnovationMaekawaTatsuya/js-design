// htmlの読み込み完了後、jsの読み込み
// 【onload】
//     -> domツリー構造・画像・css全てを読み終えてからjs読み込みを実行する為、表示速度が「遅い」
// 【DOMContentLoaded】
//     -> domツリー構造だけ読み込めれば、js読み込みを実行する為、表示速度が「速い」
// ↑ の理由により【DOMContentLoaded】を採用
window.addEventListener('DOMContentLoaded', () => {
    // 変数 circle に サークル部分 のhtml部分を代入（idで抽出）
    const circle = document.getElementById('circle');
    // 変数 upBtn に 上ボタン部分 のhtml部分を代入（idで抽出）
    const upBtn = document.getElementById('up-btn');
    // 変数 downBtn に 下ボタン部分 のhtml部分を代入（idで抽出）
    const downBtn = document.getElementById('down-btn');

    // 現在の角度を、変数 angleValue に代入
    // circle の style　の transform の角度を指定して抽出
    let angleValue = circle.style.transform;
    // 合計角度を入れる空箱 angleSum を作成
    let angleSum;

    // upBtnイベント
    // upBtnがクリックされたらイベント実行
    upBtn.addEventListener('click', () => {
        // 現在の傾きに「-90deg」して計算
        angleSum = angleValue + "rotate(-90deg)";
        // circle の style の transform の角度を angleSumと同じにする
        circle.style.transform = angleSum;
        // 現在の角度 angleValue を 計算し直した角度 angleSum に変更
        angleValue = angleSum;
    });

    // downBtnイベント
     // downBtnがクリックされたらイベント実行
    downBtn.addEventListener('click', () => {
        // 現在の傾きに「+90deg」して計算
        angleSum = angleValue + "rotate(90deg)";
        // circle の style の transform の角度を angleSumと同じにする
        circle.style.transform = angleSum;
        // 現在の角度 angleValue を 計算し直した角度 angleSum に変更
        angleValue = angleSum;
    });
});