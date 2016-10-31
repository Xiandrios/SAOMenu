/* Main elements and functions*/
var mainMenu = '';
var subMenu = '';
$(document).ready(function(){
  $('#menuWrapper').width($('.menuItems').width());
  $('.arrow-left').css('margin-top',(($('.menuItems').height()+12) / 2) +'px');
});

$(window).mousedown(function(event) {
  if(event.which == '2')
    toggleMenu();
});

/* Main menu functions */
function toggleMenu(){
  if($('#menuWrapper').css('display') == 'none')
    $('#menuWrapper').css('display','inline-block');
  else
    $('#menuWrapper').css('display','none');
}

function selectMenuItem(id){
  var subMenus = document.getElementsByClassName('menuItems');
  for(var i in subMenus){
    unselectMenuItem(subMenus[i].id);
  }

  $('div#'+id).css('background-color','#FFCC00');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('background-color','#FFCC00');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('color','#FFF');
  $('#'+id+'Sub').css('display','inline-block');

  $('.sideArrowWrapper').css('display','inline-block');

  var offsets = $('div#'+id).offset();
  var top = offsets.top;
  var left = offsets.left;

  $('.sideArrowWrapper').css('left',left + 70);
  $('.sideArrowWrapper').css('top',top - 15);
}

function unselectMenuItem(id){
  $('div#'+id).css('background-color','#F2F2F2');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('background-color','#F2F2F2');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('color','#B8B8B8');
  $('#'+id+'Sub').css('display','none');

  $('.sideArrowWrapper').css('display','none');
}

/* Sub menu Functions */
function subMenuItemsMouseOver(id){
  $('#'+id).css('background-color','#FFCC00');
  $('#'+id+' > div.subMenuCircle').css('background-color','#FFF');
  $('#'+id).css('color','#FFF');
  $('#'+id+' > div.subMenuCircle').css('color','#FFCC00');
}
function subMenuItemsMouseOut(id){
  $('#'+id).css('background-color','#F2F2F2');
  $('#'+id+' > div.subMenuCircle').css('background-color','#a6a6a6');
  $('#'+id).css('color','#a6a6a6');
  $('#'+id+' > div.subMenuCircle').css('color','#F2F2F2');
}
