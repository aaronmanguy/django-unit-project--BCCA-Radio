const egg1 = document.getElementById("egg-1");
const egg2 = document.getElementById("egg-2");
const egg3 = document.getElementById("egg-3");
var e1CN = egg1.className;
var e2CN = egg2.className;
var e3CN = egg3.className;
var called = false;

try {
  var eggCount = localStorage.getItem("eggcount");
} catch (error) {
  var eggCount = "0";
}
if (eggCount == "1") {
  egg1.className = " egg-1_show";
  e1CN = egg1.className;
} else if (eggCount == "2") {
  egg1.className = " egg-1_show";
  e1CN = egg1.className;
  egg2.className = " egg-2_show";
  e2CN = egg2.className;
} else if (eggCount == "3") {
  egg1.className = " egg-1_show";
  e1CN = egg1.className;
  egg2.className = " egg-2_show";
  e2CN = egg2.className;
  egg3.className = " egg-3_show";
  e3CN = egg3.className;
}

function show_egg_1() {
  console.log(localStorage.getItem("eggcount"));
  if (!called) {
    called = true;
    if (e1CN == "egg-1") {
      eggCount = "1";
      localStorage.setItem("eggcount", "1");
      egg1.className = " egg-1_show";
      e1CN = egg1.className;
    } else if (e2CN == "egg-2") {
      eggCount = "2";
      localStorage.setItem("eggcount", "2");
      egg2.className = " egg-2_show";
      e2CN = egg2.className;
    } else if (e3CN == "egg-3") {
      eggCount = "3";
      localStorage.setItem("eggcount", "3");
      egg3.className = " egg-3_show";
      e3CN = egg3.className;
    }
  } else {
    return;
  }
}

function show_egg_2() {
  console.log(localStorage.getItem("eggcount"));
  if (!called) {
    called = true;
    if (e1CN == "egg-1") {
      eggCount = "1";
      localStorage.setItem("eggcount", "1");
      egg1.className = " egg-1_show";
      e1CN = egg1.className;
    } else if (e2CN == "egg-2") {
      eggCount = "2";
      localStorage.setItem("eggcount", "2");
      egg2.className = " egg-2_show";
      e2CN = egg2.className;
    } else if (e3CN == "egg-3") {
      eggCount = "3";
      localStorage.setItem("eggcount", "3");
      egg3.className = " egg-3_show";
      e3CN = egg3.className;
    }
  } else if (called) {
    return;
  }
}

function show_egg_3() {
  console.log(localStorage.getItem("eggcount"));
  if (!called) {
    called = true;
    if (e1CN == "egg-1") {
      eggCount = "1";
      localStorage.setItem("eggcount", "1");
      egg1.className = " egg-1_show";
      e1CN = egg1.className;
    } else if (e2CN == "egg-2") {
      eggCount = "2";
      localStorage.setItem("eggcount", "2");
      egg2.className = " egg-2_show";
      e2CN = egg2.className;
    } else if (e3CN == "egg-3") {
      eggCount = "3";
      localStorage.setItem("eggcount", "3");
      egg3.className = " egg-3_show";
      e3CN = egg3.className;
    }
  } else if (called) {
    return;
  }
}
