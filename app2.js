document.getElementById("buttom2").addEventListener("click", function(){
    const arrColor = ['MediumVioletRed', 'DeepPink', 'PaleVioletRed', 'HotPink', 
   'LightPink', 'Pink', 'DarkRed', 'Red', 'Firebrick', 'Crimson', 
   'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 
   'LightSalmon', 'OrangeRed', 'Tomato', 'DarkOrange', 'Coral', 
   'Orange', 'DarkKhaki', 'Gold', 'Khaki', 'PeachPuff', 'Yellow', 
   'PaleGoldenrod', 'Moccasin', 'PapayaWhip', 'LightGoldenrodYellow', 
   'LemonChiffon', 'LightYellow','Maroon', 'Brown', 'SaddleBrown', 'Sienna', 
   'Chocolate', 'DarkGoldenrod', 'Peru', 'RosyBrown', 'Goldenrod', 
   'SandyBrown', 'Tan', 'Burlywood', 'Wheat', 'NavajoWhite', 'Bisque', 
   'BlanchedAlmond', 'Cornsilk','DarkGreen', 'Green', 'DarkOliveGreen', 
   'ForestGreen', 'SeaGreen', 'Olive', 'OliveDrab', 'MediumSeaGreen', 
   'LimeGreen', 'Lime', 'SpringGreen', 'MediumSpringGreen', 'DarkSeaGreen', 
   'MediumAquamarine', 'YellowGreen', 'LawnGreen', 'Chartreuse', 'LightGreen', 
   'GreenYellow', 'PaleGreen', 'Teal', 'DarkCyan', 'LightSeaGreen', 
   'CadelBlue', 'DarkTurquoise', 'MediumTurquoise', 'Turquoise', 'Aqua', 
   'Cyan', 'AquaMarine', 'PaleTurquoise', 'LightCyan', 'Navy', 'DarkBlue', 
   'MediumBlue', 'Blue', 'MidnightBlue', 'RoyalBlue', 'SteelBlue', 
   'DodgerBlue', 'DeepSkyBlue', 'CornFlowerBlue', 'SkyBlue', 'LightSkyBlue', 
   'LightSteelBlue', 'LightBlue', 'PowderBlue', 'Indigo', 'Purple', 
   'DarkMagenta', 'DarkViolet', 'DarkSlateBlue', 'BlueViolet', 'DarkOrchid', 
   'Fuchsia', 'Magenta', 'SlateBlue', 'MediumSlateBlue', 
   'MediumOrchid', 'MediumPurple', 'Orchid', 'Violet', 'Plum', 
   'Thistle', 'Lavender', 'MistyRose', 'AntiqueWhite', 'Linen', 
   'Beige', 'WhiteSmoke', 'LavenderBlush', 'OldLace', 'AliceBlue', 
   'Seashell', 'GhostWhite', 'Honeydew', 'ForalWhite', 'Azure', 
   'MintCream', 'Snow', 'Ivory', 'White', 'Black', 'DarkSlateGray', 
   'DimGray', 'SlateGrey', 'Gray', 'LightSlateGray', 'DarkGray', 
   'Silver', 'LightGray', 'Gainsboro'];
    const randomColor = arrColor[Math.floor(Math.random()*arrColor.length)];
    document.querySelector(":root").style.setProperty("--color", randomColor);
    document.getElementById("back").innerText="background-color : " + randomColor;
})