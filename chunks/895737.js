function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        playGiftSound: function() {
            return c
        },
        WebAudioSound: function() {
            return _
        }
    }), n("70102");
    var i = n("917351"),
        s = n.n(i),
        r = n("520497"),
        a = n("812809"),
        o = n("42887"),
        l = n("773336");
    let u = "default",
        d = u;

    function c(e, t) {
        let n = new Audio((0, r.default)(e));
        n.volume = (0, a.default)(t), n.play()
    }

    function f() {
        null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
            let t = o.default.getOutputDevices(),
                n = s(t).sortBy(e => e.index).findIndex(e => e.id === o.default.getOutputDeviceId()),
                i = t[o.default.getOutputDeviceId()],
                r = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
                a = r[n];
            null != i && (null == a || a.label !== i.name) && (a = r.find(e => e.label === i.name)), d = null != a ? a.deviceId : u
        }).catch(() => {
            d = u
        })
    }
    l.isPlatformEmbedded && (o.default.addChangeListener(f), f());
    class _ {
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
                    i.volume = Math.min(o.default.getOutputVolume() / 100 * this._volume, 1), l.isPlatformEmbedded && i.setSinkId(d), e(i)
                }, i.onerror = () => t(Error("could not play audio")), i.onended = () => this._destroyAudio(), i.load()
            }), this._audio
        }
        constructor(e, t, n) {
            this.name = e, this._volume = n
        }
    }
}