function REV_ALL () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function REV_Left () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
}
bluetooth.onBluetoothConnected(function () {
    bluetooth.startUartService()
    basic.showIcon(IconNames.StickFigure)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    FWD_Left()
    basic.pause(500)
    ALL_STOP()
})
function SPIN_Right () {
    FWD_Left()
    REV_Right()
}
function ALL_STOP () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function REV_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function FWD_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function SPIN_Left () {
    FWD_Right()
    REV_Left()
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
        Forward_ALL()
    }
    if (cmd == "Reverse") {
        REV_ALL()
    }
    if (cmd == "Right") {
        FWD_Left()
    }
    if (cmd == "Left") {
        FWD_Right()
    }
    if (cmd == "stop") {
        ALL_STOP()
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
    Forward_ALL()
    basic.pause(1000)
    ALL_STOP()
})
input.onButtonPressed(Button.B, function () {
    FWD_Right()
    basic.pause(500)
    ALL_STOP()
})
function Forward_ALL () {
    pins.analogWritePin(AnalogPin.P1, 256)
    pins.analogWritePin(AnalogPin.P2, 256)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
let cmd = ""
cmd = ""
basic.showIcon(IconNames.Angry)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P14, 1)
ALL_STOP()
