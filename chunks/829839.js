function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        codecNameToPayloadName: function() {
            return u
        },
        filterVideoCodecs: function() {
            return o
        },
        getExperimentCodecs: function() {
            return s
        }
    }), n("653041"), n("733860");
    var i = n("65154");
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

    function a(e, t) {
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

    function s(e) {
        let t = [];
        return e.has(i.ExperimentFlags.SIGNAL_H265_SUPPORT) ? t.unshift({
            name: "H265",
            encode: !0,
            decode: !0
        }) : e.has(i.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT) && t.unshift({
            name: "H265",
            encode: !1,
            decode: !0
        }), e.has(i.ExperimentFlags.SIGNAL_AV1_SUPPORT) && t.unshift({
            name: "AV1",
            encode: !0,
            decode: !0
        }), t
    }

    function o(e, t) {
        return "string" == typeof e ? a(JSON.parse(e).map(e => ({
            codec: l(e.codec),
            encode: e.encode,
            decode: e.decode
        })), t) : a(e.map(e => ({
            codec: l(e),
            encode: !0,
            decode: !0
        })), t)
    }

    function l(e) {
        return "AV1X" === e ? "AV1" : e
    }

    function u(e) {
        return "AV1" === e ? "AV1X" : e
    }
}