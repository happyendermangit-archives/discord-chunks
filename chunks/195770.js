function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setLocale: function() {
            return l
        },
        updateLocaleLoadingStatus: function() {
            return c
        }
    });
    var r, o, i = n("629815"),
        a = n("151555"),
        u = n("941504");
    r = n("118110").default;
    var s = !1;

    function l(e) {
        o = u.default.loadPromise, r && r.setLocale(e), u.default.setLocale(e), c(e)
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!s || u.default.loadPromise !== o) {
            s = !0, t ? (0, a.setLocaleHack)(e) : i.default.dispatch({
                type: "I18N_LOAD_START",
                locale: e
            });
            var n = [u.default.loadPromise];
            r && n.push(r.loadPromise);
            var l = Promise.all(n);
            setImmediate(function() {
                l.then(function() {
                    i.default.dispatch({
                        type: "I18N_LOAD_SUCCESS",
                        locale: e
                    })
                }).catch(function(t) {
                    i.default.dispatch({
                        type: "I18N_LOAD_ERROR",
                        error: t,
                        locale: e
                    })
                })
            })
        }
    }
}