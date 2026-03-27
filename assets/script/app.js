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