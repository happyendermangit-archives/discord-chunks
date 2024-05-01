function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAudioInputDevices: function() {
            return l
        },
        getAudioOutputDevices: function() {
            return u
        },
        getVideoInputDevices: function() {
            return d
        },
        sanitizeDevices: function() {
            return o
        }
    }), n("757143"), n("733860");
    var i = n("264344"),
        r = n.n(i),
        a = n("992774"),
        s = n("149396");

    function o(e, t) {
        var n;
        let i = !1,
            a = t.map((t, n) => {
                let {
                    guid: r,
                    guid: a,
                    name: o,
                    name: l,
                    index: u
                } = t;
                return /^default/.test(o) ? (i = !0, r = s.DEFAULT_DEVICE_ID, o = o.replace("default", "Default")) : r = null != r && "" !== r ? r : o, null != u && (n = u), {
                    id: r,
                    type: e,
                    index: n,
                    name: o,
                    originalName: l,
                    originalId: a
                }
            });
        return e !== s.DeviceTypes.VIDEO_INPUT && !i && (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null && /^win/i.test(r().os.family) && a.unshift({
            id: s.DEFAULT_DEVICE_ID,
            type: e,
            index: -1,
            name: "Default"
        }), a
    }

    function l() {
        return new Promise(e => {
            (0, a.getVoiceEngine)().getInputDevices(t => e(o(s.DeviceTypes.AUDIO_INPUT, t)))
        })
    }

    function u() {
        return new Promise(e => {
            (0, a.getVoiceEngine)().getOutputDevices(t => e(o(s.DeviceTypes.AUDIO_OUTPUT, t)))
        })
    }

    function d() {
        return new Promise(e => {
            (0, a.getVoiceEngine)().getVideoInputDevices(t => e(o(s.DeviceTypes.VIDEO_INPUT, t)))
        })
    }
}