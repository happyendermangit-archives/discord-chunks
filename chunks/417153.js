function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popToast: function() {
            return a
        },
        showToast: function() {
            return r
        },
        useToastStore: function() {
            return i
        }
    }), n("47120");
    let i = (0, n("652874").default)(() => ({
        currentToast: null,
        queuedToasts: []
    }));

    function r(e) {
        i.setState(t => null != t.currentToast ? {
            ...t,
            queuedToasts: [...t.queuedToasts, e]
        } : {
            currentToast: e,
            queuedToasts: []
        })
    }

    function a() {
        i.setState(e => {
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