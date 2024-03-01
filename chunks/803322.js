function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("884691"),
        i = n("385887");

    function a(e, t, n) {
        let a = l.useCallback(e => {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let l = n(e);
                return l && (e.preventDefault(), e.stopPropagation()), l
            }, [t, n]),
            s = l.useCallback(t => {
                let {
                    event: n
                } = t, l = a(n);
                !l && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.EditorUtils.focus(e)))
            }, [e, a]);
        return {
            handlePaste: a,
            handleGlobalPaste: s
        }
    }
}