function(e, t, n) {
    "use strict";
    var r, o;

    function i() {
        if (null == r) throw Error("Native dependencies have not been injected.")
    }

    function a(e) {
        r = e
    }

    function u() {
        return i(), r.supported()
    }

    function s(e) {
        return i(), r.supportsFeature(e)
    }

    function l(e) {
        i(), r.setProcessPriority(e)
    }

    function c() {
        return i(), null != o ? o : o = r.getVoiceEngine()
    }
    n.r(t), n.d(t, {
        getVoiceEngine: function() {
            return c
        },
        inject: function() {
            return a
        },
        setProcessPriority: function() {
            return l
        },
        supported: function() {
            return u
        },
        supportsFeature: function() {
            return s
        }
    })
}