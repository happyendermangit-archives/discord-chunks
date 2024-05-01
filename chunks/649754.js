function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("992774");
    t.default = new class e {
        addSink(e, t, n) {
            let r = this.streams,
                s = r[e];
            if (null == s && (s = r[e] = new Map), 0 === s.size) {
                let t = (0, i.getVoiceEngine)();
                t.setVideoOutputSink(e, this.handleImageData.bind(this, t.signalVideoOutputSinkReady.bind(t, e), s), !0)
            }
            s.set(t, n)
        }
        removeSink(e, t) {
            let n = this.streams,
                r = n[e];
            null != r && (r.delete(t), 0 === r.size && (delete n[e], (0, i.getVoiceEngine)().setVideoOutputSink(e)))
        }
        handleImageData(e, t, n) {
            for (let e of t.values()) e(n);
            e()
        }
        constructor() {
            var e, t, n;
            e = this, n = {}, (t = "streams") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}