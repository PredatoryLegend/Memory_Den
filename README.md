## Tested Platform:
Device: Oppo Reno Z
OS: Android 

## Package installed:
	npm install formik --save
	npm install -S yup
	npm install @react-navigation/native
	expo install react-native-gesture-handler
	npm install @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/material-top-tabs react-native-tab-view
	expo install react-native-pager-view
	expo install expo-image-picker  

## Test instructions:
1. You can login with the following accounts:
	Name: John Doe
	Password: passw0rd
	
	or
	
	Name: Jane Doe
	Password: passw0rd
	
	The details are stored in ./Memory_Den/app/config/DataManager.js

2. It will display the user profile.
   
4. You can test the following operation in the Collections tab on the right side of the tab bar.
	1. Swipe a collection and delete it.
	2. Click the filter button on the top right to filter the collections by the alphabet or by date.
	3. Click on one of the collections to take you into the Memories Screen for that particular collection.
		1. Click the filter button on the top right to filter the memories by the alphabet or by date.
		2. Click on one of the memories to open the info panel for the photo which displays the photo and a button to delete the photo.
		   
5. You can add a new memories or collection in the Add tab. New collections will display in the collections screen, and new memories in their respective collection.
	(Having a refresh issue where I can't get the app to refresh, so new collections and memories won't show up)

6. You can press the logout button in the Home tab and return to the Welcome screen

8. You can register a new user in the register screen, then log in with this new user.
	1. It will display this new user profile with the Memory Den Logo as the profile pic and zero Collections or Memories.