function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("784184"),
        i = n("585949"),
        a = n("254061"),
        u = n("163291"),
        s = n("956774"),
        l = n("741471"),
        c = n("217014"),
        f = n("894288"),
        d = n("665863"),
        _ = n("679509"),
        E = n("281767");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
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
    t.default = {
        handleVoiceConnect: function(e) {
            var t = e.channel,
                p = e.connected,
                I = e.needSubscriptionToAccess,
                h = e.locked,
                O = void 0 !== h && h,
                T = e.routeDirectlyToChannel,
                S = void 0 !== T && T,
                v = e.bypassChangeModal,
                g = e.bypassGuildIdCheck,
                A = void 0 !== g && g;
            return m(function() {
                var e, h, T, g;
                return y(this, function(b) {
                    switch (b.label) {
                        case 0:
                            if (e = this, !t.isThread()) return [3, 3];
                            return [4, l.default.unarchiveThreadIfNecessary(t.id)];
                        case 1:
                            if (b.sent(), s.default.hasJoined(t.id)) return [3, 3];
                            return [4, l.default.joinThread(t, "Join Voice")];
                        case 2:
                            b.sent(), b.label = 3;
                        case 3:
                            if (h = a.default.getRemoteSessionId(), g = (null == (T = d.default.getVoiceStateForSession(c.default.getId(), h)) ? void 0 : T.channelId) === t.id || f.default.getChannelId() === d.default.getCurrentClientVoiceChannelId(t.guild_id), !v && !O && (0, _.shouldShowVoiceChannelChangeConfirmation)(t)) return [2, new Promise(function(i) {
                                var a = e;
                                (0, o.openModalLazy)(m(function() {
                                    var e;
                                    return y(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, n.e("75831").then(n.bind(n, "310797"))];
                                            case 1:
                                                return e = o.sent().default, [2, function(n) {
                                                    return r.createElement(e, function(e) {
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
                                                        channel: t,
                                                        onConfirm: function() {
                                                            return i(a.handleVoiceConnect({
                                                                channel: t,
                                                                connected: p,
                                                                needSubscriptionToAccess: I,
                                                                routeDirectlyToChannel: S,
                                                                locked: O,
                                                                bypassChangeModal: !0
                                                            }))
                                                        }
                                                    }, n))
                                                }]
                                        }
                                    })
                                }))
                            })];
                            return !O && !p && i.default.selectVoiceChannel(t.id), !__OVERLAY__ && (p || g || I || S) && ! function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = e.getGuildId();
                                if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                                (0, u.transitionTo)(E.Routes.CHANNEL(n, e.id))
                            }(t, A), [2, !0]
                    }
                })
            }).apply(this)
        }
    }
}