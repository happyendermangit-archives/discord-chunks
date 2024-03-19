function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        },
        retryCommandMessage: function() {
            return k
        }
    }), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
    var i = n("627445"),
        l = n.n(i),
        a = n("913144"),
        o = n("819689"),
        s = n("81594"),
        r = n("327037"),
        u = n("798609"),
        d = n("979911"),
        c = n("981112"),
        p = n("716241"),
        f = n("118851"),
        m = n("385976"),
        _ = n("274800"),
        I = n("752598"),
        T = n("815297"),
        A = n("263024"),
        E = n("915639"),
        C = n("305961"),
        N = n("585722"),
        g = n("697218"),
        M = n("254490"),
        O = n("449008"),
        S = n("980134"),
        h = n("507217"),
        y = n("246598"),
        v = n("118200"),
        D = n("240249"),
        R = n("524768"),
        L = n("389153"),
        P = n("317041"),
        U = n("49111"),
        b = n("894488"),
        x = n("782340");
    let B = (e, t) => {
            var n;
            return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
        },
        F = function(e, t, n) {
            var i, l;
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                o = e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name);
            if (o) return n.autocomplete.query;
            if ("" === t) return null;
            let s = y.default.getAutocompleteLastChoices(n.channel.id, e.name);
            return null != s ? null !== (l = B(s, t)) && void 0 !== l ? l : a(t) : a(t)
        },
        H = e => {
            let t = e.toLowerCase() === P.TRUE_OPTION_NAME.toLowerCase(),
                n = e.toLowerCase() === P.FALSE_OPTION_NAME.toLowerCase();
            return t || n ? t : null
        };
    async function w(e) {
        var t, n, i, o, r, d, c, m, _, I, T, C, g, M, O;
        let {
            command: S,
            optionValues: y,
            context: D,
            commandTargetId: P,
            maxSizeCallback: b,
            commandOrigin: x = R.CommandOrigin.CHAT
        } = e;
        null == D.autocomplete && a.default.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: D,
            command: S
        }), await A.default.unarchiveThreadIfNecessary(D.channel.id);
        let w = [],
            k = [],
            W = (0, L.getCommandAttachmentDraftType)(x);
        if (null != S.options)
            for (let e of S.options) {
                if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in y)) continue;
                let t = (null === (i = D.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                    n = null;
                if (e.type === u.ApplicationCommandOptionType.STRING) {
                    let i = null !== (r = null === (o = v.getOptionalString(y, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== r ? r : "";
                    n = null != e.choices ? B(e.choices, i) : e.autocomplete ? F(e, i, D) : i, l(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && w.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) {
                    if (null != D.autocomplete) continue;
                    let i = N.default.getUpload(D.channel.id, e.name, W);
                    if (null == i) continue;
                    let l = N.default.getUploads(D.channel.id, W).findIndex(e => i.id === e.id);
                    k.push(i), n = l, w.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                let a = v.filterEmpty(y[e.name]);
                if (l(null != D.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t) continue;
                let s = null !== (d = a[0]) && void 0 !== d ? d : {
                    type: "text",
                    text: ""
                };
                switch (e.type) {
                    case u.ApplicationCommandOptionType.CHANNEL:
                        if ("channelMention" === s.type) n = s.channelId;
                        else if ("text" === s.type) {
                            if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(s.text, null === (c = D.guild) || void 0 === c ? void 0 : c.id, D.channel.id);
                                l((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(s.text)), n = e.channelId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.ROLE:
                        if ("roleMention" === s.type) n = s.roleId;
                        else if ("text" === s.type) {
                            if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(s.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, {
                                    allowUsers: !1
                                });
                                l((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(s.text)), n = e.roleId
                            }
                        } else "textMention" === s.type && "@everyone" === s.text && (n = null === (_ = D.guild) || void 0 === _ ? void 0 : _.id);
                        break;
                    case u.ApplicationCommandOptionType.USER:
                        if ("userMention" === s.type) n = s.userId;
                        else if ("text" === s.type) {
                            if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(s.text, null === (I = D.guild) || void 0 === I ? void 0 : I.id, D.channel.id, {
                                    allowRoles: !1
                                });
                                l((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(s.text)), n = e.userId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.MENTIONABLE:
                        if ("userMention" === s.type) n = s.userId;
                        else if ("roleMention" === s.type) n = s.roleId;
                        else if ("textMention" === s.type && "@everyone" === s.text) n = null === (T = D.guild) || void 0 === T ? void 0 : T.id;
                        else if ("text" === s.type) {
                            if ((0, L.isSnowflake)(s.text)) n = s.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(s.text, null === (C = D.guild) || void 0 === C ? void 0 : C.id, D.channel.id);
                                (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (g = D.guild) || void 0 === g ? void 0 : g.id : l(!1, "Failed to resolve ".concat(s.text))
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.BOOLEAN:
                        "text" === s.type && (n = H(s.text.trim()));
                        break;
                    case u.ApplicationCommandOptionType.INTEGER:
                        if ("text" === s.type) {
                            let t = s.text.trim();
                            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(v.normalizeNumericString(E.default.locale, t))
                        }
                        break;
                    case u.ApplicationCommandOptionType.NUMBER:
                        if ("text" === s.type) {
                            let t = s.text.trim();
                            n = null != e.choices ? Number(B(e.choices, t)) : e.autocomplete ? F(e, t, D, Number) : Number(v.normalizeNumericString(E.default.locale, t))
                        }
                        break;
                    default:
                        l(!1, "Unsupported option type: ".concat(e.type));
                        continue
                }
                l(null != D.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && w.push({
                    type: e.type,
                    name: e.name,
                    value: n,
                    focused: t
                })
            }
        if (null != S.subCommandPath)
            for (let e = S.subCommandPath.length - 1; e >= 0; e -= 1) {
                let {
                    name: t,
                    type: n
                } = S.subCommandPath[e];
                w = [{
                    type: n,
                    name: t,
                    options: w
                }]
            }
        if (null != S.execute) return p.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
            command_id: S.id,
            application_id: S.applicationId,
            command_type: S.type,
            location: x === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
        }), S.execute(w, D);
        if (S.inputType === R.ApplicationCommandInputType.BUILT_IN || S.inputType === R.ApplicationCommandInputType.BUILT_IN_TEXT || S.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
        let V = {
            version: S.version,
            id: null !== (M = null === (t = S.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== M ? M : S.id,
            guild_id: S.guildId,
            name: null !== (O = null === (n = S.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== O ? O : S.name,
            type: S.type,
            options: w,
            application_command: S.rootCommand
        };
        null != P && (V.target_id = P), null != D.autocomplete ? (0, h.performAutocomplete)(S, D, V) : (s.default.clearAll(D.channel.id, W), await Y({
            applicationId: S.applicationId,
            data: V,
            context: D,
            attachments: k,
            maxSizeCallback: b,
            onMessageSuccess: () => {
                G(y)
            },
            commandDisplayName: S.displayName,
            analytics_location: x === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
        }))
    }
    let G = e => {
            let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                name: e.name.replaceAll(":", "")
            } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(O.isNotNullish));
            t.length > 0 && a.default.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t
            })
        },
        k = (e, t, n) => {
            if (e.isCommandType()) {
                let i = t.guild_id;
                null != e.interactionData && Y({
                    applicationId: n,
                    data: e.interactionData,
                    context: {
                        channel: t,
                        guild: null != i ? C.default.getGuild(i) : null
                    }
                })
            }
        },
        Y = async e => {
            var t;
            let {
                applicationId: n,
                data: i,
                context: l,
                attachments: s,
                maxSizeCallback: d,
                onMessageSuccess: c,
                commandDisplayName: p,
                analytics_location: f
            } = e, {
                channel: m,
                guild: I
            } = l, A = m.id, E = null == I ? void 0 : I.id, C = D.getCachedApplicationSection(l.channel, i.type, n);
            if (null == C) return;
            let N = null === (t = C.application) || void 0 === t ? void 0 : t.bot;
            if (null == N && null != C.botId) try {
                await r.getUser(C.botId)
            } catch {}
            let M = {
                ...(0, T.default)({
                    channelId: A,
                    content: "",
                    type: i.type === u.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                    author: null != N ? N : {
                        id: C.id,
                        username: C.name,
                        discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                        avatar: null,
                        bot: !0
                    }
                }),
                application: null == C ? void 0 : C.application,
                interaction: {
                    id: i.id,
                    name: i.name,
                    name_localized: p,
                    type: u.InteractionTypes.APPLICATION_COMMAND,
                    user: (0, T.userRecordToServer)(g.default.getCurrentUser())
                },
                interaction_data: i
            };
            o.default.receiveMessage(A, M, !0, {
                applicationId: n
            });
            let O = (e, t) => {
                    null == t && null != e && o.default.sendClydeError(A, e), a.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: M.id,
                        channelId: A,
                        reason: t
                    })
                },
                S = {
                    applicationId: n,
                    channelId: A,
                    guildId: E,
                    data: i,
                    nonce: M.id,
                    attachments: s,
                    maxSizeCallback: d,
                    analytics_location: f
                };
            _.addQueued(S.nonce, {
                messageId: M.id,
                onCreate: e => {
                    null != M.interaction && (M.interaction.id = e)
                },
                onFailure: (e, t) => O(e, t),
                data: {
                    interactionType: u.InteractionTypes.APPLICATION_COMMAND,
                    channelId: A
                }
            }), null != s ? j(s, S.nonce, E, d).then(e => {
                e && W(S, c)
            }) : W(S, c)
        };

    function W(e, t) {
        d.default.enqueue({
            type: d.MessageDataType.COMMAND,
            message: e
        }, n => {
            var i;
            (0, I.handleInteractionResponse)(e.nonce, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null, n), n.ok && null != t && t()
        })
    }
    async function V(e, t) {
        let n = 0,
            i = 0;
        for (let a of e) {
            var l;
            let e = t ? null !== (l = a.currentSize) && void 0 !== l ? l : 0 : await a.getSize();
            e > i && (i = e), n += e
        }
        return {
            totalSize: n,
            largestUploadedFileSize: i
        }
    }
    async function j(e, t, n, i) {
        let l = (0, M.maxFileSize)(n),
            a = e => {
                null == i || i(l, e), _.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, x.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: (0, M.sizeString)(l)
                }))
            },
            {
                totalSize: o,
                largestUploadedFileSize: s
            } = await V(e, !1);
        if (s > Math.max(l, b.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || o > S.MAX_TOTAL_ATTACHMENT_SIZE) return a(s), !1;
        try {
            await (0, c.stageAttachmentFiles)(e)
        } catch {
            _.setFailed(t, void 0, x.default.Messages.UPLOADING_FILES_FAILED.format({
                count: e.length
            }))
        }({
            totalSize: o,
            largestUploadedFileSize: s
        } = await V(e, !0));
        let r = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
        return !r && !(o > S.MAX_TOTAL_ATTACHMENT_SIZE) || (a(s), !1)
    }
}