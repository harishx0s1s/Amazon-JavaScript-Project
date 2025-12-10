// frontend - what a user sees on webpage and user interact with is known as frontend
// a bacend is just a another application which manages a data of webpage and sends responses to the rrquest we make
// a frontend sends data in http method 
//      HTTP - hyper text tranfer protocol which sends request and get response back

// XMLHttpRequest - Which is a built in class to send HTTP request provided by javascript
// respone = load we habve to add evenlisteber tpo the call we make first create the XMLHttpRequest class then open(method, urlpath or api path) and send the request
// the backend can send response in different types which as text/json file format/html content/image 
// api means appplication programming interface - interface is nothing but what we interacting with
// we can make get/post/put/delete method with api 
// when we get response from backend in json we have change it into objeect first by using json.parse() method
// same when we get response from brankend in image format but it doesnt feel likr readable instead it come in raw codeof image
// when we get response as html content browser can convrt into content


const xhr = new XMLHttpRequest
xhr.addEventListener('load',()=>{
  console.log(xhr.response)
})
xhr.open('GET', 'https://supersimplebackend.dev')
xhr.send()






 