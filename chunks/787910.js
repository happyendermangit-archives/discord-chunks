function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
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

    function V(N) {
        i({
            locale: N
        })
    }

    function i(N) {
        let {
            locale: I
        } = N;
        _ = !0, e = I
    }
    class t extends O.default.Store {
        isLoading() {
            return _
        }
        getError() {
            return E
        }
    }
    t.displayName = "I18nLoaderStore";
    var n = new t(T.default, {
        I18N_LOAD_START: i,
        I18N_LOAD_SUCCESS: function(N) {
            let {
                locale: I
            } = N;
            I === e && (_ = !1, E = null, e = null)
        },
        I18N_LOAD_ERROR: function(N) {
            let {
                error: I,
                locale: A
            } = N;
            A === e && (_ = !1, E = null != I ? I : null, e = null)
        }
    })
}