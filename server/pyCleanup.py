import RPi.GPIO as GPIO

pins = [26, 19]

for i in pins:
    GPIO.setup(i, GPIO.OUT)
    GPIO.output(i, GPIO.HIGH)

def cleanUp():
  GPIO.cleanup()

cleanUp()
