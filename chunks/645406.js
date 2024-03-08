function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusInside: function() {
            return l
        }
    }), n("222007");
    var i = n("884691");

    function l(e, t) {
        let [n, l] = (0, i.useState)(!1), a = (0, i.useCallback)(t => {
            (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && l(!0), null != e && e(t)
        }, [e]), s = (0, i.useCallback)(e => {
            (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && l(!1), null != t && t(e)
        }, [t]);
        return {
            handleFocus: a,
            handleBlur: s,
            isFocused: n
        }
    }
}