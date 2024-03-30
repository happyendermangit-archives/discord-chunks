function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deletePrivateChannelIntegration: function() {
            return c
        },
        fetchApplicationsShelf: function() {
            return s
        },
        fetchPrivateChannelIntegrations: function() {
            return l
        }
    }), n("729594");
    var r = n("235923"),
        o = n("967888"),
        i = n("629815");
    n("822853");
    var a = n("458827"),
        u = n("281767");
    n("563090"), n("941504");

    function s() {
        a.default.getApplicationsShelfFetchState() === a.FetchState.NOT_FETCHED && (i.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_START"
        }), o.HTTP.get(u.Endpoints.APPLICATIONS_SHELF).then(function(e) {
            return i.default.dispatch({
                type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                applications: e.body.applications
            })
        }).catch(function(e) {
            return i.default.dispatch({
                type: "APPLICATIONS_SHELF_FETCH_FAIL"
            })
        }))
    }

    function l(e) {
        var t = new r.default(1e3, 5e3);
        i.default.dispatch({
            type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
            channelId: e
        }), o.HTTP.get({
            url: u.Endpoints.CHANNEL_INTEGRATIONS(e),
            backoff: t,
            retries: 10
        }).then(function(t) {
            i.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                channelId: e,
                integrations: t.body
            })
        }).catch(function() {
            i.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                channelId: e
            })
        })
    }

    function c(e, t) {
        return o.HTTP.del(u.Endpoints.CHANNEL_INTEGRATION(e, t)).then(function(e) {
            var t;
            if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
        })
    }
}