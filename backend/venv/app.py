from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
# Permitir solicitudes desde el frontend
CORS(app)  

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hola desde Flask!"})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
