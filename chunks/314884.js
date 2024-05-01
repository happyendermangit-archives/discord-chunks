function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("78839");
    let d = !1,
        _ = {};

    function c(e) {
        let {
            guildBoostSlot: t
        } = e;
        _ = {
            ..._,
            [t.id]: t
        }
    }

    function E() {
        let e = {};
        for (let t of Object.values(_)) e[t.id] = t, t.subscription = u.default.getSubscriptionById(t.subscriptionId);
        _ = e
    }
    class I extends(i = o.default.Store) {
        initialize() {
            this.syncWith([u.default], E)
        }
        get hasFetched() {
            return d
        }
        get boostSlots() {
            return _
        }
        getGuildBoostSlot(e) {
            return _[e]
        }
    }
    s = "GuildBoostSlotStore", (a = "displayName") in(r = I) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new I(l.default, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
            let {
                guildBoostSlots: t
            } = e;
            _ = {}, t.forEach(e => {
                _[e.id] = e
            }), d = !0
        },
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: c,
        GUILD_BOOST_SLOT_CREATE: c,
        GUILD_BOOST_SLOT_UPDATE: c,
        LOGOUT: function() {
            _ = {}, d = !1
        }
    })
}