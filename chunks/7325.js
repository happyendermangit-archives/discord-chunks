function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        navigateToStage: function() {
            return g
        },
        openEndGuildEventConfirmationModal: function() {
            return h
        },
        openEndStageModal: function() {
            return S
        },
        openStageBlockedUsersSheet: function() {
            return T
        },
        openStageChannelAudienceNoticeModal: function() {
            return O
        },
        openStageChannelSettings: function() {
            return I
        },
        shouldShowBlockedUsers: function() {
            return v
        },
        showChannelChangeConfirmationAlert: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("67381"),
        i = n("409635"),
        a = n("217014"),
        u = n("488764"),
        s = n("487181"),
        l = n("820975"),
        c = n("216213"),
        f = n("281767"),
        d = n("840801");

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e) {
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

    function m(e, t) {
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

    function y(e, t) {
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

    function I(e, t) {
        (0, o.openModalLazy)(E(function() {
            var t;
            return y(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("40874"), n.e("87321"), n.e("44380"), n.e("36132")]).then(n.bind(n, "422648"))];
                    case 1:
                        return t = o.sent().default, [2, function(n) {
                            return r.createElement(t, m(p({}, n), {
                                channel: e
                            }))
                        }]
                }
            })
        }), {
            contextKey: t === f.AppContext.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
        })
    }

    function h(e, t) {
        (0, o.openModalLazy)(E(function() {
            var t;
            return y(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("97182")]).then(n.bind(n, "637144"))];
                    case 1:
                        return t = o.sent().default, [2, function(n) {
                            return r.createElement(t, m(p({}, n), {
                                channel: e
                            }))
                        }]
                }
            })
        }), {
            contextKey: t === f.AppContext.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
        })
    }

    function O(e) {}

    function T(e, t) {
        (0, o.openModalLazy)(E(function() {
            var o;
            return y(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("87321"), n.e("23496")]).then(n.bind(n, "91325"))];
                    case 1:
                        return o = i.sent().default, [2, function(n) {
                            return r.createElement(o, m(p({}, n), {
                                channel: e,
                                onAccept: t
                            }))
                        }]
                }
            })
        }))
    }

    function S(e, t) {
        (0, o.openModalLazy)(E(function() {
            var t;
            return y(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("37752")]).then(n.bind(n, "116170"))];
                    case 1:
                        return t = o.sent().default, [2, function(n) {
                            return r.createElement(t, m(p({}, n), {
                                channel: e
                            }))
                        }]
                }
            })
        }), {
            contextKey: t === f.AppContext.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
        })
    }

    function v(e) {
        var t = a.default.getId(),
            n = (0, c.getStageBlockedUsersCount)(e);
        return !u.default.isModerator(t, e) && n > 0
    }

    function g(e, t) {
        var c, f, d, _, h, O = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (t !== e.id && (0, l.setIsOnStartStageScreen)(!0), c = e, (0, i.transitionToChannel)(c.id), t !== e.id && O) {
            ;
            f = e, d = a.default.getId(), _ = u.default.isModerator(d, f.id), h = s.default.isLive(f.id), _ && !h ? I(f) : _ && h && function(e) {
                (0, o.openModalLazy)(E(function() {
                    var t;
                    return y(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("40874"), n.e("87321"), n.e("11261")]).then(n.bind(n, "620818"))];
                            case 1:
                                return t = o.sent().default, [2, function(n) {
                                    return r.createElement(t, m(p({}, n), {
                                        channel: e
                                    }))
                                }]
                        }
                    })
                }))
            }(f)
        }
    }

    function A(e, t) {
        return (0, o.openModalLazy)(E(function() {
            var o;
            return y(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, n.e("75831").then(n.bind(n, "310797"))];
                    case 1:
                        return o = i.sent().default, [2, function(n) {
                            return r.createElement(o, p({
                                channel: e,
                                onConfirm: t
                            }, n))
                        }]
                }
            })
        })), !0
    }
}