/**document.getElementById("form").addEventListener("submit",(x) => {
x.preventDefault();
var data = document.getElementById("data").Value;
fetch(`https://www.omdbapi.com/?t=${data}&apikey=562f3089`)
.then((res) => res.json())
.then((s) => {
myFun(s);
});
    });
function myFun(s){
    var details = document.getElementById("details");
    if (s.Response === "True") {
        const { Title, Year, Director, Plot } = s;
        details.innerHTML = `<h1>${Title} (${Year})</h1> <h3><b>Director:</b> ${Director}</h3> <h3><b>plot:</b> ${Plot}</h3>`;
    } else {
        details.innerHTML = "<h3>Movie Not Found</h3>";
    }
}*/

document.getElementById("form").addEventListener("submit", (x) => {
    x.preventDefault();
  var data = document.getElementById("data").value;
  fetch(`https://www.omdbapi.com/?t=${data}&apikey=562f3089`)
    .then((res) => res.json())
    .then((s) =>{ 
      myFun(s);
    });
  });
  function myFun(s) {
    var details = document.getElementById("details");
    if (s.Response === "True") {
      const { Title, Year, Director, Plot } = s;
      details.innerHTML = `
      
      <h1>${Title} (${Year})</h1>
                <h3><b>Director:</b> ${Director}</h3>
                <h3><b>Plot:</b> ${Plot}</h3>`;
    } else {
      details.innerHTML = "<h3>Movie Not Found</h3>";
    }
  }