function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("702976");
    var l = n("77078"),
        i = n("913144"),
        a = n("295426"),
        s = n("819689"),
        r = n("81594"),
        o = n("336522"),
        u = n("448993"),
        d = n("979911"),
        c = n("282928"),
        f = n("966724"),
        m = n("681736"),
        p = n("447435"),
        h = n("600798"),
        E = n("692038"),
        g = n("815297"),
        C = n("168730"),
        S = n("562228"),
        T = n("529805"),
        I = n("685841"),
        v = n("804888"),
        _ = n("474643"),
        N = n("585722"),
        A = n("568734"),
        x = n("305515"),
        y = n("49111"),
        O = n("782340");
    async function R(e) {
        var t, n, l;
        let c, {
                channelId: f,
                uploads: R,
                draftType: M,
                parsedMessage: L,
                options: P = {},
                raiseEndpointErrors: b = !1
            } = e,
            j = new m.default(y.Endpoints.MESSAGES(f)),
            U = new x.Future,
            D = {
                content: "",
                nonce: "",
                channel_id: f,
                type: y.MessageTypes.DEFAULT,
                sticker_ids: null == P ? void 0 : P.stickerIds,
                poll: null == P ? void 0 : P.poll
            };
        null != L && (D.content = null == L ? void 0 : L.content);
        let k = I.default.getPendingReply(f);
        null != k && (D.type = y.MessageTypes.REPLY, D.message_reference = P.messageReference, D.allowed_mentions = P.allowedMentions, (0, T.deletePendingReply)(f));
        let [w, F] = (0, v.default)(D.content);
        w && (D.content = F, D.flags = (0, A.addFlag)(null !== (t = D.flags) && void 0 !== t ? t : 0, y.MessageFlags.SUPPRESS_NOTIFICATIONS));
        let G = null !== (n = P.nonce) && void 0 !== n ? n : (0, g.createNonce)(),
            B = (0, g.default)({
                channelId: f,
                content: D.content,
                tts: null !== (l = null == L ? void 0 : L.tts) && void 0 !== l && l,
                type: D.type,
                messageReference: D.message_reference,
                flags: D.flags,
                nonce: G,
                poll: (0, S.createPollServerDataFromCreateRequest)(P.poll)
            });
        return (D.nonce = G, j.on("start", e => {
            c = (0, E.createMessageRecord)({
                ...B,
                id: e.id
            }), i.default.dispatch({
                type: "UPLOAD_START",
                channelId: f,
                file: e,
                message: c,
                uploader: j
            })
        }), j.on("progress", e => {
            i.default.dispatch({
                type: "UPLOAD_PROGRESS",
                channelId: f,
                file: e
            })
        })), j.on("error", (e, t, n, l) => {
            if (i.default.dispatch({
                    type: "UPLOAD_FAIL",
                    channelId: f,
                    file: e,
                    messageRecord: c
                }), (0, C.logMessageSendFailure)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == l ? void 0 : l.msg
                }), t === y.AbortCodes.EXPLICIT_CONTENT) {
                s.default.sendExplicitMediaClydeError(f, null == n ? void 0 : n.attachments, p.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return
            }
            if (t === y.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    l = null == c ? null : {
                        type: d.MessageDataType.SEND,
                        message: {
                            ...c,
                            channelId: f
                        }
                    };
                (0, o.openUploadError)({
                    title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, h.getAutomodErrorMessage)(l, e)
                });
                return
            }
            t !== y.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (b ? U.reject(new u.APIError({
                status: t,
                body: null != n ? n : {}
            }, t)) : (0, o.openUploadError)({
                title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
            }), "" !== D.content && "" === _.default.getDraft(f, M) && a.default.saveDraft(f, D.content, M), 0 === N.default.getUploadCount(f, M) && r.default.setUploads({
                channelId: f,
                uploads: R,
                draftType: M
            }))
        }), j.on("complete", (e, t) => {
            i.default.dispatch({
                type: "UPLOAD_COMPLETE",
                channelId: f,
                file: e,
                aborted: j._aborted,
                messageRecord: t
            })
        }), await j.uploadFiles(R, D), U.resolve(), U.promise
    }
    var M = {
        instantBatchUpload: function(e) {
            let {
                channelId: t,
                files: n,
                draftType: l,
                isThumbnail: i = !1,
                filesMetadata: a = []
            } = e, s = Array.from(n).map((e, n) => {
                let l = null != a ? a[n] : {};
                return new c.CloudUpload({
                    file: e,
                    platform: f.UploadPlatform.WEB,
                    isThumbnail: i,
                    ...l
                }, t)
            });
            R({
                channelId: t,
                uploads: s,
                draftType: l
            })
        },
        upload: function e(t) {
            let {
                channelId: n,
                file: r,
                draftType: u,
                message: d,
                hasSpoiler: c,
                filename: f
            } = t, h = {
                content: "",
                tts: !1,
                hasSpoiler: c,
                filename: f
            };
            if (null != d) {
                h.content = d.content, h.tts = d.tts, h.channel_id = d.channel_id;
                let e = I.default.getPendingReply(n);
                if (null != e) {
                    let t = s.default.getSendMessageOptionsForReply(e);
                    h.type = y.MessageTypes.REPLY, h.message_reference = t.messageReference, h.allowed_mentions = t.allowedMentions, (0, T.deletePendingReply)(n)
                }
            }
            let E = new m.default(y.Endpoints.MESSAGES(n));
            E.on("start", e => {
                i.default.dispatch({
                    type: "UPLOAD_START",
                    channelId: n,
                    file: e,
                    uploader: E
                })
            }), E.on("progress", e => {
                i.default.dispatch({
                    type: "UPLOAD_PROGRESS",
                    channelId: n,
                    file: e
                })
            }), E.on("error", (t, c, f) => {
                if (i.default.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: n,
                        file: t
                    }), (0, C.logMessageSendFailure)({
                        fileItems: t.items,
                        failureCode: c
                    }), c === y.AbortCodes.EXPLICIT_CONTENT) {
                    s.default.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, p.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return
                }(0, o.openUploadError)({
                    title: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: O.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, l.closeModal)(o.UPLOAD_ERROR_MODAL_KEY), e({
                                channelId: n,
                                file: r,
                                draftType: u,
                                message: d
                            })
                        }
                    })
                }), "" !== h.content && "" === _.default.getDraft(n, u) && a.default.saveDraft(n, h.content, u)
            }), E.on("complete", e => {
                i.default.dispatch({
                    type: "UPLOAD_COMPLETE",
                    channelId: n,
                    file: e
                })
            }), E.upload(r, h)
        },
        uploadFiles: R,
        cancel(e) {
            if (i.default.dispatch({
                    type: "UPLOAD_CANCEL_REQUEST",
                    file: e
                }), null != e.draftContent && null != e.channelId) {
                let t = _.default.getDraft(e.channelId, _.DraftType.ChannelMessage);
                "" === t && i.default.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: _.DraftType.ChannelMessage
                })
            }
        }
    }
}