function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPendingAudioSettings: function() {
            return s
        },
        updatePendingSettings: function() {
            return a
        },
        drainPendingAudioSettings: function() {
            return o
        }
    }), n("222007");
    let i = {};

    function r(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function s(e, t) {
        let n = r(e, t);
        return i[n]
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