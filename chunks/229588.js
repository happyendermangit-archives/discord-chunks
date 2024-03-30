function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setLocaleHack: function() {
            return c
        }
    });
    var i, r, s, a, o = n("442837"),
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
    class I extends(a = o.default.Store) {
        isLoading() {
            return u
        }
        getError() {
            return _
        }
    }
    s = "I18nLoaderStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new I(l.default, {
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