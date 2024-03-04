function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToastStore: function() {
            return s
        },
        showToast: function() {
            return r
        },
        popToast: function() {
            return a
        }
    }), n("222007");
    var i = n("308503");
    let s = (0, i.default)(() => ({
        currentToast: null,
        queuedToasts: []
    }));

    function r(e) {
        s.setState(t => null != t.currentToast ? {
            ...t,
            queuedToasts: [...t.queuedToasts, e]
        } : {
            currentToast: e,
            queuedToasts: []
        })
    }

    function a() {
        s.setState(e => {
            let t = e.queuedToasts;
            return t.length > 0 ? {
                currentToast: t[0],
                queuedToasts: t.slice(1)
            } : {
                currentToast: null,
                queuedToasts: []
            }
        })
    }
}