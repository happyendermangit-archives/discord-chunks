function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createBrowserHistory: function() {
            return g
        },
        createHashHistory: function() {
            return k
        },
        createMemoryHistory: function() {
            return E
        },
        createLocation: function() {
            return h
        },
        locationsAreEqual: function() {
            return p
        },
        createPath: function() {
            return f
        }
    }), n("70102"), n("424973"), n("781738"), n("222007");
    var r = n("261438"),
        i = n("540545"),
        o = n("260630"),
        a = n("927854");

    function u(t) {
        return "/" === t.charAt(0) ? t : "/" + t
    }

    function s(t) {
        return "/" === t.charAt(0) ? t.substr(1) : t
    }

    function c(t, e) {
        var n, r;
        return (n = t, r = e, 0 === n.toLowerCase().indexOf(r.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(r.length))) ? t.substr(e.length) : t
    }

    function l(t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
    }

    function f(t) {
        var e = t.pathname,
            n = t.search,
            r = t.hash,
            i = e || "/";
        return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i
    }

    function h(t, e, n, o) {
        var a, u, s, c, l, f;
        if ("string" == typeof t) {
            ;
            s = "", c = "", -1 !== (l = (u = t || "/").indexOf("#")) && (c = u.substr(l), u = u.substr(0, l)), -1 !== (f = u.indexOf("?")) && (s = u.substr(f), u = u.substr(0, f)), (a = {
                pathname: u,
                search: "?" === s ? "" : s,
                hash: "#" === c ? "" : c
            }).state = e
        } else void 0 === (a = (0, r.default)({}, t)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== e && void 0 === a.state && (a.state = e);
        try {
            a.pathname = decodeURI(a.pathname)
        } catch (t) {
            if (t instanceof URIError) throw URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
            throw t
        }
        return n && (a.key = n), o ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, i.default)(a.pathname, o.pathname)) : a.pathname = o.pathname : !a.pathname && (a.pathname = "/"), a
    }

    function p(t, e) {
        return t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && t.key === e.key && (0, o.default)(t.state, e.state)
    }

    function d() {
        var t = null,
            e = [];
        return {
            setPrompt: function(e) {
                return t = e,
                    function() {
                        t === e && (t = null)
                    }
            },
            confirmTransitionTo: function(e, n, r, i) {
                if (null != t) {
                    var o = "function" == typeof t ? t(e, n) : t;
                    "string" == typeof o ? "function" == typeof r ? r(o, i) : i(!0) : i(!1 !== o)
                } else i(!0)
            },
            appendListener: function(t) {
                var n = !0;

                function r() {
                    n && t.apply(void 0, arguments)
                }
                return e.push(r),
                    function() {
                        n = !1, e = e.filter(function(t) {
                            return t !== r
                        })
                    }
            },
            notifyListeners: function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                e.forEach(function(t) {
                    return t.apply(void 0, n)
                })
            }
        }
    }
    var v = !!("undefined" != typeof window && window.document && window.document.createElement);

    function y(t, e) {
        e(window.confirm(t))
    }
    var PopStateEvent = "popstate",
        HashChangeEvent = "hashchange";

    function m() {
        try {
            return window.history.state || {}
        } catch (t) {
            return {}
        }
    }

    function g(t) {
        void 0 === t && (t = {}), v || (0, a.default)(!1);
        var e, n = window.history;
        var i = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
            o = -1 !== window.navigator.userAgent.indexOf("Trident"),
            s = t,
            p = s.forceRefresh,
            g = void 0 !== p && p,
            b = s.getUserConfirmation,
            _ = void 0 === b ? y : b,
            x = s.keyLength,
            w = void 0 === x ? 6 : x,
            O = t.basename ? l(u(t.basename)) : "";

        function k(t) {
            var e = t || {},
                n = e.key,
                r = e.state,
                i = window.location,
                o = i.pathname + i.search + i.hash;
            return O && (o = c(o, O)), h(o, r, n)
        }

        function S() {
            return Math.random().toString(36).substr(2, w)
        }
        var E = d();

        function P(t) {
            (0, r.default)(z, t), z.length = n.length, E.notifyListeners(z.location, z.action)
        }

        function C(t) {
            if (!(void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS"))) R(k(t.state))
        }

        function A() {
            R(k(m()))
        }
        var j = !1;

        function R(t) {
            j ? (j = !1, P()) : E.confirmTransitionTo(t, "POP", _, function(e) {
                e ? P({
                    action: "POP",
                    location: t
                }) : function(t) {
                    var e = z.location,
                        n = M.indexOf(e.key); - 1 === n && (n = 0);
                    var r = M.indexOf(t.key); - 1 === r && (r = 0);
                    var i = n - r;
                    i && (j = !0, V(i))
                }(t)
            })
        }
        var T = k(m()),
            M = [T.key];

        function L(t) {
            return O + f(t)
        }

        function V(t) {
            n.go(t)
        }
        var F = 0;

        function I(t) {
            1 === (F += t) && 1 === t ? (window.addEventListener(PopStateEvent, C), o && window.addEventListener(HashChangeEvent, A)) : 0 === F && (window.removeEventListener(PopStateEvent, C), o && window.removeEventListener(HashChangeEvent, A))
        }
        var N = !1,
            z = {
                length: n.length,
                action: "POP",
                location: T,
                createHref: L,
                push: function(t, e) {
                    var r = "PUSH",
                        o = h(t, e, S(), z.location);
                    E.confirmTransitionTo(o, r, _, function(t) {
                        if (t) {
                            var e = L(o),
                                a = o.key,
                                u = o.state;
                            if (i) {
                                if (n.pushState({
                                        key: a,
                                        state: u
                                    }, null, e), g) window.location.href = e;
                                else {
                                    var s = M.indexOf(z.location.key),
                                        c = M.slice(0, s + 1);
                                    c.push(o.key), M = c, P({
                                        action: r,
                                        location: o
                                    })
                                }
                            } else window.location.href = e
                        }
                    })
                },
                replace: function(t, e) {
                    var r = "REPLACE",
                        o = h(t, e, S(), z.location);
                    E.confirmTransitionTo(o, r, _, function(t) {
                        if (t) {
                            var e = L(o),
                                a = o.key,
                                u = o.state;
                            if (i) {
                                if (n.replaceState({
                                        key: a,
                                        state: u
                                    }, null, e), g) window.location.replace(e);
                                else {
                                    var s = M.indexOf(z.location.key); - 1 !== s && (M[s] = o.key), P({
                                        action: r,
                                        location: o
                                    })
                                }
                            } else window.location.replace(e)
                        }
                    })
                },
                go: V,
                goBack: function() {
                    V(-1)
                },
                goForward: function() {
                    V(1)
                },
                block: function(t) {
                    void 0 === t && (t = !1);
                    var e = E.setPrompt(t);
                    return !N && (I(1), N = !0),
                        function() {
                            return N && (N = !1, I(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = E.appendListener(t);
                    return I(1),
                        function() {
                            I(-1), e()
                        }
                }
            };
        return z
    }
    var b = "hashchange",
        _ = {
            hashbang: {
                encodePath: function(t) {
                    return "!" === t.charAt(0) ? t : "!/" + s(t)
                },
                decodePath: function(t) {
                    return "!" === t.charAt(0) ? t.substr(1) : t
                }
            },
            noslash: {
                encodePath: s,
                decodePath: u
            },
            slash: {
                encodePath: u,
                decodePath: u
            }
        };

    function x(t) {
        var e = t.indexOf("#");
        return -1 === e ? t : t.slice(0, e)
    }

    function w() {
        var t = window.location.href,
            e = t.indexOf("#");
        return -1 === e ? "" : t.substring(e + 1)
    }

    function O(t) {
        window.location.replace(x(window.location.href) + "#" + t)
    }

    function k(t) {
        void 0 === t && (t = {}), v || (0, a.default)(!1);
        var e = window.history;
        window.navigator.userAgent.indexOf("Firefox");
        var n = t,
            i = n.getUserConfirmation,
            o = void 0 === i ? y : i,
            s = n.hashType,
            p = t.basename ? l(u(t.basename)) : "",
            m = _[void 0 === s ? "slash" : s],
            g = m.encodePath,
            k = m.decodePath;

        function S() {
            var t = k(w());
            return p && (t = c(t, p)), h(t)
        }
        var E = d();

        function P(t) {
            (0, r.default)(z, t), z.length = e.length, E.notifyListeners(z.location, z.action)
        }
        var C = !1,
            A = null;

        function j() {
            var t = w(),
                e = g(t);
            if (t !== e) O(e);
            else {
                var n, r, i = S(),
                    a = z.location;
                if (!C && (n = a, r = i, n.pathname === r.pathname && n.search === r.search && n.hash === r.hash) || A === f(i)) return;
                A = null,
                    function(t) {
                        C ? (C = !1, P()) : E.confirmTransitionTo(t, "POP", o, function(e) {
                            e ? P({
                                action: "POP",
                                location: t
                            }) : function(t) {
                                var e = z.location,
                                    n = L.lastIndexOf(f(e)); - 1 === n && (n = 0);
                                var r = L.lastIndexOf(f(t)); - 1 === r && (r = 0);
                                var i = n - r;
                                i && (C = !0, V(i))
                            }(t)
                        })
                    }(i)
            }
        }
        var R = w(),
            T = g(R);
        R !== T && O(T);
        var M = S(),
            L = [f(M)];

        function V(t) {
            e.go(t)
        }
        var F = 0;

        function I(t) {
            1 === (F += t) && 1 === t ? window.addEventListener(b, j) : 0 === F && window.removeEventListener(b, j)
        }
        var N = !1,
            z = {
                length: e.length,
                action: "POP",
                location: M,
                createHref: function(t) {
                    var e = document.querySelector("base"),
                        n = "";
                    return e && e.getAttribute("href") && (n = x(window.location.href)), n + "#" + g(p + f(t))
                },
                push: function(t, e) {
                    var n = "PUSH",
                        r = h(t, void 0, void 0, z.location);
                    E.confirmTransitionTo(r, n, o, function(t) {
                        if (t) {
                            var e = f(r),
                                i = g(p + e);
                            if (w() !== i) {
                                A = e, o = i, window.location.hash = o;
                                var o, a = L.lastIndexOf(f(z.location)),
                                    u = L.slice(0, a + 1);
                                u.push(e), L = u, P({
                                    action: n,
                                    location: r
                                })
                            } else P()
                        }
                    })
                },
                replace: function(t, e) {
                    var n = "REPLACE",
                        r = h(t, void 0, void 0, z.location);
                    E.confirmTransitionTo(r, n, o, function(t) {
                        if (t) {
                            var e = f(r),
                                i = g(p + e);
                            w() !== i && (A = e, O(i));
                            var o = L.indexOf(f(z.location)); - 1 !== o && (L[o] = e), P({
                                action: n,
                                location: r
                            })
                        }
                    })
                },
                go: V,
                goBack: function() {
                    V(-1)
                },
                goForward: function() {
                    V(1)
                },
                block: function(t) {
                    void 0 === t && (t = !1);
                    var e = E.setPrompt(t);
                    return !N && (I(1), N = !0),
                        function() {
                            return N && (N = !1, I(-1)), e()
                        }
                },
                listen: function(t) {
                    var e = E.appendListener(t);
                    return I(1),
                        function() {
                            I(-1), e()
                        }
                }
            };
        return z
    }

    function S(t, e, n) {
        return Math.min(Math.max(t, e), n)
    }

    function E(t) {
        void 0 === t && (t = {});
        var e = t,
            n = e.getUserConfirmation,
            i = e.initialEntries,
            o = void 0 === i ? ["/"] : i,
            a = e.initialIndex,
            u = e.keyLength,
            s = void 0 === u ? 6 : u,
            c = d();

        function l(t) {
            (0, r.default)(g, t), g.length = g.entries.length, c.notifyListeners(g.location, g.action)
        }

        function p() {
            return Math.random().toString(36).substr(2, s)
        }
        var v = S(void 0 === a ? 0 : a, 0, o.length - 1),
            y = o.map(function(t) {
                return "string" == typeof t ? h(t, void 0, p()) : h(t, void 0, t.key || p())
            });

        function m(t) {
            var e = S(g.index + t, 0, g.entries.length - 1),
                r = g.entries[e];
            c.confirmTransitionTo(r, "POP", n, function(t) {
                t ? l({
                    action: "POP",
                    location: r,
                    index: e
                }) : l()
            })
        }
        var g = {
            length: y.length,
            action: "POP",
            location: y[v],
            index: v,
            entries: y,
            createHref: f,
            push: function(t, e) {
                var r = "PUSH",
                    i = h(t, e, p(), g.location);
                c.confirmTransitionTo(i, r, n, function(t) {
                    if (t) {
                        var e = g.index + 1,
                            n = g.entries.slice(0);
                        n.length > e ? n.splice(e, n.length - e, i) : n.push(i), l({
                            action: r,
                            location: i,
                            index: e,
                            entries: n
                        })
                    }
                })
            },
            replace: function(t, e) {
                var r = "REPLACE",
                    i = h(t, e, p(), g.location);
                c.confirmTransitionTo(i, r, n, function(t) {
                    t && (g.entries[g.index] = i, l({
                        action: r,
                        location: i
                    }))
                })
            },
            go: m,
            goBack: function() {
                m(-1)
            },
            goForward: function() {
                m(1)
            },
            canGo: function(t) {
                var e = g.index + t;
                return e >= 0 && e < g.entries.length
            },
            block: function(t) {
                return void 0 === t && (t = !1), c.setPrompt(t)
            },
            listen: function(t) {
                return c.appendListener(t)
            }
        };
        return g
    }
}