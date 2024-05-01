function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("442837"),
        r = n("570140"),
        s = n("147913"),
        a = n("883429"),
        o = n("314897"),
        l = n("592125");
    class u extends s.default {
        handleChannelDelete(e) {
            let {
                channel: t
            } = e;
            if (null != t.guild_id) {
                let e = l.default.getAllThreadsForParent(t.id);
                e.length > 0 && i.default.Emitter.batched(() => {
                    for (let t of e) r.default.dispatch({
                        type: "THREAD_DELETE",
                        channel: t
                    })
                })
            }
        }
        handleMessageCreate(e) {
            var t, n, i;
            let {
                channelId: r,
                message: s
            } = e, u = l.default.getChannel(r);
            if ((null === (t = s.author) || void 0 === t ? void 0 : t.id) !== o.default.getId() || !(null == u ? void 0 : u.isActiveThread())) return;
            let d = new Date(null !== (i = null === (n = u.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== i ? i : 0).getTime();
            Date.now() - d < 5e3 && a.default.resort(u.parent_id)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new u
}