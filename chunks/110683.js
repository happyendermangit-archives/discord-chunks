function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("392711"),
        a = n.n(i),
        u = n("784184"),
        s = n("651820"),
        l = n("443458"),
        c = n("29570"),
        f = n("534965"),
        d = n("776982"),
        _ = n("208454"),
        E = n("861272"),
        p = n("118891"),
        m = n("281767"),
        y = n("941504");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

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
        switch (e) {
            case m.ChannelTextAreaIntegrations.GIF.title:
            case m.ChannelTextAreaIntegrations.TENOR.title:
                return y.default.Messages.COMMAND_GIPHY_DESCRIPTION;
            default:
                return ""
        }
    }
    var T = ((function(e) {
        if (Array.isArray(e)) return I(e)
    })(r = a()(m.ChannelTextAreaIntegrations).values().map(function(e) {
        return {
            id: e.commandId,
            name: e.command,
            displayName: e.command,
            type: c.ApplicationCommandType.CHAT,
            inputType: E.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
            applicationId: p.BuiltInSectionId.BUILT_IN,
            get description() {
                return O(e.title)
            },
            get displayDescription() {
                return O(e.title)
            },
            options: e.type === m.ChannelTextAreaIntegrationTypes.GIF ? [{
                name: "query",
                displayName: "query",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return y.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                },
                get displayDescription() {
                    return y.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                },
                required: !0
            }] : [],
            integrationType: e.type,
            integrationTitle: e.title
        }
    }).value()) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(r) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
        }
    }(r) || function() {
        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()).concat([{
        id: "-15",
        name: "leave",
        displayName: "leave",
        type: c.ApplicationCommandType.CHAT,
        inputType: E.ApplicationCommandInputType.BUILT_IN,
        applicationId: p.BuiltInSectionId.BUILT_IN,
        get description() {
            return y.default.Messages.LEAVE_GROUP_DM
        },
        get displayDescription() {
            return y.default.Messages.LEAVE_GROUP_DM
        },
        options: [{
            name: "silent",
            displayName: "silent",
            type: c.ApplicationCommandOptionType.BOOLEAN,
            get description() {
                return y.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
            },
            get displayDescription() {
                return y.default.Messages.LEAVE_GROUP_DM_SILENTLY
            },
            required: !1
        }],
        predicate: function(e) {
            return e.channel.isGroupDM()
        },
        execute: function(e, t) {
            var n, r, i = t.channel,
                a = function() {
                    return I.apply(this, arguments)
                },
                c = (0, f.computeChannelName)(i, _.default, d.default),
                E = y.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                    name: c
                }),
                p = y.default.Messages.LEAVE_GROUP_DM_BODY.format({
                    name: c
                }),
                m = null !== (r = null === (n = e.find(function(e) {
                    return "silent" === e.name
                })) || void 0 === n ? void 0 : n.value) && void 0 !== r && r;

            function I() {
                var e;
                return e = function() {
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
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), [4, s.default.closePrivateChannel(i.id, void 0, m)];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                return e.sent(), l.default.sendBotMessage(i.id, y.default.Messages.LEAVE_GROUP_DM_ERROR), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                }, (I = function() {
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
                }).apply(this, arguments)
            }
            i.isManaged() && (E = y.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name: c
            }), p = y.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name: c
            })), (0, u.openModal)(function(e) {
                return o.createElement(u.ConfirmModal, function(e) {
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
                    header: E,
                    confirmText: y.default.Messages.LEAVE_GROUP_DM,
                    cancelText: y.default.Messages.CANCEL,
                    onConfirm: a
                }, e), o.createElement(u.Text, {
                    variant: "text-md/normal"
                }, p))
            })
        }
    }]);
    t.default = T
}