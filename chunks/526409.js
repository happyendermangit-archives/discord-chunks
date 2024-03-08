function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return y
        },
        sendReply: function() {
            return g
        }
    }), n("70102");
    var i = n("913144"),
        l = n("450911"),
        a = n("819689"),
        s = n("81594"),
        r = n("282928"),
        o = n("966724"),
        u = n("884351"),
        d = n("166257"),
        c = n("432173"),
        f = n("271938"),
        p = n("42203"),
        m = n("474643"),
        h = n("462495");
    let x = e => {
            let t = h.default.getFiles(e),
                n = t[0],
                l = h.default.getMessageForFile(n.id);
            return null == l ? Promise.reject() : new Promise((e, t) => {
                let l = a => {
                    a.file.id === n.id && (i.default.unsubscribe("UPLOAD_COMPLETE", l), i.default.unsubscribe("UPLOAD_FAIL", l), "UPLOAD_COMPLETE" === a.type ? e(a.messageRecord) : t(Error("Upload failed")))
                };
                i.default.subscribe("UPLOAD_COMPLETE", l), i.default.subscribe("UPLOAD_FAIL", l)
            })
        },
        E = function(e, t) {
            var i;
            let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                d = p.default.getChannel(t);
            i = f.default.getToken(), u.default.parse(d, "");
            let c = o.UploadPlatform.WEB;
            if (l) s.default.addFile({
                file: {
                    platform: c,
                    file: e,
                    uri: "",
                    originalUri: ""
                },
                channelId: t,
                draftType: m.DraftType.ChannelMessage
            });
            else {
                let i = p.default.getChannel(t);
                if (null == i) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                {
                    let i = n("783480").default,
                        l = new r.CloudUpload({
                            file: e,
                            platform: o.UploadPlatform.WEB,
                            isThumbnail: !1
                        }, t);
                    l.description = a, i.uploadFiles({
                        channelId: t,
                        uploads: [l],
                        draftType: m.DraftType.ChannelMessage
                    })
                }
            }
        },
        y = async e => {
            let {
                file: t,
                reaction: n,
                user: i,
                altText: a,
                requireConfirmation: s = !1
            } = e, r = await l.default.openPrivateChannel(i.id, !1, !1);
            E(t, r, s, a);
            let o = await x(r);
            if (null != o) {
                let e = (0, c.toReactionEmoji)(n);
                await (0, d.addReaction)(r, o.id, e)
            }
        }, g = async e => {
            let {
                file: t,
                reply: n,
                user: i,
                altText: s,
                requireConfirmation: r = !1
            } = e, o = await l.default.openPrivateChannel(i.id, !1, !1);
            E(t, o, r, s), await x(o);
            let d = p.default.getChannel(o),
                c = u.default.parse(d, n);
            await a.default.sendMessage(o, c)
        }
}