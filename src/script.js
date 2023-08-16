import './sass/main.scss';
import './chart';
import './addMessage';
import './newActivity';

document.addEventListener('DOMContentLoaded', function () {
  

    //Activity card delete functionality
    activityContainer.addEventListener('click', function (event) {
        const deleteIcon = event.target.closest('.delete-icon');
        if (deleteIcon) {
            const activityBox = deleteIcon.closest('.activity-box');
            if (activityBox) {
                activityBox.remove();
            }
        }
    });

    const routes = document.querySelector('.routes');
const request = document.querySelector('.request');
const pageWrapper = document.querySelector('#pageWrapper');
const requestRoute = document.querySelector(".request-route");
const reviewRoute = document.querySelector(".reviews-route");
const creditRoute = document.querySelector(".credit-route");
const helpRoute = document.querySelector(".help-route");

const routeBack = document.querySelector(".route-back");

const requestText = document.querySelector('.request-txt');

requestRoute.addEventListener("click", () => {
    requestText.innerHTML = "Request";
    routes.style.display = "block";
});

reviewRoute.addEventListener("click", () => {
    requestText.innerHTML = "Reviews";
    routes.style.display = "block";
    routeBack.style.left="43px";
});
creditRoute.addEventListener("click", () => {
    requestText.innerHTML = "Credit";
    routes.style.display = "block";
    routeBack.style.left="15px";
});
helpRoute.addEventListener("click", () => {
    requestText.innerHTML = "Help";
    routes.style.display = "block";
    routeBack.style.left="0px";

});
// const routeBack = document.querySelector(".route-back");
routeBack.addEventListener("click", () => {
    routes.style.display = "none";
});

});