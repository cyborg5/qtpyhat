void setup() {
  Serial.begin(19200);
  Serial1.begin(19200);
  delay(2000);while(!Serial);//delay for Leonardo
  Serial.println("Echoing serial port");
}


void loop() {
  if (Serial1.available ()>0) {
    uint8_t C= Serial1.read();
    Serial.write(C);
  }
}
