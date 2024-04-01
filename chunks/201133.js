function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return S
        },
        sendReply: function() {
            return A
        }
    }), n("411104");
    var i = n("570140"),
        r = n("493683"),
        s = n("166459"),
        a = n("141795"),
        o = n("476326"),
        l = n("957730"),
        u = n("222677"),
        d = n("995774"),
        _ = n("314897"),
        c = n("592125"),
        E = n("703558"),
        I = n("62817");
    let T = e => {
            let t = I.default.getFiles(e)[0];
            return null == I.default.getMessageForFile(t.id) ? Promise.reject() : new Promise((e, n) => {
                let r = s => {
                    s.file.id === t.id && (i.default.unsubscribe("UPLOAD_COMPLETE", r), i.default.unsubscribe("UPLOAD_FAIL", r), "UPLOAD_COMPLETE" === s.type ? e(s.messageRecord) : n(Error("Upload failed")))
                };
                i.default.subscribe("UPLOAD_COMPLETE", r), i.default.subscribe("UPLOAD_FAIL", r)
            })
        },
        f = function(e, t) {
            var i;
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                u = arguments.length > 3 ? arguments[3] : void 0,
                d = arguments.length > 4 ? arguments[4] : void 0,
                I = c.default.getChannel(t);
            i = _.default.getToken(), l.default.parse(I, "");
            let T = o.UploadPlatform.WEB;
            if (r) s.default.addFile({
                file: {
                    platform: T,
                    file: e,
                    uri: "",
                    originalUri: ""
                },
                channelId: t,
                draftType: E.DraftType.ChannelMessage
            });
            else {
                if (null == c.default.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                {
                    let i = n("966390").default,
                        r = new a.CloudUpload({
                            file: e,
                            platform: o.UploadPlatform.WEB,
                            isThumbnail: !1
                        }, t);
                    r.description = u, i.uploadFiles({
                        channelId: t,
                        uploads: [r],
                        draftType: E.DraftType.ChannelMessage,
                        parsedMessage: d
                    })
                }
            }
        },
        S = async e => {
            let {
                file: t,
                reaction: n,
                user: i,
                altText: s,
                requireConfirmation: a = !1
            } = e, o = await r.default.openPrivateChannel(i.id, !1, !1);
            f(t, o, a, s);
            let l = await T(o);
            if (null != l) {
                let e = (0, d.toReactionEmoji)(n);
                await (0, u.addReaction)(o, l.id, e)
            }
        }, A = async e => {
            let {
                file: t,
                reply: n,
                user: i,
                altText: s,
                requireConfirmation: a = !1
            } = e, o = await r.default.openPrivateChannel(i.id, !1, !1), u = c.default.getChannel(o);
            f(t, o, a, s, l.default.parse(u, n))
        }
}