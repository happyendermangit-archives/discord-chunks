function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        codecNameToPayloadName: function() {
            return l
        },
        filterVideoCodecs: function() {
            return u
        },
        getExperimentCodecs: function() {
            return a
        }
    });
    var r = n("439386"),
        o = [{
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

    function i(e, t) {
        var n = t.concat(o),
            r = [];
        return n.forEach(function(t) {
            var n = e.find(function(e) {
                return t.name === e.codec
            });
            null != n && r.push({
                name: n.codec,
                encode: n.encode && t.encode,
                decode: n.decode && t.decode
            })
        }), r
    }

    function a(e, t) {
        var n = [];
        return e.has(r.ExperimentFlags.SIGNAL_H265_SUPPORT) ? t === r.MediaEngineContextTypes.STREAM && n.unshift({
            name: "H265",
            encode: !0,
            decode: !0
        }) : e.has(r.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT) && t === r.MediaEngineContextTypes.STREAM && n.unshift({
            name: "H265",
            encode: !1,
            decode: !0
        }), e.has(r.ExperimentFlags.SIGNAL_AV1_SUPPORT) && n.unshift({
            name: "AV1",
            encode: !0,
            decode: !0
        }), n
    }

    function u(e, t) {
        return "string" == typeof e ? i(JSON.parse(e).map(function(e) {
            return {
                codec: s(e.codec),
                encode: e.encode,
                decode: e.decode
            }
        }), t) : i(e.map(function(e) {
            return {
                codec: s(e),
                encode: !0,
                decode: !0
            }
        }), t)
    }

    function s(e) {
        return "AV1X" === e ? "AV1" : e
    }

    function l(e) {
        return "AV1" === e ? "AV1X" : e
    }
}