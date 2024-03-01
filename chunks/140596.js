function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        },
        default: function() {
            return C
        }
    }), n("222007"), n("424973");
    var i, l, a = n("446674"),
        o = n("913144"),
        r = n("653047"),
        s = n("946028");
    (l = i || (i = {}))[l.NOT_FETCHED = 0] = "NOT_FETCHED", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.FETCH_FAILED = 3] = "FETCH_FAILED";
    let u = new Map,
        d = new Map,
        c = [],
        p = 0,
        f = [];
    class m extends a.default.Store {
        getIntegrations(e) {
            var t;
            return null !== (t = u.get(e)) && void 0 !== t ? t : f
        }
        getIntegration(e, t) {
            var n;
            return null === (n = u.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
        }
        getAllIntegrations() {
            return u
        }
        getIntegrationsFetchState(e) {
            var t;
            return null !== (t = d.get(e)) && void 0 !== t ? t : 0
        }
        getApplicationsShelfFetchState() {
            return p
        }
        getApplicationsShelf() {
            return c
        }
    }

    function _(e) {
        return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
    }
    m.displayName = "PrivateChannelIntegrationStore";
    let I = new m(o.default, {
        LOGOUT() {
            u.clear()
        },
        CONNECTION_OPEN() {
            u.clear(), d.clear()
        },
        CHANNEL_SELECT(e) {
            let {
                channelId: t
            } = e;
            if (null == t || 3 !== d.get(t)) return !1;
            d.set(t, 0)
        },
        APPLICATIONS_SHELF_FETCH_START() {
            p = 1
        },
        APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
            let {
                applications: t
            } = e;
            c = t.map(r.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), p = 2
        },
        APPLICATIONS_SHELF_FETCH_FAIL() {
            p = 3
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
            let {
                channelId: t
            } = e;
            u.set(t, null), d.set(t, 1)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
            let {
                channelId: t,
                integrations: n
            } = e;
            u.set(t, _(n.map(s.createPrivateChannelIntegration))), d.set(t, 2)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
            let {
                channelId: t
            } = e;
            d.set(t, 3)
        },
        PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
            let {
                integration: t
            } = e, n = u.get(t.channel_id);
            if (null == n) return !1;
            u.set(t.channel_id, _([...n, (0, s.createPrivateChannelIntegration)(t)]))
        },
        PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
            let {
                integration: t
            } = e, n = u.get(t.channel_id);
            if (null == n) return !1;
            let i = (0, s.createPrivateChannelIntegration)(t),
                l = n.findIndex(e => e.application.id === i.application.id),
                a = [...n]; - 1 === l ? a.push(i) : a[l] = i, u.set(i.channel_id, _(a))
        },
        PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
            let {
                channelId: t,
                applicationId: n
            } = e, i = u.get(t);
            if (null == i) return !1;
            u.set(t, i.filter(e => e.application.id !== n))
        },
        CHANNEL_DELETE(e) {
            let {
                channel: t
            } = e;
            return u.delete(t.id)
        }
    });
    var C = I
}