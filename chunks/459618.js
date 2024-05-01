function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("259443"),
        r = n("442837"),
        s = n("570140"),
        a = n("443296"),
        o = n("873741"),
        l = n("592125"),
        u = n("650774"),
        d = n("866960"),
        _ = n("626135"),
        c = n("981631");
    let E = new i.Logger("MessageRoundtripTrackerStore");

    function I(e) {
        return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
    }

    function T(e) {
        let t = l.default.getBasicChannel(e.channelId);
        if (null == t) {
            E.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."));
            return
        }
        if (Math.random() > .1) return;
        let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
            i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
            r = (0, o.getSignalStrength)();
        _.default.track(c.AnalyticEvents.SEND_MESSAGE_ROUNDTRIP, {
            ...(0, a.default)(),
            api_latency_ms: n,
            gateway_latency_ms: i,
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id,
            guild_size: u.default.getMemberCount(t.guild_id),
            mobile_network_type: d.default.getType(),
            ...null != r && {
                mobile_signal_strength_level: r
            }
        })
    }
    class f extends r.default.Store {
        recordMessageSendAttempt(e, t) {
            let n = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e
            };
            this.pendingMessages.set(t, n), setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (T(e), this.pendingMessages.delete(t))
            }, 3e4)
        }
        recordMessageSendApiResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    apiResponseTimestamp: Date.now()
                };
                I(n) ? (T(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        recordGatewayResponse(e) {
            let t = this.pendingMessages.get(e);
            if (null != t) {
                let n = {
                    ...t,
                    gatewaySeenTimestamp: Date.now()
                };
                I(n) ? (T(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n)
            }
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "pendingMessages", i = new Map, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    let S = new f(s.default, {
        MESSAGE_CREATE: function(e) {
            let {
                optimistic: t,
                message: n
            } = e, i = n.nonce;
            !t && null != i && S.recordGatewayResponse(i)
        }
    });
    t.default = S
}