# Honey Hole ![](http://pix.iemoji.com/images/emoji/apple/ios-9/256/honey-pot.png)
Keep track of your favorite but secret spots.  Mobile first development, intuitive user experience, integrated maps, offline usability.

Brain child of Vince.

# Work-Flow Guidelines

If you'd like to work on the repository please take read through this document.

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
1. git remote add upstream https://github.com/Montana-Code-School/honey-hole.git
 - Only do this once, it will create a remote branch on your machine.  Then the next line is all you will need to do to pull changes from this repository.
2. git pull upstream master

