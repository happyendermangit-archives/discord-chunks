function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("784184"),
        o = n("629815"),
        i = n("771382"),
        a = n("443458"),
        u = n("183645"),
        s = n("177260"),
        l = n("146591"),
        c = n("749055"),
        f = n("481921"),
        d = n("319654"),
        _ = n("780357"),
        E = n("411372"),
        p = n("964237"),
        m = n("273829"),
        y = n("192998"),
        I = n("907580"),
        h = n("821947"),
        O = n("30730"),
        T = n("331286"),
        S = n("931582"),
        v = n("309944"),
        g = n("158201"),
        A = n("947248"),
        b = n("481609"),
        N = n("281767"),
        R = n("941504");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function P(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function D(e) {
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
    }

    function L(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function M(e) {
        return U.apply(this, arguments)
    }

    function U() {
        var e;
        return e = function(e) {
            var t, n, r, f, d, P, M, U, w, k, G, B, j, F, V, H, x, Y, W, K;
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
            }(this, function(z) {
                switch (z.label) {
                    case 0:
                        var X, q;
                        return t = e.channelId, n = e.uploads, r = e.draftType, f = e.parsedMessage, P = void 0 === (d = e.options) ? {} : d, U = void 0 !== (M = e.raiseEndpointErrors) && M, w = new _.default(N.Endpoints.MESSAGES(t)), k = new b.Future, G = {
                            content: "",
                            nonce: "",
                            channel_id: t,
                            type: N.MessageTypes.DEFAULT,
                            sticker_ids: null == P ? void 0 : P.stickerIds,
                            poll: null == P ? void 0 : P.poll
                        }, null != f && (G.content = null == f ? void 0 : f.content), null != T.default.getPendingReply(t) && (G.type = N.MessageTypes.REPLY, G.message_reference = P.messageReference, G.allowed_mentions = P.allowedMentions, (0, O.deletePendingReply)(t)), X = (0, S.default)(G.content), q = 2, j = (B = function(e) {
                            if (Array.isArray(e)) return e
                        }(X) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(X, q) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return C(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                            }
                        }(X, q) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[0], F = B[1], j && (G.content = F, G.flags = (0, A.addFlag)(null !== (V = G.flags) && void 0 !== V ? V : 0, N.MessageFlags.SUPPRESS_NOTIFICATIONS)), x = null !== (H = P.nonce) && void 0 !== H ? H : (0, y.createNonce)(), W = (0, y.default)({
                            channelId: t,
                            content: G.content,
                            tts: null !== (Y = null == f ? void 0 : f.tts) && void 0 !== Y && Y,
                            type: G.type,
                            messageReference: G.message_reference,
                            flags: G.flags,
                            nonce: x,
                            poll: (0, h.createPollServerDataFromCreateRequest)(P.poll)
                        }), G.nonce = x, w.on("start", function(e) {
                            K = (0, m.createMessageRecord)(L(D({}, W), {
                                id: e.id
                            })), o.default.dispatch({
                                type: "UPLOAD_START",
                                channelId: t,
                                file: e,
                                message: K,
                                uploader: w
                            })
                        }), w.on("progress", function(e) {
                            o.default.dispatch({
                                type: "UPLOAD_PROGRESS",
                                channelId: t,
                                file: e
                            })
                        }), w.on("error", function(e, f, d, _) {
                            if (o.default.dispatch({
                                    type: "UPLOAD_FAIL",
                                    channelId: t,
                                    file: e,
                                    messageRecord: K
                                }), (0, I.logMessageSendFailure)({
                                    fileItems: e.items,
                                    failureCode: f,
                                    errorMessage: null == _ ? void 0 : _.msg
                                }), f === N.AbortCodes.EXPLICIT_CONTENT) {
                                a.default.sendExplicitMediaClydeError(t, null == d ? void 0 : d.attachments, E.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                                return
                            }
                            if (f === N.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                                var m = {
                                        code: f,
                                        message: null == d ? void 0 : d.message
                                    },
                                    y = null == K ? null : {
                                        type: c.MessageDataType.SEND,
                                        message: L(D({}, K), {
                                            channelId: t
                                        })
                                    };
                                (0, s.openUploadError)({
                                    title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    help: (0, p.getAutomodErrorMessage)(y, m)
                                });
                                return
                            }
                            f !== N.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (U ? k.reject(new l.APIError({
                                status: f,
                                body: null != d ? d : {}
                            }, f)) : (0, s.openUploadError)({
                                title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                help: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                            }), "" !== G.content && "" === v.default.getDraft(t, r) && i.default.saveDraft(t, G.content, r), 0 === g.default.getUploadCount(t, r) && u.default.setUploads({
                                channelId: t,
                                uploads: n,
                                draftType: r
                            }))
                        }), w.on("complete", function(e, n) {
                            o.default.dispatch({
                                type: "UPLOAD_COMPLETE",
                                channelId: t,
                                file: e,
                                aborted: w._aborted,
                                messageRecord: n
                            })
                        }), [4, w.uploadFiles(n, G)];
                    case 1:
                        return z.sent(), k.resolve(), [2, k.promise]
                }
            })
        }, (U = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    P(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    P(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    t.default = {
        instantBatchUpload: function(e) {
            var t = e.channelId,
                n = e.files,
                r = e.draftType,
                o = e.isThumbnail,
                i = void 0 !== o && o,
                a = e.filesMetadata,
                u = void 0 === a ? [] : a,
                s = Array.from(n).map(function(e, n) {
                    var r = null != u ? u[n] : {};
                    return new f.CloudUpload(D({
                        file: e,
                        platform: d.UploadPlatform.WEB,
                        isThumbnail: i
                    }, r), t)
                });
            M({
                channelId: t,
                uploads: s,
                draftType: r
            })
        },
        upload: function e(t) {
            var n = t.channelId,
                u = t.file,
                l = t.draftType,
                c = t.message,
                f = {
                    content: "",
                    tts: !1,
                    hasSpoiler: t.hasSpoiler,
                    filename: t.filename
                };
            if (null != c) {
                f.content = c.content, f.tts = c.tts, f.channel_id = c.channel_id;
                var d = T.default.getPendingReply(n);
                if (null != d) {
                    var p = a.default.getSendMessageOptionsForReply(d);
                    f.type = N.MessageTypes.REPLY, f.message_reference = p.messageReference, f.allowed_mentions = p.allowedMentions, (0, O.deletePendingReply)(n)
                }
            }
            var m = new _.default(N.Endpoints.MESSAGES(n));
            m.on("start", function(e) {
                o.default.dispatch({
                    type: "UPLOAD_START",
                    channelId: n,
                    file: e,
                    uploader: m
                })
            }), m.on("progress", function(e) {
                o.default.dispatch({
                    type: "UPLOAD_PROGRESS",
                    channelId: n,
                    file: e
                })
            }), m.on("error", function(t, d, _) {
                if (o.default.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: n,
                        file: t
                    }), (0, I.logMessageSendFailure)({
                        fileItems: t.items,
                        failureCode: d
                    }), d === N.AbortCodes.EXPLICIT_CONTENT) {
                    a.default.sendExplicitMediaClydeError(n, null == _ ? void 0 : _.attachments, E.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return
                }(0, s.openUploadError)({
                    title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: function() {
                            (0, r.closeModal)(s.UPLOAD_ERROR_MODAL_KEY), e({
                                channelId: n,
                                file: u,
                                draftType: l,
                                message: c
                            })
                        }
                    })
                }), "" !== f.content && "" === v.default.getDraft(n, l) && i.default.saveDraft(n, f.content, l)
            }), m.on("complete", function(e) {
                o.default.dispatch({
                    type: "UPLOAD_COMPLETE",
                    channelId: n,
                    file: e
                })
            }), m.upload(u, f)
        },
        uploadFiles: M,
        cancel: function(e) {
            o.default.dispatch({
                type: "UPLOAD_CANCEL_REQUEST",
                file: e
            }), null != e.draftContent && null != e.channelId && "" === v.default.getDraft(e.channelId, v.DraftType.ChannelMessage) && o.default.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: v.DraftType.ChannelMessage
            })
        }
    }
}