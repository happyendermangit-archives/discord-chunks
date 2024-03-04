function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOverlayTriggerState: function() {
            return o
        }
    }), n("222007");
    var r = n("884691"),
        i = n("679750");

    function o(e) {
        let [t, n] = (0, i.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), o = (0, r.useCallback)(() => {
            n(!0)
        }, [n]), s = (0, r.useCallback)(() => {
            n(!1)
        }, [n]), a = (0, r.useCallback)(() => {
            n(!t)
        }, [n, t]);
        return {
            isOpen: t,
            setOpen: n,
            open: o,
            close: s,
            toggle: a
        }
    }
}