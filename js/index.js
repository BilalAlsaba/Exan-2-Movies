$(".button-nav .button-open").click(function () {
    $(".side-nav").css("margin-left", "0px")
    $(".mav-content").css("margin-left", "250px")
    $(".button-open").addClass("d-none")
    $(".button-close").removeClass("d-none")

    $(".mation-ul").slideToggle(1000);
})
$(".button-nav .button-close").click(function () {
    $(".side-nav").css("margin-left", "-250px")
    $(".mav-content").css("margin-left", "0px")
    $(".button-close").addClass("d-none")
    $(".button-open").removeClass("d-none")
    $(".mation-ul").slideToggle(200);

})





$('#nowPlaying').click(function(){
    let inputValue = document.getElementById("nowPlaying");
    let value = inputValue.getAttribute("data-value");
    mymovie(value)
});
$('#popular').click(function(){
    let inputValue = document.getElementById("popular");
    let value = inputValue.getAttribute("data-value");
    mymovie(value)
});
$('#topRated').click(function(){
    let inputValue = document.getElementById("topRated");
    let value = inputValue.getAttribute("data-value");
    mymovie(value)
});
$('#trending').click(function(){
    let inputValue = document.getElementById("trending");
    let value = inputValue.getAttribute("data-value");
    mymovie(value)
});
$('#upcoming').click(function(){
    let inputValue = document.getElementById("upcoming");
    let value = inputValue.getAttribute("data-value");
    mymovie(value)
});


    








async function mymovie(value = "now_playing") {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjkwN2Q3YzI0N2NlMDY1MmZkYWNkZWI4MjdjNmVkOSIsIm5iZiI6MTczMDU1NTQ2OS42NTA5Nzk1LCJzdWIiOiI2NzI1ZmVmZmYzMTFiNzQwM2E0MTBlZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8Mlz8727crcuq55PVmNiGQBueUpDE3m9tLmN0qY7xLU'
        }
      };
      
      let apimovie = await fetch(`https://api.themoviedb.org/3/movie/${value}?language=en-US&page=1`, options)
      let myapimovies = await apimovie.json();
      displayCardmovie(myapimovies.results) ;
    
}




function displayCardmovie(data) {

    let moviecard = ``;
    for (let i = 0; i < data.length ; i++) {
        moviecard += `
               <div class="col-4">
            <div class="items position-relative text-white">

               <div class="image2">
                  <img class="image img-fluid" src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="image">
               </div>
               <div class="layer overflow-hidden p-3 position-absolute top-0">
                  <h2 class=" ps-1l"> ${data[i].title}</h2><br>
                  <p class=" ps-1 p1"> ${data[i].overview}</p>
                  <p class="p2">Relese Date:<span class="">${data[i].release_date}</span></p>
                  <h3 class="rateStars p2">
                     <i class="fa-solid fa-star text-warning fs-6"></i>
                     <i class="fa-solid fa-star text-warning fs-6"></i>
                     <i class="fa-solid fa-star text-warning fs-6"></i>
                  </h3>
                  <h3 class="rate p2 vote ">${data[i].vote_average}</h3>
               </div>

            </div>
         </div>`;
    }

    document.getElementById("movieCard").innerHTML = moviecard ;
}
mymovie()




















document.getElementById("name").addEventListener("input", function validatename() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const name = document.getElementById("name").value;

    if (namePattern.test(name)) {
        document.querySelector(".error1").innerText = "";
    } else {
        document.querySelector(".error1").innerText = "Invalid Name , only Characters allowed";
    }
})

document.getElementById("email").addEventListener("input", function validatename() {
    const emailPattern = /^\w+@\w+\.\w{2,3}$/;
    const email = document.getElementById("email").value;

    if (emailPattern.test(email)) {
        document.querySelector(".error2").innerText = "";
    } else {
        document.querySelector(".error2").innerText = "Invalid email , only Characters allowed";
    }
})

document.getElementById("phone").addEventListener("input", function validatename() {
    const phonePattern = /^01[0125][0-9]{8}$/;
    const phone = document.getElementById("phone").value;

    if (phonePattern.test(phone)) {
        document.querySelector(".error3").innerText = "";
    } else {
        document.querySelector(".error3").innerText = "Invalid phone , only Characters allowed";
    }
})
document.getElementById("age").addEventListener("input", function validatename() {
    const agePattern = /^(1[6-9]|[2-9][0-9])$/;
    const age = document.getElementById("age").value;

    if (agePattern.test(age)) {
        document.querySelector(".error4").innerText = "";
    } else {
        document.querySelector(".error4").innerText = "Invalid age , only Characters allowed";
    }
})
document.getElementById("password").addEventListener("input", function validatename() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = document.getElementById("password").value;

    if (passwordPattern.test(password)) {
        document.querySelector(".error5").innerText = "";
    } else {
        document.querySelector(".error5").innerText = "Invalid password , only Characters allowed";
    }
})
document.getElementById("repassword").addEventListener("input", function validatename() {
    const repasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (repassword == password && repasswordPattern.test(repassword)) {
        document.querySelector(".error6").innerText = "";
    } else {
        document.querySelector(".error6").innerText = "Invalid repassword , only Characters allowed";
    }
})