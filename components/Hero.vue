<template>
  <section class="w-full lg:truncate sm:truncate">
    <nuxt-img src="/hero-image.jpg" class="relative lg:-mt-16 animate__animated animate__fadeIn animate__slower" />
  </section>
</template>

<style scoped>
section{
    margin-bottom: 30px;
    height: 35rem;
}
@media only screen and (max-width: 748px){
  img{
    margin-bottom: 30px;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  section{
    height: 28rem;
  }
  
}
</style>
