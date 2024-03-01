function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDataType: function() {
            return i
        },
        isMessageDataEdit: function() {
            return D
        },
        getFailedMessageId: function() {
            return N
        },
        default: function() {
            return b
        }
    }), n("222007");
    var s, i, r, a, o = n("627445"),
        d = n.n(o),
        u = n("981980"),
        l = n("872717"),
        f = n("798609"),
        _ = n("716241"),
        c = n("605250"),
        g = n("676574"),
        m = n("618421"),
        h = n("271938"),
        v = n("985365"),
        E = n("718517"),
        p = n("254490"),
        y = n("231987"),
        T = n("980134"),
        C = n("282928"),
        I = n("49111");
    let S = null;
    __OVERLAY__ && (S = n("901165").default), (r = s || (s = {})).OVERLAY_UNLOCKED = "overlay_unlocked", r.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", r.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (a = i || (i = {}))[a.SEND = 0] = "SEND", a[a.EDIT = 1] = "EDIT", a[a.COMMAND = 2] = "COMMAND";
    let A = e => 0 === e.type,
        D = e => 1 === e.type,
        N = e => A(e) ? e.message.nonce : D(e) ? e.message.messageId : e.message.data.id,
        O = [1 * E.default.Millis.SECOND, 5 * E.default.Millis.MINUTE];
    class P extends y.default {
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
                (0, _.trackWithMetadata)(I.AnalyticEvents.SEND_MESSAGE_QUEUED, {
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
                null != n.body && (n.body.code === I.AbortCodes.SLOWMODE_RATE_LIMITED || n.body.code === I.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
                    retryAfter: n.body.retry_after * E.default.Millis.SECOND
                }) : t(null, n)
            }
        }
        handleSend(e, t) {
            let n;
            let {
                channelId: s,
                file: i,
                filename: r,
                ...a
            } = e, o = (0, m.getSignalStrength)(), d = {
                mobile_network_type: v.default.getType(),
                ...a,
                ...null != o && {
                    signal_strength: o
                }
            };
            if (g.default.get("send_fail_100")) {
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
            null != S && (S.isInstanceUILocked() ? n = {
                location: "overlay_locked_activated"
            } : !S.isInstanceUILocked() && (n = S.isPinned(I.OverlayWidgets.TEXT) ? {
                location: "overlay_unlocked_pinned"
            } : {
                location: "overlay_unlocked"
            }));
            let f = this.createResponseHandler(e.nonce, t),
                _ = new AbortController;
            if (this.startQueueMetricTimers(e.nonce), null != i && null != r && "" !== r) l.default.post({
                url: I.Endpoints.MESSAGES(s),
                fields: Object.entries(d).map(e => {
                    let [t, n] = e;
                    return {
                        name: t,
                        value: n
                    }
                }),
                attachments: [{
                    name: "file",
                    file: i,
                    filename: r
                }],
                context: n,
                oldFormErrors: !0,
                signal: _.signal,
                onRequestCreated: () => {
                    null != e.nonce && this.requests.set(e.nonce, _)
                }
            }, f);
            else {
                let t = {
                    timeout: 60 * E.default.Millis.SECOND,
                    retries: 3,
                    backoff: new u.default
                };
                l.default.post({
                    url: I.Endpoints.MESSAGES(s),
                    body: d,
                    context: n,
                    oldFormErrors: !0,
                    ...t,
                    signal: _.signal,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, _)
                    }
                }, f)
            }
        }
        handleEdit(e, t) {
            let {
                channelId: n,
                messageId: s,
                ...i
            } = e, r = new AbortController;
            l.default.patch({
                url: I.Endpoints.MESSAGE(n, s),
                body: i,
                retries: 1,
                oldFormErrors: !0,
                signal: r.signal,
                onRequestCreated: () => {
                    this.requests.set(s, r)
                }
            }, this.createResponseHandler(s, t))
        }
        handleCommand(e, t) {
            let n, {
                    applicationId: s,
                    guildId: i,
                    channelId: r,
                    data: a,
                    nonce: o,
                    attachments: u,
                    maxSizeCallback: _,
                    analytics_location: c
                } = e,
                g = {
                    type: f.InteractionTypes.APPLICATION_COMMAND,
                    application_id: s,
                    guild_id: i,
                    channel_id: r,
                    session_id: h.default.getSessionId(),
                    data: a,
                    nonce: o,
                    analytics_location: c
                };
            if (null != u) {
                g.data.attachments = [], n = [];
                g.data.attachments = u.map((e, t) => (d(e.status === C.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, T.getAttachmentPayload)(e, t)))
            }
            let m = new AbortController;
            l.default.post({
                url: I.Endpoints.INTERACTIONS,
                fields: [{
                    name: "payload_json",
                    value: JSON.stringify(g)
                }],
                attachments: n,
                signal: m.signal,
                onRequestCreated: e => {
                    this.requests.set(o, m), e.on("progress", e => {
                        let {
                            total: t
                        } = e, n = (0, p.maxFileSize)(i);
                        null != t && t > n && (this.cancelRequest(o), null == _ || _(n))
                    })
                }
            }, this.createResponseHandler(o, t))
        }
        constructor(e = 5) {
            super(new c.default("MessageQueue")), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
        }
    }
    var b = new P
}