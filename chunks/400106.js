function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120");
    var i, r = n("544891"),
        s = n("81825"),
        a = n("601964"),
        o = n("768581"),
        l = n("624138"),
        u = n("981631");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i || (i = {})).GUILD = "GUILD";
    let _ = async e => {
        let t = null;
        try {
            var n;
            let i = await r.HTTP.get({
                url: u.Endpoints.EMOJI_SOURCE_DATA(e),
                oldFormErrors: !0,
                timeout: 5e3
            });
            (null == i ? void 0 : null === (n = i.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                guild: c.createFromServer(i.body.guild),
                type: i.body.type
            })
        } catch {}
        return t
    };
    class c extends s.default {
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
            return this.hasFeature(u.GuildFeatures.DISCOVERABLE)
        }
        get acronym() {
            return (0, l.getAcronym)(this.name)
        }
        static async getGuildFromEmojiId(e) {
            let t = await _(e);
            return null != t && (null == t ? void 0 : t.type) === "GUILD" ? t.guild : null
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
        static createFromGuildRecord(e) {
            return new c({
                ...c._mapCommon(e),
                premiumTier: e.premiumTier,
                premiumSubscriberCount: e.premiumSubscriberCount,
                presenceCount: null,
                memberCount: null,
                emojis: null
            })
        }
        static createFromDiscoverableGuild(e) {
            return new c({
                ...c._mapCommon(e),
                premiumTier: null,
                premiumSubscriberCount: e.premiumSubscriptionCount,
                presenceCount: e.presenceCount,
                memberCount: e.memberCount,
                emojis: e.emojis
            })
        }
        static createFromServer(e) {
            return new c({
                ...c._mapCommon(e),
                premiumTier: e.premium_tier,
                premiumSubscriberCount: e.premium_subscription_count,
                presenceCount: e.approximate_presence_count,
                memberCount: e.approximate_member_count,
                emojis: e.emojis
            })
        }
        static createFromGuildType(e) {
            return e instanceof c ? e : e instanceof a.default ? c.createFromGuildRecord(e) : c.createFromDiscoverableGuild(e)
        }
        constructor(e) {
            super(), d(this, "id", void 0), d(this, "name", void 0), d(this, "icon", void 0), d(this, "description", void 0), d(this, "features", void 0), d(this, "premiumTier", void 0), d(this, "premiumSubscriberCount", void 0), d(this, "presenceCount", void 0), d(this, "memberCount", void 0), d(this, "emojis", void 0), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis
        }
    }
}