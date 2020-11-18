<template lang="pug">
main
  section.main-section
    .container.container--big
      .text-logo
        h2 slp shot, inc
        p Steve Lee Parsons
      .text-container
        h1
          span Specialist in
          |Vintage and modern guns, Luxury Mechanical Watches
        h4 FEDERAL AND COMMONWEALTH OF PENNSYLVANIA LICENSED TO SELL, BUY AND TRANSFER FIREARMS

  section.about-section
    h2 about us
    .container
      .text-container
        .logo
        .wrap
          h3 Welcome to Steve Lee ParsonS Shop
          p I have been a Firearms and Watch Collector since the age of 10 years. <br /> We have a Winchester Rifle that has been passed down through five generations of my Family. I have always been an avid target shooter, and, as a US Army Veteran, I have had many years of training in the safe handling of firearms.
          p I have watches that date back to the 1880’s.  I have always had a fascination with machines, and enjoy working on restoration of both watches and firearms. I have decided to turn my life’s interest into a new business venture.
          p This is why I went through the process of applying for both Federal and State Licenses to sell firearms.

  section.products-section
    .container
      .products-list
        .column
          img(
            src="/img/rifles.jpg"
            alt="Dealer in Rifles, Shotguns, Handguns")
          h5 Dealer in Rifles, Shotguns, Handguns
          p “Guns kill people like spoons made Rosie O’Donnell Fat”
        .column
          img(
            src="/img/training.jpg"
            alt="Qualified firearms training")
          h5 Qualified firearms training (Outdoor Firing Range)
        .column
          img(
            src="/img/watches.jpg"
            alt="Dealer in Luxury/Vintage  Mechanical Watches")
          h5 Dealer in Luxury/Vintage  Mechanical Watches
          p “The Watch is to Time as the Brain is to the Mind”
  footer.main-footer
    .container
      .column
        h6 Contact Us
        ul
          li Downingtown, Pennsylvania
          li
            |Tel.
            a(href="tel:610-613-3451") 610-613-3451
          li
            |E-mail.
            a(href="mailto:slparsons42@outlook.com") slparsons42@outlook.com
      .column
        h6 Hours of Operation
        ul
          li Monday - Saturday: 9am - 8pm
          li Sunday: 10am - 6pm
      .column
        .logo.logo--small
        p.copyright ©{{ year }} SLP SHOT INC. All rights reserved.
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss"></style>
