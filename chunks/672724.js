function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("458960"),
        o = n("702747");
    let u = {
            friction: 14,
            tension: 200
        },
        d = {
            DURATION: "DURATION",
            VOLUME: "VOLUME"
        };

    function c(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    class f extends l.Component {
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
                animatedProgress: l
            } = this.state;
            !n && t.dragging && i.setValue(l._value)
        }
        setGrabber(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    animatedProgress: n
                } = this.state;
            t ? r.default.spring(n, {
                toValue: e,
                ...u
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
                left: l,
                width: a,
                bottom: s,
                height: r
            } = n.getBoundingClientRect(), o = i === d.VOLUME ? (s - t) / r : (e - l) / a;
            return Math.min(1, Math.max(0, o))
        }
        render() {
            let {
                buffers: e,
                type: t,
                className: n,
                sliderClassName: l
            } = this.props, {
                dragging: a,
                previewWidth: u,
                animatedProgress: c
            } = this.state;
            return (0, i.jsx)("div", {
                className: s(n, t === d.VOLUME ? o.vertical : o.horizontal),
                children: (0, i.jsx)("div", {
                    className: s(l, a ? o.mediaBarInteractionDragging : o.mediaBarInteraction, t === d.VOLUME ? o.mediaBarInteractionVolume : null),
                    onMouseDown: this.handleDragStart,
                    onMouseMove: this.handleMouseMove,
                    ref: e => this.wrapper = e,
                    children: (0, i.jsxs)("div", {
                        className: s(o.mediaBarWrapper, t === d.VOLUME ? o.mediaBarWrapperVolume : null),
                        children: [null != e ? e.map((e, t) => {
                            let [n, l] = e;
                            return (0, i.jsx)("div", {
                                className: o.buffer,
                                style: {
                                    width: "".concat(100 * l, "%"),
                                    left: "".concat(100 * n, "%")
                                }
                            }, t)
                        }) : null, t === d.DURATION ? (0, i.jsx)(r.default.div, {
                            className: o.mediaBarPreview,
                            style: {
                                width: u.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            }
                        }) : null, (0, i.jsx)(r.default.div, {
                            className: o.mediaBarProgress,
                            style: {
                                width: c.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0%", "100%"]
                                })
                            },
                            children: (0, i.jsx)("span", {
                                className: o.mediaBarGrabber
                            })
                        }), t === d.DURATION ? (0, i.jsx)(r.default.div, {
                            ref: this.setBubbleRef,
                            className: o.bubble,
                            style: {
                                left: (a ? c : u).interpolate({
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
            super(...e), this.state = {
                animatedProgress: new r.default.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new r.default.Value(0)
            }, this.handlePreviewChange = () => {
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
                !t && null != e && (e.innerText = c(n._value * i))
            }, this.handleAnimatedChange = () => {
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
                t && null != e && (e.innerText = c(n._value * i))
            }, this.handleMouseMove = e => {
                let {
                    dragging: t,
                    previewWidth: n
                } = this.state;
                if (t) return;
                let {
                    clientX: i,
                    clientY: l
                } = e;
                n.setValue(this.calculatePercentage(i, l))
            }, this.handleDragMove = e => {
                let {
                    onDrag: t,
                    type: n
                } = this.props, {
                    clientX: i,
                    clientY: l
                } = e;
                t(this.calculatePercentage(i, l), n)
            }, this.handleDragStart = e => {
                let {
                    onDragStart: t,
                    onDrag: n,
                    type: i,
                    currentWindow: l
                } = this.props, {
                    clientX: a,
                    clientY: s
                } = e;
                if (e.preventDefault(), null == this.wrapper) return;
                let {
                    left: r,
                    width: o
                } = this.wrapper.getBoundingClientRect();
                this.setState({
                    dragging: !0,
                    offsetLeft: r,
                    offsetWidth: o
                }, () => {
                    t(i), n(this.calculatePercentage(a, s), i), l.removeEventListener("mouseup", this.handleDragEnd, !1), l.removeEventListener("mousemove", this.handleDragMove, !1), l.addEventListener("mouseup", this.handleDragEnd, !1), l.addEventListener("mousemove", this.handleDragMove, !1)
                })
            }, this.handleDragEnd = () => {
                let {
                    onDragEnd: e,
                    currentWindow: t
                } = this.props;
                e(), t.removeEventListener("mouseup", this.handleDragEnd, !1), t.removeEventListener("mousemove", this.handleDragMove, !1), this.setState({
                    dragging: !1
                })
            }, this.setBubbleRef = e => {
                null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
            }
        }
    }
    f.Types = d, f.defaultProps = {
        currentWindow: window
    };
    var m = f
}