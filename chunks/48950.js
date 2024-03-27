function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Span: function() {
            return a
        },
        SpanRecorder: function() {
            return i
        },
        spanStatusfromHttpCode: function() {
            return o
        }
    });
    var r = n("648238");
    class i {
        __init() {
            this.spans = []
        }
        constructor(t = 1e3) {
            i.prototype.__init.call(this), this._maxlen = t
        }
        add(t) {
            this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
        }
    }
    class a {
        __init2() {
            this.traceId = (0, r.uuid4)()
        }
        __init3() {
            this.spanId = (0, r.uuid4)().substring(16)
        }
        __init4() {
            this.startTimestamp = (0, r.timestampInSeconds)()
        }
        __init5() {
            this.tags = {}
        }
        __init6() {
            this.data = {}
        }
        __init7() {
            this.instrumenter = "sentry"
        }
        constructor(t) {
            if (a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), a.prototype.__init5.call(this), a.prototype.__init6.call(this), a.prototype.__init7.call(this), !t) return this;
            t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
        }
        startChild(t) {
            let e = new a({
                ...t,
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId
            });
            if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                let n = t && t.op || "< unknown op >",
                    i = e.transaction.name || "< unknown name >",
                    a = e.transaction.spanId,
                    o = `[Tracing] Starting '${n}' span on transaction '${i}' (${a}).`;
                e.transaction.metadata.spanMetadata[e.spanId] = {
                    logMessage: o
                }, r.logger.log(o)
            }
            return e
        }
        setTag(t, e) {
            return this.tags = {
                ...this.tags,
                [t]: e
            }, this
        }
        setData(t, e) {
            return this.data = {
                ...this.data,
                [t]: e
            }, this
        }
        setStatus(t) {
            return this.status = t, this
        }
        setHttpStatus(t) {
            this.setTag("http.status_code", String(t)), this.setData("http.response.status_code", t);
            let e = o(t);
            return "unknown_error" !== e && this.setStatus(e), this
        }
        isSuccess() {
            return "ok" === this.status
        }
        finish(t) {
            if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                let {
                    logMessage: t
                } = this.transaction.metadata.spanMetadata[this.spanId];
                t && r.logger.log(t.replace("Starting", "Finishing"))
            }
            this.endTimestamp = "number" == typeof t ? t : (0, r.timestampInSeconds)()
        }
        toTraceparent() {
            return (0, r.generateSentryTraceHeader)(this.traceId, this.spanId, this.sampled)
        }
        toContext() {
            return (0, r.dropUndefinedKeys)({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId
            })
        }
        updateWithContext(t) {
            return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
        }
        getTraceContext() {
            return (0, r.dropUndefinedKeys)({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId
            })
        }
        toJSON() {
            return (0, r.dropUndefinedKeys)({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId
            })
        }
    }

    function o(t) {
        if (t < 400 && t >= 100) return "ok";
        if (t >= 400 && t < 500) switch (t) {
            case 401:
                return "unauthenticated";
            case 403:
                return "permission_denied";
            case 404:
                return "not_found";
            case 409:
                return "already_exists";
            case 413:
                return "failed_precondition";
            case 429:
                return "resource_exhausted";
            default:
                return "invalid_argument"
        }
        if (t >= 500 && t < 600) switch (t) {
            case 501:
                return "unimplemented";
            case 503:
                return "unavailable";
            case 504:
                return "deadline_exceeded";
            default:
                return "internal_error"
        }
        return "unknown_error"
    }
}