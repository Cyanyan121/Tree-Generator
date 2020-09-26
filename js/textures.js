// Convert hexidecimal to floating point RGB
function hexToRGB(hex){
    hex = parseInt(hex.substring(1), 16);
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;
    return [r / 255, g / 255, b / 255];
}

// Refresh the texture of the environment
function refreshTextures() {
    // Cloud parameters
    var cloudColor = hexToRGB($("#cloud-color").val());
    var cloudAmount = parseFloat($("#cloud-amount").val());
    var cloudFrequency = parseFloat($("#cloud-frequency").val());

    // Grass parameters
    var grassColor1 = hexToRGB($("#grass-color-1").val());
    var grassColor2 = hexToRGB($("#grass-color-2").val());
    var grassFrequency = parseFloat($("#grass-frequency").val());

    /**
     * TODO: Add your code here to adjust the cloud texture and grass texture
     **/

    // Refresh the sky colour
    var reSkyColour = document.getElementById("skyColour");
    var getValues = reSkyColour.getAttribute("values");
    reSkyColour.setAttribute("values", [(1-cloudColor[0]),0,0,0,(cloudColor[0]),
                                        (1-cloudColor[1]),0,0,0,(cloudColor[1]),
                                        (1-cloudColor[2]),0,0,0,(cloudColor[2]),
                                        0,0,0,0,1]);
    // Refresh the amount of clouds
    var reSkyAmount = document.getElementById("skyAmount");
    var getExponent = reSkyAmount.getAttribute("exponent");
    reSkyAmount.setAttribute("exponent", cloudAmount);
    // Refresh the cloud frequency
    var reSkyFrequency = document.getElementById("skyFrequency");
    var getBaseFrequency = reSkyFrequency.getAttribute("baseFrequency");
    reSkyFrequency.setAttribute("baseFrequency", cloudFrequency);

    // Refresh the grass colour
    var reGrassColour = document.getElementById("grassColour");
    var getValues = reGrassColour.getAttribute("values");
    reGrassColour.setAttribute("values", [Math.abs(grassColor2[0]-grassColor1[0]),0,0,0,Math.min(grassColor1[0],grassColor2[0]),
                                          Math.abs(grassColor2[1]-grassColor1[1]),0,0,0,Math.min(grassColor1[1],grassColor2[1]),
                                          Math.abs(grassColor2[2]-grassColor1[2]),0,0,0,Math.min(grassColor1[2],grassColor2[2]),
                                          0,0,0,0,1]);
    // Refresh the grass frequency
    var reGrassFrequency = document.getElementById("grassfrequency");
    var getBaseFrequency = reGrassFrequency.getAttribute("baseFrequency");
    reGrassFrequency.setAttribute("baseFrequency", grassFrequency);
}
