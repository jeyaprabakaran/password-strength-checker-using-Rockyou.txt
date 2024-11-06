async function loadRockyouData() {
    try {
        const response = await fetch('rockyou.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        return text.split('\n').map(password => password.trim());
    } catch (error) {
        console.error('Error loading rockyou.txt:', error);
        return [];
    }
}

function isPasswordWeak(password, rockyouData) {
    if (rockyouData.includes(password)) {
        return true;
    }

    for (let i = 0; i < password.length - 2; i++) {
        for (let j = i + 3; j <= password.length; j++) {
            const substring = password.slice(i, j);
            if (rockyouData.includes(substring)) {
                return true;
            }
        }
    }

    return false;
}

document.getElementById('passwordForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const password = event.target.password.value;
    const rockyouData = await loadRockyouData();

    if (rockyouData.length === 0) {
        document.getElementById('password-strength').innerText = 'Error loading rockyou.txt data.';
        return;
    }

    const isWeak = isPasswordWeak(password, rockyouData);
    const strengthMessage = document.getElementById('password-strength');
    const weakPasswordMessage = document.getElementById('weak-password-message');

    if (isWeak) {
        strengthMessage.innerText = 'Password Strength: Weak';
        weakPasswordMessage.style.display = 'block';
        updatePowerPoint(0);
    } else {
        const strengthScore = calculatePasswordStrength(password);
        strengthMessage.innerText = strengthScore > 2 ? 'Password Strength: Strong' : 'Password Strength: Medium';
        weakPasswordMessage.style.display = 'none';
        updatePowerPoint(strengthScore);
    }
});

function calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/[^0-9a-zA-Z]/.test(password)) score += 1;
    return score;
}

function updatePowerPoint(score) {
    const powerPoint = document.getElementById('power-point');
    let width = 0;
    let color = '#D73F40';

    if (score === 0) {
        width = 20;
    } else if (score > 0 && score <= 2) {
        width = 50;
        color = '#F2B84F';
    } else {
        width = 100;
        color = '#3ba62f';
    }

    powerPoint.style.width = `${width}%`;
    powerPoint.style.backgroundColor = color;
}
