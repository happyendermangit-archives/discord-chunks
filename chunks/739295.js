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
        r = n("913144"),
        u = n("599417"),
        l = n("49111");
    let a = async (t, e) => {
        let n = await i.HTTP.get({
            url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(t, e)
        });
        return n.body
    }, o = async function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await i.HTTP.get({
                url: l.Endpoints.GUILD_ENTITLEMENTS(t),
                query: {
                    with_sku: !0,
                    with_application: !0,
                    exclude_deleted: e
                }
            });
        return n.body
    }, s = async t => {
        let e = await i.HTTP.get({
            url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(t)
        });
        return e.body
    };

    function c(t) {
        return r.default.dispatch({
            type: "APPLICATION_FETCH",
            applicationId: t
        }), i.HTTP.get({
            url: l.Endpoints.APPLICATION_PUBLIC(t)
        }).then(t => (r.default.dispatch({
            type: "APPLICATION_FETCH_SUCCESS",
            application: t.body
        }), t.body)).catch(e => (r.default.dispatch({
            type: "APPLICATION_FETCH_FAIL",
            applicationId: t
        }), Promise.reject(new u.default(e))))
    }
    async function S(t) {
        let e = await i.HTTP.get({
            url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: t
            }
        });
        return e.body
    }
}