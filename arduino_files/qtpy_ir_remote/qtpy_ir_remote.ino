/*
 * QtPy IR Hat Remote Control
 * 
 * by Chris Young
 * 
 * Public domain open source
 */
#define DO_DEBUG false
#include <IRLibAll.h>
IRsend MySender;  //

void setup() {
  Serial1.begin(19200);
#if (DO_DEBUG)
  Serial.begin(19200);
  Serial.println("Echoing data from RPi UART");
#endif
}

//For some reason Serial1.parseInt() was too slow.
//Have to read the entire string and then parse it ourselves.
//Data consists of 3 decimal values in a string of text
//like this "1/1234567/8/"
uint8_t Index;
char Buff[20];
uint32_t parseInt(void){
  uint32_t Value=0;
  //reads digits until it finds a non-digit
  while((Buff[Index]>='0') && (Buff[Index]<='9')
    && (Index<20)) {
    Value= Value*10 + (Buff[Index]-'0');
    Index++;
  }
  Index++;//skip the non-digit character
  return Value;
}

void loop() {
  if (Serial1.available ()>0) {
    Index=0;
    uint8_t N=Serial1.readBytesUntil(10,Buff, 20);
    Buff[N]=0;
#if (DO_DEBUG)
    //Serial.println(Buff);
#endif
    //Protocol number as defined by IRLib2
    uint8_t protocol = parseInt();
    //32-bit code to transmit
    uint32_t code = parseInt();
    //This third parameter is sometimes unused and will be zero
    //Sometimes it represents the number of bits of the protocol
    //Protocols such as Samsung36 use it as a 16-bit address
    uint16_t bits = parseInt();
    //Flush out any excess characters
    while(Serial1.available()) {Serial1.read();};
    if(protocol) {  //just in case things get out of sync, ignore bad protocols
      #if (DO_DEBUG)
        Serial.printf("Protocol:%d  Code:%#x  Bits:%d\n", protocol, code, bits);
      #endif
      MySender.send(protocol, code, bits);
    }
  }
}
