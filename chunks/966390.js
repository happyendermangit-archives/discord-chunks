function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("481060"),
        r = n("570140"),
        s = n("430742"),
        a = n("904245"),
        o = n("166459"),
        l = n("531643"),
        u = n("881052"),
        d = n("673750"),
        _ = n("141795"),
        c = n("476326"),
        E = n("680287"),
        I = n("163268"),
        T = n("539573"),
        f = n("786761"),
        S = n("3148"),
        A = n("785359"),
        h = n("79390"),
        m = n("623292"),
        N = n("807092"),
        O = n("467798"),
        p = n("703558"),
        R = n("117530"),
        C = n("630388"),
        g = n("226351"),
        L = n("981631"),
        D = n("689938");
    async function v(e) {
        var t, n, i;
        let _, {
                channelId: c,
                uploads: v,
                draftType: M,
                parsedMessage: y,
                options: P = {},
                raiseEndpointErrors: U = !1
            } = e,
            b = new E.default(L.Endpoints.MESSAGES(c)),
            G = new g.Future,
            w = {
                content: "",
                nonce: "",
                channel_id: c,
                type: L.MessageTypes.DEFAULT,
                sticker_ids: null == P ? void 0 : P.stickerIds,
                poll: null == P ? void 0 : P.poll
            };
        null != y && (w.content = null == y ? void 0 : y.content), null != N.default.getPendingReply(c) && (w.type = L.MessageTypes.REPLY, w.message_reference = P.messageReference, w.allowed_mentions = P.allowedMentions, (0, m.deletePendingReply)(c));
        let [k, B] = (0, O.default)(w.content);
        k && (w.content = B, w.flags = (0, C.addFlag)(null !== (t = w.flags) && void 0 !== t ? t : 0, L.MessageFlags.SUPPRESS_NOTIFICATIONS));
        let V = null !== (n = P.nonce) && void 0 !== n ? n : (0, S.createNonce)(),
            F = (0, S.default)({
                channelId: c,
                content: w.content,
                tts: null !== (i = null == y ? void 0 : y.tts) && void 0 !== i && i,
                type: w.type,
                messageReference: w.message_reference,
                flags: w.flags,
                nonce: V,
                poll: (0, h.createPollServerDataFromCreateRequest)(P.poll)
            });
        return (w.nonce = V, b.on("start", e => {
            _ = (0, f.createMessageRecord)({
                ...F,
                id: e.id
            }), r.default.dispatch({
                type: "UPLOAD_START",
                channelId: c,
                file: e,
                message: _,
                uploader: b
            })
        }), b.on("progress", e => {
            r.default.dispatch({
                type: "UPLOAD_PROGRESS",
                channelId: c,
                file: e
            })
        })), b.on("error", (e, t, n, i) => {
            if (r.default.dispatch({
                    type: "UPLOAD_FAIL",
                    channelId: c,
                    file: e,
                    messageRecord: _
                }), (0, A.logMessageSendFailure)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == i ? void 0 : i.msg
                }), t === L.AbortCodes.EXPLICIT_CONTENT) {
                a.default.sendExplicitMediaClydeError(c, null == n ? void 0 : n.attachments, I.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return
            }
            if (t === L.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    i = null == _ ? null : {
                        type: d.MessageDataType.SEND,
                        message: {
                            ..._,
                            channelId: c
                        }
                    };
                (0, l.openUploadError)({
                    title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, T.getAutomodErrorMessage)(i, e)
                });
                return
            }
            t !== L.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (U ? G.reject(new u.APIError({
                status: t,
                body: null != n ? n : {}
            }, t)) : (0, l.openUploadError)({
                title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
            }), "" !== w.content && "" === p.default.getDraft(c, M) && s.default.saveDraft(c, w.content, M), 0 === R.default.getUploadCount(c, M) && o.default.setUploads({
                channelId: c,
                uploads: v,
                draftType: M
            }))
        }), b.on("complete", (e, t) => {
            r.default.dispatch({
                type: "UPLOAD_COMPLETE",
                channelId: c,
                file: e,
                aborted: b._aborted,
                messageRecord: t
            })
        }), await b.uploadFiles(v, w), G.resolve(), G.promise
    }
    t.default = {
        instantBatchUpload: function(e) {
            let {
                channelId: t,
                files: n,
                draftType: i,
                isThumbnail: r = !1,
                filesMetadata: s = []
            } = e, a = Array.from(n).map((e, n) => {
                let i = null != s ? s[n] : {};
                return new _.CloudUpload({
                    file: e,
                    platform: c.UploadPlatform.WEB,
                    isThumbnail: r,
                    ...i
                }, t)
            });
            v({
                channelId: t,
                uploads: a,
                draftType: i
            })
        },
        upload: function e(t) {
            let {
                channelId: n,
                file: o,
                draftType: u,
                message: d,
                hasSpoiler: _,
                filename: c
            } = t, T = {
                content: "",
                tts: !1,
                hasSpoiler: _,
                filename: c
            };
            if (null != d) {
                T.content = d.content, T.tts = d.tts, T.channel_id = d.channel_id;
                let e = N.default.getPendingReply(n);
                if (null != e) {
                    let t = a.default.getSendMessageOptionsForReply(e);
                    T.type = L.MessageTypes.REPLY, T.message_reference = t.messageReference, T.allowed_mentions = t.allowedMentions, (0, m.deletePendingReply)(n)
                }
            }
            let f = new E.default(L.Endpoints.MESSAGES(n));
            f.on("start", e => {
                r.default.dispatch({
                    type: "UPLOAD_START",
                    channelId: n,
                    file: e,
                    uploader: f
                })
            }), f.on("progress", e => {
                r.default.dispatch({
                    type: "UPLOAD_PROGRESS",
                    channelId: n,
                    file: e
                })
            }), f.on("error", (t, _, c) => {
                if (r.default.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: n,
                        file: t
                    }), (0, A.logMessageSendFailure)({
                        fileItems: t.items,
                        failureCode: _
                    }), _ === L.AbortCodes.EXPLICIT_CONTENT) {
                    a.default.sendExplicitMediaClydeError(n, null == c ? void 0 : c.attachments, I.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return
                }(0, l.openUploadError)({
                    title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, i.closeModal)(l.UPLOAD_ERROR_MODAL_KEY), e({
                                channelId: n,
                                file: o,
                                draftType: u,
                                message: d
                            })
                        }
                    })
                }), "" !== T.content && "" === p.default.getDraft(n, u) && s.default.saveDraft(n, T.content, u)
            }), f.on("complete", e => {
                r.default.dispatch({
                    type: "UPLOAD_COMPLETE",
                    channelId: n,
                    file: e
                })
            }), f.upload(o, T)
        },
        uploadFiles: v,
        cancel(e) {
            r.default.dispatch({
                type: "UPLOAD_CANCEL_REQUEST",
                file: e
            }), null != e.draftContent && null != e.channelId && "" === p.default.getDraft(e.channelId, p.DraftType.ChannelMessage) && r.default.dispatch({
                type: "DRAFT_SAVE",
                channelId: e.channelId,
                draft: e.draftContent,
                draftType: p.DraftType.ChannelMessage
            })
        }
    }
}