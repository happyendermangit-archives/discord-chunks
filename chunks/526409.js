function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return E
        },
        sendReply: function() {
            return y
        }
    }), n("70102");
    var i = n("913144"),
        l = n("450911"),
        a = n("81594"),
        s = n("282928"),
        r = n("966724"),
        o = n("884351"),
        u = n("166257"),
        d = n("432173"),
        c = n("271938"),
        f = n("42203"),
        m = n("474643"),
        p = n("462495");
    let h = e => {
            let t = p.default.getFiles(e),
                n = t[0],
                l = p.default.getMessageForFile(n.id);
            return null == l ? Promise.reject() : new Promise((e, t) => {
                let l = a => {
                    a.file.id === n.id && (i.default.unsubscribe("UPLOAD_COMPLETE", l), i.default.unsubscribe("UPLOAD_FAIL", l), "UPLOAD_COMPLETE" === a.type ? e(a.messageRecord) : t(Error("Upload failed")))
                };
                i.default.subscribe("UPLOAD_COMPLETE", l), i.default.subscribe("UPLOAD_FAIL", l)
            })
        },
        x = function(e, t) {
            var i;
            let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                u = arguments.length > 3 ? arguments[3] : void 0,
                d = arguments.length > 4 ? arguments[4] : void 0,
                p = f.default.getChannel(t);
            i = c.default.getToken(), o.default.parse(p, "");
            let h = r.UploadPlatform.WEB;
            if (l) a.default.addFile({
                file: {
                    platform: h,
                    file: e,
                    uri: "",
                    originalUri: ""
                },
                channelId: t,
                draftType: m.DraftType.ChannelMessage
            });
            else {
                let i = f.default.getChannel(t);
                if (null == i) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                {
                    let i = n("783480").default,
                        l = new s.CloudUpload({
                            file: e,
                            platform: r.UploadPlatform.WEB,
                            isThumbnail: !1
                        }, t);
                    l.description = u, i.uploadFiles({
                        channelId: t,
                        uploads: [l],
                        draftType: m.DraftType.ChannelMessage,
                        parsedMessage: d
                    })
                }
            }
        },
        E = async e => {
            let {
                file: t,
                reaction: n,
                user: i,
                altText: a,
                requireConfirmation: s = !1
            } = e, r = await l.default.openPrivateChannel(i.id, !1, !1);
            x(t, r, s, a);
            let o = await h(r);
            if (null != o) {
                let e = (0, d.toReactionEmoji)(n);
                await (0, u.addReaction)(r, o.id, e)
            }
        }, y = async e => {
            let {
                file: t,
                reply: n,
                user: i,
                altText: a,
                requireConfirmation: s = !1
            } = e, r = await l.default.openPrivateChannel(i.id, !1, !1), u = f.default.getChannel(r), d = o.default.parse(u, n);
            x(t, r, s, a, d)
        }
}