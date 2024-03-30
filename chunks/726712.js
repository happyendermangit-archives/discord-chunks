function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LazyPopout: function() {
            return S
        },
        Popout: function() {
            return T
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("680799"),
        l = n("911169"),
        c = n("709234"),
        f = n("388112");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
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

    function h(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {})).NONE = "1", r.TRANSLATE = "2", r.SCALE = "3", r.FADE = "4";
    var O = Object.freeze((m(i = {}, "2", c.PopoutCSSAnimator.Types.TRANSLATE), m(i, "3", c.PopoutCSSAnimator.Types.SCALE), m(i, "4", c.PopoutCSSAnimator.Types.FADE), i)),
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
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
                }(r) || "function" == typeof r) ? r : _(e)
            });

            function s() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = a.apply(this, arguments), m(_(e), "ref", u.createRef()), m(_(e), "renderPopout", function(t) {
                    var n = e.props,
                        r = n.renderPopout,
                        o = n.animation,
                        i = n.animationPosition;
                    switch (null != i && null != t.position && (t.position = i), o) {
                        case "2":
                        case "3":
                        case "4":
                            return u.createElement(c.PopoutCSSAnimator, {
                                position: t.position,
                                type: O[o]
                            }, r(t));
                        case "1":
                            return r(t)
                    }
                    throw Error("Unsupported animation config: ".concat(JSON.stringify(o)))
                }), e
            }
            return r = s, o = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.shouldShow,
                        r = e.position,
                        o = e.onRequestOpen,
                        i = e.onRequestClose,
                        a = e.align,
                        s = e.autoInvert,
                        c = e.fixed,
                        f = e.nudgeAlignIntoViewport,
                        d = e.spacing,
                        _ = e.onShiftClick,
                        E = e.positionKey,
                        p = e.preload,
                        m = e.disablePointerEvents,
                        y = e.ignoreModalClicks,
                        I = e.closeOnScroll,
                        h = e.useMouseEnter,
                        O = e.renderPopout,
                        T = e.layerContext;
                    return u.createElement(l.BasePopout, {
                        ref: this.ref,
                        preload: p,
                        position: r,
                        align: null != a ? a : function(e) {
                            switch (e) {
                                case "top":
                                case "bottom":
                                    return "left";
                                case "left":
                                case "right":
                                    return "top";
                                case "center":
                                case "window_center":
                                    return "center"
                            }
                            throw Error("Unexpected position: ".concat(e))
                        }(r),
                        autoInvert: s,
                        fixed: c,
                        nudgeAlignIntoViewport: f,
                        renderPopout: this.renderPopout,
                        spacing: d,
                        shouldShow: null != O && n,
                        onRequestOpen: o,
                        onRequestClose: i,
                        onShiftClick: _,
                        positionKey: E,
                        disablePointerEvents: m,
                        ignoreModalClicks: y,
                        closeOnScroll: I,
                        useMouseEnter: h,
                        layerContext: T
                    }, t)
                }
            }], p(r.prototype, o), i && p(r, i), s
        }(u.Component);

    function S(e) {
        var t, n, r = e.renderPopout,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["renderPopout"]),
            i = u.useRef(null),
            a = h(u.useState(0), 2),
            l = a[0],
            c = a[1];

        function d() {
            return function() {
                p.apply(this, arguments)
            }(), u.createElement(u.Fragment, null)
        }
        u.useLayoutEffect(function() {
            if (l > 0) {
                var e, t, n, r, o;
                null === (o = i.current) || void 0 === o || null === (r = o.ref) || void 0 === r || null === (n = r.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition()
            }
        }, [l]), u.useEffect(function() {
            var e = setTimeout(r, 20 + 20 * Math.random());
            return function() {
                return clearTimeout(e)
            }
        }, []);
        var _ = u.useRef(!1);

        function p() {
            var e;
            return e = function() {
                var e, t;
                return function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                }(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (_.current) return [3, 2];
                            return _.current = !0, e = setTimeout(function() {
                                S(function() {
                                    return y
                                }), c(function(e) {
                                    return e + 1
                                })
                            }, 300), [4, r()];
                        case 1:
                            t = n.sent(), S(function() {
                                return t
                            }), c(function(e) {
                                return e + 1
                            }), clearTimeout(e), n.label = 2;
                        case 2:
                            return [2]
                    }
                })
            }, (p = function() {
                var t = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);

                    function a(e) {
                        E(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        E(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }).apply(this, arguments)
        }

        function y() {
            var e, t, n, r, o = null === (r = i.current) || void 0 === r ? void 0 : null === (n = r.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
                a = Math.max(100, null == o ? 100 : o.offsetWidth - 20);
            return u.createElement("div", {
                className: f.loader,
                style: {
                    width: a
                }
            }, u.createElement(s.Spinner, null))
        }
        var I = h(u.useState(function() {
                return d
            }), 2),
            O = I[0],
            S = I[1];
        return u.useEffect(function() {
            _.current ? r().then(function(e) {
                S(function() {
                    return e
                }), c(function(e) {
                    return e + 1
                })
            }) : S(d)
        }, [r]), u.createElement(T, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    m(e, t, n[t])
                })
            }
            return e
        }({
            ref: i
        }, o), n = (n = {
            renderPopout: O
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }
    m(T, "Animation", o), m(T, "defaultProps", {
        position: "right",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: "2",
        positionKey: void 0
    }), S.Animation = o
}