# used for testing purposes
from motifapi import MotifApi
import time


IP_ADDRESS = '172.22.131.182'
API_KEY = '796545a75a174cb28e6e5c24e011eccc'

api = MotifApi(IP_ADDRESS, API_KEY)

# get serial number of first connected camera
# camsn = '193500097'#api.call('cameras')['cameras'][0]['serial']
camsn = '194600051'
response = api.call('camera/%s' %camsn)
print(response['camera_info']['stream']['preview']['url']) 

# start recording on one camera
# print(api.call('camera/%s/recording/start' % camsn,  codec='h264-hq', filename='testing_file',
#                metadata={'title': 'test file', 'description': 'a long description'}))
# time.sleep(5)
# # stop recording on 'all cameras'
# print(api.call('camera/%s/recording/stop' % camsn))

# # wait for recording to finish (sometimes need to flush the buffer, close video, etc)
# while api.is_recording(camsn):
#     print('%s still recording' % camsn)
#     response = api.call('camera/%s' % camsn)
#     print(response)
#     time.sleep(1)

# # in a multi-camera environment you should record to stores as these allow synchronization and
# # stitching multiple videos
# camera_serials = [cinfo['serial'] for cinfo in api.call('cameras')['cameras']]

# # start recording to  on all connected cameras
# # record for 10 seconds then stop
# print(api.call('recording/start', codec='h264-hq', filename='test_store', duration=10, record_to_store=True,
#                metadata={'title': 'test store', 'description': 'a multicamera recording'}))

# # wait for all cameras to finish recording
# while any(api.is_recording(_sn) for _sn in camera_serials):
#     print('still recording %r' % (camera_serials,))
#     time.sleep(1)

# # list all recordings
# print(api.call('recordings'))


print('finished')

