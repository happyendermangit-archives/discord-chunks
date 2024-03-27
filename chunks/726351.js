function(e, t, n) {
    "use strict";
    var r = n("201694").forEach,
        i = n("864483"),
        a = n("10968"),
        o = n("525185"),
        s = n("498031"),
        u = n("763160"),
        c = n("117417"),
        l = n("775548"),
        d = n("656082"),
        f = n("302366"),
        p = n("78687");

    function h(e) {
        return Array.isArray(e) || void 0 !== e.length
    }

    function m(e) {
        if (Array.isArray(e)) return e;
        var t = [];
        return r(e, function(e) {
            t.push(e)
        }), t
    }

    function g(e) {
        return e && 1 === e.nodeType
    }

    function _(e, t, n) {
        var r = e[t];
        return null == r && void 0 !== n ? n : r
    }
    e.exports = function(e) {
        if ((e = e || {}).idHandler) t = {
            get: function(t) {
                return e.idHandler.get(t, !0)
            },
            set: e.idHandler.set
        };
        else {
            var t, n;
            t = s({
                idGenerator: o(),
                stateHandler: d
            })
        }
        var b = e.reporter;
        !b && (b = u(!1 === b));
        var v = _(e, "batchProcessor", l({
                reporter: b
            })),
            y = {};
        y.callOnAdd = !!_(e, "callOnAdd", !0), y.debug = !!_(e, "debug", !1);
        var E = a(t),
            S = i({
                stateHandler: d
            }),
            x = _(e, "strategy", "object"),
            w = _(e, "important", !1),
            T = {
                reporter: b,
                batchProcessor: v,
                stateHandler: d,
                idHandler: t,
                important: w
            };
        if ("scroll" === x && (c.isLegacyOpera() ? (b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), x = "object") : c.isIE(9) && (b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), x = "object")), "scroll" === x) n = p(T);
        else if ("object" === x) n = f(T);
        else throw Error("Invalid strategy name: " + x);
        var C = {};
        return {
            listenTo: function(e, i, a) {
                function o(e) {
                    r(E.get(e), function(t) {
                        t(e)
                    })
                }

                function s(e, t, n) {
                    E.add(t, n), e && n(t)
                }
                if (!a && (a = i, i = e, e = {}), !i) throw Error("At least one element required.");
                if (!a) throw Error("Listener required.");
                if (g(i)) i = [i];
                else {
                    if (!h(i)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    i = m(i)
                }
                var u = 0,
                    c = _(e, "callOnAdd", y.callOnAdd),
                    l = _(e, "onReady", function() {}),
                    f = _(e, "debug", y.debug);
                r(i, function(e) {
                    !d.getState(e) && (d.initState(e), t.set(e));
                    var p = t.get(e);
                    if (f && b.log("Attaching listener to element", p, e), !S.isDetectable(e)) {
                        if (f && b.log(p, "Not detectable."), S.isBusy(e)) {
                            f && b.log(p, "System busy making it detectable"), s(c, e, a), C[p] = C[p] || [], C[p].push(function() {
                                ++u === i.length && l()
                            });
                            return
                        }
                        return f && b.log(p, "Making detectable..."), S.markBusy(e, !0), n.makeDetectable({
                            debug: f,
                            important: w
                        }, e, function(e) {
                            if (f && b.log(p, "onElementDetectable"), d.getState(e)) {
                                S.markAsDetectable(e), S.markBusy(e, !1), n.addListener(e, o), s(c, e, a);
                                var t = d.getState(e);
                                if (t && t.startSize) {
                                    var h = e.offsetWidth,
                                        m = e.offsetHeight;
                                    (t.startSize.width !== h || t.startSize.height !== m) && o(e)
                                }
                                C[p] && r(C[p], function(e) {
                                    e()
                                })
                            } else f && b.log(p, "Element uninstalled before being detectable.");
                            delete C[p], ++u === i.length && l()
                        })
                    }
                    f && b.log(p, "Already detecable, adding listener."), s(c, e, a), u++
                }), u === i.length && l()
            },
            removeListener: E.removeListener,
            removeAllListeners: E.removeAllListeners,
            uninstall: function(e) {
                if (!e) return b.error("At least one element is required.");
                if (g(e)) e = [e];
                else {
                    if (!h(e)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    e = m(e)
                }
                r(e, function(e) {
                    E.removeAllListeners(e), n.uninstall(e), d.cleanState(e)
                })
            },
            initDocument: function(e) {
                n.initDocument && n.initDocument(e)
            }
        }
    }
}