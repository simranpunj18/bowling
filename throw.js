AFRAME.registerComponent("bowling-balls",{
  init: function(){
      this.shootBullet()
  },
  shootBullet: function(){
      window.addEventListener("keydown",(e)=>{
          if(e.key == "e"){
              console.log("bullets")
          var bullet = document.createElement("a-entity")
          bullet.setAttribute("geometry",{
              primitive: "sphere",
              radius: .2
          })
          var cam = document.querySelector("#camera")
          postition = cam.getAttribute("position")
          console.log(postition)
          bullet.setAttribute("position",{
              x: postition.x,
              y: postition.y,
              z: postition.z
          })
          var camera = document.querySelector("#camera").object3D;
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          bullet.setAttribute("velocity",direction.multiplyScalar(-10))
          var scene = document.querySelector("#scene")
          scene.appendChild(bullet)
          console.log(bullet)
      }
      })
  }
})