function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAudioInputDevices: function() {
            return s
        },
        getAudioOutputDevices: function() {
            return l
        },
        getVideoInputDevices: function() {
            return c
        },
        sanitizeDevices: function() {
            return u
        }
    });
    var r = n("264344"),
        o = n.n(r),
        i = n("702016"),
        a = n("912872");

    function u(e, t) {
        var n, r = !1,
            i = t.map(function(t, n) {
                var o = t.guid,
                    i = t.guid,
                    u = t.name,
                    s = t.name,
                    l = t.index;
                return /^default/.test(u) ? (r = !0, o = a.DEFAULT_DEVICE_ID, u = u.replace("default", "Default")) : o = null != o && "" !== o ? o : u, null != l && (n = l), {
                    id: o,
                    type: e,
                    index: n,
                    name: u,
                    originalName: s,
                    originalId: i
                }
            });
        return e !== a.DeviceTypes.VIDEO_INPUT && !r && (null === o() || void 0 === o() ? void 0 : null === (n = o().os) || void 0 === n ? void 0 : n.family) != null && /^win/i.test(o().os.family) && i.unshift({
            id: a.DEFAULT_DEVICE_ID,
            type: e,
            index: -1,
            name: "Default"
        }), i
    }

    function s() {
        return new Promise(function(e) {
            (0, i.getVoiceEngine)().getInputDevices(function(t) {
                return e(u(a.DeviceTypes.AUDIO_INPUT, t))
            })
        })
    }

    function l() {
        return new Promise(function(e) {
            (0, i.getVoiceEngine)().getOutputDevices(function(t) {
                return e(u(a.DeviceTypes.AUDIO_OUTPUT, t))
            })
        })
    }

    function c() {
        return new Promise(function(e) {
            (0, i.getVoiceEngine)().getVideoInputDevices(function(t) {
                return e(u(a.DeviceTypes.VIDEO_INPUT, t))
            })
        })
    }
}