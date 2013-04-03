///<reference path='three.d.ts' />
///<reference path='CSS3D_Polyfill.d.ts' />
///<reference path='CSS3D_Object.ts' />
///<reference path='WebGL_Object.ts' />

document.writeln("<script src='three.min.js'></script>");
document.writeln("<script src='CSS3D_Polyfill.js'></script>");
document.writeln("<script src='CSS3D_Object.js'></script>");
document.writeln("<script src='WebGL_Object.js'></script>");

var timeDisplay: HTMLElement;
var cssObject: CSS3D_Object;
var webGL_Obj: WebGL_Object;

window.onload = () => {
    timeDisplay = document.getElementById('content');
    webGL_Obj = new WebGL_Object();
    cssObject = new CSS3D_Object(webGL_Obj.camera);
    UpdateHook();
};

window.onresize = (e: UIEvent) => {
    webGL_Obj.onresize();
    cssObject.onresize();
}

window.onmousemove = (e: MouseEvent) => {

}

window.onmousedown = (e: MouseEvent) => {

}

window.onmouseup = (e: MouseEvent) => {

}

function UpdateHook() {

    timeDisplay.innerText = "The time is: " + new Date().toUTCString();
    webGL_Obj.update();
    cssObject.update(webGL_Obj.camera.matrix, webGL_Obj.spinCube.mesh.matrix);

    requestAnimationFrame(() => UpdateHook());
}