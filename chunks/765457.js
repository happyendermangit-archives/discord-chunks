function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("699581"),
        s = n.n(u),
        l = n("188104"),
        c = n("898511"),
        f = n("896299"),
        d = n("53867"),
        _ = n("391083"),
        E = n("416801"),
        p = n("299529"),
        m = n("739226"),
        y = n("796454"),
        I = n("644037");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t && S(e.prototype, t), n && S(e, n), e
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && P(e, t)
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function C(e, t) {
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
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function D(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function L(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = A(e);
            if (t) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : O(n)
        }
    }
    var M = function(e) {
        b(n, e);
        var t = L(n);

        function n() {
            var e;
            return T(this, n), e = t.apply(this, arguments), g(O(e), "state", {
                hover: !1
            }), g(O(e), "key", void 0), g(O(e), "cancelLoadImage", void 0), g(O(e), "onError", function() {
                var t = e.getSrc();
                null != t && (e.cancelLoadImage = (0, f.loadImage)(t, function(t) {
                    !t && (e.key = Date.now(), e.forceUpdate())
                }))
            }), g(O(e), "onMouseEnter", function(t) {
                e.setState({
                    hover: !0
                });
                var n = e.props.onMouseEnter;
                null != n && n(t)
            }), g(O(e), "onMouseLeave", function(t) {
                e.setState({
                    hover: !1
                });
                var n = e.props.onMouseLeave;
                null != n && n(t)
            }), e
        }
        return v(n, [{
            key: "componentWillUnmount",
            value: function() {
                var e;
                null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
            }
        }, {
            key: "getSrc",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                    t = e.src,
                    n = e.emojiId,
                    r = e.emojiName,
                    o = e.animated,
                    i = e.shouldAnimate,
                    a = e.isFocused,
                    u = e.isInteracting,
                    s = e.size,
                    l = this.state.hover;
                if (null != t) return t;
                if (null != n) {
                    var c = I.EMOJI_SIZE_MAP[void 0 === s ? "default" : s];
                    return p.default.getEmojiURL({
                        id: n,
                        animated: a && !0 === o && (!0 === i || l || !0 === u),
                        size: c
                    })
                }
                if (null != r) return m.default.getURL(r)
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    r = n.emojiName,
                    i = n.animated,
                    u = n.className,
                    s = n.size,
                    l = n.alt,
                    c = (n.shouldAnimate, n.isFocused, n.emojiId),
                    f = (n.autoplay, n.isInteracting, C(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                    d = this.getSrc();
                return null == d || "" === d ? o.createElement("span", {
                    className: a()("emoji", "emoji-text")
                }, r) : (i && (e = {
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave
                }), o.createElement("img", N(R(N(R(N({}, f), {
                    key: this.key,
                    src: d,
                    alt: null !== (t = null != l ? l : r) && void 0 !== t ? t : void 0,
                    draggable: !1
                }), e), {
                    className: a()("emoji", u, {
                        jumboable: "jumbo" === (void 0 === s ? "default" : s)
                    }),
                    onError: this.onError,
                    "data-type": "emoji"
                }), null != c && "" !== c ? {
                    "data-id": c
                } : {
                    "data-name": r
                })))
            }
        }]), n
    }(o.PureComponent);
    g(M, "defaultProps", {
        isInteracting: !1
    });
    var U = function(e) {
        if (null == window.IntersectionObserver) return function(t) {
            return o.createElement(e, R(N({}, t), {
                shouldAnimate: t.animated
            }))
        };
        var t = [],
            n = [],
            r = new window.IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    var r = n.find(function(t) {
                        return D(t, 1)[0] === e.target
                    });
                    if (null != r) {
                        var o = r[1];
                        if (e.intersectionRatio >= .7) {
                            if (-1 !== t.indexOf(o)) return;
                            var i, a, u = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                            u ? t.unshift(o) : t.push(o), o.forceUpdate(), u && t.length > 100 && t[100].forceUpdate()
                        } else {
                            var s = t.indexOf(o); - 1 !== s && (t.splice(s, 1), o.forceUpdate(), s < 100 && t.length >= 100 && t[99].forceUpdate())
                        }
                    }
                })
            }, {
                threshold: .7
            });

        function i(e) {
            var t = s().findDOMNode(e);
            (0, l.isElement)(t) && (n.push([t, e]), r.observe(t))
        }

        function a(e) {
            var o = s().findDOMNode(e);
            r.unobserve(o);
            var i = n.findIndex(function(t) {
                var n = D(t, 2);
                return n[0], n[1] === e
            }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
        }
        return function(n) {
            b(u, n);
            var r = L(u);

            function u() {
                return T(this, u), r.apply(this, arguments)
            }
            return v(u, [{
                key: "shouldAutoplay",
                value: function(e) {
                    return e.animated && e.autoplay
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.shouldAutoplay(this.props) && i(this)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.shouldAutoplay(e),
                        n = this.shouldAutoplay(this.props);
                    n !== t && (n ? i(this) : a(this))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.shouldAutoplay(this.props) && a(this)
                }
            }, {
                key: "render",
                value: function() {
                    var n = t.indexOf(this),
                        r = this.props,
                        i = r.autoplay,
                        a = r.allowAnimatedEmoji,
                        u = C(r, ["autoplay", "allowAnimatedEmoji"]);
                    return o.createElement(E.MessagesInteractionContext.Consumer, null, function(t) {
                        return o.createElement(e, R(N({}, u), {
                            autoplay: i || !1,
                            shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                        }))
                    })
                }
            }]), u
        }(o.Component)
    }(M);

    function w(e) {
        var t = d.AnimateEmoji.useSetting(),
            n = {
                autoplay: null == e.autoplay ? t : e.autoplay,
                allowAnimatedEmoji: t
            },
            r = __OVERLAY__ ? (0, c.useStateFromStores)([_.default], function() {
                return _.default.isInstanceFocused()
            }) : (0, y.useIsWindowFocused)();
        return o.createElement(U, R(N({}, e, n), {
            isFocused: r
        }))
    }
}