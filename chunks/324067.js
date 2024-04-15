function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120"), n("724458");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("740504"),
        d = n("853856"),
        _ = n("314897"),
        c = n("592125"),
        E = n("984933"),
        I = n("430824"),
        T = n("981631");
    let f = null,
        S = {},
        h = null;

    function A() {
        return {
            _categories: [],
            null: []
        }
    }
    let m = A();

    function N(e, t) {
        e.index = t
    }

    function p(e) {
        let t = E.default.getChannels(e),
            n = A(),
            i = e => {
                var t;
                let {
                    channel: i
                } = e;
                (null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
                    channel: i,
                    index: -1
                })
            };
        return t[T.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let {
                channel: t
            } = e;
            n._categories.push({
                channel: t,
                index: -1
            }), n[t.id] = []
        }), t[0, E.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, E.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, u.default)(n._categories, n).forEach(N), S[e] = n, n
    }

    function O() {
        S = {}, null != f && p(f)
    }

    function R(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        S[t] = void 0, f === t && p(t)
    }

    function C(e) {
        let {
            channel: {
                guild_id: t
            }
        } = e;
        if (null == t) return !1;
        S[t] = void 0, f === t && p(t)
    }

    function g(e) {
        let {
            guildId: t
        } = e;
        S[t] = void 0, t === f && p(t)
    }

    function L(e, t) {
        if (h = t, null == e || null == e.getGuildId()) return !1;
        let n = e.getGuildId();
        return null != n && (S[n] = void 0, n === f && p(n), !0)
    }

    function D() {
        p(T.FAVORITES)
    }
    class v extends(i = o.default.Store) {
        initialize() {
            this.waitFor(E.default, I.default, _.default, c.default, d.default), this.syncWith([d.default], D)
        }
        getCategories(e) {
            return null != e ? function(e) {
                let t = S[e];
                return null != t ? t : p(e)
            }(e) : m
        }
    }
    a = "GuildCategoryStore", (s = "displayName") in(r = v) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new v(l.default, {
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (f = null != t ? t : null, null == t || null != S[t]) return !1;
            p(t)
        },
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: O,
        CACHE_LOADED_LAZY: O,
        GUILD_CREATE: R,
        GUILD_UPDATE: R,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            delete S[t]
        },
        CHANNEL_CREATE: C,
        CHANNEL_DELETE: C,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let {
                    guild_id: e
                }
                of t) null != e && (S[e] = void 0, n = !0, f === e && p(e));
            return n
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            if (_.default.getId() !== n.id) return !1;
            S[t] = void 0, t === f && p(t)
        },
        CURRENT_USER_UPDATE: function() {
            if (null == f) return !1;
            p(f)
        },
        GUILD_ROLE_CREATE: g,
        GUILD_ROLE_UPDATE: g,
        GUILD_ROLE_DELETE: g,
        IMPERSONATE_UPDATE: g,
        IMPERSONATE_STOP: g,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null == t && null != h ? L(c.default.getChannel(h), null) : L(c.default.getChannel(t), t)
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
                return _.default.getSessionId() !== i ? e : L(c.default.getChannel(n), n) || e
            }, !1)
        }
    })
}