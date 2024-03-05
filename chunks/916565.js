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
        r = n("81594"),
        s = n("327037"),
        u = n("798609"),
        d = n("979911"),
        c = n("981112"),
        p = n("716241"),
        f = n("118851"),
        m = n("385976"),
        _ = n("274800"),
        I = n("752598"),
        C = n("815297"),
        T = n("263024"),
        A = n("915639"),
        E = n("305961"),
        N = n("585722"),
        g = n("697218"),
        h = n("254490"),
        S = n("449008"),
        O = n("980134"),
        M = n("507217"),
        v = n("246598"),
        y = n("118200"),
        D = n("240249"),
        R = n("524768"),
        L = n("389153"),
        P = n("317041"),
        U = n("49111"),
        F = n("894488"),
        b = n("782340");
    let H = (e, t) => {
            var n;
            return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
        },
        x = function(e, t, n) {
            var i, l;
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                o = e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name);
            if (o) return n.autocomplete.query;
            if ("" === t) return null;
            let r = v.default.getAutocompleteLastChoices(n.channel.id, e.name);
            return null != r ? null !== (l = H(r, t)) && void 0 !== l ? l : a(t) : a(t)
        },
        B = e => {
            let t = e.toLowerCase() === P.TRUE_OPTION_NAME.toLowerCase(),
                n = e.toLowerCase() === P.FALSE_OPTION_NAME.toLowerCase();
            return t || n ? t : null
        };
    async function w(e) {
        var t, n, i, o, s, d, c, m, _, I, C, E, g, h, S;
        let {
            command: O,
            optionValues: v,
            context: D,
            commandTargetId: P,
            maxSizeCallback: F,
            commandOrigin: b = R.CommandOrigin.CHAT
        } = e;
        null == D.autocomplete && a.default.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: D,
            command: O
        }), await T.default.unarchiveThreadIfNecessary(D.channel.id);
        let w = [],
            k = [],
            W = (0, L.getCommandAttachmentDraftType)(b);
        if (null != O.options)
            for (let e of O.options) {
                if (e.type === u.ApplicationCommandOptionType.SUB_COMMAND || e.type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in v)) continue;
                let t = (null === (i = D.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                    n = null;
                if (e.type === u.ApplicationCommandOptionType.STRING) {
                    let i = null !== (s = null === (o = y.getOptionalString(v, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== s ? s : "";
                    n = null != e.choices ? H(e.choices, i) : e.autocomplete ? x(e, i, D) : i, l(null != D.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && w.push({
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
                let a = y.filterEmpty(v[e.name]);
                if (l(null != D.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t) continue;
                let r = null !== (d = a[0]) && void 0 !== d ? d : {
                    type: "text",
                    text: ""
                };
                switch (e.type) {
                    case u.ApplicationCommandOptionType.CHANNEL:
                        if ("channelMention" === r.type) n = r.channelId;
                        else if ("text" === r.type) {
                            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(r.text, null === (c = D.guild) || void 0 === c ? void 0 : c.id, D.channel.id);
                                l((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.ROLE:
                        if ("roleMention" === r.type) n = r.roleId;
                        else if ("text" === r.type) {
                            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(r.text, null === (m = D.guild) || void 0 === m ? void 0 : m.id, D.channel.id, {
                                    allowUsers: !1
                                });
                                l((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
                            }
                        } else "textMention" === r.type && "@everyone" === r.text && (n = null === (_ = D.guild) || void 0 === _ ? void 0 : _.id);
                        break;
                    case u.ApplicationCommandOptionType.USER:
                        if ("userMention" === r.type) n = r.userId;
                        else if ("text" === r.type) {
                            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(r.text, null === (I = D.guild) || void 0 === I ? void 0 : I.id, D.channel.id, {
                                    allowRoles: !1
                                });
                                l((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.MENTIONABLE:
                        if ("userMention" === r.type) n = r.userId;
                        else if ("roleMention" === r.type) n = r.roleId;
                        else if ("textMention" === r.type && "@everyone" === r.text) n = null === (C = D.guild) || void 0 === C ? void 0 : C.id;
                        else if ("text" === r.type) {
                            if ((0, L.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, f.resolveApplicationCommandOption)(r.text, null === (E = D.guild) || void 0 === E ? void 0 : E.id, D.channel.id);
                                (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (g = D.guild) || void 0 === g ? void 0 : g.id : l(!1, "Failed to resolve ".concat(r.text))
                            }
                        }
                        break;
                    case u.ApplicationCommandOptionType.BOOLEAN:
                        "text" === r.type && (n = B(r.text.trim()));
                        break;
                    case u.ApplicationCommandOptionType.INTEGER:
                        if ("text" === r.type) {
                            let t = r.text.trim();
                            n = null != e.choices ? Number(H(e.choices, t)) : e.autocomplete ? x(e, t, D, Number) : Number(y.normalizeNumericString(A.default.locale, t))
                        }
                        break;
                    case u.ApplicationCommandOptionType.NUMBER:
                        if ("text" === r.type) {
                            let t = r.text.trim();
                            n = null != e.choices ? Number(H(e.choices, t)) : e.autocomplete ? x(e, t, D, Number) : Number(y.normalizeNumericString(A.default.locale, t))
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
        if (null != O.subCommandPath)
            for (let e = O.subCommandPath.length - 1; e >= 0; e -= 1) {
                let {
                    name: t,
                    type: n
                } = O.subCommandPath[e];
                w = [{
                    type: n,
                    name: t,
                    options: w
                }]
            }
        if (null != O.execute) return p.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
            command_id: O.id,
            application_id: O.applicationId,
            command_type: O.type,
            location: b === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
        }), O.execute(w, D);
        if (O.inputType === R.ApplicationCommandInputType.BUILT_IN || O.inputType === R.ApplicationCommandInputType.BUILT_IN_TEXT || O.inputType === R.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
        let V = {
            version: O.version,
            id: null !== (h = null === (t = O.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== h ? h : O.id,
            guild_id: O.guildId,
            name: null !== (S = null === (n = O.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== S ? S : O.name,
            type: O.type,
            options: w,
            application_command: O.rootCommand
        };
        null != P && (V.target_id = P), null != D.autocomplete ? (0, M.performAutocomplete)(O, D, V) : (r.default.clearAll(D.channel.id, W), await Y({
            applicationId: O.applicationId,
            data: V,
            context: D,
            attachments: k,
            maxSizeCallback: F,
            onMessageSuccess: () => {
                G(v)
            },
            commandDisplayName: O.displayName,
            analytics_location: b === R.CommandOrigin.APPLICATION_LAUNCHER ? R.ApplicationCommandTriggerLocations.APP_LAUNCHER : R.ApplicationCommandTriggerLocations.SLASH_UI
        }))
    }
    let G = e => {
            let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                name: e.name.replaceAll(":", "")
            } : "customEmoji" === e.type ? m.default.getCustomEmojiById(e.emojiId) : null).filter(S.isNotNullish));
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
                        guild: null != i ? E.default.getGuild(i) : null
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
                attachments: r,
                maxSizeCallback: d,
                onMessageSuccess: c,
                commandDisplayName: p,
                analytics_location: f
            } = e, {
                channel: m,
                guild: I
            } = l, T = m.id, A = null == I ? void 0 : I.id, E = D.getCachedApplicationSection(l.channel, i.type, n);
            if (null == E) return;
            let N = null === (t = E.application) || void 0 === t ? void 0 : t.bot;
            if (null == N && null != E.botId) try {
                await s.getUser(E.botId)
            } catch {}
            let h = {
                ...(0, C.default)({
                    channelId: T,
                    content: "",
                    type: i.type === u.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                    author: null != N ? N : {
                        id: E.id,
                        username: E.name,
                        discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                        avatar: null,
                        bot: !0
                    }
                }),
                application: null == E ? void 0 : E.application,
                interaction: {
                    id: i.id,
                    name: i.name,
                    name_localized: p,
                    type: u.InteractionTypes.APPLICATION_COMMAND,
                    user: (0, C.userRecordToServer)(g.default.getCurrentUser())
                },
                interaction_data: i
            };
            o.default.receiveMessage(T, h, !0, {
                applicationId: n
            });
            let S = (e, t) => {
                    null == t && null != e && o.default.sendClydeError(T, e), a.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: h.id,
                        channelId: T,
                        reason: t
                    })
                },
                O = {
                    applicationId: n,
                    channelId: T,
                    guildId: A,
                    data: i,
                    nonce: h.id,
                    attachments: r,
                    maxSizeCallback: d,
                    analytics_location: f
                };
            _.addQueued(O.nonce, {
                messageId: h.id,
                onCreate: e => {
                    null != h.interaction && (h.interaction.id = e)
                },
                onFailure: (e, t) => S(e, t),
                data: {
                    interactionType: u.InteractionTypes.APPLICATION_COMMAND,
                    channelId: T
                }
            }), null != r ? j(r, O.nonce, A, d).then(e => {
                e && W(O, c)
            }) : W(O, c)
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
        let l = (0, h.maxFileSize)(n),
            a = e => {
                null == i || i(l, e), _.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, b.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: (0, h.sizeString)(l)
                }))
            },
            {
                totalSize: o,
                largestUploadedFileSize: r
            } = await V(e, !1);
        if (r > Math.max(l, F.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || o > O.MAX_TOTAL_ATTACHMENT_SIZE) return a(r), !1;
        try {
            await (0, c.stageAttachmentFiles)(e)
        } catch {
            _.setFailed(t, void 0, b.default.Messages.UPLOADING_FILES_FAILED.format({
                count: e.length
            }))
        }({
            totalSize: o,
            largestUploadedFileSize: r
        } = await V(e, !0));
        let s = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
        return !s && !(o > O.MAX_TOTAL_ATTACHMENT_SIZE) || (a(r), !1)
    }
}