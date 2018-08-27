
# Capco Challenge
<p>Time Spent: 2 full days</p>
<h2>My Solution</h2>
<p>I watched the video numerous times and drew out my grid-- noting that it is a 4X6 grid and preloaded with two -2X2 images and 16- 1X1s-- totally 18 images. Next, I installed create-react-app and the following dependencies: </p>

<ul>
  <li><b>ClassNames </b>for styling--this was my first time using..lots still to learn</li>
  <li><b>Bootstrap </b>Styling</li>
  <li><b>Axios: </b>Promise based HTTP client for the browser</li>
  <li><b>DogAPI: </b>API with dog breeds, images, names, etc.</li>
</ul>

<p>Then, I researched several apis for images.  Honestly, I initially went to the documentation to use cat images from a cat api, however, the link redirected me to the dog api becuase it is still in beta, apparantly.  Anyway, I've used the dog api before and knew it was reliable.  </p>

<p>After deciding on the APi, I created my file structure.  I am using three components.  App component is the parent and it's only rendering the Gallery component.  The Gallery component houses the Ajax call to the DogAPI using Axios. Here is where I get all 18 dog objects and map over each one assigning keys, ids, the actual object and an onClick event(the latter two are assigned in order to access via props in the Picture component). The Picture componenet is the child componenet of Gallery.  Picture houses the click event and rendering the images. </p>
<p>I choose to assign each image an id with the word "pic" + id number so that I could target them with CSS later on.  My onclick isn't working properly as the way I was calling "picId" it came back undefined. I believe this is because I should have assigned the id when it first comes back from the inital ajax call-- possibly using it in state and then binidng it.  For example, I attempted to create two styles in state- 'isSmall' and 'isBig' and then when the page loads, have two images isBig set to true and the rest of the images set to false.  Or something similiar.  Next, I would have had a toggle in the onClick to have to have it turn on or off when clicked.</p>
<p>In regards to CSS, I hardcoded the onClick event selector id to be "pic01" because I wanted to be able to show that the grid is mostly fluid.  I do realize this is not proper but couldn't figure a way to target individual ids(see my difficulties above).  I used the CSS grid for flexibility and fluidity of the images.  Also, the images from the API do come back in a variety of sizes and I had to format them to make them more uniform. </p>
<p>Thanks for considering me!</p>

<footer>Built and Designed by Heather Mathies</footer>