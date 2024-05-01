function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        setLocale: function() {
            return u
        },
        updateLocaleLoadingStatus: function() {
            return d
        }
    }), n("653041"), n("47120"), n("177593");
    var a = n("570140"),
        s = n("229588"),
        o = n("689938");
    i = n("330711").default;
    let l = !1;

    function u(e) {
        r = o.default.loadPromise, i && i.setLocale(e), o.default.setLocale(e), d(e)
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (l && o.default.loadPromise === r) return;
        l = !0, t ? (0, s.setLocaleHack)(e) : a.default.dispatch({
            type: "I18N_LOAD_START",
            locale: e
        });
        let n = [o.default.loadPromise];
        i && n.push(i.loadPromise);
        let u = Promise.all(n);
        setImmediate(() => {
            u.then(() => {
                a.default.dispatch({
                    type: "I18N_LOAD_SUCCESS",
                    locale: e
                })
            }).catch(t => {
                a.default.dispatch({
                    type: "I18N_LOAD_ERROR",
                    error: t,
                    locale: e
                })
            })
        })
    }
}