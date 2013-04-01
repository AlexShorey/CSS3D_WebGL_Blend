///<reference path='three.d.ts' />
///<reference path='CSS3D_Polyfill.d.ts' />
///<reference path='CSS3D_Object.ts' />

document.writeln("<script src='three.min.js'></script>");
document.writeln("<script src='CSS3D_Polyfill.js'></script>");
document.writeln("<script src='CSS3D_Object.js'></script>");

var timeDisplay: HTMLElement;
var cssObject: CSS3D_Object;

window.onload = () => {
    timeDisplay = document.getElementById('content');
    cssObject = new CSS3D_Object();
    UpdateHook();
};

window.onresize = (e: UIEvent) => {

}

window.onmousemove = (e: MouseEvent) => {

}

window.onmousedown = (e: MouseEvent) => {

}

window.onmouseup = (e: MouseEvent) => {

}

function UpdateHook() {

    timeDisplay.innerText = "The time is: " + new Date().toUTCString();
    cssObject.Update();

    requestAnimationFrame(() => UpdateHook());
}