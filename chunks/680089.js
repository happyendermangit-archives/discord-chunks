function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        a = n("570140"),
        s = n("823379"),
        o = n("592125"),
        l = n("486472"),
        u = n("984933"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = {},
        E = 0;

    function I() {
        E += 1
    }

    function T(e) {
        if (null == c[e]) return !1;
        delete c[e]
    }
    class f extends(i = r.default.PersistedStore) {
        initialize(e) {
            this.waitFor(o.default, l.default), this.removeChangeListener(I), this.addChangeListener(I), c = null != e ? e : {}
        }
        getState() {
            return c
        }
        isCollapsed(e) {
            return null != e && "null" !== e && !!c[e] && c[e]
        }
        getCollapsedCategories() {
            return c
        }
        get version() {
            return E
        }
    }
    _(f, "displayName", "CategoryCollapseStore"), _(f, "persistKey", "collapsedCategories"), t.default = new f(a.default, {
        CONNECTION_OPEN: function(e) {
            for (let t of (!e.userGuildSettings.partial && (c = {}), e.userGuildSettings.entries))
                if (null != t.channel_overrides)
                    for (let e of t.channel_overrides) e.collapsed ? c[e.channel_id] = !0 : delete c[e.channel_id]
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
            let {
                userGuildSettings: t
            } = e, n = new Set(t.map(e => e.guild_id).filter(s.isNotNullish));
            for (let e in c) {
                let t = o.default.getChannel(e);
                null != t && null != t.guild_id && n.has(t.guild_id) && delete c[t.id]
            }
            for (let e of t)
                for (let t of e.channel_overrides) t.collapsed && (c[t.channel_id] = !0)
        },
        CATEGORY_COLLAPSE: function(e) {
            let {
                id: t
            } = e;
            if (c[t]) return !1;
            c[t] = !0
        },
        CATEGORY_EXPAND: function(e) {
            let {
                id: t
            } = e;
            return T(t)
        },
        CATEGORY_COLLAPSE_ALL: function(e) {
            let {
                guildId: t
            } = e;
            u.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                let {
                    channel: t
                } = e;
                "null" !== t.id && (c[t.id] = !0)
            })
        },
        CATEGORY_EXPAND_ALL: function(e) {
            let {
                guildId: t
            } = e;
            u.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                let {
                    channel: t
                } = e;
                delete c[t.id]
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e;
            return T(t)
        }
    })
}