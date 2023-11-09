"""Flask backend for app.

Server: http://127.0.0.1:5000
"""
import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks: list[dict] = []
with open("./tasks_configuration.jsonl") as f:
    for line in f:
        tasks.append(json.loads(line))

route_to_task_map = {task["route_alias"]: task for task in tasks}


@app.route("/all-tasks", methods=["GET"])
def get_all_tasks():
    task_data = {
        "tasks": [
            {"task_name": task["task_name"], "route_alias": task["route_alias"]}
            for task in tasks
        ]
    }
    print(f"Task Data: {task_data}")
    return jsonify(task_data)


@app.route("/hours/<route>", methods=["GET"])
def get_hours(route):
    hours_data = {
        "totalHoursToLog": route_to_task_map[route]["totalHoursToLog"],
        "totalHoursLogged": 30,
    }
    return jsonify(hours_data)


if __name__ == "__main__":
    app.run(debug=True)
