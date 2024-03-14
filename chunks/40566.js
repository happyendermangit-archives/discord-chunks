function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("811022"),
        s = n("446674"),
        r = n("913144"),
        a = n("125273"),
        o = n("618421"),
        l = n("42203"),
        u = n("525065"),
        d = n("985365"),
        c = n("599110"),
        f = n("49111");
    let _ = new i.default("MessageRoundtripTrackerStore");

    function E(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
    }

    function h(e) {
        let t = l.default.getBasicChannel(e.channelId);
        if (null == t) {
            _.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
            return
        }
        if (Math.random() > .1) return;
        let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
            i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
            s = (0, o.getSignalStrength)();
        c.default.track(f.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
            ...(0, a.default)(),
            api_latency_ms: n,
            gateway_latency_ms: i,
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
            guild_size: u.default.getMemberCount(t.guild_id),
            mobile_network_type: d.default.getType(),
            ...null != s && {
                mobile_signal_strength_level: s
            }
        })
    }
    class g extends s.default.Store {
        recordMessageSendAttempt(e, t) {
            let n = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e
            };
            this.pendingMessages.set(t, n), setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (h(e), this.pendingMessages.delete(t))
            }, 3e4)
        }
        recordMessageSendApiResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    apiResponseTimestamp: Date.now()
                };
                E(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        recordGatewayResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    gatewaySeenTimestamp: Date.now()
                };
                E(n) ? (h(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        constructor(...e) {
            super(...e), this.pendingMessages = new Map
        }
    }
    let m = new g(r.default, {
        MESSAGE_CREATE: function(e) {
            let {
                optimistic: t,
                message: n
            } = e, i = n.nonce;
            !t && null != i && m.recordGatewayResponse(i)
        }
    });
    var p = m
}