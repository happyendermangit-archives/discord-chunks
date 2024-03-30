function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        usePreventIdle: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("416204");

    function i(e) {
        var t = r.useContext(o.IdleHandlerContext),
            n = t.onPreventIdle,
            i = t.onAllowIdle,
            a = t.onActive;
        return {
            preventIdle: r.useCallback(function() {
                n(e)
            }, [e, n]),
            allowIdle: r.useCallback(function() {
                i(e)
            }, [e, i]),
            onActive: a
        }
    }

    function a(e) {
        var t = e.children,
            n = e.className,
            a = r.useContext(o.IdleHandlerContext),
            u = a.onForceIdle,
            s = a.onActive,
            l = i("interact"),
            c = l.preventIdle,
            f = l.allowIdle;
        r.useEffect(function() {
            return function() {
                return f()
            }
        }, [f]);
        var d = r.useCallback(function(e) {
            var t, n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
            !e.currentTarget.contains(n.activeElement) && u()
        }, [u]);
        return r.createElement("div", {
            className: n,
            onMouseEnter: c,
            onMouseLeave: f,
            onFocus: s,
            onBlur: d
        }, t)
    }
}