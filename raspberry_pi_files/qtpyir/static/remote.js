//handles to various parts of the screen. Initialized in myInitialize()
var RemoteMessage, RemoteTable, KeyMessage;
var DisplaySymbols;
var HotKeys= [];

function copy_properties (d,s) {for(x in s)d[x]=s[x];}

function myInitialize() {
	window.resizeTo(550,800);
	window.moveTo(0, 0)

	RemoteMessage=document.getElementById ("RemoteMessage");
	RemoteTable=document.getElementById("RemoteTable");
	KeyMessage=document.getElementById("KeyMessage");
	CommandQueue=document.getElementById("CommandQueue");
	document.onkeydown= function(e){KeyHandler(e);};
	SetupHotKeys ();
	DisplaySymbols= false;
	ShowRemote ();
	var PageTitleLoc=document.getElementById("PageTitle");
	PageTitleLoc.innerHTML=PageTitle;
}
     
function KeyHandler (e) {
var x,r,c,s;
    e = e || window.event;
	if(e.which) x=e.which; else x=e.keyCode;
	if(x==27) {DisplaySymbols=!DisplaySymbols;ShowRemote(); return;}
	s = TranslateSpecial(x);
	var t="You pressed '"+s+"' ("+x+")";
	if(HotKeys[x][0]>=0)
		SendButton(t
			//+" which corresponds to"
			,HotKeys[x][0],HotKeys[x][1]);
	 else
		KeyMessage.innerHTML=t;
		//RemoteMessage.innerHTML= "";
	RemoteMessage.innerText= "Keypress handled"; 
}

function TranslateSpecial(x) {
	switch(x) {
		case 187:s="+"; break; case 189:s="-"; break;
		case 36:s="HOME"; break; case 35:s="END"; break;
		case 38:s="UPAR"; break; case 40:s="DNAR"; break;
		case 37:s="LFAR"; break; case 39:s="RTAR"; break;
		case 33:s="PGUP"; break; case 34:s="PGDN"; break;
		case 13:s="ENTER"; break; case 32:s="SPACE"; break;
		case 219:s="["; break; case 221:s="]"; break;
		case 188:s=","; break; case 190:s="."; break;
		case 191:s="/"; break; case 120:s="|"; break;
		case 20:s="ESC"; break; case 220:s="\\"; break;
		default:s= String.fromCharCode(x);
	}
	return s;
}
function SetupHotKeys () {
	for(var k=0;k<256;k++) HotKeys[k]=[-1,-1];
}
function ShowRemote () {
	var r,c;
	RemoteTable.innerHTML= "";
	for(r=0;r< Button.length;r++) {
		var TR= document.createElement ("tr");
		var TD= "";
		for(var c=0;c<Button[r].length;c++) {
			TD=TD+"<td class='MyButtons' onclick='DoButton("+r+","+c+")'>"+
				(DisplaySymbols?TranslateSpecial(Button[r][c][4]):Button[r][c][3])
				+"</td>";
			if(Button[r][c][4]>0) HotKeys[Button[r][c][4]]=[r,c];
		}
		TR.innerHTML =TD;
		RemoteTable.appendChild(TR);
	}
}
function DoButton (r,c) {
	SendButton("You clicked",r,c);
}
function DoRest(url,cb) {
	var Response;
	var Request = new XMLHttpRequest();
	Request.onreadystatechange = function() {
		if(Request.readyState == 4) {
			Response= Request.responseText;
			cb(Response);
		}
	}
	Request.open("GET", url, true);
	Request.send();
}
function SendButton (t,r,c) {
	var B= Button[r][c];
	KeyMessage.innerHTML=t+" button("+r+","+c+")";
	if(B[0]==0) return;
	RemoteMessage.innerText= "Attempting sending..."; 
	
	DoRest(IP_Address+"/rest/"+B[0]+"/"+B[1]+"/"+B[2]+"/",
		function (Response) {
                        //console.log(Response);
			//RemoteMessage.innerText=JSON.stringify(Response);
			RemoteMessage.innerText=Response;
		}
	)
}
