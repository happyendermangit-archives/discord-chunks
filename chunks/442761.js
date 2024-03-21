function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Popout: function() {
            return _
        },
        LazyPopout: function() {
            return f
        }
    }), n("70102"), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("242670"),
        l = n("533785"),
        u = n("276335"),
        d = n("569365");
    (s = i || (i = {})).NONE = "1", s.TRANSLATE = "2", s.SCALE = "3", s.FADE = "4";
    let c = Object.freeze({
        2: u.PopoutCSSAnimator.Types.TRANSLATE,
        3: u.PopoutCSSAnimator.Types.SCALE,
        4: u.PopoutCSSAnimator.Types.FADE
    });
    class _ extends a.Component {
        render() {
            let {
                children: e,
                shouldShow: t,
                position: n,
                onRequestOpen: i,
                onRequestClose: s,
                align: a,
                autoInvert: o,
                fixed: u,
                nudgeAlignIntoViewport: d,
                spacing: c,
                onShiftClick: _,
                positionKey: f,
                preload: E,
                disablePointerEvents: h,
                ignoreModalClicks: g,
                closeOnScroll: m,
                useMouseEnter: p,
                renderPopout: S,
                layerContext: v
            } = this.props;
            return (0, r.jsx)(l.BasePopout, {
                ref: this.ref,
                preload: E,
                position: n,
                align: null != a ? a : function(e) {
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
                fixed: u,
                nudgeAlignIntoViewport: d,
                renderPopout: this.renderPopout,
                spacing: c,
                shouldShow: null != S && t,
                onRequestOpen: i,
                onRequestClose: s,
                onShiftClick: _,
                positionKey: f,
                disablePointerEvents: h,
                ignoreModalClicks: g,
                closeOnScroll: m,
                useMouseEnter: p,
                layerContext: v,
                children: e
            })
        }
        constructor(...e) {
            super(...e), this.ref = a.createRef(), this.renderPopout = e => {
                let {
                    renderPopout: t,
                    animation: n,
                    animationPosition: i
                } = this.props;
                switch (null != i && null != e.position && (e.position = i), n) {
                    case "2":
                    case "3":
                    case "4":
                        return (0, r.jsx)(u.PopoutCSSAnimator, {
                            position: e.position,
                            type: c[n],
                            children: t(e)
                        });
                    case "1":
                        return t(e)
                }
                throw Error("Unsupported animation config: ".concat(JSON.stringify(n)))
            }
        }
    }

    function f(e) {
        let {
            renderPopout: t,
            ...n
        } = e, i = a.useRef(null), [s, l] = a.useState(0);

        function u() {
            return f(), (0, r.jsx)(r.Fragment, {})
        }
        a.useLayoutEffect(() => {
            if (s > 0) {
                var e, t, n, r, a;
                null === (a = i.current) || void 0 === a || null === (r = a.ref) || void 0 === r || null === (n = r.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition()
            }
        }, [s]), a.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e)
        }, []);
        let c = a.useRef(!1);
        async function f() {
            if (!c.current) {
                c.current = !0;
                let e = setTimeout(() => {
                        g(() => E), l(e => e + 1)
                    }, 300),
                    n = await t();
                g(() => n), l(e => e + 1), clearTimeout(e)
            }
        }

        function E() {
            var e, t, n, s;
            let a = null === (s = i.current) || void 0 === s ? void 0 : null === (n = s.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
                l = Math.max(100, null == a ? 100 : a.offsetWidth - 20);
            return (0, r.jsx)("div", {
                className: d.loader,
                style: {
                    width: l
                },
                children: (0, r.jsx)(o.Spinner, {})
            })
        }
        let [h, g] = a.useState(() => u);
        return a.useEffect(() => {
            c.current ? t().then(e => {
                g(() => e), l(e => e + 1)
            }) : g(u)
        }, [t]), (0, r.jsx)(_, {
            ref: i,
            ...n,
            renderPopout: h
        })
    }
    _.Animation = i, _.defaultProps = {
        position: "right",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: "2",
        positionKey: void 0
    }, f.Animation = i
}