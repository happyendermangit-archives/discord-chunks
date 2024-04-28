function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("481060"),
        u = n("189595"),
        d = n("632184"),
        _ = n("82965"),
        c = n("326757"),
        E = n("689938"),
        I = n("727514");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class f extends(i = s.PureComponent) {
        componentDidMount() {
            this.updateMediaBar()
        }
        componentDidUpdate(e) {
            (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
        }
        updateMediaBar() {
            let {
                muted: e,
                value: t,
                maxValue: n
            } = this.props, i = this._mediaBar.current;
            null != i && (e ? i.setGrabber(0) : i.setGrabber(t / n))
        }
        render() {
            let {
                iconClassName: e,
                className: t,
                sliderWrapperClassName: n,
                sliderClassName: i,
                currentWindow: s,
                muted: a,
                minValue: T,
                maxValue: f,
                value: S,
                onVolumeShow: h,
                onVolumeHide: A
            } = this.props, {
                hovered: m,
                focused: N,
                dragging: p
            } = this.state, O = d.default;
            return a || S === T ? O = _.default : S < f / 2 && (O = c.default), (0, r.jsxs)("div", {
                className: o()(t, I.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({
                        hovered: !0
                    }), null == h || h()
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                        this.setState({
                            hovered: !1
                        }), null == A || A()
                    }, 150)
                },
                onFocus: () => this.setState({
                    focused: !0
                }),
                onBlur: () => this.setState({
                    focused: !1
                }),
                onKeyDown: this.handleKeyDown,
                children: [(0, r.jsx)("div", {
                    className: o()(I.volumeButtonSlider, n, {
                        [I.sliderVisible]: m || N || p
                    }),
                    onMouseEnter: () => {
                        clearTimeout(this._hoverTimeout), this.setState({
                            hovered: !0
                        })
                    },
                    onMouseLeave: () => {
                        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
                            hovered: !1
                        }), 150)
                    },
                    children: (0, r.jsx)(u.default, {
                        sliderClassName: i,
                        type: u.default.Types.VOLUME,
                        value: S / f,
                        onDrag: this.handleValueChange,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        currentWindow: s,
                        ref: this._mediaBar
                    })
                }), (0, r.jsx)(l.Button, {
                    className: I.volumeButton,
                    "aria-label": E.default.Messages.CONTROL_VOLUME,
                    size: l.Button.Sizes.NONE,
                    look: l.Button.Looks.BLANK,
                    onClick: this.handleToggleMute,
                    children: (0, r.jsx)(O, {
                        className: e
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), T(this, "_mediaBar", s.createRef()), T(this, "_hoverTimeout", void 0), T(this, "state", {
                hovered: !1,
                focused: !1,
                dragging: !1
            }), T(this, "handleValueChange", e => {
                let {
                    maxValue: t,
                    onValueChange: n
                } = this.props;
                null == n || n(e * t)
            }), T(this, "handleToggleMute", () => {
                let {
                    onToggleMute: e
                } = this.props;
                null == e || e()
            }), T(this, "handleKeyDown", e => {
                let {
                    minValue: t,
                    value: n,
                    maxValue: i,
                    onValueChange: r
                } = this.props, s = .05 * (i - t);
                switch (e.key) {
                    case "ArrowUp":
                        e.stopPropagation(), e.preventDefault(), null == r || r(Math.min(i, n + s));
                        break;
                    case "ArrowDown":
                        e.stopPropagation(), e.preventDefault(), null == r || r(Math.max(t, n - s))
                }
            }), T(this, "handleDragStart", () => {
                this.setState({
                    dragging: !0
                })
            }), T(this, "handleDragEnd", () => {
                this.setState({
                    dragging: !1
                })
            }), T(this, "blur", () => {
                this.setState({
                    focused: !1
                })
            })
        }
    }
    T(f, "defaultProps", {
        minValue: 0,
        maxValue: 100,
        handleSize: 16
    }), t.default = f
}