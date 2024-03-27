function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("672724"),
        u = n("368121"),
        d = n("570511"),
        c = n("974261"),
        f = n("782340"),
        m = n("851535");
    class p extends l.PureComponent {
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
                sliderClassName: l,
                currentWindow: a,
                muted: p,
                minValue: h,
                maxValue: x,
                value: E,
                onVolumeShow: y,
                onVolumeHide: g
            } = this.props, {
                hovered: S,
                focused: C,
                dragging: T
            } = this.state, _ = u.default;
            return p || E === h ? _ = d.default : E < x / 2 && (_ = c.default), (0, i.jsxs)("div", {
                className: s(t, m.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({
                        hovered: !0
                    }), null == y || y()
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
                        this.setState({
                            hovered: !1
                        }), null == g || g()
                    }, 150)
                },
                onFocus: () => this.setState({
                    focused: !0
                }),
                onBlur: () => this.setState({
                    focused: !1
                }),
                onKeyDown: this.handleKeyDown,
                children: [(0, i.jsx)("div", {
                    className: s(m.volumeButtonSlider, n, {
                        [m.sliderVisible]: S || C || T
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
                    children: (0, i.jsx)(o.default, {
                        sliderClassName: l,
                        type: o.default.Types.VOLUME,
                        value: E / x,
                        onDrag: this.handleValueChange,
                        onDragStart: this.handleDragStart,
                        onDragEnd: this.handleDragEnd,
                        currentWindow: a,
                        ref: this._mediaBar
                    })
                }), (0, i.jsx)(r.Button, {
                    className: m.volumeButton,
                    "aria-label": f.default.Messages.CONTROL_VOLUME,
                    size: r.Button.Sizes.NONE,
                    look: r.Button.Looks.BLANK,
                    onClick: this.handleToggleMute,
                    children: (0, i.jsx)(_, {
                        className: e
                    })
                })]
            })
        }
        constructor(...e) {
            super(...e), this._mediaBar = l.createRef(), this.state = {
                hovered: !1,
                focused: !1,
                dragging: !1
            }, this.handleValueChange = e => {
                let {
                    maxValue: t,
                    onValueChange: n
                } = this.props;
                null == n || n(e * t)
            }, this.handleToggleMute = () => {
                let {
                    onToggleMute: e
                } = this.props;
                null == e || e()
            }, this.handleKeyDown = e => {
                let {
                    minValue: t,
                    value: n,
                    maxValue: i,
                    onValueChange: l
                } = this.props, a = .05 * (i - t);
                switch (e.key) {
                    case "ArrowUp":
                        e.stopPropagation(), e.preventDefault(), null == l || l(Math.min(i, n + a));
                        break;
                    case "ArrowDown":
                        e.stopPropagation(), e.preventDefault(), null == l || l(Math.max(t, n - a))
                }
            }, this.handleDragStart = () => {
                this.setState({
                    dragging: !0
                })
            }, this.handleDragEnd = () => {
                this.setState({
                    dragging: !1
                })
            }, this.blur = () => {
                this.setState({
                    focused: !1
                })
            }
        }
    }
    p.defaultProps = {
        minValue: 0,
        maxValue: 100,
        handleSize: 16
    };
    var h = p
}