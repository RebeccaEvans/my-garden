## myGarden Website
by Rebecca Evans

This is a website designed to allow garden enthusiasts in the Northwest to login, add their favorite plants to their garden and share their garden to the community.

There will be the following pages:

-	Home Page
-	Login Page
-	Signup Page
-	Plant Lookup or Browse Page with ability to add a plant
-	Garden Lookup page with ability to search by user or plant
-	My Garden page where users can save their favorite plants, create a 'garden' and add plants to that garden

The *user* model will include the following fields:

-	first name
-	last name
-	email address
-	city, state

The *plant* model will include:

-	plant name, common
-	plant name, latin
-	plant type
-	plant picture url
-	plant culture needs
-	plant uses

I plan on scraping the Great Plant Picks website for an initial list of plants to population the database, but users will be able to add a plant if they'd like.

The *garden* model will include:

-	garden name
-	garden location
-	garden aspect (south facing, shady, wet, dry, etc.)
-	garden exposure (sunny, shady)
-	garden soiltype
-	gardent moisture	
-	list of plants including a field with the number of plants

***

## Plan of Action

1.	Create initial files and install initial dependencies
2.	Create and style initial pages
3.	Create db and models
4.	Scrape website
5.	Begin coding routes, controllers, etc.



Color Scheme:

Blue: #22265d
rich blue: #1f3943
Green: 2f4e24
light blue: #5c7971
pink: #702659
very light pink: #d9c3c6



"Deployed (e.g., Heroku)"	
Passed Assessment	
Site has basic functionality related to its goal	
At least 2 GET routes (other than auth)	
At least 1 POST route	
At least 1 DELETE route	
At least 1 PUT route	
Use of an API	Advanced Database Relationships	
Instead of API or Extra Credit: Sockets/Scraping/OAuth/Unit or Integration Tests/Other	
Log in works (required: boilerplate or better)	
Sign up auto logs me in 	
Sensible error messages for bad login info  (boilerplate or better)	
Passwords hashed in database	
Passwords in form are input type="password" (dots)	
Password verification is checked
Can't sneak edit/delete data that I don't own by typing in random ids	
Appropriate Use of Github	
README is included and is descriptive	
.gitignore properly set up	
No API keys in Github code (used a .env file)	
Clearly understood commit messages	
Multiple commits per day	
Repo up on day 1 of project week or sooner	
At least 2 Models other than join tables and the user table (required)	
Relationships were set up appropriately between models	
Avoided global variables, storing data in files, etc	
No raw file/image data stored in database, etc	
DRY code	
No enormous files	
Proper indentation	
Naming conventions kept	
No glaring logic errors	
Effort was put into design	
No broken links (server errors or 404s)	
Typing a purposely bad link renders an error ejs page	
Content is responsive to screen size changes	
No glaring alignment or grid errors

