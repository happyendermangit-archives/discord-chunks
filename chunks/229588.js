function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setLocaleHack: function() {
            return c
        }
    });
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = !1,
        d = null,
        _ = null;

    function c(e) {
        E({
            locale: e
        })
    }

    function E(e) {
        let {
            locale: t
        } = e;
        u = !0, d = t
    }
    class I extends(s = o.default.Store) {
        isLoading() {
            return u
        }
        getError() {
            return _
        }
    }
    a = "I18nLoaderStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new I(l.default, {
        I18N_LOAD_START: E,
        I18N_LOAD_SUCCESS: function(e) {
            let {
                locale: t
            } = e;
            t === d && (u = !1, _ = null, d = null)
        },
        I18N_LOAD_ERROR: function(e) {
            let {
                error: t,
                locale: n
            } = e;
            n === d && (u = !1, _ = null != t ? t : null, d = null)
        }
    })
}