function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        }
    }), n("47120"), n("653041");
    var i, r, s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("973616"),
        c = n("911955");
    (s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.FETCH_FAILED = 3] = "FETCH_FAILED";
    let E = new Map,
        I = new Map,
        T = [],
        f = 0,
        S = [];
    class h extends(r = u.default.Store) {
        getIntegrations(e) {
            var t;
            return null !== (t = E.get(e)) && void 0 !== t ? t : S
        }
        getIntegration(e, t) {
            var n;
            return null === (n = E.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
        }
        getAllIntegrations() {
            return E
        }
        getIntegrationsFetchState(e) {
            var t;
            return null !== (t = I.get(e)) && void 0 !== t ? t : 0
        }
        getApplicationsShelfFetchState() {
            return f
        }
        getApplicationsShelf() {
            return T
        }
    }

    function A(e) {
        return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
    }
    l = "PrivateChannelIntegrationStore", (o = "displayName") in(a = h) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l;
    let m = new h(d.default, {
        LOGOUT() {
            E.clear()
        },
        CONNECTION_OPEN() {
            E.clear(), I.clear()
        },
        CHANNEL_SELECT(e) {
            let {
                channelId: t
            } = e;
            if (null == t || 3 !== I.get(t)) return !1;
            I.set(t, 0)
        },
        APPLICATIONS_SHELF_FETCH_START() {
            f = 1
        },
        APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
            let {
                applications: t
            } = e;
            T = t.map(_.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), f = 2
        },
        APPLICATIONS_SHELF_FETCH_FAIL() {
            f = 3
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
            let {
                channelId: t
            } = e;
            E.set(t, null), I.set(t, 1)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
            let {
                channelId: t,
                integrations: n
            } = e;
            E.set(t, A(n.map(c.createPrivateChannelIntegration))), I.set(t, 2)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
            let {
                channelId: t
            } = e;
            I.set(t, 3)
        },
        PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
            let {
                integration: t
            } = e, n = E.get(t.channel_id);
            if (null == n) return !1;
            E.set(t.channel_id, A([...n, (0, c.createPrivateChannelIntegration)(t)]))
        },
        PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
            let {
                integration: t
            } = e, n = E.get(t.channel_id);
            if (null == n) return !1;
            let i = (0, c.createPrivateChannelIntegration)(t),
                r = n.findIndex(e => e.application.id === i.application.id),
                s = [...n]; - 1 === r ? s.push(i) : s[r] = i, E.set(i.channel_id, A(s))
        },
        PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
            let {
                channelId: t,
                applicationId: n
            } = e, i = E.get(t);
            if (null == i) return !1;
            E.set(t, i.filter(e => e.application.id !== n))
        },
        CHANNEL_DELETE(e) {
            let {
                channel: t
            } = e;
            return E.delete(t.id)
        }
    });
    t.default = m
}