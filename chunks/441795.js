function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("348327"),
        i = n.n(o),
        a = n("898511"),
        u = n("967888"),
        s = n("629815"),
        l = n("470888"),
        c = n("386823"),
        f = n("23088"),
        d = n("388990"),
        _ = n("295453"),
        E = n("930949"),
        p = n("281767");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function I(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t && h(e.prototype, t), n && h(e, n), e
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e, t) {
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
    var A = 1 * d.default.Millis.MINUTE,
        b = 5 * d.default.Millis.MINUTE,
        N = /live_user_(.*)-\{width\}/,
        R = null,
        C = 0,
        P = null,
        D = new Set,
        L = {};

    function M(e, t, n) {
        return u.HTTP.get({
            url: "".concat("https://api.twitch.tv/helix").concat(e),
            query: t,
            headers: {
                "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                Authorization: "Bearer ".concat(n)
            }
        })
    }

    function U() {
        return (U = y(function(e, t) {
            var n, r;
            return g(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (null != (n = L[e])) return [2, n];
                        return [4, M("/games", {
                            id: e
                        }, t)];
                    case 1:
                        return r = o.sent().body.data[0].name, L[e] = r, [2, r]
                }
            })
        })).apply(this, arguments)
    }
    var w = new(function() {
        function e() {
            I(this, e), T(this, "_nextCheck", void 0), T(this, "_started", void 0), this._started = !1
        }
        return O(e, [{
            key: "start",
            value: function() {
                !this._started && (this._started = !0, _.default.isFetching() ? l.default.fetch() : this._check())
            }
        }, {
            key: "stop",
            value: function() {
                this._started = !1, P = null, C = 0, null != this._nextCheck && clearTimeout(this._nextCheck), s.default.dispatch({
                    type: "STREAMING_UPDATE",
                    stream: null
                })
            }
        }, {
            key: "_checkTwitch",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this;
                return y(function() {
                    var r, o, i, a, u, s, d, _, E, m, y;
                    return g(this, function(I) {
                        switch (I.label) {
                            case 0:
                                if (e.revoked || null == (t = null != t ? t : e.accessToken)) return [2, null];
                                I.label = 1;
                            case 1:
                                return I.trys.push([1, 4, , 5]), [4, M("/streams", {
                                    user_id: e.id,
                                    first: 1
                                }, t)];
                            case 2:
                                if (null == (o = I.sent().body.data[0]) || "live" !== o.type) throw Error("no stream");
                                return i = o.thumbnail_url, a = o.game_id, u = o.title, d = {
                                    large_image: null != i && null !== (s = (0, f.getAssetFromImageURL)(p.PlatformTypes.TWITCH, i)) && void 0 !== s ? s : void 0
                                }, [4, function(e, t) {
                                    return U.apply(this, arguments)
                                }(a, t)];
                            case 3:
                                var h, O;
                                return _ = I.sent(), E = c.default.get(p.PlatformTypes.TWITCH), y = null !== (h = i, m = null === (O = N.exec(h)) || void 0 === O ? void 0 : O[1]) && void 0 !== m ? m : e.name, [2, {
                                    url: null === (r = E.getPlatformUserUrl) || void 0 === r ? void 0 : r.call(E, {
                                        id: e.id,
                                        name: y
                                    }),
                                    name: E.name,
                                    assets: d,
                                    details: u,
                                    state: _
                                }];
                            case 4:
                                if (401 === I.sent().status && null == t) return [2, l.default.refreshAccessToken(e.type, e.id).then(function(t) {
                                    return n._checkTwitch(e, t)
                                }).catch(function() {
                                    return null
                                })];
                                return [2, null];
                            case 5:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "_checkYouTube",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this;
                return y(function() {
                    var r, o, i, a, s, d, _, E, m;
                    return g(this, function(y) {
                        switch (y.label) {
                            case 0:
                                if (P = null, e.revoked || D.has(e.id)) return [2, null];
                                y.label = 1;
                            case 1:
                                return y.trys.push([1, 3, , 4]), [4, u.HTTP.get({
                                    url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                                    query: {
                                        part: "id,snippet",
                                        broadcastStatus: "active",
                                        broadcastType: "all"
                                    },
                                    headers: {
                                        Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                var I;
                                if ((r = y.sent().body.items).length < 1) throw Error("no stream");
                                return i = (o = r[0]).id, s = (a = o.snippet).title, d = a.thumbnails, E = {
                                    large_image: null !== (_ = (0, f.getAssetFromImageURL)(p.PlatformTypes.YOUTUBE, d.high.url)) && void 0 !== _ ? _ : void 0
                                }, [2, P = {
                                    url: (I = i, "https://youtube.com/watch?v=".concat(I)),
                                    name: c.default.get(p.PlatformTypes.YOUTUBE).name,
                                    details: s,
                                    assets: E
                                }];
                            case 3:
                                if (401 === (m = y.sent()).status && null == t) return [2, l.default.refreshAccessToken(e.type, e.id).then(function(t) {
                                    return n._checkYouTube(e, t)
                                }).catch(function() {
                                    return null
                                })];
                                return 403 === m.status && D.add(e.id), [2, null];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "_check",
            value: function() {
                var e = this;
                if (!!this._started) {
                    var t = _.default.getAccounts();
                    if (null != t) {
                        null != this._nextCheck && clearTimeout(this._nextCheck);
                        var n = [p.PlatformTypes.TWITCH],
                            r = Date.now();
                        C <= r && (n.push(p.PlatformTypes.YOUTUBE), C = r + b), Promise.allSettled(t.filter(function(e) {
                            return n.includes(e.type)
                        }).map(function(t) {
                            return t.type === p.PlatformTypes.TWITCH ? e._checkTwitch(t) : e._checkYouTube(t)
                        })).then(function(t) {
                            if (e._started) {
                                var n, r = null === (n = t.find(function(e) {
                                    return "fulfilled" === e.status && null != e.value
                                })) || void 0 === n ? void 0 : n.value;
                                null == r && null != P && (r = P), s.default.dispatch({
                                    type: "STREAMING_UPDATE",
                                    stream: r
                                })
                            }
                            e._scheduleCheck()
                        })
                    }
                }
            }
        }, {
            key: "_scheduleCheck",
            value: function() {
                var e = this;
                this._started && (this._nextCheck = setTimeout(function() {
                    return e._check()
                }, A))
            }
        }]), e
    }());

    function k() {
        E.default.enabled ? w.start() : w.stop()
    }
    var G = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return I(this, o), r.apply(this, arguments)
        }
        return O(o, [{
            key: "initialize",
            value: function() {
                k(), this.waitFor(_.default), this.syncWith([E.default], k)
            }
        }, {
            key: "getStream",
            value: function() {
                return R
            }
        }]), o
    }(a.default.Store);
    T(G, "displayName", "ExternalStreamingStore"), t.default = new G(s.default, {
        STREAMING_UPDATE: function(e) {
            var t;
            if (i()(e.stream, R)) return !1;
            R = null !== (t = e.stream) && void 0 !== t ? t : null
        },
        USER_CONNECTIONS_UPDATE: function() {
            return w._check()
        }
    })
}