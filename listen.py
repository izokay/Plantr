#this is installed  on a user's machine which
#has physical access to the motor and sensors.

import socket, time, json, serial
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 5000))

while 1:
    time.sleep(5)
    
    #recieve a json which insludes plant data
    # and either a motor or sensor to associate with that plant
    json_in = json.load(client_socket.recv(1024))
    print(dict(json_in))

    hardware_location = json_in['hardware_location']
    #er = serial.Serial(hardware_location, 9600)

    #extract motor data from json
    try:
        water_motor = json_in['water_motor']
        ser.write(water_motor)
    
    except :
        print("no motor")
    
    #extract sensor data from json
    try:
        sensor_info = json_in['sensor']
        ser.write(sensor_info)
    
    except :
        print("no sensor")
    
    
    
    plant_info = json_in['plant']
    ser.write(sensor_info)
        