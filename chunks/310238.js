function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var a = n("627445"),
        i = n.n(a),
        l = n("469520"),
        r = n.n(l);
    async function s(e) {
        let t;
        let n = r.createFile(!1),
            a = new Promise(e => {
                n.onReady = e
            }),
            l = await e.arrayBuffer();
        for (let e of (l.fileStart = 0, n.appendBuffer(l), n.flush(), await a, i(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
        let s = e.slice(0, t, e.type),
            u = e.slice(t + 4, t + 8 + 16, e.type);
        return new Blob([s, new Uint8Array([0, 0, 0, 24]), u], {
            type: e.type
        })
    }
}