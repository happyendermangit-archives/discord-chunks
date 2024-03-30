function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("784184"),
        s = n("969603"),
        l = n("893427"),
        c = n("214004"),
        f = n("447949"),
        d = n("941504"),
        _ = n("553400");

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(T, e);
        var t, n, r, i, h, O = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(e)
        });

        function T() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), e = O.apply(this, arguments), m(E(e), "_mediaBar", o.createRef()), m(E(e), "_hoverTimeout", void 0), m(E(e), "state", {
                hovered: !1,
                focused: !1,
                dragging: !1
            }), m(E(e), "handleValueChange", function(t) {
                var n = e.props,
                    r = n.maxValue,
                    o = n.onValueChange;
                null == o || o(t * r)
            }), m(E(e), "handleToggleMute", function() {
                var t = e.props.onToggleMute;
                null == t || t()
            }), m(E(e), "handleKeyDown", function(t) {
                var n = e.props,
                    r = n.minValue,
                    o = n.value,
                    i = n.maxValue,
                    a = n.onValueChange,
                    u = .05 * (i - r);
                switch (t.key) {
                    case "ArrowUp":
                        t.stopPropagation(), t.preventDefault(), null == a || a(Math.min(i, o + u));
                        break;
                    case "ArrowDown":
                        t.stopPropagation(), t.preventDefault(), null == a || a(Math.max(r, o - u))
                }
            }), m(E(e), "handleDragStart", function() {
                e.setState({
                    dragging: !0
                })
            }), m(E(e), "handleDragEnd", function() {
                e.setState({
                    dragging: !1
                })
            }), m(E(e), "blur", function() {
                e.setState({
                    focused: !1
                })
            }), e
        }
        return r = T, i = [{
            key: "componentDidMount",
            value: function() {
                this.updateMediaBar()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
            }
        }, {
            key: "updateMediaBar",
            value: function() {
                var e = this.props,
                    t = e.muted,
                    n = e.value,
                    r = e.maxValue,
                    o = this._mediaBar.current;
                null != o && (t ? o.setGrabber(0) : o.setGrabber(n / r))
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.iconClassName,
                    r = t.className,
                    i = t.sliderWrapperClassName,
                    E = t.sliderClassName,
                    p = t.currentWindow,
                    y = t.muted,
                    I = t.minValue,
                    h = t.maxValue,
                    O = t.value,
                    T = t.onVolumeShow,
                    S = t.onVolumeHide,
                    v = this.state,
                    g = v.hovered,
                    A = v.focused,
                    b = v.dragging,
                    N = l.default;
                return y || O === I ? N = c.default : O < h / 2 && (N = f.default), o.createElement("div", {
                    className: a()(r, _.container),
                    onMouseEnter: function() {
                        clearTimeout(e._hoverTimeout), e.setState({
                            hovered: !0
                        }), null == T || T()
                    },
                    onMouseLeave: function() {
                        clearTimeout(e._hoverTimeout), e._hoverTimeout = setTimeout(function() {
                            e.setState({
                                hovered: !1
                            }), null == S || S()
                        }, 150)
                    },
                    onFocus: function() {
                        return e.setState({
                            focused: !0
                        })
                    },
                    onBlur: function() {
                        return e.setState({
                            focused: !1
                        })
                    },
                    onKeyDown: this.handleKeyDown
                }, o.createElement("div", {
                    className: a()(_.volumeButtonSlider, i, m({}, _.sliderVisible, g || A || b)),
                    onMouseEnter: function() {
                        clearTimeout(e._hoverTimeout), e.setState({
                            hovered: !0
                        })
                    },
                    onMouseLeave: function() {
                        clearTimeout(e._hoverTimeout), e._hoverTimeout = setTimeout(function() {
                            return e.setState({
                                hovered: !1
                            })
                        }, 150)
                    }
                }, o.createElement(s.default, {
                    sliderClassName: E,
                    type: s.default.Types.VOLUME,
                    value: O / h,
                    onDrag: this.handleValueChange,
                    onDragStart: this.handleDragStart,
                    onDragEnd: this.handleDragEnd,
                    currentWindow: p,
                    ref: this._mediaBar
                })), o.createElement(u.Button, {
                    className: _.volumeButton,
                    "aria-label": d.default.Messages.CONTROL_VOLUME,
                    size: u.Button.Sizes.NONE,
                    look: u.Button.Looks.BLANK,
                    onClick: this.handleToggleMute
                }, o.createElement(N, {
                    className: n
                })))
            }
        }], p(r.prototype, i), h && p(r, h), T
    }(o.PureComponent);
    m(h, "defaultProps", {
        minValue: 0,
        maxValue: 100,
        handleSize: 16
    }), t.default = h
}