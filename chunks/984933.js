function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_SELECTABLE_CHANNELS_KEY: function() {
            return L
        },
        GUILD_VOCAL_CHANNELS_KEY: function() {
            return D
        }
    }), n("653041"), n("47120"), n("724458");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("149765"),
        d = n("442837"),
        _ = n("570140"),
        c = n("430198"),
        E = n("933557"),
        I = n("853856"),
        T = n("846787"),
        f = n("131704"),
        S = n("700785"),
        h = n("314897"),
        A = n("592125"),
        m = n("271383"),
        N = n("430824"),
        O = n("496675"),
        p = n("699516"),
        R = n("594174"),
        C = n("981631"),
        g = n("689938");
    let L = "SELECTABLE",
        D = "VOCAL",
        v = null,
        M = {},
        y = {},
        P = {},
        U = null,
        b = {},
        G = {
            comparator: -1,
            channel: (0, f.createChannelRecord)({
                id: C.NULL_STRING_CHANNEL_ID,
                type: C.ChannelTypes.GUILD_CATEGORY,
                name: g.default.Messages.UNCATEGORIZED
            })
        },
        w = V(C.NULL_STRING_GUILD_ID),
        k = [],
        B = {};

    function V(e) {
        return {
            id: e,
            [L]: [],
            [D]: [],
            [C.ChannelTypes.GUILD_CATEGORY]: [G],
            count: 0
        }
    }

    function F(e, t) {
        let {
            comparator: n
        } = e, {
            comparator: i
        } = t;
        return n - i
    }

    function x() {
        M = {}, b = {}, y = {}, P = {}, null != v && H(v)
    }

    function H(e) {
        var t;
        let n = V(e);
        return M[e] = n, b[e] = [], ! function(e) {
                let {
                    id: t
                } = e, n = function(e) {
                    if (e === C.FAVORITES) return function() {
                        let e = {},
                            t = I.default.getFavoriteChannels();
                        for (let n in t) {
                            let i = A.default.getChannel(n);
                            if (null == i) continue;
                            let r = t[n],
                                s = (0, T.createFavoritesChannelRecord)(t, r, i);
                            e[n] = {
                                channel: s,
                                comparator: s.position
                            }
                        }
                        return e
                    }();
                    let t = {},
                        n = A.default.getMutableGuildChannelsForGuild(e);
                    for (let e in n) t[e] = {
                        channel: n[e],
                        comparator: n[e].position
                    };
                    return t
                }(t);
                l().forEach(n, n => {
                    var i;
                    let r = n.channel;
                    if (e.count += 1, f.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(r.type) && !O.default.can(C.Permissions.VIEW_CHANNEL, r) && !c.default.isChannelGated(r.guild_id, r.id) && r.id !== U) return;
                    let s = (i = r.type, (0, f.isGuildSelectableChannelType)(i) ? L : (0, f.isGuildVocalChannelType)(i) ? D : i);
                    r.type === C.ChannelTypes.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)), null != e[s] && e[s].push(n)
                })
            }(n), (t = n)[L].sort(F), t[D].sort(F), t[C.ChannelTypes.GUILD_CATEGORY].sort(F),
            function(e) {
                let t = y[e.id] = {},
                    n = {};
                e[L].forEach(e => {
                    let {
                        channel: i
                    } = e, r = (0, E.computeChannelName)(i, R.default, p.default), s = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : null;
                    null == s ? n[r] = 1 : (n[r] = s + 1, r += "~".concat(s)), t[i.id] = {
                        id: i.id,
                        name: r
                    }
                })
            }(n),
            function(e) {
                (function(e, t) {
                    let n = N.default.getGuild(t);
                    if (null != n && K(e, n)) return !0;
                    let i = M[t];
                    null == i && (i = H(t));
                    let {
                        [L]: r, [D]: s
                    } = i;
                    for (let {
                            channel: t
                        }
                        of r)
                        if (K(e, t)) return !0;
                    for (let {
                            channel: t
                        }
                        of s)
                        if (K(e, t)) return !0;
                    return !1
                })(R.default.getCurrentUser(), e) ? P[e] = !0: delete P[e]
            }(e), n
    }

    function Y(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        if (null == t) return !1;
        M[t] = void 0, v === t && H(t)
    }

    function j(e) {
        let {
            channel: {
                guild_id: t
            }
        } = e;
        if (null == t) return !1;
        M[t] = void 0, t === v && H(t)
    }

    function W(e) {
        let {
            guildId: t
        } = e;
        M[t] = void 0, t === v && H(t)
    }

    function K(e, t) {
        return u.hasAny(S.computePermissions({
            user: e,
            context: t,
            checkElevated: !1
        }), C.ElevatedPermissions)
    }

    function z(e, t) {
        var n;
        U = t;
        let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
        if (null == i) return !1;
        M[i] = void 0, i === v && H(i)
    }

    function X() {
        H(C.FAVORITES)
    }
    class Q extends(i = d.default.Store) {
        initialize() {
            this.waitFor(N.default, m.default, A.default, O.default, h.default, c.default, I.default), this.syncWith([I.default], X)
        }
        getAllGuilds() {
            return M
        }
        getChannels(e) {
            var t;
            let n;
            return null != e ? (null == (n = M[t = e]) && (n = H(t)), n) : w
        }
        getFirstChannelOfType(e, t, n) {
            let i = this.getChannels(e)[n].find(t);
            return null != i ? i.channel : null
        }
        getFirstChannel(e, t) {
            var n;
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return null !== (n = this.getFirstChannelOfType(e, t, L)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, D) : null
        }
        getDefaultChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Permissions.VIEW_CHANNEL;
            return this.getFirstChannel(e, e => O.default.can(n, e.channel), t)
        }
        getSFWDefaultChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Permissions.VIEW_CHANNEL;
            return this.getFirstChannel(e, e => O.default.can(n, e.channel) && !e.channel.nsfw, t)
        }
        getSelectableChannelIds(e) {
            return this.getChannels(e)[L].map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })
        }
        getSelectableChannels(e) {
            return this.getChannels(e)[L]
        }
        getVocalChannelIds(e) {
            return this.getChannels(e)[D].map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })
        }
        getDirectoryChannelIds(e) {
            var t, n;
            return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            })) && void 0 !== n ? n : k
        }
        hasSelectableChannel(e, t) {
            return this.getSelectableChannelIds(e).includes(t)
        }
        hasElevatedPermissions(e) {
            return P[e] || !1
        }
        hasChannels(e) {
            return this.getChannels(e).count > 0
        }
        hasCategories(e) {
            return this.getChannels(e)[C.ChannelTypes.GUILD_CATEGORY].length > 1
        }
        getTextChannelNameDisambiguations(e) {
            var t;
            return null != e && null !== (t = y[e]) && void 0 !== t ? t : B
        }
    }
    a = "GuildChannelStore", (s = "displayName") in(r = Q) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new Q(_.default, {
        BACKGROUND_SYNC: x,
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (v = null != t ? t : null, null == t || null != M[t]) return !1;
            H(t)
        },
        CONNECTION_OPEN: x,
        OVERLAY_INITIALIZE: x,
        CACHE_LOADED_LAZY: x,
        GUILD_CREATE: Y,
        GUILD_UPDATE: Y,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            return delete M[t], delete y[t], delete P[t], delete b[t], !0
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            if (h.default.getId() !== n.id) return !1;
            M[t] = void 0, t === v && H(t)
        },
        CHANNEL_CREATE: j,
        CHANNEL_DELETE: j,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let e of t) {
                let {
                    guild_id: t
                } = e;
                null != t && (M[t] = void 0, n = !0, v === t && H(t))
            }
            return n
        },
        GUILD_ROLE_CREATE: W,
        GUILD_ROLE_UPDATE: W,
        GUILD_ROLE_DELETE: W,
        IMPERSONATE_UPDATE: W,
        IMPERSONATE_STOP: W,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null == t && null != U ? z(A.default.getChannel(U), null) : z(A.default.getChannel(t), t)
        },
        VOICE_CHANNEL_STATUS_UPDATE: function(e) {
            let t = A.default.getBasicChannel(e.id);
            null != t && null != t.guild_id && H(t.guild_id)
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
                return h.default.getSessionId() !== i ? e : z(A.default.getChannel(n), n) || e
            }, !1)
        }
    })
}