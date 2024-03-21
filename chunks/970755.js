function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplicationsShelf: function() {
            return o
        },
        fetchPrivateChannelIntegrations: function() {
            return u
        },
        deletePrivateChannelIntegration: function() {
            return d
        }
    }), n("70102"), n("746379");
    var i = n("981980"),
        l = n("872717"),
        a = n("913144");
    n("253981");
    var s = n("140596"),
        r = n("49111");
    n("843455"), n("782340");

    function o() {
        s.default.getApplicationsShelfFetchState() === s.FetchState.NOT_FETCHED && (a.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_START"
        }), l.HTTP.get(r.Endpoints.APPLICATIONS_SHELF).then(e => a.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
            applications: e.body.applications
        })).catch(e => a.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_FAIL"
        })))
    }

    function u(e) {
        let t = new i.default(1e3, 5e3);
        a.default.dispatch({
            type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
            channelId: e
        }), l.HTTP.get({
            url: r.Endpoints.CHANNEL_INTEGRATIONS(e),
            backoff: t,
            retries: 10
        }).then(t => {
            a.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                channelId: e,
                integrations: t.body
            })
        }).catch(() => {
            a.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                channelId: e
            })
        })
    }

    function d(e, t) {
        return l.HTTP.del(r.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
            var t;
            if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
        })
    }
}