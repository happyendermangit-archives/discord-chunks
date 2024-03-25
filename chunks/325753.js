function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("817736"),
        l = n("458960"),
        i = n("118810"),
        u = n("49111");
    let o = (e, t) => {
        let {
            x: n,
            y: a
        } = e, {
            x: r,
            y: s
        } = t;
        return Math.pow(n - r, 2) + Math.pow(a - s, 2)
    };
    class d extends r.PureComponent {
        componentDidMount() {
            let {
                initialX: e,
                initialY: t
            } = this.props;
            this.setPosition(e, t)
        }
        componentWillUnmount() {
            this._removeListeners()
        }
        animateToPosition(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 ? arguments[3] : void 0,
                r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
            r && this.grabDimensions();
            let s = this.translate(e, t);
            l.default.spring(this.state.position, {
                toValue: {
                    x: s.x,
                    y: s.y
                },
                ...n
            }).start(a)
        }
        setPosition(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            n && this.grabDimensions();
            let a = this.translate(e, t);
            this.state.position.setValue({
                x: a.x,
                y: a.y
            })
        }
        grabDimensions() {
            let e = (0, s.findDOMNode)(this._ref);
            (0, i.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
        }
        translate(e, t) {
            let {
                maxX: n,
                maxY: a
            } = this.props;
            return e < 0 ? e = 0 : e > n - this._width && (e = n - this._width), t < 0 ? t = 0 : t > a - this._height && (t = a - this._height), {
                x: e,
                y: t
            }
        }
        render() {
            let {
                dragging: e,
                position: t
            } = this.state, {
                className: n,
                children: r
            } = this.props, s = [0, 1], i = ["0px", "1px"], u = l.default.accelerate({
                pointerEvents: e ? "none" : "auto",
                transform: [{
                    translateX: t.x.interpolate({
                        inputRange: s,
                        outputRange: i
                    })
                }, {
                    translateY: t.y.interpolate({
                        inputRange: s,
                        outputRange: i
                    })
                }],
                ...this.props.style
            });
            return (0, a.jsx)(l.default.div, {
                ref: this.handleSetRef,
                className: n,
                onMouseDown: this.handleMouseDown,
                style: u,
                children: r
            })
        }
        constructor(e) {
            super(e), this._height = 0, this._width = 0, this._dragStart = {
                x: 0,
                y: 0
            }, this._offsetX = 0, this._offsetY = 0, this._removeListeners = () => {}, this.handleSetRef = e => {
                this._ref = e
            }, this.handleMouseDown = e => {
                let {
                    dragAnywhere: t,
                    disabled: n,
                    selector: a
                } = this.props;
                if (n) return;
                let {
                    position: r
                } = this.state, s = e.target;
                if (e.button === u.MouseButtons.PRIMARY && (t || null != a && s.matches(a))) {
                    this.grabDimensions(), this._dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }, this._offsetX = e.clientX - r.x._value, this._offsetY = e.clientY - r.y._value;
                    let t = e.nativeEvent.view;
                    this._removeListeners(), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseup", this.handleMouseUp), this._removeListeners = () => {
                        t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseup", this.handleMouseUp)
                    }
                }
            }, this.handleMouseMove = e => {
                e.preventDefault();
                let {
                    onDragStart: t,
                    onDrag: n,
                    disabled: a
                } = this.props;
                if (a) return;
                let {
                    dragging: r,
                    dragging: s
                } = this.state;
                !r && o(this._dragStart, {
                    x: e.clientX,
                    y: e.clientY
                }) > 9 && (r = !0), r && (this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
                    tension: 80,
                    friction: 8
                }, null, !1), this.setState({
                    dragging: r
                }, () => {
                    !s && (null == t || t(e.clientX, e.clientY)), null == n || n(e.clientX, e.clientY)
                }))
            }, this.handleMouseUp = e => {
                this._removeListeners(), this.state.dragging && this.setState({
                    dragging: !1
                }, () => {
                    let {
                        onDragEnd: t
                    } = this.props;
                    null == t || t(e.clientX, e.clientY)
                })
            };
            let t = new l.default.Value(e.initialX),
                n = new l.default.Value(e.initialY);
            this.state = {
                dragging: !1,
                position: new l.default.ValueXY({
                    x: t,
                    y: n
                })
            }
        }
    }
    d.defaultProps = {
        maxX: 0,
        maxY: 0,
        initialX: 0,
        initialY: 0,
        disabled: !1,
        dragAnywhere: !1
    };
    var c = d
}