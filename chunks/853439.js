function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("131704"),
        d = n("592125");
    let _ = {},
        c = {};
    class E extends(s = o.default.Store) {
        getTemplates(e) {
            return _[e]
        }
        getTemplateWithCategory(e, t) {
            var n;
            return null === (n = _[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
        }
        getChannel(e) {
            return c[e]
        }
    }
    a = "GuildRoleSubscriptionTierTemplatesStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new E(l.default, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
            let {
                selectedTemplate: t,
                guildId: n
            } = e, i = Object.values(d.default.getMutableGuildChannelsForGuild(n));
            t.listings.forEach(e => {
                e.channels.forEach(e => {
                    let t = i.find(t => t.name === e.name);
                    if (void 0 !== t) e.id = t.id;
                    else if (!(e.id in c)) {
                        let t = (0, u.createChannelRecord)(e);
                        c[e.id] = t
                    }
                })
            })
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
            let {
                templates: t,
                guildId: n
            } = e;
            _[n] = t
        }
    })
}