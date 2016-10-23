$(document).ready(function(){
  getItems()
})

$("#input-submit").click(function(){
  $.ajax({
    url:'http://localhost:3000/API/tweet/',
    type: 'POST',
    data: {username: 'ari', tweet: $("#tweet-box").val(),hashtag: $("#tweet-ht").val()},
    success: function(result){
      getItems()
    }
  })
})

function getItems() {
  $.ajax({
    url: 'http://localhost:3000/API/tweet/',
    type: "GET",
    dataType: 'json',
    success: function(result){
      let component = ''
      let hashtag  =[]
      for(let i in result){
        component+= `
        <div class="row">
          <div class="col-sm-6">
            <a class="thumbnail" data-toggle="modal" data-target="#modal-app">
              <div class="viewer">
                <ul class="note">

                </ul>
              </div>
              <div class="caption">
                <h4 class="title">${result[i].tweet}</h4>
                  <p class="description">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    Username: ${result[i].username} <br>
                    Hashtag : ${result[i].hashtag}
                  </p>
                </div>
              </a>
          </div>`
        hashtag.push(result[i].hashtag)
      }
      $("#tweet-result").html('<br>'+component)
      var  count = {};
      var result
      hashtag.forEach(function(i) { count[i] = (count[i]||0)+1;  });

      let hashtaghtml = ``
      hashtaghtml+=
      `<div class="row">
        <div class="col-sm-6">
          <a class="thumbnail" data-toggle="modal" data-target="#modal-app">
            <center><h3>Hashtag terfavorit</h3>
          `
      for (var property in count){
        hashtaghtml+=`${property} : ${count[property]}<br>`
      }
      hashtaghtml+=
        `</center></a></div>
      </div>`
      $("#hashtag").html('<br>'+hashtaghtml)
    }
  })
}
