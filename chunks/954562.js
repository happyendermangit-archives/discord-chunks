function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        wrapConnectorHooks: function() {
            return o
        }
    }), n("70102");
    var r = n("900255"),
        i = n("884691");

    function o(e) {
        var t = {};
        return Object.keys(e).forEach(function(n) {
            var o = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
                var a, c = (a = o, function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return (0, i.isValidElement)(e) ? (! function(e) {
                        if ("string" != typeof e.type) {
                            var t = e.type.displayName || e.type.name || "the component";
                            throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
                        }
                    }(e), function(e, t) {
                        var n = e.ref;
                        return ((0, r.invariant)("string" != typeof n, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n) ? (0, i.cloneElement)(e, {
                            ref: function(e) {
                                s(n, e), s(t, e)
                            }
                        }) : (0, i.cloneElement)(e, {
                            ref: t
                        })
                    }(e, t ? function(e) {
                        return a(e, t)
                    } : a)) : (a(e, t), e)
                });
                t[n] = function() {
                    return c
                }
            }
        }), t
    }

    function s(e, t) {
        "function" == typeof e ? e(t) : e.current = t
    }
}