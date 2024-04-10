function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WebAudioAPISound: function() {
            return N
        },
        WebAudioSound: function() {
            return m
        },
        playGiftSound: function() {
            return A
        }
    }), n("47120"), n("411104");
    var i, r, s = n("392711"),
        a = n.n(s),
        o = n("304809"),
        l = n("22382"),
        u = n("747071"),
        d = n("131951"),
        _ = n("358085");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = "default",
        I = E;
    (r = i || (i = {})).Stopped = "stopped", r.Playing = "playing", r.Looping = "looping", r.Paused = "paused";
    let T = new Map;
    async function f(e) {
        let t = await fetch(n("236816")("../../sounds/".concat(e, ".mp3").replace("../../sounds/", "./"))).then(e => e.arrayBuffer());
        return (0, o.getOrCreateAudioContext)().decodeAudioData(t)
    }
    async function S(e) {
        let t = T.get(e);
        return null == t && (t = f(e), T.set(e, t)), await t
    }

    function A(e, t) {
        let n = new Audio((0, l.default)(e));
        n.volume = (0, u.default)(t), n.play()
    }

    function h() {
        null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
            let t = d.default.getOutputDevices(),
                n = a()(t).sortBy(e => e.index).findIndex(e => e.id === d.default.getOutputDeviceId()),
                i = t[d.default.getOutputDeviceId()],
                r = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
                s = r[n];
            null != i && (null == s || s.label !== i.name) && (s = r.find(e => e.label === i.name)), I = null != s ? s.deviceId : E
        }).catch(() => {
            I = E
        })
    }
    _.isPlatformEmbedded && (d.default.addChangeListener(h), h());
    class m {
        get volume() {
            return this._volume
        }
        set volume(e) {
            this._volume = e, this._ensureAudio().then(t => t.volume = e)
        }
        loop() {
            this._ensureAudio().then(e => {
                e.loop = !0, e.play()
            })
        }
        play() {
            this._ensureAudio().then(e => {
                e.loop = !1, e.play()
            })
        }
        pause() {
            null != this._audio && this._audio.then(e => e.pause())
        }
        stop() {
            this._destroyAudio()
        }
        playWithListener() {
            return new Promise((e, t) => {
                this._ensureAudio().then(n => {
                    (null == n.duration || 0 === n.duration) && t("sound has no duration"), n.play(), setTimeout(() => {
                        e(!0)
                    }, n.duration)
                })
            })
        }
        _destroyAudio() {
            null != this._audio && (this._audio.then(e => {
                e.pause(), e.src = ""
            }), this._audio = null)
        }
        _ensureAudio() {
            var e;
            return this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((e, t) => {
                let i = new Audio;
                i.src = n("236816")("../../sounds/".concat(this.name, ".mp3").replace("../../sounds/", "./")), i.onloadeddata = () => {
                    i.volume = Math.min(d.default.getOutputVolume() / 100 * this._volume, 1), _.isPlatformEmbedded && i.setSinkId(I), e(i)
                }, i.onerror = () => t(Error("could not play audio")), i.onended = () => this._destroyAudio(), i.load()
            }), this._audio
        }
        constructor(e, t, n) {
            c(this, "name", void 0), c(this, "_volume", void 0), c(this, "_audio", void 0), this.name = e, this._volume = n
        }
    }
    class N {
        get volume() {
            return this._volume
        }
        set volume(e) {
            this._ensureAudio().then(t => {
                let {
                    gainNode: n,
                    context: i
                } = t;
                this._volume = e, n.gain.setValueAtTime(e, i.currentTime)
            })
        }
        loop() {
            "looping" !== this._state && (this._state = "looping", this._ensureAudio().then(e => {
                let {
                    source: t
                } = e;
                "looping" === this._state && (t.loop = !0, t.start())
            }))
        }
        play() {
            "playing" !== this._state && (this._state = "playing", this._ensureAudio().then(e => {
                let {
                    source: t
                } = e;
                "playing" === this._state && (t.loop = !1, t.start())
            }))
        }
        pause() {
            "paused" !== this._state && (this._state = "paused", this._ensureAudio().then(e => {
                let {
                    source: t
                } = e;
                "paused" === this._state && (t.stop(), this._state = "paused")
            }))
        }
        stop() {
            this._destroyAudio()
        }
        _destroyAudio() {
            "stopped" !== this._state && (this._state = "stopped", this._ensureAudio().then(e => {
                let {
                    source: t
                } = e;
                "stopped" === this._state && (t.disconnect(), t.stop(), this._source = null, this._buffer = null, this._state = "stopped", this._ensureAudioPromise = null)
            }))
        }
        async _ensureAudio() {
            if (null == this._ensureAudioPromise) {
                let e = Math.min(d.default.getOutputVolume() / 100 * this._volume, 1);
                this._ensureAudioPromise = S(this.name).then(t => null == t ? Promise.reject(Error("Failed to load audio: ".concat(this.name))) : (this._audioContext = (0, o.getOrCreateAudioContext)(), this._gain = new GainNode(this._audioContext), this._gain.gain.value = e, _.isPlatformEmbedded && this._audioContext.setSinkId(I), this._buffer = t, this._source = this._audioContext.createBufferSource(), this._source.buffer = t, this._source.connect(this._gain).connect(this._audioContext.destination), this._source.loop = !1, this._source.onended = () => this._destroyAudio(), Promise.resolve({
                    context: this._audioContext,
                    gainNode: this._gain,
                    source: this._source
                }))).catch(() => Promise.reject(Error("Failed to load audio: ".concat(this.name))))
            }
            return await this._ensureAudioPromise
        }
        constructor(e, t, n) {
            c(this, "name", void 0), c(this, "_volume", void 0), c(this, "_audioContext", void 0), c(this, "_buffer", void 0), c(this, "_source", void 0), c(this, "_gain", void 0), c(this, "_state", void 0), c(this, "_ensureAudioPromise", void 0), this.name = e, this._volume = n, this._audioContext = null, this._buffer = null, this._source = null, this._state = "stopped", this._ensureAudioPromise = null
        }
    }
}