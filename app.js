
// create the profile image
var profilePicture=document.createElement("img");
profilePicture.setAttribute("src","./images/IMG_1514.JPG ");
profilePicture.setAttribute("height","250px");
profilePicture.setAttribute("width","250px");



document.getElementById("profilimage").appendChild(profilePicture);

// create the home page icon
var homepageLink=document.createElement("a");
homepageLink.setAttribute("href","./index.html");

var homepageIcon = document.createElement("img");
homepageIcon.setAttribute("src","./images/homepage.png  ");
homepageIcon.setAttribute("height","50px");
homepageIcon.setAttribute("width","50px");

homepageLink.appendChild(homepageIcon);
document.getElementsByClassName("icon")[0].appendChild(homepageLink);

// make a request to the Naza API to get the APOD

const app = document.getElementById('apod');
var request = new XMLHttpRequest();
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=fLZPdkHJpu4sA6Xs6c3tLJcJax9hQ1s3Lx7QiWjp', true);
request.onload = function () {
    // start accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
   
        const h1 = document.createElement('h1')
        h1.textContent = data.title
  
        const p = document.createElement('p')
              p.textContent = `${data.explanation}`
  
        app.appendChild(h1)
        app.appendChild(p)
  
        if(data.media_type === 'video'){ 
           const frame = document.createElement('iframe')
           frame.setAttribute("height","100px"); 
           frame.setAttribute("width","100px")
           frame.src =data.url
  
           app.appendChild(frame)
  
        }
        else{
          const picture = document.createElement('img')
          picture.setAttribute("height","300px"); 
          picture.setAttribute("width","100%"); 
          picture.src =data.url
          app.appendChild(picture)
        }
  } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `It does not work well, review your code or your API link`
      app.appendChild(errorMessage)
    }
  }
  
  request.send()

