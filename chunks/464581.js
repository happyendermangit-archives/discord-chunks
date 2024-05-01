function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("887490");

    function s(e, t, n) {
        let s = i.useCallback(e => {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let i = n(e);
                return i && (e.preventDefault(), e.stopPropagation()), i
            }, [t, n]),
            a = i.useCallback(t => {
                let {
                    event: n
                } = t;
                !s(n) && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), r.EditorUtils.focus(e)))
            }, [e, s]);
        return {
            handlePaste: s,
            handleGlobalPaste: a
        }
    }
}