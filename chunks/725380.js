function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        drainPendingAudioSettings: function() {
            return o
        },
        getPendingAudioSettings: function() {
            return s
        },
        updatePendingSettings: function() {
            return a
        }
    }), n("47120");
    let i = {};

    function r(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function s(e, t) {
        return i[r(e, t)]
    }

    function a(e, t, n) {
        let s = r(e, t);
        i[s] = {
            ...i[s],
            ...n
        }
    }

    function o(e) {
        for (let t in i) {
            let [n, r] = function(e) {
                let [t, n] = e.split(":");
                return [t, n]
            }(t);
            e(n, r, i[t])
        }
        i = {}
    }
}