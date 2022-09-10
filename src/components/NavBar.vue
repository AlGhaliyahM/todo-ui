<template>
  <nav class="navbar navbar-expand navbar-dark">
    <div class="container-md">
      <a class="navbar-brand"
        ><RouterLink class="nav-link" to="/" style="font-weight: 600"
          >TODO</RouterLink
        ></a
      >
      <div class="navbar" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/signup"
              >Sign up</RouterLink
            >
          </li>
          <li>
            <RouterLink
              style="color: whitesmoke; font-weight: 600"
              class="nav-link"
              to="/Login"
              >Login</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />
</template>
