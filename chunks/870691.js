function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var a = n("446674"),
        l = n("913144"),
        i = n("449008"),
        d = n("42203"),
        s = n("341542"),
        r = n("923959"),
        o = n("49111");
    let u = {},
        f = 0;

    function g() {
        f += 1
    }

    function c(e) {
        if (null == u[e]) return !1;
        delete u[e]
    }
    class _ extends a.default.PersistedStore {
        initialize(e) {
            this.waitFor(d.default, s.default), this.removeChangeListener(g), this.addChangeListener(g), u = null != e ? e : {}
        }
        getState() {
            return u
        }
        isCollapsed(e) {
            return null != e && "null" !== e && !!u[e] && u[e]
        }
        getCollapsedCategories() {
            return u
        }
        get version() {
            return f
        }
    }
    _.displayName = "CategoryCollapseStore", _.persistKey = "collapsedCategories";
    var p = new _(l.default, {
        CONNECTION_OPEN: function(e) {
            for (let t of (!e.userGuildSettings.partial && (u = {}), e.userGuildSettings.entries))
                if (null != t.channel_overrides)
                    for (let e of t.channel_overrides) e.collapsed ? u[e.channel_id] = !0 : delete u[e.channel_id]
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
            let {
                userGuildSettings: t
            } = e, n = new Set(t.map(e => e.guild_id).filter(i.isNotNullish));
            for (let e in u) {
                let t = d.default.getChannel(e);
                null != t && null != t.guild_id && n.has(t.guild_id) && delete u[t.id]
            }
            for (let e of t)
                for (let t of e.channel_overrides) t.collapsed && (u[t.channel_id] = !0)
        },
        CATEGORY_COLLAPSE: function(e) {
            let {
                id: t
            } = e;
            if (u[t]) return !1;
            u[t] = !0
        },
        CATEGORY_EXPAND: function(e) {
            let {
                id: t
            } = e;
            return c(t)
        },
        CATEGORY_COLLAPSE_ALL: function(e) {
            let {
                guildId: t
            } = e;
            r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                let {
                    channel: t
                } = e;
                "null" !== t.id && (u[t.id] = !0)
            })
        },
        CATEGORY_EXPAND_ALL: function(e) {
            let {
                guildId: t
            } = e;
            r.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                let {
                    channel: t
                } = e;
                delete u[t.id]
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: {
                    id: t
                }
            } = e;
            return c(t)
        }
    })
}