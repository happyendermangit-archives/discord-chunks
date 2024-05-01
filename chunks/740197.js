function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CAN_SET_DEVICES: function() {
            return r
        },
        CAN_SET_OUTPUT_DEVICES: function() {
            return a
        },
        getAudioInputDevices: function() {
            return d
        },
        getAudioOutputDevices: function() {
            return _
        },
        getDevices: function() {
            return E
        },
        getVideoInputDevices: function() {
            return c
        }
    }), n("177593"), n("653041");
    var i = n("65154");
    let r = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
        a = r && "setSinkId" in HTMLAudioElement.prototype;

    function s(e) {
        return {
            id: i.DEFAULT_DEVICE_ID,
            type: e,
            index: 0,
            name: "Default"
        }
    }

    function o() {
        return [s(i.DeviceTypes.AUDIO_INPUT), s(i.DeviceTypes.AUDIO_OUTPUT), s(i.DeviceTypes.VIDEO_INPUT)]
    }

    function l(e, t) {
        return e.filter(e => e.type === t)
    }

    function u() {
        return r ? navigator.mediaDevices.enumerateDevices().then(e => {
            let t = 0,
                n = 0,
                r = 0;
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
                let a;
                switch (e.kind) {
                    case i.DeviceTypes.AUDIO_INPUT:
                        a = t++;
                        break;
                    case i.DeviceTypes.AUDIO_OUTPUT:
                        a = n++;
                        break;
                    case i.DeviceTypes.VIDEO_INPUT:
                    default:
                        a = r++
                }
                return {
                    id: e.deviceId,
                    type: e.kind,
                    index: a,
                    name: null != e.label && "" !== e.label ? e.label : 0 === a ? "Default" : "Device ".concat(a)
                }
            })
        }).then(e => (!a && (e = e.filter(e => e.type !== i.DeviceTypes.AUDIO_OUTPUT)).push(s(i.DeviceTypes.AUDIO_OUTPUT)), e)).catch(o) : new Promise(e => {
            setImmediate(() => e(o()))
        })
    }
    async function d() {
        return l(await u(), i.DeviceTypes.AUDIO_INPUT)
    }
    async function _() {
        return l(await u(), i.DeviceTypes.AUDIO_OUTPUT)
    }
    async function c() {
        return l(await u(), i.DeviceTypes.VIDEO_INPUT)
    }
    async function E() {
        let e = await u();
        return [l(e, i.DeviceTypes.AUDIO_INPUT), l(e, i.DeviceTypes.AUDIO_OUTPUT), l(e, i.DeviceTypes.VIDEO_INPUT)]
    }
}