document.getElementById('emotionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nickname = document.getElementById('nickname').value;
    const mood = document.getElementById('mood').value;

    const results = calculateEmotions(nickname, mood);
    showResults(results);
    promptChatbot();
});

function calculateEmotions(nickname, mood) {
    const factors = {
        anxious: ['呼吸练习 | Breathing exercises', '正念冥想 | Mindfulness meditation', '渐进式放松 | Progressive relaxation'],
        stressed: ['时间管理 | Time management', '优先级排序 | Priority setting', '压力释放技巧 | Stress release techniques'],
        sad: ['情绪日记 | Emotion journaling', '积极思维训练 | Positive thinking', '社交支持 | Social support'],
        confused: ['目标设定 | Goal setting', '决策树分析 | Decision tree analysis', '思维导图 | Mind mapping'],
        overwhelmed: ['任务分解 | Task breakdown', '休息计划 | Rest scheduling', '能量管理 | Energy management']
    };

    const personalityFactor = nickname.length % 3 + 1;
    const moodIntensity = Math.random() * 0.5 + 0.5;

    return {
        calmScore: Math.round((personalityFactor * moodIntensity * 100)),
        suggestions: factors[mood] || [],
        timeToCalm: Math.round(personalityFactor * 5)
    };
}

function showResults(results) {
    alert(`
心灵平静指数 | Peace Index: ${results.calmScore}/100
建议活动 | Suggested Activities:
${results.suggestions.join('\n')}
预计平静时间 | Estimated Time to Calm: ${results.timeToCalm} minutes
想要获取更多专业指导，请联系：felicityahawhale@gmail.com
For more professional guidance, please contact: felicityahawhale@gmail.com
    `);
}

function promptChatbot() {
    const chatbotSection = document.getElementById('chatbot');
    chatbotSection.innerHTML = `
        <div class="chatbot-prompt">
            <p>Would you like to share your thoughts with me?</p>
            <button onclick="startChat()">Yes</button>
        </div>
    `;
}

function startChat() {
    alert("Starting chat...");
    // Implement chatbot conversation logic here
}
