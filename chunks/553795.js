function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("457330"),
        d = n("726542"),
        _ = n("368111"),
        c = n("601964"),
        E = n("981631");
    let I = new Set([E.PlatformTypes.CONTACTS]),
        T = !0,
        f = [],
        S = [],
        h = {},
        A = {},
        m = {},
        N = e => {
            f = e.filter(e => !I.has(e.type) && d.default.isSupported(e.type)), S = e.filter(e => I.has(e.type)), T = !1
        };
    class O extends(i = o.default.Store) {
        isJoining(e) {
            return h[e] || !1
        }
        joinErrorMessage(e) {
            return m[e]
        }
        isFetching() {
            return T
        }
        getAccounts() {
            return f
        }
        getLocalAccounts() {
            return S
        }
        getAccount(e, t) {
            return f.find(n => (null == e || n.id === e) && n.type === t)
        }
        getLocalAccount(e) {
            return S.find(t => t.type === e)
        }
        isSuggestedAccountType(e) {
            return A[e] || !1
        }
    }
    a = "ConnectedAccountsStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(l.default, {
        CONNECTION_OPEN: function(e) {
            N(e.connectedAccounts.map(e => new _.default(e)))
        },
        USER_CONNECTIONS_UPDATE: function(e) {
            e.local && null != e.accounts ? N(e.accounts.map(e => new _.default({
                ...e,
                integrations: e.integrations.map(e => ({
                    ...e,
                    guild: new c.default(e.guild)
                }))
            }))) : u.default.fetch()
        },
        USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
            h[e.integrationId] = e.joining
        },
        USER_CONNECTION_UPDATE: function(e) {
            let {
                platformType: t,
                id: n,
                revoked: i,
                accessToken: r
            } = e, s = f.find(e => e.id === n && e.type === t);
            if (null == s) return !1;
            null != i && (s.revoked = i), null != r && (s.accessToken = r)
        },
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
            m[e.integrationId] = void 0 !== e.error ? e.error : ""
        }
    })
}