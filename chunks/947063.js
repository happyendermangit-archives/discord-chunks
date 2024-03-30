function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LobbyError: function() {
            return p
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("281767");

    function l(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

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
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function e(t) {
            l(this, e), f(this, "code", void 0), this.code = t
        },
        m = {},
        y = {};

    function I(e, t) {
        if (null == y[e]) return null;
        var n = y[e],
            r = n.socketId,
            o = n.timeout,
            i = n.resolve,
            a = n.reject;
        return delete y[e], null != o && clearTimeout(o), null != i && null != a && t(i, a), r
    }

    function h(e) {
        var t = e.lobbyId,
            n = e.member,
            r = n.user,
            o = n.metadata,
            i = m[t];
        if (null == i) return !1;
        var a = i.members.find(function(e) {
            return e.user.id === r.id
        });
        null != a ? (a.user = r, a.metadata = o) : i.members.push({
            user: r,
            metadata: o
        })
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(s, e);
        var t, n, r, o, a, u = (t = s, n = function() {
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

        function s() {
            return l(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "getLobbies",
            value: function() {
                return m
            }
        }, {
            key: "getLobbiesWithVoice",
            value: function() {
                return i().filter(m, function(e) {
                    return e.voice
                })
            }
        }, {
            key: "getLobby",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "getPendingLobbies",
            value: function() {
                return i().map(y, function(e, t) {
                    return {
                        id: t,
                        secret: e.secret
                    }
                })
            }
        }], c(r.prototype, o), a && c(r, a), s
    }(a.default.Store);
    f(O, "displayName", "LobbyStore"), t.default = new O(u.default, {
        CONNECTION_OPEN: function() {
            m = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            m = e.lobbies
        },
        LOBBY_CONNECT: function(e) {
            var t = e.socketId,
                n = e.lobbyId,
                r = e.lobbySecret,
                o = e.resolve,
                i = e.reject;
            if (null != y[n] || null != m[n]) {
                null != i && i(new p(s.LobbyErrors.ALREADY_CONNECTING));
                return
            }
            y[n] = {
                socketId: t,
                secret: r,
                resolve: o,
                reject: i,
                timeout: __OVERLAY__ ? null : setTimeout(function() {
                    u.default.dispatch({
                        type: "LOBBY_DELETE",
                        lobbyId: n,
                        reason: s.LobbyErrors.SERVICE_UNAVAILABLE
                    })
                }, 15e3)
            }
        },
        LOBBY_DISCONNECT: function(e) {
            I(e.lobbyId, function(e, t) {
                return t(new p(s.LobbyErrors.NO_ERROR))
            })
        },
        LOBBY_CREATE: function(e) {
            var t = e.lobby,
                n = I(t.id, function(e) {
                    return e(t)
                });
            null != n && (m[t.id] = _({
                socketId: n,
                voice: !1
            }, m[t.id], t))
        },
        LOBBY_UPDATE: function(e) {
            var t = e.lobby,
                n = m[t.id];
            null != n && (m[t.id] = _({}, n, t))
        },
        LOBBY_DELETE: function(e) {
            var t = e.lobbyId,
                n = e.reason;
            delete m[t], I(t, function(e, t) {
                return t(new p(n))
            })
        },
        LOBBY_MEMBER_CONNECT: h,
        LOBBY_MEMBER_UPDATE: h,
        LOBBY_MEMBER_DISCONNECT: function(e) {
            var t = e.lobbyId,
                n = e.member.user,
                r = m[t];
            if (null == r) return !1;
            r.members = r.members.filter(function(e) {
                return e.user.id !== n.id
            })
        },
        LOBBY_VOICE_CONNECT: function(e) {
            var t = m[e.lobbyId];
            if (null == t) return !1;
            t.voice = !0
        },
        LOBBY_VOICE_DISCONNECT: function(e) {
            var t = m[e.lobbyId];
            if (null == t) return !1;
            t.voice = !1
        },
        RPC_APP_DISCONNECTED: function(e) {
            var t = e.socketId;
            i().forEach(m, function(e) {
                e.socketId === t && u.default.dispatch({
                    type: "LOBBY_DISCONNECT",
                    lobbyId: e.id
                })
            })
        }
    })
}