<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Hero from "./Hero.vue";
import { onMounted } from "vue";
import homeObserver  from "@/assets/js/homeObserver.js";
onMounted(() => {
  homeObserver()
  });
</script>
<template>
  <div>
    <Header />
    <Hero />
    <div>
      <div class="separator" id="one">
        <div class="line"></div>
      </div>
      <div
        class="container max-w-screen-xl px-4 pt-8 py-10 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
      >
        <p
          class="text-center md:text-3xl text-lg font-semibold opacity-0 animate__animated animate__slower"
        >
          WELCOME TO OFFICE LADIES!
        </p>
        <p
          class="text-center md:text-lg text-md text-gray-600 mt-6 opacity-0 animate__animated animate__slower animated__delay_2s"
        >
          <em class="font-bold"><i>The Office</i></em> co-stars and best
          friends, Jenna Fischer and Angela Kinsey, are doing the ultimate
          <em class="font-bold"> <i> The Office</i> </em> re-watch podcast for
          you. Each week, Jenna and Angela will break down an episode of
          <em class="font-bold"> <i> The Office </i></em> and give exclusive
          behind-the-scene stories that only two people who were there, can tell
          you.
        </p>
        <div class="separator opacity-0 animate__animated animate__slower animated__delay_2s">
          <div class="line"></div>
        </div>
        <p class="md:text-2xl text-xl mb-6 text-center md:text-start opacity-0 animate__animated animate__slower animated__delay_2s">
          LISTEN TO THE LATEST EPISODE
        </p>
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/episode/3xFPmXh2oh3OX1V22QhSB5?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="opacity-0 animate__animated animate__slower animated__delay_2s"
        ></iframe>
        <div class="separator opacity-0 animate__animated animate__slower animated__delay_2s">
          <div class="line"></div>
        </div>
        <p
          class="text-center text-red-500 text-lg font-semibold tracking-widest opacity-0 animate__animated animate__slower animated__delay_2s"
        >
          HAVE A QUESTION FOR AN UPCOMING EPISODE?
          <span
            ><a
              class="hover:underline underline-offset-2"
              href="https://officeladies.com/submitaquestion"
            >
              SUBMIT IT HERE!
            </a></span
          >
        </p>
        <div class="separator opacity-0 animate__animated animate__slower animated__delay_2s">
          <div class="line"></div>
        </div>
        <div class="opacity-0 animate__animated animate__slower animated__delay_2s">
          <p class="text-2xl mb-6 tracking-widest">PREVIOUS EPISODES</p>
          <div class="grid gap-4 lg:grid-cols-3 lg:grid-rows-1">
            <iframe
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/episode/6skrimTe7QNj1F3ELtxfwu?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/episode/4JMMSQdtMEE34rzv03hJJh?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style="border-radius: 12px"
              src="https://open.spotify.com/embed/episode/6Br8T9C2EqBwptIjO44RPK?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div class="flex justify-center my-14">
            <div class="opacity-0 animate__animated animate__slower animated__delay_2s">
              <a href="https://open.spotify.com/show/3OHCFs84lqizjkL4C9bNTA" target="_blank"
                class="leading-normal rounded border border-red-800 tracking-widest bg-red-600 mt-8 px-10 py-5 text-sm font-semibold text-white text-lg hover:bg-transparent hover:text-red-600 hover:font-semibold"
              >LISTEN TO MORE EPISODES
              </a>
            </div>
          </div>
          <div class="separator">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.separator {
  display: flex;
  align-items: center;
  margin: 2em auto;
  max-width: 1100px;
}

.separator .line {
  height: 1px;
  flex: 1;
  background-color: #bbb;
}
</style>
