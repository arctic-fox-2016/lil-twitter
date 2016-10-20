let getLatestRiver = function(){
  $.ajax({
    url:"http://localhost:3000/api/tweets",
    method:'GET',
    success: function(result){
      let river = ""

      for (let i in result){
        let date = new Date(result[i].createdAt);
        let hashtag = ""
        for(let j in result[i].hashtag){
          hashtag = hashtag + "#" +result[i].hashtag[j] + " "
        }
        river = river +
        `<div class="row component">
        <div class="col-lg-2">
        <img src="${result[i].avatar}" width=100% height=75px>
        </div>
        <div class="col-lg-10">
        <span class="username">Username: ${result[i].username}</span><span class="createdAt">${date}</span><br>
        <span class="content">Content: ${result[i].content}</span><br>
        <span class="hashtag">HashTag: ${hashtag}</span>
        </div>
        </div>`
      }
      $("#tweeets-feed").html(river)
    }
  })
}

let searchRiver = function(query){
  $.ajax({
    url:`http://localhost:3000/api/tweets/${query}`,
    method:'GET',
    success: function(result){
      let river = `<span class="little-heading">Your Search Result</span><br>`

      for (let i in result){
        let date = new Date(result[i].createdAt);
        let hashtag = ""
        for(let j in result[i].hashtag){
          hashtag = hashtag + "#" +result[i].hashtag[j] + " "
        }
        river = river +
        `<div class="row component">
        <div class="col-lg-2">
        <img src="${result[i].avatar}" width=100% height=75px>
        </div>
        <div class="col-lg-10">
        <span class="username">Username: ${result[i].username}</span><span class="createdAt">${date}</span><br>
        <span class="content">Content: ${result[i].content}</span><br>
        <span class="hashtag">HashTag: ${hashtag}</span>
        </div>
        </div>`
      }
      console.log("river",river)
      $("#search-result").html(river)
    }
  })
}

$(document).ready(function(){
  console.log('ready')
  $("#new-tweet").hide()
  $("#search").hide()
  getLatestRiver()

  //Submit Content, only if Username and Avatar has been submitted
  $("#submit-content").click(function(){
    let username=$("#profile-username").html()
    let avatar=$("#profile-avatar").attr("src")
    let content=$("#input-content").val()
    let hashtag=$("#input-hashtag").val()

    $.ajax({
      url:'http://localhost:3000/api/tweets',
      type:'POST',
      data: {username: username, avatar: avatar, content: content, hashtag: hashtag},
      success: function(result){
        $("#input-content").val("")
        $("#input-hashtag").val("")
        getLatestRiver()
      }
    })
  })

  $("#change-username-avatar").click(function(){
    console.log('masuk sini')
    $("#profile-input").show()
    $("#username-avatar").html("")
  })

  //Submit Username and Avatar
  $("#submit-username-avatar").click(function(){
    let username = $("#input-username").val()
    let avatarURL = $("#input-avatarURL").val()
    let profile = `<div class="component">
    <span class="little-heading" id="profile-username">${username}</span>
    </div>
    <div class="component">
    <img id="profile-avatar" src="${avatarURL}" height=150px width=100%>
    </div>`
    $("#username-avatar").html(profile)
    $("#profile-input").hide()
    $("#message").html("")
  })



  //New Tweet
  $("#menu-new-tweet").click(function(){
    $("#search-result").html("")
    $("#feed").show()
    if($("#profile-username").html()){
      $("#new-tweet").show()
      $("#search").hide()
    } else {
      $("#message").html(`<div class="alert alert-danger" role="alert">
  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  <span class="sr-only">Error:</span>
  Submit Username and Avatar before Tweeting
</div>`)
    }
  })
  $("#hide-new-tweet").click(function(){
    $("#new-tweet").hide()
  })

  //Search
  $("#menu-search").click(function(){
    $("#search").show()
    $("#new-tweet").hide()
    $("#feed").hide()
  })
  $("#hide-search").click(function(){
    $("#search").hide()
    $("#feed").show()
  })

  //Refresh River
  $("#menu-refresh-tweeets").click(function(){
    $("#feed").show()
    getLatestRiver()
    $("#search-result").html("")
  })

  //Search
  $("#search-box").keyup(function(){
    if($("#search-box").val().length >2){
      searchRiver($("#search-box").val())
    } else {
      $("#search-result").html("")
    }
  })
})