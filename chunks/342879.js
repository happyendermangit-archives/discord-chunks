function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        s = n("162461"),
        a = n("564990"),
        o = n("146282"),
        l = n("206583");
    let u = l.ContentInventoryFeedKey.GLOBAL_FEED,
        d = null,
        _ = !1,
        c = 0;

    function E() {
        h()
    }

    function I() {
        S()
    }

    function T(e) {
        e.idle ? S() : h()
    }

    function f() {
        return !!(0, s.isEligibleForContentInventoryV1)("ContentInventoryManager") && !_ && !o.default.hidden && !0
    }

    function S() {
        clearTimeout(d), d = null
    }

    function h() {
        if (S(), !f()) return;
        let e = o.default.getFeed(u),
            t = null == e ? void 0 : e.expired_at;
        d = setTimeout(() => A(), null == t ? 0 : new Date(t).getTime() - Date.now())
    }
    async function A() {
        if (f()) try {
            _ = !0;
            let e = await (0, a.getMyContentInventory)();
            i.default.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: u,
                feed: e
            }), c = 0, _ = !1, h()
        } catch (e) {
            c < 3 ? (d = setTimeout(() => A(), 1e3 * Math.pow(5, c)), c += 1) : i.default.dispatch({
                type: "CONTENT_INVENTORY_CLEAR_FEED",
                feedId: u
            }), _ = !1
        }
    }

    function m() {
        h()
    }
    class N extends r.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: E,
                CONNECTION_CLOSED: I,
                IDLE: T,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: m
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new N
}