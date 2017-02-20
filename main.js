/* Main elements and functions*/
var mainMenu = '';
var subMenu = '';
$(document).ready(function(){
  $('#menuWrapper').hide();
  $('#menuWrapper').width($('.menuItems').width());
});

$(window).mousedown(function(event) {
  if(event.which == '2'){
    //for(var i in event)
      //alert(i + ' => ' + event[i]);
    if($('#menuWrapper').css('display') == 'none'){
      var wWidth = $(window).width();
      var wHeight = $(window).height();
      var y = event['pageY'] - 50; //offsetY
      var x = event['pageX'] - 35;

      if((wHeight - y) < 435)
        y = y - (435 - (wHeight - y)) - 15;
      if((wWidth - x) < 70)
        x = x - (70 - (wWidth - x)) - 15;

      $('#menuWrapper').css('top',y + 'px');
      $('#menuWrapper').css('left',x + 'px');
    }
    toggleMenu();
  }
});

/* Main menu functions */
function toggleMenu(){
  $('#menuWrapper').slideToggle(200);
  if($('#menuWrapper').css('display') != 'none'){
    $('#sideMenuWrapper').css('display','none');
    unselectMenuItem();
  }
}

function selectMenuItem(id){
  unselectMenuItem();

  $('div#'+id).css('background-color','#FFCC00');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('background-color','#FFCC00');
  $('div#'+id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('color','#FFF');
  $('#'+id+'Sub').css('display','inline-block');

  $('.sideArrowWrapper').css('display','inline-block');

  var offsets = $('div#'+id).offset();
  var top = offsets.top;
  var left = offsets.left;
  var wWidth = $(window).width();
  var wHeight = $(window).height();
  var arrowMargin = (($('.menuItems').height()+12) / 2);
  var gradiantMargin = 2;
  var float = 'none';
  var arrowClass = 'left';
  var marginRight = 0;

  if((wWidth - left) < $('#'+id+'Sub').width()){
    left = left - ($('#'+id+'Sub').width() + 110);
    float = 'right';
    arrowClass = 'right';
    marginRight = 6;
  }
  if((wHeight - top) < $('#'+id+'Sub').height()){
    top = top - ($('#'+id+'Sub').height() - (wHeight - top));
    arrowMargin = ($('#'+id+'Sub').height() - 45);
    gradiantMargin = $('#'+id+'Sub').height() - ($('.arrowSubMenuBorderWrapper').height() + 35);
  }
  $('#arrow').attr('class','arrow-' + arrowClass)
  $('#arrow').css('margin-top',arrowMargin + 'px');
  $('#arrow').css('float',float);
  $('.arrowSubMenuBorderWrapper').css('margin-top',gradiantMargin + 'px');
  $('.arrowSubMenuBorderWrapper').css('float',float);
  $('.sideArrowWrapper').css('left',left + 70);
  $('.subMenuWrapper').css('margin-right',marginRight + 'px');
  $('.sideArrowWrapper').css('top',top - 15);
}

function unselectMenuItem(){
  var subMenus = document.getElementsByClassName('menuItems');
  for(var i in subMenus){
    $('div#'+subMenus[i].id).css('background-color','#F2F2F2');
    $('div#'+subMenus[i].id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('background-color','#F2F2F2');
    $('div#'+subMenus[i].id+' > div.menuItemsDarkCircle > div.menuItemsCenter').css('color','#B8B8B8');
    $('#'+subMenus[i].id+'Sub').css('display','none');
  }

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
