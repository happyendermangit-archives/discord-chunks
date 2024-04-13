function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        s = n("38618"),
        a = n("517100"),
        o = n("451478"),
        l = n("162461"),
        u = n("564990"),
        d = n("146282"),
        _ = n("206583");
    let c = _.ContentInventoryFeedKey.GLOBAL_FEED,
        E = null,
        I = !1,
        T = 0;

    function f() {
        A()
    }

    function S() {
        if (!(0, l.isEligibleForContentInventoryV1)("ContentInventoryManager") || I || d.default.hidden || !o.default.isFocused() || !s.default.isConnected()) return !1;
        let e = a.default.getIdleSince();
        return !(null != e && Date.now() - e > 9e5) && !0
    }

    function A() {
        clearTimeout(E), E = null
    }

    function h() {
        if (A(), !S()) return;
        let e = d.default.getFeed(c),
            t = null == e ? void 0 : e.expired_at;
        E = setTimeout(() => m(), null == t ? 0 : new Date(t).getTime() - Date.now())
    }
    async function m() {
        if (S()) try {
            I = !0;
            let e = await (0, u.getMyContentInventory)();
            i.default.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: c,
                feed: e
            }), T = 0, I = !1, h()
        } catch (e) {
            T < 3 ? (E = setTimeout(() => m(), 1e3 * Math.pow(5, T)), T += 1) : i.default.dispatch({
                type: "CONTENT_INVENTORY_CLEAR_FEED",
                feedId: c
            }), I = !1
        }
    }

    function N() {
        h()
    }
    class O extends r.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: N,
                CONNECTION_CLOSED: f,
                WINDOW_FOCUS: N,
                IDLE: N,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: N
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new O
}