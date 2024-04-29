function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePopper: function() {
            return l
        }
    });
    var r = n("470079"),
        i = n("699581"),
        a = n("186585"),
        o = n("427753"),
        s = n.n(o),
        u = n("893467"),
        c = [],
        l = function(e, t, n) {
            void 0 === n && (n = {});
            var o = r.useRef(null),
                l = {
                    onFirstUpdate: n.onFirstUpdate,
                    placement: n.placement || "bottom",
                    strategy: n.strategy || "absolute",
                    modifiers: n.modifiers || c
                },
                d = r.useState({
                    styles: {
                        popper: {
                            position: l.strategy,
                            left: "0",
                            top: "0"
                        },
                        arrow: {
                            position: "absolute"
                        }
                    },
                    attributes: {}
                }),
                f = d[0],
                p = d[1],
                h = r.useMemo(function() {
                    return {
                        name: "updateState",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state,
                                n = Object.keys(t.elements);
                            i.flushSync(function() {
                                p({
                                    styles: (0, u.fromEntries)(n.map(function(e) {
                                        return [e, t.styles[e] || {}]
                                    })),
                                    attributes: (0, u.fromEntries)(n.map(function(e) {
                                        return [e, t.attributes[e]]
                                    }))
                                })
                            })
                        },
                        requires: ["computeStyles"]
                    }
                }, []),
                m = r.useMemo(function() {
                    var e = {
                        onFirstUpdate: l.onFirstUpdate,
                        placement: l.placement,
                        strategy: l.strategy,
                        modifiers: [].concat(l.modifiers, [h, {
                            name: "applyStyles",
                            enabled: !1
                        }])
                    };
                    return s()(o.current, e) ? o.current || e : (o.current = e, e)
                }, [l.onFirstUpdate, l.placement, l.strategy, l.modifiers, h]),
                g = r.useRef();
            return (0, u.useIsomorphicLayoutEffect)(function() {
                g.current && g.current.setOptions(m)
            }, [m]), (0, u.useIsomorphicLayoutEffect)(function() {
                if (null != e && null != t) {
                    var r = (n.createPopper || a.createPopper)(e, t, m);
                    return g.current = r,
                        function() {
                            r.destroy(), g.current = null
                        }
                }
            }, [e, t, n.createPopper]), {
                state: g.current ? g.current.state : null,
                styles: f.styles,
                attributes: f.attributes,
                update: g.current ? g.current.update : null,
                forceUpdate: g.current ? g.current.forceUpdate : null
            }
        }
}