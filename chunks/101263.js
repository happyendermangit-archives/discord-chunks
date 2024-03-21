function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i, l, a = n("872717"),
        s = n("666038"),
        r = n("813006"),
        o = n("315102"),
        u = n("159885"),
        d = n("49111");
    (i || (i = {})).GUILD = "GUILD";
    let c = async e => {
        let t = null;
        try {
            var n;
            let i = await a.HTTP.get({
                url: d.Endpoints.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5e3
            });
            (null == i ? void 0 : null === (n = i.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                guild: l.createFromServer(i.body.guild),
                type: i.body.type
            })
        } catch {}
        return t
    };
    l = class e extends s.default {
        getIconURL(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return o.default.getGuildIconURL({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            })
        }
        getIconSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return o.default.getAnimatableSourceWithFallback(t, t => o.default.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            }))
        }
        hasFeature(e) {
            return this.features.has(e)
        }
        isDiscoverable() {
            return this.hasFeature(d.GuildFeatures.DISCOVERABLE)
        }
        get acronym() {
            return (0, u.getAcronym)(this.name)
        }
        static async getGuildFromEmojiId(e) {
            let t = await c(e),
                n = null != t && (null == t ? void 0 : t.type) === "GUILD";
            return n ? t.guild : null
        }
        static _mapCommon(e) {
            var t;
            return {
                id: e.id,
                name: e.name,
                icon: e.icon,
                description: e.description,
                features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set)
            }
        }
        static createFromGuildRecord(t) {
            return new e({
                ...e._mapCommon(t),
                premiumTier: t.premiumTier,
                premiumSubscriberCount: t.premiumSubscriberCount,
                presenceCount: null,
                memberCount: null,
                emojis: null
            })
        }
        static createFromDiscoverableGuild(t) {
            return new e({
                ...e._mapCommon(t),
                premiumTier: null,
                premiumSubscriberCount: t.premiumSubscriptionCount,
                presenceCount: t.presenceCount,
                memberCount: t.memberCount,
                emojis: t.emojis
            })
        }
        static createFromServer(t) {
            return new e({
                ...e._mapCommon(t),
                premiumTier: t.premium_tier,
                premiumSubscriberCount: t.premium_subscription_count,
                presenceCount: t.approximate_presence_count,
                memberCount: t.approximate_member_count,
                emojis: t.emojis
            })
        }
        static createFromGuildType(t) {
            return t instanceof e ? t : t instanceof r.default ? e.createFromGuildRecord(t) : e.createFromDiscoverableGuild(t)
        }
        constructor(e) {
            super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis
        }
    }
}