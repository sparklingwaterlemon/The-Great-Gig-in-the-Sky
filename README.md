## THE GREAT GIG IN THE SKY REWORK



Update on <em>Monday, 12/26 </em>

- transitioning to createBrowserRouter vs BrowserRouter
- ReactRouter resource `https://reactrouter.com/en/main/routers/create-browser-router`
- On initial page load, page will smooth scroll down to desired location.
- Testing nested routes (will implement for journal entries down the line)
- Nested Route resource `https://ui.dev/react-router-nested-routes`
- preload images to decrease lag
- background images


To-Do's:
- Display Box is Fixed
- but Astro Weather Box is Moving Parallaxed Effect
- Bottom of Scroll - About Page Linke
- `<a><div>` ?? or just a `<button>`

IceBox:
- New Background at a later time - Stars Parallax Effect





-- Diary Journal Entry - Login
- Full Crud
- Create Journal Post
-- Only future dates
-- List Sorted By Date Order

- Twitter Message like - display components
left side--------right side
all message-------full message
(date/ title/ moonphase) ---- update message or delete
<hr />
<hr />
<hr />
<hr />

12/2
reploying to heroku

10/25

WEATHERAPI SUBSCRIPTION HAS ENDED -  
WEATHER PORTION OF PAGE UNDER CONSTRUCTION


Live Version - on Heroku

https://the-great-gig-in-the-sky.herokuapp.com/

<hr />

# Ice Box

#### (1) Redo Image Loading Logic
- Currently, I am doing the math to load 150 previous days with the comparative index number. Then on scroll, I am loading the date -1, retrieving it from server.
- Change so, the math loads 150 days into a new array // cache all images at once into the client side // this should get rid of lagging between images/ speed up page. Then I can use canvas.ref to access array 0(possible placeholder)-150 days and get the images from here.

#### (2.1) CSS/ Page Responsiveness
- Currently have Index.html to a page height of x. Make height specific for each page.
- Add margin top for canvas.
- Responsive design - work for standard 1440px and iPhone then possibly tablet version

#### (2.2) Removal of background black square of moon images
- So I can have a color gradient on scroll
- https://www.remove.bg/

#### (3) Re-do Contact Form

#### (4) Full CRUD/ RESTful API for Journal




<hr />

Project Home Page

https://user-images.githubusercontent.com/105463926/196267167-625efdaf-1480-478b-9059-069186dcd587.mp4




Trello Link - Project Timeline  
https://trello.com/b/k0eXcd3V/aau-moon-phase

Wireframe v2
![wireframe2](https://user-images.githubusercontent.com/105463926/196267192-e087e057-8999-4471-ba62-79ea2bafb18b.png)

Wireframe v1
![wireframe1](https://user-images.githubusercontent.com/105463926/196267246-b6a8c468-5141-4ad3-acb1-0b9f681be99b.png)


---
MongoDB | Express | React | Node.js | API 

Key Features:
- Parallax - Scrolling Animation (Apple Product Page) 
- WeatherAPI - Used to bring in Weather Data and Moon Data

---
<h3> Scroll Animation </h3>
<h5>The idea </h5>

<h6>Concept:</h6>
If our page has a scroll distance of 1000px and we have 25 images, by dividing these numbers, we can see that for every 40px, or (40px/1000px) = 4% down the page, we should load a new image.

Let's take the 4% and change it to a decimal, .04. 
Let's call this our scroll_fraction. 
We can get this value by dividing the total scroll distance of 1000px, with where we are located on the page.

What image should we load when we are at 300px down the page? 
300px (scroll location) / 1000px (total scroll distance) = gives us .30.
We are 30% down the page, and 30% thru our number of total images.

What is 30% of our total images?

If we take the scroll_fraction, .30, and multiply by the number of our total images, 25, we will get (.30 * 25) = 7.5
We will be at image # 7.5. 

<h6>Organization of Images:</h6>
For our moon images, we have the 365 days of the years with corresponding moon images. To reference the correct image to the correct date, we've crated an array.
We add a filler image for index [0]. The index of the array with go from [0-365].
<br />
<br />
We can use this nifty function to input a date, and return what the day is out of 365 days.
<br />
ie. function daysIntoYear(new Date("Feburary 4 2022")) will return 35 (the 35th day of the year)
![DayDate Function](https://user-images.githubusercontent.com/105463926/196267302-0af2cce4-a843-4f1e-989d-2702d1859ca9.png)

This way, we can access the corresponding moon image for that day.

---
<h3> Key Foundation Function</h3>

![KeyFunction 1](https://user-images.githubusercontent.com/105463926/196267334-63a1cc57-b7a9-436d-95ba-7bc9aeec7893.png)

![KeyFunction 2](https://user-images.githubusercontent.com/105463926/196267363-579ba76e-05e8-4759-8aeb-0ee5fcbf1d63.png)

Basic overview.
Let's go over what's going on. 

Everytime we have a new scroll position, this useEffect will be triggered. So as we scroll, we will recalculate the scroll fraction, where we are relative to the max scroll height. The frameIndex will be a value from 0, to the total frame count (in our case, 150).

By using the Image() constructor, we can set our new image. At the top of our page we will have today's date && moon. As we scroll down, the frameIndex will increase from 0 to 150. We will use the function currentFrame to subtract todays date in days, lets say 267, from 150. We will be able to draw the corresponding images and figure out what date we are on.


----
<h3> Resources </h3>

- Jurn van Wissen - https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/
- Cat Meme Generator - https://www.youtube.com/watch?v=-AwG8yF06Po
- Weiming Wu - https://medium.com/geekculture/how-to-jazz-up-your-website-like-apple-with-javascript-eed2bf227fec 
- React Docs - https://reactjs.org/docs/dom-elements.html 
- Font - https://fonts.google.com/specimen/Lato?query=Lato
- Animate.css - https://animate.style
- NASA moon images - https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=3810
- WeatherAPI - https://www.weatherapi.com/

Really couldn't have done this without the generous sharing of knowledge by Jurn van Wissen and Weiming Wu and their resources.

---
Reason for using 365 images
NASA sources images from 2011, illumination and position, balancing.

---
IceBox

- Page Responsiveness - make it work for different screen sizes
- you may have noticed, what happens if our current day is less than 150? since the lunar phase takes 29.5 days, we can essentially loop it.
- function loop it over after final new moon phase in decemeber. 
- Split Flap for date change as you scroll - https://codepen.io/1055/pen/jjPLJo?editors=0010
- full crud would like to have a main forum/ community discussion board or possibly serve as a journal
- page responsiveness on computer display/ about button

---
<h6> Further Research</h6>
-- is the distance traveled by the up/down arrow universal?
-- is there a default value or is it determined by some external factor like computer screen size?

---
<h6> Updates </h6>

10/17 - Completed icebox item. Moved logged in to about page. App is now accessable without auth. 

---
<h6> Work Log </h6>
...Since Project Presentation/ Submssion on 10/17
<br/>
<br/>

- 10/18
Attempted to switch from Heroku to Render.com
Notes: Needed to install different scripts and dependencies. Yarn and Babel. Attempting to learn but since I had Heroku on auto-deploy, it crashed my heroku page. Will disable auto-deploy on Heroku, create a separate branch (or maybe clone the project, set up a virtual environment) annd attempt again at a later time.
<br />
- 10/18
Completed a screen responsiveness design.

---

The Great Gig In The Sky - Pink Floyd

https://youtu.be/mPGv8L3a_sY

