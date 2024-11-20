/* For dark mode toggle */
function toggleTheme() {
            const body = document.body;
            const checkbox = document.getElementById('themeToggle');
            
            if (checkbox.checked) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            }
        }