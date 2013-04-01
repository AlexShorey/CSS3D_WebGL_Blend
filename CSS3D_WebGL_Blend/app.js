///<reference path='three.d.ts' />
///<reference path='CSS3D_Polyfill.d.ts' />
///<reference path='CSS3D_Object.ts' />
document.writeln("<script src='three.min.js'></script>");
document.writeln("<script src='CSS3D_Polyfill.js'></script>");
document.writeln("<script src='CSS3D_Object.js'></script>");
var timeDisplay;
var cssObject;
window.onload = function () {
    timeDisplay = document.getElementById('content');
    cssObject = new CSS3D_Object();
    UpdateHook();
};
window.onresize = function (e) {
};
window.onmousemove = function (e) {
};
window.onmousedown = function (e) {
};
window.onmouseup = function (e) {
};
function UpdateHook() {
    timeDisplay.innerText = "The time is: " + new Date().toUTCString();
    cssObject.Update();
    requestAnimationFrame(function () {
        return UpdateHook();
    });
}
//@ sourceMappingURL=app.js.map
