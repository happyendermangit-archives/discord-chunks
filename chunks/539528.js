function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createBrowserHistory: function() {
            return y
        },
        createHashHistory: function() {
            return C
        },
        createLocation: function() {
            return f
        },
        createMemoryHistory: function() {
            return O
        },
        createPath: function() {
            return d
        },
        locationsAreEqual: function() {
            return p
        }
    });
    var r = n("194649"),
        i = n("634450"),
        a = n("115953"),
        o = n("568895");

    function s(e) {
        return "/" === e.charAt(0) ? e : "/" + e
    }

    function u(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e
    }

    function c(e, t) {
        var n, r;
        return (n = e, r = t, 0 === n.toLowerCase().indexOf(r.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(r.length))) ? e.substr(t.length) : e
    }

    function l(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
    }

    function d(e) {
        var t = e.pathname,
            n = e.search,
            r = e.hash,
            i = t || "/";
        return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i
    }

    function f(e, t, n, a) {
        var o, s, u, c, l, d;
        if ("string" == typeof e) {
            ;
            u = "", c = "", -1 !== (l = (s = e || "/").indexOf("#")) && (c = s.substr(l), s = s.substr(0, l)), -1 !== (d = s.indexOf("?")) && (u = s.substr(d), s = s.substr(0, d)), (o = {
                pathname: s,
                search: "?" === u ? "" : u,
                hash: "#" === c ? "" : c
            }).state = t
        } else void 0 === (o = (0, r.default)({}, e)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== t && void 0 === o.state && (o.state = t);
        try {
            o.pathname = decodeURI(o.pathname)
        } catch (e) {
            if (e instanceof URIError) throw URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
            throw e
        }
        return n && (o.key = n), a ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = (0, i.default)(o.pathname, a.pathname)) : o.pathname = a.pathname : !o.pathname && (o.pathname = "/"), o
    }

    function p(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, a.default)(e.state, t.state)
    }

    function h() {
        var e = null,
            t = [];
        return {
            setPrompt: function(t) {
                return e = t,
                    function() {
                        e === t && (e = null)
                    }
            },
            confirmTransitionTo: function(t, n, r, i) {
                if (null != e) {
                    var a = "function" == typeof e ? e(t, n) : e;
                    "string" == typeof a ? "function" == typeof r ? r(a, i) : i(!0) : i(!1 !== a)
                } else i(!0)
            },
            appendListener: function(e) {
                var n = !0;

                function r() {
                    n && e.apply(void 0, arguments)
                }
                return t.push(r),
                    function() {
                        n = !1, t = t.filter(function(e) {
                            return e !== r
                        })
                    }
            },
            notifyListeners: function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                t.forEach(function(e) {
                    return e.apply(void 0, n)
                })
            }
        }
    }
    var m = !!("undefined" != typeof window && window.document && window.document.createElement);

    function g(e, t) {
        t(window.confirm(e))
    }
    var _ = "popstate",
        b = "hashchange";

    function v() {
        try {
            return window.history.state || {}
        } catch (e) {
            return {}
        }
    }

    function y(e) {
        void 0 === e && (e = {}), m || (0, o.default)(!1);
        var t, n = window.history;
        var i = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
            a = -1 !== window.navigator.userAgent.indexOf("Trident"),
            u = e,
            p = u.forceRefresh,
            y = void 0 !== p && p,
            E = u.getUserConfirmation,
            S = void 0 === E ? g : E,
            x = u.keyLength,
            w = void 0 === x ? 6 : x,
            T = e.basename ? l(s(e.basename)) : "";

        function C(e) {
            var t = e || {},
                n = t.key,
                r = t.state,
                i = window.location,
                a = i.pathname + i.search + i.hash;
            return T && (a = c(a, T)), f(a, r, n)
        }

        function D() {
            return Math.random().toString(36).substr(2, w)
        }
        var O = h();

        function M(e) {
            (0, r.default)(j, e), j.length = n.length, O.notifyListeners(j.location, j.action)
        }

        function A(e) {
            if (!(void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS"))) N(C(e.state))
        }

        function k() {
            N(C(v()))
        }
        var R = !1;

        function N(e) {
            R ? (R = !1, M()) : O.confirmTransitionTo(e, "POP", S, function(t) {
                t ? M({
                    action: "POP",
                    location: e
                }) : function(e) {
                    var t = j.location,
                        n = L.indexOf(t.key); - 1 === n && (n = 0);
                    var r = L.indexOf(e.key); - 1 === r && (r = 0);
                    var i = n - r;
                    i && (R = !0, F(i))
                }(e)
            })
        }
        var I = C(v()),
            L = [I.key];

        function P(e) {
            return T + d(e)
        }

        function F(e) {
            n.go(e)
        }
        var B = 0;

        function U(e) {
            1 === (B += e) && 1 === e ? (window.addEventListener(_, A), a && window.addEventListener(b, k)) : 0 === B && (window.removeEventListener(_, A), a && window.removeEventListener(b, k))
        }
        var Y = !1,
            j = {
                length: n.length,
                action: "POP",
                location: I,
                createHref: P,
                push: function(e, t) {
                    var r = "PUSH",
                        a = f(e, t, D(), j.location);
                    O.confirmTransitionTo(a, r, S, function(e) {
                        if (e) {
                            var t = P(a),
                                o = a.key,
                                s = a.state;
                            if (i) {
                                if (n.pushState({
                                        key: o,
                                        state: s
                                    }, null, t), y) window.location.href = t;
                                else {
                                    var u = L.indexOf(j.location.key),
                                        c = L.slice(0, u + 1);
                                    c.push(a.key), L = c, M({
                                        action: r,
                                        location: a
                                    })
                                }
                            } else window.location.href = t
                        }
                    })
                },
                replace: function(e, t) {
                    var r = "REPLACE",
                        a = f(e, t, D(), j.location);
                    O.confirmTransitionTo(a, r, S, function(e) {
                        if (e) {
                            var t = P(a),
                                o = a.key,
                                s = a.state;
                            if (i) {
                                if (n.replaceState({
                                        key: o,
                                        state: s
                                    }, null, t), y) window.location.replace(t);
                                else {
                                    var u = L.indexOf(j.location.key); - 1 !== u && (L[u] = a.key), M({
                                        action: r,
                                        location: a
                                    })
                                }
                            } else window.location.replace(t)
                        }
                    })
                },
                go: F,
                goBack: function() {
                    F(-1)
                },
                goForward: function() {
                    F(1)
                },
                block: function(e) {
                    void 0 === e && (e = !1);
                    var t = O.setPrompt(e);
                    return !Y && (U(1), Y = !0),
                        function() {
                            return Y && (Y = !1, U(-1)), t()
                        }
                },
                listen: function(e) {
                    var t = O.appendListener(e);
                    return U(1),
                        function() {
                            U(-1), t()
                        }
                }
            };
        return j
    }
    var E = "hashchange",
        S = {
            hashbang: {
                encodePath: function(e) {
                    return "!" === e.charAt(0) ? e : "!/" + u(e)
                },
                decodePath: function(e) {
                    return "!" === e.charAt(0) ? e.substr(1) : e
                }
            },
            noslash: {
                encodePath: u,
                decodePath: s
            },
            slash: {
                encodePath: s,
                decodePath: s
            }
        };

    function x(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t)
    }

    function w() {
        var e = window.location.href,
            t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1)
    }

    function T(e) {
        window.location.replace(x(window.location.href) + "#" + e)
    }

    function C(e) {
        void 0 === e && (e = {}), m || (0, o.default)(!1);
        var t = window.history;
        window.navigator.userAgent.indexOf("Firefox");
        var n = e,
            i = n.getUserConfirmation,
            a = void 0 === i ? g : i,
            u = n.hashType,
            p = e.basename ? l(s(e.basename)) : "",
            _ = S[void 0 === u ? "slash" : u],
            b = _.encodePath,
            v = _.decodePath;

        function y() {
            var e = v(w());
            return p && (e = c(e, p)), f(e)
        }
        var C = h();

        function D(e) {
            (0, r.default)(U, e), U.length = t.length, C.notifyListeners(U.location, U.action)
        }
        var O = !1,
            M = null;

        function A() {
            var e = w(),
                t = b(e);
            if (e !== t) T(t);
            else {
                var n, r, i = y(),
                    o = U.location;
                if (!O && (n = o, r = i, n.pathname === r.pathname && n.search === r.search && n.hash === r.hash) || M === d(i)) return;
                M = null,
                    function(e) {
                        O ? (O = !1, D()) : C.confirmTransitionTo(e, "POP", a, function(t) {
                            t ? D({
                                action: "POP",
                                location: e
                            }) : function(e) {
                                var t = U.location,
                                    n = I.lastIndexOf(d(t)); - 1 === n && (n = 0);
                                var r = I.lastIndexOf(d(e)); - 1 === r && (r = 0);
                                var i = n - r;
                                i && (O = !0, L(i))
                            }(e)
                        })
                    }(i)
            }
        }
        var k = w(),
            R = b(k);
        k !== R && T(R);
        var N = y(),
            I = [d(N)];

        function L(e) {
            t.go(e)
        }
        var P = 0;

        function F(e) {
            1 === (P += e) && 1 === e ? window.addEventListener(E, A) : 0 === P && window.removeEventListener(E, A)
        }
        var B = !1,
            U = {
                length: t.length,
                action: "POP",
                location: N,
                createHref: function(e) {
                    var t = document.querySelector("base"),
                        n = "";
                    return t && t.getAttribute("href") && (n = x(window.location.href)), n + "#" + b(p + d(e))
                },
                push: function(e, t) {
                    var n = "PUSH",
                        r = f(e, void 0, void 0, U.location);
                    C.confirmTransitionTo(r, n, a, function(e) {
                        if (e) {
                            var t = d(r),
                                i = b(p + t);
                            if (w() !== i) {
                                M = t, a = i, window.location.hash = a;
                                var a, o = I.lastIndexOf(d(U.location)),
                                    s = I.slice(0, o + 1);
                                s.push(t), I = s, D({
                                    action: n,
                                    location: r
                                })
                            } else D()
                        }
                    })
                },
                replace: function(e, t) {
                    var n = "REPLACE",
                        r = f(e, void 0, void 0, U.location);
                    C.confirmTransitionTo(r, n, a, function(e) {
                        if (e) {
                            var t = d(r),
                                i = b(p + t);
                            w() !== i && (M = t, T(i));
                            var a = I.indexOf(d(U.location)); - 1 !== a && (I[a] = t), D({
                                action: n,
                                location: r
                            })
                        }
                    })
                },
                go: L,
                goBack: function() {
                    L(-1)
                },
                goForward: function() {
                    L(1)
                },
                block: function(e) {
                    void 0 === e && (e = !1);
                    var t = C.setPrompt(e);
                    return !B && (F(1), B = !0),
                        function() {
                            return B && (B = !1, F(-1)), t()
                        }
                },
                listen: function(e) {
                    var t = C.appendListener(e);
                    return F(1),
                        function() {
                            F(-1), t()
                        }
                }
            };
        return U
    }

    function D(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }

    function O(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.getUserConfirmation,
            i = t.initialEntries,
            a = void 0 === i ? ["/"] : i,
            o = t.initialIndex,
            s = t.keyLength,
            u = void 0 === s ? 6 : s,
            c = h();

        function l(e) {
            (0, r.default)(b, e), b.length = b.entries.length, c.notifyListeners(b.location, b.action)
        }

        function p() {
            return Math.random().toString(36).substr(2, u)
        }
        var m = D(void 0 === o ? 0 : o, 0, a.length - 1),
            g = a.map(function(e) {
                return "string" == typeof e ? f(e, void 0, p()) : f(e, void 0, e.key || p())
            });

        function _(e) {
            var t = D(b.index + e, 0, b.entries.length - 1),
                r = b.entries[t];
            c.confirmTransitionTo(r, "POP", n, function(e) {
                e ? l({
                    action: "POP",
                    location: r,
                    index: t
                }) : l()
            })
        }
        var b = {
            length: g.length,
            action: "POP",
            location: g[m],
            index: m,
            entries: g,
            createHref: d,
            push: function(e, t) {
                var r = "PUSH",
                    i = f(e, t, p(), b.location);
                c.confirmTransitionTo(i, r, n, function(e) {
                    if (e) {
                        var t = b.index + 1,
                            n = b.entries.slice(0);
                        n.length > t ? n.splice(t, n.length - t, i) : n.push(i), l({
                            action: r,
                            location: i,
                            index: t,
                            entries: n
                        })
                    }
                })
            },
            replace: function(e, t) {
                var r = "REPLACE",
                    i = f(e, t, p(), b.location);
                c.confirmTransitionTo(i, r, n, function(e) {
                    e && (b.entries[b.index] = i, l({
                        action: r,
                        location: i
                    }))
                })
            },
            go: _,
            goBack: function() {
                _(-1)
            },
            goForward: function() {
                _(1)
            },
            canGo: function(e) {
                var t = b.index + e;
                return t >= 0 && t < b.entries.length
            },
            block: function(e) {
                return void 0 === e && (e = !1), c.setPrompt(e)
            },
            listen: function(e) {
                return c.appendListener(e)
            }
        };
        return b
    }
}