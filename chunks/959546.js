function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("81825"),
        r = n("74538"),
        a = n("981631");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends i.default {
        static createFromServer(e) {
            var t, n;
            return new o({
                id: e.id,
                skuId: e.sku_id,
                applicationId: e.application_id,
                userId: e.user_id,
                gifterId: e.gifter_user_id,
                type: e.type,
                branches: null !== (t = e.branches) && void 0 !== t ? t : [],
                startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
                endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
                subscriptionId: e.subscription_id,
                subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
                parentId: null != e.parent_id ? e.parent_id : null,
                consumed: null != e.consumed ? e.consumed : null,
                giftCodeBatchId: null !== (n = e.gift_code_batch_id) && void 0 !== n ? n : null,
                giftStyle: e.gift_style,
                guildId: e.guild_id,
                deleted: e.deleted
            })
        }
        get isGiftable() {
            return this.type === a.EntitlementTypes.USER_GIFT && null == this.gifterId
        }
        isValid(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (this.isGiftable || this.deleted) return !1;
            if (this.type === a.EntitlementTypes.PREMIUM_SUBSCRIPTION) {
                let n = t.get(this.skuId);
                if (null != n && !n.premium || !r.default.canInstallPremiumApplications(e)) return !1
            }
            let i = new Date;
            if (null != this.startsAt && i < this.startsAt || null != this.endsAt && i >= this.endsAt) return !1;
            if (null != n) {
                if (0 === this.branches.length) {
                    if (this.applicationId !== n) return !1
                } else if (!this.branches.includes(n)) return !1
            }
            return !0
        }
        constructor(e) {
            super(), s(this, "id", void 0), s(this, "skuId", void 0), s(this, "applicationId", void 0), s(this, "userId", void 0), s(this, "gifterId", void 0), s(this, "type", void 0), s(this, "branches", void 0), s(this, "startsAt", void 0), s(this, "endsAt", void 0), s(this, "subscriptionId", void 0), s(this, "subscriptionPlanId", void 0), s(this, "parentId", void 0), s(this, "consumed", void 0), s(this, "giftCodeBatchId", void 0), s(this, "giftStyle", void 0), s(this, "guildId", void 0), s(this, "deleted", void 0), this.id = e.id, this.skuId = e.skuId, this.applicationId = e.applicationId, this.userId = e.userId, this.gifterId = e.gifterId, this.type = e.type, this.branches = e.branches, this.startsAt = e.startsAt, this.endsAt = e.endsAt, this.subscriptionId = e.subscriptionId, this.subscriptionPlanId = e.subscriptionPlanId, this.parentId = e.parentId, this.consumed = e.consumed, this.giftCodeBatchId = e.giftCodeBatchId, this.giftStyle = e.giftStyle, this.guildId = e.guildId, this.deleted = e.deleted
        }
    }
}