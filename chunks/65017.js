function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        contextMenuCallbackNative: function() {
            return f
        },
        contextMenuCallbackWeb: function() {
            return d
        },
        getSelectionText: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("549579");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var a = e.apply(t, n);

                function u(e) {
                    i(a, r, o, u, s, "next", e)
                }

                function s(e) {
                    i(a, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function u(e) {
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

    function s(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function l(e, t) {
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
    }

    function c() {
        var e, t;
        return null != window.getSelection ? e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString() : null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text), null != e ? e : ""
    }

    function f(e) {
        var t = c(),
            i = e.target;
        if ((null == i ? void 0 : i.tagName) === "TEXTAREA" || (null == i ? void 0 : i.tagName) === "INPUT") {
            if ((null == i ? void 0 : i.type) !== "checkbox") return (0, o.openContextMenuLazy)(e, a(function() {
                var e;
                return l(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, n.e("1386").then(n.bind(n, "110416"))];
                        case 1:
                            return e = o.sent().default, [2, function(n) {
                                return r.createElement(e, s(u({}, n), {
                                    text: t
                                }))
                            }]
                    }
                })
            }), {
                enableSpellCheck: !0
            })
        } else if ("none" === window.getComputedStyle(i).getPropertyValue("-webkit-user-select")) {
            e.preventDefault();
            return
        } else {
            for (var f, d, _, E = e.target; null != E;) "src" in E && null != E.src && (d = E.src), "href" in E && null != E.href && (f = E.href, _ = E.textContent), E = null == E ? void 0 : E.parentNode;
            if (null != d) return (0, o.openContextMenuLazy)(e, a(function() {
                var e;
                return l(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, n.e("66236").then(n.bind(n, "436604"))];
                        case 1:
                            return e = t.sent().default, [2, function(t) {
                                return r.createElement(e, s(u({}, t), {
                                    src: null != d ? d : ""
                                }))
                            }]
                    }
                })
            }));
            if (null != f) return (0, o.openContextMenuLazy)(e, a(function() {
                var e;
                return l(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, n.e("98859").then(n.bind(n, "156177"))];
                        case 1:
                            return e = t.sent().default, [2, function(t) {
                                return r.createElement(e, s(u({}, t), {
                                    href: f,
                                    textContent: _
                                }))
                            }]
                    }
                })
            }));
            else if (null != t && "" !== t) return (0, o.openContextMenuLazy)(e, a(function() {
                var e;
                return l(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, n.e("81909").then(n.bind(n, "401342"))];
                        case 1:
                            return e = o.sent().default, [2, function(n) {
                                return r.createElement(e, s(u({}, n), {
                                    text: t
                                }))
                            }]
                    }
                })
            }))
        }
        return e.preventDefault(), null
    }

    function d(e) {
        var t = !1,
            n = e.target;
        if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
        else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
        else if (null != c() && "" !== c()) t = !0;
        else {
            for (var r, o, i = e.target; null != i;) "src" in i && null != i.src && (o = i.src), "href" in i && null != i.href && (r = i.href), i = null == i ? void 0 : i.parentNode;
            (null != r || null != o) && (t = !0)
        }!t && e.preventDefault()
    }
}