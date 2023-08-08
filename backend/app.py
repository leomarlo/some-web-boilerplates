from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/button-endpoint', methods=['POST'])
def button_endpoint():
    return jsonify(message="Button was pressed!")

@app.route('/test', methods=['GET'])
def test():
    return {"message": "Hello from the button endpoint!"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
