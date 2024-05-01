function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoHealthManager: function() {
            return u
        }
    }), n("653041"), n("47120");
    var i = n("259443"),
        r = n("379649"),
        a = n("147063"),
        s = n("70956"),
        o = n("981631");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class u {
        calculateFps(e, t, n) {
            if (-1 === this.prevFramesCodec[e] || t < this.prevFramesCodec[e] || n < this.prevTimestamp[e] || n > this.prevTimestamp[e] + 1e3 * this.windowLength) return this.prevFramesCodec[e] = t, this.prevTimestamp[e] = n, this.perUserFpsWindow[e] = [], NaN;
            if (n < this.prevTimestamp[e] + 900) return NaN;
            let i = this.elapsedSeconds(n, this.prevTimestamp[e]);
            this.prevTimestamp[e] = n;
            let r = (t - this.prevFramesCodec[e]) / i;
            return this.prevFramesCodec[e] = t, r
        }
        updateFps(e, t, n) {
            if (!this.disabled && !this.streamDisabledUsers.has(e)) {
                let i = this.calculateFps(e, t, n);
                if (i < 0 || !Number.isFinite(i)) return;
                if (this.perUserFpsWindow[e].push(i), !(this.perUserFpsWindow[e].length < this.windowLength)) this.perUserFpsWindow[e].length > this.windowLength && this.perUserFpsWindow[e].shift(), this.perUserFpsWindow[e].filter(e => e < this.fpsThreshold).length >= this.fpsWindowBorderlineCount ? (this.logger.info("".concat(e, ": detected poor network quality, turning off video")), this.streamDisabledUsers.add(e), this.currentVideoAutoToggleState[e] = o.VideoToggleState.DISABLED, (0, a.default)(e, o.VideoToggleState.DISABLED), this.startReenableBackoffTimer(e)) : this.currentVideoAutoToggleState[e] === o.VideoToggleState.AUTO_PROBING && (this.currentVideoAutoToggleState[e] = o.VideoToggleState.AUTO_ENABLED, this.logger.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user ".concat(e)), (0, a.default)(e, o.VideoToggleState.AUTO_ENABLED)), this.probingUserId === e && (this.probingUserId = void 0, this.tryReenableQueue())
            }
        }
        startReenableBackoffTimer(e) {
            if (this.disabled) return;
            this.logger.info("startReenableBackoffTimer for user ".concat(e));
            let {
                lastBackoffTime: t,
                expBackoffFactor: n
            } = this.retryBackoffCache[e];
            null === t || n > 16 || this.elapsedSeconds((0, r.now)(), t) > 600 ? n = 1 : n *= 2, this.retryBackoffCache[e] = {
                lastBackoffTime: (0, r.now)(),
                expBackoffFactor: n
            };
            let i = n * this.backoffTimeSec * s.default.Millis.SECOND;
            this.logger.info("starting backoff timer with time = ".concat(i, " milliseconds")), this.timeoutIdCache[e] = setTimeout(() => {
                this.queueReenable(e)
            }, i)
        }
        queueReenable(e) {
            this.enableQueue.push(e), this.tryReenableQueue()
        }
        tryReenableQueue() {
            if (!this.disabled) {
                if (null == this.probingUserId || !(this.probingUserId in this.perUserFpsWindow))
                    for (let e = this.enableQueue.shift(); null != e && !this.reenableVideo(e););
            }
        }
        reenableVideo(e) {
            return e in this.perUserFpsWindow && (this.logger.info("reenableVideo called for user ".concat(e, " - time = ").concat((0, r.now)())), this.stateCleanupBeforeEnable(e), this.currentVideoAutoToggleState[e] = o.VideoToggleState.AUTO_PROBING, this.probingUserId = e, (0, a.default)(e, o.VideoToggleState.AUTO_PROBING), !0)
        }
        elapsedSeconds(e, t) {
            return (e - t) / 1e3
        }
        stateCleanupBeforeEnable(e) {
            this.logger.info("VideoHealthManager::stateCleanupBeforeEnable"), this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.streamDisabledUsers.delete(e)
        }
        getCurrentVideoToggleState(e) {
            return this.currentVideoAutoToggleState[e]
        }
        createUser(e) {
            this.logger.info("VideoHealthManager::createUser ".concat(e)), !(e in this.perUserFpsWindow) && (this.perUserFpsWindow[e] = [], this.prevFramesCodec[e] = -1, this.currentVideoAutoToggleState[e] = o.VideoToggleState.NONE, this.retryBackoffCache[e] = {
                lastBackoffTime: null,
                expBackoffFactor: 1
            })
        }
        deleteUser(e) {
            this.logger.info("VideoHealthManager::deleteUser ".concat(e)), delete this.perUserFpsWindow[e], delete this.prevFramesCodec[e], delete this.retryBackoffCache[e], delete this.currentVideoAutoToggleState[e], this.streamDisabledUsers.delete(e), e === this.probingUserId && (this.probingUserId = void 0, this.tryReenableQueue()), clearTimeout(this.timeoutIdCache[e]), delete this.timeoutIdCache[e]
        }
        disable() {
            for (let e in this.disabled = !0, this.perUserFpsWindow) this.deleteUser(e)
        }
        constructor(e, t, n, r) {
            l(this, "logger", new i.Logger("VideoHealthManager")), l(this, "windowLength", void 0), l(this, "fpsThreshold", void 0), l(this, "fpsWindowBorderlineCount", void 0), l(this, "backoffTimeSec", void 0), l(this, "disabled", !1), l(this, "perUserFpsWindow", {}), l(this, "prevFramesCodec", {}), l(this, "prevTimestamp", {}), l(this, "streamDisabledUsers", new Set), l(this, "retryBackoffCache", {}), l(this, "timeoutIdCache", {}), l(this, "currentVideoAutoToggleState", {}), l(this, "probingUserId", void 0), l(this, "enableQueue", []), this.windowLength = e, this.fpsThreshold = n, this.fpsWindowBorderlineCount = Math.ceil(e * t), this.backoffTimeSec = r, this.logger.info("constructor with windowLength = ".concat(this.windowLength, ",\n      fpsWindowBorderlineCount = ").concat(this.fpsWindowBorderlineCount, ",\n      fpsThreshold = ").concat(this.fpsThreshold, ",\n      backoffTimeSec = ").concat(r))
        }
    }
}