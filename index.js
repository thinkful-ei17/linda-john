// function cat(){
//     $('.thumbnail').on('click', function(event) {
//        const imgSrc = $(this).find('img').attr('src');  
//        const imgAlt = $(this).find('img').attr('alt');
//        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
      
//     });
//   }
  
//   $(cat());


function addItem(){

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    
    let newItem = $('.js-shopping-list-entry').val();
    console.log(newItem);
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
           <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
       </li>`
    );
  })
}

addItem();