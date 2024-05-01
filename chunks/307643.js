function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplication: function() {
            return d
        },
        fetchEligibleApplicationSubscriptionGuilds: function() {
            return _
        },
        getApplicationSubscriptionGroupListingsForApplication: function() {
            return o
        },
        getEntitlementsForGuild: function() {
            return l
        },
        getSubscriptionGroupForSubscriptionPlan: function() {
            return u
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("479531"),
        s = n("981631");
    let o = async (e, t) => (await i.HTTP.get({
        url: s.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t)
    })).body, l = async function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (await i.HTTP.get({
            url: s.Endpoints.GUILD_ENTITLEMENTS(e),
            query: {
                with_sku: !0,
                with_application: !0,
                exclude_deleted: t
            }
        })).body
    }, u = async e => (await i.HTTP.get({
        url: s.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(e)
    })).body;

    function d(e) {
        return r.default.dispatch({
            type: "APPLICATION_FETCH",
            applicationId: e
        }), i.HTTP.get({
            url: s.Endpoints.APPLICATION_PUBLIC(e)
        }).then(e => (r.default.dispatch({
            type: "APPLICATION_FETCH_SUCCESS",
            application: e.body
        }), e.body)).catch(t => (r.default.dispatch({
            type: "APPLICATION_FETCH_FAIL",
            applicationId: e
        }), Promise.reject(new a.default(t))))
    }
    async function _(e) {
        return (await i.HTTP.get({
            url: s.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
            query: {
                application_id: e
            }
        })).body
    }
}