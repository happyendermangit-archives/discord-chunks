function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var a = n("470079"),
        r = n("784184"),
        c = n("53867"),
        o = n("281767");

    function i(e, t, n, a, r, c, o) {
        try {
            var i = e[c](o),
                f = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(f) : Promise.resolve(f).then(a, r)
    }

    function f(e, t) {
        if (c.AlwaysPreviewVideo.getSetting()) {
            var f;
            (0, r.openModalLazy)((f = function() {
                var t;
                return function(e, t) {
                    var n, a, r, c, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return c = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function i(c) {
                        return function(i) {
                            return function(c) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r;
                                    switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            r = c;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, a = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                o.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && o.label < r[1]) {
                                                o.label = r[1], r = c;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2], o.ops.push(c);
                                                break
                                            }
                                            r[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    c = t.call(e, o)
                                } catch (e) {
                                    c = [6, e], a = 0
                                } finally {
                                    n = r = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, i])
                        }
                    }
                }(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Promise.all([n.e("99387"), n.e("25928"), n.e("98674"), n.e("46304")]).then(n.bind(n, "191880"))];
                        case 1:
                            return t = r.sent().default, [2, function(n) {
                                var r, c;
                                return a.createElement(t, (r = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), a.forEach(function(t) {
                                            var a, r, c;
                                            a = e, r = t, c = n[t], r in a ? Object.defineProperty(a, r, {
                                                value: c,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : a[r] = c
                                        })
                                    }
                                    return e
                                }({}, n), c = (c = {
                                    onEnable: e,
                                    videoEnabled: !1
                                }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var a = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, a)
                                    }
                                    return n
                                })(Object(c)).forEach(function(e) {
                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e))
                                }), r))
                            }]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, a) {
                    var r = f.apply(e, t);

                    function c(e) {
                        i(r, n, a, c, o, "next", e)
                    }

                    function o(e) {
                        i(r, n, a, c, o, "throw", e)
                    }
                    c(void 0)
                })
            }), {
                modalKey: "camera-preview",
                contextKey: t === o.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
            })
        } else null == e || e()
    }
}