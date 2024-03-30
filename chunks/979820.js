function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusLock: function() {
            return c
        },
        useFocusLock: function() {
            return l
        }
    });
    var r, o = n("470079"),
        i = n("802498"),
        a = n("898511"),
        u = n("622780"),
        s = null !== (r = document.getElementById("app-mount")) && void 0 !== r ? r : document;

    function l(e) {
        var t, n, r, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = (0, a.useStateFromStores)([u.default], function() {
                return u.default.keyboardModeEnabled
            }),
            f = o.useRef(!1);
        return f.current = !c, (0, i.default)(e, (t = function(e) {
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
        }({}, l), n = (n = {
            disableReturnRef: f,
            attachTo: null !== (r = l.attachTo) && void 0 !== r ? r : s,
            returnRef: l.returnRef
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }

    function c(e) {
        return l(e.containerRef), e.children
    }
}