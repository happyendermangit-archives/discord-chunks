function(I, N, A) {
    "use strict";
    let O, T;
    A.r(N), A.d(N, {
        setLocale: function() {
            return t
        },
        updateLocaleLoadingStatus: function() {
            return i
        }
    }), A("424973"), A("222007"), A("860677");
    var _ = A("913144"),
        e = A("787910"),
        E = A("782340");
    O = A("792788").default;
    let V = !1;

    function t(I) {
        T = E.default.loadPromise, O && O.setLocale(I), E.default.setLocale(I), i(I)
    }

    function i(I) {
        let N = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (V && E.default.loadPromise === T) return;
        V = !0, N ? (0, e.setLocaleHack)(I) : _.default.dispatch({
            type: "I18N_LOAD_START",
            locale: I
        });
        let A = [E.default.loadPromise];
        O && A.push(O.loadPromise);
        let t = Promise.all(A);
        setImmediate(() => {
            t.then(() => {
                _.default.dispatch({
                    type: "I18N_LOAD_SUCCESS",
                    locale: I
                })
            }).catch(N => {
                _.default.dispatch({
                    type: "I18N_LOAD_ERROR",
                    error: N,
                    locale: I
                })
            })
        })
    }
}