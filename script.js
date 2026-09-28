const startDate = new Date('2026-02-21');
function updateCounter() {
    const today = new Date();
    const deffTime = today - startDate;
    const diffDays = Math.floor(diffTime/(1000*60*60*24));
    const counterElement = document.getElementById('days-counter');
    if (counterElement) {
        counterElement.textContent = diffDays;
    }
}
updateCounter();