function(e, t, n) {
    "use strict";
    let i, r;

    function a() {
        if (null == i) throw Error("Native dependencies have not been injected.")
    }

    function s(e) {
        i = e
    }

    function o() {
        return a(), i.supported()
    }

    function l(e) {
        return a(), i.supportsFeature(e)
    }

    function u(e) {
        a(), i.setProcessPriority(e)
    }

    function d() {
        return a(), null != r ? r : r = i.getVoiceEngine()
    }
    n.r(t), n.d(t, {
        getVoiceEngine: function() {
            return d
        },
        inject: function() {
            return s
        },
        setProcessPriority: function() {
            return u
        },
        supported: function() {
            return o
        },
        supportsFeature: function() {
            return l
        }
    }), n("411104")
}