const scene = spaceDocument.scene as BABYLON.Scene;

const texUrl = 'https://ar.rokidcdn.com/web-assets/pages/jsar/textures/poker.jpeg';
const plane = BABYLON.MeshBuilder.CreatePlane('plane', {
  height: 1,
  width: 0.665,
  sideOrientation: BABYLON.Mesh.DOUBLESIDE,
  frontUVs: new BABYLON.Vector4(0.5, 0, 1, 1),
  backUVs: new BABYLON.Vector4(0, 0, 0.5, 1)
}, scene);

const mat = new BABYLON.StandardMaterial('', scene);
mat.diffuseTexture = new BABYLON.Texture(texUrl, scene);
plane.material = mat;

BABYLON.MeshBuilder.CreateTorusKnot('tk', {
  tube: 0.01,
  radialSegments: 1024,
  p: 120,
  q: 180
});
