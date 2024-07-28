
// Function to toggle sidebar visibility
function toggleSidebar() {
    const appMenu = document.getElementById('app-menu');
    appMenu.classList.toggle('hidden');
    appMenu.classList.toggle('translate-x-0');
}

// Event listener for the sidebar toggle button
document.getElementById('button-toggle-menu').addEventListener('click', toggleSidebar);

// Event listener for fullscreen toggle
document.querySelector('[data-toggle="fullscreen"]').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
});

// Initialize dropdowns
document.querySelectorAll('.hs-dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownMenu = button.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
        dropdownMenu.classList.toggle('opacity-0');
        dropdownMenu.classList.toggle('hs-dropdown-open:opacity-100');
    });
});

// Accordion functionality
document.querySelectorAll('.hs-accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        accordionContent.classList.toggle('hidden');
        accordionContent.style.height = accordionContent.classList.contains('hidden') ? '0' : `${accordionContent.scrollHeight}px`;
        button.querySelector('.ti-chevron-right').classList.toggle('rotate-90');
    });
});

// Function to handle language change
function changeLanguage(language) {
    console.log(`Language changed to: ${language}`);
}

// Event listeners for language dropdown
document.querySelectorAll('.hs-dropdown-menu a').forEach(item => {
    item.addEventListener('click', () => {
        const language = item.querySelector('span').innerText;
        changeLanguage(language);
    });
});

// Profile dropdown functionality
document.querySelectorAll('.hs-dropdown-toggle.nav-link').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownMenu = button.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
        dropdownMenu.classList.toggle('opacity-0');
        dropdownMenu.classList.toggle('hs-dropdown-open:opacity-100');
    });
});

// Handling log out
document.querySelector('[href="#"]').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Logging out...');
    // Add your logout logic here
});
