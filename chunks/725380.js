function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        drainPendingAudioSettings: function() {
            return o
        },
        getPendingAudioSettings: function() {
            return a
        },
        updatePendingSettings: function() {
            return s
        }
    }), n("47120");
    let i = {};

    function r(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function a(e, t) {
        return i[r(e, t)]
    }

    function s(e, t, n) {
        let a = r(e, t);
        i[a] = {
            ...i[a],
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