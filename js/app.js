const [...sections] = document.querySelectorAll('section');
const list = document.querySelector('#navbar__list');

for (let i = 1; i <= sections.length; i++)
{
  let item = document.createElement('li');
  item.textContent = 'section' + i;
  list.appendChild(item);
}

function scroll (event) {
  let secName = event.target.textContent;
  for (let section of sections) {
    let secId = section.getAttribute('id');
    if (secName == secId) {
      section.scrollIntoView({behavior: "smooth"});
    }
  }
}
list.addEventListener('click', scroll);

function active (event) {
  for (let section of sections) {
    let rect = section.getBoundingClientRect();
    //adding the class "active" for the section in viewport
    if (rect.top >= 0 && rect.top < 250) {
      sections.forEach((section) => {
        section.classList.remove('your-active-class');
      });
      section.classList.add('your-active-class');
      //adding the class "active" for the LI element connected to this section
      let items = document.querySelectorAll('li');
      for (let item of items) {
        let itemName = item.textContent;
        let sectId = section.getAttribute('id');
        if (itemName == sectId) {
          items.forEach((item) => {
            item.classList.remove('your-active-class');
          });
          item.classList.add('your-active-class');
        }
      }
    }
  }
}
document.addEventListener('scroll', active);
