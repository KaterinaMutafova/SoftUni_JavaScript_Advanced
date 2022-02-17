function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let rowElement = Array.from(document.querySelectorAll('tbody tr'));
      let searchText = document.getElementById('searchField').value;

      for (let el of rowElement) {
         el.removeAttribute('class', 'select');
      }

      for (let el of rowElement) {
         textEl = el.textContent.toLocaleLowerCase();
         if (searchText == ""){
            el.removeAttribute('class', 'select');
         } else if (textEl.includes(searchText.toLocaleLowerCase())) {
            el.setAttribute('class', 'select');
         } else {
            el.removeAttribute('class', 'select');
         }
         
      }
      


   }

}