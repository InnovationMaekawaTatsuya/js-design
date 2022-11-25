window.addEventListener('load', () => {
    // 要素取得
    const circle = document.getElementById('circle');
    const upBtn = document.getElementById('up-btn');
    const downBtn = document.getElementById('down-btn');

    // 現在の角度
    let angleValue = circle.style.transform;
    // 合計角度
    let angleSum;

    // upBtnイベント
    upBtn.addEventListener('click', () => {
        angleSum = angleValue + "rotate(-90deg)";
        circle.style.transform = angleSum;
        angleValue = angleSum;
    });

    // downBtnイベント
    downBtn.addEventListener('click', () => {
        angleSum = angleValue + "rotate(90deg)";
        circle.style.transform = angleSum;
        angleValue = angleSum;
    });
});