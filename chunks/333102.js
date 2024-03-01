function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createManagedReactiveScroller: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("718776"),
        l = n("942005"),
        u = n("766361");

    function c(e, t) {
        let n = new Map,
            s = new t(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: i
                    } = e;
                    null === (t = n.get(i)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(t, c) {
            let {
                children: d,
                className: f,
                onResize: E,
                contentClassName: p,
                onScroll: h,
                dir: _ = "ltr",
                fade: S = !1,
                customTheme: m = !1,
                style: T,
                ...g
            } = t, I = r.useRef(null), C = r.useRef(null), [v, A] = r.useState(!1), {
                scrollerRef: R,
                getScrollerState: N
            } = (0, l.useUncachedScrollerState)(), O = (0, l.useScrollSpring)(R);
            r.useImperativeHandle(c, () => ({
                getScrollerNode: () => R.current,
                isScrolling: () => null != I.current,
                getScrollerState: N,
                ...(0, l.getAnimatedScrollHelpers)(R, N, O)
            }), [R, N, O]);
            let D = r.useCallback(e => {
                null == I.current ? A(!0) : clearTimeout(I.current), I.current = setTimeout(() => {
                    I.current = null, A(!1)
                }, 200), null != h && h(e)
            }, [h]);
            return r.useEffect(() => () => clearTimeout(I.current), []), (0, l.useResizeObserverSubscription)({
                ref: R,
                key: "container",
                onUpdate: E,
                resizeObserver: s,
                listenerMap: n
            }), (0, l.useResizeObserverSubscription)({
                ref: C,
                key: "content",
                onUpdate: E,
                resizeObserver: s,
                listenerMap: n
            }), (0, i.jsx)("div", {
                ref: R,
                className: a(f, {
                    [u.fade]: S,
                    [u.customTheme]: m,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: v && S
                }),
                style: T,
                dir: _,
                onScroll: D,
                ...g,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: C,
                    children: (0, i.jsxs)("div", {
                        ref: C,
                        className: a(p, u.content),
                        children: [d, v && (0, i.jsx)("div", {
                            className: u.pointerCover
                        })]
                    })
                })
            })
        })
    }
}