function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("376398"),
        s = n("825040");
    async function o(e) {
        let {
            deviceId: t,
            width: n,
            height: i,
            disabled: r
        } = e;
        if (r) return null;
        try {
            return await navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: {
                    width: n * window.devicePixelRatio,
                    height: i * window.devicePixelRatio,
                    frameRate: 30,
                    deviceId: t
                }
            })
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
        } = e, [d, _] = r.useState();
        return r.useEffect(() => {
            let e = o({
                deviceId: t,
                width: n,
                height: l,
                disabled: u
            }).then(e => {
                let t = null != e ? (0, a.registerVideoStream)(e) : null;
                return _(t), {
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
                    null != (t = n) && t.getTracks().forEach(e => e.stop()), null != i && (0, a.unregisterVideoStream)(i)
                })
            }
        }, [t, n, l, u]), null == d ? (0, i.jsx)("div", {
            className: "media-engine-video",
            style: {
                width: n,
                height: l
            }
        }) : (0, i.jsx)(s.default, {
            streamId: d,
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