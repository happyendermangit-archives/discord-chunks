function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return h
        },
        b: function() {
            return p
        },
        d: function() {
            return D
        },
        e: function() {
            return g
        },
        f: function() {
            return C
        }
    });
    var n, i, o, a = r("193809");
    r("222007"), r("424973"), r("70102"), r("511434"), r("313619"), r("654714"), r("287168"), r("956660");
    var u = r("968839"),
        s = r("790703"),
        l = r("86441"),
        c = r("601801"),
        d = r("846033"),
        f = {
            dependencies: {
                "@dotlottie/dotlottie-js": "0.6.0",
                "@lottiefiles/relottie": "1.0.0",
                "@lottiefiles/relottie-style": "0.4.1",
                "@preact/signals-core": "^1.2.3",
                howler: "^2.2.3",
                "lottie-web": "^5.12.2",
                xstate: "^4.38.1"
            }
        };
    var h = (n = h || {}, n.Complete = "complete", n.DataFail = "data_fail", n.DataReady = "data_ready", n.Error = "error", n.Frame = "frame", n.Freeze = "freeze", n.LoopComplete = "loopComplete", n.Pause = "pause", n.Play = "play", n.Ready = "ready", n.Stop = "stop", n.VisibilityChange = "visibilityChange", n),
        p = (i = p || {}, i.Completed = "completed", i.Error = "error", i.Fetching = "fetching", i.Frozen = "frozen", i.Initial = "initial", i.Loading = "loading", i.Paused = "paused", i.Playing = "playing", i.Ready = "ready", i.Stopped = "stopped", i),
        v = (o = v || {}, o.Bounce = "bounce", o.Normal = "normal", o),
        D = {
            autoplay: !1,
            direction: 1,
            hover: !1,
            intermission: 0,
            loop: !1,
            playMode: "normal",
            speed: 1,
            defaultTheme: ""
        },
        g = {
            activeStateId: "",
            autoplay: !1,
            currentState: "initial",
            frame: 0,
            seeker: 0,
            direction: 1,
            hover: !1,
            loop: !1,
            playMode: "normal",
            speed: 1,
            background: "transparent",
            intermission: 0,
            currentAnimationId: void 0,
            visibilityPercentage: 0
        },
        C = class {
            _listenToHover() {
                var e, t, r, n;
                let i = () => {
                        this._hover && "playing" !== this.currentState && this.play()
                    },
                    o = () => {
                        this._hover && "playing" === this.currentState && this.stop()
                    };
                null == (e = this._container) || e.removeEventListener("mouseenter", i), null == (t = this._container) || t.removeEventListener("mouseleave", o), null == (r = this._container) || r.addEventListener("mouseleave", o), null == (n = this._container) || n.addEventListener("mouseenter", i)
            }
            _onVisibilityChange() {
                !this._lottie || typeof document > "u" || (document.hidden && "playing" === this.currentState ? this.freeze() : "frozen" === this.currentState && this.unfreeze())
            }
            _listenToVisibilityChange() {
                "u" > typeof document && "u" > typeof document.hidden && document.addEventListener("visibilitychange", () => this._onVisibilityChange())
            }
            _getOption(e) {
                var t;
                if ("u" > typeof this._userPlaybackOptions[e]) return this._userPlaybackOptions[e];
                let r = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.animations.find(e => e.id === this._currentAnimationId);
                return r && "u" > typeof r[e] ? r[e] : D[e]
            }
            _getPlaybackOptions() {
                let e = {};
                for (let t in D) "u" > typeof D[t] && (e[t] = this._getOption(t));
                return e
            }
            _setPlayerState(e) {
                var t, r, n;
                let i = e(this._getPlaybackOptions());
                try {
                    d.a._parse(i)
                } catch {
                    (0, d.j)("Invalid PlaybackOptions, ".concat(JSON.stringify(i, null, 2)));
                    return
                }
                "u" > typeof i.defaultTheme && (this._defaultTheme = i.defaultTheme), "u" > typeof i.playMode && (this._mode = i.playMode), "u" > typeof i.intermission && (this._intermission = i.intermission), "u" > typeof i.hover && (this._hover = i.hover), "u" > typeof i.loop && (this.clearCountTimer(), this._loop = i.loop, this._counter = 0, null == (t = this._lottie) || t.setLoop("number" == typeof i.loop || i.loop)), "u" > typeof i.speed && (null == (r = this._lottie) || r.setSpeed(i.speed)), "u" > typeof i.autoplay && this._lottie && (this._lottie.autoplay = i.autoplay), "u" > typeof i.direction && (null == (n = this._lottie) || n.setDirection(i.direction))
            }
            _getOptionsFromAnimation(e) {
                let {
                    id: t,
                    ...r
                } = e;
                return {
                    ...D,
                    ...r
                }
            }
            _updateTestData() {
                this._testId && this._lottie && (window.dotLottiePlayer || (window.dotLottiePlayer = {
                    [this._testId]: {}
                }), window.dotLottiePlayer[this._testId] = {
                    direction: this._lottie.playDirection,
                    currentState: this._currentState,
                    loop: this.loop,
                    mode: this._mode,
                    speed: this._lottie.playSpeed
                })
            }
            setContainer(e) {
                e !== this._container && (this._container = e, this.setBackground(this._background), this._listenToHover())
            }
            get currentState() {
                return this._currentState
            }
            clearCountTimer() {
                this._counterInterval && clearInterval(this._counterInterval)
            }
            setCurrentState(e) {
                this._currentState = e, this._notify(), this._updateTestData()
            }
            static isPathJSON(e) {
                var t;
                return (null == (t = e.split(".").pop()) ? void 0 : t.toLowerCase()) === "json"
            }
            get src() {
                return this._src
            }
            updateSrc(e) {
                this._src !== e && ("string" == typeof e ? this._src = e : this._src = Object.assign({}, e), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load())
            }
            get intermission() {
                return this._intermission
            }
            get hover() {
                return this._hover
            }
            setHover(e) {
                "boolean" == typeof e && (this._hover = e, this._userPlaybackOptions.hover = e, this._notify())
            }
            setIntermission(e) {
                this._intermission = e, this._userPlaybackOptions.intermission = e, this._notify()
            }
            get mode() {
                return this._mode
            }
            get animations() {
                return this._dotLottieLoader.animationsMap
            }
            get themes() {
                return this._dotLottieLoader.themeMap
            }
            setMode(e) {
                "string" == typeof e && (this._mode = e, this._userPlaybackOptions.playMode = e, this._setPlayerState(() => ({
                    playMode: e
                })), this._notify(), this._updateTestData())
            }
            get container() {
                if (this._container) return this._container
            }
            goToAndPlay(e, t, r) {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("goToAndPlay() Can't use whilst loading.");
                    return
                }
                this._lottie.goToAndPlay(e, t, r), this.setCurrentState("playing")
            }
            goToAndStop(e, t, r) {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("goToAndStop() Can't use whilst loading.");
                    return
                }
                this._lottie.goToAndStop(e, t, r), this.setCurrentState("stopped")
            }
            seek(e) {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("seek() Can't use whilst loading.");
                    return
                }
                let t = e;
                "number" == typeof t && (t = Math.round(t));
                let r = /^(\d+)(%?)$/u.exec(t.toString());
                if (!r) return;
                let n = "%" === r[2] ? this.totalFrames * Number(r[1]) / 100 : r[1];
                void 0 !== n && (this._lottie.goToAndPlay(n, !0), "playing" === this.currentState ? this.play() : "frozen" === this.currentState ? this.freeze() : this.pause())
            }
            _areNumbersInRange(e, t) {
                return e >= 0 && e <= 1 && t >= 0 && t <= 1
            }
            _updatePosition(e, t, r) {
                let [n, i] = null != e ? e : [0, this.totalFrames - 1], [o, a] = null != t ? t : [0, 1];
                if (!this._areNumbersInRange(o, a)) {
                    (0, d.i)("threshold values must be between 0 and 1");
                    return
                }
                if (this.container) {
                    let {
                        height: e,
                        top: t
                    } = this.container.getBoundingClientRect(), u = (window.innerHeight - t) / (window.innerHeight + e), s = n + Math.round((u - o) / (a - o) * (i - n));
                    r && r(u), this.goToAndStop(s, !0), (s >= i || u >= a) && this._handleAnimationComplete()
                }
                this._scrollTicking = !1
            }
            _requestTick(e, t, r) {
                this._scrollTicking || (requestAnimationFrame(() => this._updatePosition(e, t, r)), this._scrollTicking = !0)
            }
            playOnScroll(e) {
                this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = () => this._requestTick(null == e ? void 0 : e.segments, null == e ? void 0 : e.threshold, null == e ? void 0 : e.positionCallback), window.addEventListener("scroll", this._scrollCallback)
            }
            stopPlayOnScroll() {
                this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0)
            }
            stopPlayOnShow() {
                this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0)
            }
            addIntersectionObserver(e) {
                if (!this.container) throw (0, d.h)("Can't play on show, player container element not available.");
                let t = {
                    root: null,
                    rootMargin: "0px",
                    threshold: null != e && e.threshold ? e.threshold : [0, 1]
                };
                this._onShowIntersectionObserver = new IntersectionObserver(t => {
                    t.forEach(t => {
                        var r, n;
                        this._visibilityPercentage = 100 * t.intersectionRatio, t.isIntersecting ? (null != e && e.callbackOnIntersect && e.callbackOnIntersect(this._visibilityPercentage), null == (r = this._container) || r.dispatchEvent(new Event("visibilityChange"))) : null != e && e.callbackOnIntersect && (e.callbackOnIntersect(0), null == (n = this._container) || n.dispatchEvent(new Event("visibilityChange")))
                    })
                }, t), this._onShowIntersectionObserver.observe(this.container)
            }
            playOnShow(e) {
                var t;
                if (this.stop(), !this.container) throw (0, d.h)("Can't play on show, player container element not available.");
                this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
                    threshold: null != (t = null == e ? void 0 : e.threshold) ? t : [],
                    callbackOnIntersect: e => {
                        0 === e ? this.pause() : this.play()
                    }
                })
            }
            _validatePlaybackOptions(e) {
                if (!e) return {};
                let t = {};
                for (let [r, n] of Object.entries(e)) switch (r) {
                    case "autoplay":
                        "boolean" == typeof n && (t.autoplay = n);
                        break;
                    case "direction":
                        "number" == typeof n && [1, -1].includes(n) && (t.direction = n);
                        break;
                    case "loop":
                        ("boolean" == typeof n || "number" == typeof n) && (t.loop = n);
                        break;
                    case "playMode":
                        "string" == typeof n && ["normal", "bounce"].includes(n) && (t.playMode = n);
                        break;
                    case "speed":
                        "number" == typeof n && (t.speed = n);
                        break;
                    case "themeColor":
                        "string" == typeof n && (t.themeColor = n);
                        break;
                    case "hover":
                        "boolean" == typeof n && (t.hover = n);
                        break;
                    case "intermission":
                        "number" == typeof n && (t.intermission = n);
                        break;
                    case "defaultTheme":
                        "string" == typeof n && (t.defaultTheme = n)
                }
                return this._requireValidPlaybackOptions(t), t
            }
            _requireAnimationsInTheManifest() {
                var e;
                if (!(null != (e = this._dotLottieLoader.manifest) && e.animations.length)) throw (0, d.h)("No animations found in manifest.")
            }
            _requireAnimationsToBeLoaded() {
                if (0 === this._dotLottieLoader.animationsMap.size) throw (0, d.h)("No animations have been loaded.")
            }
            async play(e, t) {
                var r, n;
                if (["initial", "loading"].includes(this._currentState)) {
                    (0, d.j)("Player unable to play whilst loading.");
                    return
                }
                if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !e) {
                    -1 === this._lottie.playDirection && 0 === this._lottie.currentFrame ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
                    return
                }
                if ("number" == typeof e) {
                    let n = null == (r = this._dotLottieLoader.manifest) ? void 0 : r.animations[e];
                    if (!n) throw (0, d.h)("animation not found.");
                    "function" == typeof t ? await this.render({
                        id: n.id,
                        ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(n))
                    }) : await this.render({
                        id: n.id
                    })
                }
                if ("string" == typeof e) {
                    let r = null == (n = this._dotLottieLoader.manifest) ? void 0 : n.animations.find(t => t.id === e);
                    if (!r) throw (0, d.h)("animation not found.");
                    "function" == typeof t ? await this.render({
                        id: r.id,
                        ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                    }) : await this.render({
                        id: r.id
                    })
                }
            }
            playSegments(e, t) {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("playSegments() Can't use whilst loading.");
                    return
                }
                this._lottie.playSegments(e, t), this.setCurrentState("playing")
            }
            resetSegments(e) {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("resetSegments() Can't use whilst loading.");
                    return
                }
                this._lottie.resetSegments(e)
            }
            togglePlay() {
                "playing" === this.currentState ? this.pause() : this.play()
            }
            _getAnimationByIdOrIndex(e) {
                var t, r;
                if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), "number" == typeof e) {
                    let r = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.animations[e];
                    if (!r) throw (0, d.h)("animation not found.");
                    return r
                }
                if ("string" == typeof e) {
                    let t = null == (r = this._dotLottieLoader.manifest) ? void 0 : r.animations.find(t => t.id === e);
                    if (!t) throw (0, d.h)("animation not found.");
                    return t
                }
                throw (0, d.h)("first param must be a number or string")
            }
            get activeAnimationId() {
                return this._getActiveAnimationId()
            }
            get currentAnimationId() {
                return this._currentAnimationId
            }
            get activeStateId() {
                return this._activeStateId
            }
            async _startInteractivity(e) {
                if (!this._inInteractiveMode) {
                    (0, d.i)("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
                    return
                }
                if (0 === this._dotLottieLoader.stateMachinesMap.size && await this._dotLottieLoader.getStateMachines(), 0 === this._dotLottieLoader.stateMachinesMap.size) throw (0, d.h)("No interactivity states are available.");
                if ("undefined" === e) throw (0, d.h)("stateId is not specified.");
                this._stateMachineManager || (this._stateMachineManager = await (0, s.a)(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(e)
            }
            enterInteractiveMode(e) {
                var t;
                if (e) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
                    ...this._userPlaybackOptions
                }), this._inInteractiveMode && (null == (t = this._stateMachineManager) || t.stop()), this._activeStateId = e, this._inInteractiveMode = !0, this._startInteractivity(e);
                else throw (0, d.h)("stateId must be a non-empty string.")
            }
            exitInteractiveMode() {
                var e;
                this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", null == (e = this._stateMachineManager) || e.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
                    ...this._prevUserPlaybackOptions
                }, this._prevUserPlaybackOptions = {}, this.reset())
            }
            reset() {
                var e;
                let t = this._getActiveAnimationId(),
                    r = null == (e = this._dotLottieLoader.manifest) ? void 0 : e.animations.find(e => e.id === t);
                if (this._inInteractiveMode && this.exitInteractiveMode(), !r) throw (0, d.h)("animation not found.");
                this.play(t)
            }
            previous(e) {
                if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, d.h)("manifest not found.");
                if (this._inInteractiveMode) {
                    (0, d.j)("previous() is not supported in interactive mode.");
                    return
                }
                let t = this._dotLottieLoader.manifest.animations.findIndex(e => e.id === this._currentAnimationId);
                if (-1 === t) throw (0, d.h)("animation not found.");
                let r = this._dotLottieLoader.manifest.animations[(t - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
                if (!r || !r.id) throw (0, d.h)("animation not found.");
                "function" == typeof e ? this.render({
                    id: r.id,
                    ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                }) : this.render({
                    id: r.id
                })
            }
            next(e) {
                if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, d.h)("manifest not found.");
                if (this._inInteractiveMode) {
                    (0, d.j)("next() is not supported in interactive mode.");
                    return
                }
                let t = this._dotLottieLoader.manifest.animations.findIndex(e => e.id === this._currentAnimationId);
                if (-1 === t) throw (0, d.h)("animation not found.");
                let r = this._dotLottieLoader.manifest.animations[(t + 1) % this._dotLottieLoader.manifest.animations.length];
                if (!r || !r.id) throw (0, d.h)("animation not found.");
                "function" == typeof e ? this.render({
                    id: r.id,
                    ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                }) : this.render({
                    id: r.id
                })
            }
            getManifest() {
                return this._dotLottieLoader.manifest
            }
            resize() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("resize() Can't use whilst loading.");
                    return
                }
                this._lottie.resize()
            }
            stop() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("stop() Can't use whilst loading.");
                    return
                }
                this.clearCountTimer(), this._counter = 0, this._setPlayerState(() => ({
                    direction: this._getOption("direction")
                })), this._lottie.stop(), this.setCurrentState("stopped")
            }
            pause() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("pause() Can't use whilst loading.");
                    return
                }
                this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused")
            }
            freeze() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("freeze() Can't use whilst loading.");
                    return
                }
                "frozen" !== this.currentState && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen")
            }
            unfreeze() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("unfreeze() Can't use whilst loading.");
                    return
                }
                "playing" === this._stateBeforeFreeze ? this.play() : this.pause()
            }
            destroy() {
                var e, t;
                null != (e = this._container) && e.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach(e => {
                    e.unload()
                }), this._audios = []), this.clearCountTimer(), "u" > typeof document && document.removeEventListener("visibilitychange", () => this._onVisibilityChange()), this._counter = 0, null == (t = this._lottie) || t.destroy(), this._lottie = void 0
            }
            getAnimationInstance() {
                return this._lottie
            }
            static getLottieWebVersion() {
                return "".concat(f.dependencies["lottie-web"])
            }
            addEventListener(e, t) {
                var r, n, i;
                this._listeners.has(e) || this._listeners.set(e, new Set), null == (r = this._listeners.get(e)) || r.add(t);
                try {
                    "complete" === e ? null == (n = this._container) || n.addEventListener(e, t) : null == (i = this._lottie) || i.addEventListener(e, t)
                } catch (e) {
                    (0, d.i)("addEventListener ".concat(e))
                }
            }
            getState() {
                var e, t, r, n, i, o, a;
                return {
                    autoplay: null != (t = null == (e = this._lottie) ? void 0 : e.autoplay) && t,
                    currentState: this._currentState,
                    frame: this._frame,
                    visibilityPercentage: this._visibilityPercentage,
                    seeker: this._seeker,
                    direction: null != (n = null == (r = this._lottie) ? void 0 : r.playDirection) ? n : 1,
                    hover: this._hover,
                    loop: this._loop || !1,
                    playMode: this._mode,
                    speed: null != (o = null == (i = this._lottie) ? void 0 : i.playSpeed) ? o : 1,
                    background: this._background,
                    intermission: this._intermission,
                    defaultTheme: this._defaultTheme,
                    currentAnimationId: this._currentAnimationId,
                    activeStateId: null != (a = this._activeStateId) ? a : ""
                }
            }
            _notify() {
                this.state.setState(this.getState())
            }
            get totalFrames() {
                var e;
                return (null == (e = this._lottie) ? void 0 : e.totalFrames) || 0
            }
            get direction() {
                return this._lottie ? this._lottie.playDirection : 1
            }
            setDirection(e) {
                this._requireValidDirection(e), this._setPlayerState(() => ({
                    direction: e
                })), this._userPlaybackOptions.direction = e
            }
            get speed() {
                var e;
                return (null == (e = this._lottie) ? void 0 : e.playSpeed) || 1
            }
            setSpeed(e) {
                this._requireValidSpeed(e), this._setPlayerState(() => ({
                    speed: e
                })), this._userPlaybackOptions.speed = e
            }
            get autoplay() {
                var e, t;
                return null != (t = null == (e = this._lottie) ? void 0 : e.autoplay) && t
            }
            setAutoplay(e) {
                if (this._requireValidAutoplay(e), !this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("setAutoplay() Can't use whilst loading.");
                    return
                }
                this._setPlayerState(() => ({
                    autoplay: e
                })), this._userPlaybackOptions.autoplay = e
            }
            toggleAutoplay() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("toggleAutoplay() Can't use whilst loading.");
                    return
                }
                this.setAutoplay(!this._lottie.autoplay)
            }
            get defaultTheme() {
                return this._defaultTheme
            }
            setDefaultTheme(e) {
                this._setPlayerState(() => ({
                    defaultTheme: e
                })), this._userPlaybackOptions.defaultTheme = e, this._animation && this.render()
            }
            get loop() {
                return this._loop
            }
            setLoop(e) {
                this._requireValidLoop(e), this._setPlayerState(() => ({
                    loop: e
                })), this._userPlaybackOptions.loop = e
            }
            toggleLoop() {
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("toggleLoop() Can't use whilst loading.");
                    return
                }
                this.setLoop(!this._loop)
            }
            get background() {
                return this._background
            }
            setBackground(e) {
                this._requireValidBackground(e), this._background = e, this._container && (this._container.style.backgroundColor = e)
            }
            get _frame() {
                return this._lottie ? "completed" === this.currentState ? -1 === this.direction ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0
            }
            get _seeker() {
                return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0
            }
            async revertToManifestValues(e) {
                var t;
                let r;
                r = Array.isArray(e) && 0 !== e.length ? e : ["autoplay", "defaultTheme", "direction", "hover", "intermission", "loop", "playMode", "speed", "activeAnimationId"];
                let n = !1;
                if (r.includes("activeAnimationId")) {
                    let e = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.activeAnimationId,
                        r = this._getAnimationByIdOrIndex(e || 0);
                    this._activeAnimationId = e, await this._setCurrentAnimation(r.id), n = !0
                }
                r.forEach(e => {
                    switch (e) {
                        case "autoplay":
                            delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                            break;
                        case "defaultTheme":
                            delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                            break;
                        case "direction":
                            delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                            break;
                        case "hover":
                            delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                            break;
                        case "intermission":
                            delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                            break;
                        case "loop":
                            delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                            break;
                        case "playMode":
                            delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                            break;
                        case "speed":
                            delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"))
                    }
                }), n && this.render()
            }
            removeEventListener(e, t) {
                var r, n, i;
                try {
                    "complete" === e ? null == (r = this._container) || r.removeEventListener(e, t) : null == (n = this._lottie) || n.removeEventListener(e, t), null == (i = this._listeners.get(e)) || i.delete(t)
                } catch (e) {
                    (0, d.i)("removeEventListener", e)
                }
            }
            _handleAnimationComplete() {
                var e;
                "number" == typeof this._loop && this.stop();
                let t = -1 === this.direction ? 0 : this.totalFrames;
                this.goToAndStop(t, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), null == (e = this._container) || e.dispatchEvent(new Event("complete"))
            }
            addEventListeners() {
                var e;
                if (!this._lottie || ["loading"].includes(this._currentState)) {
                    (0, d.j)("addEventListeners() Can't use whilst loading.");
                    return
                }
                for (let [t, r] of(this._lottie.addEventListener("enterFrame", () => {
                        var e;
                        if (!this._lottie) {
                            (0, d.j)("enterFrame event : Lottie is undefined.");
                            return
                        }
                        0 === Math.floor(this._lottie.currentFrame) && -1 === this.direction && (null == (e = this._container) || e.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify()
                    }), this._lottie.addEventListener("loopComplete", () => {
                        var e;
                        if (!this._lottie) {
                            (0, d.j)("loopComplete event : Lottie is undefined.");
                            return
                        }
                        null == (e = this._container) || e.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
                        let t = this._lottie.playDirection;
                        if ("number" == typeof this._loop && this._loop > 0 && (this._counter += "bounce" === this._mode ? .5 : 1, this._counter >= this._loop)) {
                            this._handleAnimationComplete();
                            return
                        }
                        "bounce" === this._mode && "number" == typeof t && (t = -1 * Number(t));
                        let r = -1 === t ? this._lottie.totalFrames - 1 : 0;
                        this.intermission ? (this.goToAndPlay(r, !0), this.pause(), this._counterInterval = window.setTimeout(() => {
                            this._lottie && (this._setPlayerState(() => ({
                                direction: t
                            })), this.goToAndPlay(r, !0))
                        }, this._intermission)) : (this._setPlayerState(() => ({
                            direction: t
                        })), this.goToAndPlay(-1 === t ? this.totalFrames - 1 : 0, !0))
                    }), this._lottie.addEventListener("complete", () => {
                        if (this._lottie && !1 === this._loop && "bounce" === this._mode) {
                            if (this._counter += .5, this._counter >= 1) {
                                this._handleAnimationComplete();
                                return
                            }
                            this._counterInterval = window.setTimeout(() => {
                                if (!this._lottie) return;
                                let e = this._lottie.playDirection;
                                "bounce" === this._mode && "number" == typeof e && (e = -1 * Number(e));
                                let t = -1 === e ? this.totalFrames - 1 : 0;
                                this._setPlayerState(() => ({
                                    direction: e
                                })), this.goToAndPlay(t, !0)
                            }, this._intermission)
                        } else this._handleAnimationComplete()
                    }), this._listeners))
                    if ("complete" === t)
                        for (let n of r) null == (e = this._container) || e.addEventListener(t, n);
                    else
                        for (let e of r) this._lottie.addEventListener(t, e)
            }
            async _setCurrentAnimation(e) {
                this._currentState = "loading";
                let t = await this._dotLottieLoader.getAnimation(e);
                this._currentAnimationId = e, this._animation = t, this._currentState = "ready"
            }
            async _getAudioFactory() {
                if (this._animation && (0, d.m)(this._animation)) {
                    let {
                        DotLottieAudio: e
                    } = await r.el("930400").then(r.bind(r, "930400"));
                    return t => {
                        let r = new e({
                            src: [t]
                        });
                        return this._audios.push(r), r
                    }
                }
                return null
            }
            async render(e) {
                var t, r, n, i, o, a, u, s, c, f, h, p, v, g, C, m, y, E;
                if (null != e && e.id) await this._setCurrentAnimation(e.id);
                else if (!this._animation) throw (0, d.h)("no animation selected");
                let B = null != (t = D.loop) && t,
                    b = null != (r = D.autoplay) && r,
                    A = null != (n = D.playMode) ? n : "normal",
                    w = null != (i = D.intermission) ? i : 0,
                    F = null != (o = D.hover) && o,
                    _ = null != (a = D.direction) ? a : 1,
                    O = null != (u = D.speed) ? u : 1,
                    x = null != (s = D.defaultTheme) ? s : "";
                B = null != (c = null == e ? void 0 : e.loop) ? c : this._getOption("loop"), b = null != (f = null == e ? void 0 : e.autoplay) ? f : this._getOption("autoplay"), A = null != (h = null == e ? void 0 : e.playMode) ? h : this._getOption("playMode"), w = null != (p = null == e ? void 0 : e.intermission) ? p : this._getOption("intermission"), F = null != (v = null == e ? void 0 : e.hover) ? v : this._getOption("hover"), _ = null != (g = null == e ? void 0 : e.direction) ? g : this._getOption("direction"), O = null != (C = null == e ? void 0 : e.speed) ? C : this._getOption("speed"), x = null != (m = null == e ? void 0 : e.defaultTheme) ? m : this._getOption("defaultTheme");
                let k = {
                        ...this._animationConfig,
                        autoplay: !F && b,
                        loop: "number" == typeof B || B,
                        renderer: this._worker ? "svg" : null != (y = this._animationConfig.renderer) ? y : "svg"
                    },
                    [P, S, T] = await Promise.all([this._dotLottieLoader.getTheme(x), this._getLottiePlayerInstance(), this._getAudioFactory()]);
                if (P && this._animation ? this._animation = await (0, l.a)(this._animation, P) : this._animation = await this._dotLottieLoader.getAnimation(null != (E = this._currentAnimationId) ? E : ""), this._activeStateId && !this._inInteractiveMode) {
                    this.enterInteractiveMode(this._activeStateId);
                    return
                }
                this.destroy(), this._setPlayerState(() => ({
                    defaultTheme: x,
                    playMode: A,
                    intermission: w,
                    hover: F,
                    loop: B
                })), T ? this._lottie = S.loadAnimation({
                    ...k,
                    container: this._container,
                    animationData: this._animation,
                    audioFactory: T
                }) : this._lottie = S.loadAnimation({
                    ...k,
                    container: this._container,
                    animationData: this._animation
                }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = () => {
                    var e;
                    null == (e = this._lottie) || e.playSegments([0, this._lottie.totalFrames], !0)
                }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(() => ({
                    direction: _,
                    speed: O
                })), b && !F && this.play(), this._updateTestData()
            }
            async _getLottiePlayerInstance() {
                var e;
                let t = null != (e = this._animationConfig.renderer) ? e : "svg",
                    n;
                if (this._worker) return "svg" !== t && (0, d.j)("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), (n = await r.el("394266").then(r.bind(r, "394266"))).default;
                switch (t) {
                    case "svg":
                        n = this._light ? await r.el("566128").then(r.bind(r, "566128")) : await r.el("452454").then(r.bind(r, "452454"));
                        break;
                    case "canvas":
                        n = this._light ? await r.el("722650").then(r.bind(r, "722650")) : await r.el("859346").then(r.bind(r, "859346"));
                        break;
                    case "html":
                        n = this._light ? await r.el("445247").then(r.bind(r, "445247")) : await r.el("292885").then(r.bind(r, "292885"));
                        break;
                    default:
                        throw Error("Invalid renderer: ".concat(t))
                }
                return n.default
            }
            _getActiveAnimationId() {
                var e, t, r, n;
                let i = this._dotLottieLoader.manifest;
                return null != (n = null != (r = null != (e = this._activeAnimationId) ? e : null == i ? void 0 : i.activeAnimationId) ? r : null == (t = null == i ? void 0 : i.animations[0]) ? void 0 : t.id) ? n : void 0
            }
            async load(e) {
                if ("loading" === this._currentState) {
                    (0, d.j)("Loading in progress..");
                    return
                }
                try {
                    if (this.setCurrentState("loading"), "string" == typeof this._src) {
                        if ((0, d.n)(this._src)) {
                            let e = JSON.parse(this._src);
                            this._dotLottieLoader.loadFromLottieJSON(e)
                        } else {
                            let e = new URL(this._src, window.location.href);
                            await this._dotLottieLoader.loadFromUrl(e.toString())
                        }
                    } else if ("object" == typeof this._src && (0, d.l)(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
                    else throw (0, d.h)("Invalid src provided");
                    if (!this._dotLottieLoader.manifest) throw (0, d.h)("No manifest found");
                    let t = this._getActiveAnimationId();
                    if (!t) throw (0, d.h)("No active animation found");
                    await this._setCurrentAnimation(t), await this.render(e)
                } catch (e) {
                    this.setCurrentState("error"), e instanceof Error && (0, d.i)("Error loading animation: ".concat(e.message))
                }
            }
            setErrorState(e) {
                this.setCurrentState("error"), (0, d.i)(e)
            }
            _requireValidDirection(e) {
                if (-1 !== e && 1 !== e) throw (0, d.h)("Direction can only be -1 (backwards) or 1 (forwards)")
            }
            _requireValidIntermission(e) {
                if (e < 0 || !Number.isInteger(e)) throw (0, d.h)("intermission must be a positive number")
            }
            _requireValidLoop(e) {
                if ("number" == typeof e && (!Number.isInteger(e) || e < 0)) throw (0, d.h)("loop must be a positive number or boolean")
            }
            _requireValidSpeed(e) {
                if ("number" != typeof e) throw (0, d.h)("speed must be a number")
            }
            _requireValidBackground(e) {
                if ("string" != typeof e) throw (0, d.h)("background must be a string")
            }
            _requireValidAutoplay(e) {
                if ("boolean" != typeof e) throw (0, d.h)("autoplay must be a boolean")
            }
            _requireValidPlaybackOptions(e) {
                e.direction && this._requireValidDirection(e.direction), e.intermission && this._requireValidIntermission(e.intermission), e.loop && this._requireValidLoop(e.loop), e.speed && this._requireValidSpeed(e.speed)
            }
            constructor(e, t, r) {
                (0, a._)(this, "_lottie", void 0), (0, a._)(this, "_src", void 0), (0, a._)(this, "_animationConfig", void 0), (0, a._)(this, "_prevUserPlaybackOptions", {}), (0, a._)(this, "_userPlaybackOptions", void 0), (0, a._)(this, "_hover", !1), (0, a._)(this, "_loop", !1), (0, a._)(this, "_counter", 0), (0, a._)(this, "_intermission", 0), (0, a._)(this, "_counterInterval", null), (0, a._)(this, "_container", null), (0, a._)(this, "_name", void 0), (0, a._)(this, "_mode", "normal"), (0, a._)(this, "_background", "transparent"), (0, a._)(this, "_animation", void 0), (0, a._)(this, "_defaultTheme", void 0), (0, a._)(this, "_activeAnimationId", void 0), (0, a._)(this, "_currentAnimationId", void 0), (0, a._)(this, "_testId", void 0), (0, a._)(this, "_listeners", new Map), (0, a._)(this, "_currentState", "initial"), (0, a._)(this, "_stateBeforeFreeze", "initial"), (0, a._)(this, "state", new c.a(g)), (0, a._)(this, "_light", !1), (0, a._)(this, "_worker", !1), (0, a._)(this, "_dotLottieLoader", new u.a), (0, a._)(this, "_activeStateId", void 0), (0, a._)(this, "_inInteractiveMode", !1), (0, a._)(this, "_scrollTicking", !1), (0, a._)(this, "_scrollCallback", void 0), (0, a._)(this, "_onShowIntersectionObserver", void 0), (0, a._)(this, "_visibilityPercentage", 0), (0, a._)(this, "_audios", []), (0, a._)(this, "_stateMachineManager", void 0), "string" == typeof e ? this._src = e : this._src = Object.assign({}, e), null != r && r.testId && (this._testId = r.testId), this._defaultTheme = (null == r ? void 0 : r.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(r || {}), "string" == typeof(null == r ? void 0 : r.activeAnimationId) && (this._activeAnimationId = r.activeAnimationId), this._container = t || null, "string" == typeof(null == r ? void 0 : r.background) && this.setBackground(r.background), "u" > typeof(null == r ? void 0 : r.activeStateId) && (this._activeStateId = r.activeStateId);
                let {
                    rendererSettings: n,
                    ...i
                } = r || {};
                this._animationConfig = {
                    loop: !1,
                    autoplay: !1,
                    renderer: "svg",
                    rendererSettings: {
                        clearCanvas: !0,
                        progressiveLoad: !0,
                        hideOnTransparent: !0,
                        filterSize: {
                            width: "200%",
                            height: "200%",
                            x: "-50%",
                            y: "-50%"
                        },
                        ...n
                    },
                    ...i
                }, null != r && r.light && (this._light = r.light), null != r && r.worker && (this._worker = r.worker), this._listenToHover(), this._listenToVisibilityChange()
            }
        }
}