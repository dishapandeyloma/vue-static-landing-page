<script lang="ts" setup>
import vision from '@/assets/imgs/aboutus/vision.png'
import approach from '@/assets/imgs/aboutus/approach.png'
</script>

<template>
  <section class="main-container">
    <div class="flex flex-col-reverse md:flex-row lg:flex-row lg:space-x-16 mt-40">
      <div class="w-full lg:w-1/3 rounded-16 py-10 px-4 bg-#F7F7F7 mt-10 lg:mt-0 md:mt-0">
        <div class="py-20">
          <div class="flex h-full -mt-4 px-10 h-150 relative">
            <SvgIcon name="timeline" class="w-40 h-40 absolute top-0 left-92 lg:left-103px" />
            <div class="w-1/3 pt-5 text-center">
              <h2 class="text-18 lg:text-24">2025</h2>
              <div class="text-18 text-#8399AE pt-35 text-end pr-16">May</div>
            </div>
            <div class="flex-1 mt-12">
              <div class="bg-#574012 w-2 h-full mt-10 relative">
                <div class="py-10 flex-1">
                  <div class="bg-#574012 w-16 h-2 mt-40 relative"></div>
                  <div class="text-14 mt-10 absolute top-25 min-w-180 mx-20 mt-10 leading-16 px-4">
                    Launch of upgraded online casino platform
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex h-full -mt-4 px-10 h-250 relative">
            <SvgIcon name="timeline" class="w-40 h-40 absolute top-0 left-92 lg:left-103px" />
            <div class="w-1/3 pt-5 text-center">
              <h2 class="text-18 lg:text-24">2024</h2>
              <div class="text-18 text-#8399AE pt-35 text-end pr-16">May</div>
              <div class="text-18 text-#8399AE pt-45 text-end pr-16">December</div>
              <div class="text-18 text-#8399AE pt-45 text-end pr-16">April</div>
            </div>
            <div class="flex-1 mt-12">
              <div class="bg-#574012 w-2 h-full mt-10 relative">
                <div class="py-10 flex-1">
                  <div class="bg-#574012 w-16 h-2 mt-40 relative"></div>
                  <div class="text-14 mt-10 absolute top-25 min-w-180 mx-20 leading-16 px-4">
                    Partnership network reached 100 companies
                  </div>
                </div>
                <div class="py-10 flex-1">
                  <div class="bg-#574012 w-16 h-2 mt-40 relative"></div>
                  <div class="text-14 mt-10 absolute top-95 min-w-180 mx-20 leading-16 px-4">
                    Rebranding
                  </div>
                </div>
                <div class="py-10 flex-1">
                  <div class="bg-#574012 w-16 h-2 mt-40 relative"></div>
                  <div class="text-14 mt-10 absolute top-155 min-w-180 mx-20 leading-16 px-4">
                    16 bln spins reached in 3 months
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 lg:p-10">
        <h2 class="text-18 lg:text-32 font-700 text-center lg:text-left md:text-left">
          About the Company
        </h2>
        <p
          class="text-#8399AE lg:text-#000 md:text-#000 text-14 lg:text-16 font-400 text-center lg:text-left md:text-left mt-10 leading-32"
        >
          TG Baowang is a white label casino provider company that will be located in the Cambodia.
          We will do everything within the laws of the Cambodia in course of running our business.We
          are in the Global Casinos and Online Gambling industry for the sole purpose of making
          profits.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-16 mt-20">
          <div class="flex-1 flex-col p-16 bg-#E4E4E4 rounded-16">
            <img :src="vision" class="w-60 h-60" alt="people" />
            <h2 class="text-14 lg:text-24 font-700 mt-10 capitalize">OUR VISION</h2>
            <p class="text-#000 text-14 font-400 lg:text-left md:text-left mt-10 leading-28">
              Our vision in gambling industry is to grow and nurture an online casino business which
              will not only compete favorably with other leading online casino businesses in
              Cambodia, become a major competitor to top gambling businesses in Asia. Our online
              casino business as the number one White Label Provider in the whole of Cambodia.
            </p>
          </div>
          <div class="flex-1 flex-col p-16 bg-#E4E4E4 rounded-16">
            <img :src="approach" class="w-60 h-60" alt="people" />
            <h2 class="text-14 lg:text-24 font-700 mt-10 capitalize">our approach</h2>
            <ul class="list-disc pl-10">
              <li class="text-#000 text-14 font-400 lg:text-left md:text-left mt-5 leading-28">
                To become the leading White label solution in Asia
              </li>
              <li class="text-#000 text-14 font-400 lg:text-left md:text-left mt-5 leading-28">
                To increase customer satisfaction rates
              </li>
              <li class="text-#000 text-14 font-400 lg:text-left md:text-left mt-5 leading-28">
                Offering the highest level of service quality and delivery
              </li>
              <li class="text-#000 text-14 font-400 lg:text-left md:text-left mt-5 leading-28">
                Our clients are our partnership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ContactUsBanner class="mt-40" />
  </section>
</template>

<style lang="scss" scoped></style>
