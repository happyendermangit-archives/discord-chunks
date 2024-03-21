function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("619340"),
        a = n("376556"),
        o = n("450205"),
        l = n("813006"),
        u = n("49111");
    let d = new Set([u.PlatformTypes.CONTACTS]),
        c = !0,
        _ = [],
        f = [],
        E = {},
        h = {},
        g = {},
        m = e => {
            _ = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
        };
    class p extends i.default.Store {
        isJoining(e) {
            return E[e] || !1
        }
        joinErrorMessage(e) {
            return g[e]
        }
        isFetching() {
            return c
        }
        getAccounts() {
            return _
        }
        getLocalAccounts() {
            return f
        }
        getAccount(e, t) {
            return _.find(n => (null == e || n.id === e) && n.type === t)
        }
        getLocalAccount(e) {
            return f.find(t => t.type === e)
        }
        isSuggestedAccountType(e) {
            return h[e] || !1
        }
    }
    p.displayName = "ConnectedAccountsStore";
    var S = new p(s.default, {
        CONNECTION_OPEN: function(e) {
            let t = e.connectedAccounts.map(e => new o.default(e));
            m(t)
        },
        USER_CONNECTIONS_UPDATE: function(e) {
            if (e.local && null != e.accounts) {
                let t = e.accounts.map(e => new o.default({
                    ...e,
                    integrations: e.integrations.map(e => ({
                        ...e,
                        guild: new l.default(e.guild)
                    }))
                }));
                m(t)
            } else r.default.fetch()
        },
        USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
            E[e.integrationId] = e.joining
        },
        USER_CONNECTION_UPDATE: function(e) {
            let {
                platformType: t,
                id: n,
                revoked: i,
                accessToken: s
            } = e, r = _.find(e => e.id === n && e.type === t);
            if (null == r) return !1;
            null != i && (r.revoked = i), null != s && (r.accessToken = s)
        },
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
            g[e.integrationId] = void 0 !== e.error ? e.error : ""
        }
    })
}