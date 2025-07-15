
// Page navigation
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const mainButtons = document.querySelectorAll('.amal-btn, .daily-amal-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const fazilatButtons = document.querySelectorAll('.fazilat-btn');

    // Show page when button clicked
    mainButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.dataset.page || 'ayatul-kursi';
            document.getElementById(pageId).classList.add('active');
        });
    });

    // Back button functionality
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            pages.forEach(page => {
                page.classList.remove('active');
            });
        });
    });

    // Fazilat button functionality
    fazilatButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fazilatPageId = button.dataset.fazilat;
            pages.forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(fazilatPageId).classList.add('active');
        });
    });
});
