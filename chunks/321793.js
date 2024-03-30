function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuActionType: function() {
            return o
        },
        default: function() {
            return p
        }
    });
    var r, o, i = n("639340");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function s(e, t) {
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

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        return e.findIndex(function(e) {
            return t === e.key
        })
    }

    function f(e) {
        return e.focusPath[e.focusPath.length - 1]
    }

    function d(e) {
        for (var t = e.items, n = 0; n < e.focusPath.length - 1; n++) {
            if (null == t) return;
            var r = c(t, e.focusPath[n]);
            t = t[r].children
        }
        return t
    }

    function _(e, t) {
        for (var n = e, r = [], o = 0; o < t.length && null != n; o++) {
            var i = t[o],
                a = c(n, i);
            if (a < 0 || a >= n.length) {
                var u = n[0];
                null != u && r.push(u.key);
                break
            }
            r.push(i), n = n[a].children
        }
        return r
    }(r = o || (o = {})).UPDATE_ITEMS = "UPDATE_ITEMS", r.SET_FOCUS_PATH = "SET_FOCUS_PATH";

    function E(e) {
        var t = f(e),
            n = d(e);
        return null == n ? -1 : c(n, t)
    }

    function p(e, t) {
        var n, r, o, a, p, m;
        switch (t.type) {
            case i.ActionType.NAVIGATE_UP:
                return function(e, t) {
                    var n = f(e),
                        r = d(e);
                    if (null == r) return e;
                    var o = (c(r, n) - 1) % r.length;
                    if (o < 0 && (o = r.length - 1), null == r[o]) return e;
                    var i = s(u({}, e), {
                        focusPath: l(e.focusPath.slice(0, -1)).concat([r[o].key])
                    });
                    return s(u({}, i), {
                        focusIndex: E(i)
                    })
                }(e, 0);
            case i.ActionType.NAVIGATE_DOWN:
                return function(e, t) {
                    var n = f(e),
                        r = d(e);
                    if (null == r) return e;
                    var o = (c(r, n) + 1) % r.length;
                    if (null == r[o]) return e;
                    var i = s(u({}, e), {
                        focusPath: l(e.focusPath.slice(0, -1)).concat([r[o].key])
                    });
                    return s(u({}, i), {
                        focusIndex: E(i)
                    })
                }(e, 0);
            case i.ActionType.NAVIGATE_IN:
                return function(e, t) {
                    var n, r = f(e),
                        o = d(e);
                    if (null == o) return e;
                    var i = o[c(o, r)],
                        a = null == i ? void 0 : null === (n = i.children) || void 0 === n ? void 0 : n[0];
                    if (null == a) return e;
                    var _ = s(u({}, e), {
                        focusPath: l(e.focusPath).concat([a.key])
                    });
                    return s(u({}, _), {
                        focusIndex: E(_)
                    })
                }(e, 0);
            case i.ActionType.NAVIGATE_OUT:
                return function(e, t) {
                    if (e.focusPath.length <= 1) return e;
                    var n = s(u({}, e), {
                        focusPath: e.focusPath.slice(0, -1)
                    });
                    return s(u({}, n), {
                        focusIndex: E(n)
                    })
                }(e, 0);
            case "UPDATE_ITEMS":
                ;
                return n = e, r = t.items, o = s(u({}, n), {
                    items: r,
                    focusPath: _(r, n.focusPath)
                }), s(u({}, o), {
                    focusIndex: E(o)
                });
            case "SET_FOCUS_PATH":
                ;
                return a = e, p = t.path, m = s(u({}, a), {
                    focusPath: _(a.items, p)
                }), s(u({}, m), {
                    focusIndex: E(m)
                });
            case i.ActionType.SELECT_FOCUSED_ITEM:
                break;
            default:
                throw Error("Menu navigator was given an unhandled action ".concat(t.type))
        }
        return e
    }
}