function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LazyPopout: function() {
            return T
        },
        Popout: function() {
            return I
        }
    }), n("411104"), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("922770"),
        u = n("930295"),
        d = n("126306"),
        _ = n("388112");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).NONE = "1", s.TRANSLATE = "2", s.SCALE = "3", s.FADE = "4";
    let E = Object.freeze({
        2: d.PopoutCSSAnimator.Types.TRANSLATE,
        3: d.PopoutCSSAnimator.Types.SCALE,
        4: d.PopoutCSSAnimator.Types.FADE
    });
    class I extends(r = o.Component) {
        render() {
            let {
                children: e,
                shouldShow: t,
                position: n,
                onRequestOpen: i,
                onRequestClose: r,
                align: s,
                autoInvert: o,
                fixed: l,
                nudgeAlignIntoViewport: d,
                useRawTargetDimensions: _,
                spacing: c,
                onShiftClick: E,
                positionKey: I,
                preload: T,
                disablePointerEvents: f,
                ignoreModalClicks: S,
                closeOnScroll: h,
                useMouseEnter: A,
                renderPopout: m,
                layerContext: N
            } = this.props;
            return (0, a.jsx)(u.BasePopout, {
                ref: this.ref,
                preload: T,
                position: n,
                align: null != s ? s : function(e) {
                    switch (e) {
                        case "top":
                        case "bottom":
                            return "left";
                        case "left":
                        case "right":
                            return "top";
                        case "center":
                        case "window_center":
                            return "center"
                    }
                    throw Error("Unexpected position: ".concat(e))
                }(n),
                autoInvert: o,
                fixed: l,
                nudgeAlignIntoViewport: d,
                useRawTargetDimensions: _,
                renderPopout: this.renderPopout,
                spacing: c,
                shouldShow: null != m && t,
                onRequestOpen: i,
                onRequestClose: r,
                onShiftClick: E,
                positionKey: I,
                disablePointerEvents: f,
                ignoreModalClicks: S,
                closeOnScroll: h,
                useMouseEnter: A,
                layerContext: N,
                children: e
            })
        }
        constructor(...e) {
            super(...e), c(this, "ref", o.createRef()), c(this, "renderPopout", e => {
                let {
                    renderPopout: t,
                    animation: n,
                    animationPosition: i
                } = this.props;
                switch (null != i && null != e.position && (e.position = i), n) {
                    case "2":
                    case "3":
                    case "4":
                        return (0, a.jsx)(d.PopoutCSSAnimator, {
                            position: e.position,
                            type: E[n],
                            children: t(e)
                        });
                    case "1":
                        return t(e)
                }
                throw Error("Unsupported animation config: ".concat(JSON.stringify(n)))
            })
        }
    }

    function T(e) {
        let {
            renderPopout: t,
            ...n
        } = e, i = o.useRef(null), [r, s] = o.useState(0);

        function u() {
            return c(), (0, a.jsx)(a.Fragment, {})
        }
        o.useLayoutEffect(() => {
            if (r > 0) {
                var e, t, n, s, a;
                null === (a = i.current) || void 0 === a || null === (s = a.ref) || void 0 === s || null === (n = s.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition()
            }
        }, [r]), o.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e)
        }, []);
        let d = o.useRef(!1);
        async function c() {
            if (!d.current) {
                d.current = !0;
                let e = setTimeout(() => {
                        f(() => E), s(e => e + 1)
                    }, 300),
                    n = await t();
                f(() => n), s(e => e + 1), clearTimeout(e)
            }
        }

        function E() {
            var e, t, n, r;
            let s = null === (r = i.current) || void 0 === r ? void 0 : null === (n = r.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
                o = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
            return (0, a.jsx)("div", {
                className: _.loader,
                style: {
                    width: o
                },
                children: (0, a.jsx)(l.Spinner, {})
            })
        }
        let [T, f] = o.useState(() => u);
        return o.useEffect(() => {
            d.current ? t().then(e => {
                f(() => e), s(e => e + 1)
            }) : f(u)
        }, [t]), (0, a.jsx)(I, {
            ref: i,
            ...n,
            renderPopout: T
        })
    }
    c(I, "Animation", i), c(I, "defaultProps", {
        position: "right",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: "2",
        positionKey: void 0
    }), T.Animation = i
}