function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PictureInPictureWindow: function() {
            return I
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("699581"),
        s = n("374550"),
        l = n("685478"),
        c = n("281767"),
        f = n("58203");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {
            top: 80,
            bottom: 132,
            left: 80
        },
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(h, e);
            var t, n, r, i, y, I = (t = h, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = p(t);
                if (n) {
                    var a = p(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : d(e)
            });

            function h() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), e = I.apply(this, arguments), E(d(e), "_draggable", void 0), E(d(e), "_innerDiv", void 0), E(d(e), "_resizeObserver", void 0), E(d(e), "_width", 0), E(d(e), "_height", 0), E(d(e), "_velocityX", 0), E(d(e), "_velocityY", 0), E(d(e), "_lastMoveTime", void 0), E(d(e), "_lastMoveX", 0), E(d(e), "_lastMoveY", 0), E(d(e), "ensureIsInPosition", function() {
                    e.setPosition(e.props.position)
                }), E(d(e), "handleSetInnerDivRef", function(t) {
                    e._innerDiv = t;
                    var n, r = null == t ? void 0 : t.ownerDocument.defaultView;
                    null != t && null != r && (e._resizeObserver = new r.ResizeObserver(e.ensureIsInPosition), null === (n = e._resizeObserver) || void 0 === n || n.observe(t))
                }), E(d(e), "handleSetDraggableRef", function(t) {
                    e._draggable = t
                }), E(d(e), "handleDragStart", function(t, n) {
                    e._velocityX = 0, e._velocityY = 0, e._lastMoveX = t, e._lastMoveY = n, e._lastMoveTime = new Date
                }), E(d(e), "handleDrag", function(t, n) {
                    var r = new Date,
                        o = Number(r) - Number(e._lastMoveTime);
                    e._velocityX = (t - e._lastMoveX) / o, e._velocityY = (n - e._lastMoveY) / o, e._lastMoveX = t, e._lastMoveY = n, e._lastMoveTime = r
                }), E(d(e), "handleDragEnd", function(t, n) {
                    var r, o = e.props,
                        i = o.maxX,
                        a = o.maxY,
                        u = e.calculateDecayingPosition(t, n, e._velocityX, e._velocityY),
                        s = !0,
                        l = !0;
                    if (u.x > i / 2 && (l = !1), u.y > a / 2 && (s = !1), r = s && l ? c.PictureInPicturePositions.TOP_LEFT : s && !l ? c.PictureInPicturePositions.TOP_RIGHT : !s && l ? c.PictureInPicturePositions.BOTTOM_LEFT : c.PictureInPicturePositions.BOTTOM_RIGHT, e.animateToPosition(r, e.ensureIsInPosition), r !== e.props.position) {
                        var f = e.props,
                            d = f.id,
                            _ = f.onMove;
                        null == _ || _(d, r)
                    }
                }), e
            }
            return r = h, i = [{
                key: "componentDidMount",
                value: function() {
                    this.setPosition(this.props.position)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
                }
            }, {
                key: "getPosition",
                value: function(e) {
                    var t, n, r = (0, u.findDOMNode)(this._innerDiv);
                    if (null != r) {
                        var o = r.getBoundingClientRect();
                        this._width = o.width, this._height = o.height
                    }
                    var i = this.props,
                        a = i.edgeOffsetTop,
                        l = i.edgeOffsetLeft,
                        f = i.edgeOffsetBottom,
                        d = i.edgeOffsetRight,
                        _ = i.maxX,
                        E = i.maxY,
                        p = i.dockedRect,
                        m = Math.round(a),
                        y = Math.round(E - f - this._height),
                        I = Math.round(l),
                        h = Math.round(_ - d - this._width),
                        O = (0, s.getPlatform)() !== s.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != p) return {
                        y: (null !== (t = null == p ? void 0 : p.y) && void 0 !== t ? t : 0) - O,
                        x: null !== (n = null == p ? void 0 : p.x) && void 0 !== n ? n : 0
                    };
                    switch (e) {
                        case c.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: m, x: I
                            };
                        case c.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: y, x: I
                            };
                        case c.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: m, x: h
                            };
                        default:
                            return {
                                y: y, x: h
                            }
                    }
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    var t, n = this.getPosition(e),
                        r = n.x,
                        o = n.y;
                    null === (t = this._draggable) || void 0 === t || t.setPosition(r, o)
                }
            }, {
                key: "animateToPosition",
                value: function(e, t) {
                    var n, r = this.getPosition(e),
                        o = r.x,
                        i = r.y;
                    null === (n = this._draggable) || void 0 === n || n.animateToPosition(o, i, {}, t)
                }
            }, {
                key: "calculateDecayingPosition",
                value: function(e, t, n, r) {
                    return {
                        x: e + 200 * n,
                        y: t + 200 * r
                    }
                }
            }, {
                key: "getXOffset",
                value: function() {
                    var e = this.props,
                        t = e.position,
                        n = e.edgeOffsetLeft,
                        r = e.edgeOffsetRight;
                    switch (t) {
                        case c.PictureInPicturePositions.TOP_LEFT:
                        case c.PictureInPicturePositions.BOTTOM_LEFT:
                            return -n;
                        default:
                            return r
                    }
                }
            }, {
                key: "getYOffset",
                value: function() {
                    var e = this.props,
                        t = e.position,
                        n = e.edgeOffsetTop,
                        r = e.edgeOffsetBottom;
                    switch (t) {
                        case c.PictureInPicturePositions.TOP_LEFT:
                        case c.PictureInPicturePositions.TOP_RIGHT:
                            return -n;
                        default:
                            return r
                    }
                }
            }, {
                key: "inPopout",
                get: function() {
                    return this.props.appContext === c.AppContext.POPOUT
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.maxX,
                        r = t.maxY,
                        i = t.dockedRect,
                        u = t.hidden,
                        s = t.roundCorners,
                        c = t.className,
                        d = {};
                    return null != i && (d = {
                        transform: "translate3d(".concat(i.x, ", ").concat(i.y, ", 0)"),
                        width: i.width,
                        height: i.height
                    }), o.createElement(l.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: a()(f.pictureInPictureWindow, c, (E(e = {}, f.hidden, u), E(e, f.borderRadius, s), e)),
                        maxX: n,
                        maxY: r,
                        disabled: null != i,
                        onDragStart: this.handleDragStart,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd
                    }, o.createElement("div", {
                        ref: this.handleSetInnerDivRef,
                        style: d
                    }, this.props.children))
                }
            }], _(r.prototype, i), y && _(r, y), h
        }(o.PureComponent);
    E(I, "defaultProps", {
        hidden: !1,
        roundCorners: !0
    });
    t.default = o.memo(function(e) {
        var t = e.selectedPIPWindow,
            n = e.pipWindows,
            r = e.maxX,
            i = e.maxY,
            a = e.onWindowMove,
            u = e.dockedRect,
            s = e.pictureInPictureComponents,
            l = e.appContext,
            d = e.roundCorners;
        return o.createElement("div", {
            className: f.pictureInPicture
        }, function() {
            if (null == t) return null;
            var e = n.map(function(e) {
                if (e.id !== t.id && e.component !== c.PictureInPictureComponents.EMBED_IFRAME) return null;
                var n = "string" == typeof e.component ? s[e.component] : e.component;
                return o.createElement(n, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            E(e, t, n[t])
                        })
                    }
                    return e
                }({
                    key: "pipWindow-".concat(e.id)
                }, e.props))
            });
            return o.createElement(I, {
                appContext: l,
                position: t.position,
                id: t.id,
                hidden: t.hidden,
                onMove: a,
                maxX: r,
                maxY: i,
                dockedRect: u,
                edgeOffsetTop: y.top,
                edgeOffsetBottom: y.bottom,
                edgeOffsetLeft: y.left,
                edgeOffsetRight: y.top,
                roundCorners: d
            }, e)
        }())
    })
}