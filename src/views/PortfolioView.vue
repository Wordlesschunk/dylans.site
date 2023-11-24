<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";
import giga64Landing from "@/assets/image/giga64-landing-page.png"
import giga64NetworkLanding from "@/assets/image/giga64-network-landing-page.png"
import servershardsLanding from "@/assets/image/servershards-landing-page.png"
import rustWiperLanding from "@/assets/image/rustWiper-landing-page.png"
import adcLanding from "@/assets/image/ADC-dashboard-page.png"
</script>

<template>
  <section class="wrapper">
    <div class="main">
      <ul class="cards">

        <li class="cards_item">
          <PortfolioItem
              title="Vectis Planner"
              about="Vectis Planner is a specialized calendar app designed with shift workers in mind. Whether you're a nurse,
               retail employee, or part of any industry with irregular work hours, Vectis Planner makes managing your shifts,
                hours, and earnings a breeze."
              tech-stack="Symfony6, Docker & kubernetes, Javascript, Webpack"
              buttonLink="https://github.com/Wordlesschunk/Project-Media/tree/main/VectisPlanner"
              :imageSrc="vectisPlanner"
          />
        </li>

          <li class="cards_item">
              <PortfolioItem
                      title="Automated Deployment Checker"
                      about="A comprehensive system designed to support developers in preparing their work for deployment.
                       This powerful tool offers built-in checks that provide users with valuable feedback on necessary actions required to ensure successful deployment.
                        Additionally, the system assists in determining the optimal branching strategy, empowering developers to make informed decisions.
                         With the ability to generate a detailed deployment plan, stakeholders gain visibility into the production timeline,
                          fostering effective collaboration. Simplify the deployment process and enhance communication with this all-in-one system."
                      tech-stack="Symfony6, Docker, Jira/Bitbucket APIs, Javascript, Webpack"
                      buttonLink="https://github.com/Wordlesschunk/Project-Media/tree/main/Application-Deployment-Checker"
                      :imageSrc="adcLanding"
              />
          </li>

          <li class="cards_item">
          <PortfolioItem
              title="Rust Server Wiper"
              about="Introducing an advanced server management system tailored for Rust game server owners.
              This innovative system eliminates the manual process of resetting servers by automating the task.
              Leveraging the powerful Pterodactyl API, it streamlines server operations and ensures seamless performance.
               By automating resets, server owners can optimize gameplay experiences for their community without the hassle of manual intervention.
                With its user-friendly interface and reliable automation capabilities, this system empowers Rust server owners
                 to focus on enhancing gameplay while leaving server management tasks to the automation prowess of the Pterodactyl API."
              tech-stack="Symfony5, Javascript, Docker, APIs, Webpack"
              button-link="https://github.com/Wordlesschunk/Project-Media/tree/main/RustWiper"
              :imageSrc="rustWiperLanding"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="ServerShards Game Hosting"
              about="Servershards was a project that aimed to enhance the gaming experience by transforming our successful
               Minecraft game server hosting into a comprehensive platform.
                Through rebranding and expanding our offerings, Servershards became a preferred solution for gamers seeking
                 reliable hosting across multiple games, including Rust, Factorio, and Garry's Mod. With an upgraded platform,
                  Servershards provided gamers with a diverse range of server options, empowering them to create virtual worlds in their favorite games.
                   Supported by a robust infrastructure and user-friendly management tools!"
              tech-stack="Bare Metal Servers, Terraform, DNS, VRacks, VPS, Auto scaling, Linux, Windows Server"
              button-link="https://github.com/Wordlesschunk/Project-Media/tree/main/Servershards%20Game%20Hosting"
              :imageSrc="servershardsLanding"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Giga64 Server Hosting"
              about="This project was a leading hosting provider specializing in game servers for Minecraft.
              Hosting over 1500 servers at its peak, we enabled gamers to rent their own dedicated game servers for a monthly fee.
               With a custom backend setup and strategic integration with Multicraft and WHMCS, we delivered a seamless experience for server deployment,
                monitoring, and customer billing. Our reliable infrastructure and exceptional support ensured lag-free gameplay and customer satisfaction."
              tech-stack="Linux, WHMCS, Bare Metal Servers, VPS, VRacks, DNS"
              button-link="https://github.com/Wordlesschunk/Project-Media/tree/main/Giga64-Website"
              :imageSrc="giga64Landing"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Giga64 Gaming Network"
              about="Our project was a vibrant gaming community centered around Minecraft.
              With a diverse collection of servers, we provided an immersive environment for players to connect and collaborate.
               Boasting an impressive average of over 400 daily players, our community thrived with lively interactions."
              button-link="https://github.com/Wordlesschunk/Project-Media/blob/main/Giga64-Website/Screenshot%202023-04-10%20at%2019.44.50%20(3).png"
              tech-stack="Linux, VPS, bash scripting"
              :imageSrc="giga64NetworkLanding"
          />
        </li>
      </ul>

        <div class="mobile-view">
      <RouterLink to="/">
        <button>Back</button>
      </RouterLink>
        </div>


    </div>
  </section>
</template>

<style scoped>
.wrapper {
  background-color: #212121;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards_item {
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

@media screen and (max-width: 1000px) {
    .mobile-view {
        display: none;
    }
}
</style>