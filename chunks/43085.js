function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusInside: function() {
            return r
        }
    }), n("47120");
    var i = n("470079");

    function r(e, t) {
        let [n, r] = (0, i.useState)(!1), a = (0, i.useCallback)(t => {
            (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && r(!0), null != e && e(t)
        }, [e]);
        return {
            handleFocus: a,
            handleBlur: (0, i.useCallback)(e => {
                (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && r(!1), null != t && t(e)
            }, [t]),
            isFocused: n
        }
    }
}