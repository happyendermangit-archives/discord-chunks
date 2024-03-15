function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createManagedReactiveScroller: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("718776"),
        l = n("942005"),
        u = n("766361");

    function d(e, t) {
        let n = new Map,
            r = new t(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: i
                    } = e;
                    null === (t = n.get(i)) || void 0 === t || t(e)
                })
            });
        return s.forwardRef(function(t, d) {
            let {
                children: c,
                className: f,
                onResize: _,
                contentClassName: E,
                onScroll: h,
                dir: g = "ltr",
                fade: m = !1,
                customTheme: p = !1,
                style: S,
                ...v
            } = t, T = s.useRef(null), I = s.useRef(null), [A, C] = s.useState(!1), {
                scrollerRef: y,
                getScrollerState: N
            } = (0, l.useUncachedScrollerState)(), R = (0, l.useScrollSpring)(y);
            s.useImperativeHandle(d, () => ({
                getScrollerNode: () => y.current,
                isScrolling: () => null != T.current,
                getScrollerState: N,
                ...(0, l.getAnimatedScrollHelpers)(y, N, R)
            }), [y, N, R]);
            let O = s.useCallback(e => {
                null == T.current ? C(!0) : clearTimeout(T.current), T.current = setTimeout(() => {
                    T.current = null, C(!1)
                }, 200), null != h && h(e)
            }, [h]);
            return s.useEffect(() => () => clearTimeout(T.current), []), (0, l.useResizeObserverSubscription)({
                ref: y,
                key: "container",
                onUpdate: _,
                resizeObserver: r,
                listenerMap: n
            }), (0, l.useResizeObserverSubscription)({
                ref: I,
                key: "content",
                onUpdate: _,
                resizeObserver: r,
                listenerMap: n
            }), (0, i.jsx)("div", {
                ref: y,
                className: a(f, {
                    [u.fade]: m,
                    [u.customTheme]: p,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: A && m
                }),
                style: S,
                dir: g,
                onScroll: O,
                ...v,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: I,
                    children: (0, i.jsxs)("div", {
                        ref: I,
                        className: a(E, u.content),
                        children: [c, A && (0, i.jsx)("div", {
                            className: u.pointerCover
                        })]
                    })
                })
            })
        })
    }
}