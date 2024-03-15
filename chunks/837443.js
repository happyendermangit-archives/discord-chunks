function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slider: function() {
            return p
        }
    }), n("808653"), n("70102");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("917351"),
        d = n.n(u),
        c = n("118810"),
        f = n("718776"),
        _ = n("414055"),
        E = n("206230"),
        h = n("455298");

    function g(e, t) {
        let n = 0;
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if (e === s) return i;
            if (e < s) {
                if (0 === n || s - e < n) return i;
                return i - 1
            }
            n = e - s
        }
        return null
    }(s = i || (i = {}))[s.ABOVE = 0] = "ABOVE", s[s.BELOW = 1] = "BELOW";

    function m(e) {
        let t = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
        return {
            value: t,
            initialValueProp: e.initialValue,
            newClosestIndex: null,
            ... function(e) {
                let {
                    markers: t,
                    initialValue: n,
                    minValue: i,
                    maxValue: s,
                    equidistant: r
                } = e, a = [], o = [];
                if (null == t) return {
                    min: i,
                    max: s,
                    range: s - i,
                    sortedMarkers: a,
                    markerPositions: o
                };
                a = t.sort((e, t) => e - t);
                let l = g(n, a),
                    u = a[0],
                    d = a[a.length - 1],
                    c = d - u;
                if (r) {
                    let e = 100 / (a.length - 1);
                    o = a.map((t, n) => n * e)
                } else {
                    let e = e => 100 * (e - u) / c;
                    o = a.map(t => e(t))
                }
                return {
                    min: u,
                    max: d,
                    range: c,
                    sortedMarkers: a,
                    markerPositions: o,
                    closestMarkerIndex: l
                }
            }(e)
        }
    }
    class p extends a.PureComponent {
        static getDerivedStateFromProps(e, t) {
            return e.initialValue !== t.initialValueProp ? {
                ...m(e),
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
                sortedMarkers: s,
                markerPositions: a,
                closestMarkerIndex: o,
                newClosestIndex: u,
                min: d,
                max: c
            } = this.state, {
                disabled: g,
                stickToMarkers: m,
                className: p,
                children: S,
                barStyles: v,
                fillStyles: T,
                mini: I,
                hideBubble: A,
                defaultValue: C,
                orientation: y,
                onValueRender: N,
                renderMarker: R,
                getAriaValueText: O,
                barClassName: D,
                grabberClassName: P,
                grabberStyles: L = {},
                markerPosition: M = 0,
                "aria-hidden": b,
                "aria-label": U,
                "aria-labelledby": w,
                "aria-describedby": k
            } = this.props, V = 0;
            m ? null != a && (null != u ? V = a[u] : null != o && (V = a[o])) : V = this.scaleValue(t);
            let G = "".concat(V, "%"),
                F = null != a && null != s ? a.map((e, t) => {
                    let n = s[t],
                        i = null != C && C === n,
                        a = this.renderMark(n);
                    return (0, r.jsx)("div", {
                        className: l(h.mark, {
                            [h.defaultValue]: i,
                            [h.markAbove]: 0 === M,
                            [h.markBelow]: 1 === M
                        }),
                        style: {
                            left: "".concat(e, "%")
                        },
                        children: null != R ? R(n) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("div", {
                                className: h.markValue,
                                children: a
                            }), (0, r.jsx)("div", {
                                className: h["markDash".concat(null == a ? "simple" : "")]
                            })]
                        })
                    }, t)
                }) : null,
                x = null != N ? N(t) : "".concat(V.toFixed(0), "%"),
                B = null !== (e = null == O ? void 0 : O(t)) && void 0 !== e ? e : void 0;
            return (0, r.jsx)(f.FocusRing, {
                focusTarget: this.containerRef,
                ringTarget: this.grabberRef,
                children: (0, r.jsxs)("div", {
                    className: l(h.slider, p, {
                        [h.disabled]: g,
                        [h.mini]: I
                    }),
                    "aria-valuemin": d,
                    "aria-valuemax": c,
                    "aria-valuenow": t,
                    "aria-disabled": g,
                    "aria-orientation": y,
                    "aria-hidden": b,
                    "aria-label": U,
                    "aria-labelledby": w,
                    "aria-describedby": k,
                    "aria-valuetext": B,
                    role: "slider",
                    tabIndex: 0,
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContainerMouseDown,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    ref: this.containerRef,
                    children: [(0, r.jsx)("div", {
                        className: h.track,
                        children: F
                    }), (0, r.jsx)("div", {
                        className: l(h.bar, D),
                        style: v,
                        children: (0, r.jsx)("div", {
                            className: h.barFill,
                            style: {
                                ...T,
                                width: G
                            }
                        })
                    }), S, (0, r.jsx)("div", {
                        className: h.track,
                        children: (0, r.jsx)(_.Tooltip, {
                            color: _.Tooltip.Colors.GREY,
                            hideOnClick: !1,
                            text: A || m ? null : x,
                            forceOpen: n || i && E.default.keyboardModeEnabled,
                            children: e => (0, r.jsx)("div", {
                                ...e,
                                className: l(h.grabber, P),
                                style: {
                                    ...L,
                                    left: G
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
                closestMarkerIndex: s,
                markerPositions: r,
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
                c = r[s] + 100 * (d / (u - l));
            if (this.props.equidistant) t = g(c, r);
            else {
                let e = this.unscaleValue(c);
                t = g(e, a)
            }
            null != t && (null == o || o(a[t])), this.setState({
                newClosestIndex: t
            })
        }
        constructor(e) {
            super(e), this.containerRef = a.createRef(), this.grabberRef = a.createRef(), this.moveGrabber = e => {
                let {
                    sortedMarkers: t,
                    value: n,
                    min: i,
                    max: s
                } = this.state, {
                    asValueChanges: r,
                    onValueChange: a,
                    stickToMarkers: o
                } = this.props, l = {};
                if (o) {
                    let i = t.indexOf(n);
                    if (i < 0) return;
                    let s = i + e,
                        r = t[s];
                    if (null == r) return;
                    l.value = r, l.closestMarkerIndex = s, l.newClosestIndex = s
                } else l.value = d.clamp(n + e, i, s);
                this.setState(l), l.value !== this.state.value && (null == r || r(l.value), null == a || a(l.value))
            }, this.handleContainerMouseDown = e => {
                let t;
                let {
                    disabled: n,
                    maxValue: i,
                    minValue: s,
                    asValueChanges: r,
                    onValueChange: a,
                    stickToMarkers: o
                } = this.props, {
                    sortedMarkers: l,
                    markerPositions: u
                } = this.state;
                if (n) return;
                let {
                    clientX: d,
                    currentTarget: f
                } = e;
                if (!(0, c.isElement)(f)) return;
                let {
                    left: _,
                    width: E
                } = f.getBoundingClientRect(), h = (d - _) / E;
                if (o) {
                    let {
                        nextClosestMarkerIndex: e
                    } = u.reduce((e, t, n) => {
                        let i = Math.abs(t / 100 - h);
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
                } else t = s + (i - s) * h, this.setState({
                    value: t
                }), this.handleMouseDown(e);
                null != a && a(t), null != r && r(t)
            }, this.handleKeyDown = e => {
                let {
                    disabled: t,
                    orientation: n,
                    keyboardStep: i = 1
                } = this.props;
                if (t) return;
                let {
                    key: s
                } = e, r = [], a = [];
                switch (n) {
                    case "horizontal":
                        r = ["ArrowRight"], a = ["ArrowLeft"];
                        break;
                    case "vertical":
                        r = ["ArrowUp"], a = ["ArrowDown"];
                        break;
                    default:
                        r = ["ArrowRight", "ArrowUp"], a = ["ArrowLeft", "ArrowDown"]
                }
                a.includes(s) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : r.includes(s) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i))
            }, this.handleMouseDown = e => {
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
            }, this.handleMouseUp = e => {
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
            }, this.handleMouseMove = e => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
            }, this.onFocus = () => {
                this.setState({
                    focused: !0
                })
            }, this.onBlur = () => {
                this.setState({
                    focused: !1
                })
            }, this.moveSmoothly = e => {
                let {
                    minValue: t,
                    maxValue: n,
                    asValueChanges: i
                } = this.props, {
                    boundingRect: s
                } = this.state;
                if (null == s) return;
                let {
                    left: r,
                    right: a
                } = s, o = n - t, l = e.clientX - r, u = Math.min(Math.max(t + l / (a - r) * o, t), n);
                null == i || i(u), this.setState({
                    value: u
                })
            }, this.state = {
                active: !1,
                focused: !1,
                ...m(e)
            }
        }
    }
    p.defaultProps = {
        initialValue: 10,
        minValue: 0,
        maxValue: 100,
        keyboardStep: 1,
        handleSize: 10,
        disabled: !1,
        stickToMarkers: !1,
        fillStyles: {}
    }
}