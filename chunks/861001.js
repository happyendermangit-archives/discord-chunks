function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CAN_SET_DEVICES: function() {
            return s
        },
        CAN_SET_OUTPUT_DEVICES: function() {
            return r
        },
        getAudioInputDevices: function() {
            return d
        },
        getAudioOutputDevices: function() {
            return c
        },
        getVideoInputDevices: function() {
            return f
        },
        getDevices: function() {
            return _
        }
    }), n("860677"), n("424973");
    var i = n("353927");
    let s = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
        r = s && "setSinkId" in HTMLAudioElement.prototype;

    function a(e) {
        return {
            id: i.DEFAULT_DEVICE_ID,
            type: e,
            index: 0,
            name: "Default"
        }
    }

    function o() {
        return [a(i.DeviceTypes.AUDIO_INPUT), a(i.DeviceTypes.AUDIO_OUTPUT), a(i.DeviceTypes.VIDEO_INPUT)]
    }

    function l(e, t) {
        return e.filter(e => e.type === t)
    }

    function u() {
        return s ? navigator.mediaDevices.enumerateDevices().then(e => {
            let t = 0,
                n = 0,
                s = 0;
            return e.filter(e => {
                switch (e.kind) {
                    case i.DeviceTypes.AUDIO_INPUT:
                    case i.DeviceTypes.AUDIO_OUTPUT:
                    case i.DeviceTypes.VIDEO_INPUT:
                        return !0;
                    default:
                        return !1
                }
            }).map(e => {
                let r;
                switch (e.kind) {
                    case i.DeviceTypes.AUDIO_INPUT:
                        r = t++;
                        break;
                    case i.DeviceTypes.AUDIO_OUTPUT:
                        r = n++;
                        break;
                    case i.DeviceTypes.VIDEO_INPUT:
                    default:
                        r = s++
                }
                return {
                    id: e.deviceId,
                    type: e.kind,
                    index: r,
                    name: null != e.label && "" !== e.label ? e.label : 0 === r ? "Default" : "Device ".concat(r)
                }
            })
        }).then(e => (!r && (e = e.filter(e => e.type !== i.DeviceTypes.AUDIO_OUTPUT)).push(a(i.DeviceTypes.AUDIO_OUTPUT)), e)).catch(o) : new Promise(e => {
            setImmediate(() => e(o()))
        })
    }
    async function d() {
        let e = await u();
        return l(e, i.DeviceTypes.AUDIO_INPUT)
    }
    async function c() {
        let e = await u();
        return l(e, i.DeviceTypes.AUDIO_OUTPUT)
    }
    async function f() {
        let e = await u();
        return l(e, i.DeviceTypes.VIDEO_INPUT)
    }
    async function _() {
        let e = await u();
        return [l(e, i.DeviceTypes.AUDIO_INPUT), l(e, i.DeviceTypes.AUDIO_OUTPUT), l(e, i.DeviceTypes.VIDEO_INPUT)]
    }
}