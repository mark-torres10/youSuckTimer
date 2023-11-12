"""Flask backend for app.

Server: http://127.0.0.1:5000
"""
import base64
import json
import os
import requests

from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

load_dotenv()
api_key = os.environ["TOGGL_API_KEY"]
base_url = "https://api.track.toggl.com/api/v9"

app = Flask(__name__)
CORS(app)

tasks: list[dict] = []
with open("./tasks_configuration.jsonl") as f:
    for line in f:
        tasks.append(json.loads(line))

route_to_task_map = {task["route_alias"]: task for task in tasks}


def get_logged_hours() -> dict[str, int]:
    headers = {
        "Authorization": f"Basic {base64.b64encode(f'{api_key}:api_token'.encode()).decode()}",
        "Content-Type": "application/json",
    }
    response = requests.get(f"{base_url}/me/time_entries", headers=headers)
    if not response.ok:
        response_body = response.text
        raise Exception(
            f"Unable to fetch data from Toggl: Status {response.status_code}, Body: {response_body}"
        )

    print("Response OK!")

    data = response.json()

    route_to_hours_logged_map = {
        route: sum(
            [
                int(int(entry["duration"]) / 3600)  # convert seconds to hours
                for entry in data
                if entry["description"].lower()
                in [item.lower() for item in task["toggl_task_aliases"]]
                and entry["duration"] > 0
            ]
        )
        for route, task in route_to_task_map.items()
    }

    return route_to_hours_logged_map


route_to_hours_logged_map = get_logged_hours()


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


@app.route("/get-all-hours-by-route", methods=["GET"])
def get_all_hours_by_route():
    return jsonify(route_to_hours_logged_map)


@app.route("/hours/<route>", methods=["GET"])
def get_hours(route):
    hours_data = {
        "totalHoursToLog": route_to_task_map[route]["totalHoursToLog"],
        "totalHoursLogged": route_to_hours_logged_map[route],
    }
    return jsonify(hours_data)


if __name__ == "__main__":
    app.run(debug=True)
