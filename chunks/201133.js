function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendReaction: function() {
            return I
        },
        sendReply: function() {
            return T
        }
    }), n("411104");
    var i = n("570140"),
        r = n("493683"),
        s = n("957730"),
        a = n("222677"),
        o = n("995774"),
        l = n("314897"),
        u = n("592125"),
        d = n("703558"),
        _ = n("62817");
    let c = e => {
            let t = _.default.getFiles(e)[0];
            return null == _.default.getMessageForFile(t.id) ? Promise.reject() : new Promise((e, n) => {
                let r = s => {
                    s.file.id === t.id && (i.default.unsubscribe("UPLOAD_COMPLETE", r), i.default.unsubscribe("UPLOAD_FAIL", r), "UPLOAD_COMPLETE" === s.type ? e(s.messageRecord) : n(Error("Upload failed")))
                };
                i.default.subscribe("UPLOAD_COMPLETE", r), i.default.subscribe("UPLOAD_FAIL", r)
            })
        },
        E = async function(e, t) {
            var i;
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                o = arguments.length > 4 ? arguments[4] : void 0,
                _ = u.default.getChannel(t);
            if (i = l.default.getToken(), s.default.parse(_, ""), r);
            else {
                if (null == u.default.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
                {
                    let i = n("966390").default;
                    e.description = a, await i.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: d.DraftType.ChannelMessage,
                        parsedMessage: o
                    })
                }
            }
        }, I = async e => {
            let {
                file: t,
                reaction: n,
                user: i,
                altText: s,
                requireConfirmation: l = !1
            } = e, u = await r.default.openPrivateChannel(i.id, !1, !1);
            E(t, u, l, s);
            let d = await c(u);
            if (null != d) {
                let e = (0, o.toReactionEmoji)(n);
                await (0, a.addReaction)(u, d.id, e)
            }
        }, T = e => {
            let {
                file: t,
                reply: n,
                channel: i,
                altText: r,
                requireConfirmation: a = !1
            } = e, o = s.default.parse(i, n);
            return E(t, i.id, a, r, o)
        }
}