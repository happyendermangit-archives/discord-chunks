function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140"),
        a = n("937111");
    n("278147");
    var o = n("703656"),
        l = n("314897"),
        u = n("430824"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = null,
        E = null,
        I = {};

    function T() {
        null != c && null == u.default.getGuild(c) && null == a.default.getRequest(c) && (c = null), null != E && null == u.default.getGuild(E) && null == a.default.getRequest(E) && (E = null), f(c)
    }

    function f(e) {
        null != e && (I[e] = Date.now())
    }

    function S(e) {
        let t = !1;
        return delete I[e], E === e && (E = null, t = !0), c === e && (Object.values(u.default.getGuilds()).find(t => t.id !== e), c = null, (0, o.replaceWith)(d.Routes.ME), t = !0), t
    }
    class A extends(i = r.default.PersistedStore) {
        initialize(e) {
            var t, n, i;
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.default, l.default), I = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}, c = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null, E = null !== (i = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== i ? i : null
        }
        getState() {
            return {
                selectedGuildTimestampMillis: I,
                selectedGuildId: c,
                lastSelectedGuildId: E
            }
        }
        getGuildId() {
            return c
        }
        getLastSelectedGuildId() {
            return E
        }
        getLastSelectedTimestamp(e) {
            return c === e ? -1 : I[e]
        }
    }
    _(A, "displayName", "SelectedGuildStore"), _(A, "persistKey", "SelectedGuildStore"), t.default = new A(s.default, {
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: function(e) {
            c = e.selectedGuildId, E = void 0, T()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e;
            if (c === t) return !1;
            f(c), f(t), null != t && (E = t), c = t
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return n.id === l.default.getId() && S(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t,
                    unavailable: n
                }
            } = e;
            return !0 !== n && S(t)
        },
        LOGOUT: function() {
            c = null, E = null
        }
    })
}