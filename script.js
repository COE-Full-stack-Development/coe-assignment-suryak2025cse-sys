const profileCard = document.getElementById("profile-card");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const skillsList = document.getElementById("skills-list");
const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");

function initializeTheme() {
    const isDark = localStorage.getItem("darkMode") === "true";

    if (isDark) {
        profileCard.classList.add("dark-theme");
    }
}

toggleThemeBtn.addEventListener("click", () => {
    profileCard.classList.toggle("dark-theme");
});

function addSkill() {
    const skill = skillInput.value.trim();

    if (skill === "") return;

    const li = document.createElement("li");
    li.textContent = skill;
    li.className = "skill-item";

    skillsList.appendChild(li);

    skillInput.value = "";
}

addSkillBtn.addEventListener("click", addSkill);

skillInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addSkill();
    }
});

initializeTheme();
