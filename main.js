function b() {
    document.getElementById("q").style.color = "blue";
}

function g() {
    document.getElementById("q").style.color = "green";
}

function y() {
    document.getElementById("q").style.color = "yellow";
}

function o() {
    document.getElementById("q").style.color = "orange";
}

function r() {
    document.getElementById("q").style.color = "red";

}

function p() {
    document.getElementById("q").style.color = "purple";
}

function pi() {
    document.getElementById("q").style.color = "pink";
}

function br() {
    document.getElementById("q").style.color = "brown";
}

function bl() {
    document.getElementById("q").style.color = "black";
}

function w() {
    document.getElementById("q").style.color = "white";

}

function blue() {
    document.getElementById("qi").style.color = "blue";
}

function green() {
    document.getElementById("qi").style.color = "green";
}

function yellow() {
    document.getElementById("qi").style.color = "yellow";
}

function orange() {
    document.getElementById("qi").style.color = "orange";
}

function red() {
    document.getElementById("qi").style.color = "red";

}

function purple() {
    document.getElementById("qi").style.color = "purple";
}

function pink() {
    document.getElementById("qi").style.color = "pink";
}

function brown() {
    document.getElementById("qi").style.color = "brown";
}

function black() {
    document.getElementById("qi").style.color = "black";
}

function white() {
    document.getElementById("qi").style.color = "white";

}
var mercury_gravity = Math.round(Math.sqrt(2 * 3.7 * 10000));
var venus_gravity = Math.round(Math.sqrt(2 * 8.87 * 10000));
var earth_gravity = Math.round(Math.sqrt(2 * 9.8 * 10000));
var mars_gravity = Math.round(Math.sqrt(2 * 3.71 * 10000));
var jupiter_gravity = Math.round(Math.sqrt(2 * 24.79 * 10000));
var saturn_gravity = Math.round(Math.sqrt(2 * 10.44 * 10000));
var uranus_gravity = Math.round(Math.sqrt(2 * 8.69 * 10000));
var neptune_gravity = Math.round(Math.sqrt(2 * 11.15 * 10000));

var mercury = Number(250 * 0.377);
var venus = Number(250 * 0.904);
var earth = "245";
var mars = Number(250 * 0.378);
var jupiter = Number(250 * 2.52);
var saturn = Number(250 * 1.06);
var uranus = Number(250 * 0.885);
var neptune = Number(250 * 1.136);

function me() {
    document.getElementById("qwe").innerHTML = "Mercury is";
    document.getElementById("rfes").innerHTML = "3.7";
    document.getElementById("speed").innerHTML = mercury_gravity;
    document.getElementById("df").innerHTML = mercury;
}

function ve() {
    document.getElementById("qwe").innerHTML = "Venus is";
    document.getElementById("rfes").innerHTML = "8.87";
    document.getElementById("speed").innerHTML = venus_gravity;
    document.getElementById("df").innerHTML = venus;
}

function ea() {
    document.getElementById("qwe").innerHTML = "Earth is";
    document.getElementById("rfes").innerHTML = "9.8";
    document.getElementById("speed").innerHTML = earth_gravity;
    document.getElementById("df").innerHTML = earth;
}

function ma() {
    document.getElementById("qwe").innerHTML = "Mars is";
    document.getElementById("rfes").innerHTML = "3.71";
    document.getElementById("speed").innerHTML = mars_gravity;
    document.getElementById("df").innerHTML = mars;
}

function ju() {
    document.getElementById("qwe").innerHTML = "Jupiter is";
    document.getElementById("rfes").innerHTML = "24.79";
    document.getElementById("speed").innerHTML = jupiter_gravity;
    document.getElementById("df").innerHTML = jupiter;

}

function sa() {
    document.getElementById("qwe").innerHTML = "Saturn is";
    document.getElementById("rfes").innerHTML = "10.44";
    document.getElementById("speed").innerHTML = saturn_gravity;
    document.getElementById("df").innerHTML = saturn;
}

function ur() {
    document.getElementById("qwe").innerHTML = "Uranus is";
    document.getElementById("rfes").innerHTML = "8.69";
    document.getElementById("speed").innerHTML = uranus_gravity;
    document.getElementById("df").innerHTML = uranus;
}

function ne() {
    document.getElementById("qwe").innerHTML = "Neptune is";
    document.getElementById("rfes").innerHTML = "11.15";
    document.getElementById("speed").innerHTML = neptune_gravity;
    document.getElementById("df").innerHTML = neptune;
}

function img1() {
    window.alert("The sun is a star, a hot ball of glowing gases at the heart of our solar system. Its influence extends far beyond the orbits of distant Neptune and Pluto. Without the sun's intense energy and heat, there would be no life on Earth. And though it is special to us, there are billions of stars like our sun scattered across the Milky Way galaxy. If the sun were as tall as a typical front door, the Earth would be the size of a U.S. nickel. The temperature at the sun's core is about 27 million degrees Fahrenheit. Average diameter: 864,000 miles, about 109 times the size of the Earth. Rotation period at equator: About 27 days. Rotation period at poles: About 36 days. Surface temperature: 10,000 degrees Fahrenheit. Composition: Hydrogen, helium.");
}

function img2() {
    window.alert("The distance between Mercury and the Sun is 35980000.");
}

function img3() {
    window.alert("The distance between Venus and the Sun is 67240000.");
}

function img4() {
    window.alert("The distance between Earth and the Sun is 92960000.");
}

function img5() {
    window.alert("The distance between Mars and the Sun is 141600000.");
}

function img6() {
    window.alert("The distance between Jupiter and the Sun is 483800000.");
}

function img7() {
    window.alert("The distance between Saturn and the Sun is 888200000.");
}

function img8() {
    window.alert("The distance between Uranus and the Sun is 1784000000.");
}

function img9() {
    window.alert("The distance between Neptune and the Sun is 2795000000.");
}
var images = ["https://th.bing.com/th/id/R.2901e3da973b12e0b3bf2f803d99a22d?rik=XxwCafSwxNivGQ&riu=http%3a%2f%2fwww.pngimagesfree.com%2fNATURE%2fPlanet%2fVenus%2fPNG-Venus-Planet-image.png&ehk=RvpIKBBxH8vh0NvfFJY8Cku362ALZJfzQZAH40gknys%3d&risl=&pid=ImgRaw&r=0", "OIP.jpg", "19-192147_mars-planet-white-background.png", "istockphoto-978567308-170667a.jpg", "istockphoto-450137517-170667a.jpg", "702-7025868_uranus-planet-png-uranus-planet-white-background-transparent.png", "2-23643_neptune-planet-white-background-hd-png-download.png", "https://clipartspub.com/images/mercury-clipart-transparent-background-8.png"];
var i = 0;

function asq() {
    document.getElementById("sw").src = images[i];
    i++;
    if (i == 8) {
        i = 0;
    }
}

function information() {
    if (i == 0) {
        document.getElementById("qwe").innerHTML = "Mercury is";
        document.getElementById("rfes").innerHTML = "3.7";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 3.7 * 10000));
        document.getElementById("df").innerHTML = 250 * 0.377;
    }
    if (i == 1) {
        document.getElementById("qwe").innerHTML = "Venus is";
        document.getElementById("rfes").innerHTML = "8.87";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 8.87 * 10000));
        document.getElementById("df").innerHTML = 250 * 0.904;
    }
    if (i == 2) {
        document.getElementById("qwe").innerHTML = "Earth is";
        document.getElementById("rfes").innerHTML = "9.8";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 9.8 * 10000));
        document.getElementById("df").innerHTML = "245";

    }
    if (i == 3) {
        document.getElementById("qwe").innerHTML = "Mars is";
        document.getElementById("rfes").innerHTML = "3.71";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 3.71 * 10000));
        document.getElementById("df").innerHTML = 250 * 0.378;
    }
    if (i == 4) {
        document.getElementById("qwe").innerHTML = "Jupiter is";
        document.getElementById("rfes").innerHTML = "24.79";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 24.79 * 10000));
        document.getElementById("df").innerHTML = 250 * 2.52;
    }
    if (i == 5) {
        document.getElementById("qwe").innerHTML = "Saturn is";
        document.getElementById("rfes").innerHTML = "10.44";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 10.44 * 10000));
        document.getElementById("df").innerHTML = 250 * 1.06;
    }
    if (i == 6) {
        document.getElementById("qwe").innerHTML = "Uranus is";
        document.getElementById("rfes").innerHTML = "8.69";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 8.69 * 10000));
        document.getElementById("df").innerHTML = 250 * 0.885;
    }
    if (i == 7) {
        document.getElementById("qwe").innerHTML = "Neptune is";
        document.getElementById("rfes").innerHTML = "11.15";
        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(2 * 11.15 * 10000));
        document.getElementById("df").innerHTML = 250 * 1.136;
    }
}
