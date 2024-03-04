function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        setLocaleHack: function() {
            return V
        },
        default: function() {
            return n
        }
    });
    var O = A("446674"),
        T = A("913144");
    let _ = !1,
        e = null,
        E = null;

    function V(I) {
        t({
            locale: I
        })
    }

    function t(I) {
        let {
            locale: N
        } = I;
        _ = !0, e = N
    }
    class i extends O.default.Store {
        isLoading() {
            return _
        }
        getError() {
            return E
        }
    }
    i.displayName = "I18nLoaderStore";
    var n = new i(T.default, {
        I18N_LOAD_START: t,
        I18N_LOAD_SUCCESS: function(I) {
            let {
                locale: N
            } = I;
            N === e && (_ = !1, E = null, e = null)
        },
        I18N_LOAD_ERROR: function(I) {
            let {
                error: N,
                locale: A
            } = I;
            A === e && (_ = !1, E = null != N ? N : null, e = null)
        }
    })
}