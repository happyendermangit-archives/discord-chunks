function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        forcePrompt: function() {
            return m
        },
        initiateChannelPrompts: function() {
            return p
        },
        sendGamingStatsMessage: function() {
            return y
        },
        updateGamingStats: function() {
            return h
        }
    });
    var r = n("967888"),
        o = n("771382"),
        i = n("443458"),
        a = n("30730"),
        u = n("935741"),
        s = n("309944"),
        l = n("204394"),
        c = n("120447"),
        f = n("281767");

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
        return function() {
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
        }
    }

    function E(e, t) {
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

    function p(e) {
        r.HTTP.post({
            url: f.Endpoints.INITIATE_CHANNEL_PROMPTS,
            body: {
                guild_ids: e
            }
        })
    }

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
        r.HTTP.post({
            url: f.Endpoints.FORCE_SEND_PROMPT(e),
            body: {
                prompt_type: t
            }
        })
    }

    function y(e, t, n) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = _(function(e, t, n) {
            return E(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, r.HTTP.post({
                            url: f.Endpoints.SEND_GAMING_STATS(t),
                            body: {
                                message_reference: {
                                    guild_id: e,
                                    channel_id: t,
                                    message_id: n
                                }
                            }
                        })];
                    case 1:
                        return o.sent(), T(t), [2]
                }
            })
        })).apply(this, arguments)
    }

    function h(e) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = _(function(e) {
            var t, n;
            return E(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, r.HTTP.patch({
                            url: f.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                        })];
                    case 1:
                        return null != (t = i.sent()).text && "" !== t.text && (null != (n = u.default.getChannel(e.channel_id)) && ((0, a.createPendingReply)({
                            channel: n,
                            message: e,
                            shouldMention: !1,
                            showMentionToggle: !1
                        }), T(n.id)), o.default.saveDraft(e.channel_id, t.text, s.DraftType.ChannelMessage)), [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        l.default.getMessages(e).hasMoreAfter ? i.default.jumpToPresent(e, f.MAX_MESSAGES_PER_CHANNEL) : c.ComponentDispatch.dispatch(f.ComponentActions.SCROLLTO_PRESENT)
    }
}