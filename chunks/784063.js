function(e, t, n) {
    "use strict";
    let i, s;

    function r() {
        if (null == i) throw Error("Native dependencies have not been injected.")
    }

    function a(e) {
        i = e
    }

    function o() {
        return r(), i.supported()
    }

    function l(e) {
        return r(), i.supportsFeature(e)
    }

    function u(e) {
        r(), i.setProcessPriority(e)
    }

    function d() {
        return r(), null != s ? s : s = i.getVoiceEngine()
    }
    n.r(t), n.d(t, {
        inject: function() {
            return a
        },
        supported: function() {
            return o
        },
        supportsFeature: function() {
            return l
        },
        setProcessPriority: function() {
            return u
        },
        getVoiceEngine: function() {
            return d
        }
    }), n("70102")
}