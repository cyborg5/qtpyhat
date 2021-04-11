var IP_Address="http://192.168.1.110"; //IP address of Raspberry Pi
var PageTitle="QtPy Cable Remote Demo";
var Button= [//object containing all buttons
	[//object containing row 0
		[7,0xe0e0e01f,0, "V+",187],//Object containing button 1
		[5,0x37c906,0, "|&#9668;&#9668;",74],//jump back "J"
		[5,0x37291a,0, "&#9668;&#9668;",36],//rewind
		[5,0x37990c,0, "&#9658;",32],//play
		[5,0x36293a,0, "&#9658;&#9658;",35],//fast-forward
		[5,0x36113d,0, "1",49],
		[5,0x37111d,0, "2",50],
		[5,0x36912d,0, "3",51]
	],
	[//row 1
		[7,0xe0e0d02f,0, "V-",189],
		[5,0x36b129,0, "&#9658;&#9658;|",78],//live "N"
		[5,0x375914,0, "<span class='Red Big'>&#9679;</span>",82],//record "R"
		[5,0x374117,0, "||",80],
		[5,0x365934,0, "<span class='Big'>&#9632;</span>",83],//Stop
		[5,0x37910d,0, "4",52],
		[5,0x365135,0, "5",53],
		[5,0x375115,0, "6",54]
	],
	[//row 2
		[7,0xe0e0f00f,0, "Mute",81],
		[5,0x36c127,0, "<span class='Narrow'>Guide</span>",71],
		[5,0x37d904,0, "PgDn", 34],
		[5,0x36812f,0, "<span class='Big'>&#8657;</span>",38],//up arrow
		[5,0x36d924,0, "PgUp",33],
		[5,0x36d125,0, "7",55],
		[5,0x37d105,0, "8",56],
		[5,0x363139,0, "9",57]
	],
	[//row 3
		[5,0x377111,0, "Ch+",85],
		[5,0x366932,0, "Exit",88],
		[5,0x37810f,0, "<span class='Big'>&#8656;</span>", 37],//left arrow
		[5,0x366133,0, "OK",13],
		[5,0x364137,0, "<span class='Big'>&#8658;</span>",39],//right arrow
		[5,0x36213b,0, "Info",73],
		[5,0x373119,0, "0",48],
		[5,0x36b928,0, "Zm",90]
	],
	[//row 4
		[5,0x36f121,0, "Ch-",68],
		[5,0x36e123,0, "Prev",86],
		[5,0x373918,0, "Menu",77],
		[5,0x37a10b,0, "<span class=' Big'>&#8659;</span>",40],//down arrow
		[5,0x36c926,0, "List",76],
		[5,0x37e902,0, "A",65],
		[5,0x36193c,0, "B",66],
		[5,0x37191c,0, "C",67]
	],
	[//row 5
		[5,0x37b908,0, "PIP",84],
		[5,0x377910,0, "PIP<br>Move",220],
		[5,0x367930,0, "PIP<br>Swap",191],
		[5,0x37f900,0, "PIP-",188],
		[5,0x36e922,0, "PIP+",190],
		[5,0x37f101,0, "Fav",70],
		[5,0x37c107,0, "Cbl<br>Pwr",0],
		[7,0x0e0e040bf,0, "TV<br>Pwr",0]
	],
	[//row 6
		[5,0x0e163d,0, "Day-",219],
		[5,0x0fe603,0, "Day+",221],
		[7,0xe0e0807f,0, "Inp",75]
	]
/*
	[//row 
		[0,0x0,0, "",0],
		[0,0x0,0, "",0],
		[0,0x0,0, "",0],
		[0,0x0,0, "",0],
		[0,0x0,0, "",0]
	]
*/
]
