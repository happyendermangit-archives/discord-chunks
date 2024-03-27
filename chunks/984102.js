function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOverlayTriggerState: function() {
            return a
        }
    });
    var r = n("470079"),
        i = n("697898");

    function a(e) {
        let [t, n] = (0, i.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), a = (0, r.useCallback)(() => {
            n(!0)
        }, [n]), o = (0, r.useCallback)(() => {
            n(!1)
        }, [n]), s = (0, r.useCallback)(() => {
            n(!t)
        }, [n, t]);
        return {
            isOpen: t,
            setOpen: n,
            open: a,
            close: o,
            toggle: s
        }
    }
}