let totalSlots = 10;
let availableSlots = 10;
const slots = [];

const totalSlotsElement = document.getElementById('total-slots');
const availableSlotsElement = document.getElementById('available-slots');
const parkingSlotsElement = document.getElementById('parking-slots');

// Initialize slots
function initializeSlots() {
    for (let i = 1; i <= totalSlots; i++) {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('slot');
        slotDiv.textContent = `Slot ${i}`;
        slotDiv.dataset.slotNumber = i;
        slotDiv.addEventListener('click', toggleSlot);
        slots.push({ number: i, occupied: false });
        parkingSlotsElement.appendChild(slotDiv);
    }
}

// Update available slot count
function updateSlotDisplay() {
    availableSlotsElement.textContent = availableSlots;
    slots.forEach(slot => {
        const slotDiv = document.querySelector(`[data-slot-number='${slot.number}']`);
        if (slot.occupied) {
            slotDiv.classList.add('occupied');
        } else {
            slotDiv.classList.remove('occupied');
        }
    });
}

// Toggle between booking and freeing slots
function toggleSlot(event) {
    const slotNumber = parseInt(event.target.dataset.slotNumber);
    const slot = slots.find(s => s.number === slotNumber);

    if (slot.occupied) {
        slot.occupied = false;
        availableSlots++;
    } else if (availableSlots > 0) {
        slot.occupied = true;
        availableSlots--;
    } else {
        alert("No available slots!");
    }
    updateSlotDisplay();
}

// Initialize the page
initializeSlots();
updateSlotDisplay();
