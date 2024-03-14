function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("677935"),
        a = n.n(r),
        o = n("811022"),
        l = n("784063");
    let u = new o.default("DirectVideo");
    class d {
        addref() {
            this.refcount++
        }
        release() {
            return this.refcount--, 0 === this.refcount
        }
        constructor(e) {
            this.refcount = 1, this.stream = window.createDiscordStream(e)
        }
    }
    let c = new Map;

    function f(e) {
        let t = c.get(e);
        null != t && t.release() && ((0, l.getVoiceEngine)().removeDirectVideoOutputSink(e), c.delete(e))
    }

    function _(e) {
        let {
            streamId: t,
            paused: n,
            onReady: r,
            onResize: o,
            className: _,
            ...E
        } = e, h = s.useRef(null), g = s.useRef(null), m = s.useRef({
            width: 0,
            height: 0
        }), p = s.useRef({
            streamId: t,
            paused: n,
            onReady: r,
            onResize: o
        });
        return s.useLayoutEffect(() => {
            let {
                current: e
            } = h;
            if (null != e) {
                let t = document.createElement("video");
                t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.autoplay = !0, t.muted = !0, t.addEventListener("pause", function() {
                    if (!p.current.paused) {
                        var e;
                        null === (e = g.current) || void 0 === e || e.play()
                    }
                }), t.addEventListener("resize", function() {
                    var e, t, n, i, s, r;
                    let {
                        width: a,
                        height: o
                    } = m.current, l = null !== (n = null === (e = g.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, u = null !== (i = null === (t = g.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
                    if (a !== l || o !== u) {
                        let e = {
                            width: l,
                            height: u
                        };
                        null === (s = (r = p.current).onResize) || void 0 === s || s.call(r, e), m.current = e
                    }
                }), t.addEventListener("canplaythrough", function() {
                    var e, t;
                    u.info("handleReady for ".concat(p.current.streamId, ", have onReady callback = ").concat(null != p.current.onReady)), null === (e = (t = p.current).onReady) || void 0 === e || e.call(t)
                }), u.info("create video element for ".concat(p.current.streamId, ", readyState=").concat(t.readyState)), t.readyState > 3 && u.error("video element for ".concat(p.current.streamId, " was ready before attached")), e.appendChild(t), g.current = t
            }
        }, []), s.useEffect(() => {
            p.current.streamId = t, p.current.paused = n, p.current.onReady = r, p.current.onResize = o
        }), s.useEffect(() => {
            let e = g.current;
            if (null != e) {
                if (n) null != e.srcObject && (e.srcObject = null, f(t));
                else {
                    var i;
                    let n;
                    u.info("attaching srcObject for ".concat(t));
                    return e.srcObject = (i = t, null == (n = c.get(i)) ? (n = new d(i), (0, l.getVoiceEngine)().addDirectVideoOutputSink(i), c.set(i, n)) : n.addref(), n.stream), () => {
                        f(t), e.srcObject = null
                    }
                }
            }
        }, [n, t]), (0, i.jsx)("div", {
            className: a("media-engine-video", _),
            ref: h,
            ...E
        })
    }
    _.defaultProps = {
        paused: !1
    }
}