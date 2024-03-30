function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("961947"),
        u = n("264518"),
        s = n("368270"),
        l = n("878321"),
        c = n("941504");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
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
    }
    var E = function() {
            a.default.clearSuppressWarning()
        },
        p = function() {
            a.default.clearSuppressWarning(!0)
        };
    t.default = function() {
        var e, t, a = function() {
                null !== m.current && ((0, i.closeModal)(m.current), m.current = null)
            },
            m = r.useRef(null);
        var y = (e = (0, o.useStateFromStoresArray)([l.default], function() {
                return [l.default.shouldShowWarning(), l.default.isAFKChannel()]
            }, []), t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = y[0],
            h = y[1],
            O = r.useCallback(function() {
                var e = "",
                    t = "";
                h ? (e = c.default.Messages.SUPPRESSED_AFK_TITLE, t = c.default.Messages.SUPPRESSED_AFK_BODY) : (e = c.default.Messages.SUPPRESSED, t = c.default.Messages.SUPPRESSED_PERMISSION_BODY), m.current = (0, i.openModal)(function(n) {
                    return r.createElement(u.default, _({
                        title: e,
                        body: t,
                        onConfirm: E,
                        confirmText: c.default.Messages.OKAY,
                        secondaryConfirmText: c.default.Messages.DONT_SHOW_AGAIN,
                        onConfirmSecondary: p
                    }, n))
                })
            }, [h]),
            T = r.useCallback(function() {
                var e;
                (0, i.openModalLazy)((e = function() {
                    var e;
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
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([n.e("99387"), n.e("17682")]).then(n.bind(n, "467699"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    var n, o;
                                    return r.createElement(e, (n = _({}, t), o = (o = {
                                        showHideSuppressWarning: !0
                                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(o)).forEach(function(e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                    }), n))
                                }]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            d(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            d(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })).then(function(e) {
                    null != e && (m.current = e)
                })
            }, []);
        return r.useEffect(function() {
            return I && (0, s.isRTCConnectedInHub)() ? T() : I ? O() : a(),
                function() {
                    a()
                }
        }, [I, O, T]), null
    }
}