function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return c
        }
    }), E("222007");
    var t = E("913144"),
        o = E("689988"),
        n = E("1405"),
        r = E("68720"),
        a = E("265596"),
        i = E("709377");
    let I = i.ContentInventoryFeedKey.GLOBAL_FEED,
        s = null,
        T = !1,
        S = 0;

    function N() {
        u()
    }

    function O() {
        l()
    }

    function A(e) {
        e.idle ? l() : u()
    }

    function R() {
        return !!(0, n.isEligibleForContentInventoryV1)("ContentInventoryManager") && !T && !a.default.hidden && !0
    }

    function l() {
        clearTimeout(s), s = null
    }

    function u() {
        if (l(), !R()) return;
        let e = a.default.getFeed(I),
            _ = null == e ? void 0 : e.expired_at,
            E = null == _ ? 0 : new Date(_).getTime() - Date.now();
        s = setTimeout(() => L(), E)
    }
    async function L() {
        if (R()) try {
            T = !0;
            let e = await (0, r.getMyContentInventory)();
            t.default.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: I,
                feed: e
            }), S = 0, T = !1, u()
        } catch (e) {
            if (S < 3) {
                let e = 1e3 * Math.pow(5, S);
                s = setTimeout(() => L(), e), S += 1
            }
            T = !1
        }
    }
    class C extends o.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: N,
                CONNECTION_CLOSED: O,
                IDLE: A
            }
        }
    }
    var c = new C
}