const outputTag = document.querySelector("body")
const colorTags = document.querySelectorAll("div.colors div")
const aboutTag = document.querySelector("section.about p")
const navOneTag = document.querySelector("header nav a:first-child")
const navTwoTag = document.querySelector("header nav a:nth-child(2)")
const navThreeTag = document.querySelector("header nav a:last-child")
const linkTag = document.querySelector("section.about a:first-child")


colorTags.forEach(tag => {
  tag.addEventListener("click", function() {
   	outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    aboutTag.style.color = this.style.color
    navOneTag.style.color = this.style.color
    navTwoTag.style.color = this.style.color
    navThreeTag.style.color = this.style.color
    linkTag.style.color = this.style.color
    
    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })
    this.classList.add("selected")    
  })
})