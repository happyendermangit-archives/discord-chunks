function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppPageTitle: function() {
            return I
        },
        flashPageTitle: function() {
            return p
        },
        setPageTitleNotificationCount: function() {
            return E
        },
        usePageTitle: function() {
            return y
        },
        usePageTitleManager: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("652874"),
        i = n("374550");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
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
        }(e, t) || l(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || l(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        if (e) {
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }
    }
    var c = {
            base: i.isPlatformEmbedded ? void 0 : "Discord"
        },
        f = 0,
        d = {
            count: 3,
            onlyWhenBlurred: !1,
            interval: 1e3
        },
        _ = (0, o.default)(function() {
            return {
                titles: [c],
                notificationCount: void 0,
                flashQueue: []
            }
        });

    function E(e) {
        _.setState({
            notificationCount: e
        })
    }

    function p(e) {
        var t, n, r = (t = function(e) {
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
        }({}, d, e), n = (n = {
            id: f++
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t);
        return r.count = Math.max(r.count, r.messages.length), _.setState(function(e) {
                return {
                    flashQueue: s(e.flashQueue).concat([r])
                }
            }),
            function() {
                return m(r.id)
            }
    }

    function m(e) {
        _.setState(function(t) {
            return {
                flashQueue: t.flashQueue.filter(function(t) {
                    return t.id !== e
                })
            }
        })
    }

    function y(e) {
        r.useEffect(function() {
            var t;
            return t = e, _.setState(function(e) {
                    return {
                        titles: [t].concat(s(e.titles))
                    }
                }),
                function() {
                    _.setState(function(e) {
                        return {
                            titles: e.titles.filter(function(e) {
                                return e !== t
                            })
                        }
                    })
                }
        }, s(Object.values(e)))
    }

    function I(e) {
        return y(e), null
    }

    function h() {
        var e, t, n, o, i, a, s, l, f = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skipsSettingDefaultPageTitle;
        r.useEffect(function() {
            var e = function() {
                _.setState({
                    flashQueue: []
                })
            };
            return document.addEventListener("focusin", e, {
                    capture: !0
                }),
                function() {
                    return document.removeEventListener("focusin", e, {
                        capture: !0
                    })
                }
        }, []);
        var d = (t = (e = u(_(function(e) {
            var t, n = e.flashQueue,
                r = (function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i, a, u, s = e.titles[Symbol.iterator](); !(t = (u = s.next()).done); t = !0) {
                            var l = u.value;
                            if (null != o && null != i) break;
                            o = null != o ? o : l.base, i = null != i ? i : l.location, a = null != a ? a : l.subsection
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != s.return && s.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return [o, a, i]
                })(e).filter(function(e) {
                    return null != e
                }).join(" | ");
            var o = null == (t = e.notificationCount) || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ");
            return ["".concat(o).concat(r), n[0]]
        }), 2))[0], n = e[1], i = (o = u(r.useState(!1), 2))[0], a = o[1], s = r.useRef(0), l = null == n ? void 0 : n.messages[s.current % n.messages.length], r.useEffect(function() {
            if (null == n) {
                s.current = 0, a(!1);
                return
            }
            if (document.hasFocus() && n.onlyWhenBlurred) {
                m(n.id), a(!1);
                return
            }
            var e = setInterval(function() {
                if (s.current >= n.count) {
                    m(n.id), a(!1);
                    return
                }
                a(function(e) {
                    return !e || (s.current += 1, !1)
                })
            }, n.interval);
            return function() {
                return clearInterval(e)
            }
        }, [n]), i ? l : t);
        r.useEffect(function() {
            var e = d === c.base;
            (!f || !e) && (document.title = d)
        }, [f, d])
    }
}