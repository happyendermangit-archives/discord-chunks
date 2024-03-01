function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var a = n("811022"),
        l = n("446674"),
        s = n("913144"),
        i = n("125273"),
        r = n("618421"),
        u = n("42203"),
        d = n("525065"),
        o = n("985365"),
        c = n("599110"),
        E = n("49111");
    let _ = new a.default("MessageRoundtripTrackerStore");

    function f(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
    }

    function g(e) {
        let t = u.default.getBasicChannel(e.channelId);
        if (null == t) {
            _.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
            return
        }
        if (Math.random() > .1) return;
        let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
            a = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
            l = (0, r.getSignalStrength)();
        c.default.track(E.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
            ...(0, i.default)(),
            api_latency_ms: n,
            gateway_latency_ms: a,
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
            guild_size: d.default.getMemberCount(t.guild_id),
            mobile_network_type: o.default.getType(),
            ...null != l && {
                mobile_signal_strength_level: l
            }
        })
    }
    class S extends l.default.Store {
        recordMessageSendAttempt(e, t) {
            let n = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e
            };
            this.pendingMessages.set(t, n), setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (g(e), this.pendingMessages.delete(t))
            }, 3e4)
        }
        recordMessageSendApiResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    apiResponseTimestamp: Date.now()
                };
                f(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        recordGatewayResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    gatewaySeenTimestamp: Date.now()
                };
                f(n) ? (g(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        constructor(...e) {
            super(...e), this.pendingMessages = new Map
        }
    }
    let h = new S(s.default, {
        MESSAGE_CREATE: function(e) {
            let {
                optimistic: t,
                message: n
            } = e, a = n.nonce;
            !t && null != a && h.recordGatewayResponse(a)
        }
    });
    var m = h
}