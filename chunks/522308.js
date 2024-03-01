function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("666038");
    class i extends r.default {
        static createFromServer(e, t) {
            return new i({
                id: e.id,
                subscriptionId: e.subscription_id,
                premiumGuildSubscription: null != e.premium_guild_subscription ? {
                    id: e.premium_guild_subscription.id,
                    guildId: e.premium_guild_subscription.guild_id
                } : null,
                canceled: e.canceled,
                cooldownEndsAt: e.cooldown_ends_at,
                subscription: t
            })
        }
        isOnCooldown() {
            return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
        }
        isAvailable() {
            return null == this.premiumGuildSubscription && !this.isOnCooldown()
        }
        constructor(e) {
            super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
        }
    }
    var l = i
}