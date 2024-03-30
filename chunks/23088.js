function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAssetIds: function() {
            return D
        },
        getAssetFromImageURL: function() {
            return g
        },
        getAssetIds: function() {
            return M
        },
        getAssetImage: function() {
            return A
        },
        getAssets: function() {
            return b
        }
    });
    var r, o = n("512722"),
        i = n.n(o),
        a = n("967888"),
        u = n("629815"),
        s = n("261328"),
        l = n("35523"),
        c = n("896299"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e, t) {
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
    }
    var y = "https://i.scdn.co/image/",
        I = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        h = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        O = (p(r = {}, f.PlatformTypes.SPOTIFY, {
            deserialize: function(e) {
                return "".concat(y).concat(encodeURIComponent(e))
            },
            serialize: function(e) {
                return e.split(y)[1]
            }
        }), p(r, f.PlatformTypes.TWITCH, {
            deserialize: function(e, t) {
                var n, r, o;
                return n = encodeURIComponent(e), r = t[0], o = t[1], "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(n, "-").concat(r, "x").concat(o, ".jpg")
            },
            serialize: function(e) {
                var t = e.match(I);
                return null != t ? t[1] : null
            }
        }), p(r, f.PlatformTypes.YOUTUBE, {
            deserialize: function(e) {
                var t;
                return t = encodeURIComponent(e), "https://i.ytimg.com/vi/".concat(t, "/hqdefault_live.jpg")
            },
            serialize: function(e) {
                var t = e.match(h);
                return null != t ? t[1] : null
            }
        }), p(r, "mp", {
            deserialize: function(e) {
                return i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()
            },
            serialize: function(e) {
                return e
            }
        }), r),
        T = {};

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = E(function(e) {
            var t;
            return m(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, a.HTTP.get({
                            url: f.Endpoints.APPLICATION_ASSETS(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return t = n.sent().body, u.default.dispatch({
                            type: "APPLICATION_ASSETS_UPDATE",
                            applicationId: e,
                            assets: t
                        }), [2, s.default.getApplicationAssets(e)]
                }
            })
        })).apply(this, arguments)
    }

    function g(e, t) {
        var n = O[e].serialize(t);
        return n ? "".concat(e, ":").concat(n.toString()) : null
    }

    function A(e, t, n) {
        if (null != t && t.includes(":")) {
            var r, o, i = (r = t.split(":"), o = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(r) || function(e, t) {
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
                }(r, o) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(r, o) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                u = i[0],
                s = i[1];
            if (u === f.PlatformTypes.TWITCH) {
                if (null == n || "number" == typeof n) {
                    new l.default("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                    return
                }
                return O[f.PlatformTypes.TWITCH].deserialize(s, n)
            }
            return Object.prototype.hasOwnProperty.call(O, u) ? O[u].deserialize(s) : void 0
        }
        if (null != e && null != t) {
            var _ = "number" == typeof n ? "?size=".concat((0, c.getBestMediaProxySize)(n)) : "";
            return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(_) : "".concat((0, a.getAPIBaseURL)(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(_)
        }
    }

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = E(function(e) {
            var t;
            return m(this, function(n) {
                switch (n.label) {
                    case 0:
                        var r, o, i;
                        return [4, (r = e, null == (o = s.default.getApplicationAssets(r)) || (i = o.lastUpdated, Date.now() - i > 36e5) ? S(r) : Promise.resolve(o))];
                    case 1:
                        return [2, null == (t = n.sent()) ? void 0 : t.assets]
                }
            })
        })).apply(this, arguments)
    }

    function R() {
        return (R = E(function(e, t) {
            var n, r, o, i, u, s, l, c, d, _;
            return m(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (0 === (n = t.filter(function(e) {
                                return null != e && !Object.prototype.hasOwnProperty.call(T, e) && null == T[e]
                            })).length) return [2];
                        return [4, a.HTTP.post({
                            url: f.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
                            body: {
                                urls: n
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        r = E.sent().body, o = !0, i = !1, u = void 0;
                        try {
                            for (s = r[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) d = (c = l.value).url, _ = c.external_asset_path, T[d] = _
                        } catch (e) {
                            i = !0, u = e
                        } finally {
                            try {
                                !o && null != s.return && s.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function C(e, t) {
        var n = 0;
        if (e.filter(function(e) {
                return (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:"))
            }).length > 0)
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                if (null != o) {
                    var i = Object.prototype.hasOwnProperty.call(T, o) ? T[o] : void 0;
                    null != i && (t[r] = g("mp", i), n++)
                }
            }
        return n === e.length
    }

    function P(e, t, n, r) {
        for (var o = !1, i = 0; i < e.length; i++) {
            var a = e[i];
            if (null != a) {
                if (null == t[i]) {
                    var u = Object.prototype.hasOwnProperty.call(n, a) && n[a];
                    if (!u) {
                        if (null == r || r <= 0) {
                            t[i] = null;
                            continue
                        }
                        o = !0
                    }
                    t[i] = u.id
                }
            }
        }
        return o
    }

    function D(e, t) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = E(function(e, t) {
            var n, r, o, i, a = arguments;
            return m(this, function(s) {
                switch (s.label) {
                    case 0:
                        if (n = a.length > 2 && void 0 !== a[2] ? a[2] : 1, u.default.dispatch({
                                type: "APPLICATION_ASSETS_FETCH",
                                applicationId: e
                            }), r = [], !((o = t.filter(function(e) {
                                return (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:"))
                            })).length > 0)) return [3, 2];
                        return [4, function(e, t) {
                            return R.apply(this, arguments)
                        }(e, o)];
                    case 1:
                        s.sent(), s.label = 2;
                    case 2:
                        if (C(t, r)) return u.default.dispatch({
                            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                            applicationId: e
                        }), [2, r];
                        return [4, b(e)];
                    case 3:
                        if (i = s.sent(), P(t, r, i, n)) return [2, S(e).then(function() {
                            return D(e, t, n - 1)
                        })];
                        return u.default.dispatch({
                            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                            applicationId: e
                        }), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function M(e, t) {
        var n = [];
        if (C(t, n)) return n;
        var r = s.default.getApplicationAssets(e);
        return null == r ? n : (P(t, n, r), n)
    }
}