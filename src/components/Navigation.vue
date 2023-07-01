<template>
  <nav class="navigation">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  padding: 10px;
}

.logo img {
  margin-left: 10px;
  margin-top: 5px;
  height: 40px;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-left: 42px;
  margin-right: 32px;
}


.links a {
  margin-right: 42px;
  color: white;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 2px;
}
</style>
