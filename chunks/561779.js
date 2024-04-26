function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slider: function() {
            return m
        }
    }), n("724458"), n("411104");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("120356"),
        u = n.n(l),
        d = n("392711"),
        _ = n.n(d),
        c = n("374470"),
        E = n("84735"),
        I = n("981729"),
        T = n("607070"),
        f = n("465667");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e, t) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if (e === r) return i;
            if (e < r) {
                if (0 === n || r - e < n) return i;
                return i - 1
            }
            n = e - r
        }
        return null
    }(s = i || (i = {}))[s.ABOVE = 0] = "ABOVE", s[s.BELOW = 1] = "BELOW";

    function A(e) {
        return {
            value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
            initialValueProp: e.initialValue,
            newClosestIndex: null,
            ... function(e) {
                let {
                    markers: t,
                    initialValue: n,
                    minValue: i,
                    maxValue: r,
                    equidistant: s
                } = e, a = [], o = [];
                if (null == t) return {
                    min: i,
                    max: r,
                    range: r - i,
                    sortedMarkers: a,
                    markerPositions: o
                };
                let l = h(n, a = t.sort((e, t) => e - t)),
                    u = a[0],
                    d = a[a.length - 1],
                    _ = d - u;
                if (s) {
                    let e = 100 / (a.length - 1);
                    o = a.map((t, n) => n * e)
                } else {
                    let e = e => 100 * (e - u) / _;
                    o = a.map(t => e(t))
                }
                return {
                    min: u,
                    max: d,
                    range: _,
                    sortedMarkers: a,
                    markerPositions: o,
                    closestMarkerIndex: l
                }
            }(e)
        }
    }
    class m extends(r = o.PureComponent) {
        static getDerivedStateFromProps(e, t) {
            return e.initialValue !== t.initialValueProp ? {
                ...A(e),
                active: t.active
            } : null
        }
        componentWillUnmount() {
            this.reset()
        }
        renderMark(e) {
            let {
                onMarkerRender: t
            } = this.props;
            return null != t ? t(e) : e
        }
        render() {
            var e;
            let {
                value: t,
                active: n,
                focused: i,
                sortedMarkers: r,
                markerPositions: s,
                closestMarkerIndex: o,
                newClosestIndex: l,
                min: d,
                max: _
            } = this.state, {
                disabled: c,
                stickToMarkers: S,
                className: h,
                children: A,
                barStyles: m,
                fillStyles: N,
                mini: p,
                hideBubble: O,
                defaultValue: R,
                orientation: C,
                onValueRender: g,
                renderMarker: L,
                getAriaValueText: D,
                barClassName: v,
                grabberClassName: M,
                grabberStyles: y = {},
                markerPosition: P = 0,
                "aria-hidden": U,
                "aria-label": b,
                "aria-labelledby": G,
                "aria-describedby": w
            } = this.props, B = 0;
            S ? null != s && (null != l ? B = s[l] : null != o && (B = s[o])) : B = this.scaleValue(t);
            let k = "".concat(B, "%"),
                V = null != s && null != r ? s.map((e, t) => {
                    let n = r[t],
                        i = null != R && R === n,
                        s = this.renderMark(n);
                    return (0, a.jsx)("div", {
                        className: u()(f.mark, {
                            [f.defaultValue]: i,
                            [f.markAbove]: 0 === P,
                            [f.markBelow]: 1 === P
                        }),
                        style: {
                            left: "".concat(e, "%")
                        },
                        children: null != L ? L(n) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: f.markValue,
                                children: s
                            }), (0, a.jsx)("div", {
                                className: f["markDash".concat(null == s ? "simple" : "")]
                            })]
                        })
                    }, t)
                }) : null,
                x = null != g ? g(t) : "".concat(B.toFixed(0), "%"),
                F = null !== (e = null == D ? void 0 : D(t)) && void 0 !== e ? e : void 0;
            return (0, a.jsx)(E.FocusRing, {
                focusTarget: this.containerRef,
                ringTarget: this.grabberRef,
                children: (0, a.jsxs)("div", {
                    className: u()(f.slider, h, {
                        [f.disabled]: c,
                        [f.mini]: p
                    }),
                    "aria-valuemin": d,
                    "aria-valuemax": _,
                    "aria-valuenow": t,
                    "aria-disabled": c,
                    "aria-orientation": C,
                    "aria-hidden": U,
                    "aria-label": b,
                    "aria-labelledby": G,
                    "aria-describedby": w,
                    "aria-valuetext": F,
                    role: "slider",
                    tabIndex: 0,
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContainerMouseDown,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    ref: this.containerRef,
                    children: [(0, a.jsx)("div", {
                        className: f.track,
                        children: V
                    }), (0, a.jsx)("div", {
                        className: u()(f.bar, v),
                        style: m,
                        children: (0, a.jsx)("div", {
                            className: f.barFill,
                            style: {
                                ...N,
                                width: k
                            }
                        })
                    }), A, (0, a.jsx)("div", {
                        className: f.track,
                        children: (0, a.jsx)(I.Tooltip, {
                            color: I.Tooltip.Colors.GREY,
                            hideOnClick: !1,
                            text: O || S ? null : x,
                            forceOpen: n || i && T.default.keyboardModeEnabled,
                            children: e => (0, a.jsx)("div", {
                                ...e,
                                className: u()(f.grabber, M),
                                style: {
                                    ...y,
                                    left: k
                                },
                                onMouseDown: this.handleMouseDown,
                                ref: this.grabberRef
                            })
                        })
                    })]
                })
            })
        }
        reset() {
            var e, t, n, i;
            null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener("mousemove", this.handleMouseMove, !0), null === (i = this.containerRef.current) || void 0 === i || null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleMouseUp, !0)
        }
        scaleValue(e) {
            return 100 * (e - this.state.min) / this.state.range
        }
        unscaleValue(e) {
            return e * this.state.range / 100 + this.state.min
        }
        focus() {
            var e;
            null === (e = this.containerRef.current) || void 0 === e || e.focus()
        }
        blur() {
            var e;
            null === (e = this.containerRef.current) || void 0 === e || e.blur()
        }
        moveStaggered(e) {
            let t;
            let {
                boundingRect: n,
                x: i = 0,
                closestMarkerIndex: r,
                markerPositions: s,
                sortedMarkers: a
            } = this.state, {
                asValueChanges: o
            } = this.props;
            if (null == n) return;
            let {
                left: l,
                right: u
            } = n;
            if (e.clientX <= l || e.clientX >= u) return;
            let d = e.clientX - i,
                _ = s[r] + d / (u - l) * 100;
            null != (t = this.props.equidistant ? h(_, s) : h(this.unscaleValue(_), a)) && (null == o || o(a[t])), this.setState({
                newClosestIndex: t
            })
        }
        constructor(e) {
            super(e), S(this, "containerRef", o.createRef()), S(this, "grabberRef", o.createRef()), S(this, "moveGrabber", e => {
                let {
                    sortedMarkers: t,
                    value: n,
                    min: i,
                    max: r
                } = this.state, {
                    asValueChanges: s,
                    onValueChange: a,
                    stickToMarkers: o
                } = this.props, l = {};
                if (o) {
                    let i = t.indexOf(n);
                    if (i < 0) return;
                    let r = i + e,
                        s = t[r];
                    if (null == s) return;
                    l.value = s, l.closestMarkerIndex = r, l.newClosestIndex = r
                } else l.value = _().clamp(n + e, i, r);
                this.setState(l), l.value !== this.state.value && (null == s || s(l.value), null == a || a(l.value))
            }), S(this, "handleContainerMouseDown", e => {
                let t;
                let {
                    disabled: n,
                    maxValue: i,
                    minValue: r,
                    asValueChanges: s,
                    onValueChange: a,
                    stickToMarkers: o
                } = this.props, {
                    sortedMarkers: l,
                    markerPositions: u
                } = this.state;
                if (n) return;
                let {
                    clientX: d,
                    currentTarget: _
                } = e;
                if (!(0, c.isElement)(_)) return;
                let {
                    left: E,
                    width: I
                } = _.getBoundingClientRect(), T = (d - E) / I;
                if (o) {
                    let {
                        nextClosestMarkerIndex: e
                    } = u.reduce((e, t, n) => {
                        let i = Math.abs(t / 100 - T);
                        return i <= e.smallestDelta ? {
                            smallestDelta: i,
                            nextClosestMarkerIndex: n
                        } : e
                    }, {
                        smallestDelta: 1,
                        nextClosestMarkerIndex: -1
                    });
                    if (-1 === e) return;
                    this.setState({
                        closestMarkerIndex: e
                    }), t = l[e]
                } else t = r + (i - r) * T, this.setState({
                    value: t
                }), this.handleMouseDown(e);
                null != a && a(t), null != s && s(t)
            }), S(this, "handleKeyDown", e => {
                let {
                    disabled: t,
                    orientation: n,
                    keyboardStep: i = 1
                } = this.props;
                if (t) return;
                let {
                    key: r
                } = e, s = [], a = [];
                switch (n) {
                    case "horizontal":
                        s = ["ArrowRight"], a = ["ArrowLeft"];
                        break;
                    case "vertical":
                        s = ["ArrowUp"], a = ["ArrowDown"];
                        break;
                    default:
                        s = ["ArrowRight", "ArrowUp"], a = ["ArrowLeft", "ArrowDown"]
                }
                a.includes(r) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : s.includes(r) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i))
            }), S(this, "handleMouseDown", e => {
                var t, n;
                if (this.props.disabled) return;
                e.stopPropagation();
                let {
                    current: i
                } = this.containerRef;
                if (null == i || null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mousemove", this.handleMouseMove, !0), null == i || null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("mouseup", this.handleMouseUp, !0), !(0, c.isElement)(i)) throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: i.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex
                })
            }), S(this, "handleMouseUp", e => {
                e.stopPropagation(), this.reset();
                let {
                    onValueChange: t,
                    stickToMarkers: n
                } = this.props, {
                    newClosestIndex: i
                } = this.state;
                n && null != i ? (null == t || t(this.state.sortedMarkers[i]), this.setState({
                    newClosestIndex: null,
                    closestMarkerIndex: i
                })) : null == t || t(this.state.value), this.setState({
                    active: !1
                })
            }), S(this, "handleMouseMove", e => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
            }), S(this, "onFocus", () => {
                this.setState({
                    focused: !0
                })
            }), S(this, "onBlur", () => {
                this.setState({
                    focused: !1
                })
            }), S(this, "moveSmoothly", e => {
                let {
                    minValue: t,
                    maxValue: n,
                    asValueChanges: i
                } = this.props, {
                    boundingRect: r
                } = this.state;
                if (null == r) return;
                let {
                    left: s,
                    right: a
                } = r, o = n - t, l = Math.min(Math.max(t + (e.clientX - s) / (a - s) * o, t), n);
                null == i || i(l), this.setState({
                    value: l
                })
            }), this.state = {
                active: !1,
                focused: !1,
                ...A(e)
            }
        }
    }
    S(m, "defaultProps", {
        initialValue: 10,
        minValue: 0,
        maxValue: 100,
        keyboardStep: 1,
        handleSize: 10,
        disabled: !1,
        stickToMarkers: !1,
        fillStyles: {}
    })
}