function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("665443"),
        a = n.n(s),
        o = n("259443"),
        l = n("992774");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = new o.Logger("DirectVideo");
    class _ {
        addref() {
            this.refcount++
        }
        release() {
            return this.refcount--, 0 === this.refcount
        }
        constructor(e) {
            u(this, "refcount", void 0), u(this, "stream", void 0), this.refcount = 1, this.stream = window.createDiscordStream(e)
        }
    }
    let c = new Map;

    function E(e) {
        let t = c.get(e);
        null != t && t.release() && ((0, l.getVoiceEngine)().removeDirectVideoOutputSink(e), c.delete(e))
    }

    function I(e) {
        let {
            streamId: t,
            paused: n,
            onReady: s,
            onResize: o,
            className: u,
            ...I
        } = e, T = r.useRef(null), f = r.useRef(null), S = r.useRef({
            width: 0,
            height: 0
        }), h = r.useRef({
            streamId: t,
            paused: n,
            onReady: s,
            onResize: o
        });
        return r.useLayoutEffect(() => {
            let {
                current: e
            } = T;
            if (null != e) {
                let t = document.createElement("video");
                t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.autoplay = !0, t.muted = !0, t.addEventListener("pause", function() {
                    if (!h.current.paused) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.play()
                    }
                }), t.addEventListener("resize", function() {
                    var e, t, n, i, r, s;
                    let {
                        width: a,
                        height: o
                    } = S.current, l = null !== (n = null === (e = f.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, u = null !== (i = null === (t = f.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
                    if (a !== l || o !== u) {
                        let e = {
                            width: l,
                            height: u
                        };
                        null === (r = (s = h.current).onResize) || void 0 === r || r.call(s, e), S.current = e
                    }
                }), t.addEventListener("canplaythrough", function() {
                    var e, t;
                    d.info("handleReady for ".concat(h.current.streamId, ", have onReady callback = ").concat(null != h.current.onReady)), null === (e = (t = h.current).onReady) || void 0 === e || e.call(t)
                }), d.info("create video element for ".concat(h.current.streamId, ", readyState=").concat(t.readyState)), t.readyState > 3 && d.error("video element for ".concat(h.current.streamId, " was ready before attached")), e.appendChild(t), f.current = t
            }
        }, []), r.useEffect(() => {
            h.current.streamId = t, h.current.paused = n, h.current.onReady = s, h.current.onResize = o
        }), r.useEffect(() => {
            let e = f.current;
            if (null != e) {
                if (n) null != e.srcObject && (e.srcObject = null, E(t));
                else {
                    var i;
                    let n;
                    d.info("attaching srcObject for ".concat(t));
                    return e.srcObject = (i = t, null == (n = c.get(i)) ? (n = new _(i), (0, l.getVoiceEngine)().addDirectVideoOutputSink(i), c.set(i, n)) : n.addref(), n.stream), () => {
                        E(t), e.srcObject = null
                    }
                }
            }
        }, [n, t]), (0, i.jsx)("div", {
            className: a()("media-engine-video", u),
            ref: T,
            ...I
        })
    }
    I.defaultProps = {
        paused: !1
    }
}