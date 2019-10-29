<template>
  <div id="showcase">
    <div class="showcase-content">
      <h2>Learn Web Development Here</h2>
      <router-link to="/about" class="btn btn-success btn-lg">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showcase"
};
</script>

<style>
#showcase {
  background: url("https://images.pexels.com/photos/417139/pexels-photo-417139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 60px);
  text-align: center;
}

.showcase-content h2 {
  color: white;
  font-size: 4rem;
  font-weight: bold;
}
</style>