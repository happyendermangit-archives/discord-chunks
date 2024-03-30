function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("864842"),
        o = n("830721"),
        i = n("281767");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(E, e);
        var t, n, r, f, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), s(a(t = _.call(this)), "id", void 0), s(a(t), "skuId", void 0), s(a(t), "applicationId", void 0), s(a(t), "userId", void 0), s(a(t), "gifterId", void 0), s(a(t), "type", void 0), s(a(t), "branches", void 0), s(a(t), "startsAt", void 0), s(a(t), "endsAt", void 0), s(a(t), "subscriptionId", void 0), s(a(t), "subscriptionPlanId", void 0), s(a(t), "parentId", void 0), s(a(t), "consumed", void 0), s(a(t), "giftCodeBatchId", void 0), s(a(t), "giftStyle", void 0), s(a(t), "guildId", void 0), s(a(t), "deleted", void 0), t.id = e.id, t.skuId = e.skuId, t.applicationId = e.applicationId, t.userId = e.userId, t.gifterId = e.gifterId, t.type = e.type, t.branches = e.branches, t.startsAt = e.startsAt, t.endsAt = e.endsAt, t.subscriptionId = e.subscriptionId, t.subscriptionPlanId = e.subscriptionPlanId, t.parentId = e.parentId, t.consumed = e.consumed, t.giftCodeBatchId = e.giftCodeBatchId, t.giftStyle = e.giftStyle, t.guildId = e.guildId, t.deleted = e.deleted, t
        }
        return r = E, f = [{
            key: "isGiftable",
            get: function() {
                return this.type === i.EntitlementTypes.USER_GIFT && null == this.gifterId
            }
        }, {
            key: "isValid",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.isGiftable || this.deleted) return !1;
                if (this.type === i.EntitlementTypes.PREMIUM_SUBSCRIPTION) {
                    var r = t.get(this.skuId);
                    if (null != r && !r.premium || !o.default.canInstallPremiumApplications(e)) return !1
                }
                var a = new Date;
                if (null != this.startsAt && a < this.startsAt || null != this.endsAt && a >= this.endsAt) return !1;
                if (null != n) {
                    if (0 === this.branches.length) {
                        if (this.applicationId !== n) return !1
                    } else if (!this.branches.includes(n)) return !1
                }
                return !0
            }
        }], d = [{
            key: "createFromServer",
            value: function(e) {
                var t, n;
                return new E({
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
        }], f && u(r.prototype, f), d && u(r, d), E
    }(r.default)
}