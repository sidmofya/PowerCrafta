document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');
  const userTypeCards = document.querySelectorAll('.user-type-card');
  const energyNeedsNextBtn = document.getElementById('energy-needs-next-btn');

  // Screen Elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const userTypeScreen = document.getElementById('user-type-screen');
  const energyNeedsScreen = document.getElementById('energy-needs-screen');

  // Move from Welcome Screen to User Type Selection
  startBtn.addEventListener('click', function () {
    welcomeScreen.classList.remove('active');
    userTypeScreen.classList.add('active');
  });

  // Capture User Type Selection and Move to Energy Needs Screen
  userTypeCards.forEach(card => {
    card.addEventListener('click', function () {
      const userType = this.getAttribute('data-type');
      console.log(`User Type Selected: ${userType}`);

      // Move to the next screen
      userTypeScreen.classList.remove('active');
      energyNeedsScreen.classList.add('active');
    });
  });

  // Move from Energy Needs to the next step (customizable)
  energyNeedsNextBtn.addEventListener('click', function () {
    const numRooms = document.getElementById('num-rooms').value;
    const outages = document.getElementById('outages').value;
    console.log(`Rooms: ${numRooms}, Outages: ${outages}`);
    // Handle form submission and navigate to the next step (e.g., prioritization)
    alert('Proceed to the next screen...');
  });
});
