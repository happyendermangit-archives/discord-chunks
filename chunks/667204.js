function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        },
        retryCommandMessage: function() {
            return x
        }
    }), n("653041"), n("47120"), n("390547"), n("627494"), n("757143");
    var i = n("512722"),
        r = n.n(i),
        s = n("570140"),
        a = n("904245"),
        o = n("166459"),
        l = n("232567"),
        u = n("911969"),
        d = n("673750"),
        _ = n("687294"),
        c = n("367907"),
        E = n("465343"),
        I = n("339085"),
        T = n("603721"),
        f = n("188597"),
        S = n("3148"),
        h = n("346479"),
        A = n("706454"),
        m = n("430824"),
        N = n("117530"),
        p = n("594174"),
        O = n("403182"),
        R = n("823379"),
        C = n("861990"),
        g = n("555573"),
        L = n("174212"),
        D = n("456007"),
        v = n("10718"),
        M = n("895924"),
        y = n("581364"),
        P = n("689079"),
        U = n("981631"),
        b = n("959517"),
        G = n("689938");
    let w = (e, t) => {
            var n;
            return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
        },
        k = function(e, t, n) {
            var i, r;
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e;
            if (e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name)) return n.autocomplete.query;
            if ("" === t) return null;
            let a = L.default.getAutocompleteLastChoices(n.channel.id, e.name);
            return null != a ? null !== (r = w(a, t)) && void 0 !== r ? r : s(t) : s(t)
        },
        B = e => {
            let t = e.toLowerCase() === P.TRUE_OPTION_NAME.toLowerCase(),
                n = e.toLowerCase() === P.FALSE_OPTION_NAME.toLowerCase();
            return t || n ? t : null
        };
    async function F(e) {
        var t, n, i, a, l, d, _, I, T, f, S, m, p, O, R;
        let {
            command: C,
            optionValues: L,
            context: v,
            commandTargetId: P,
            maxSizeCallback: b,
            commandOrigin: G = M.CommandOrigin.CHAT
        } = e;
        null == v.autocomplete && s.default.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: v,
            command: C,
            commandOrigin: G
        }), await h.default.unarchiveThreadIfNecessary(v.channel.id);
        let F = [],
            x = [],
            Y = (0, y.getCommandAttachmentDraftType)(G);
        if (null != C.options)
            for (let e of C.options) {
                if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in L)) continue;
                let t = (null === (i = v.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                    n = null;
                if (e.type === u.ApplicationCommandOptionType.STRING) {
                    let i = null !== (l = null === (a = D.getOptionalString(L, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== l ? l : "";
                    n = null != e.choices ? w(e.choices, i) : e.autocomplete ? k(e, i, v) : i, r()(null != v.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && F.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) {
                    if (null != v.autocomplete) continue;
                    let i = N.default.getUpload(v.channel.id, e.name, Y);
                    if (null == i) continue;
                    let r = N.default.getUploads(v.channel.id, Y).findIndex(e => i.id === e.id);
                    x.push(i), n = r, F.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                let s = D.filterEmpty(L[e.name]);
                if (r()(null != v.autocomplete || 1 === s.length, 'Option "'.concat(e.name, '" expects a single option type')), null == s[0] && !t) continue;
                let o = null !== (d = s[0]) && void 0 !== d ? d : {
                    type: "text",
                    text: ""
                };
                switch (e.type) {
                    case u.ApplicationCommandOptionType.CHANNEL:
                        if ("channelMention" === o.type) n = o.channelId;
                        else if ("text" === o.type) {
                            if ((0, y.isSnowflake)(o.text)) n = o.text.trim();
                            else {
                                let e = (0, E.resolveApplicationCommandOption)(o.text, null === (_ = v.guild) || void 0 === _ ? void 0 : _.id, v.channel.id);
                                r()((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(o.text)), n = e.channelId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.ROLE:
                        if ("roleMention" === o.type) n = o.roleId;
                        else if ("text" === o.type) {
                            if ((0, y.isSnowflake)(o.text)) n = o.text.trim();
                            else {
                                let e = (0, E.resolveApplicationCommandOption)(o.text, null === (I = v.guild) || void 0 === I ? void 0 : I.id, v.channel.id, {
                                    allowUsers: !1
                                });
                                r()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(o.text)), n = e.roleId
                            }
                        } else "textMention" === o.type && "@everyone" === o.text && (n = null === (T = v.guild) || void 0 === T ? void 0 : T.id);
                        break;
                    case u.ApplicationCommandOptionType.USER:
                        if ("userMention" === o.type) n = o.userId;
                        else if ("text" === o.type) {
                            if ((0, y.isSnowflake)(o.text)) n = o.text.trim();
                            else {
                                let e = (0, E.resolveApplicationCommandOption)(o.text, null === (f = v.guild) || void 0 === f ? void 0 : f.id, v.channel.id, {
                                    allowRoles: !1
                                });
                                r()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(o.text)), n = e.userId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.MENTIONABLE:
                        if ("userMention" === o.type) n = o.userId;
                        else if ("roleMention" === o.type) n = o.roleId;
                        else if ("textMention" === o.type && "@everyone" === o.text) n = null === (S = v.guild) || void 0 === S ? void 0 : S.id;
                        else if ("text" === o.type) {
                            if ((0, y.isSnowflake)(o.text)) n = o.text.trim();
                            else {
                                let e = (0, E.resolveApplicationCommandOption)(o.text, null === (m = v.guild) || void 0 === m ? void 0 : m.id, v.channel.id);
                                (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (p = v.guild) || void 0 === p ? void 0 : p.id : r()(!1, "Failed to resolve ".concat(o.text))
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.BOOLEAN:
                        "text" === o.type && (n = B(o.text.trim()));
                        break;
                    case u.ApplicationCommandOptionType.INTEGER:
                        if ("text" === o.type) {
                            let t = o.text.trim();
                            n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? k(e, t, v, Number) : Number(D.normalizeNumericString(A.default.locale, t))
                        }
                        break;
                    case u.ApplicationCommandOptionType.NUMBER:
                        if ("text" === o.type) {
                            let t = o.text.trim();
                            n = null != e.choices ? Number(w(e.choices, t)) : e.autocomplete ? k(e, t, v, Number) : Number(D.normalizeNumericString(A.default.locale, t))
                        }
                        break;
                    default:
                        r()(!1, "Unsupported option type: ".concat(e.type));
                        continue
                }
                r()(null != v.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && F.push({
                    type: e.type,
                    name: e.name,
                    value: n,
                    focused: t
                })
            }
        if (null != C.subCommandPath)
            for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
                let {
                    name: t,
                    type: n
                } = C.subCommandPath[e];
                F = [{
                    type: n,
                    name: t,
                    options: F
                }]
            }
        if (null != C.execute) return c.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
            command_id: C.id,
            application_id: C.applicationId,
            command_type: C.type,
            location: G === M.CommandOrigin.APPLICATION_LAUNCHER ? M.ApplicationCommandTriggerLocations.APP_LAUNCHER : M.ApplicationCommandTriggerLocations.SLASH_UI
        }), C.execute(F, v);
        if (C.inputType === M.ApplicationCommandInputType.BUILT_IN || C.inputType === M.ApplicationCommandInputType.BUILT_IN_TEXT || C.inputType === M.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
        let j = {
            version: C.version,
            id: null !== (O = null === (t = C.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== O ? O : C.id,
            guild_id: C.guildId,
            name: null !== (R = null === (n = C.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== R ? R : C.name,
            type: C.type,
            options: F,
            application_command: C.rootCommand
        };
        null != P && (j.target_id = P), null != v.autocomplete ? (0, g.performAutocomplete)(C, v, j) : (o.default.clearAll(v.channel.id, Y), await H({
            applicationId: C.applicationId,
            data: j,
            context: v,
            attachments: x,
            maxSizeCallback: b,
            onMessageSuccess: () => {
                V(L)
            },
            commandDisplayName: C.displayName,
            analytics_location: G === M.CommandOrigin.APPLICATION_LAUNCHER ? M.ApplicationCommandTriggerLocations.APP_LAUNCHER : M.ApplicationCommandTriggerLocations.SLASH_UI
        }))
    }
    let V = e => {
            let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                name: e.name.replaceAll(":", "")
            } : "customEmoji" === e.type ? I.default.getCustomEmojiById(e.emojiId) : null).filter(R.isNotNullish));
            t.length > 0 && s.default.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t
            })
        },
        x = (e, t, n) => {
            if (e.isCommandType()) {
                let i = t.guild_id;
                null != e.interactionData && H({
                    applicationId: n,
                    data: e.interactionData,
                    context: {
                        channel: t,
                        guild: null != i ? m.default.getGuild(i) : null
                    }
                })
            }
        },
        H = async e => {
            var t;
            let {
                applicationId: n,
                data: i,
                context: r,
                attachments: o,
                maxSizeCallback: d,
                onMessageSuccess: _,
                commandDisplayName: c,
                analytics_location: E
            } = e, {
                channel: I,
                guild: f
            } = r, h = I.id, A = null == f ? void 0 : f.id, m = v.getCachedApplicationSection(r.channel, i.type, n);
            if (null == m) return;
            let N = null === (t = m.application) || void 0 === t ? void 0 : t.bot;
            if (null == N && null != m.botId) try {
                await l.getUser(m.botId)
            } catch {}
            let O = {
                ...(0, S.default)({
                    channelId: h,
                    content: "",
                    type: i.type === u.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                    author: null != N ? N : {
                        id: m.id,
                        username: m.name,
                        discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                        avatar: null,
                        bot: !0
                    }
                }),
                application: null == m ? void 0 : m.application,
                interaction: {
                    id: i.id,
                    name: i.name,
                    name_localized: c,
                    type: u.InteractionTypes.APPLICATION_COMMAND,
                    user: (0, S.userRecordToServer)(p.default.getCurrentUser())
                },
                interaction_data: i
            };
            a.default.receiveMessage(h, O, !0, {
                applicationId: n
            });
            let R = (e, t) => {
                    null == t && null != e && a.default.sendClydeError(h, e), s.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: O.id,
                        channelId: h,
                        reason: t
                    })
                },
                C = {
                    applicationId: n,
                    channelId: h,
                    guildId: A,
                    data: i,
                    nonce: O.id,
                    attachments: o,
                    maxSizeCallback: d,
                    analytics_location: E
                };
            T.addQueued(C.nonce, {
                messageId: O.id,
                onCreate: e => {
                    null != O.interaction && (O.interaction.id = e)
                },
                onFailure: (e, t) => R(e, t),
                data: {
                    interactionType: u.InteractionTypes.APPLICATION_COMMAND,
                    channelId: h
                }
            }), null != o ? W(o, C.nonce, A, d).then(e => {
                e && Y(C, _)
            }) : Y(C, _)
        };

    function Y(e, t) {
        d.default.enqueue({
            type: d.MessageDataType.COMMAND,
            message: e
        }, n => {
            var i;
            (0, f.handleInteractionResponse)(e.nonce, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null, n), n.ok && null != t && t()
        })
    }
    async function j(e, t) {
        let n = 0,
            i = 0;
        for (let s of e) {
            var r;
            let e = t ? null !== (r = s.currentSize) && void 0 !== r ? r : 0 : await s.getSize();
            e > i && (i = e), n += e
        }
        return {
            totalSize: n,
            largestUploadedFileSize: i
        }
    }
    async function W(e, t, n, i) {
        let r = (0, O.maxFileSize)(n),
            s = e => {
                null == i || i(r, e), T.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, G.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: (0, O.sizeString)(r)
                }))
            },
            {
                totalSize: a,
                largestUploadedFileSize: o
            } = await j(e, !1);
        if (o > Math.max(r, b.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > C.MAX_TOTAL_ATTACHMENT_SIZE) return s(o), !1;
        try {
            await (0, _.stageAttachmentFiles)(e)
        } catch {
            T.setFailed(t, void 0, G.default.Messages.UPLOADING_FILES_FAILED.format({
                count: e.length
            }))
        }
        return {
            totalSize: a,
            largestUploadedFileSize: o
        } = await j(e, !0), !e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE) && !(a > C.MAX_TOTAL_ATTACHMENT_SIZE) || (s(o), !1)
    }
}