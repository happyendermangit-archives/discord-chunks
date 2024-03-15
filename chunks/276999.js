function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackgroundTransition: function() {
            return m
        }
    });
    var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        o = n.n(i),
        r = n("458960"),
        s = n("862337"),
        d = n("266491"),
        u = n("145131"),
        c = n("49111"),
        p = n("758546");
    let f = {
        [c.ChannelLayouts.NORMAL]: p.normal,
        [c.ChannelLayouts.MINIMUM]: p.minimum,
        [c.ChannelLayouts.NO_CHAT]: p.noChat,
        [c.ChannelLayouts.FULL_SCREEN]: p.fullScreen
    };
    class m extends l.PureComponent {
        componentDidAppear() {
            this.state.animation.setValue(1)
        }
        componentWillEnter(e) {
            let {
                animation: t
            } = this.state;
            t.setValue(0), r.default.spring(t, {
                toValue: 1,
                overshootClamping: !0
            }).start(e)
        }
        componentWillLeave(e) {
            r.default.spring(this.state.animation, {
                toValue: 0,
                overshootClamping: !0
            }).start(e)
        }
        render() {
            return (0, a.jsx)(r.default.div, {
                className: o(p.videoBackgroundTransition, this.props.className),
                style: {
                    opacity: this.state.animation
                },
                children: this.props.children
            })
        }
        constructor(e) {
            super(e), this.state = {
                animation: new r.default.Value(0)
            }
        }
    }
    class h extends l.PureComponent {
        componentDidMount() {
            document.addEventListener("mousedown", this.handleMouseEvent, !0), document.addEventListener("mousemove", this.handleMouseEvent, !0)
        }
        componentWillUnmount() {
            document.removeEventListener("mousedown", this.handleMouseEvent, !0), document.removeEventListener("mousemove", this.handleMouseEvent, !0), this._timeout.stop()
        }
        static getDerivedStateFromProps(e, t) {
            if (e.layout !== t.layoutProp) return t.idle ? {
                idle: !1,
                layoutProp: e.layout
            } : {
                layoutProp: e.layout
            };
            return null
        }
        componentDidUpdate(e) {
            this.props.layout !== e.layout && this._timeout.stop()
        }
        renderBackground() {
            let {
                background: e,
                backgroundKey: t,
                layout: n
            } = this.props, l = "".concat(n, "-").concat(null != t ? t : "");
            return (0, a.jsx)(d.TransitionGroup, {
                className: p.videoBackground,
                component: "div",
                children: (0, a.jsx)(m, {
                    children: e
                }, l)
            })
        }
        renderContents() {
            let {
                top: e,
                center: t,
                bottom: n,
                layout: l,
                focused: i
            } = this.props, {
                idle: r
            } = this.state;
            return (0, a.jsx)(u.default, {
                className: o(p.video, f[l], {
                    [p.idle]: r
                }),
                direction: u.default.Direction.VERTICAL,
                justify: u.default.Justify.CENTER,
                children: (0, a.jsxs)(u.default, {
                    className: p.videoWrapper,
                    direction: u.default.Direction.VERTICAL,
                    children: [this.renderBackground(), (0, a.jsxs)(u.default, {
                        className: o(p.videoInner, {
                            [p.focused]: i
                        }),
                        direction: u.default.Direction.VERTICAL,
                        justify: u.default.Justify.BETWEEN,
                        children: [(0, a.jsx)(u.default, {
                            className: p.videoTop,
                            grow: 0,
                            children: e
                        }), (0, a.jsx)(u.default, {
                            className: p.videoCenter,
                            children: t
                        }), (0, a.jsx)(u.default, {
                            className: p.videoBottom,
                            grow: 0,
                            children: n
                        })]
                    })]
                })
            })
        }
        render() {
            let {
                layout: e,
                className: t,
                animated: n
            } = this.props;
            return (0, a.jsx)("div", {
                className: o(p.videoHeight, f[e], t, {
                    [p.animated]: n
                }),
                children: this.renderContents()
            })
        }
        constructor(e) {
            super(e), this._timeout = new s.Timeout, this.handleMouseEvent = () => {
                let {
                    layout: e
                } = this.props;
                (e === c.ChannelLayouts.FULL_SCREEN || e === c.ChannelLayouts.NO_CHAT) && (this._timeout.start(3e3, () => this.setState({
                    idle: !0
                })), this.state.idle && this.setState({
                    idle: !1
                }))
            }, this.state = {
                idle: !1,
                backgroundAnimation: new r.default.Value(0),
                layoutProp: e.layout
            }
        }
    }
    h.defaultProps = {
        layout: c.ChannelLayouts.MINIMUM,
        animated: !0
    }
}