function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutUpsellSource: function() {
            return o
        },
        useUserPopoutCollectiblesUpsellStore: function() {
            return s
        }
    });
    var r, o, i = n("652874");

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }(r = o || (o = {})).PROFILE_PANEL = "profile panel", r.USER_POPOUT = "user popout";
    var u = {
            upsellSource: null
        },
        s = (0, i.default)(function(e) {
            var t, n;
            return t = a({}, u), n = (n = {
                setUpsellSource: function(t) {
                    return e({
                        upsellSource: t
                    })
                },
                reset: function() {
                    e(a({}, u))
                }
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
        })
}