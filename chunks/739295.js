function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getApplicationSubscriptionGroupListingsForApplication: function() {
            return a
        },
        getEntitlementsForGuild: function() {
            return o
        },
        getSubscriptionGroupForSubscriptionPlan: function() {
            return s
        },
        fetchApplication: function() {
            return c
        },
        fetchEligibleApplicationSubscriptionGuilds: function() {
            return S
        }
    });
    var i = n("872717"),
        u = n("913144"),
        r = n("599417"),
        l = n("49111");
    let a = async (t, e) => {
        let n = await i.default.get({
            url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
        });
        return n.body
    }, o = async function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await i.default.get({
                url: l.Endpoints.GUILD_ENTITLEMENTS(t),
                query: {
                    with_sku: !0,
                    with_application: !0,
                    exclude_deleted: e
                }
            });
        return n.body
    }, s = async t => {
        let e = await i.default.get({
            url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
        });
        return e.body
    };

    function c(t) {
        return u.default.dispatch({
            type: "APPLICATION_FETCH",
            applicationId: t
        }), i.default.get({
            url: l.Endpoints.APPLICATION_PUBLIC(t)
        }).then(t => (u.default.dispatch({
            type: "APPLICATION_FETCH_SUCCESS",
            application: t.body
        }), t.body)).catch(e => (u.default.dispatch({
            type: "APPLICATION_FETCH_FAIL",
            applicationId: t
        }), Promise.reject(new r.default(e))))
    }
    async function S(t) {
        let e = await i.default.get({
            url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: t
            }
        });
        return e.body
    }
}