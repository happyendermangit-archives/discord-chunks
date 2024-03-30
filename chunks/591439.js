function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BUILT_IN_SECTIONS: function() {
            return j
        },
        getBuiltInCommands: function() {
            return x
        }
    });
    var r, o, i, a = n("512722"),
        u = n.n(a),
        s = n("913527"),
        l = n.n(s),
        c = n("317955"),
        f = n("543705"),
        d = n("651820"),
        _ = n("322997"),
        E = n("443458"),
        p = n("29570"),
        m = n("991874"),
        y = n("261535"),
        I = n("839317"),
        h = n("692764"),
        O = n("838726"),
        T = n("53867"),
        S = n("935741"),
        v = n("29884"),
        g = n("208454"),
        A = n("388990"),
        b = n("830567"),
        N = n("861272"),
        R = n("118891"),
        C = n("281767"),
        P = n("312684"),
        D = n("941504");

    function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function M(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function U(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    M(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    M(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function k(e, t) {
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
    var G = n("110683").default,
        B = function(e, t) {
            var n;
            return null === (n = e.find(function(e) {
                return e.name === t
            })) || void 0 === n ? void 0 : n.value
        },
        j = (w(i = {}, R.BuiltInSectionId.BUILT_IN, {
            id: R.BuiltInSectionId.BUILT_IN,
            type: N.ApplicationCommandSectionType.BUILT_IN,
            get name() {
                return D.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
            }
        }), w(i, R.BuiltInSectionId.FRECENCY, {
            id: R.BuiltInSectionId.FRECENCY,
            type: N.ApplicationCommandSectionType.BUILT_IN,
            get name() {
                return D.default.Messages.FREQUENTLY_USED
            }
        }), i);
    var F = ((function(e) {
            if (Array.isArray(e)) return L(e)
        })(r = G) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(r) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return L(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
            }
        }(r) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()).concat([{
            id: "-1",
            name: "shrug",
            displayName: "shrug",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                }
            }],
            execute: function(e) {
                var t, n = null !== (t = B(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                }
            }
        }, {
            id: "-2",
            name: "tableflip",
            displayName: "tableflip",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: function(e) {
                var t, n = null !== (t = B(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                }
            }
        }, {
            id: "-3",
            name: "unflip",
            displayName: "unflip",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: function(e) {
                var t, n = null !== (t = B(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                }
            }
        }, {
            id: "-4",
            name: "tts",
            displayName: "tts",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            predicate: function(e) {
                var t = e.channel;
                return !t.isPrivate() && T.EnableTTSCommand.getSetting() && v.default.can(C.Permissions.SEND_TTS_MESSAGES, t)
            },
            execute: function(e) {
                var t;
                return {
                    content: null !== (t = B(e, "message")) && void 0 !== t ? t : "",
                    tts: !0
                }
            }
        }, {
            id: "-5",
            name: "me",
            displayName: "me",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_ME_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_ME_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            execute: function(e) {
                var t, n = null !== (t = B(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "_".concat(n, "_")
                }
            }
        }, {
            id: "-6",
            name: "spoiler",
            displayName: "spoiler",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            execute: function(e) {
                var t, n = null !== (t = B(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: (0, C.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                }
            }
        }, {
            id: "-7",
            name: "nick",
            displayName: "nick",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            options: [{
                name: "new_nick",
                displayName: "new_nick",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                }
            }],
            predicate: function(e) {
                var t = e.channel;
                return !t.isPrivate() && (v.default.can(C.Permissions.CHANGE_NICKNAME, t) || v.default.can(C.Permissions.MANAGE_NICKNAMES, t))
            },
            execute: function(e, t) {
                var n, r = t.guild,
                    o = t.channel;
                if (null != r) {
                    var i = null !== (n = B(e, "new_nick")) && void 0 !== n ? n : "";
                    f.default.changeNickname(r.id, o.id, C.ME, i || "")
                }
            }
        }, {
            id: "-10",
            name: "thread",
            displayName: "thread",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            options: [{
                name: "name",
                displayName: "name",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                },
                required: !0
            }, {
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            predicate: function(e) {
                var t = e.channel;
                return (0, O.computeCanStartPublicThread)(t)
            },
            execute: (o = U(function(e, t) {
                var n, r, o, i, a, u;
                return k(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return n = t.channel, o = null !== (r = B(e, "name")) && void 0 !== r ? r : "", a = null !== (i = B(e, "message")) && void 0 !== i ? i : "", [4, (0, h.createThread)(n, o, c.ChannelTypes.PUBLIC_THREAD, (0, I.getAutoArchiveDuration)(n, null), "Slash Command")];
                        case 1:
                            return u = s.sent(), E.default.sendMessage(u.id, y.default.parse(u, a)), [2]
                    }
                })
            }), function(e, t) {
                return o.apply(this, arguments)
            })
        }, {
            id: "-11",
            name: "kick",
            displayName: "kick",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
                get description() {
                    return D.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "reason",
                displayName: "reason",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: function(e) {
                var t = e.guild;
                return v.default.can(C.Permissions.KICK_MEMBERS, t)
            },
            execute: function(e, t) {
                var n, r = t.guild,
                    o = t.channel;
                if (null != r) {
                    var i, a = null !== (n = B(e, "user")) && void 0 !== n ? n : "";
                    if (!v.default.canManageUser(C.Permissions.KICK_MEMBERS, a, r)) {
                        E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_KICK_UNABLE);
                        return
                    }(i = U(function() {
                        var t, n;
                        return k(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (null == (t = g.default.getUser(a))) throw Error();
                                    return [4, _.default.kickUser(r.id, a, null !== (n = B(e, "reason")) && void 0 !== n ? n : "")];
                                case 1:
                                    return i.sent(), E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                                        user: b.default.getUserTag(t)
                                    })), [2]
                            }
                        })
                    }), function() {
                        return i.apply(this, arguments)
                    })().catch(function() {
                        E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_KICK_ERROR)
                    })
                }
            }
        }, {
            id: "-12",
            name: "ban",
            displayName: "ban",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
                get description() {
                    return D.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "delete_messages",
                displayName: "delete_messages",
                type: p.ApplicationCommandOptionType.INTEGER,
                get description() {
                    return D.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                },
                required: !0,
                get choices() {
                    return [{
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                        value: 0
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                        value: A.default.Seconds.HOUR
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        value: 6 * A.default.Seconds.HOUR
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        value: 12 * A.default.Seconds.HOUR
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        value: A.default.Seconds.DAY
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        value: 3 * A.default.Seconds.DAY
                    }, {
                        name: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        displayName: D.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        value: 7 * A.default.Seconds.DAY
                    }]
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: function(e) {
                var t = e.guild;
                return v.default.can(C.Permissions.BAN_MEMBERS, t)
            },
            execute: function(e, t) {
                var n, r = t.guild,
                    o = t.channel;
                if (null != r) {
                    var i, a = null !== (n = B(e, "user")) && void 0 !== n ? n : "";
                    if (!v.default.canManageUser(C.Permissions.BAN_MEMBERS, a, r)) {
                        E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_BAN_UNABLE);
                        return
                    }(i = U(function() {
                        var t, n, i, u, s;
                        return k(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if ("" === a) throw Error();
                                    return n = null !== (t = B(e, "delete_messages")) && void 0 !== t ? t : 0, u = null !== (i = B(e, "reason")) && void 0 !== i ? i : "", s = g.default.getUser(a), [4, _.default.banUser(r.id, a, n, u)];
                                case 1:
                                    return l.sent(), E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                                        user: null != s ? b.default.getUserTag(s) : a
                                    })), [2]
                            }
                        })
                    }), function() {
                        return i.apply(this, arguments)
                    })().catch(function() {
                        E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_BAN_ERROR)
                    })
                }
            }
        }, {
            id: "-13",
            name: "timeout",
            displayName: "timeout",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
                get description() {
                    return D.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "duration",
                displayName: "duration",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                required: !0,
                get choices() {
                    return (0, P.getDisableCommunicationDurationOptions)().map(function(e) {
                        var t, n;
                        return t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    w(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e), n = (n = {
                            name: e.label,
                            displayName: e.label
                        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t
                    })
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: function(e) {
                var t = e.guild;
                return v.default.can(C.Permissions.MODERATE_MEMBERS, t)
            },
            execute: function(e, t) {
                var n = t.guild,
                    r = t.channel;
                if (null != n) {
                    var o, i = B(e, "user");
                    if (!(0, m.canToggleCommunicationDisableOnUser)(n.id, i)) {
                        E.default.sendBotMessage(r.id, D.default.Messages.COMMAND_TIMEOUT_UNABLE);
                        return
                    }(o = U(function() {
                        var t, o, a, u, s;
                        return k(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (o = null !== (t = B(e, "duration")) && void 0 !== t ? t : "", u = null !== (a = B(e, "reason")) && void 0 !== a ? a : "", null == (s = g.default.getUser(i))) throw Error();
                                    return [4, _.default.setCommunicationDisabledUntil({
                                        guildId: n.id,
                                        userId: i,
                                        communicationDisabledUntilTimestamp: l()().add(o, "s").toISOString(),
                                        duration: o,
                                        reason: u
                                    })];
                                case 1:
                                    return c.sent(), E.default.sendBotMessage(r.id, D.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                                        user: b.default.getUserTag(s),
                                        duration: o
                                    })), [2]
                            }
                        })
                    }), function() {
                        return o.apply(this, arguments)
                    })().catch(function() {
                        E.default.sendBotMessage(r.id, D.default.Messages.COMMAND_TIMEOUT_ERROR)
                    })
                }
            }
        }, {
            id: "-14",
            name: "msg",
            displayName: "msg",
            type: p.ApplicationCommandType.CHAT,
            inputType: N.ApplicationCommandInputType.BUILT_IN,
            applicationId: R.BuiltInSectionId.BUILT_IN,
            get description() {
                return D.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            get displayDescription() {
                return D.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
                get description() {
                    return D.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return D.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return D.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                required: !0,
                get maxLength() {
                    var V;
                    return (null === (V = g.default.getCurrentUser()) || void 0 === V ? void 0 : V.premiumType) ? C.MAX_MESSAGE_LENGTH_PREMIUM : C.MAX_MESSAGE_LENGTH
                }
            }],
            execute: function(e, t) {
                var n, r, o = t.channel,
                    i = B(e, "user"),
                    a = null !== (r = B(e, "message")) && void 0 !== r ? r : "";
                (n = U(function() {
                    return k(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, d.default.openPrivateChannel(i).then(function(e) {
                                    var t = S.default.getChannel(e);
                                    u()(null != t, "Newly created PrivateChannel is null"), E.default.sendMessage(t.id, y.default.parse(t, a))
                                })];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                }), function() {
                    return n.apply(this, arguments)
                })().catch(function() {
                    E.default.sendBotMessage(o.id, D.default.Messages.COMMAND_MSG_ERROR)
                })
            }
        }]),
        H = F.filter(function(e) {
            return ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)
        }),
        x = function(e, t, n) {
            var r = t ? F : H;
            return r = r.filter(function(t) {
                return t.type === e && (!n || t.inputType === N.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === N.ApplicationCommandInputType.BUILT_IN_INTEGRATION)
            })
        }
}