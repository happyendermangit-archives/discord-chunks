function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("661961"),
        u = n("264518"),
        s = n("335911"),
        l = n("941504");
    t.default = function() {
        var e = function() {
                null !== c.current && ((0, i.closeModal)(c.current), c.current = null)
            },
            t = function() {
                a.default.interact()
            },
            n = (0, o.useStateFromStores)([s.default], function() {
                return s.default.isInteractionRequired()
            }, []),
            c = r.useRef(null);
        return r.useEffect(function() {
            return n ? c.current = (0, i.openModal)(function(e) {
                    return r.createElement(u.default, function(e) {
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
                        title: l.default.Messages.INTERACTION_REQUIRED_TITLE,
                        body: l.default.Messages.INTERACTION_REQUIRED_BODY,
                        onConfirm: t,
                        confirmText: l.default.Messages.OKAY
                    }, e))
                }) : e(),
                function() {
                    e()
                }
        }, [n]), null
    }
}