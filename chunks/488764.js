function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("935741"),
        d = n("29604"),
        _ = n("957808"),
        E = n("306912"),
        p = n("208454"),
        m = n("665863"),
        y = n("359017"),
        I = n("353934"),
        h = n("672933");

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    }(r = o || (o = {})).SPEAKER = "speaker", r.MODERATOR = "moderator";
    var g = {},
        A = (T(i = {}, "speaker", !1), T(i, "moderator", !1), i);

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        null == g[t] && (g[t] = {});
        var r = function(e, t) {
            var n, r, o, i, a, u, s, l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = f.default.getChannel(t),
                d = null == c ? void 0 : c.getGuildId(),
                _ = E.default.getGuild(d);
            if (null == _ || null == c || !c.isGuildStageVoice()) return A;
            return T(s = {}, "speaker", (n = e, r = t, o = m.default.getVoiceStateForChannel(r, n), (0, h.getAudienceRequestToSpeakState)(o) === h.RequestToSpeakStates.ON_STAGE)), T(s, "moderator", l ? (i = e, a = _, u = c, y.can({
                permission: I.MODERATE_STAGE_CHANNEL_PERMISSIONS,
                user: i,
                context: a,
                overwrites: u.permissionOverwrites,
                roles: E.default.getRoles(a.id)
            })) : null), s
        }(e, t, n);
        return g[t][e] = r, r
    }

    function N(e, t) {
        if (null == t) return !1;
        var n, r = f.default.getChannel(t);
        return !!(null != r && r.isGuildStageVoice()) && (null === (n = g[t]) || void 0 === n || delete n[e], !0)
    }

    function R(e) {
        var t = d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY].filter(function(e) {
                return e.channel.isGuildStageVoice()
            }),
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value.channel;
                delete g[u.id]
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
        return t.length > 0
    }

    function C(e) {
        var t = e.guildId,
            n = e.user;
        return null != n && null != t && function(e, t) {
            for (var n in g) {
                var r = f.default.getBasicChannel(n);
                if (null != r) r.guild_id === t && delete g[n][e]
            }
            return !0
        }(n.id, t)
    }

    function P(e) {
        var t = e.guild;
        for (var n in g) {
            var r = f.default.getBasicChannel(n);
            (null == r || r.guild_id === t.id) && delete g[n]
        }
    }
    var D = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
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

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(_.default, f.default, E.default, p.default, m.default)
            }
        }, {
            key: "isSpeaker",
            value: function(e, t) {
                return this.getPermissionsForUser(e, t).speaker
            }
        }, {
            key: "isModerator",
            value: function(e, t) {
                var n;
                return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n
            }
        }, {
            key: "isAudienceMember",
            value: function(e, t) {
                var n = this.getPermissionsForUser(e, t);
                return !n.speaker && !n.moderator
            }
        }, {
            key: "getPermissionsForUser",
            value: function(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e || null == t) return A;
                var o = null === (n = g[t]) || void 0 === n ? void 0 : n[e];
                if (null != o) return r && null == o.moderator ? b(e, t, !0) : o;
                return b(e, t, r)
            }
        }], O(r.prototype, o), i && O(r, i), u
    }(l.default.Store);
    T(D, "displayName", "StageChannelRoleStore"), t.default = new D(c.default, {
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    delete g[u.id]
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
        },
        CONNECTION_OPEN: function() {
            g = {}
        },
        GUILD_MEMBER_REMOVE: C,
        GUILD_MEMBER_UPDATE: C,
        GUILD_ROLE_UPDATE: function(e) {
            R(e.guildId)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t = R(e.guildId),
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a, u = (null !== (i = e.voiceStates) && void 0 !== i ? i : [])[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var s = a.value;
                    t = N(s.userId, s.channelId) || t
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != u.return && u.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        },
        VOICE_STATE_UPDATES: function(e) {
            var t = e.voiceStates;
            return !s().isEmpty(g) && t.reduce(function(e, t) {
                return N(t.userId, t.channelId) || e
            }, !1)
        },
        GUILD_CREATE: P,
        GUILD_DELETE: P
    })
}