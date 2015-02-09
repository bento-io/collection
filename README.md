![Bento](http://bentobox.io/static/img/twitter_card.png "Bento")
=====
Curated by [@jonhmchan](http://twitter.com/jonhmchan). Like Bento? [Leave me a tip](http://gittip.com/jonhmchan).

## About
This is where all the community submitted resources on Bento are managed and stored. The main site at https://www.bento.io/ uses all the data here to render the link share on the main page, in addition to supplementary content on the detail views. Read the instructions below to submit links and contribute.

## Testing and validation
Please make sure that you *validate your JSON before submitting a pull request* using [JSONLint](http://jsonlint.com/). Invalid JSON that passes through will break the site. Also, there is currently no way to test any drafts of your JSON changes on the new site since Bento is no longer static. There are plans to change this to make it easier for developers, but when that change may happen is unclear.

## Make a contribution
**content.json** (in the gh-pages branch) is where all the resources are defined. In each resource there is a name of the technology, a short description, what the user should learn next, and an ordered list of resources related to that technology. There are a few things to keep in mind when doing editing:

1. Links should be free (no pay walls) and take the user *immediately* to the relevant information (i.e. for html go to the html exercise in codecademy, rather than codeacademy's home page - the user should not have to do any searching to start learning)
2. Links should come from a single source on a single topic, so a blog post rather than the homepage for a blog, a tutorial rather than a list of tutorials, etc.
3. Links should generally be about the topic as a whole, and not about a special subject *within* that topic (i.e. an introduction to CSS rather than different ways to float divs)
4. All names must be lowercase (even in the "after" fields and descriptions)
5. Descriptions should be no more than 100 characters long
6. Descriptions should *not* use any complex jargon when possible and should *not* be treated as a space for ad-like vocabulary
7. Home should be the top domain when possible (official documentation or the wikipedia article if a concept)
8. Next lessons ("after") are meant to signify what the next lesson should be (1) **immediate** and (2) **obvious** (3) **next or related steps** from the current box
9. Prerequisites for a box should be in the "before" array. They must be clearly "necessary" to know in order to be included. Topics that are simply helpful to know, but not essential should be avoided
10. Each LINK (not the box) must be categorized as "easy" (level: 0, no previous experience necessary), "medium" (level: 1, requires "easy" information), and "hard" (level: 2, requires "medium" information)
11. Only the first two "easy" links are shown, in the order of the array
12. Link names should be the title of the destination

If you have any questions, please don't hesitate to contact me by tweeting [@jonhmchan](http://twitter.com/jonhmchan)
