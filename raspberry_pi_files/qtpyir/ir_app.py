from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)
import serial
port = serial.Serial("/dev/ttyAMA0", baudrate=19200, timeout=3.0)
from markupsafe import escape

# Redirect to the remote page
@app.route("/")
def index():
   return redirect(url_for('remote'))

# Display the remote page
@app.route("/remote", methods=['GET'])
def remote():
   templateData = {
     'title' : 'QtPy IR'
     }
   return render_template('index.html', **templateData)

# Handle the REST call
@app.route("/rest/<path:subpath>", methods=['GET'])
def rest(subpath):
   port.write(bytearray(subpath + "\r\n", 'utf-8'))
   return '{restdata: \'%s\'}' % escape(subpath)

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True)
