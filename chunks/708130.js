function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return T
        }
    }), E("222007");
    var t = E("446674"),
        o = E("913144"),
        n = E("689988"),
        r = E("404607"),
        a = E("271938"),
        i = E("42203");
    class I extends n.default {
        handleChannelDelete(e) {
            let {
                channel: _
            } = e;
            if (null != _.guild_id) {
                let e = i.default.getAllThreadsForParent(_.id);
                e.length > 0 && t.default.Emitter.batched(() => {
                    for (let _ of e) o.default.dispatch({
                        type: "THREAD_DELETE",
                        channel: _
                    })
                })
            }
        }
        handleMessageCreate(e) {
            var _, E, t;
            let {
                channelId: o,
                message: n
            } = e, I = i.default.getChannel(o);
            if ((null === (_ = n.author) || void 0 === _ ? void 0 : _.id) !== a.default.getId() || !(null == I ? void 0 : I.isActiveThread())) return;
            let T = new Date(null !== (t = null === (E = I.threadMetadata) || void 0 === E ? void 0 : E.archiveTimestamp) && void 0 !== t ? t : 0).getTime(),
                s = Date.now() - T;
            s < 5e3 && r.default.resort(I.parent_id)
        }
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            }
        }
    }
    var T = new I
}