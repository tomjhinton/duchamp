const THREE = require('three')

const scene = new THREE.Scene()

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

var STLLoader = require('three-stl-loader')(THREE)

var loader = new STLLoader()

scene.background = new THREE.Color( 0xff0000 )

let kingw
let queenw
let knightwr
let bishopwr
let rookwr
let knightwl
let bishopwl
let rookwl

let kingb
let queenb
let knightbr
let bishopbr
let rookbr
let knightbl
let bishopbl
let rookbl

let pawn

let pawnw1
let pawnw2
let pawnw3
let pawnw4
let pawnw5
let pawnw6
let pawnw7
let pawnw8

let pawns = [pawnw1, pawnw2, pawnw3, pawnw4, pawnw5, pawnw6, pawnw7, pawnw8]

var material = new THREE.MeshPhongMaterial( { color: 0xffffff, shininess: 10, specular: 0xffffff   } )

var material4 = new THREE.MeshPhongMaterial( { color: 0x000000, shininess: 100, specular: 0x000000   } )


loader.load('src/king.stl', function (geometry) {
  kingw = new THREE.Mesh(geometry, material)
  kingw.position.set( 0, 0, 0 )
  kingw.rotation.set( - Math.PI / 3, 0, 0 )
  kingw.scale.set( 2, 2, 2 )

  kingw.castShadow = true
  kingw.receiveShadow = true


  console.log(kingw)
  scene.add(kingw)
})

loader.load('src/queen.stl', function (geometry) {
  queenw = new THREE.Mesh(geometry, material)
  queenw.position.set( 75, 0, 0 )
  queenw.rotation.set( - Math.PI / 3, 0, 0 )
  queenw.scale.set( 2, 2, 2 )

  queenw.castShadow = true
  queenw.receiveShadow = true

  queenb = new THREE.Mesh(geometry, material4)
  queenb.position.set( 75, -300, 620 )
  queenb.rotation.set( - Math.PI / 3, 0, 0 )
  queenb.scale.set( 2, 2, 2 )

  queenb.castShadow = true
  queenb.receiveShadow = true


  console.log(queenw)
  scene.add(queenw, queenb)
})


loader.load('src/bishop.stl', function (geometry) {
  bishopwr = new THREE.Mesh(geometry, material)
  bishopwr.position.set( 150, 0, 0 )
  bishopwr.rotation.set( - Math.PI / 3, 0, 0 )
  bishopwr.scale.set( 2, 2, 2 )

  bishopwr.castShadow = true
  bishopwr.receiveShadow = true


  console.log(bishopwr)
  scene.add(bishopwr)
})

loader.load('src/bishop.stl', function (geometry) {
  bishopwl = new THREE.Mesh(geometry, material)
  bishopwl.position.set( -75, 0, 0 )
  bishopwl.rotation.set( - Math.PI / 3, 0, 0 )
  bishopwl.scale.set( 2, 2, 2 )

  bishopwl.castShadow = true
  bishopwl.receiveShadow = true


  console.log(bishopwl)
  scene.add(bishopwl)
})


loader.load('src/knight.stl', function (geometry) {
  knightwr = new THREE.Mesh(geometry, material)
  knightwr.position.set( 225, 0, 0 )
  knightwr.rotation.set( - Math.PI / 3, 0, 0 )
  knightwr.scale.set( 2, 2, 2 )

  knightwr.castShadow = true
  knightwr.receiveShadow = true


  console.log(knightwr)
  scene.add(knightwr)
})

loader.load('src/knight.stl', function (geometry) {
  knightwl = new THREE.Mesh(geometry, material)
  knightwl.position.set( -150, 0, 0 )
  knightwl.rotation.set( - Math.PI / 3, 0, 0 )
  knightwl.scale.set( 2, 2, 2 )

  knightwl.castShadow = true
  knightwl.receiveShadow = true


  console.log(knightwl)
  scene.add(knightwl)
})

loader.load('src/rook.stl', function (geometry) {
  rookwr = new THREE.Mesh(geometry, material)
  rookwr.position.set( 300, 0, 0 )
  rookwr.rotation.set( - Math.PI / 3, 0, 0 )
  rookwr.scale.set( 2, 2, 2 )

  rookwr.castShadow = true
  rookwr.receiveShadow = true


  console.log(rookwr)
  scene.add(rookwr)
})

loader.load('src/rook.stl', function (geometry) {
  rookwl = new THREE.Mesh(geometry, material)
  rookwl.position.set( -225, 0, 0 )
  rookwl.rotation.set( - Math.PI / 3, 0, 0 )
  rookwl.scale.set( 2, 2, 2 )

  rookwl.castShadow = true
  rookwl.receiveShadow = true


  console.log(rookwl)
  scene.add(rookwl)
})

let tile, tile1,  tile2, tile3, tile4, tile5,tile6,tile7,tile8

const tiles = [tile, tile1,  tile2, tile3, tile4, tile5,tile6,tile7,tile8]


for(let i=1;i<=8;i++){
  loader.load('src/pawn.stl', function (geometry) {
    pawns[i-1] = new THREE.Mesh(geometry, material)
    pawns[i-1].position.set( -340 +(85*i), -45, 40 )
    pawns[i-1].rotation.set( - Math.PI / 3, 0, 0 )
    pawns[i-1].scale.set( 2, 2, 2 )

    pawns[i-1].castShadow = true
    pawns[i-1].receiveShadow = true


    console.log(pawns[i-1])
    scene.add(pawns[i-1])
  })
}


var geometry2 = new THREE.BoxBufferGeometry( 85, 10, 85 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xffffff} )
var material3 = new THREE.MeshBasicMaterial( {color: 0x000000} )


for(let i=1;i<=64;i++){
  if(i%2===0 && i<=8){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2!==0 && i<=8){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2===0 && i<=16  && i>8){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2!==0 && i<=16  && i>8){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2===0 && i<=24  && i>16){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2!==0 && i<=24 && i>16){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2===0 && i<=32  && i>24){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2!==0 && i<=32 && i>24){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2===0 && i<=40  && i>32){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2!==0 && i<=40 && i>32){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2===0 && i<=48  && i>40){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2!==0 && i<=48 && i>40){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2===0 && i<=56  && i>48){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }

  if(i%2!==0 && i<=56 && i>48){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2===0 && i<=64  && i>56){
    tiles[i-1] = new THREE.Mesh( geometry2, material3 )
  }

  if(i%2!==0 && i<=64 && i>56){
    tiles[i-1] = new THREE.Mesh( geometry2, material2 )
  }















  if(i <=8){
    tiles[i-1].position.set( -315 +(85*i), 0, -60 )

  } else if(i <=16){
    tiles[i-1].position.set( -315 +(85*(i-8)), -50, 10 )
  } else if(i <=24 && i > 16){
    tiles[i-1].position.set( -315 +(85*(i-16)), -100, 80 )

  } else if(i <=32 && i > 24){
    tiles[i-1].position.set( -315 +(85*(i-24)), -150, 150 )

  }else if(i <=40 && i > 32){
    tiles[i-1].position.set( -315 +(85*(i-32)), -200, 220 )

  } else if(i <=48 && i > 40){
    tiles[i-1].position.set( -315 +(85*(i-40)), -250, 290 )

  }  else if(i <=56 && i > 48){
    tiles[i-1].position.set( -315 +(85*(i-48)), -300, 360 )

  } else if(i <=64 && i > 56){
    tiles[i-1].position.set( -315 +(85*(i-56)), -350, 430 )

  }

  tiles[i-1].rotation.set( 10, 0, 0 )


  tiles[i-1].castShadow = true
  tiles[i-1].receiveShadow = true


  console.log(tiles[i-1])
  scene.add(tiles[i-1])

}




var light = new THREE.DirectionalLight( 0xffffff , 5)
light.position.set( 0, 50, 1 )
light.castShadow = true
scene.add(light)


var light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light2 );



var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.4, 2000 )

var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )


camera.position.z = 1050
camera.position.y = 250



var animate = function () {
  requestAnimationFrame( animate )






  scene.rotation.y -= 0.01











  renderer.render( scene, camera )
}

animate()
