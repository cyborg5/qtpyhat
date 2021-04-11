var IP_Address="http://192.168.1.135"; //IP address of Raspberry Pi
var PageTitle="QtPy Office Remote";
var Button= [//object containing all buttons
	[//object containing row 0
		[7,0xe0e0e01f,0, "V+",187],//Object containing button 1
		[7,0xe0e0d02f,0, "V-",189],
		[7,0xe0e0f00f,0, "Mute",81],
		[7,0xe0e0a45b,0, "CC",67],
		[7,0xe0e0807f,0, "Input",73],
		[7,0x0e0e040bf,0, "TV<br>Pwr",80],
		[999,0x0,0, "RESET",82]
	],
	[//row 
		[1,0xf00ff00f,0, "NEC",49],
		[2,0x1234abcd,15, "Sony",50],
		[3,0x1234abcd,13, "Rc5",51],
		[4,0x1234abcd,0, "Rc6",52],
		[5,0x1234abcd,0, "SA",53],
		[6,0x1234abcd,1, "JVC",54],
		[7,0x1234abcd,0, "NECx",55],
	],
	[//row 
		[8,0x1234abcd,1234, "Sam36",56],
		[9,0xd802,0, "GIc",57],
		[10,0x1234abcd,0, "DirecTV",65],
		[11,0x1234abcd,0, "RCMM",66],
		[9,0xffffffff,0, "Gdit",67]
	],
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
