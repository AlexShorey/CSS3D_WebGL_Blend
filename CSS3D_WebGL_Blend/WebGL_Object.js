///<reference path='three.d.ts' />
var WebGL_Object = (function () {
    function WebGL_Object() {
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.y = 150;
        this.camera.position.z = -300;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.id = "glid";
        this.spinCube = new SpinCube();
        this.pLight = new THREE.PointLight(0xFFFFFF);
        this.pLight.position = new THREE.Vector3(-100, 200, -100);
        this.scene.add(this.spinCube.mesh);
        this.scene.add(this.pLight);
        this.scene.add(new THREE.AmbientLight(0x111111));
    }
    WebGL_Object.prototype.update = function () {
        this.spinCube.update();
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderer.render(this.scene, this.camera);
    };
    WebGL_Object.prototype.onresize = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    };
    return WebGL_Object;
})();
var SpinCube = (function () {
    function SpinCube() {
        this.geometry = new THREE.CubeGeometry(25, 25, 25);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xFF0000
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.inc = 0;
    }
    SpinCube.prototype.update = function () {
        this.inc += 0.01;
        if(this.inc > Math.PI * 2) {
            this.inc -= Math.PI * 2;
        }
        this.mesh.position = new THREE.Vector3(Math.sin(this.inc) * 50, 0, Math.cos(this.inc) * 50);
        this.mesh.lookAt(new THREE.Vector3(0, 0, 0));
    };
    return SpinCube;
})();
//@ sourceMappingURL=WebGL_Object.js.map
