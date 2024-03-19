function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BUILT_IN_SECTIONS: function() {
            return L
        },
        getBuiltInCommands: function() {
            return B
        }
    }), n("222007"), n("70102");
    var i = n("627445"),
        l = n.n(i),
        a = n("866227"),
        o = n.n(a),
        s = n("298386"),
        r = n("223468"),
        u = n("450911"),
        d = n("851387"),
        c = n("819689"),
        p = n("798609"),
        f = n("700179"),
        m = n("884351"),
        _ = n("252862"),
        I = n("730498"),
        T = n("300322"),
        A = n("845579"),
        E = n("42203"),
        C = n("957255"),
        N = n("697218"),
        g = n("718517"),
        M = n("158998"),
        O = n("524768"),
        S = n("317041"),
        h = n("49111"),
        y = n("903639"),
        v = n("782340");
    let D = n("150692").default,
        R = (e, t) => {
            var n;
            return null === (n = e.find(e => e.name === t)) || void 0 === n ? void 0 : n.value
        },
        L = {
            [S.BuiltInSectionId.BUILT_IN]: {
                id: S.BuiltInSectionId.BUILT_IN,
                type: O.ApplicationCommandSectionType.BUILT_IN,
                get name() {
                    return v.default.Messages.COMMAND_SECTION_BUILT_IN_NAME
                }
            },
            [S.BuiltInSectionId.FRECENCY]: {
                id: S.BuiltInSectionId.FRECENCY,
                type: O.ApplicationCommandSectionType.BUILT_IN,
                get name() {
                    return v.default.Messages.FREQUENTLY_USED
                }
            }
        },
        P = [...D, {
            id: "-1",
            name: "shrug",
            displayName: "shrug",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_SHRUG_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_SHRUG_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim()
                }
            }
        }, {
            id: "-2",
            name: "tableflip",
            displayName: "tableflip",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TABLEFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TABLEFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim()
                }
            }
        }, {
            id: "-3",
            name: "unflip",
            displayName: "unflip",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TABLEUNFLIP_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TABLEUNFLIP_MESSAGE_DESCRIPTION
                }
            }],
            execute: e => {
                var t;
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim()
                }
            }
        }, {
            id: "-4",
            name: "tts",
            displayName: "tts",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TTS_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
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
                return !t.isPrivate() && A.EnableTTSCommand.getSetting() && C.default.can(h.Permissions.SEND_TTS_MESSAGES, t)
            },
            execute: e => {
                var t;
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: n,
                    tts: !0
                }
            }
        }, {
            id: "-5",
            name: "me",
            displayName: "me",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_ME_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_ME_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
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
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: "_".concat(n, "_")
                }
            }
        }, {
            id: "-6",
            name: "spoiler",
            displayName: "spoiler",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN_TEXT,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_SPOILER_DESCRIPTION
            },
            options: [{
                name: "message",
                displayName: "message",
                type: p.ApplicationCommandOptionType.STRING,
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
                let n = null !== (t = R(e, "message")) && void 0 !== t ? t : "";
                return {
                    content: (0, h.MARKDOWN_SPOILER_WRAPPER)(n).trim()
                }
            }
        }, {
            id: "-7",
            name: "nick",
            displayName: "nick",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_NICK_DESCRIPTION
            },
            options: [{
                name: "new_nick",
                displayName: "new_nick",
                type: p.ApplicationCommandOptionType.STRING,
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
                return !t.isPrivate() && (C.default.can(h.Permissions.CHANGE_NICKNAME, t) || C.default.can(h.Permissions.MANAGE_NICKNAMES, t))
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: l
                } = t;
                if (null == i) return;
                let a = null !== (n = R(e, "new_nick")) && void 0 !== n ? n : "";
                r.default.changeNickname(i.id, l.id, h.ME, a || "")
            }
        }, {
            id: "-10",
            name: "thread",
            displayName: "thread",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_THREAD_DESCRIPTION
            },
            options: [{
                name: "name",
                displayName: "name",
                type: p.ApplicationCommandOptionType.STRING,
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
                type: p.ApplicationCommandOptionType.STRING,
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
                return (0, T.computeCanStartPublicThread)(t)
            },
            execute: async (e, t) => {
                var n, i;
                let {
                    channel: l
                } = t, a = null !== (n = R(e, "name")) && void 0 !== n ? n : "", o = null !== (i = R(e, "message")) && void 0 !== i ? i : "", r = await (0, I.createThread)(l, a, s.ChannelTypes.PUBLIC_THREAD, (0, _.getAutoArchiveDuration)(l, null), "Slash Command");
                c.default.sendMessage(r.id, m.default.parse(r, o))
            }
        }, {
            id: "-11",
            name: "kick",
            displayName: "kick",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_KICK_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
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
                type: p.ApplicationCommandOptionType.STRING,
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
                return C.default.can(h.Permissions.KICK_MEMBERS, t)
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: l
                } = t;
                if (null == i) return;
                let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                if (!C.default.canManageUser(h.Permissions.KICK_MEMBERS, a, i)) {
                    c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_UNABLE);
                    return
                }
                let o = async () => {
                    var t;
                    let n = N.default.getUser(a);
                    if (null == n) throw Error();
                    await d.default.kickUser(i.id, a, null !== (t = R(e, "reason")) && void 0 !== t ? t : ""), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_CONFIRMATION.format({
                        user: M.default.getUserTag(n)
                    }))
                };
                o().catch(() => {
                    c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_KICK_ERROR)
                })
            }
        }, {
            id: "-12",
            name: "ban",
            displayName: "ban",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_BAN_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
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
                type: p.ApplicationCommandOptionType.INTEGER,
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
                        value: g.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR,
                        value: 6 * g.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR,
                        value: 12 * g.default.Seconds.HOUR
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR,
                        value: g.default.Seconds.DAY
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D,
                        value: 3 * g.default.Seconds.DAY
                    }, {
                        name: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        displayName: v.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D,
                        value: 7 * g.default.Seconds.DAY
                    }]
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: p.ApplicationCommandOptionType.STRING,
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
                return C.default.can(h.Permissions.BAN_MEMBERS, t)
            },
            execute: (e, t) => {
                var n;
                let {
                    guild: i,
                    channel: l
                } = t;
                if (null == i) return;
                let a = null !== (n = R(e, "user")) && void 0 !== n ? n : "";
                if (!C.default.canManageUser(h.Permissions.BAN_MEMBERS, a, i)) {
                    c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_UNABLE);
                    return
                }
                let o = async () => {
                    var t, n;
                    if ("" === a) throw Error();
                    let o = null !== (t = R(e, "delete_messages")) && void 0 !== t ? t : 0,
                        s = null !== (n = R(e, "reason")) && void 0 !== n ? n : "",
                        r = N.default.getUser(a);
                    await d.default.banUser(i.id, a, o, s), c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_CONFIRMATION.format({
                        user: null != r ? M.default.getUserTag(r) : a
                    }))
                };
                o().catch(() => {
                    c.default.sendBotMessage(l.id, v.default.Messages.COMMAND_BAN_ERROR)
                })
            }
        }, {
            id: "-13",
            name: "timeout",
            displayName: "timeout",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_TIMEOUT_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
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
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_TIMEOUT_DURATION_DESCRIPTION
                },
                required: !0,
                get choices() {
                    return (0, y.getDisableCommunicationDurationOptions)().map(e => ({
                        ...e,
                        name: e.label,
                        displayName: e.label
                    }))
                }
            }, {
                name: "reason",
                displayName: "reason",
                type: p.ApplicationCommandOptionType.STRING,
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
                return C.default.can(h.Permissions.MODERATE_MEMBERS, t)
            },
            execute: (e, t) => {
                let {
                    guild: n,
                    channel: i
                } = t;
                if (null == n) return;
                let l = R(e, "user");
                if (!(0, f.canToggleCommunicationDisableOnUser)(n.id, l)) {
                    c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_UNABLE);
                    return
                }
                let a = async () => {
                    var t, a;
                    let s = null !== (t = R(e, "duration")) && void 0 !== t ? t : "",
                        r = null !== (a = R(e, "reason")) && void 0 !== a ? a : "",
                        u = N.default.getUser(l);
                    if (null == u) throw Error();
                    await d.default.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: l,
                        communicationDisabledUntilTimestamp: o().add(s, "s").toISOString(),
                        duration: s,
                        reason: r
                    }), c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_CONFIRMATION.format({
                        user: M.default.getUserTag(u),
                        duration: s
                    }))
                };
                a().catch(() => {
                    c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_TIMEOUT_ERROR)
                })
            }
        }, {
            id: "-14",
            name: "msg",
            displayName: "msg",
            type: p.ApplicationCommandType.CHAT,
            inputType: O.ApplicationCommandInputType.BUILT_IN,
            applicationId: S.BuiltInSectionId.BUILT_IN,
            get description() {
                return v.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            get displayDescription() {
                return v.default.Messages.COMMAND_MSG_DESCRIPTION
            },
            options: [{
                name: "user",
                displayName: "user",
                type: p.ApplicationCommandOptionType.USER,
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
                type: p.ApplicationCommandOptionType.STRING,
                get description() {
                    return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                get displayDescription() {
                    return v.default.Messages.COMMAND_MSG_MESSAGE_DESCRIPTION
                },
                required: !0,
                get maxLength() {
                    var U;
                    return (null === (U = N.default.getCurrentUser()) || void 0 === U ? void 0 : U.premiumType) ? h.MAX_MESSAGE_LENGTH_PREMIUM : h.MAX_MESSAGE_LENGTH
                }
            }],
            execute: (e, t) => {
                var n;
                let {
                    channel: i
                } = t, a = R(e, "user"), o = null !== (n = R(e, "message")) && void 0 !== n ? n : "", s = async () => {
                    await u.default.openPrivateChannel(a).then(e => {
                        let t = E.default.getChannel(e);
                        l(null != t, "Newly created PrivateChannel is null"), c.default.sendMessage(t.id, m.default.parse(t, o))
                    })
                };
                s().catch(() => {
                    c.default.sendBotMessage(i.id, v.default.Messages.COMMAND_MSG_ERROR)
                })
            }
        }],
        b = P.filter(e => ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.name)),
        B = (e, t, n) => {
            let i = t ? P : b;
            return i = i.filter(t => t.type === e && (!n || t.inputType === O.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === O.ApplicationCommandInputType.BUILT_IN_INTEGRATION))
        }
}