function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDataType: function() {
            return r
        },
        getFailedMessageId: function() {
            return D
        },
        isMessageDataEdit: function() {
            return L
        }
    }), n("47120");
    var i, r, s, a, o = n("512722"),
        l = n.n(o),
        u = n("261470"),
        d = n("544891"),
        _ = n("911969"),
        c = n("367907"),
        E = n("710845"),
        I = n("432877"),
        T = n("873741"),
        f = n("314897"),
        S = n("866960"),
        h = n("70956"),
        A = n("403182"),
        m = n("651655"),
        N = n("861990"),
        p = n("141795"),
        O = n("981631");

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let C = null;
    __OVERLAY__ && (C = n("237997").default), (s = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", s.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", s.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (a = r || (r = {}))[a.SEND = 0] = "SEND", a[a.EDIT = 1] = "EDIT", a[a.COMMAND = 2] = "COMMAND";
    let g = e => 0 === e.type,
        L = e => 1 === e.type,
        D = e => g(e) ? e.message.nonce : L(e) ? e.message.messageId : e.message.data.id,
        v = [1 * h.default.Millis.MINUTE, 5 * h.default.Millis.MINUTE];
    class M extends m.default {
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
            let t = v.map(e => setTimeout(() => {
                (0, c.trackWithMetadata)(O.AnalyticEvents.SEND_MESSAGE_QUEUED, {
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
                null != n.body && (n.body.code === O.AbortCodes.SLOWMODE_RATE_LIMITED || n.body.code === O.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
                    retryAfter: n.body.retry_after * h.default.Millis.SECOND
                }) : t(null, n)
            }
        }
        handleSend(e, t) {
            let n;
            let {
                channelId: i,
                file: r,
                filename: s,
                ...a
            } = e, o = (0, T.getSignalStrength)(), l = {
                mobile_network_type: S.default.getType(),
                ...a,
                ...null != o && {
                    signal_strength: o
                }
            };
            if (I.default.get("send_fail_100")) {
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
            null != C && (C.isInstanceUILocked() ? n = {
                location: "overlay_locked_activated"
            } : !C.isInstanceUILocked() && (n = C.isPinned(O.OverlayWidgets.TEXT) ? {
                location: "overlay_unlocked_pinned"
            } : {
                location: "overlay_unlocked"
            }));
            let _ = this.createResponseHandler(e.nonce, t),
                c = new AbortController;
            if (this.startQueueMetricTimers(e.nonce), null != r && null != s && "" !== s) d.HTTP.post({
                url: O.Endpoints.MESSAGES(i),
                fields: Object.entries(l).map(e => {
                    let [t, n] = e;
                    return {
                        name: t,
                        value: n
                    }
                }),
                attachments: [{
                    name: "file",
                    file: r,
                    filename: s
                }],
                context: n,
                oldFormErrors: !0,
                signal: c.signal,
                onRequestCreated: () => {
                    null != e.nonce && this.requests.set(e.nonce, c)
                }
            }, _);
            else {
                let t = {
                    timeout: 60 * h.default.Millis.SECOND,
                    retries: 3,
                    backoff: new u.default
                };
                d.HTTP.post({
                    url: O.Endpoints.MESSAGES(i),
                    body: l,
                    context: n,
                    oldFormErrors: !0,
                    ...t,
                    signal: c.signal,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, c)
                    }
                }, _)
            }
        }
        handleEdit(e, t) {
            let {
                channelId: n,
                messageId: i,
                ...r
            } = e, s = new AbortController;
            d.HTTP.patch({
                url: O.Endpoints.MESSAGE(n, i),
                body: r,
                retries: 1,
                oldFormErrors: !0,
                signal: s.signal,
                onRequestCreated: () => {
                    this.requests.set(i, s)
                }
            }, this.createResponseHandler(i, t))
        }
        handleCommand(e, t) {
            let n, {
                    applicationId: i,
                    guildId: r,
                    channelId: s,
                    data: a,
                    nonce: o,
                    attachments: u,
                    maxSizeCallback: c,
                    analytics_location: E
                } = e,
                I = {
                    type: _.InteractionTypes.APPLICATION_COMMAND,
                    application_id: i,
                    guild_id: r,
                    channel_id: s,
                    session_id: f.default.getSessionId(),
                    data: a,
                    nonce: o,
                    analytics_location: E
                };
            if (null != u) {
                I.data.attachments = [], n = [];
                I.data.attachments = u.map((e, t) => (l()(e.status === p.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, N.getAttachmentPayload)(e, t)))
            }
            let T = new AbortController;
            d.HTTP.post({
                url: O.Endpoints.INTERACTIONS,
                fields: [{
                    name: "payload_json",
                    value: JSON.stringify(I)
                }],
                attachments: n,
                signal: T.signal,
                onRequestCreated: e => {
                    this.requests.set(o, T), e.on("progress", e => {
                        let {
                            total: t
                        } = e, n = (0, A.maxFileSize)(r);
                        null != t && t > n && (this.cancelRequest(o), null == c || c(n))
                    })
                }
            }, this.createResponseHandler(o, t))
        }
        constructor(e = 5) {
            super(new E.default("MessageQueue")), R(this, "maxSize", void 0), R(this, "requests", void 0), R(this, "analyticsTimeouts", void 0), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
        }
    }
    t.default = new M
}