function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var i, r, s, a, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("641826"),
        c = n("232700");
    (i = o || (o = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
    let E = !1,
        I = 0,
        T = 0,
        f = {},
        S = !1,
        A = 0,
        h = 0,
        m = 0,
        N = 0;
    class O extends(l = u.default.Store) {
        get tempShowLootboxSettings() {
            return E
        }
        get openedItems() {
            return f
        }
        get redeemedPrize() {
            return S
        }
        get globalOpenedCount() {
            return h
        }
        get lastGlobalOpenedCount() {
            return A
        }
        get globalOpenedCountFetchTime() {
            return m
        }
        get nextGlobalOpenedCountFetchDelay() {
            return N
        }
        get userDataFetchState() {
            return I
        }
        get globalOpenedCountFetchState() {
            return T
        }
    }
    a = "LootboxStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(d.default, {
        LOOTBOX_SHOW_LOOTBOX_SETTINGS: function() {
            E = !0
        },
        USER_LOOTBOX_DATA_FETCH: function() {
            I = 1
        },
        USER_LOOTBOX_DATA_FETCH_SUCCESS: function(e) {
            f = {
                ...e.openedItems
            }, S = e.redeemedPrize, I = 2
        },
        USER_LOOTBOX_DATA_FETCH_FAILURE: function() {
            I = 3
        },
        USER_LOOTBOX_REPORT_FINISHED_OPENED_ITEM: function(e) {
            let {
                userLootboxData: t
            } = e;
            f = {
                ...t.openedItems
            }, S = t.redeemedPrize, h++, A++
        },
        LOOTBOX_COUNT_STAT_FETCHED: function(e) {
            let {
                currentCount: t,
                previousCount: n
            } = e;
            h = t, A = n, m = Date.now(), N = (0, _.randomBetween)(c.LOOTBOX_COUNT_STAT_FETCH_DELAY_MIN, c.LOOTBOX_COUNT_STAT_FETCH_DELAY_MAX), T = 2
        },
        LOGOUT: function() {
            E = !1, f = {}, S = !1, I = 0
        }
    })
}