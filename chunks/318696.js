function(N, I, A) {
    "use strict";
    let O, T;
    A.r(I), A.d(I, {
        setLocale: function() {
            return i
        },
        updateLocaleLoadingStatus: function() {
            return t
        }
    }), A("424973"), A("222007"), A("860677");
    var _ = A("913144"),
        e = A("787910"),
        E = A("782340");
    O = A("792788").default;
    let V = !1;

    function i(N) {
        T = E.default.loadPromise, O && O.setLocale(N), E.default.setLocale(N), t(N)
    }

    function t(N) {
        let I = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (V && E.default.loadPromise === T) return;
        V = !0, I ? (0, e.setLocaleHack)(N) : _.default.dispatch({
            type: "I18N_LOAD_START",
            locale: N
        });
        let A = [E.default.loadPromise];
        O && A.push(O.loadPromise);
        let i = Promise.all(A);
        setImmediate(() => {
            i.then(() => {
                _.default.dispatch({
                    type: "I18N_LOAD_SUCCESS",
                    locale: N
                })
            }).catch(I => {
                _.default.dispatch({
                    type: "I18N_LOAD_ERROR",
                    error: I,
                    locale: N
                })
            })
        })
    }
}