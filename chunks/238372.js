function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("441822"),
        a = n("232125");
    async function o(e) {
        let {
            deviceId: t,
            width: n,
            height: i,
            disabled: r
        } = e;
        if (r) return null;
        try {
            let e = await navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: {
                    width: n * window.devicePixelRatio,
                    height: i * window.devicePixelRatio,
                    frameRate: 30,
                    deviceId: t
                }
            });
            return e
        } catch (e) {
            return null
        }
    }

    function l(e) {
        let {
            deviceId: t,
            width: n,
            height: l,
            disabled: u
        } = e, [c, d] = r.useState();
        return r.useEffect(() => {
            let e = o({
                deviceId: t,
                width: n,
                height: l,
                disabled: u
            }).then(e => {
                let t = null != e ? (0, s.registerVideoStream)(e) : null;
                return d(t), {
                    stream: e,
                    streamId: t
                }
            });
            return () => {
                e.then(e => {
                    var t;
                    let {
                        stream: n,
                        streamId: i
                    } = e;
                    null != (t = n) && t.getTracks().forEach(e => e.stop()), null != i && (0, s.unregisterVideoStream)(i)
                })
            }
        }, [t, n, l, u]), null == c ? (0, i.jsx)("div", {
            className: "media-engine-video",
            style: {
                width: n,
                height: l
            }
        }) : (0, i.jsx)(a.default, {
            streamId: c,
            style: {
                width: n,
                height: l
            }
        })
    }
    l.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}