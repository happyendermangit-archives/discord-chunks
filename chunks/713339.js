function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("971619");

    function i(e) {
        return r.forwardRef(function(t, n) {
            var i = r.useRef();
            return r.useImperativeHandle(n, function() {
                return {
                    triggerResize: function() {
                        var e;
                        null === (e = i.current) || void 0 === e || e.onResize()
                    }
                }
            }), r.createElement(o.default, {
                ref: i
            }, function(n) {
                var o, i, a = n.width,
                    u = n.height;
                return r.createElement(e, (o = function(e) {
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
                }({}, t), i = (i = {
                    width: a,
                    height: u
                }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                }), o))
            })
        })
    }
}