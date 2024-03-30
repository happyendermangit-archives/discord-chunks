function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoHealthManager: function() {
            return c
        }
    });
    var r = n("188129"),
        o = n("849680"),
        i = n("518101"),
        a = n("388990"),
        u = n("281767");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = function() {
        var e, t, n;

        function c(e, t, n, o) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), l(this, "logger", new r.Logger("VideoHealthManager")), l(this, "windowLength", void 0), l(this, "fpsThreshold", void 0), l(this, "fpsWindowBorderlineCount", void 0), l(this, "backoffTimeSec", void 0), l(this, "disabled", !1), l(this, "perUserFpsWindow", {}), l(this, "prevFramesCodec", {}), l(this, "prevTimestamp", {}), l(this, "streamDisabledUsers", new Set), l(this, "retryBackoffCache", {}), l(this, "timeoutIdCache", {}), l(this, "currentVideoAutoToggleState", {}), l(this, "probingUserId", void 0), l(this, "enableQueue", []), this.windowLength = e, this.fpsThreshold = n, this.fpsWindowBorderlineCount = Math.ceil(e * t), this.backoffTimeSec = o, this.logger.info("constructor with windowLength = ".concat(this.windowLength, ",\n      fpsWindowBorderlineCount = ").concat(this.fpsWindowBorderlineCount, ",\n      fpsThreshold = ").concat(this.fpsThreshold, ",\n      backoffTimeSec = ").concat(o))
        }
        return e = c, t = [{
            key: "calculateFps",
            value: function(e, t, n) {
                if (-1 === this.prevFramesCodec[e] || t < this.prevFramesCodec[e] || n < this.prevTimestamp[e] || n > this.prevTimestamp[e] + 1e3 * this.windowLength) return this.prevFramesCodec[e] = t, this.prevTimestamp[e] = n, this.perUserFpsWindow[e] = [], NaN;
                if (n < this.prevTimestamp[e] + 900) return NaN;
                var r = this.elapsedSeconds(n, this.prevTimestamp[e]);
                this.prevTimestamp[e] = n;
                var o = (t - this.prevFramesCodec[e]) / r;
                return this.prevFramesCodec[e] = t, o
            }
        }, {
            key: "updateFps",
            value: function(e, t, n) {
                var r = this;
                if (!this.disabled && !this.streamDisabledUsers.has(e)) {
                    var o = this.calculateFps(e, t, n);
                    if (o < 0 || !Number.isFinite(o)) return;
                    if (this.perUserFpsWindow[e].push(o), this.perUserFpsWindow[e].length < this.windowLength) return;
                    this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(), this.perUserFpsWindow[e].filter(function(e) {
                        return e < r.fpsThreshold
                    }).length >= this.fpsWindowBorderlineCount ? (this.logger.info("".concat(e, ": detected poor network quality, turning off video")), this.streamDisabledUsers.add(e), this.currentVideoAutoToggleState[e] = u.VideoToggleState.DISABLED, (0, i.default)(e, u.VideoToggleState.DISABLED), this.startReenableBackoffTimer(e)) : this.currentVideoAutoToggleState[e] === u.VideoToggleState.AUTO_PROBING && (this.currentVideoAutoToggleState[e] = u.VideoToggleState.AUTO_ENABLED, this.logger.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user ".concat(e)), (0, i.default)(e, u.VideoToggleState.AUTO_ENABLED)), this.probingUserId === e && (this.probingUserId = void 0, this.tryReenableQueue())
                }
            }
        }, {
            key: "startReenableBackoffTimer",
            value: function(e) {
                var t = this;
                if (!this.disabled) {
                    this.logger.info("startReenableBackoffTimer for user ".concat(e));
                    var n = this.retryBackoffCache[e],
                        r = n.lastBackoffTime,
                        i = n.expBackoffFactor;
                    null === r || i > 16 || this.elapsedSeconds((0, o.now)(), r) > 600 ? i = 1 : i *= 2, this.retryBackoffCache[e] = {
                        lastBackoffTime: (0, o.now)(),
                        expBackoffFactor: i
                    };
                    var u = i * this.backoffTimeSec * a.default.Millis.SECOND;
                    this.logger.info("starting backoff timer with time = ".concat(u, " milliseconds")), this.timeoutIdCache[e] = setTimeout(function() {
                        t.queueReenable(e)
                    }, u)
                }
            }
        }, {
            key: "queueReenable",
            value: function(e) {
                this.enableQueue.push(e), this.tryReenableQueue()
            }
        }, {
            key: "tryReenableQueue",
            value: function() {
                if (!this.disabled) {
                    if (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow))
                        for (var e = this.enableQueue.shift(); null != e && !this.reenableVideo(e););
                }
            }
        }, {
            key: "reenableVideo",
            value: function(e) {
                return e in this.perUserFpsWindow && (this.logger.info("reenableVideo called for user ".concat(e, " - time = ").concat((0, o.now)())), this.stateCleanupBeforeEnable(e), this.currentVideoAutoToggleState[e] = u.VideoToggleState.AUTO_PROBING, this.probingUserId = e, (0, i.default)(e, u.VideoToggleState.AUTO_PROBING), !0)
            }
        }, {
            key: "elapsedSeconds",
            value: function(e, t) {
                return (e - t) / 1e3
            }
        }, {
            key: "stateCleanupBeforeEnable",
            value: function(e) {
                this.logger.info("VideoHealthManager::stateCleanupBeforeEnable"), this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.streamDisabledUsers.delete(e)
            }
        }, {
            key: "getCurrentVideoToggleState",
            value: function(e) {
                return this.currentVideoAutoToggleState[e]
            }
        }, {
            key: "createUser",
            value: function(e) {
                this.logger.info("VideoHealthManager::createUser ".concat(e)), !(e in this.perUserFpsWindow) && (this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.currentVideoAutoToggleState[e] = u.VideoToggleState.NONE, this.retryBackoffCache[e] = {
                    lastBackoffTime: null,
                    expBackoffFactor: 1
                })
            }
        }, {
            key: "deleteUser",
            value: function(e) {
                this.logger.info("VideoHealthManager::deleteUser ".concat(e)), delete this.perUserFpsWindow[e], delete this.prevFramesCodec[e], delete this.retryBackoffCache[e], delete this.currentVideoAutoToggleState[e], this.streamDisabledUsers.delete(e), e === this.probingUserId && (this.probingUserId = void 0, this.tryReenableQueue()), clearTimeout(this.timeoutIdCache[e]), delete this.timeoutIdCache[e]
            }
        }, {
            key: "disable",
            value: function() {
                for (var e in this.disabled = !0, this.perUserFpsWindow) this.deleteUser(e)
            }
        }], s(e.prototype, t), n && s(e, n), c
    }()
}