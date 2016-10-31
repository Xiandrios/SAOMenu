var app = angular.module('saoMenu', []);
app.controller('mainMenu', function($scope) {
  $scope.menuItems = [
		{id: "accountWrapper",title: "Account",ico: "fa-user",cssException:'0'},
		{id: "friendsWrapper",title: "Group & Friends",ico: "fa-users",cssException:'0'},
		{id: "notificationWrapper",title: "Message",ico: "fa-comment",cssException:'1'},
		{id: "questWrapper",title: "Notification",ico: "fa-map-marker",cssException:'0'},
		{id: "settingWrapper",title: "Settings",ico: "fa-cog",cssException:'0'}
	];
})
.controller('subMenu', function($scope){
  $scope.subMenuItems = [
    {
      id: "accountWrapperSub",
      items:[
        {id:'accWrapProfile',name:'Character'},
        {id:'accWrapSkill',name:'Skills'},
        {id:'accWrapEquipment',name:'Equipment'},
        {id:'accWrapItems',name:'Items'}
      ]
    },
    {
      id: "friendsWrapperSub",
      items:[
        {id:'frdWrapFriends',name:'Friends'},
        {id:'frdWrapGuild',name:'Clan'}
      ]
    },
    {
      id: "notificationWrapperSub",
      items:[
        {id:'ntfWrapMsg',name:'Inbox / Messages'},
        {id:'ntfWrapClanMsg',name:'Clan Messages'},
        {id:'ntfWrapGlobal',name:'Global Notification'}
      ]
    },
    {
      id: "questWrapperSub",
      items:[
        {id:'qstWrapMain',name:'Main Quest'},
        {id:'qstWrapSide',name:'Side Quest'}
      ]
    },
    {
      id: "settingWrapperSub",
      items:[
        {id:'settingWrapAccount',name:'Account'},
        {id:'settingWrapPref',name:'Preference'},
        {id:'settingWrapPrivacy',name:'Privacy'}
      ]
    },
  ];
});
