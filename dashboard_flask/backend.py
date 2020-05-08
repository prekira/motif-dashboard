from flask import Flask, request
from flask import jsonify, render_template, json, url_for


app = Flask(__name__)

# @app.route('/result', methods = ['GET', 'POST'])
# def result():
#     if request.method == 'GET':
        
#         place = request.args.get('place', None)
#         if place:
#             return place
#         return "No place information is given"

@app.route('/caminfo')

def caminfo():
    if request.method == 'GET':
        id_no = request.args.get('id', None)
        if id_no:
            with open('camconfig.json', 'r') as f:
                distros_dict = json.load(f)
                return jsonify(distros_dict['home-cage'][int(id_no)])
        
        return "No id information is given"
        

# if __name__ == '__main__':
#     app.run(debug = True)



