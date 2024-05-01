function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BUILT_IN_SECTIONS: function() {
            return y
        },
        getBuiltInCommands: function() {
            return G
        }
    }), n("47120"), n("411104");
    var i = n("512722"),
        r = n.n(i),
        a = n("913527"),
        s = n.n(a),
        o = n("106351"),
        l = n("969812"),
        u = n("493683"),
        d = n("749210"),
        _ = n("904245"),
        c = n("911969"),
        E = n("386696"),
        I = n("957730"),
        T = n("968437"),
        f = n("928477"),
        S = n("665906"),
        h = n("695346"),
        A = n("592125"),
        m = n("496675"),
        N = n("594174"),
        p = n("70956"),
        O = n("51144"),
        R = n("895924"),
        C = n("689079"),
        g = n("981631"),
        L = n("590433"),
        v = n("689938");
    let D = n("227419").default,
        M = (e, t) => {
            var n;
            return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
        },
        y = {
            [C.BuiltInSectionId.BUILT_IN]: {
                id: C.BuiltInSectionId.BUILT_IN,
                type: R.ApplicationCommandSectionType.BUILT_IN,
                get name() {
                    return v.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                }
            },
            [C.BuiltInSectionId.FRECENCY]: {
                id: C.BuiltInSectionId.FRECENCY,
                type: R.ApplicationCommandSectionType.BUILT_IN,
                get name() {
                    return v.default.Messages.FREQUENTLY_USED
                }
            }
        },
        P = [...D, {
            id: "-1",
            name: "shrug",
            displayName: "shrug",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                }
            }
        }, {
            id: "-2",
            name: "tableflip",
            displayName: "tableflip",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                }
            }
        }, {
            id: "-3",
            name: "unflip",
            displayName: "unflip",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                }
            }
        }, {
            id: "-4",
            name: "tts",
            displayName: "tts",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TTS_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            predicate: e => {
                let {
                    channel: t
                } = e;
                return !t.isPrivate() && h.EnableTTSCommand.getSetting() && m.default.can(g.Permissions.SEND_TTS_MESSAGES, t)
            },
            execute: e => {
                var t;
                return {
                    content: null !== (t = M(e, "message")) && void 0 !== t ? t : "",
                    tts: !0
                }
            }
        }, {
            id: "-5",
            name: "me",
            displayName: "me",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_ME_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_ME_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_ME_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            execute: e => {
                var t;
                let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "_".concat(n, "_")
                }
            }
        }, {
            id: "-6",
            name: "spoiler",
            displayName: "spoiler",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_SPOILER_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            execute: e => {
                var t;
                let n = null !== (t = M(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: (0, g.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                }
            }
        }, {
            id: "-7",
            name: "nick",
            displayName: "nick",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            options: [{
                name: "new_nick",
                displayName: "new_nick",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_NICK_NEWNICK_DESCRIPTION
                }
            }],
            predicate: e => {
                let {
                    channel: t
                } = e;
                return !t.isPrivate() && (m.default.can(g.Permissions.CHANGE_NICKNAME, t) || m.default.can(g.Permissions.MANAGE_NICKNAMES, t))
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: r
                } = t;
                if (null == i) return;
                let a = null !== (n = M(e, "new_nick")) && void 0 !== n ? n : "";
                l.default.changeNickname(i.id, r.id, g.ME, a || "")
            }
        }, {
            id: "-10",
            name: "thread",
            displayName: "thread",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            options: [{
                name: "name",
                displayName: "name",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_THREAD_NAME_DESCRIPTION
                },
                required: !0
            }, {
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_THREAD_MESSAGE_DESCRIPTION
                },
                required: !0
            }],
            predicate: e => {
                let {
                    channel: t
                } = e;
                return (0, S.computeCanStartPublicThread)(t)
            },
            execute: async (e, t) => {
                var n, i;
                let {
                    channel: r
                } = t, a = null !== (n = M(e, "name")) && void 0 !== n ? n : "", s = null !== (i = M(e, "message")) && void 0 !== i ? i : "", l = await (0, f.createThread)(r, a, o.ChannelTypes.PUBLIC_THREAD, (0, T.getAutoArchiveDuration)(r, null), "Slash Command");
                _.default.sendMessage(l.id, I.default.parse(l, s))
            }
        }, {
            id: "-11",
            name: "kick",
            displayName: "kick",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: c.ApplicationCommandOptionType.USER,
                get description() {
                    return v.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_KICK_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "reason",
                displayName: "reason",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_KICK_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: e => {
                let {
                    guild: t
                } = e;
                return m.default.can(g.Permissions.KICK_MEMBERS, t)
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: r
                } = t;
                if (null == i) return;
                let a = null !== (n = M(e, "user")) && void 0 !== n ? n : "";
                if (!m.default.canManageUser(g.Permissions.KICK_MEMBERS, a, i)) {
                    _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_KICK_UNABLE);
                    return
                }(async () => {
                    var t;
                    let n = N.default.getUser(a);
                    if (null == n) throw Error();
                    await d.default.kickUser(i.id, a, null !== (t = M(e, "reason")) && void 0 !== t ? t : ""), _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                        user: O.default.getUserTag(n)
                    }))
                })().catch(() => {
                    _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_KICK_ERROR)
                })
            }
        }, {
            id: "-12",
            name: "ban",
            displayName: "ban",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: c.ApplicationCommandOptionType.USER,
                get description() {
                    return v.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_BAN_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "delete_messages",
                displayName: "delete_messages",
                type: c.ApplicationCommandOptionType.INTEGER,
                get description() {
                    return v.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_BAN_DELETE_MESSAGES_DESCRIPTION
                },
                required: !0,
                get choices() {
                    return [{
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE,
                        value: 0
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR,
                        value: p.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        value: 6 * p.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        value: 12 * p.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        value: p.default.Seconds.DAY
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        value: 3 * p.default.Seconds.DAY
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        value: 7 * p.default.Seconds.DAY
                    }]
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_BAN_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: e => {
                let {
                    guild: t
                } = e;
                return m.default.can(g.Permissions.BAN_MEMBERS, t)
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: r
                } = t;
                if (null == i) return;
                let a = null !== (n = M(e, "user")) && void 0 !== n ? n : "";
                if (!m.default.canManageUser(g.Permissions.BAN_MEMBERS, a, i)) {
                    _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_BAN_UNABLE);
                    return
                }(async () => {
                    var t, n;
                    if ("" === a) throw Error();
                    let s = null !== (t = M(e, "delete_messages")) && void 0 !== t ? t : 0,
                        o = null !== (n = M(e, "reason")) && void 0 !== n ? n : "",
                        l = N.default.getUser(a);
                    await d.default.banUser(i.id, a, s, o), _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                        user: null != l ? O.default.getUserTag(l) : a
                    }))
                })().catch(() => {
                    _.default.sendBotMessage(r.id, v.default.Messages.COMMAND_BAN_ERROR)
                })
            }
        }, {
            id: "-13",
            name: "timeout",
            displayName: "timeout",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: c.ApplicationCommandOptionType.USER,
                get description() {
                    return v.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TIMEOUT_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "duration",
                displayName: "duration",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                required: !0,
                get choices() {
                    return (0, L.getDisableCommunicationDurationOptions)().map(e => ({
                        ...e,
                        name: e.label,
                        displayName: e.label
                    }))
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TIMEOUT_REASON_DESCRIPTION
                },
                required: !1
            }],
            predicate: e => {
                let {
                    guild: t
                } = e;
                return m.default.can(g.Permissions.MODERATE_MEMBERS, t)
            },
            execute: (e, t) => {
                let {
                    guild: n,
                    channel: i
                } = t;
                if (null == n) return;
                let r = M(e, "user");
                if (!(0, E.canToggleCommunicationDisableOnUser)(n.id, r)) {
                    _.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_UNABLE);
                    return
                }(async () => {
                    var t, a;
                    let o = null !== (t = M(e, "duration")) && void 0 !== t ? t : "",
                        l = null !== (a = M(e, "reason")) && void 0 !== a ? a : "",
                        u = N.default.getUser(r);
                    if (null == u) throw Error();
                    await d.default.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: r,
                        communicationDisabledUntilTimestamp: s()().add(o, "s").toISOString(),
                        duration: o,
                        reason: l
                    }), _.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                        user: O.default.getUserTag(u),
                        duration: o
                    }))
                })().catch(() => {
                    _.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_ERROR)
                })
            }
        }, {
            id: "-14",
            name: "msg",
            displayName: "msg",
            type: c.ApplicationCommandType.CHAT,
            inputType: R.ApplicationCommandInputType.BUILT_IN,
            applicationId: C.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: c.ApplicationCommandOptionType.USER,
                get description() {
                    return v.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_MSG_USER_DESCRIPTION
                },
                required: !0
            }, {
                name: "message",
                displayName: "message",
                type: c.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                required: !0,
                get maxLength() {
                    var U;
                    return (null === (U = N.default.getCurrentUser()) || void 0 === U ? void 0 : U.premiumType) ? g.MAX_MESSAGE_LENGTH_PREMIUM : g.MAX_MESSAGE_LENGTH
                }
            }],
            execute: (e, t) => {
                var n;
                let {
                    channel: i
                } = t, a = M(e, "user"), s = null !== (n = M(e, "message")) && void 0 !== n ? n : "";
                (async () => {
                    await u.default.openPrivateChannel(a).then(e => {
                        let t = A.default.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"), _.default.sendMessage(t.id, I.default.parse(t, s))
                    })
                })().catch(() => {
                    _.default.sendBotMessage(i.id, v.default.Messages.COMMAND_MSG_ERROR)
                })
            }
        }],
        b = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
        G = (e, t, n) => {
            let i = t ? P : b;
            return i = i.filter(t => t.type === e && (!n || t.inputType === R.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
        }
}