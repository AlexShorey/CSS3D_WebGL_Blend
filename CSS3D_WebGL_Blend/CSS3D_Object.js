///<reference path='three.d.ts' />
var CSS3D_Object = (function () {
    function CSS3D_Object(cam) {
        this.camera = cam;
        this.toCSSfov();
        this.divWorld = document.createElement('div');
        this.divCam = document.createElement('div');
        this.divObj = document.createElement('div');
        this.divWorld.id = "dWorld";
        this.divCam.id = "dCam";
        this.divObj.id = "dObj";
        this.onresize();
        document.body.appendChild(this.divWorld);
        this.divWorld.appendChild(this.divCam);
        this.divCam.appendChild(this.divObj);
    }
    CSS3D_Object.prototype.update = function (camMtx, objMtx) {
        this.toCSSfov();
        this.setCSSWorld();
        this.setCSSCamera();
        this.setCSSObj(objMtx);
    };
    CSS3D_Object.prototype.onresize = function () {
        this.divWorld.style.width = window.innerWidth + "px";
        this.divWorld.style.height = window.innerHeight + "px";
        this.divCam.style.width = window.innerWidth + "px";
        this.divCam.style.height = window.innerHeight + "px";
        this.toCSSfov();
        this.divCam.style = CSS3D_Transform(this.divCam.style, this.getCSS3D_cameraStyle());
        this.divWorld.style = CSS3D_Perspective(this.divWorld.style, this.fov + "px");
    };
    CSS3D_Object.prototype.setCSSWorld = function () {
        this.divWorld.style = CSS3D_Perspective(this.divWorld.style, this.fov + "px");
        this.divWorld.style = CSS3D_PerspectiveOrigin(this.divWorld.style, "50% 50%");
    };
    CSS3D_Object.prototype.setCSSCamera = //dont need this?
    function () {
        this.divCam.style = CSS3D_Transform(this.divCam.style, this.getCSS3D_cameraStyle());
    };
    CSS3D_Object.prototype.setCSSObj = function (objMtx) {
        this.divObj.style = CSS3D_Transform(this.divObj.style, this.CSStransform(0, 0, objMtx));
    };
    CSS3D_Object.prototype.getCSS3D_cameraStyle = function () {
        var cssStyle = "";
        cssStyle += "translate3d(0,0," + this.epsilon(this.fov) + "px) ";
        cssStyle += this.toCSSMatrix(this.camera.matrixWorldInverse, true);
        cssStyle += " translate3d(" + window.innerWidth / 2 + "px," + window.innerHeight / 2 + "px, 0)";
        return cssStyle;
    };
    CSS3D_Object.prototype.toCSSfov = function () {
        this.fov = 0.5 / Math.tan(this.camera.fov * Math.PI / 360) * window.innerHeight;
    };
    CSS3D_Object.prototype.toCSSMatrix = function (matrix, b) {
        var a = matrix, f;
        if(b) {
            f = [
                a.elements[0], 
                -a.elements[1], 
                a.elements[2], 
                a.elements[3], 
                a.elements[4], 
                -a.elements[5], 
                a.elements[6], 
                a.elements[7], 
                a.elements[8], 
                -a.elements[9], 
                a.elements[10], 
                a.elements[11], 
                a.elements[12], 
                -a.elements[13], 
                a.elements[14], 
                a.elements[15]
            ];
        } else {
            f = [
                a.elements[0], 
                a.elements[1], 
                a.elements[2], 
                a.elements[3], 
                a.elements[4], 
                a.elements[5], 
                a.elements[6], 
                a.elements[7], 
                a.elements[8], 
                a.elements[9], 
                a.elements[10], 
                a.elements[11], 
                a.elements[12], 
                a.elements[13], 
                a.elements[14] + 100, 
                a.elements[15]
            ];
        }
        for(var e in f) {
            f[e] = this.epsilon(f[e]);
        }
        return "matrix3d(" + f.join(",") + ")";
    };
    CSS3D_Object.prototype.setDivPosition = function () {
    };
    CSS3D_Object.prototype.CSStransform = function (width, height, matrix) {
        var scale = 1.0;
        return [
            this.toCSSMatrix(matrix, false), 
            
        ].join(//"scale3d(" + scale + "," + scale + "," + scale + ")",
        /*"translate3d(" + this.epsilon(-0.5 * width) + "px," + this.epsilon(-0.5 * height) + "px,0)"*/ " ");
    };
    CSS3D_Object.prototype.epsilon = // rounding error compensation?
    function (a) {
        if(Math.abs(a) < 0.000001) {
            return 0;
        }
        return a;
    };
    return CSS3D_Object;
})();
//@ sourceMappingURL=CSS3D_Object.js.map
