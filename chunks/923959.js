function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_SELECTABLE_CHANNELS_KEY: function() {
            return A
        },
        GUILD_VOCAL_CHANNELS_KEY: function() {
            return C
        },
        default: function() {
            return W
        }
    }), n("424973"), n("222007"), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("316693"),
        a = n("446674"),
        o = n("913144"),
        l = n("203288"),
        u = n("679653"),
        d = n("379881"),
        c = n("106682"),
        f = n("233069"),
        _ = n("991170"),
        E = n("271938"),
        h = n("42203"),
        g = n("26989"),
        m = n("305961"),
        p = n("957255"),
        S = n("27618"),
        v = n("697218"),
        T = n("49111"),
        I = n("782340");
    let A = "SELECTABLE",
        C = "VOCAL",
        y = null,
        N = {},
        R = {},
        O = {},
        D = null,
        P = {},
        L = {
            comparator: -1,
            channel: (0, f.createChannelRecord)({
                id: T.NULL_STRING_CHANNEL_ID,
                type: T.ChannelTypes.GUILD_CATEGORY,
                name: I.default.Messages.UNCATEGORIZED
            })
        },
        M = w(T.NULL_STRING_GUILD_ID),
        b = [],
        U = {};

    function w(e) {
        return {
            id: e,
            [A]: [],
            [C]: [],
            [T.ChannelTypes.GUILD_CATEGORY]: [L],
            count: 0
        }
    }

    function k(e, t) {
        let {
            comparator: n
        } = e, {
            comparator: i
        } = t;
        return n - i
    }

    function V() {
        N = {}, P = {}, R = {}, O = {}, null != y && G(y)
    }

    function G(e) {
        var t;
        let n = w(e);
        return N[e] = n, P[e] = [], ! function(e) {
                let {
                    id: t
                } = e, n = function(e) {
                    if (e === T.FAVORITES) return function() {
                        let e = {},
                            t = d.default.getFavoriteChannels();
                        for (let n in t) {
                            let i = h.default.getChannel(n);
                            if (null == i) continue;
                            let s = t[n],
                                r = (0, c.createFavoritesChannelRecord)(t, s, i);
                            e[n] = {
                                channel: r,
                                comparator: r.position
                            }
                        }
                        return e
                    }();
                    let t = {},
                        n = h.default.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = {
                        channel: n[e],
                        comparator: n[e].position
                    };
                    return t
                }(t);
                s.forEach(n, n => {
                    var i;
                    let s = n.channel;
                    if (e.count += 1, f.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(s.type) && !p.default.can(T.Permissions.VIEW_CHANNEL, s) && !l.default.isChannelGated(s.guild_id, s.id) && s.id !== D) return;
                    let r = (i = s.type, (0, f.isGuildSelectableChannelType)(i) ? A : (0, f.isGuildVocalChannelType)(i) ? C : i);
                    s.type === T.ChannelTypes.GUILD_DIRECTORY && (null == P[t] && (P[t] = []), P[t].push(n)), null != e[r] && e[r].push(n)
                })
            }(n), (t = n)[A].sort(k), t[C].sort(k), t[T.ChannelTypes.GUILD_CATEGORY].sort(k),
            function(e) {
                let t = R[e.id] = {},
                    n = {};
                e[A].forEach(e => {
                    let {
                        channel: i
                    } = e, s = (0, u.computeChannelName)(i, v.default, S.default), r = Object.prototype.hasOwnProperty.call(n, s) ? n[s] : null;
                    null == r ? n[s] = 1 : (n[s] = r + 1, s += "~".concat(r)), t[i.id] = {
                        id: i.id,
                        name: s
                    }
                })
            }(n),
            function(e) {
                let t = v.default.getCurrentUser();
                (function(e, t) {
                    let n = m.default.getGuild(t);
                    if (null != n && H(e, n)) return !0;
                    let i = N[t];
                    null == i && (i = G(t));
                    let {
                        [A]: s, [C]: r
                    } = i;
                    for (let {
                            channel: t
                        }
                        of s)
                        if (H(e, t)) return !0;
                    for (let {
                            channel: t
                        }
                        of r)
                        if (H(e, t)) return !0;
                    return !1
                })(t, e) ? O[e] = !0: delete O[e]
            }(e), n
    }

    function F(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        if (null == t) return !1;
        N[t] = void 0, y === t && G(t)
    }

    function x(e) {
        let {
            channel: {
                guild_id: t
            }
        } = e;
        if (null == t) return !1;
        N[t] = void 0, t === y && G(t)
    }

    function B(e) {
        let {
            guildId: t
        } = e;
        N[t] = void 0, t === y && G(t)
    }

    function H(e, t) {
        return r.default.hasAny(_.default.computePermissions({
            user: e,
            context: t,
            checkElevated: !1
        }), T.ElevatedPermissions)
    }

    function Y(e, t) {
        var n;
        D = t;
        let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
        if (null == i) return !1;
        N[i] = void 0, i === y && G(i)
    }

    function K() {
        G(T.FAVORITES)
    }
    class j extends a.default.Store {
        initialize() {
            this.waitFor(m.default, g.default, h.default, p.default, E.default, l.default, d.default), this.syncWith([d.default], K)
        }
        getAllGuilds() {
            return N
        }
        getChannels(e) {
            var t;
            let n;
            return null != e ? (null == (n = N[t = e]) && (n = G(t)), n) : M
        }
        getFirstChannelOfType(e, t, n) {
            let i = this.getChannels(e)[n],
                s = i.find(t);
            return null != s ? s.channel : null
        }
        getFirstChannel(e, t) {
            var n;
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return null !== (n = this.getFirstChannelOfType(e, t, A)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, C) : null
        }
        getDefaultChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.Permissions.VIEW_CHANNEL;
            return this.getFirstChannel(e, e => p.default.can(n, e.channel), t)
        }
        getSFWDefaultChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.Permissions.VIEW_CHANNEL;
            return this.getFirstChannel(e, e => p.default.can(n, e.channel) && !e.channel.nsfw, t)
        }
        getSelectableChannelIds(e) {
            return this.getChannels(e)[A].map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })
        }
        getSelectableChannels(e) {
            return this.getChannels(e)[A]
        }
        getVocalChannelIds(e) {
            return this.getChannels(e)[C].map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })
        }
        getDirectoryChannelIds(e) {
            var t, n;
            return null !== (n = null === (t = P[e]) || void 0 === t ? void 0 : t.map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })) && void 0 !== n ? n : b
        }
        hasSelectableChannel(e, t) {
            return this.getSelectableChannelIds(e).includes(t)
        }
        hasElevatedPermissions(e) {
            return O[e] || !1
        }
        hasChannels(e) {
            return this.getChannels(e).count > 0
        }
        hasCategories(e) {
            return this.getChannels(e)[T.ChannelTypes.GUILD_CATEGORY].length > 1
        }
        getTextChannelNameDisambiguations(e) {
            var t;
            return null != e && null !== (t = R[e]) && void 0 !== t ? t : U
        }
    }
    j.displayName = "GuildChannelStore";
    var W = new j(o.default, {
        BACKGROUND_SYNC: V,
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (y = null != t ? t : null, null == t || null != N[t]) return !1;
            G(t)
        },
        CONNECTION_OPEN: V,
        OVERLAY_INITIALIZE: V,
        CACHE_LOADED_LAZY: V,
        GUILD_CREATE: F,
        GUILD_UPDATE: F,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            return delete N[t], delete R[t], delete O[t], delete P[t], !0
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            if (E.default.getId() !== n.id) return !1;
            N[t] = void 0, t === y && G(t)
        },
        CHANNEL_CREATE: x,
        CHANNEL_DELETE: x,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let e of t) {
                let {
                    guild_id: t
                } = e;
                null != t && (N[t] = void 0, n = !0, y === t && G(t))
            }
            return n
        },
        GUILD_ROLE_CREATE: B,
        GUILD_ROLE_UPDATE: B,
        GUILD_ROLE_DELETE: B,
        IMPERSONATE_UPDATE: B,
        IMPERSONATE_STOP: B,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null == t && null != D ? Y(h.default.getChannel(D), null) : Y(h.default.getChannel(t), t)
        },
        VOICE_CHANNEL_STATUS_UPDATE: function(e) {
            let t = h.default.getBasicChannel(e.id);
            null != t && null != t.guild_id && G(t.guild_id)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    channelId: n,
                    sessionId: i
                } = t;
                return E.default.getSessionId() !== i ? e : Y(h.default.getChannel(n), n) || e
            }, !1)
        }
    })
}