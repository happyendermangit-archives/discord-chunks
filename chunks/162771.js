function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("982527");
    n("21121");
    var a = n("393414"),
        o = n("271938"),
        l = n("305961"),
        u = n("49111");
    let d = null,
        c = null,
        _ = {};

    function f() {
        null != d && null == l.default.getGuild(d) && null == r.default.getRequest(d) && (d = null), null != c && null == l.default.getGuild(c) && null == r.default.getRequest(c) && (c = null), E(d)
    }

    function E(e) {
        null != e && (_[e] = Date.now())
    }

    function h(e) {
        let t = !1;
        return delete _[e], c === e && (c = null, t = !0), d === e && (Object.values(l.default.getGuilds()).find(t => t.id !== e), d = null, (0, a.replaceWith)(u.Routes.ME), t = !0), t
    }
    class g extends i.default.PersistedStore {
        initialize(e) {
            var t, n, i;
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(l.default, o.default), _ = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}, d = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null, c = null !== (i = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== i ? i : null
        }
        getState() {
            return {
                selectedGuildTimestampMillis: _,
                selectedGuildId: d,
                lastSelectedGuildId: c
            }
        }
        getGuildId() {
            return d
        }
        getLastSelectedGuildId() {
            return c
        }
        getLastSelectedTimestamp(e) {
            return d === e ? -1 : _[e]
        }
    }
    g.displayName = "SelectedGuildStore", g.persistKey = "SelectedGuildStore";
    var m = new g(s.default, {
        CONNECTION_OPEN: f,
        OVERLAY_INITIALIZE: function(e) {
            d = e.selectedGuildId, c = void 0, f()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (d === t) return !1;
            E(d), E(t), null != t && (c = t), d = t
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return n.id === o.default.getId() && h(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t,
                    unavailable: n
                }
            } = e;
            return !0 !== n && h(t)
        },
        LOGOUT: function() {
            d = null, c = null
        }
    })
}