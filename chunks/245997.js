function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("424973"), n("222007"), n("808653");
    var l = n("446674"),
        i = n("913144"),
        r = n("320954"),
        u = n("379881"),
        a = n("271938"),
        d = n("42203"),
        s = n("923959"),
        o = n("305961"),
        c = n("49111");
    let f = null,
        _ = {},
        E = null;

    function A() {
        return {
            _categories: [],
            null: []
        }
    }
    let h = A();

    function I(e, t) {
        e.index = t
    }

    function v(e) {
        let t = s.default.getChannels(e),
            n = A(),
            l = e => {
                var t;
                let {
                    channel: l
                } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                i.push({
                    channel: l,
                    index: -1
                })
            };
        return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
            let {
                channel: t
            } = e;
            n._categories.push({
                channel: t,
                index: -1
            }), n[t.id] = []
        }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, r.default)(n._categories, n).forEach(I), _[e] = n, n
    }

    function D() {
        _ = {}, null != f && v(f)
    }

    function L(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        _[t] = void 0, f === t && v(t)
    }

    function S(e) {
        let {
            channel: {
                guild_id: t
            }
        } = e;
        if (null == t) return !1;
        _[t] = void 0, f === t && v(t)
    }

    function N(e) {
        let {
            guildId: t
        } = e;
        _[t] = void 0, t === f && v(t)
    }

    function C(e, t) {
        if (E = t, null == e || null == e.getGuildId()) return !1;
        let n = e.getGuildId();
        return null != n && (_[n] = void 0, n === f && v(n), !0)
    }

    function g() {
        v(c.FAVORITES)
    }
    class M extends l.default.Store {
        initialize() {
            this.waitFor(s.default, o.default, a.default, d.default, u.default), this.syncWith([u.default], g)
        }
        getCategories(e) {
            return null != e ? function(e) {
                let t = _[e];
                return null != t ? t : v(e)
            }(e) : h
        }
    }
    M.displayName = "GuildCategoryStore";
    var p = new M(i.default, {
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (f = null != t ? t : null, null == t || null != _[t]) return !1;
            v(t)
        },
        CONNECTION_OPEN: D,
        OVERLAY_INITIALIZE: D,
        CACHE_LOADED_LAZY: D,
        GUILD_CREATE: L,
        GUILD_UPDATE: L,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            delete _[t]
        },
        CHANNEL_CREATE: S,
        CHANNEL_DELETE: S,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let {
                    guild_id: e
                }
                of t) null != e && (_[e] = void 0, n = !0, f === e && v(e));
            return n
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            if (a.default.getId() !== n.id) return !1;
            _[t] = void 0, t === f && v(t)
        },
        CURRENT_USER_UPDATE: function() {
            if (null == f) return !1;
            v(f)
        },
        GUILD_ROLE_CREATE: N,
        GUILD_ROLE_UPDATE: N,
        GUILD_ROLE_DELETE: N,
        IMPERSONATE_UPDATE: N,
        IMPERSONATE_STOP: N,
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null == t && null != E ? C(d.default.getChannel(E), null) : C(d.default.getChannel(t), t)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    channelId: n,
                    sessionId: l
                } = t;
                return a.default.getSessionId() !== l ? e : C(d.default.getChannel(n), n) || e
            }, !1)
        }
    })
}