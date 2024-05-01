function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        activatePerkDemo: function() {
            return d
        },
        fetchPerksDemos: function() {
            return u
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("168232"),
        s = n("594174"),
        o = n("114064"),
        l = n("981631");
    async function u() {
        let e = s.default.getCurrentUser();
        try {
            let {
                body: t
            } = await i.HTTP.get({
                url: l.Endpoints.USER_PERKS_DEMOS
            });
            (0, a.isStaffEnv)(e) && (t = {
                ...t,
                ... function() {
                    let e = o.default.overrides(),
                        t = {};
                    for (let r in e) {
                        var n, i;
                        t[r] = null !== (i = null === (n = e[r]) || void 0 === n ? void 0 : n.available) && void 0 !== i ? i : void 0
                    }
                    return t
                }()
            }), r.default.dispatch({
                type: "PREMIUM_PERKS_DEMOS_FETCH_SUCCESS",
                demos: t
            })
        } catch (e) {
            r.default.dispatch({
                type: "PREMIUM_PERKS_DEMOS_FETCH_FAILURE"
            })
        }
    }
    async function d(e) {
        if (o.default.getActivated()[e]) return !0;
        let t = s.default.getCurrentUser();
        try {
            return await i.HTTP.post({
                url: l.Endpoints.USER_PERKS_DEMOS_ACTIVATE(e)
            }), _(e), !0
        } catch {
            if ((0, a.isStaffEnv)(t) && function(e) {
                    var t;
                    return (null === (t = o.default.overrides()[e]) || void 0 === t ? void 0 : t.activateSuccess) === !0
                }(e)) return _(e), !0;
            return r.default.dispatch({
                type: "PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE",
                perkType: e
            }), !1
        }
    }

    function _(e) {
        r.default.dispatch({
            type: "PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS",
            perkType: e
        })
    }
}