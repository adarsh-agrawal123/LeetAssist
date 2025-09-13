// Problem Detector Module for LeetAssist

function getCurrentCode() {
    const editor = document.querySelector('textarea');
    return editor ? editor.value.trim() : '';
}

function updateCurrentProblem() {
    if (typeof window.LeetCodeParser !== 'undefined') {
        window.currentProblem = window.LeetCodeParser.getProblemData();
        console.log('LeetAssist: Problem detected', window.currentProblem);
    } else {
        window.currentProblem = { title: 'Unknown Problem' };
    }
}

function watchForProblemChanges() {
    const observer = new MutationObserver(() => updateCurrentProblem());
    observer.observe(document.body, { childList: true, subtree: true });
}

function setupProblemDetection() {
    updateCurrentProblem();
    watchForProblemChanges();
}
