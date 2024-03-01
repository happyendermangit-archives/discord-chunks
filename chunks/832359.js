function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("677935"),
        a = n.n(s),
        o = n("811022"),
        l = n("784063");
    let u = new o.default("DirectVideo");
    class c {
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
    let d = new Map;

    function f(e) {
        let t = d.get(e);
        null != t && t.release() && ((0, l.getVoiceEngine)().removeDirectVideoOutputSink(e), d.delete(e))
    }

    function E(e) {
        let {
            streamId: t,
            paused: n,
            onReady: s,
            onResize: o,
            className: E,
            ...p
        } = e, h = r.useRef(null), _ = r.useRef(null), S = r.useRef({
            width: 0,
            height: 0
        }), m = r.useRef({
            streamId: t,
            paused: n,
            onReady: s,
            onResize: o
        });
        return r.useLayoutEffect(() => {
            let {
                current: e
            } = h;
            if (null != e) {
                let t = document.createElement("video");
                t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.autoplay = !0, t.muted = !0, t.addEventListener("pause", function() {
                    if (!m.current.paused) {
                        var e;
                        null === (e = _.current) || void 0 === e || e.play()
                    }
                }), t.addEventListener("resize", function() {
                    var e, t, n, i, r, s;
                    let {
                        width: a,
                        height: o
                    } = S.current, l = null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, u = null !== (i = null === (t = _.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
                    if (a !== l || o !== u) {
                        let e = {
                            width: l,
                            height: u
                        };
                        null === (r = (s = m.current).onResize) || void 0 === r || r.call(s, e), S.current = e
                    }
                }), t.addEventListener("canplaythrough", function() {
                    var e, t;
                    u.info("handleReady for ".concat(m.current.streamId, ", have onReady callback = ").concat(null != m.current.onReady)), null === (e = (t = m.current).onReady) || void 0 === e || e.call(t)
                }), u.info("create video element for ".concat(m.current.streamId, ", readyState=").concat(t.readyState)), t.readyState > 3 && u.error("video element for ".concat(m.current.streamId, " was ready before attached")), e.appendChild(t), _.current = t
            }
        }, []), r.useEffect(() => {
            m.current.streamId = t, m.current.paused = n, m.current.onReady = s, m.current.onResize = o
        }), r.useEffect(() => {
            let e = _.current;
            if (null != e) {
                if (n) null != e.srcObject && (e.srcObject = null, f(t));
                else {
                    var i;
                    let n;
                    u.info("attaching srcObject for ".concat(t));
                    return e.srcObject = (i = t, null == (n = d.get(i)) ? (n = new c(i), (0, l.getVoiceEngine)().addDirectVideoOutputSink(i), d.set(i, n)) : n.addref(), n.stream), () => {
                        f(t), e.srcObject = null
                    }
                }
            }
        }, [n, t]), (0, i.jsx)("div", {
            className: a("media-engine-video", E),
            ref: h,
            ...p
        })
    }
    E.defaultProps = {
        paused: !1
    }
}