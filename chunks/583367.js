function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchAppliedGuildBoostsForGuild: function() {
            return d
        },
        fetchGuildBoostSlots: function() {
            return c
        },
        applyToGuild: function() {
            return f
        },
        unapplyFromGuild: function() {
            return _
        },
        cancelGuildBoostSlot: function() {
            return p
        },
        uncancelGuildBoostSlot: function() {
            return S
        }
    });
    var l = n("872717"),
        r = n("913144"),
        a = n("448993"),
        s = n("783111"),
        o = n("522308"),
        i = n("521012"),
        u = n("49111");
    async function d(t) {
        let e = await l.HTTP.get({
                url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                oldFormErrors: !0
            }),
            n = e.body.map(t => s.default.createFromServer(t));
        return r.default.dispatch({
            type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
            guildId: t,
            appliedBoosts: n
        }), n
    }
    async function c() {
        let t = await l.HTTP.get({
                url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
                oldFormErrors: !0
            }),
            e = t.body.map(t => o.default.createFromServer(t, i.default.getSubscriptionById(t.subscription_id)));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
            guildBoostSlots: e
        }), e
    }
    async function f(t, e) {
        r.default.dispatch({
            type: "GUILD_APPLY_BOOST_START"
        });
        try {
            let n = await l.HTTP.put({
                    url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(t),
                    body: {
                        user_premium_guild_subscription_slot_ids: e
                    },
                    oldFormErrors: !0
                }),
                a = Array.isArray(n.body) ? n.body.map(s.default.createFromServer) : [s.default.createFromServer(n.body)];
            return r.default.dispatch({
                type: "GUILD_APPLY_BOOST_SUCCESS",
                appliedGuildBoost: a
            }), c(), a
        } catch (e) {
            let t = new a.AppliedGuildBoostError(e);
            throw r.default.dispatch({
                type: "GUILD_APPLY_BOOST_FAIL",
                error: t
            }), t
        }
    }
    async function _(t, e) {
        r.default.dispatch({
            type: "GUILD_UNAPPLY_BOOST_START"
        });
        try {
            await l.HTTP.del({
                url: u.Endpoints.APPLIED_GUILD_BOOST(t, e),
                oldFormErrors: !0
            }), c()
        } catch (e) {
            let t = new a.AppliedGuildBoostError(e);
            throw r.default.dispatch({
                type: "GUILD_UNAPPLY_BOOST_FAIL",
                error: t
            }), t
        }
        r.default.dispatch({
            type: "GUILD_UNAPPLY_BOOST_SUCCESS",
            boostId: e
        })
    }
    async function p(t) {
        let e = await l.HTTP.post({
                url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(t),
                oldFormErrors: !0
            }),
            n = o.default.createFromServer(e.body, i.default.getSubscriptionById(e.body.subscription_id));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
            guildBoostSlot: n
        }), n
    }
    async function S(t) {
        let e = await l.HTTP.post({
                url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(t),
                oldFormErrors: !0
            }),
            n = o.default.createFromServer(e.body, i.default.getSubscriptionById(e.body.subscription_id));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
            guildBoostSlot: n
        }), n
    }
}