function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("898511"),
        u = n("242880"),
        s = n("629815"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
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

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = "PictureInPictureLocation",
        y = new Map,
        I = l.PictureInPicturePositions.BOTTOM_RIGHT,
        h = {},
        O = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(_, e);
            var t, n, i, a, s, f = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function _() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), f.apply(this, arguments)
            }
            return i = _, a = [{
                key: "initialize",
                value: function() {
                    I = u.Storage.get(m, l.PictureInPicturePositions.BOTTOM_RIGHT)
                }
            }, {
                key: "pipWindow",
                get: function() {
                    var e;
                    return null == r && null == o ? null : y.get(null !== (e = null != r ? r : o) && void 0 !== e ? e : "")
                }
            }, {
                key: "pipVideoWindow",
                get: function() {
                    return null == r ? null : y.get(r)
                }
            }, {
                key: "pipActivityWindow",
                get: function() {
                    return null == o ? null : y.get(o)
                }
            }, {
                key: "pipWindows",
                get: function() {
                    return y
                }
            }, {
                key: "isEmbeddedActivityHidden",
                value: function() {
                    return null == o
                }
            }, {
                key: "getDockedRect",
                value: function(e) {
                    return h[e]
                }
            }, {
                key: "isOpen",
                value: function(e) {
                    return null != e && y.has(e)
                }
            }], c(i.prototype, a), s && c(i, s), _
        }(a.default.Store);
    f(O, "displayName", "PictureInPictureStore"), t.default = new O(s.default, {
        PICTURE_IN_PICTURE_OPEN: function(e) {
            var t, n, i = e.id,
                a = e.component,
                u = e.props;
            if (null == y.get(i)) {
                var s = {
                    id: i,
                    component: a,
                    position: null !== (t = u.position) && void 0 !== t ? t : I,
                    props: u,
                    docked: null !== (n = u.docked) && void 0 !== n && n
                };
                y.set(i, s), a === l.PictureInPictureComponents.VIDEO ? null == r && (r = i) : a === l.PictureInPictureComponents.EMBED_IFRAME && null == o && (o = i)
            }
        },
        PICTURE_IN_PICTURE_CLOSE: function(e) {
            var t = e.id;
            if (!y.has(t)) return !1;
            y.delete(t);
            var n = Array.from(y.keys());
            r === t ? r = n.find(function(e) {
                var t = y.get(e);
                return null != t && t.component === l.PictureInPictureComponents.VIDEO
            }) : o === t && (o = n.find(function(e) {
                var t = y.get(e);
                return null != t && t.component === l.PictureInPictureComponents.EMBED_IFRAME
            }))
        },
        PICTURE_IN_PICTURE_MOVE: function(e) {
            var t = e.id,
                n = e.position;
            if (null == t || r !== t && o !== t) return !1;
            var i = new Map;
            y.forEach(function(e, t) {
                i.set(t, E(_({}, e), {
                    position: n
                }))
            }), y = i, I = n, u.Storage.set(m, n)
        },
        PICTURE_IN_PICTURE_HIDE: function(e) {
            var t = e.id;
            if (r !== t && o !== t) return !1;
            var n = y.get(t);
            if (null == n) return !1;
            y.set(t, E(_({}, n), {
                hidden: !0
            }))
        },
        PICTURE_IN_PICTURE_SHOW: function(e) {
            var t = e.id;
            if (r !== t && o !== t) return !1;
            var n = y.get(t);
            if (null == n) return !1;
            y.set(t, E(_({}, n), {
                hidden: !1
            }))
        },
        PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
            var t = e.id,
                n = e.rect;
            h[t] = n
        },
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
            var t = e.id,
                n = y.get(t);
            null != n && (n.component === l.PictureInPictureComponents.VIDEO ? r = t : n.component === l.PictureInPictureComponents.EMBED_IFRAME && (o = t))
        },
        LOGOUT: function() {
            r = null, o = null, y = new Map
        }
    })
}