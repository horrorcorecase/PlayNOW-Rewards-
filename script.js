// Fake user points stored in localStorage
let userPoints = localStorage.getItem("points") || 0;
document.getElementById("user-points").textContent = userPoints;

// Fake Offers Data
const offers = [
    { id: 1, name: "Complete a Survey", reward: 10 },
    { id: 2, name: "Install an App", reward: 20 },
    { id: 3, name: "Watch a Video Ad", reward: 5 }
];

// Render Offers
const offerList = document.getElementById("offer-list");
offers.forEach(offer => {
    const div = document.createElement("div");
    div.classList.add("offer");
    div.innerHTML = `
        <p>${offer.name} - Earn ${offer.reward} Points</p>
        <button onclick="completeOffer(${offer.reward}, this)">Complete</button>
    `;
    offerList.appendChild(div);
});

// Handle Offer Completion
function completeOffer(reward, button) {
    userPoints = parseInt(userPoints) + reward;
    localStorage.setItem("points", userPoints);
    document.getElementById("user-points").textContent = userPoints;
    button.disabled = true;
    alert(`Offer completed! You earned ${reward} points.`);
}

// Fake Leaderboard
const leaderboardList = document.getElementById("leaderboard-list");
const fakeUsers = [
    { name: "Alice", points: 200 },
    { name: "Bob", points: 150 },
    { name: "Charlie", points: 100 }
];
fakeUsers.push({ name: "You", points: userPoints });

fakeUsers.sort((a, b) => b.points - a.points);
fakeUsers.forEach(user => {
    leaderboardList.innerHTML += `<li>${user.name} - ${user.points} Points</li>`;
});
