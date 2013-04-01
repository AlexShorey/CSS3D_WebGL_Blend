///<reference path='three.d.ts' />
var CSS3D_Object = (function () {
    function CSS3D_Object() {
        this.initCSS3D();
    }
    CSS3D_Object.prototype.Update = function () {
    };
    CSS3D_Object.prototype.initCSS3D = function () {
        this.divWorld = document.createElement('div');
        this.divCam = document.createElement('div');
        this.divObj = document.createElement('div');
        //#########################################
        //see app.css for static style declarations
        //#########################################
        this.divWorld.id = "dWorld";
        this.divCam.id = "dCam";
        this.divObj.id = "dObj";
        document.body.appendChild(this.divWorld);
        this.divWorld.appendChild(this.divCam);
        this.divCam.appendChild(this.divObj);
    };
    CSS3D_Object.prototype.setCSSWorld = function () {
    };
    CSS3D_Object.prototype.setCSSCamera = function () {
    };
    CSS3D_Object.prototype.getCSS3D_cameraStyle = function () {
    };
    CSS3D_Object.prototype.toCSSMatrix = function () {
    };
    CSS3D_Object.prototype.setDivPosition = function () {
    };
    CSS3D_Object.prototype.CSStransform = function () {
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
