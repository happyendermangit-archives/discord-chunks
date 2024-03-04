function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPendingAudioSettings: function() {
            return r
        },
        updatePendingSettings: function() {
            return a
        },
        drainPendingAudioSettings: function() {
            return o
        }
    }), n("222007");
    let i = {};

    function s(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function r(e, t) {
        let n = s(e, t);
        return i[n]
    }

    function a(e, t, n) {
        let r = s(e, t);
        i[r] = {
            ...i[r],
            ...n
        }
    }

    function o(e) {
        for (let t in i) {
            let [n, s] = function(e) {
                let [t, n] = e.split(":");
                return [t, n]
            }(t);
            e(n, s, i[t])
        }
        i = {}
    }
}