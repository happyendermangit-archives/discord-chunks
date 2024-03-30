function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openEndEventModal: function() {
            return p
        },
        openGuildEventDetails: function() {
            return d
        },
        transitionToEventDetailsFromInvite: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("67381"),
        i = n("322997"),
        a = n("281767"),
        u = n("840801");

    function s(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function l(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e) {
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

    function f(e, t) {
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

    function d(e) {
        var t = e.eventId,
            i = e.parentGuildId,
            a = e.recurrenceId;
        (0, o.openModalLazy)(l(function() {
            var e;
            return f(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("45699"), n.e("69662"), n.e("19649"), n.e("27574"), n.e("18742"), n.e("14754"), n.e("31312")]).then(n.bind(n, "873976"))];
                    case 1:
                        return e = o.sent().default, [2, function(n) {
                            return r.createElement(e, c({
                                guildScheduledEventId: t,
                                parentGuildId: i,
                                initialRecurrenceId: a
                            }, n))
                        }]
                }
            })
        }))
    }

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = l(function(e, t) {
            var n;
            return f(this, function(r) {
                switch (r.label) {
                    case 0:
                        return n = e.guild_id, [4, i.default.transitionToGuildSync(n, t)];
                    case 1:
                        return r.sent(), d({
                            eventId: e.id,
                            event: e
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function p(e, t) {
        (0, o.openModalLazy)(l(function() {
            var t;
            return f(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("68956"), n.e("19649"), n.e("96983")]).then(n.bind(n, "195623"))];
                    case 1:
                        return t = o.sent().default, [2, function(n) {
                            var o, i;
                            return r.createElement(t, (o = c({}, n), i = (i = {
                                channel: e
                            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(i)).forEach(function(e) {
                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                            }), o))
                        }]
                }
            })
        }), {
            contextKey: t === a.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
        })
    }
}