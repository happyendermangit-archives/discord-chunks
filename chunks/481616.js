function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusJumpSection: function() {
            return d
        },
        useFocusJumpSection: function() {
            return f
        },
        useFocusJumpSectionManager: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("967147"),
        i = n("850168"),
        a = n("654546");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var s = "data-jump-section",
        l = "global",
        c = r.createContext(l);

    function f() {
        var e = r.useContext(c);
        return r.useMemo(function() {
            var t, n, r;
            return t = {}, n = s, r = e, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t
        }, [e])
    }

    function d(e) {
        var t = f();
        return e.children(t)
    }

    function _(e) {
        return E.apply(this, arguments)
    }

    function E() {
        var e;
        return e = function(e) {
            var t, n, r, u, c, f, d, _, E;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(p) {
                switch (p.label) {
                    case 0:
                        if (e.key !== a.FOCUS_SECTION_JUMP_KEY || null == (n = (0, i.eventOwnerDocument)(e))) return [2];
                        for (r = null, u = null, c = e.target; null != c;) {
                            if (c.hasAttribute(s)) {
                                r = c.getAttribute(s), u = c;
                                break
                            }
                            c = c.parentElement
                        }
                        if (f = (0, o.createFocusManager)({
                                getFocusableElements: function() {
                                    return Array.from(n.querySelectorAll("[".concat(s, '="').concat(null != r ? r : l, '"]')))
                                },
                                getActiveElement: function() {
                                    return n.activeElement
                                }
                            }), (null === (t = (0, i.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == u) return null === (d = f.getFirstFocusableElement()) || void 0 === d || d.focus(), [2];
                        if (!e.getModifierState("Shift")) return [3, 2];
                        return [4, f.getPreviousFocusableElement({
                            wrap: !0,
                            from: u
                        })];
                    case 1:
                        return null === (_ = p.sent()) || void 0 === _ || _.focus(), [3, 4];
                    case 2:
                        return [4, f.getNextFocusableElement({
                            wrap: !0,
                            from: u
                        })];
                    case 3:
                        null === (E = p.sent()) || void 0 === E || E.focus(), p.label = 4;
                    case 4:
                        return [2]
                }
            })
        }, (E = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function p(e) {
        r.useEffect(function() {
            if (e) return window.addEventListener("keydown", _),
                function() {
                    window.removeEventListener("keydown", _)
                }
        }, [e])
    }
}