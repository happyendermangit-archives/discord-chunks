function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Popout: function() {
            return f
        },
        LazyPopout: function() {
            return E
        }
    }), n("70102"), n("222007");
    var i, r, s = n("37983"),
        a = n("884691"),
        o = n("242670"),
        l = n("533785"),
        u = n("276335"),
        c = n("569365");
    (r = i || (i = {})).NONE = "1", r.TRANSLATE = "2", r.SCALE = "3", r.FADE = "4";
    let d = Object.freeze({
        2: u.PopoutCSSAnimator.Types.TRANSLATE,
        3: u.PopoutCSSAnimator.Types.SCALE,
        4: u.PopoutCSSAnimator.Types.FADE
    });
    class f extends a.Component {
        render() {
            let {
                children: e,
                shouldShow: t,
                position: n,
                onRequestOpen: i,
                onRequestClose: r,
                align: a,
                autoInvert: o,
                fixed: u,
                nudgeAlignIntoViewport: c,
                spacing: d,
                onShiftClick: f,
                positionKey: E,
                preload: p,
                disablePointerEvents: h,
                ignoreModalClicks: _,
                closeOnScroll: S,
                useMouseEnter: m,
                renderPopout: T,
                layerContext: g
            } = this.props;
            return (0, s.jsx)(l.BasePopout, {
                ref: this.ref,
                preload: p,
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
                nudgeAlignIntoViewport: c,
                renderPopout: this.renderPopout,
                spacing: d,
                shouldShow: null != T && t,
                onRequestOpen: i,
                onRequestClose: r,
                onShiftClick: f,
                positionKey: E,
                disablePointerEvents: h,
                ignoreModalClicks: _,
                closeOnScroll: S,
                useMouseEnter: m,
                layerContext: g,
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
                        return (0, s.jsx)(u.PopoutCSSAnimator, {
                            position: e.position,
                            type: d[n],
                            children: t(e)
                        });
                    case "1":
                        return t(e)
                }
                throw Error("Unsupported animation config: ".concat(JSON.stringify(n)))
            }
        }
    }

    function E(e) {
        let {
            renderPopout: t,
            ...n
        } = e, i = a.useRef(null), [r, l] = a.useState(0);

        function u() {
            return E(), (0, s.jsx)(s.Fragment, {})
        }
        a.useLayoutEffect(() => {
            if (r > 0) {
                var e, t, n, s, a;
                null === (a = i.current) || void 0 === a || null === (s = a.ref) || void 0 === s || null === (n = s.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition()
            }
        }, [r]), a.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e)
        }, []);
        let d = a.useRef(!1);
        async function E() {
            if (!d.current) {
                d.current = !0;
                let e = setTimeout(() => {
                        _(() => p), l(e => e + 1)
                    }, 300),
                    n = await t();
                _(() => n), l(e => e + 1), clearTimeout(e)
            }
        }

        function p() {
            var e, t, n, r;
            let a = null === (r = i.current) || void 0 === r ? void 0 : null === (n = r.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
                l = Math.max(100, null == a ? 100 : a.offsetWidth - 20);
            return (0, s.jsx)("div", {
                className: c.loader,
                style: {
                    width: l
                },
                children: (0, s.jsx)(o.Spinner, {})
            })
        }
        let [h, _] = a.useState(() => u);
        return a.useEffect(() => {
            d.current ? t().then(e => {
                _(() => e), l(e => e + 1)
            }) : _(u)
        }, [t]), (0, s.jsx)(f, {
            ref: i,
            ...n,
            renderPopout: h
        })
    }
    f.Animation = i, f.defaultProps = {
        position: "right",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: "2",
        positionKey: void 0
    }, E.Animation = i
}