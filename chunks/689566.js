function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return u
        },
        updateModalProps: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("67381"),
        i = n("68791"),
        a = function(e, t, n) {
            return function(o) {
                return r.createElement(i.default, function(e) {
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
                }({
                    handleSubmit: e,
                    handleEarlyClose: t
                }, n, o))
            }
        };

    function u(e, t, n) {
        return (0, o.openModal)(a(e, t, n), {
            onCloseCallback: t
        })
    }

    function s(e, t, n, r) {
        return (0, o.updateModal)(e, a(t, n, r))
    }
}