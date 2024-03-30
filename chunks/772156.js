function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamDirector: function() {
            return f
        },
        StreamDirectorActionType: function() {
            return r
        }
    });
    var a, r, c = n("201828");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(a = r || (r = {})).STREAM = "stream", a.PAUSE = "pause", a.STOP = "stop";
    var f = function() {
        var e, t, n;

        function a(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "callback", void 0), i(this, "active", void 0), i(this, "application", void 0), this.callback = e, this.active = !1, this.application = null
        }
        return e = a, t = [{
            key: "onStreamBegin",
            value: function(e, t) {
                var n = (0, c.getInitialStreamTarget)(e, t);
                null == n || null == n.windowHandle ? this.callback({
                    type: "stop"
                }) : this._stream(n)
            }
        }, {
            key: "onStreamKilled",
            value: function() {
                this._kill()
            }
        }, {
            key: "onStreamEnd",
            value: function() {
                this._stop()
            }
        }, {
            key: "onDetectionUpdate",
            value: function(e) {
                this._update(e)
            }
        }, {
            key: "onCaptureEnd",
            value: function(e, t) {
                var n;
                (null === (n = this.application) || void 0 === n ? void 0 : n.windowHandle) === t && this._update(e)
            }
        }, {
            key: "onCaptureLegacyEnd",
            value: function(e) {
                var t;
                return (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) != null ? this.onCaptureEnd(e, this.application.windowHandle) : this._stop()
            }
        }, {
            key: "_update",
            value: function(e) {
                var t = (0, c.getStreamTarget)(e, this.application);
                if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
                this._stop()
            }
        }, {
            key: "_stream",
            value: function(e) {
                var t, n = (null === (t = this.application) || void 0 === t ? void 0 : t.windowHandle) !== e.windowHandle;
                this.active = !0, this.application = Object.assign({}, e), n && this.callback({
                    type: "stream",
                    sourceId: "window:".concat(this.application.windowHandle)
                })
            }
        }, {
            key: "_kill",
            value: function() {
                this.active = !1, this.application = null
            }
        }, {
            key: "_stop",
            value: function() {
                this.active && (this._kill(), this.callback({
                    type: "stop"
                }))
            }
        }, {
            key: "_pause",
            value: function() {
                this.active && (this.application.windowHandle = null, this.callback({
                    type: "pause"
                }))
            }
        }], o(e.prototype, t), n && o(e, n), a
    }()
}