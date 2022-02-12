const car_buttons = document.getElementsByName("car-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")


function change_car(car) {
  text.innerHTML = "Land Rover was the correct answer! Here's a photo of a " + car + "."
  photo.src = "../images/" + car + ".jpg"
}

car_buttons.forEach(button => {
  button.addEventListener("change", event => {
    change_car(button.value)
  })
})