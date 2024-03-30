function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeContextMenu: function() {
            return l
        },
        openContextMenu: function() {
            return c
        },
        openContextMenuLazy: function() {
            return f
        }
    });
    var r = n("629815"),
        o = n("813970"),
        i = n("374550"),
        a = n("557406"),
        u = n("281767");

    function s(e) {
        r.default.dispatch({
            type: "CONTEXT_MENU_OPEN",
            contextMenu: e
        })
    }

    function l(e) {
        (0, n("699581").flushSync)(function() {
            r.default.wait(function() {
                r.default.dispatch({
                    type: "CONTEXT_MENU_CLOSE"
                }).finally(e)
            })
        })
    }

    function c(e, t, n, r) {
        if (e.stopPropagation(), null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
            var l, c, f = 0,
                d = 0;
            if ("pageX" in e && (f = e.pageX, d = e.pageY), 0 === f && 0 === d) {
                var _, E = null === (_ = e.target) || void 0 === _ ? void 0 : _.getBoundingClientRect(),
                    p = null != E ? E : {},
                    m = p.left,
                    y = p.top,
                    I = p.width,
                    h = p.height;
                f = (void 0 === m ? 0 : m) + (void 0 === I ? 0 : I) / 2, d = (void 0 === y ? 0 : y) + (void 0 === h ? 0 : h) / 2
            }
            var O = {
                render: t,
                renderLazy: r,
                target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                rect: new DOMRect(f, d, 0, 0),
                config: function(e) {
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
                    context: __OVERLAY__ ? u.AppContext.OVERLAY : null !== (c = (0, o.getCurrentlyInteractingAppContext)()) && void 0 !== c ? c : u.AppContext.APP
                }, n)
            };
            if ((null == n ? void 0 : n.enableSpellCheck) && (0, i.isDesktop)()) var T = (0, a.addResultListener)(function() {
                T(), s(O)
            });
            else e.preventDefault(), s(O)
        }
    }

    function f(e, t, n) {
        c(e, void 0, n, t)
    }
}