function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102"), n("222007");
    var i, s = n("44170"),
        r = n("861001"),
        a = n("201617"),
        o = n("441822"),
        l = n("353927"),
        u = n("843455");
    let d = new a.default;
    i = class extends s.EventEmitter {
        destroy() {
            null != this.stream && (d.release(this.stream), this.stream = null), null != this.streamId && (0, o.unregisterVideoStream)(this.streamId), this.destroyed = !0
        }
        getStreamId() {
            return this.streamId
        }
        async setSource(e) {
            if (this.sourceId === e) return this.stream;
            this.sourceId = e, null != this.stream && (d.release(this.stream), this.stream = null);
            let t = await (0, r.getVideoInputDevices)();
            if (this.sourceId === l.DISABLED_DEVICE_ID) return this.setStream(new MediaStream);
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
                        throw this.emit("permission", !1), u.UserMediaErrors.PERMISSION_DENIED;
                    case "PermissionDismissedError":
                        throw this.emit("permission", !1), u.UserMediaErrors.PERMISSION_DISMISSED;
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw u.UserMediaErrors.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN"
                }
                throw e
            }
        }
        setStream(e) {
            return null != this.streamId && ((0, o.unregisterVideoStream)(this.streamId), this.streamId = null), this.stream = e, e.onaddtrack = e => this.emit("add-video-track", e), e.getVideoTracks().length > 0 && (this.streamId = (0, o.registerVideoStream)(e)), this.emit("stream", e), this.emit("video", this.getStreamId()), e
        }
        constructor(...e) {
            super(...e), this.stream = new MediaStream, this.sourceId = l.DISABLED_DEVICE_ID, this.streamId = null, this.destroyed = !1
        }
    }
}