from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='static')

# Serve index.html directly from the current directory (where the script is located)
@app.route('/')
def home():
    return send_from_directory(os.getcwd(), 'index.html')

# Serve images, styles, and scripts from respective folders
@app.route('/images/<path:filename>')
def serve_images(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'images'), filename)

@app.route('/styles/<path:filename>')
def serve_styles(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'styles'), filename)

@app.route('/scripts/<path:filename>')
def serve_scripts(filename):
    return send_from_directory(os.path.join(os.getcwd(), 'scripts'), filename)

if __name__ == '__main__':
    # Run Flask on port 8080
    app.run(host='0.0.0.0', port=8080)
