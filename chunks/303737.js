function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        announceCreateTemplateChannels: function() {
            return m
        },
        announceDeleteTemplateChannels: function() {
            return N
        },
        createChannelsFromTemplateTierBenefits: function() {
            return p
        },
        getTemplateTierCreationAnalyticsContext: function() {
            return O
        },
        isEligibleForNewBadge: function() {
            return R
        },
        useChannelWithTemplateFallback: function() {
            return S
        },
        useSuggestedUnusedPrices: function() {
            return h
        }
    }), n("653041"), n("47120"), n("998459");
    var i = n("991637"),
        r = n.n(i),
        a = n("399606"),
        s = n("570140"),
        o = n("333848"),
        l = n("592125"),
        u = n("923726"),
        d = n("289393"),
        _ = n("944537"),
        c = n("144507"),
        E = n("853439"),
        I = n("981631"),
        T = n("176505");
    r().shim();
    let f = {};

    function S(e) {
        let t = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e)),
            n = (0, a.useStateFromStores)([E.default], () => E.default.getChannel(e));
        return null != t ? t : n
    }

    function h(e, t, n) {
        let i = (0, a.useStateFromStores)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
            r = (0, _.useEditStateStore)(t => t.editStateIdsForGroup[e]),
            s = (0, _.useEditStateStore)(e => e.listings);
        if (void 0 === n || void 0 === t) return null;
        let o = i.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
            l = [];
        void 0 !== r && r.forEach(e => {
            let t = s[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && l.push(n)
        });
        let u = new Set(l.concat(o));
        if (!u.has(n)) return null;
        let c = t.indexOf(n);
        if (-1 === c) return null;
        let E = [];
        for (let e = c + 1; e < t.length && (!u.has(t[e]) && E.push(t[e]), 3 !== E.length); e++);
        return E
    }

    function A(e) {
        let t = _.useEditStateStore.getState().editStateIdsForGroup[e],
            n = _.useEditStateStore.getState().listings,
            i = new Set;
        null != t && t.forEach(e => {
            var t;
            let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r || r.forEach(e => {
                null != E.default.getChannel(e.ref_id) && i.add(e.ref_id)
            })
        });
        let r = [];
        for (let t of i) {
            let n = E.default.getChannel(t);
            if (null != n) {
                let t = n.set("guild_id", e);
                r.push(t)
            }
        }
        return r
    }

    function m(e) {
        let t = A(e);
        f[e] = t, t.forEach(e => {
            let t = e.set("flags", T.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            s.default.dispatch({
                type: "CHANNEL_CREATE",
                channel: t
            })
        })
    }

    function N(e) {
        var t;
        (null !== (t = f[e]) && void 0 !== t ? t : A(e)).forEach(e => {
            s.default.dispatch({
                type: "CHANNEL_DELETE",
                channel: e
            })
        })
    }
    async function p(e, t) {
        let n = [],
            i = [];
        if (t.forEach(t => {
                let r = E.default.getChannel(t.ref_id);
                null != r && (n.push(o.default.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r))
            }), 0 !== n.length)(await Promise.allSettled(n)).forEach((n, r) => {
            let a = i[r].id;
            if ("fulfilled" === n.status) {
                let t = n.value.body,
                    i = _.useEditStateStore.getState().editStateIdsForGroup[e],
                    r = _.useEditStateStore.getState().listings;
                null != i && i.forEach(e => {
                    var n;
                    let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
                    null == i || i.forEach(e => {
                        e.ref_id === a && (e.ref_id = t.id)
                    })
                })
            } else if (null != t) {
                let e = t.findIndex(e => e.ref_id === a); - 1 !== e && (null == t || t.splice(e, 1))
            }
        })
    }

    function O(e, t) {
        var n, i;
        let r = _.useEditStateStore.getState().listings[e],
            a = null == r ? void 0 : r.usedTemplate;
        if (null == a) return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
        let s = E.default.getTemplateWithCategory(t, a);
        if (null == s) return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
        let o = s.listings[0];
        if ((null == r ? void 0 : r.name) !== o.name || (null == r ? void 0 : r.description) !== o.description || (null == r ? void 0 : r.priceTier) !== o.price_tier || (null == r ? void 0 : r.image) !== o.image || (null == r ? void 0 : r.roleColor) !== o.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== o.additional_perks.length) return {
            templateCategory: s.category,
            hasChangeFromTemplate: !0
        };
        for (let e = 0; e < o.channels.length; e++) {
            let t = r.channelBenefits[e],
                n = o.channels[e];
            if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            }
        }
        for (let e = 0; e < o.additional_perks.length; e++) {
            let t = r.intangibleBenefits[e],
                n = o.additional_perks[e];
            if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            }
        }
        return {
            templateCategory: s.category,
            hasChangeFromTemplate: !1
        }
    }

    function R(e) {
        return (0, c.canManageGuildRoleSubscriptions)(e) && e.hasFeature(I.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.isUserEligibleForTierTemplates)() && (0, u.isGuildEligibleForTierTemplates)(e.id)
    }
}