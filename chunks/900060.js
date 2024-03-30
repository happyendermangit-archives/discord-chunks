function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractionStatusViewState: function() {
            return a
        },
        canRetryInteractionData: function() {
            return R
        },
        executeMessageComponentInteraction: function() {
            return v
        },
        executePrimaryEntryPointInteraction: function() {
            return g
        },
        getInteractionStatusViewState: function() {
            return N
        },
        getInteractionTimeoutTimestamp: function() {
            return S
        },
        handleInteractionResponse: function() {
            return b
        }
    });
    var r, o, i, a, u = n("967888"),
        s = n("629815"),
        l = n("443458"),
        c = n("29570"),
        f = n("741471"),
        d = n("217014"),
        _ = n("523018"),
        E = n("657334"),
        p = n("644896"),
        m = n("142642"),
        y = n("10439"),
        I = n("281767");

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function T(e, t) {
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

    function S(e) {
        return null == e || "" === e || Number.isNaN(e) ? Date.now() : _.default.extractTimestamp(e) + 9e5
    }
    var v = (r = O(function(e) {
        var t, n, r, o, i, a, s, l, m, y, h;
        return T(this, function(O) {
            switch (O.label) {
                case 0:
                    if (t = e.componentType, n = e.messageId, r = e.messageFlags, o = e.customId, i = e.indices, a = e.applicationId, s = e.channelId, l = e.guildId, m = e.localState, y = _.default.fromTimestamp(Date.now()), !p.default.canQueueInteraction(n, y)) return [2];
                    return [4, f.default.unarchiveThreadIfNecessary(s)];
                case 1:
                    return O.sent(), (0, E.addQueued)(y, {
                        messageId: n,
                        data: {
                            interactionType: c.InteractionTypes.MESSAGE_COMPONENT,
                            customId: o,
                            indices: i
                        },
                        onFailure: function(e, t) {
                            return A(s, e, t)
                        }
                    }), null != m && (0, E.queueInteractionComponentState)(n, y, m, i), h = {
                        type: c.InteractionTypes.MESSAGE_COMPONENT,
                        nonce: y,
                        guild_id: l,
                        channel_id: s,
                        message_flags: r,
                        message_id: n,
                        application_id: a,
                        session_id: d.default.getSessionId(),
                        data: function(e) {
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
                            component_type: t,
                            custom_id: o
                        }, function(e) {
                            if (null == e) return null;
                            if (e.type === c.ComponentType.STRING_SELECT || e.type === c.ComponentType.INPUT_TEXT) return e;
                            var t = e.selectedOptions.map(function(e) {
                                return e.value
                            });
                            return {
                                type: e.type,
                                values: t
                            }
                        }(m))
                    }, [4, u.HTTP.post({
                        url: I.Endpoints.INTERACTIONS,
                        body: h,
                        timeout: 3e3
                    }, function(e) {
                        b(y, s, l, e)
                    })];
                case 2:
                    return O.sent(), [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    var g = (o = O(function(e) {
            var t, n, r, o, i;
            return T(this, function(a) {
                switch (a.label) {
                    case 0:
                        return t = e.applicationId, n = e.channelId, r = e.guildId, o = _.default.fromTimestamp(Date.now()), i = {
                            type: c.InteractionTypes.APPLICATION_COMMAND,
                            nonce: o,
                            guild_id: r,
                            channel_id: n,
                            application_id: t,
                            session_id: d.default.getSessionId(),
                            data: {
                                type: c.ApplicationCommandType.PRIMARY_ENTRY_POINT
                            }
                        }, [4, u.HTTP.post({
                            url: I.Endpoints.INTERACTIONS,
                            body: i,
                            timeout: 3e3
                        }, function(e) {
                            b(o, n, null != r ? r : null, e)
                        })];
                    case 1:
                        return a.sent(), [2]
                }
            })
        }), function(e) {
            return o.apply(this, arguments)
        }),
        A = function(e, t, n) {
            null == n && null != t && l.default.sendClydeError(e, t)
        },
        b = function(e, t, n, r) {
            if (!r.ok) {
                if (!r.hasErr) {
                    if (r.status >= 400 && r.status < 500 && r.body) {
                        if (r.body.code === I.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                            var o, i = (0, y.getFirstSkemaError)(r.body.errors);
                            null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && s.default.dispatch({
                                type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                channelId: t,
                                guildId: n
                            }), (0, E.setFailed)(e, void 0, null == i ? void 0 : i.message);
                            return
                        }(0, E.setFailed)(e, void 0, r.body.message);
                        return
                    }(0, E.setFailed)(e, null === (o = r.body) || void 0 === o ? void 0 : o.code);
                    return
                }(0, E.setFailed)(e)
            }
        };
    (i = a || (a = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT", i[i.EPHEMERAL_SUCCESS = 4] = "EPHEMERAL_SUCCESS";
    var N = function(e, t) {
        var n, r = null == t ? void 0 : t.state,
            o = e.state === I.MessageStates.SENT && S(e.id) < Date.now();
        var i = e.state === I.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : _.default.extractTimestamp(n) + 3e3) < Date.now(),
            a = (null == t ? void 0 : t.data.interactionType) === c.InteractionTypes.APPLICATION_COMMAND,
            u = e.isCommandType();
        if (a && r === m.InteractionState.QUEUED || u && e.state === I.MessageStates.SENDING && null != t) return 0;
        if (a && r === m.InteractionState.CREATED || e.hasFlag(I.MessageFlags.LOADING) && !o) return 1;
        if (null != e.interaction && e.hasFlag(I.MessageFlags.LOADING) && o) return 3;
        else if (null != e.interaction && !e.hasFlag(I.MessageFlags.LOADING) && i) return 3;
        else if (u && e.state === I.MessageStates.SEND_FAILED) return 2;
        else if (null != e.interaction && e.hasFlag(I.MessageFlags.EPHEMERAL)) return 4
    };

    function R(e) {
        for (var t = e.options;
            (null == t ? void 0 : t.length) === 1 && (t[0].type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === c.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = (null != t ? t : [])[Symbol.iterator](); !(n = (i = a.next()).done); n = !0)
                if (i.value.type === c.ApplicationCommandOptionType.ATTACHMENT) return !1
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return !0
    }
}