[Bento](http://www.bentobox.io/)
=====
Curated by [@jonhmchan](http://twitter.com/jonhmchan)

## About
This is where all the community submitted resources on Bento are managed and stored. The main site at http://www.bentobox.io/ uses all the data here to render the link share on the main page, in addition to supplementary content on the detail views. Read the instructions below to submit links and contribute.

## Make a contribution
**content.json** (in the gh-pages branch) is where all the resources are defined. In each resource there is a name of the technology, a short description, what the user should learn next, and an ordered list of resources related to that technology. There are a few things to keep in mind when doing editing:

1. Links should be free (no pay walls) and take the user *immediately* to the relevant information (i.e. for html go to the html exercise in codecademy, rather than codeacademy's home page - the user should not have to do any searching to start learning)
2. Links should generally be about the topic as a whole, and not about a special subject *within* that topic (i.e. an introduction to CSS rather than different ways to float divs)
3. All names must be lowercase (even in the $then fields and descriptions)
4. Descriptions should be no more than 100 characters long
5. Descriptions should *not* use any complex jargon when possible
6. Home should be the top domain when possible (official documentation or the wikipedia article if a concept)
7. Next lessons ($then) are meant to signify what the next lesson should be (1) **immediate** and (2) **obvious** (3) **next or related steps** from the current box
8. Next lessons should *not* include prerequisites (javascript should not be in angular $then)
9. Each LINK (not the box) must be categorized as "easy" (level: 0, no previous experience necessary), "medium" (level: 1, requires "easy" information), and "hard" (level: 2, requires "medium" information)
10. Only the first two "easy" links are shown, in the order of the array
11. Link names should be the title of the destination
12. Make sure that if you are testing locally to open in Firefox - Chrome does not allow for local pulls of JSON files

If you have any questions, please don't hesitate to contact me by tweeting @jonhmchan
