function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        },
        retryCommandMessage: function() {
            return K
        }
    });
    var r, o = n("512722"),
        i = n.n(o),
        a = n("629815"),
        u = n("443458"),
        s = n("183645"),
        l = n("531822"),
        c = n("29570"),
        f = n("749055"),
        d = n("416391"),
        _ = n("140817"),
        E = n("119578"),
        p = n("300983"),
        m = n("657334"),
        y = n("900060"),
        I = n("192998"),
        h = n("741471"),
        O = n("225098"),
        T = n("306912"),
        S = n("158201"),
        v = n("208454"),
        g = n("49657"),
        A = n("162677"),
        b = n("83653"),
        N = n("503113"),
        R = n("314653"),
        C = n("169850"),
        P = n("292206"),
        D = n("861272"),
        L = n("653754"),
        M = n("118891"),
        U = n("281767"),
        w = n("401146"),
        k = n("941504");

    function G(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function B(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    G(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    G(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function j(e, t) {
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
    var F = function(e, t) {
            var n;
            return null == e ? void 0 : null === (n = e.find(function(e) {
                return e.displayName === t
            })) || void 0 === n ? void 0 : n.value
        },
        V = function(e, t, n) {
            var r, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function(e) {
                return e
            };
            if (e.name === (null === (r = n.autocomplete) || void 0 === r ? void 0 : r.name)) return n.autocomplete.query;
            if ("" === t) return null;
            var a = R.default.getAutocompleteLastChoices(n.channel.id, e.name);
            return null != a ? null !== (o = F(a, t)) && void 0 !== o ? o : i(t) : i(t)
        },
        H = function(e) {
            var t = e.toLowerCase() === M.TRUE_OPTION_NAME.toLowerCase(),
                n = e.toLowerCase() === M.FALSE_OPTION_NAME.toLowerCase();
            return t || n ? t : null
        };

    function x(e) {
        return Y.apply(this, arguments)
    }

    function Y() {
        return (Y = B(function(e) {
            var t, n, r, o, u, l, f, d, p, m, y, I, T, v, g, A, b, R, P, M, w, k, G, B, x;
            return j(this, function(j) {
                switch (j.label) {
                    case 0:
                        return t = e.command, n = e.optionValues, r = e.context, o = e.commandTargetId, u = e.maxSizeCallback, f = void 0 === (l = e.commandOrigin) ? D.CommandOrigin.CHAT : l, null == r.autocomplete && a.default.dispatch({
                            type: "APPLICATION_COMMAND_USED",
                            context: r,
                            command: t,
                            commandOrigin: f
                        }), [4, h.default.unarchiveThreadIfNecessary(r.channel.id)];
                    case 1:
                        if (j.sent(), m = [], y = [], I = (0, L.getCommandAttachmentDraftType)(f), null != t.options) {
                            T = !0, v = !1, g = void 0;
                            try {
                                for (A = function() {
                                        var e = R.value;
                                        if (e.type === c.ApplicationCommandOptionType.SUB_COMMAND || e.type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in n)) return "continue";
                                        var t = (null === (a = r.autocomplete) || void 0 === a ? void 0 : a.name) === e.name || void 0,
                                            o = null;
                                        if (e.type === c.ApplicationCommandOptionType.STRING) {
                                            var a, u, s, l = null !== (s = null === (u = C.getOptionalString(n, e.name)) || void 0 === u ? void 0 : u.trim()) && void 0 !== s ? s : "";
                                            return o = null != e.choices ? F(e.choices, l) : e.autocomplete ? V(e, l, r) : l, i()(null != r.autocomplete || null != o, 'Option "'.concat(e.name, '" expects a value')), null != o && m.push({
                                                type: e.type,
                                                name: e.name,
                                                value: o,
                                                focused: t
                                            }), "continue"
                                        }
                                        if (e.type === c.ApplicationCommandOptionType.ATTACHMENT) {
                                            if (null != r.autocomplete) return "continue";
                                            var f = S.default.getUpload(r.channel.id, e.name, I);
                                            if (null == f) return "continue";
                                            var d = S.default.getUploads(r.channel.id, I).findIndex(function(e) {
                                                return f.id === e.id
                                            });
                                            return y.push(f), o = d, m.push({
                                                type: e.type,
                                                name: e.name,
                                                value: o,
                                                focused: t
                                            }), "continue"
                                        }
                                        var _ = C.filterEmpty(n[e.name]);
                                        if (i()(null != r.autocomplete || 1 === _.length, 'Option "'.concat(e.name, '" expects a single option type')), null == _[0] && !t) return "continue";
                                        var p = null !== (h = _[0]) && void 0 !== h ? h : {
                                            type: "text",
                                            text: ""
                                        };
                                        switch (e.type) {
                                            case c.ApplicationCommandOptionType.CHANNEL:
                                                if ("channelMention" === p.type) o = p.channelId;
                                                else if ("text" === p.type) {
                                                    if ((0, L.isSnowflake)(p.text)) o = p.text.trim();
                                                    else {
                                                        var h, T, v = (0, E.resolveApplicationCommandOption)(p.text, null === (T = r.guild) || void 0 === T ? void 0 : T.id, r.channel.id);
                                                        i()((null == v ? void 0 : v.type) === "channelMention", "Failed to resolve ".concat(p.text)), o = v.channelId
                                                    }
                                                }
                                                break;
                                            case c.ApplicationCommandOptionType.ROLE:
                                                if ("roleMention" === p.type) o = p.roleId;
                                                else if ("text" === p.type) {
                                                    if ((0, L.isSnowflake)(p.text)) o = p.text.trim();
                                                    else {
                                                        var g, A, b = (0, E.resolveApplicationCommandOption)(p.text, null === (A = r.guild) || void 0 === A ? void 0 : A.id, r.channel.id, {
                                                            allowUsers: !1
                                                        });
                                                        i()((null == b ? void 0 : b.type) === "roleMention", "Failed to resolve ".concat(p.text)), o = b.roleId
                                                    }
                                                } else "textMention" === p.type && "@everyone" === p.text && (o = null === (g = r.guild) || void 0 === g ? void 0 : g.id);
                                                break;
                                            case c.ApplicationCommandOptionType.USER:
                                                if ("userMention" === p.type) o = p.userId;
                                                else if ("text" === p.type) {
                                                    if ((0, L.isSnowflake)(p.text)) o = p.text.trim();
                                                    else {
                                                        var N, P = (0, E.resolveApplicationCommandOption)(p.text, null === (N = r.guild) || void 0 === N ? void 0 : N.id, r.channel.id, {
                                                            allowRoles: !1
                                                        });
                                                        i()((null == P ? void 0 : P.type) === "userMention", "Failed to resolve ".concat(p.text)), o = P.userId
                                                    }
                                                }
                                                break;
                                            case c.ApplicationCommandOptionType.MENTIONABLE:
                                                if ("userMention" === p.type) o = p.userId;
                                                else if ("roleMention" === p.type) o = p.roleId;
                                                else if ("textMention" === p.type && "@everyone" === p.text) o = null === (D = r.guild) || void 0 === D ? void 0 : D.id;
                                                else if ("text" === p.type) {
                                                    if ((0, L.isSnowflake)(p.text)) o = p.text.trim();
                                                    else {
                                                        var D, M, U, w = (0, E.resolveApplicationCommandOption)(p.text, null === (M = r.guild) || void 0 === M ? void 0 : M.id, r.channel.id);
                                                        (null == w ? void 0 : w.type) === "userMention" ? o = w.userId: (null == w ? void 0 : w.type) === "roleMention" ? o = w.roleId : (null == w ? void 0 : w.type) === "textMention" && "@everyone" === w.text ? o = null === (U = r.guild) || void 0 === U ? void 0 : U.id : i()(!1, "Failed to resolve ".concat(p.text))
                                                    }
                                                }
                                                break;
                                            case c.ApplicationCommandOptionType.BOOLEAN:
                                                "text" === p.type && (o = H(p.text.trim()));
                                                break;
                                            case c.ApplicationCommandOptionType.INTEGER:
                                                if ("text" === p.type) {
                                                    var k = p.text.trim();
                                                    o = null != e.choices ? Number(F(e.choices, k)) : e.autocomplete ? V(e, k, r, Number) : Number(C.normalizeNumericString(O.default.locale, k))
                                                }
                                                break;
                                            case c.ApplicationCommandOptionType.NUMBER:
                                                if ("text" === p.type) {
                                                    var G = p.text.trim();
                                                    o = null != e.choices ? Number(F(e.choices, G)) : e.autocomplete ? V(e, G, r, Number) : Number(C.normalizeNumericString(O.default.locale, G))
                                                }
                                                break;
                                            default:
                                                return i()(!1, "Unsupported option type: ".concat(e.type)), "continue"
                                        }
                                        i()(null != r.autocomplete || null != o, 'Unexpected value for option "'.concat(e.name, '"')), null != o && m.push({
                                            type: e.type,
                                            name: e.name,
                                            value: o,
                                            focused: t
                                        })
                                    }, b = t.options[Symbol.iterator](); !(T = (R = b.next()).done); T = !0) A()
                            } catch (e) {
                                v = !0, g = e
                            } finally {
                                try {
                                    !T && null != b.return && b.return()
                                } finally {
                                    if (v) throw g
                                }
                            }
                        }
                        if (null != t.subCommandPath)
                            for (P = t.subCommandPath.length - 1; P >= 0; P -= 1) w = (M = t.subCommandPath[P]).name, m = [{
                                type: M.type,
                                name: w,
                                options: m
                            }];
                        if (null != t.execute) return _.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
                            command_id: t.id,
                            application_id: t.applicationId,
                            command_type: t.type,
                            location: f === D.CommandOrigin.APPLICATION_LAUNCHER ? D.ApplicationCommandTriggerLocations.APP_LAUNCHER : D.ApplicationCommandTriggerLocations.SLASH_UI
                        }), [2, t.execute(m, r)];
                        if (t.inputType === D.ApplicationCommandInputType.BUILT_IN || t.inputType === D.ApplicationCommandInputType.BUILT_IN_TEXT || t.inputType === D.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return [2];
                        if (B = {
                                version: t.version,
                                id: null !== (k = null === (d = t.rootCommand) || void 0 === d ? void 0 : d.id) && void 0 !== k ? k : t.id,
                                guild_id: t.guildId,
                                name: null !== (G = null === (p = t.rootCommand) || void 0 === p ? void 0 : p.name) && void 0 !== G ? G : t.name,
                                type: t.type,
                                options: m,
                                application_command: t.rootCommand
                            }, x = function() {
                                W(n)
                            }, null != o && (B.target_id = o), !(null != r.autocomplete)) return [3, 2];
                        return (0, N.performAutocomplete)(t, r, B), [3, 4];
                    case 2:
                        return s.default.clearAll(r.channel.id, I), [4, z({
                            applicationId: t.applicationId,
                            data: B,
                            context: r,
                            attachments: y,
                            maxSizeCallback: u,
                            onMessageSuccess: x,
                            commandDisplayName: t.displayName,
                            analytics_location: f === D.CommandOrigin.APPLICATION_LAUNCHER ? D.ApplicationCommandTriggerLocations.APP_LAUNCHER : D.ApplicationCommandTriggerLocations.SLASH_UI
                        })];
                    case 3:
                        j.sent(), j.label = 4;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var W = function(e) {
            var t = Object.values(e).flatMap(function(e) {
                return e.map(function(e) {
                    return "emoji" === e.type ? {
                        name: e.name.replaceAll(":", "")
                    } : "customEmoji" === e.type ? p.default.getCustomEmojiById(e.emojiId) : null
                }).filter(A.isNotNullish)
            });
            t.length > 0 && a.default.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t
            })
        },
        K = function(e, t, n) {
            if (e.isCommandType()) {
                var r = t.guild_id;
                null != e.interactionData && z({
                    applicationId: n,
                    data: e.interactionData,
                    context: {
                        channel: t,
                        guild: null != r ? T.default.getGuild(r) : null
                    }
                })
            }
        };
    var z = (r = B(function(e) {
        var t, n, r, o, i, s, f, d, _, E, p, y, h, O, T, S, g, A, b, N;
        return j(this, function(S) {
            switch (S.label) {
                case 0:
                    if (t = e.applicationId, n = e.data, r = e.context, o = e.attachments, i = e.maxSizeCallback, s = e.onMessageSuccess, f = e.commandDisplayName, d = e.analytics_location, E = r.channel, p = r.guild, y = E.id, h = null == p ? void 0 : p.id, null == (O = P.getCachedApplicationSection(r.channel, n.type, t))) return [2];
                    if (!(null == (T = null === (_ = O.application) || void 0 === _ ? void 0 : _.bot) && null != O.botId)) return [3, 4];
                    S.label = 1;
                case 1:
                    return S.trys.push([1, 3, , 4]), [4, l.getUser(O.botId)];
                case 2:
                case 3:
                    return S.sent(), [3, 4];
                case 4:
                    var R, C;
                    return R = function(e) {
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
                    }({}, (0, I.default)({
                        channelId: y,
                        content: "",
                        type: n.type === c.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND,
                        author: null != T ? T : {
                            id: O.id,
                            username: O.name,
                            discriminator: U.NON_USER_BOT_DISCRIMINATOR,
                            avatar: null,
                            bot: !0
                        }
                    })), C = (C = {
                        application: null == O ? void 0 : O.application,
                        interaction: {
                            id: n.id,
                            name: n.name,
                            name_localized: f,
                            type: c.InteractionTypes.APPLICATION_COMMAND,
                            user: (0, I.userRecordToServer)(v.default.getCurrentUser())
                        },
                        interaction_data: n
                    }, C), Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(C)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(C)).forEach(function(e) {
                        Object.defineProperty(R, e, Object.getOwnPropertyDescriptor(C, e))
                    }), g = R, u.default.receiveMessage(y, g, !0, {
                        applicationId: t
                    }), A = function(e) {
                        null != g.interaction && (g.interaction.id = e)
                    }, b = function(e, t) {
                        null == t && null != e && u.default.sendClydeError(y, e), a.default.dispatch({
                            type: "MESSAGE_SEND_FAILED",
                            messageId: g.id,
                            channelId: y,
                            reason: t
                        })
                    }, N = {
                        applicationId: t,
                        channelId: y,
                        guildId: h,
                        data: n,
                        nonce: g.id,
                        attachments: o,
                        maxSizeCallback: i,
                        analytics_location: d
                    }, m.addQueued(N.nonce, {
                        messageId: g.id,
                        onCreate: A,
                        onFailure: function(e, t) {
                            return b(e, t)
                        },
                        data: {
                            interactionType: c.InteractionTypes.APPLICATION_COMMAND,
                            channelId: y
                        }
                    }), null != o ? (function(e, t, n, r) {
                        return J.apply(this, arguments)
                    })(o, N.nonce, h, i).then(function(e) {
                        e && X(N, s)
                    }) : X(N, s), [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });

    function X(e, t) {
        f.default.enqueue({
            type: f.MessageDataType.COMMAND,
            message: e
        }, function(n) {
            var r;
            (0, y.handleInteractionResponse)(e.nonce, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null, n), n.ok && null != t && t()
        })
    }

    function q(e, t) {
        return Q.apply(this, arguments)
    }

    function Q() {
        return (Q = B(function(e, t) {
            var n, r, o, i, a, u, s, l, c, f, d, _;
            return j(this, function(E) {
                switch (E.label) {
                    case 0:
                        n = 0, r = 0, o = !0, i = !1, a = void 0, E.label = 1;
                    case 1:
                        E.trys.push([1, 8, 9, 10]), u = e[Symbol.iterator](), E.label = 2;
                    case 2:
                        if (o = (s = u.next()).done) return [3, 7];
                        if (l = s.value, !t) return [3, 3];
                        return d = null !== (c = l.currentSize) && void 0 !== c ? c : 0, [3, 5];
                    case 3:
                        return [4, l.getSize()];
                    case 4:
                        d = E.sent(), E.label = 5;
                    case 5:
                        (f = d) > r && (r = f), n += f, E.label = 6;
                    case 6:
                        return o = !0, [3, 2];
                    case 7:
                        return [3, 10];
                    case 8:
                        return _ = E.sent(), i = !0, a = _, [3, 10];
                    case 9:
                        try {
                            !o && null != u.return && u.return()
                        } finally {
                            if (i) throw a
                        }
                        return [7];
                    case 10:
                        return [2, {
                            totalSize: n,
                            largestUploadedFileSize: r
                        }]
                }
            })
        })).apply(this, arguments)
    }

    function J() {
        return (J = B(function(e, t, n, r) {
            var o, i, a, u, s, l, c, f;
            return j(this, function(c) {
                switch (c.label) {
                    case 0:
                        return o = e, i = (0, g.maxFileSize)(n), a = function(e) {
                            null == r || r(i, e), m.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, k.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                                maxSize: (0, g.sizeString)(i)
                            }))
                        }, [4, q(o, !1)];
                    case 1:
                        if (s = (u = c.sent()).totalSize, (l = u.largestUploadedFileSize) > Math.max(i, w.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || s > b.MAX_TOTAL_ATTACHMENT_SIZE) return a(l), [2, !1];
                        c.label = 2;
                    case 2:
                        return c.trys.push([2, 4, , 5]), [4, (0, d.stageAttachmentFiles)(o)];
                    case 3:
                        return c.sent(), [3, 5];
                    case 4:
                        return c.sent(), m.setFailed(t, void 0, k.default.Messages.UPLOADING_FILES_FAILED.format({
                            count: o.length
                        })), [3, 5];
                    case 5:
                        return [4, q(o, !0)];
                    case 6:
                        if (s = (f = c.sent()).totalSize, l = f.largestUploadedFileSize, o.some(function(e) {
                                return e.error === U.AbortCodes.ENTITY_TOO_LARGE
                            }) || s > b.MAX_TOTAL_ATTACHMENT_SIZE) return a(l), [2, !1];
                        return [2, !0]
                }
            })
        })).apply(this, arguments)
    }
}