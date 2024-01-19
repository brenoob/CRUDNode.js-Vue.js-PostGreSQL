<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>    
      <nav class="navbar mt-1 bg-light">
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" /> -->
        <div class="container">
          <ul type="none">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/edit-employee">edit employees here</RouterLink>
            </li>
            <li>
              <RouterLink to="/list-employee">list employees here</RouterLink>
            </li>
          </ul>

        </div>
      </nav>
  </header>
  
  <RouterView />
</template>

<style scoped>
ul{
  display: flex;
}

nav {
  border-radius: 0.5rem;
}
nav a {
  /* display: flex; */
  margin-left: 2rem;
  text-decoration: none;
  /* padding: 0 1rem; */
  border-radius: 0.2rem;
  /* background: #000; */
  /* border-left: 1px solid var(--color-border); */
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: end;
  flex-flow: row wrap;
  margin-top: 2rem;
}



nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    flex-flow: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
