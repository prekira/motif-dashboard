
IP_ADDRESS = '172.22.131.186'

# API_KEY = '41262ae1b0d74d929f6fa4300f3b8651'
API_KEY = 'a7833a464e5d427dbc914374be90fc1c'


api = MotifApi(IP_ADDRESS, API_KEY)

# get serial number of first connected camera
camsn = '194800329'#api.call('cameras')['cameras'][0]['serial']
