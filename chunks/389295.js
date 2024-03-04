function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return L
        }
    }), E("222007");
    var t = E("913144"),
        o = E("689988"),
        n = E("1405"),
        r = E("68720"),
        a = E("265596"),
        i = E("709377");
    let I = i.ContentInventoryFeedKey.GLOBAL_FEED,
        T = null,
        s = !1,
        S = 0;

    function N() {
        R()
    }

    function O() {
        A()
    }

    function A() {
        clearTimeout(T), T = null
    }

    function R() {
        if (A(), !(0, n.isEligibleForContentInventoryV1)("ContentInventoryManager") || s) return;
        let e = a.default.getFeed(I),
            _ = null == e ? void 0 : e.expired_at,
            E = null == _ ? 0 : new Date(_).getTime() - Date.now();
        T = setTimeout(() => l(), E)
    }
    async function l() {
        if (!s) try {
            s = !0;
            let e = await (0, r.getMyContentInventory)();
            t.default.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: I,
                feed: e
            }), S = 0, s = !1, R()
        } catch (e) {
            if (S < 3) {
                let e = 1e3 * Math.pow(5, S);
                T = setTimeout(() => l(), e), S += 1
            }
            s = !1
        }
    }
    class u extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: N,
                CONNECTION_CLOSED: O
            }
        }
    }
    var L = new u
}