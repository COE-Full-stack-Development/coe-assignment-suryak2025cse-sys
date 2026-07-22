(() => {
  

const profileCard = document.getElementById('profile-card');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const skillsList = document.getElementById('skills-list');
const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill-btn');

function initializeTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        profileCard.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isDarkMode) {
    const icon = toggleThemeBtn.querySelector('.theme-icon');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

toggleThemeBtn.addEventListener('click', function() {
    const isDarkMode = profileCard.classList.toggle('dark-theme');
    document.body.classList.toggle('dark-theme');
    updateThemeIcon(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
});

function addSkill() {
    const skillText = skillInput.value.trim();
    if (skillText === '') {
        skillInput.focus();
        return;
    }
    
    const newSkillItem = document.createElement('li');
    newSkillItem.className = 'skill-item';
    newSkillItem.textContent = skillText;
    
    skillsList.appendChild(newSkillItem);
    
    skillInput.value = '';
    skillInput.focus();
}

addSkillBtn.addEventListener('click', addSkill);

skillInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addSkill();
    }
});

document.addEventListener('DOMContentLoaded', initializeTheme);


  });
})();
