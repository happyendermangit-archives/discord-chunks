function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusInside: function() {
            return i
        }
    }), n("222007");
    var l = n("884691");

    function i(e, t) {
        let [n, i] = (0, l.useState)(!1), a = (0, l.useCallback)(t => {
            (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && i(!0), null != e && e(t)
        }, [e]), s = (0, l.useCallback)(e => {
            (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && i(!1), null != t && t(e)
        }, [t]);
        return {
            handleFocus: a,
            handleBlur: s,
            isFocused: n
        }
    }
}