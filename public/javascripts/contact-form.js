/*===============
  CONTACT FORM JS
  
  filename: contact-form.js
  author: Son Roy Almerol
  author id: 301220547
  date: May 20, 2022

  =============== */

const processContactForm = (e) => {
  if ('preventDefault' in e) e.preventDefault()
  
  const formData = new FormData(document.getElementById('contact-form'))
  var object = {}
  formData.forEach((value, key) => object[key] = value)

  window.alert(JSON.stringify(object))

  return false
}

const contactForm = document.getElementById('contact-form')
if ('attachEvent' in contactForm) {
  contactForm.attachEvent('submit', processContactForm)
} else {
  contactForm.addEventListener('submit', processContactForm)
}