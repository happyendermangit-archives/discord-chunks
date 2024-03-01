function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return C
        },
        sendReply: function() {
            return S
        }
    }), n("70102");
    var l = n("913144"),
        i = n("450911"),
        a = n("819689"),
        s = n("81594"),
        r = n("282928"),
        o = n("966724"),
        u = n("884351"),
        d = n("166257"),
        c = n("432173"),
        f = n("271938"),
        m = n("42203"),
        p = n("474643"),
        h = n("462495");
    let E = e => {
            let t = h.default.getFiles(e),
                n = t[0],
                i = h.default.getMessageForFile(n.id);
            return null == i ? Promise.reject() : new Promise((e, t) => {
                let i = a => {
                    a.file.id === n.id && (l.default.unsubscribe("UPLOAD_COMPLETE", i), l.default.unsubscribe("UPLOAD_FAIL", i), "UPLOAD_COMPLETE" === a.type ? e(a.messageRecord) : t(Error("Upload failed")))
                };
                l.default.subscribe("UPLOAD_COMPLETE", i), l.default.subscribe("UPLOAD_FAIL", i)
            })
        },
        g = function(e, t) {
            var l;
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                d = m.default.getChannel(t);
            l = f.default.getToken(), u.default.parse(d, "");
            let c = o.UploadPlatform.WEB;
            if (i) s.default.addFile({
                file: {
                    platform: c,
                    file: e,
                    uri: "",
                    originalUri: ""
                },
                channelId: t,
                draftType: p.DraftType.ChannelMessage
            });
            else {
                let l = m.default.getChannel(t);
                if (null == l) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                {
                    let l = n("783480").default,
                        i = new r.CloudUpload({
                            file: e,
                            platform: o.UploadPlatform.WEB,
                            isThumbnail: !1
                        }, t);
                    i.description = a, l.uploadFiles({
                        channelId: t,
                        uploads: [i],
                        draftType: p.DraftType.ChannelMessage
                    })
                }
            }
        },
        C = async e => {
            let {
                file: t,
                reaction: n,
                user: l,
                altText: a,
                requireConfirmation: s = !1
            } = e, r = await i.default.openPrivateChannel(l.id, !1, !1);
            g(t, r, s, a);
            let o = await E(r);
            if (null != o) {
                let e = (0, c.toReactionEmoji)(n);
                (0, d.addReaction)(r, o.id, e)
            }
        }, S = async e => {
            let {
                file: t,
                reply: n,
                user: l,
                altText: s,
                requireConfirmation: r = !1
            } = e, o = await i.default.openPrivateChannel(l.id, !1, !1);
            g(t, o, r, s), await E(o);
            let d = m.default.getChannel(o),
                c = u.default.parse(d, n);
            a.default.sendMessage(o, c)
        }
}