function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        MODAL_KEY: function() {
            return f
        },
        default: function() {
            return m
        },
        openGuildRoleConnectionsModal: function() {
            return d
        }
    });
    var n = r("470079"),
        l = r("898511"),
        i = r("784184"),
        a = r("306912"),
        o = r("438398"),
        c = r("965067"),
        u = r("941504");

    function s(e, t, r, n, l, i, a) {
        try {
            var o = e[i](a),
                c = o.value
        } catch (e) {
            r(e);
            return
        }
        o.done ? t(c) : Promise.resolve(c).then(n, l)
    }
    var f = "guild-connection-roles";

    function d(e) {
        var t;
        (0, i.openModalLazy)((t = function() {
            var t;
            return function(e, t) {
                var r, n, l, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (l = 2 & i[0] ? n.return : i[0] ? n.throw || ((l = n.return) && l.call(n), 0) : n.next) && !(l = l.call(n, i[1])).done) return l;
                                switch (n = 0, l && (i = [2 & i[0], l.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        l = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = (l = a.trys).length > 0 && l[l.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!l || i[1] > l[0] && i[1] < l[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < l[1]) {
                                            a.label = l[1], l = i;
                                            break
                                        }
                                        if (l && a.label < l[2]) {
                                            a.label = l[2], a.ops.push(i);
                                            break
                                        }
                                        l[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], n = 0
                            } finally {
                                r = l = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            }(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, Promise.all([r.e("99387"), r.e("76319")]).then(r.bind(r, "643885"))];
                    case 1:
                        return t = l.sent().default, [2, function(r) {
                            var l, i;
                            return n.createElement(t, (l = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))), n.forEach(function(t) {
                                        var n, l, i;
                                        n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : n[l] = i
                                    })
                                }
                                return e
                            }({}, r), i = (i = {
                                guildId: e
                            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n)
                                }
                                return r
                            })(Object(i)).forEach(function(e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                            }), l))
                        }]
                }
            })
        }, function() {
            var e = this,
                r = arguments;
            return new Promise(function(n, l) {
                var i = t.apply(e, r);

                function a(e) {
                    s(i, n, l, a, o, "next", e)
                }

                function o(e) {
                    s(i, n, l, a, o, "throw", e)
                }
                a(void 0)
            })
        }), {
            modalKey: f,
            contextKey: i.DEFAULT_MODAL_CONTEXT,
            onCloseRequest: function() {
                (0, i.closeModal)(f, i.DEFAULT_MODAL_CONTEXT)
            }
        })
    }

    function m(e) {
        return (0, l.useStateFromStores)([a.default], function() {
            return (0, c.isVerifiedRolesChannelVisible)(e, a.default.getRoles(e.id))
        }, [e]) ? n.createElement(i.MenuItem, {
            id: "guild-connection-roles",
            label: u.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
            icon: o.default,
            action: function() {
                return d(e.id)
            }
        }) : null
    }
}