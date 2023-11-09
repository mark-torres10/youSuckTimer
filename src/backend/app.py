"""Flask backend for app.

Server: http://127.0.0.1:5000
"""
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hours", methods=["GET"])
def get_hours():
    hours_data = {
        "totalHours": 100,
        "totalHoursLogged": 30,
        "totalHoursRemaining": 70
    }
    return jsonify(hours_data)


if __name__ == "__main__":
    app.run(debug=True)
