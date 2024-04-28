function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("748780"),
        u = n("996785");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = {
            friction: 14,
            tension: 200
        },
        c = {
            DURATION: "DURATION",
            VOLUME: "VOLUME"
        };

    function E(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    class I extends(i = s.Component) {
        componentDidMount() {
            let {
                previewWidth: e,
                animatedProgress: t
            } = this.state;
            this._previewId = e.addListener(this.handlePreviewChange), this._progressId = t.addListener(this.handleAnimatedChange)
        }
        componentWillUnmount() {
            let {
                previewWidth: e,
                animatedProgress: t
            } = this.state;
            e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, !1), window.removeEventListener("mousemove", this.handleDragMove, !1)
        }
        componentDidUpdate(e, t) {
            let {
                dragging: n,
                previewWidth: i,
                animatedProgress: r
            } = this.state;
            !n && t.dragging && i.setValue(r._value)
        }
        setGrabber(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    animatedProgress: n
                } = this.state;
            t ? l.default.spring(n, {
                toValue: e,
                ..._
            }).start() : n.setValue(e)
        }
        calculatePercentage(e, t) {
            let {
                wrapper: n,
                props: {
                    type: i
                }
            } = this;
            if (null == n) return 0;
            let {
                left: r,
                width: s,
                bottom: a,
                height: o
            } = n.getBoundingClientRect();
            return Math.min(1, Math.max(0, i === c.VOLUME ? (a - t) / o : (e - r) / s))
        }
        render() {
            let {
                buffers: e,
                type: t,
                className: n,
                sliderClassName: i
            } = this.props, {
                dragging: s,
                previewWidth: a,
                animatedProgress: d
            } = this.state;
            return (0, r.jsx)("div", {
                className: o()(n, t === c.VOLUME ? u.vertical : u.horizontal),
                children: (0, r.jsx)("div", {
                    className: o()(i, s ? u.mediaBarInteractionDragging : u.mediaBarInteraction, t === c.VOLUME ? u.mediaBarInteractionVolume : null),
                    onMouseDown: this.handleDragStart,
                    onMouseMove: this.handleMouseMove,
                    ref: e => this.wrapper = e,
                    children: (0, r.jsxs)("div", {
                        className: o()(u.mediaBarWrapper, t === c.VOLUME ? u.mediaBarWrapperVolume : null),
                        children: [null != e ? e.map((e, t) => {
                            let [n, i] = e;
                            return (0, r.jsx)("div", {
                                className: u.buffer,
                                style: {
                                    width: "".concat(100 * i, "%"),
                                    left: "".concat(100 * n, "%")
                                }
                            }, t)
                        }) : null, t === c.DURATION ? (0, r.jsx)(l.default.div, {
                            className: u.mediaBarPreview,
                            style: {
                                width: a.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            }
                        }) : null, (0, r.jsx)(l.default.div, {
                            className: u.mediaBarProgress,
                            style: {
                                width: d.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            },
                            children: (0, r.jsx)("span", {
                                className: u.mediaBarGrabber
                            })
                        }), t === c.DURATION ? (0, r.jsx)(l.default.div, {
                            ref: this.setBubbleRef,
                            className: u.bubble,
                            style: {
                                left: (s ? d : a).interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            }
                        }) : null]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), d(this, "state", {
                animatedProgress: new l.default.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new l.default.Value(0)
            }), d(this, "wrapper", void 0), d(this, "bubble", void 0), d(this, "_previewId", void 0), d(this, "_progressId", void 0), d(this, "handlePreviewChange", () => {
                let {
                    bubble: e,
                    state: {
                        dragging: t,
                        previewWidth: n
                    },
                    props: {
                        value: i
                    }
                } = this;
                !t && null != e && (e.innerText = E(n._value * i))
            }), d(this, "handleAnimatedChange", () => {
                let {
                    bubble: e,
                    state: {
                        dragging: t,
                        animatedProgress: n
                    },
                    props: {
                        value: i
                    }
                } = this;
                t && null != e && (e.innerText = E(n._value * i))
            }), d(this, "handleMouseMove", e => {
                let {
                    dragging: t,
                    previewWidth: n
                } = this.state;
                if (t) return;
                let {
                    clientX: i,
                    clientY: r
                } = e;
                n.setValue(this.calculatePercentage(i, r))
            }), d(this, "handleDragMove", e => {
                let {
                    onDrag: t,
                    type: n
                } = this.props, {
                    clientX: i,
                    clientY: r
                } = e;
                t(this.calculatePercentage(i, r), n)
            }), d(this, "handleDragStart", e => {
                let {
                    onDragStart: t,
                    onDrag: n,
                    type: i,
                    currentWindow: r
                } = this.props, {
                    clientX: s,
                    clientY: a
                } = e;
                if (e.preventDefault(), null == this.wrapper) return;
                let {
                    left: o,
                    width: l
                } = this.wrapper.getBoundingClientRect();
                this.setState({
                    dragging: !0,
                    offsetLeft: o,
                    offsetWidth: l
                }, () => {
                    t(i), n(this.calculatePercentage(s, a), i), r.removeEventListener("mouseup", this.handleDragEnd, !1), r.removeEventListener("mousemove", this.handleDragMove, !1), r.addEventListener("mouseup", this.handleDragEnd, !1), r.addEventListener("mousemove", this.handleDragMove, !1)
                })
            }), d(this, "handleDragEnd", () => {
                let {
                    onDragEnd: e,
                    currentWindow: t
                } = this.props;
                e(), t.removeEventListener("mouseup", this.handleDragEnd, !1), t.removeEventListener("mousemove", this.handleDragMove, !1), this.setState({
                    dragging: !1
                })
            }), d(this, "setBubbleRef", e => {
                null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
            })
        }
    }
    d(I, "Types", c), d(I, "defaultProps", {
        currentWindow: window
    }), t.default = I
}