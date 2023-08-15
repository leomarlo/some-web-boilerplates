from flask import Flask, jsonify
from flask_cors import CORS
from db.session import engine
from db.mock import mockdb
from db.models import Base


app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000", "http://another.domain"])  # This will allow all origins to access your app. It's okay for development but not for production!


# Base.metadata.create_all(bind=engine)

# @app.before_first_request
# def create_tables():
#     Base.metadata.create_all(bind=engine)


@app.route('/get-article', methods=['GET'])
def get_article():
    article_content = mockdb.get_article()
    return jsonify(articleContent=article_content)

@app.route('/button-endpoint', methods=['POST'])
def button_endpoint():
    return jsonify(message="Button was pressed!")

@app.route('/test', methods=['GET'])
def test():
    return {"message": "Hello from the button endpoint!"}


@app.route('/createTables', methods=['GET'])
def create_tables():
    Base.metadata.create_all(bind=engine)
    return {"message": "Tables created!"}

if __name__ == '__main__':
    print("Starting Flask app...")
    # app.run(debug=True, port=5000)
    app.run(debug=True, port=5000)