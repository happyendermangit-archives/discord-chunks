function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("411104"), n("47120");
    var i = n("836560"),
        r = n("740197"),
        s = n("106617"),
        a = n("376398"),
        o = n("65154"),
        l = n("231338");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = new s.default;
    class _ extends i.EventEmitter {
        destroy() {
            null != this.stream && (d.release(this.stream), this.stream = null), null != this.streamId && (0, a.unregisterVideoStream)(this.streamId), this.destroyed = !0
        }
        getStreamId() {
            return this.streamId
        }
        async setSource(e) {
            if (this.sourceId === e) return this.stream;
            this.sourceId = e, null != this.stream && (d.release(this.stream), this.stream = null);
            let t = await (0, r.getVideoInputDevices)();
            if (this.sourceId === o.DISABLED_DEVICE_ID) return this.setStream(new MediaStream);
            let n = {
                width: 1280
            };
            t.some(e => e.id === this.sourceId) && (n.deviceId = this.sourceId);
            try {
                let e = await d.acquire({
                    audio: !1,
                    video: n
                });
                if (this.destroyed) throw d.release(e), Error("VideoInput: Already destroyed");
                return this.emit("permission", !0), this.setStream(e)
            } catch (e) {
                if ("string" != typeof e) switch (e.name) {
                    case "PermissionDeniedError":
                    case "NotAllowedError":
                        throw this.emit("permission", !1), l.UserMediaErrors.PERMISSION_DENIED;
                    case "PermissionDismissedError":
                        throw this.emit("permission", !1), l.UserMediaErrors.PERMISSION_DISMISSED;
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw l.UserMediaErrors.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN"
                }
                throw e
            }
        }
        setStream(e) {
            return null != this.streamId && ((0, a.unregisterVideoStream)(this.streamId), this.streamId = null), this.stream = e, e.onaddtrack = e => this.emit("add-video-track", e), e.getVideoTracks().length > 0 && (this.streamId = (0, a.registerVideoStream)(e)), this.emit("stream", e), this.emit("video", this.getStreamId()), e
        }
        constructor(...e) {
            super(...e), u(this, "stream", new MediaStream), u(this, "sourceId", o.DISABLED_DEVICE_ID), u(this, "streamId", null), u(this, "destroyed", !1)
        }
    }
}