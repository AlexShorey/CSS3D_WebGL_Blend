///<reference path='three.d.ts' />

class CSS3D_Object {

    screenWidth: number;
    screenHeight: number;

    divWorld: HTMLElement;
    divCam:   HTMLElement;
    divObj:   HTMLElement;



    constructor() {
        this.initCSS3D();
    }

    Update() {
    }

    initCSS3D() {
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
    }

    setCSSWorld() {
    }

    setCSSCamera() {
    }

    getCSS3D_cameraStyle() {
    }

    toCSSMatrix() {
    }

    setDivPosition() {
    }

    CSStransform() {
    }

    // rounding error compensation?
    epsilon(a: number): number {
        if (Math.abs(a) < 0.000001) {
            return 0;
        }
        return a;
    }
}