function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePreventIdle: function() {
            return s
        },
        default: function() {
            return r
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("908583");

    function s(e) {
        let {
            onPreventIdle: t,
            onAllowIdle: n,
            onActive: l
        } = i.useContext(a.IdleHandlerContext), s = i.useCallback(() => {
            t(e)
        }, [e, t]), r = i.useCallback(() => {
            n(e)
        }, [e, n]);
        return {
            preventIdle: s,
            allowIdle: r,
            onActive: l
        }
    }

    function r(e) {
        let {
            children: t,
            className: n
        } = e, {
            onForceIdle: r,
            onActive: o
        } = i.useContext(a.IdleHandlerContext), {
            preventIdle: u,
            allowIdle: d
        } = s("interact");
        i.useEffect(() => () => d(), [d]);
        let c = i.useCallback(e => {
            var t;
            let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
            !e.currentTarget.contains(n.activeElement) && r()
        }, [r]);
        return (0, l.jsx)("div", {
            className: n,
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: o,
            onBlur: c,
            children: t
        })
    }
}