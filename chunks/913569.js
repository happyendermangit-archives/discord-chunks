function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("714196");

    function i(e, t, n) {
        var i = r.useCallback(function(e) {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                var r = n(e);
                return r && (e.preventDefault(), e.stopPropagation()), r
            }, [t, n]),
            a = r.useCallback(function(t) {
                var n = t.event;
                !i(n) && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), o.EditorUtils.focus(e)))
            }, [e, i]);
        return {
            handlePaste: i,
            handleGlobalPaste: a
        }
    }
}