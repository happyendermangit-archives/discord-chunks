function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyToGuild: function() {
            return E
        },
        cancelGuildBoostSlot: function() {
            return T
        },
        fetchAppliedGuildBoostsForGuild: function() {
            return d
        },
        fetchAppliedGuildBoostsForUser: function() {
            return _
        },
        fetchGuildBoostSlots: function() {
            return c
        },
        unapplyFromGuild: function() {
            return I
        },
        uncancelGuildBoostSlot: function() {
            return f
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("881052"),
        s = n("932015"),
        o = n("209747"),
        l = n("78839"),
        u = n("981631");
    async function d(e) {
        let t = (await i.HTTP.get({
            url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
            oldFormErrors: !0
        })).body.map(e => s.default.createFromServer(e));
        return r.default.dispatch({
            type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
            guildId: e,
            appliedBoosts: t
        }), t
    }
    async function _() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = (await i.HTTP.get({
                url: u.Endpoints.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: {
                    paused: e
                }
            })).body.map(e => s.default.createFromServer(e));
        return r.default.dispatch({
            type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS",
            appliedGuildBoosts: t
        }), t
    }
    async function c() {
        let e = (await i.HTTP.get({
            url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
            oldFormErrors: !0
        })).body.map(e => o.default.createFromServer(e, l.default.getSubscriptionById(e.subscription_id)));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
            guildBoostSlots: e
        }), e
    }
    async function E(e, t) {
        r.default.dispatch({
            type: "GUILD_APPLY_BOOST_START"
        });
        try {
            let n = await i.HTTP.put({
                    url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                    body: {
                        user_premium_guild_subscription_slot_ids: t
                    },
                    oldFormErrors: !0
                }),
                a = Array.isArray(n.body) ? n.body.map(s.default.createFromServer) : [s.default.createFromServer(n.body)];
            return r.default.dispatch({
                type: "GUILD_APPLY_BOOST_SUCCESS",
                appliedGuildBoost: a
            }), c(), a
        } catch (t) {
            let e = new a.AppliedGuildBoostError(t);
            throw r.default.dispatch({
                type: "GUILD_APPLY_BOOST_FAIL",
                error: e
            }), e
        }
    }
    async function I(e, t) {
        r.default.dispatch({
            type: "GUILD_UNAPPLY_BOOST_START"
        });
        try {
            await i.HTTP.del({
                url: u.Endpoints.APPLIED_GUILD_BOOST(e, t),
                oldFormErrors: !0
            }), c()
        } catch (t) {
            let e = new a.AppliedGuildBoostError(t);
            throw r.default.dispatch({
                type: "GUILD_UNAPPLY_BOOST_FAIL",
                error: e
            }), e
        }
        r.default.dispatch({
            type: "GUILD_UNAPPLY_BOOST_SUCCESS",
            boostId: t
        })
    }
    async function T(e) {
        let t = await i.HTTP.post({
                url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                oldFormErrors: !0
            }),
            n = o.default.createFromServer(t.body, l.default.getSubscriptionById(t.body.subscription_id));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
            guildBoostSlot: n
        }), n
    }
    async function f(e) {
        let t = await i.HTTP.post({
                url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                oldFormErrors: !0
            }),
            n = o.default.createFromServer(t.body, l.default.getSubscriptionById(t.body.subscription_id));
        return r.default.dispatch({
            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
            guildBoostSlot: n
        }), n
    }
}