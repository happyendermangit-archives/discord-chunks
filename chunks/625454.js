function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("784063"),
        s = new class e {
            addSink(e, t, n) {
                let s = this.streams,
                    r = s[e];
                if (null == r && (r = s[e] = new Map), 0 === r.size) {
                    let t = (0, i.getVoiceEngine)();
                    t.setVideoOutputSink(e, this.handleImageData.bind(this, t.signalVideoOutputSinkReady.bind(t, e), r), !0)
                }
                r.set(t, n)
            }
            removeSink(e, t) {
                let n = this.streams,
                    s = n[e];
                if (null != s && (s.delete(t), 0 === s.size)) {
                    delete n[e];
                    let t = (0, i.getVoiceEngine)();
                    t.setVideoOutputSink(e)
                }
            }
            handleImageData(e, t, n) {
                for (let e of t.values()) e(n);
                e()
            }
            constructor() {
                this.streams = {}
            }
        }
}