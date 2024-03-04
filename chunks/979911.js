function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDataType: function() {
            return s
        },
        isMessageDataEdit: function() {
            return N
        },
        getFailedMessageId: function() {
            return R
        },
        default: function() {
            return P
        }
    }), n("222007");
    var i, s, r, a, o = n("627445"),
        l = n.n(o),
        u = n("981980"),
        d = n("872717"),
        c = n("798609"),
        f = n("716241"),
        _ = n("605250"),
        h = n("676574"),
        E = n("618421"),
        g = n("271938"),
        m = n("985365"),
        p = n("718517"),
        S = n("254490"),
        v = n("231987"),
        T = n("980134"),
        I = n("282928"),
        C = n("49111");
    let A = null;
    __OVERLAY__ && (A = n("901165").default), (r = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", r.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", r.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (a = s || (s = {}))[a.SEND = 0] = "SEND", a[a.EDIT = 1] = "EDIT", a[a.COMMAND = 2] = "COMMAND";
    let y = e => 0 === e.type,
        N = e => 1 === e.type,
        R = e => y(e) ? e.message.nonce : N(e) ? e.message.messageId : e.message.data.id,
        O = [1 * p.default.Millis.SECOND, 5 * p.default.Millis.MINUTE];
    class D extends v.default {
        isFull() {
            return this.queue.length >= this.maxSize
        }
        drain(e, t) {
            switch (this.logger.log("Draining Message Queue with: ", e.type), e.type) {
                case 0:
                    this.handleSend(e.message, t);
                    break;
                case 1:
                    this.handleEdit(e.message, t);
                    break;
                case 2:
                    this.handleCommand(e.message, t)
            }
        }
        cancelRequest(e) {
            var t;
            null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
        }
        startQueueMetricTimers(e) {
            let t = O.map(e => setTimeout(() => {
                (0, f.trackWithMetadata)(C.AnalyticEvents.SEND_MESSAGE_QUEUED, {
                    queued_duration_ms: e
                })
            }, e));
            this.analyticsTimeouts.set(e, t)
        }
        cancelQueueMetricTimers(e) {
            var t;
            null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
        }
        createResponseHandler(e, t) {
            return n => {
                if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr) return t(null, n);
                null != n.body && (n.body.code === C.AbortCodes.SLOWMODE_RATE_LIMITED || n.body.code === C.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
                    retryAfter: n.body.retry_after * p.default.Millis.SECOND
                }) : t(null, n)
            }
        }
        handleSend(e, t) {
            let n;
            let {
                channelId: i,
                file: s,
                filename: r,
                ...a
            } = e, o = (0, E.getSignalStrength)(), l = {
                mobile_network_type: m.default.getType(),
                ...a,
                ...null != o && {
                    signal_strength: o
                }
            };
            if (h.default.get("send_fail_100")) {
                this.logger.log("Skipping message sened because send_fail_100 is enabled"), t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: "{}",
                    text: "Simulated failure"
                });
                return
            }
            null != A && (A.isInstanceUILocked() ? n = {
                location: "overlay_locked_activated"
            } : !A.isInstanceUILocked() && (n = A.isPinned(C.OverlayWidgets.TEXT) ? {
                location: "overlay_unlocked_pinned"
            } : {
                location: "overlay_unlocked"
            }));
            let c = this.createResponseHandler(e.nonce, t),
                f = new AbortController;
            if (this.startQueueMetricTimers(e.nonce), null != s && null != r && "" !== r) d.default.post({
                url: C.Endpoints.MESSAGES(i),
                fields: Object.entries(l).map(e => {
                    let [t, n] = e;
                    return {
                        name: t,
                        value: n
                    }
                }),
                attachments: [{
                    name: "file",
                    file: s,
                    filename: r
                }],
                context: n,
                oldFormErrors: !0,
                signal: f.signal,
                onRequestCreated: () => {
                    null != e.nonce && this.requests.set(e.nonce, f)
                }
            }, c);
            else {
                let t = {
                    timeout: 60 * p.default.Millis.SECOND,
                    retries: 3,
                    backoff: new u.default
                };
                d.default.post({
                    url: C.Endpoints.MESSAGES(i),
                    body: l,
                    context: n,
                    oldFormErrors: !0,
                    ...t,
                    signal: f.signal,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, f)
                    }
                }, c)
            }
        }
        handleEdit(e, t) {
            let {
                channelId: n,
                messageId: i,
                ...s
            } = e, r = new AbortController;
            d.default.patch({
                url: C.Endpoints.MESSAGE(n, i),
                body: s,
                retries: 1,
                oldFormErrors: !0,
                signal: r.signal,
                onRequestCreated: () => {
                    this.requests.set(i, r)
                }
            }, this.createResponseHandler(i, t))
        }
        handleCommand(e, t) {
            let n, {
                    applicationId: i,
                    guildId: s,
                    channelId: r,
                    data: a,
                    nonce: o,
                    attachments: u,
                    maxSizeCallback: f,
                    analytics_location: _
                } = e,
                h = {
                    type: c.InteractionTypes.APPLICATION_COMMAND,
                    application_id: i,
                    guild_id: s,
                    channel_id: r,
                    session_id: g.default.getSessionId(),
                    data: a,
                    nonce: o,
                    analytics_location: _
                };
            if (null != u) {
                h.data.attachments = [], n = [];
                h.data.attachments = u.map((e, t) => (l(e.status === I.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, T.getAttachmentPayload)(e, t)))
            }
            let E = new AbortController;
            d.default.post({
                url: C.Endpoints.INTERACTIONS,
                fields: [{
                    name: "payload_json",
                    value: JSON.stringify(h)
                }],
                attachments: n,
                signal: E.signal,
                onRequestCreated: e => {
                    this.requests.set(o, E), e.on("progress", e => {
                        let {
                            total: t
                        } = e, n = (0, S.maxFileSize)(s);
                        null != t && t > n && (this.cancelRequest(o), null == f || f(n))
                    })
                }
            }, this.createResponseHandler(o, t))
        }
        constructor(e = 5) {
            super(new _.default("MessageQueue")), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
        }
    }
    var P = new D
}