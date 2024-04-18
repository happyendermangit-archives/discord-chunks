function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("168232");
    let d = {
            perksDemos: null,
            activated: {},
            lastFetched: null,
            overrides: {}
        },
        _ = d;
    class c extends(a = o.default.Store) {
        getPerksDemos() {
            return _.perksDemos
        }
        getActivated() {
            return _.activated
        }
        shouldFetch() {
            return null == _.lastFetched || Date.now() > _.lastFetched + 864e5
        }
        shouldActivate(e) {
            var t;
            return (null === (t = _.perksDemos) || void 0 === t ? void 0 : t[e]) === !0
        }
        overrides() {
            return _.overrides
        }
    }
    s = "PerksDemosStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new c(l.default, {
        PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function(e) {
            let {
                demos: t
            } = e;
            _.perksDemos = t, _.lastFetched = Date.now()
        },
        PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function() {
            _.perksDemos = d.perksDemos, _.lastFetched = null
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function(e) {
            let {
                perkType: t
            } = e;
            _.activated[t] = !0
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function(e) {
            let {
                perkType: t
            } = e;
            _.activated[t] = !1
        },
        PREMIUM_PERKS_DEMO_COMPLETE: function(e) {
            let {
                perkType: t
            } = e;
            null != _.perksDemos && !0 === _.activated[t] && (_.perksDemos[t] = !1)
        },
        LOGOUT: function() {
            _ = d
        },
        PREMIUM_PERKS_DEMO_OVERRIDE: function(e) {
            let {
                user: t,
                perkType: n,
                available: i,
                activateSuccess: r
            } = e;
            void 0 !== t && (0, u.isStaffEnv)(t) && (_.overrides[n] = {
                available: i,
                activateSuccess: r
            }, null == _.perksDemos && (_.perksDemos = {}), _.perksDemos[n] = i || !1, _.activated[n] = !1, _.lastFetched = null)
        }
    })
}