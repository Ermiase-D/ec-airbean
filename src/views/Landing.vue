<template>
  <div class="landing">
      <router-link to="/menu">
      <section>
       <div class="imgLeft"></div>
        <div class="w-100 text-center">
        <img class="airbeanImg"
          src="@/assets/graphics/airbean-landing.svg"
          alt="title" />
      </div>
     <div class="imgRight"></div>
     </section>
     </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.landing {
  background-color:rgb(14, 110, 78);
  width: 100%;
  height: 100%;
}
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.airbeanImg{
    width: 450px;
    height: 450px;
}
img {
  width: 100%;
  background-color: rgb(14, 110, 78);
   background-size: cover;
}

img[alt="title"] {
  align-items: center;
  justify-content: center;
  text-align: center;
}
.imgLeft {
  background-image: url("../assets/graphics/intro-graphic-left.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 1000px;
  width: 1000px;
}
.imgRight {
  background-image: url("../assets/graphics/intro-graphic-right.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 1000px;
  width: 1000px;
}
</style>