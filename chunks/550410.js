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
    var i = n("37983"),
        l = n("884691"),
        a = n("908583");

    function s(e) {
        let {
            onPreventIdle: t,
            onAllowIdle: n,
            onActive: i
        } = l.useContext(a.IdleHandlerContext), s = l.useCallback(() => {
            t(e)
        }, [e, t]), r = l.useCallback(() => {
            n(e)
        }, [e, n]);
        return {
            preventIdle: s,
            allowIdle: r,
            onActive: i
        }
    }

    function r(e) {
        let {
            children: t,
            className: n
        } = e, {
            onForceIdle: r,
            onActive: o
        } = l.useContext(a.IdleHandlerContext), {
            preventIdle: u,
            allowIdle: d
        } = s("interact");
        l.useEffect(() => () => d(), [d]);
        let c = l.useCallback(e => {
            var t;
            let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
            !e.currentTarget.contains(n.activeElement) && r()
        }, [r]);
        return (0, i.jsx)("div", {
            className: n,
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: o,
            onBlur: c,
            children: t
        })
    }
}