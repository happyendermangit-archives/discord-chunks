function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackgroundTransition: function() {
            return f
        }
    });
    var i, r = n("735250"),
        s = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("748780"),
        u = n("846519"),
        d = n("215569"),
        _ = n("285952"),
        c = n("981631"),
        E = n("684929");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let T = {
        [c.ChannelLayouts.NORMAL]: E.normal,
        [c.ChannelLayouts.MINIMUM]: E.minimum,
        [c.ChannelLayouts.NO_CHAT]: E.noChat,
        [c.ChannelLayouts.FULL_SCREEN]: E.fullScreen
    };
    class f extends s.PureComponent {
        componentDidAppear() {
            this.state.animation.setValue(1)
        }
        componentWillEnter(e) {
            let {
                animation: t
            } = this.state;
            t.setValue(0), l.default.spring(t, {
                toValue: 1,
                overshootClamping: !0
            }).start(e)
        }
        componentWillLeave(e) {
            l.default.spring(this.state.animation, {
                toValue: 0,
                overshootClamping: !0
            }).start(e)
        }
        render() {
            return (0, r.jsx)(l.default.div, {
                className: o()(E.videoBackgroundTransition, this.props.className),
                style: {
                    opacity: this.state.animation
                },
                children: this.props.children
            })
        }
        constructor(e) {
            super(e), this.state = {
                animation: new l.default.Value(0)
            }
        }
    }
    class S extends(i = s.PureComponent) {
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
            } = this.props, i = "".concat(n, "-").concat(null != t ? t : "");
            return (0, r.jsx)(d.TransitionGroup, {
                className: E.videoBackground,
                component: "div",
                children: (0, r.jsx)(f, {
                    children: e
                }, i)
            })
        }
        renderContents() {
            let {
                top: e,
                center: t,
                bottom: n,
                layout: i,
                focused: s
            } = this.props, {
                idle: a
            } = this.state;
            return (0, r.jsx)(_.default, {
                className: o()(E.video, T[i], {
                    [E.idle]: a
                }),
                direction: _.default.Direction.VERTICAL,
                justify: _.default.Justify.CENTER,
                children: (0, r.jsxs)(_.default, {
                    className: E.videoWrapper,
                    direction: _.default.Direction.VERTICAL,
                    children: [this.renderBackground(), (0, r.jsxs)(_.default, {
                        className: o()(E.videoInner, {
                            [E.focused]: s
                        }),
                        direction: _.default.Direction.VERTICAL,
                        justify: _.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(_.default, {
                            className: E.videoTop,
                            grow: 0,
                            children: e
                        }), (0, r.jsx)(_.default, {
                            className: E.videoCenter,
                            children: t
                        }), (0, r.jsx)(_.default, {
                            className: E.videoBottom,
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
            return (0, r.jsx)("div", {
                className: o()(E.videoHeight, T[e], t, {
                    [E.animated]: n
                }),
                children: this.renderContents()
            })
        }
        constructor(e) {
            super(e), I(this, "_timeout", new u.Timeout), I(this, "handleMouseEvent", () => {
                let {
                    layout: e
                } = this.props;
                (e === c.ChannelLayouts.FULL_SCREEN || e === c.ChannelLayouts.NO_CHAT) && (this._timeout.start(3e3, () => this.setState({
                    idle: !0
                })), this.state.idle && this.setState({
                    idle: !1
                }))
            }), this.state = {
                idle: !1,
                backgroundAnimation: new l.default.Value(0),
                layoutProp: e.layout
            }
        }
    }
    I(S, "defaultProps", {
        layout: c.ChannelLayouts.MINIMUM,
        animated: !0
    })
}