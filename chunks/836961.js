function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("549579"),
        s = n("938752"),
        l = n("481971"),
        c = n("118891"),
        f = n("281767"),
        d = n("941504"),
        _ = n("594379");

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        var t, o = e.className,
            p = e.activeCommand,
            m = r.useCallback(function(e) {
                var t, o, i = null == p ? void 0 : null === (o = p.rootCommand) || void 0 === o ? void 0 : o.id;
                if (null == i) {
                    e.preventDefault();
                    return
                }(0, u.openContextMenuLazy)(e, (t = function() {
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
                                return [4, n.e("22364").then(n.bind(n, "482267"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    var n, o;
                                    return r.createElement(e, (n = function(e) {
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
                                    }({}, t), o = (o = {
                                        id: i,
                                        label: d.default.Messages.COPY_ID_COMMAND
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
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            E(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            E(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            }, [null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id]);
        return null == p ? null : r.createElement("div", {
            className: i()(o, _.bar),
            onContextMenu: m
        }, r.createElement(s.default, null), r.createElement(a.Text, {
            variant: "text-sm/normal",
            color: "text-muted"
        }, d.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EDUCATION.format({
            betaUserLimit: c.APPLICATION_USER_INSTALL_BETA_USER_LIMIT
        }), d.default.Messages.APPLICATION_COMMAND_USER_INSTALL_LEARN_MORE.format({
            learnMoreUrl: l.default.getArticleURL(f.HelpdeskArticles.USING_APPS_FAQ)
        })))
    }
}