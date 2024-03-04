function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sanitizeDevices: function() {
            return o
        },
        getAudioInputDevices: function() {
            return l
        },
        getAudioOutputDevices: function() {
            return u
        },
        getVideoInputDevices: function() {
            return d
        }
    }), n("781738"), n("843762");
    var i = n("383536"),
        s = n.n(i),
        r = n("784063"),
        a = n("149416");

    function o(e, t) {
        var n;
        let i = !1,
            r = t.map((t, n) => {
                let {
                    guid: s,
                    guid: r,
                    name: o,
                    name: l,
                    index: u
                } = t;
                return /^default/.test(o) ? (i = !0, s = a.DEFAULT_DEVICE_ID, o = o.replace("default", "Default")) : s = null != s && "" !== s ? s : o, null != u && (n = u), {
                    id: s,
                    type: e,
                    index: n,
                    name: o,
                    originalName: l,
                    originalId: r
                }
            });
        return e !== a.DeviceTypes.VIDEO_INPUT && !i && (null == s ? void 0 : null === (n = s.os) || void 0 === n ? void 0 : n.family) != null && /^win/i.test(s.os.family) && r.unshift({
            id: a.DEFAULT_DEVICE_ID,
            type: e,
            index: -1,
            name: "Default"
        }), r
    }

    function l() {
        return new Promise(e => {
            (0, r.getVoiceEngine)().getInputDevices(t => e(o(a.DeviceTypes.AUDIO_INPUT, t)))
        })
    }

    function u() {
        return new Promise(e => {
            (0, r.getVoiceEngine)().getOutputDevices(t => e(o(a.DeviceTypes.AUDIO_OUTPUT, t)))
        })
    }

    function d() {
        return new Promise(e => {
            (0, r.getVoiceEngine)().getVideoInputDevices(t => e(o(a.DeviceTypes.VIDEO_INPUT, t)))
        })
    }
}