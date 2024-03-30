function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("348327"),
        s = n.n(u),
        l = n("392711"),
        c = n.n(l),
        f = n("898511"),
        d = n("727309"),
        _ = n("629815"),
        E = n("736381"),
        p = n("73013"),
        m = n("217014"),
        y = n("935741"),
        I = n("306912"),
        h = n("29884"),
        O = n("776982"),
        T = n("380019"),
        S = n("208454"),
        v = n("665863"),
        g = n("473702"),
        A = n("991160"),
        b = n("488764"),
        N = n("487181");

    function R(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var D = "NO_GUILD",
        L = new d.SecondaryIndexMap(function(e) {
            return [function(e) {
                var t;
                return null !== (t = e.getGuildId()) && void 0 !== t ? t : D
            }(e)]
        }, function(e) {
            return e.id
        }),
        M = new Set,
        U = {};

    function w(e) {
        return L.values(null != e ? e : void 0, !0).map(function(e) {
            return e.id
        })
    }

    function k(e) {
        !M.has(e) && (M.add(e), c()(y.default.getMutableGuildChannelsForGuild(e)).values().forEach(function(e) {
            j(e) && L.set(e.id, e)
        }))
    }

    function G(e) {
        var t = U[e];
        if (null != t) return t;
        var n = y.default.getChannel(e);
        return null != n && n.isGuildStageVoice() ? (k(n.guild_id), j(n)) ? B(e) : null : null
    }

    function B(e) {
        var t = U[e];
        return null == t && (t = new A.default(e), U[e] = t, t.rebuild()), t
    }

    function j(e) {
        return null != e && e.isGuildStageVoice() && g.default.countVoiceStatesForChannel(e.id) > 0
    }

    function F(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
        return t.reduce(function(t, n) {
            var r, o, i, a = B(n);
            if (!e(a)) return t;
            return r = n, o = a, null != (i = y.default.getChannel(r)) && i.isGuildStageVoice() ? 0 === o.size() ? H(i.id) : null != L.get(i.id) || L.set(i.id, i) : H(r), !0
        }, !1)
    }

    function V(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
        return F(function(t) {
            return t.updateParticipant(e)
        }, t)
    }

    function H(e) {
        return null != e && (delete U[e], L.delete(e), !0)
    }

    function x() {
        M.clear(), L.clear(), U = {}
    }

    function Y(e, t, n) {
        if (!(null == n || e.has(n))) {
            var r = y.default.getChannel(n);
            (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
        }
    }

    function W(e) {
        return V(e.user.id)
    }

    function K(e) {
        return V(e.relationship.id)
    }

    function z(e) {
        ! function(e) {
            var t = L.values(e),
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    L.delete(u.id), delete U[u.id]
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            M.delete(e)
        }(e.guild.id)
    }

    function X(e) {
        var t = e.streamKey,
            n = (0, E.decodeStreamKey)(t),
            r = n.channelId,
            o = n.guildId,
            i = n.ownerId;
        return !!(null != o && M.has(o)) && V(i, [r])
    }
    var q = [],
        Q = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && P(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = C(t);
                if (n) {
                    var a = C(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(m.default, S.default, y.default, T.default, v.default, h.default, g.default, I.default, b.default, O.default, N.default, p.default)
                }
            }, {
                key: "getParticipantsVersion",
                value: function(e) {
                    var t, n;
                    return null == e ? -1 : null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                }
            }, {
                key: "getMutableParticipants",
                value: function(e, t) {
                    var n, r;
                    return null == e ? q : null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : q
                }
            }, {
                key: "getMutableRequestToSpeakParticipants",
                value: function(e) {
                    var t, n;
                    return null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : q
                }
            }, {
                key: "getRequestToSpeakParticipantsVersion",
                value: function(e) {
                    var t, n;
                    return null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                }
            }, {
                key: "getParticipantCount",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                }
            }, {
                key: "getChannels",
                value: function(e) {
                    return k(null != e ? e : D), L.values(null != e ? e : D)
                }
            }, {
                key: "getChannelsVersion",
                value: function() {
                    return L.version
                }
            }, {
                key: "getParticipant",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                }
            }], R(r.prototype, o), i && R(r, i), u
        }(f.default.Store);
    i = "StageChannelParticipantStore", (o = "displayName") in(r = Q) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new Q(_.default, {
        CONNECTION_OPEN: x,
        OVERLAY_INITIALIZE: x,
        VOICE_STATE_UPDATES: function(e) {
            var t = e.voiceStates,
                n = new Set;
            return t.reduce(function(e, t) {
                if (null == t.guildId || !M.has(t.guildId)) return e;
                var r = new Set;
                return (Y(n, r, t.oldChannelId), Y(n, r, t.channelId), 0 === r.size) ? e : V(t.userId, Array.from(r)) || e
            }, !1)
        },
        CHANNEL_DELETE: function(e) {
            return H(e.channel.id)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            var t = e.members,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    n = V(s.user.id) || n
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        },
        USER_UPDATE: W,
        GUILD_MEMBER_REMOVE: W,
        GUILD_MEMBER_UPDATE: W,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels.reduce(function(e, t) {
                if (!t.isGuildStageVoice() || !M.has(t.guild_id)) return e;
                var n = L.get(t.id);
                return null == n || s()(t.permissionOverwrites, n.permissionOverwrites) ? e : (e.push(t.id), L.set(t.id, t), e)
            }, []);
            return F(function(e) {
                return e.rebuild()
            }, t), t.length > 0
        },
        GUILD_ROLE_UPDATE: function(e) {
            var t = e.guildId;
            if (M.has(t)) return F(function(e) {
                return e.rebuild()
            }, w(t))
        },
        RTC_CONNECTION_VIDEO: function(e) {
            var t = e.channelId,
                n = e.guildId,
                r = e.userId;
            return !!(null != n && M.has(n)) && V(r, [t])
        },
        STREAM_CLOSE: X,
        STREAM_DELETE: X,
        RELATIONSHIP_ADD: K,
        RELATIONSHIP_REMOVE: K,
        GUILD_CREATE: z,
        GUILD_DELETE: z,
        PASSIVE_UPDATE_V1: function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = w(e.guildId)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    t = B(u).rebuild() || t
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        }
    })
}