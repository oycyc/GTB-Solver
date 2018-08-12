var count = document.getElementById("count")
var input = document.getElementById("input")

input.addEventListener("input", function(e){
  count.innerHTML = e.target.value.length
})