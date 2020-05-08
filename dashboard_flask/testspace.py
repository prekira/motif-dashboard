import  json
obj = {}
with open('camconfig.json', 'r') as f:
    distros_dict = json.load(f)
    obj= (distros_dict)

print(obj["home-cage"][0]['ip'])
print(obj["home-cage"][0]['serial'])
