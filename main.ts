function REV_Left () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.StickFigure)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    FWD_Left()
    basic.pause(500)
    ALL_STOP()
})
function ALL_STOP () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function FWD_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function FWD_Left () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    bluetooth.uartWriteString(cmd)
    if (cmd == "Forward") {
    	
    }
    if (cmd == "Reverse") {
    	
    }
    if (cmd == "Right") {
    	
    }
    if (cmd == "Left") {
    	
    }
    if (cmd == "stop") {
    	
    }
})
// PIN14 = Controller on(1) Off (0)
// 
// Motor1 forward:
// 
// P13 - HIGH
// 
// P12 - LOW
// 
// Speed PWM: P1
// 
// Motor2 forward:
// 
// P16 - HIGH
// 
// P15 - LOW
// 
// Speed PWM: P2
// 
// Motor1 Backward:
// 
// P13 - LOW
// 
// P12 - HIGH
// 
// Speed PWM: P1
// 
// Motor2 Backward:
// 
// P16 - LOW
// 
// P15 - HIGH
// 
// Speed PWM: P2
input.onButtonPressed(Button.AB, function () {
    REV_Left()
    RWD_Right()
    basic.pause(1000)
    ALL_STOP()
})
input.onButtonPressed(Button.B, function () {
    FWD_Right()
    basic.pause(500)
    ALL_STOP()
})
function RWD_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let cmd = ""
basic.showIcon(IconNames.LeftTriangle)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P14, 1)
