function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_SELECTABLE_CHANNELS_KEY: function() {
            return R
        },
        GUILD_VOCAL_CHANNELS_KEY: function() {
            return C
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("22287"),
        u = n("898511"),
        s = n("629815"),
        l = n("291178"),
        c = n("534965"),
        f = n("652709"),
        d = n("152769"),
        _ = n("569492"),
        E = n("359017"),
        p = n("217014"),
        m = n("935741"),
        y = n("957808"),
        I = n("306912"),
        h = n("29884"),
        O = n("776982"),
        T = n("208454"),
        S = n("281767"),
        v = n("941504");

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = "SELECTABLE",
        C = "VOCAL",
        P = null,
        D = {},
        L = {},
        M = {},
        U = null,
        w = {},
        k = {
            comparator: -1,
            channel: (0, _.createChannelRecord)({
                id: S.NULL_STRING_CHANNEL_ID,
                type: S.ChannelTypes.GUILD_CATEGORY,
                name: v.default.Messages.UNCATEGORIZED
            })
        },
        G = F(S.NULL_STRING_GUILD_ID),
        B = [],
        j = {};

    function F(e) {
        var t;
        return A(t = {
            id: e
        }, R, []), A(t, C, []), A(t, S.ChannelTypes.GUILD_CATEGORY, [k]), A(t, "count", 0), t
    }

    function V(e, t) {
        return e.comparator - t.comparator
    }

    function H() {
        D = {}, w = {}, L = {}, M = {}, null != P && x(P)
    }

    function x(e) {
        var t, n, r, o, a = F(e);
        return D[e] = a, w[e] = [], r = function(e) {
                if (e === S.FAVORITES) return function() {
                    var e = {},
                        t = f.default.getFavoriteChannels();
                    for (var n in t) {
                        var r = m.default.getChannel(n);
                        if (null != r) {
                            var o = t[n],
                                i = (0, d.createFavoritesChannelRecord)(t, o, r);
                            e[n] = {
                                channel: i,
                                comparator: i.position
                            }
                        }
                    }
                    return e
                }();
                var t = {},
                    n = m.default.getMutableGuildChannelsForGuild(e);
                for (var r in n) t[r] = {
                    channel: n[r],
                    comparator: n[r].position
                };
                return t
            }(n = (t = a).id), i().forEach(r, function(e) {
                var r = e.channel;
                if (t.count += 1, !_.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(r.type) || h.default.can(S.Permissions.VIEW_CHANNEL, r) || l.default.isChannelGated(r.guild_id, r.id) || r.id === U) {
                    var o, i = (o = r.type, (0, _.isGuildSelectableChannelType)(o) ? R : (0, _.isGuildVocalChannelType)(o) ? C : o);
                    r.type === S.ChannelTypes.GUILD_DIRECTORY && (null == w[n] && (w[n] = []), w[n].push(e)), null != t[i] && t[i].push(e)
                }
            }), (o = a)[R].sort(V), o[C].sort(V), o[S.ChannelTypes.GUILD_CATEGORY].sort(V),
            function(e) {
                var t = L[e.id] = {},
                    n = {};
                e[R].forEach(function(e) {
                    var r = e.channel,
                        o = (0, c.computeChannelName)(r, T.default, O.default),
                        i = Object.prototype.hasOwnProperty.call(n, o) ? n[o] : null;
                    null == i ? n[o] = 1 : (n[o] = i + 1, o += "~".concat(i)), t[r.id] = {
                        id: r.id,
                        name: o
                    }
                })
            }(a),
            function(e) {
                (function(e, t) {
                    var n = I.default.getGuild(t);
                    if (null != n && z(e, n)) return !0;
                    var r = D[t];
                    null == r && (r = x(t));
                    var o = r[R],
                        i = r[C],
                        a = !0,
                        u = !1,
                        s = void 0;
                    try {
                        for (var l, c = o[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                            var f = l.value.channel;
                            if (z(e, f)) return !0
                        }
                    } catch (e) {
                        u = !0, s = e
                    } finally {
                        try {
                            !a && null != c.return && c.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                    var d = !0,
                        _ = !1,
                        E = void 0;
                    try {
                        for (var p, m = i[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                            var y = p.value.channel;
                            if (z(e, y)) return !0
                        }
                    } catch (e) {
                        _ = !0, E = e
                    } finally {
                        try {
                            !d && null != m.return && m.return()
                        } finally {
                            if (_) throw E
                        }
                    }
                    return !1
                })(T.default.getCurrentUser(), e) ? M[e] = !0: delete M[e]
            }(e), a
    }

    function Y(e) {
        var t = e.guild.id;
        if (null == t) return !1;
        D[t] = void 0, P === t && x(t)
    }

    function W(e) {
        var t = e.channel.guild_id;
        if (null == t) return !1;
        D[t] = void 0, t === P && x(t)
    }

    function K(e) {
        var t = e.guildId;
        D[t] = void 0, t === P && x(t)
    }

    function z(e, t) {
        return a.hasAny(E.computePermissions({
            user: e,
            context: t,
            checkElevated: !1
        }), S.ElevatedPermissions)
    }

    function X(e, t) {
        U = t;
        var n, r = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
        if (null == r) return !1;
        D[r] = void 0, r === P && x(r)
    }

    function q() {
        x(S.FAVORITES)
    }
    var Q = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
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
            var e, r, o, i = b(t);
            if (n) {
                var a = b(this).constructor;
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
                this.waitFor(I.default, y.default, m.default, h.default, p.default, l.default, f.default), this.syncWith([f.default], q)
            }
        }, {
            key: "getAllGuilds",
            value: function() {
                return D
            }
        }, {
            key: "getChannels",
            value: function(e) {
                var t, n;
                return null != e ? (null == (n = D[t = e]) && (n = x(t)), n) : G
            }
        }, {
            key: "getFirstChannelOfType",
            value: function(e, t, n) {
                var r = this.getChannels(e)[n].find(t);
                return null != r ? r.channel : null
            }
        }, {
            key: "getFirstChannel",
            value: function(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return null !== (n = this.getFirstChannelOfType(e, t, R)) && void 0 !== n ? n : r ? this.getFirstChannelOfType(e, t, C) : null
            }
        }, {
            key: "getDefaultChannel",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.Permissions.VIEW_CHANNEL;
                return this.getFirstChannel(e, function(e) {
                    return h.default.can(n, e.channel)
                }, t)
            }
        }, {
            key: "getSFWDefaultChannel",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.Permissions.VIEW_CHANNEL;
                return this.getFirstChannel(e, function(e) {
                    return h.default.can(n, e.channel) && !e.channel.nsfw
                }, t)
            }
        }, {
            key: "getSelectableChannelIds",
            value: function(e) {
                return this.getChannels(e)[R].map(function(e) {
                    return e.channel.id
                })
            }
        }, {
            key: "getSelectableChannels",
            value: function(e) {
                return this.getChannels(e)[R]
            }
        }, {
            key: "getVocalChannelIds",
            value: function(e) {
                return this.getChannels(e)[C].map(function(e) {
                    return e.channel.id
                })
            }
        }, {
            key: "getDirectoryChannelIds",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = w[e]) || void 0 === t ? void 0 : t.map(function(e) {
                    return e.channel.id
                })) && void 0 !== n ? n : B
            }
        }, {
            key: "hasSelectableChannel",
            value: function(e, t) {
                return this.getSelectableChannelIds(e).includes(t)
            }
        }, {
            key: "hasElevatedPermissions",
            value: function(e) {
                return M[e] || !1
            }
        }, {
            key: "hasChannels",
            value: function(e) {
                return this.getChannels(e).count > 0
            }
        }, {
            key: "hasCategories",
            value: function(e) {
                return this.getChannels(e)[S.ChannelTypes.GUILD_CATEGORY].length > 1
            }
        }, {
            key: "getTextChannelNameDisambiguations",
            value: function(e) {
                var t;
                return null != e && null !== (t = L[e]) && void 0 !== t ? t : j
            }
        }], g(r.prototype, o), i && g(r, i), u
    }(u.default.Store);
    A(Q, "displayName", "GuildChannelStore"), t.default = new Q(s.default, {
        BACKGROUND_SYNC: H,
        CHANNEL_SELECT: function(e) {
            var t = e.guildId;
            if (P = null != t ? t : null, null == t || null != D[t]) return !1;
            x(t)
        },
        CONNECTION_OPEN: H,
        OVERLAY_INITIALIZE: H,
        CACHE_LOADED_LAZY: H,
        GUILD_CREATE: Y,
        GUILD_UPDATE: Y,
        GUILD_DELETE: function(e) {
            var t = e.guild.id;
            return delete D[t], delete L[t], delete M[t], delete w[t], !0
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t = e.guildId,
                n = e.user;
            if (p.default.getId() !== n.id) return !1;
            D[t] = void 0, t === P && x(t)
        },
        CHANNEL_CREATE: W,
        CHANNEL_DELETE: W,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value.guild_id;
                    null != s && (D[s] = void 0, n = !0, P === s && x(s))
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
        GUILD_ROLE_CREATE: K,
        GUILD_ROLE_UPDATE: K,
        GUILD_ROLE_DELETE: K,
        IMPERSONATE_UPDATE: K,
        IMPERSONATE_STOP: K,
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            return null == t && null != U ? X(m.default.getChannel(U), null) : X(m.default.getChannel(t), t)
        },
        VOICE_CHANNEL_STATUS_UPDATE: function(e) {
            var t = m.default.getBasicChannel(e.id);
            null != t && null != t.guild_id && x(t.guild_id)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n = t.channelId,
                    r = t.sessionId;
                return p.default.getSessionId() !== r ? e : X(m.default.getChannel(n), n) || e
            }, !1)
        }
    })
}