function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        usePreventIdle: function() {
            return s
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("937995");

    function s(e) {
        let {
            onPreventIdle: t,
            onAllowIdle: n,
            onActive: i
        } = r.useContext(a.IdleHandlerContext), s = r.useCallback(() => {
            t(e)
        }, [e, t]);
        return {
            preventIdle: s,
            allowIdle: r.useCallback(() => {
                n(e)
            }, [e, n]),
            onActive: i
        }
    }

    function o(e) {
        let {
            children: t,
            className: n
        } = e, {
            onForceIdle: o,
            onActive: l
        } = r.useContext(a.IdleHandlerContext), {
            preventIdle: u,
            allowIdle: d
        } = s("interact");
        r.useEffect(() => () => d(), [d]);
        let _ = r.useCallback(e => {
            var t;
            let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
            !e.currentTarget.contains(n.activeElement) && o()
        }, [o]);
        return (0, i.jsx)("div", {
            className: n,
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: l,
            onBlur: _,
            children: t
        })
    }
}