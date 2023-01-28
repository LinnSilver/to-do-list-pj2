
# To Do List

#### [\[View the live project here\]](https://linnsilver.github.io/to-do-list-pj2/)
My To-Do List is a modern romantic to-do list. With time square in monochrome at the background and soft corners to every edge, it gives a calm and still active expression. 

## ![Responsiv](assets/images/redeme-images/responsiv-todo.jpg)

# UX User experience

My To Do List is a modetn romantic to do list. With time squer in monocrom at the backgrond and soft corneers to every edge it givs a calme and still activ expression.  **offline!** background in box is darker to make it easyer to read on lighter parts.

#  Features

### Create new task
By clicking button **Create new task** or by simply clicking enter key, you create a new to-do task.

### Checkbox on task
Every uncompleted task have a checkbox to mark when the task is completed. When checked, the task moves to completed section. The checkbox is now checked.

### Delete task
Every uncompleted task is equipped with a trashcan button, when clicked the task is deleted.

### Clear all compleated tasks
Clicking the **Clear completed** button clears out all completed tasks. Reload page will do the same.

### Cursor focus 
To make it easier for the user to add the task, the cursor will be in focus in the input field when the page is loaded, and after every completed task.

###  Favicon
Favicon icon on the tab in the browser. Makes it easier for the user to find the page if there are many open tabs.

### Features to implement later
Edit to do tasks.

# Technologies

-   Java Script
-   HTML
-   CSS
-   GitHub
-   GitHub Pages
-   Gitpod
-   Google Fonts
-   Font Awesome

## Testing

-   HTML  **W3C tools**
## ![HTML validation](assets/images/redeme-images/html-validator-todo.jpg)

-   CSS  **W3C tools**
## ![HTML validation](assets/images/redeme-images/css-validator-todo.jpg)

-   Lighthouse In DevTools
## ![CSS validation](assets/images/redeme-images/lighthouse-todo.jpg)


### Browser Compatibility

The following browsers have been tested:

-   Chrome Version 108.0.5359.125
-   Mozilla Firefox Version 108.0.1
-   Edge Version 108.0.1462.54
-   Opera Version 89.0.4447.91
-   Safari on macOS Version 16.1

Tested on hardware:

-   Asus laptop 17 inch
-   MacBook Pro 16 inch
-   MacBook Pro 15 inch
-   Desktop: 2560 wide monitor to MacBook

### Mobile responsiveness testing.

Chrome Developer tools were used for more extensive testing.

Following mobiles has been tested:

-   iPhone 5 / SE
-   iPhone 7
-   iPhone Pro Max
-   Samsung Galaxy a52s
-   Huawei P20 pro
-   Sony Xperia 5 III

### Manual testing

|Function          |Expected outcome                  |Results              |
|----------------|-------------------------------|-----------------------------|
|Lode page                |Cursor focus to input field           |Pass |
|After creating new task |Cursor focus to input field            |Pass |
|Pressing **enter key** with empty input field |Alert message: Pleas write something |Pass |
|Click **Create task** button with empty input field |Alert message: Pleas write something     |Pass |
|Click **Create task** button with content in input field  |Creates new to do task	|Pass  |
|Press **enter key** with content in input field      |Creates new to do task    |Pass |
|Click checkbox in front of uncompleted task  |Moves task to completed section      |Pass |
|Click trashcan icon 	|Delete task att same row			|Pass |
|Click **Clear completed** button deletes all completed tasks |Delete all completed tasks    |Pass |
|Refresh webpage  |All undone tasks: Reload. All completed tasks: Delete  |Pass |
|Mouse hover over trashcan    |Cursor changes to handpointer            |Pass |
|Trying to write machine code in input field  |special characters, /(<([^>]+)> disappears from created task  |Pass |


## Deployment

Create a  [fork of the repository.](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository)

1.  Log in to GitHub and go to repository: LinnSilver/Project1-Farrier
2.  Click button fork -Create a new fork.
3.  Choose repository name.
4.  Click Create fork.

Now you have a fork of the repository in your repository. To access code:

5.  In your new repository:
6.  Click green button: Code arrow down.
7.  Choose: Create codespace on main - Code is opened in a web codespace.

After this, you do not have the files in the repository locally on your computer. To save a copy locally on your computer:

9.  On GitHub.com, navigate to your fork of the repository.
10.  Above the list of files, click Code, Local.
11.  Copy the URL for the repository.
12.  Open Git Bash.
13.  Change the current working directory to the location where you want the cloned directory.
14.  Type  `git clone`, and then paste the URL you copied earlier.
15.  Press Enter. Your local clone will be created.

It's important to commit and push correctly. Read more here:

-   [How to Commit and push code from local file system to GitHub Pages.](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project)

After every change in the code, it's important to redo the test section. Go through:

-   HTML W3C tools
-   CSS W3C tools
-   Lighthouse In DevTools
-   Browser Compatibility
-   Mobile Compatibility
-   Manual testing

## Credits

### Content

All content on this webpage was written by the developer.

### Media

-   Freeimages. Backgrund image were downloaded from  [Freeimages.com]
-   Google font -Font type Bad Script is imported from Google font.
-   Font awesome -Provided check icon in heder and trashcan for  delete.
-   Favicon -Favicon icon on tab was produced with Favicon.
-   Alert message was donloded from https://sweetalert2.github.io/
-   Button style and input feld style wad inspierd from https://flowbite.com/docs/components/buttons/ and had a makeover.

### Acknowledgments

Thank you to my mentor Brian Macharia. For Your support and guidance. Your great knowledge and commitment during this project has made my project better and more enjoyable.
