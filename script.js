//För knappen för att sätta på och av darkmode -----------------------------------------------
const link_color = document.querySelector("#styling_color");
const button_colormode = document.querySelector("#btn_dm");

button_colormode.addEventListener("click", function () {
  if (link_color.getAttribute("href") === "css/color_darkmode.css") {
    link_color.setAttribute("href", "css/color_lightmode.css");
  } else {
    link_color.setAttribute("href", "css/color_darkmode.css");
  }
});

//För knappen för att sätta på och av accessability ------------------------------------------
const link_font = document.querySelector("#styling_font");
const button_font = document.querySelector("#btn_font");

button_font.addEventListener("click", function () {
  if (link_font.getAttribute("href") === "css/textstyle_accessible.css") {
    link_font.setAttribute("href", "css/textstyle_normal.css");
  } else {
    link_font.setAttribute("href", "css/textstyle_accessible.css");
  }
});

// -------------------------------------------------------------------------------------------
