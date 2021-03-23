$(function(){
    $("#delbtn").click(delitem)
    $("#load").click(function(){
        console.log("BTN CLICKED")
        loadRecipies();
    });
    
});
function loadRecipies(){
    $("#load").attr('disabled','true')
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success:function(response){
            // $("ul").empty()
            var tempul=document.createElement("ul");
            tempul.id='btn_disabled'
            // tempul.innerHTML='Recipies:'
            tempul.style.fontSize='20px'
            for (let index = 0; index < response.length; index++) {
                var templi = document.createElement("li");
                var tempdiv = document.createElement("div");
                var tempbtn = document.createElement('button')
                tempbtn.id='delbtn'
                tempbtn.className='btn btn-primary'
                tempbtn.innerHTML='Delete'
                tempbtn.onclick=delitem

                tempdiv.id='divbody'
                tempdiv.innerHTML='Delete'

                templi.id='recipies-li'
                templi.style.fontSize='20px'
                templi.className='pt-2'
                
                tempdiv.innerHTML=`<h4>${response[index].title}</h4><p>${response[index].body}</p>`;
                templi.append(tempdiv)
                templi.append(tempbtn)
                // templi.innerHTML=`${tempdiv.innerHTML}<button class='btn btn-primary' id='delbtn'>Delete</button>`
                tempul.append(templi)
            }
            $('#recipies').append(tempul);
            $("#delbtn").click(delitem)
        }
    })
}

function delitem() {
    console.log($("ul").length)
    if($("ul").length==0){
        
        $("#load").attr('disabled','false')
    }
    else{
    console.log("delete")
    $(this).parent().remove()
}
}