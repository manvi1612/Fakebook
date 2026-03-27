# Fakebook Assignment

## About the Project
## About the Project
This project is a basic social media style webpage. It lets users create posts by writing text, uploading an image, or both. The purpose of this assignment is to practice JavaScript, especially working with the DOM and using classes to organize code.


## What This App Can Do

- Create a post using text, an image, or both  
- Prevent posting when nothing is entered  
- Show posts instantly without refreshing the page  
- Display each post with user details and time  
- Open a popup window to view profile information  


## Post Details
Whenever a post is created, it automatically includes:
- A profile picture  
- The user’s name  
- The current date and time  
- The message (if written)  
- The selected image (if uploaded)  


## Profile Popup
Clicking on the profile image opens a popup box.  
This popup shows details about the user such as:
- Name  
- Username  
- Email  
- Pages  
- Groups  
- Whether the user can monetize or not  

The information shown in the popup is taken from a method inside the class.


## Code Structure

### User Class
The User class stores general information:
- id  
- name  
- username  
- email  

It also includes a method to return this information.


### Subscriber Class
The Subscriber class is connected to the User class using inheritance.  
It adds extra details like:
- pages  
- groups  
- monetization status  

This class also uses the method from the User class and extends it.


## Technologies Used
- HTML  
- CSS  
- JavaScript (Modules)    

## Author
Manvir Kaur  
