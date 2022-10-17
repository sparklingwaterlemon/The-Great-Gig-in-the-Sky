<<<<<<< HEAD
The Great Gig In The Sky - Pink Floyd
https://www.youtube.com/watch?v=mPGv8L3a_sY



Trello Link - Project Timeline
https://trello.com/b/k0eXcd3V/aau-moon-phase

Wireframe v2 < br/> 
https://lucid.app/lucidchart/d4b3b8dd-f777-4f42-bb95-e7cf574a4214/edit?view_items=fzFZslCtkPFP&invitationId=inv_00fc9adc-ae92-4d78-8f06-3e0d5863d4bf


- Giphy of Page
MERN stack
use of WeatherAPI / mongoDB / apple site like scroll feature

---
Main feature of this project lies in the scroll feature.
Works like a flipbook animation.

---
The idea. <br />
If our page has a scroll distance of 1000px and we have 25 images, by dividing these numbers, <br />
we can see that for every 40px, or (40px/1000px) = 4% down the page, we should load a new image.

Let's take the 4% and change it to a decimal, .04 <br />
Let's call this our scroll_fraction. <br />
We can get this value by dividing the total scroll distance of 1000px, with where we are located on the page.

What image should we load when we are at 300px down the page? <br />
300px (scroll location) / 1000px (total scroll distance) = gives us .30 <br />
We are 30% down the page, and 30% thru our number of total images. <br />

What is 30% of our total images? <br />
If we take the scroll_fraction, .30, and multiply by the number of our total images, 25, we will get (.30 * 25) = 7.5
We will be at image # 7.5. 

-
We can put our images into an array. <br />
For 25 images, the indexes will go from 0 to 24. <br />
Let's call this our frame_index.<br />

Let's us math.floor for our above example. <br />
At 30% down the page, we will be at frame_index of 7 (<- 7.5 math.floored) (or the 6th image).

Why are we at the 6th image not the 7th? <br />
At scroll distance of 0 to 40px, we will be at frame_index = 0, our first image. <br />
We are fine tuning. <br />
In our example above, the first image does not load till 40px.

At scroll position of 1000px, at total scroll distance of 1000px (the bottom of the page), we will get a scroll_fraction of 1. <br />
If we multiply that value by total iamges, we will get a frame_index of 25. <br />
Our array of 25 images only goes to frame_index of 24. <br />
We can add a Math.min(total_frame_count -1), so 24 will be our biggest frame_index. 

---












Key Function

![Screen Shot 2022-10-10 at 11 18 59 AM](https://user-images.githubusercontent.com/105463926/194930080-87234766-3621-4c39-a386-4fb04889d7a6.png)

useState
![Screen Shot 2022-10-10 at 11 24 10 AM](https://user-images.githubusercontent.com/105463926/194930202-d375eb55-495b-46e7-9162-7e88cd7170e8.png)
