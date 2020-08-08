//document.querySelector('#container').style.backgroundColor = "black"
//console.log()

// Find the button
document.querySelector("#add-time")
// When you click the button
  .addEventListener("click", cloneField)
// Perform an action
function cloneField() {
    // Duplicate the fields. What fields?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) 
    // Clear the fields. What fields?
    const fields = newFieldContainer.querySelectorAll("input")
    // For each field, clear.
    fields.forEach(function (field) {
        // Take the document field and clear it
        field.value = ""
  })
// Place on the page. Where?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}