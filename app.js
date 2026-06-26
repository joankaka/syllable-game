// 数据直接嵌入，确保手机端无需 fetch 也能完美运行
const wordData = [
  { "id": 1, "word": "about", "definition": "关于，大约", "difficulty": "小学" },
  { "id": 2, "word": "academic", "definition": "学术的，大学的", "difficulty": "中学" }
];

function renderWords(list) {
    const container = document.getElementById('word-container');
    container.innerHTML = list.map(item => `
        <div class="match-item">
            <div class="word-part" onclick="speak('${item.word}')">${item.word}</div>
            <div class="def-part" onclick="checkMatch(this)">${item.definition}</div>
        </div>
    `).join('');
}

function speak(text) {
    // 手机端触发发音
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

function checkMatch(el) {
    // 错误仅显示红色边框，不自动纠正
    el.classList.add('error-border');
    setTimeout(() => el.classList.remove('error-border'), 1000);
}

// 页面加载完成自动渲染
renderWords(wordData);
