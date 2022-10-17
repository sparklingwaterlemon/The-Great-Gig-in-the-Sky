The Great Gig In The Sky - Pink Floyd  
https://www.youtube.com/watch?v=mPGv8L3a_sY

Project Home Page
https://user-images.githubusercontent.com/105463926/196264194-a64458da-1b47-4c51-8b0c-a45d2d67bed6.mov


Trello Link - Project Timeline  
https://trello.com/b/k0eXcd3V/aau-moon-phase

Wireframe v2
<---insert wireframe 2 image -->

Wireframe v1
<---insert wireframe 2 image -->

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
<--- insert DAYDATE FUNCTION ---->

This way, we can access the corresponding moon image for that day.

---
<h3> Key Foundation Function</h3>

<--- insert key function 1 --->
<--- insert key function 2 --->
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

Really couldn't have done this without the generous sharing of knowledge by Jurn van Wissen and Weiming Wu and their resources.

---
Reason for using 365 images
NASA sources images from 2011, illumination and position, balancing.

---
IceBox
- you may have noticed, what happens if our current day is less than 150? since the lunar phase takes 29.5 days, we can essentially loop it.
- function loop it over after final new moon phase in decemeber. 
- Split Flap for date change as you scroll - https://codepen.io/1055/pen/jjPLJo?editors=0010
- full crud would like to have a main forum/ community discussion board or possibly serve as a journal

---
<h6> Further Research</h6>
-- is the distance traveled by the up/down arrow universal?

-- is there a default value or is it determined by some external factor like computer screen size?
