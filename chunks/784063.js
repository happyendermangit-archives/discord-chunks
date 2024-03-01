function(e, t, n) {
    "use strict";
    let i, r;

    function s() {
        if (null == i) throw Error("Native dependencies have not been injected.")
    }

    function a(e) {
        i = e
    }

    function o() {
        return s(), i.supported()
    }

    function l(e) {
        return s(), i.supportsFeature(e)
    }

    function u(e) {
        s(), i.setProcessPriority(e)
    }

    function c() {
        return s(), null != r ? r : r = i.getVoiceEngine()
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
            return c
        }
    }), n("70102")
}