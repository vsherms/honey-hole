# Life Coach

# Work-flow Guidelines
If you'd like to work on the repository please take this tutorial on React Native: https://facebook.github.io/react/

## Work on a personal copy:
1. FORK the repository into your own profile.
2. CLONE your personal repository to your local machine, not the MTCS repository.

## Pushing changes to MTCS repository:
1. git add -A in terminal/command line inside local repository directory.
2. git commit -m "PLEASE PROVIDE VALUABLE COMMENTS".
3. git push <- Please make sure you're pushing to your personal repository!
4. Create Pull Request to MTCS
5. Check to make sure it passes Travis CI before merging.

## Pulling changes from MTCS Master Branch:
1. git remote add upstream https://github.com/Montana-Code-School/LifeCoach.git
2. git pull upstream master

## Welcome to the Life Coach App.
It was inspired by the desire to help people assess where they are in 8 important areas of their lives.
Based on where they'd like to see growth, it aims to help people set and organize goals,
and then track their progress.

## The App has three main features:
1. The Wheel of Life - a popular tool used by life coaches, to help their clients assess
current standing in 8 important life categories.
2. Goals page - inspired by Kanban boards, familiar to software developers, you can
set, organize, and track goals.
3. History page - allows you to track your progress by paging through past Wheel Of Life check-ins,
with the most recent results always showing on the wheel.

The app was designed using the MERN stack.
Mongo was used as the database.
Express was used to set up the endpoint routes to the database.
Node.js was used as a server-side Javascript runtime environment.
React was the Javascript library used on the front end to build the user interface.

The main server code is in the /tools folder, called srcServer.js
Routes for get, put, post requests are in 2 files in the /routes folder called goal.js and wheel.js
There are three main schemas created using Mongoose. Those are in the /models folder, called
goal.js, user.js, and wheel.js. Those represent the three main data sets we saved in the database.
the goal and wheel schema also save a related userId, which enables us to display user-specific data.

The index.js file shows how our SPA <Route> paths are set up. Here, it "renders" to the index.html file,
located in /public.

We used React-Router, as well as mob-x as a <Provider> which injected data to specific "observer"
components, from several different "stores", including GoalStore.js, UserStore.js, and WheelStore.js,
which are located in the /src/stores folder.

The main React components are in the /src folder. First, an EntryPage component shows the front page,
along with sign up, and login authentication. Once the user logs in and is authenticated,
the EnsureLoggedInContainer allows access to the main parent App, which shows a Bootstrap Nav bar,
as well as a home page. Three links exists in the nav bar, that point to the three main features.

The first main feature is the Wheel Of Life page, which takes place in the Wheel component.
It invokes a WheelCanvas component as well as an array of Slider components.
The graphical technology is made possible by the html <canvas> tag. The React Bootstrap Sliders
send a value or "score" to the WheelStore, saved as a kind of "state". Then a function on the WheelStore
page, takes those slider values, and renders a color coordinated graphical representation, in the form of
a pie chart with eight different segments. The formula for the graphic was made using trigonometry,
to stroke the correct lines and arcs at the right angel, and fill the right segments with the right colors.
Once a "wheel" is saved, the values along with time/date stamp is saved to the database.

The next main feature is the Goal page. It's central React component is LifeGoals. Here, 4 columns are
invoked, as well as the React Bootstrap components which make it possible to choose from
a list of life segments, and also a text input field, which the user can enter a goal. The columns
then render the goals in the form of a "card", similar to a KanBan board. The four categories/columns
enable the user to place goals in either the Goal, Priority, Today, or Complete categories, using
right or left arrows. These goals carry a "status", which describes which category it belongs to. The
arrows call a PUT request to the database, which changes the status there. The same function that
calls the put request also updates the GoalStore goalsArr. Then a function in each column filters
the goals in goalsArr, and places the cards in the proper column, without having to make an extra call to
load from the database again. One final little fun feature is a randomly generated inspirational quote in
the byline of the page.

The third main feature is on the History page where the user can use a slider to
review past Wheel of Life check-ins. Those graphics display their results, as well as the date they
did their check in. Once a user has at least one check-in saved, the History page graphic displays
a darker colored lines which always displays on the wheel. These lines represent the user's most recent
check in, so that they can compare all their past results to where they currently are. That way they can
view their progress.

## Ideas for future features would be:
1. On the Wheel page, for each segment of life, the page could pull up a survey which suggests
questions for the user, to help them think through their current status. It might employ
a formula which automatically calculates the user's score in that area of their life.
2. The cards on the goals page could have features like "priority 1-5", and other ways to help
the user determine who to organize goals.
3. On the History page, we could implement the ability to search specific dates of check ins, and
other ways to view results, besides a slider.
4. There could be further refactoring of the Goals components, and also would be nice to implement a
Drag N Drop functionality.
For any questions or support, you can contact vsherms@gmail.com.
