   //Modal activities
   const chatSection = document.querySelector('.chat-section');
   const newActivity = document.querySelector('.new-activity');
   const addActivity = document.querySelector('.add-activities')
   const submitBtn = document.querySelector('.submit-btn');
   const backBtn = document.querySelector('.back-btn');
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
