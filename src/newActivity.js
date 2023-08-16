const addActivityDialog = document.getElementById('addActivityDialog');
const activityContainer = document.getElementById('activityContainer');
const form = addActivityDialog.querySelector('form');
const nameInput = form.querySelector('#name');
const activityInput = form.querySelector('.inp');
const chatSection = document.querySelector('.chat-section');
const newActivity = document.querySelector('.new-activity');
const addActivity = document.querySelector('.add-activities')
const submitBtn = document.querySelector('.submit-btn');
const backBtn = document.querySelector('.back-btn');
const option = document.querySelector(".option");
const inp = document.querySelector(".inp");
const items = document.querySelectorAll(".item");
const shapeV = document.querySelector(".shape-v");

  //Dropdown
shapeV.addEventListener("click", () => {
    option.classList.toggle("active");
    shapeV.classList.toggle('shape-active');
})
inp.addEventListener("click", () => {
    option.classList.toggle("active");
    shapeV.classList.toggle('shape-active');
});
items.forEach((item) => {
    item.addEventListener("click", () => {
        const get = item.innerHTML;
        console.log(get);
        inp.value = get;
        option.classList.toggle("active");
        shapeV.classList.toggle('shape-active');
    });
});

let shouldSubmit = false;
newActivity.addEventListener("click", () => {
    shouldSubmit = true;
    addActivity.style.display = "block";
    chatSection.style.opacity = 0.1;
});

backBtn.addEventListener('click', () => {
    shouldSubmit = false;
    addActivity.style.display = "none";
    chatSection.style.opacity = 1;
});


submitBtn.addEventListener("click", () => {
    option.classList.remove("active");
    shapeV.classList.remove('shape-active');
})
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (shouldSubmit) {
        addActivity.style.display = "none";
        chatSection.style.opacity = 1;
        const newName = nameInput.value;
        const newActivity = activityInput.value;

        // Create a new activity box
        const newActivityBox = document.createElement('div');
        newActivityBox.classList.add('activity-box');
        newActivityBox.innerHTML = `
    <div class="dots-container">
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
    <div class="active-dot"></div>
    <p class="active-name">${newName}</p> 
    <div class="tag">
        <p class="activity">${newActivity}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="89" height="91" viewBox="0 0 89 91"
    class="delete-icon">
    <defs>
        <filter id="a" width="122.3%" height="340%" x="-11.2%" y="-120%"
            filterUnits="objectBoundingBox">
            <feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1"
                stdDeviation="22.5" />
            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1"
                values="0 0 0 0 0.180392157 0 0 0 0 0.407843137 0 0 0 0 0.815686275 0 0 0 0.1 0" />
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <path fill="#A6A6A6" fill-rule="nonzero"
        d="M824 37.184c.28 0 .508.23.508.514v5.876a.51.51 0 0 1-.508.514.51.51 0 0 1-.508-.514v-5.876a.51.51 0 0 1 .508-.514zm1.78.491l-.254 5.877a.511.511 0 0 0 .508.536.51.51 0 0 0 .508-.491l.254-5.877a.511.511 0 0 0-.486-.535.51.51 0 0 0-.53.49zm-4.09-.49a.511.511 0 0 0-.486.535l.254 5.877a.51.51 0 0 0 .53.49.511.511 0 0 0 .486-.535l-.254-5.877a.51.51 0 0 0-.53-.49zm8.31-1.541a.51.51 0 0 1-.508.513h-.527l-.44 5.764a.51.51 0 0 1-.546.473.512.512 0 0 1-.468-.552l.434-5.685h-7.89l.613 8.029c.05.53.485.93 1.013.93h4.638c.53 0 .966-.395 1.013-.92a.51.51 0 0 1 .552-.464c.28.026.486.276.46.558a2.025 2.025 0 0 1-2.025 1.853h-4.638c-.509 0-.996-.19-1.372-.537a2.056 2.056 0 0 1-.654-1.337l-.62-8.112h-.527a.51.51 0 0 1-.508-.513.51.51 0 0 1 .508-.513h3.077v-.59c0-.85.684-1.541 1.525-1.541h1.78c.84 0 1.525.69 1.525 1.54v.59h3.077c.28 0 .508.23.508.514zm-7.398-.513h2.796v-.59a.512.512 0 0 0-.508-.514h-1.78c-.28 0-.508.23-.508.513v.59z"
        filter="url(#a)" transform="translate(-779 1)" />
</svg>
`;
        // Set the color based on the newActivity value
        const activityName = newActivityBox.querySelector('.activity');
        const activeDot = newActivityBox.querySelector('.active-dot')
        if (newActivity === 'Appointment') {
            activityName.style.color = '#557A46';
            activeDot.style.backgroundColor = '#7C9D96';
        } else if (newActivity === 'Call') {
            activityName.style.color = '#4d8cf4';
            activeDot.style.backgroundColor = '#4d8cf4';
        }
        else if (newActivity === 'Meeting') {
            activityName.style.color = '#F4D160';
            activeDot.style.backgroundColor = '#FBD85D';
        }

        // Append the new activity box to the container
        activityContainer.appendChild(newActivityBox);

    }
    // Reset input values
    nameInput.value = '';
    activityInput.value = '';
    addActivityDialog.close();
});
