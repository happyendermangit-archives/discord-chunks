function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getExperimentCodecs: function() {
            return a
        },
        filterVideoCodecs: function() {
            return o
        },
        codecNameToPayloadName: function() {
            return u
        }
    }), n("424973"), n("843762");
    var i = n("353927");
    let r = [{
        name: "H264",
        encode: !0,
        decode: !0
    }, {
        name: "VP8",
        encode: !0,
        decode: !0
    }, {
        name: "VP9",
        encode: !0,
        decode: !0
    }];

    function s(e, t) {
        let n = t.concat(r),
            i = [];
        return n.forEach(t => {
            let n = e.find(e => t.name === e.codec);
            null != n && i.push({
                name: n.codec,
                encode: n.encode && t.encode,
                decode: n.decode && t.decode
            })
        }), i
    }

    function a(e, t) {
        let n = [];
        return e.has(i.ExperimentFlags.SIGNAL_H265_SUPPORT) ? t === i.MediaEngineContextTypes.STREAM && n.unshift({
            name: "H265",
            encode: !0,
            decode: !0
        }) : e.has(i.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT) && t === i.MediaEngineContextTypes.STREAM && n.unshift({
            name: "H265",
            encode: !1,
            decode: !0
        }), e.has(i.ExperimentFlags.SIGNAL_AV1_SUPPORT) && n.unshift({
            name: "AV1",
            encode: !0,
            decode: !0
        }), n
    }

    function o(e, t) {
        if ("string" == typeof e) {
            let n = JSON.parse(e).map(e => ({
                codec: l(e.codec),
                encode: e.encode,
                decode: e.decode
            }));
            return s(n, t)
        } {
            let n = e.map(e => ({
                codec: l(e),
                encode: !0,
                decode: !0
            }));
            return s(n, t)
        }
    }

    function l(e) {
        return "AV1X" === e ? "AV1" : e
    }

    function u(e) {
        return "AV1" === e ? "AV1X" : e
    }
}