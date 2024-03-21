function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        playGiftSound: function() {
            return m
        },
        WebAudioSound: function() {
            return S
        },
        WebAudioAPISound: function() {
            return v
        }
    }), n("222007"), n("70102");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("804998"),
        l = n("520497"),
        u = n("812809"),
        d = n("42887"),
        c = n("773336");
    let _ = "default",
        f = _;
    (s = i || (i = {})).Stopped = "stopped", s.Playing = "playing", s.Looping = "looping", s.Paused = "paused";
    let E = new Map;
    async function h(e) {
        let t = await fetch(n("89400")("../../sounds/".concat(e, ".mp3").replace("../../sounds/", "./"))).then(e => e.arrayBuffer());
        return (0, o.getOrCreateAudioContext)().decodeAudioData(t)
    }
    async function g(e) {
        let t = E.get(e);
        return null == t && (t = h(e), E.set(e, t)), await t
    }

    function m(e, t) {
        let n = new Audio((0, l.default)(e));
        n.volume = (0, u.default)(t), n.play()
    }

    function p() {
        null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
            let t = d.default.getOutputDevices(),
                n = a(t).sortBy(e => e.index).findIndex(e => e.id === d.default.getOutputDeviceId()),
                i = t[d.default.getOutputDeviceId()],
                s = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
                r = s[n];
            null != i && (null == r || r.label !== i.name) && (r = s.find(e => e.label === i.name)), f = null != r ? r.deviceId : _
        }).catch(() => {
            f = _
        })
    }
    c.isPlatformEmbedded && (d.default.addChangeListener(p), p());
    class S {
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
                i.src = n("89400")("../../sounds/".concat(this.name, ".mp3").replace("../../sounds/", "./")), i.onloadeddata = () => {
                    i.volume = Math.min(d.default.getOutputVolume() / 100 * this._volume, 1), c.isPlatformEmbedded && i.setSinkId(f), e(i)
                }, i.onerror = () => t(Error("could not play audio")), i.onended = () => this._destroyAudio(), i.load()
            }), this._audio
        }
        constructor(e, t, n) {
            this.name = e, this._volume = n
        }
    }
    class v {
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
                this._ensureAudioPromise = g(this.name).then(t => null == t ? Promise.reject(Error("Failed to load audio: ".concat(this.name))) : (this._audioContext = (0, o.getOrCreateAudioContext)(), this._gain = new GainNode(this._audioContext), this._gain.gain.value = e, c.isPlatformEmbedded && this._audioContext.setSinkId(f), this._buffer = t, this._source = this._audioContext.createBufferSource(), this._source.buffer = t, this._source.connect(this._gain).connect(this._audioContext.destination), this._source.loop = !1, this._source.onended = () => this._destroyAudio(), Promise.resolve({
                    context: this._audioContext,
                    gainNode: this._gain,
                    source: this._source
                }))).catch(() => Promise.reject(Error("Failed to load audio: ".concat(this.name))))
            }
            return await this._ensureAudioPromise
        }
        constructor(e, t, n) {
            this.name = e, this._volume = n, this._audioContext = null, this._buffer = null, this._source = null, this._state = "stopped", this._ensureAudioPromise = null
        }
    }
}