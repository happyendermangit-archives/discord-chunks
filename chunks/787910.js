function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        setLocaleHack: function() {
            return V
        },
        default: function() {
            return i
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
    class n extends O.default.Store {
        isLoading() {
            return _
        }
        getError() {
            return E
        }
    }
    n.displayName = "I18nLoaderStore";
    var i = new n(T.default, {
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