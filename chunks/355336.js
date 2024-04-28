function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createManagedReactiveScroller: function() {
            return d
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("84735"),
        l = n("780900"),
        u = n("274641");

    function d(e, t) {
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
        return r.forwardRef(function(t, d) {
            let {
                children: _,
                className: c,
                onResize: E,
                contentClassName: I,
                onScroll: T,
                dir: f = "ltr",
                fade: S = !1,
                customTheme: h = !1,
                style: A,
                ...m
            } = t, N = r.useRef(null), p = r.useRef(null), [O, R] = r.useState(!1), {
                scrollerRef: C,
                getScrollerState: g
            } = (0, l.useUncachedScrollerState)(), L = (0, l.useScrollSpring)(C);
            r.useImperativeHandle(d, () => ({
                getScrollerNode: () => C.current,
                isScrolling: () => null != N.current,
                getScrollerState: g,
                ...(0, l.getAnimatedScrollHelpers)(C, g, L)
            }), [C, g, L]);
            let D = r.useCallback(e => {
                null == N.current ? R(!0) : clearTimeout(N.current), N.current = setTimeout(() => {
                    N.current = null, R(!1)
                }, 200), null != T && T(e)
            }, [T]);
            return r.useEffect(() => () => clearTimeout(N.current), []), (0, l.useResizeObserverSubscription)({
                ref: C,
                key: "container",
                onUpdate: E,
                resizeObserver: s,
                listenerMap: n
            }), (0, l.useResizeObserverSubscription)({
                ref: p,
                key: "content",
                onUpdate: E,
                resizeObserver: s,
                listenerMap: n
            }), (0, i.jsx)("div", {
                ref: C,
                className: a()(c, {
                    [u.fade]: S,
                    [u.customTheme]: h,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: O && S
                }),
                style: A,
                dir: f,
                onScroll: D,
                ...m,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: p,
                    children: (0, i.jsxs)("div", {
                        ref: p,
                        className: a()(I, u.content),
                        children: [_, O && (0, i.jsx)("div", {
                            className: u.pointerCover
                        })]
                    })
                })
            })
        })
    }
}