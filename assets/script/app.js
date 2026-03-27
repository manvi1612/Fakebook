'use strict';

import Subscriber from "./Subscriber.js";

const profileBtn = document.getElementById("profilebtn");

const postForm = document.getElementById("postForm");
const postText = document.getElementById("postText");
const postImage = document.getElementById("postImage");
const postBtn = document.getElementById("postbtn");
const postsContainer = document.getElementById("postsContainer");
const fileNameSpan = document.getElementById("fileName");
const uploadIcon = document.querySelector(".upload-section img");


const modal = document.getElementById("modal");
const closeModalX = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalUsername = document.getElementById("modalUsername");
const modalEmail = document.getElementById("modalEmail");
const modalPages = document.getElementById("modalPages");
const modalGroups = document.getElementById("modalGroups");
const modalCanMonetize = document.getElementById("modalCanMonetize");

const user = new Subscriber(
  1,
  "Manvir Kaur",
  "manvir1619",
  "manvirdhiman@email.com",
  ["Hospitality"],
  ["Software Developers Group"],
  true
);

let selectImage = null;

function togglePostButton() {
  if (postText.value.trim() === "" && selectImage === null) {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
  }
}
function clearInputs() {
  postText.value = '';
  postImage.value = '';
  selectImage = null;
  fileNameSpan.textContent = 'No file selected';
  togglePostButton();
}

function makePost() {
  if (postText.value.trim() === "" && selectImage === null) {
    return;
  }

  const post = document.createElement('div');
  post.className = "post";

  const date = new Date().toLocaleString([], { 
    dateStyle: 'medium', 
    timeStyle: 'short' 
});

  post.innerHTML = `
    <div class="post-header">
      <img src="./assets/media/manvir kaur.jpg" alt="avatar">
      <div>
        <strong>${user.name}</strong><br>
        <small>${date}</small>
      </div>
    </div>
    <div class="post-body">
      ${postText.value ? `<p>${postText.value}</p>` : ""}
      ${selectImage ? `<img src="${URL.createObjectURL(selectImage)}" class="post-image">` : ""}
    </div>
  `;

  postsContainer.prepend(post);
  clearInputs();
}
function openModal() {
  const info = user.getInfo();
  modalName.textContent = user.name;
  modalUsername.textContent = "@"+ user.userName;
  modalEmail.textContent = user.email;
  modalPages.textContent = user.pages.join(', ');
  modalGroups.textContent = user.groups.join(', ');
  modalCanMonetize.textContent = user.canMonetize ? "Yes" : "No";
  modal.classList.remove('hide');
}

function closeModal() {
  modal.classList.add('hide');
}

uploadIcon.addEventListener('click', function () {
  postImage.click()
});

postImage.addEventListener('change', function () {
  selectImage = postImage.files[0] || null;
  fileNameSpan.textContent = selectImage 
  ? selectImage.name 
  : 'No file selected';
  togglePostButton();
});

postBtn.addEventListener('click', function (e) {
  e.preventDefault();
  makePost();
});

profileBtn.addEventListener('click', openModal);
closeModalX.addEventListener('click', closeModal);


window.addEventListener('click', function (e) {
  if (e.target === modal) 
    closeModal();
});
togglePostButton();