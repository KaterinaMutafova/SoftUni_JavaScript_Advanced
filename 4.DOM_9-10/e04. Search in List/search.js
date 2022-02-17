function search() {
   
   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'))
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      textOfTown = town.textContent.toLocaleLowerCase()
      if (userWord === "") {
         break;
      }
      if(textOfTown.includes(userWord.toLocaleLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${count} matches found`;


}
