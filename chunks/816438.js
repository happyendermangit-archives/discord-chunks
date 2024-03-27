function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popperGenerator: function() {
            return p
        }
    });
    var r = n("4313"),
        i = n("493623"),
        a = n("620720"),
        o = n("343713"),
        s = n("540321"),
        u = n("609027"),
        c = n("375317"),
        l = n("882159"),
        d = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

    function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function p(e) {
        void 0 === e && (e = {});
        var t = e,
            n = t.defaultModifiers,
            p = void 0 === n ? [] : n,
            h = t.defaultOptions,
            m = void 0 === h ? d : h;
        return function(e, t, n) {
            void 0 === n && (n = m);
            var h = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, d, m),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                g = [],
                _ = !1,
                b = {
                    state: h,
                    setOptions: function(n) {
                        var r = "function" == typeof n ? n(h.options) : n;
                        v(), h.options = Object.assign({}, m, h.options, r), h.scrollParents = {
                            reference: (0, l.isElement)(e) ? (0, a.default)(e) : e.contextElement ? (0, a.default)(e.contextElement) : [],
                            popper: (0, a.default)(t)
                        };
                        var i = (0, s.default)((0, c.default)([].concat(p, h.options.modifiers)));
                        return h.orderedModifiers = i.filter(function(e) {
                                return e.enabled
                            }),
                            function() {
                                h.orderedModifiers.forEach(function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = e.effect;
                                    if ("function" == typeof r) {
                                        var i = r({
                                            state: h,
                                            name: t,
                                            instance: b,
                                            options: void 0 === n ? {} : n
                                        });
                                        g.push(i || function() {})
                                    }
                                })
                            }(), b.update()
                    },
                    forceUpdate: function() {
                        if (!_) {
                            var e = h.elements,
                                t = e.reference,
                                n = e.popper;
                            if (f(t, n)) {
                                h.rects = {
                                    reference: (0, r.default)(t, (0, o.default)(n), "fixed" === h.options.strategy),
                                    popper: (0, i.default)(n)
                                }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(e) {
                                    return h.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var a = 0; a < h.orderedModifiers.length; a++) {
                                    if (!0 === h.reset) {
                                        h.reset = !1, a = -1;
                                        continue
                                    }
                                    var s = h.orderedModifiers[a],
                                        u = s.fn,
                                        c = s.options,
                                        l = void 0 === c ? {} : c,
                                        d = s.name;
                                    "function" == typeof u && (h = u({
                                        state: h,
                                        options: l,
                                        name: d,
                                        instance: b
                                    }) || h)
                                }
                            }
                        }
                    },
                    update: (0, u.default)(function() {
                        return new Promise(function(e) {
                            b.forceUpdate(), e(h)
                        })
                    }),
                    destroy: function() {
                        v(), _ = !0
                    }
                };
            if (!f(e, t)) return b;
            b.setOptions(n).then(function(e) {
                !_ && n.onFirstUpdate && n.onFirstUpdate(e)
            });

            function v() {
                g.forEach(function(e) {
                    return e()
                }), g = []
            }
            return b
        }
    }
}