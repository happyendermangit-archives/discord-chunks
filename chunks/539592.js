function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        selectVoiceChannelAdditional: function() {
            return h
        }
    });
    var r = n("67381"),
        o = n("629815"),
        i = n("654417"),
        a = n("15446"),
        u = n("673270"),
        s = n("928064"),
        l = n("891467"),
        c = n("935741"),
        f = n("306912"),
        d = n("267322"),
        _ = n("894288"),
        E = n("665863"),
        p = n("115752");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function I(e, t) {
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
    var h = function(e, t) {
        var m = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            O = c.default.getChannel(e),
            T = E.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
            S = null != O ? d.default.getCheck(O.guild_id) : null;
        if (!(null != t && (0, i.shouldShowMembershipVerificationGate)(t))) {
            if (null == S || S.canChat || (0, a.canLurkerListen)(O)) {
                if (null != O && !T) {
                    var v = (0, p.isChannelFull)(O, E.default, f.default);
                    if (v && O.isGuildStageVoice() && (0, u.getStageHasMedia)(O.id)) {
                        (0, r.openModalLazy)(y(function() {
                            var e;
                            return I(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("47795")]).then(n.bind(n, "143781"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            return e(function(e) {
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
                                                channel: O
                                            }, t))
                                        }]
                                }
                            })
                        }));
                        return
                    }
                    if (v) {
                        (0, r.openModalLazy)(y(function() {
                            var e;
                            return I(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("30409")]).then(n.bind(n, "104038"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            return e(t)
                                        }]
                                }
                            })
                        }));
                        return
                    }
                }
                m && (0, s.applyInitialVideoBackgroundOption)(), (0, l.default)(function() {
                    o.default.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: _.default.getVoiceChannelId(),
                        video: m,
                        stream: h
                    })
                }, e, h, m)
            }
        }
    }
}