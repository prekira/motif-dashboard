from flask import Flask, request
from motifapi import MotifApi

IP_ADDRESS = '10.11.12.23'
API_KEY = 'abcdef123456abcdef123456abcdef12'


api = MotifApi(IP_ADDRESS, API_KEY)
# check the client is connected
api.call('version')
# list the connected cameras
api.call('cameras')
print('sucess')






