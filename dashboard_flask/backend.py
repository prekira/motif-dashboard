from flask import Flask, request
from flask import jsonify, render_template, json, url_for


app = Flask(__name__)

@app.route('/caminfo')

#sends info to react frontend
def caminfo():
    if request.method == 'GET':
        id_no = request.args.get('id', None)
        cam_type = request.args.get('type', None)
        if id_no and cam_type:
            with open('camconfig.json', 'r') as f:
                distros_dict = json.load(f)
                print("id =====", int(id_no));
                return jsonify(distros_dict[cam_type][int(id_no)-1])
        
        return "No id information is given"
