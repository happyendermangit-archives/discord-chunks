function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Directions: function() {
            return r
        },
        extractSDP: function() {
            return v
        },
        generateSessionDescription: function() {
            return C
        },
        generateUnifiedSessionDescription: function() {
            return g
        },
        getDirection: function() {
            return N
        },
        getExtensions: function() {
            return y
        },
        truncateSDP: function() {
            return D
        },
        validateSdp: function() {
            return M
        }
    }), n("47120"), n("536091"), n("411104"), n("653041"), n("724458"), n("852437");
    var i, r, a, s, o = n("403644"),
        l = n.n(o),
        u = n("565925"),
        d = n.n(u),
        _ = n("21690"),
        c = n.n(_),
        E = n("264344"),
        I = n.n(E),
        T = n("988367"),
        f = n("259443"),
        S = n("65154"),
        h = n("436620");
    let A = new f.Logger("SDP");
    (a = i || (i = {})).AUDIO = "a", a.VIDEO = "v", (s = r || (r = {})).SENDRECV = "sendrecv", s.SENDONLY = "sendonly", s.RECVONLY = "recvonly", s.INACTIVE = "inactive";
    let m = "UDP/TLS/RTP/SAVPF";

    function N(e) {
        switch (e) {
            case "recvonly":
                return "sendonly";
            case "sendonly":
                return "recvonly";
            case "sendrecv":
                return "sendrecv";
            default:
                return "inactive"
        }
    }

    function p(e, t, n) {
        let i = "".concat(e, "-").concat(t),
            r = "".concat(n).concat(i);
        return [{
            attribute: "cname",
            id: t,
            value: i
        }, {
            attribute: "msid",
            id: t,
            value: "".concat(i, " ").concat(r)
        }, {
            attribute: "mslabel",
            id: t,
            value: i
        }, {
            attribute: "label",
            id: t,
            value: r
        }]
    }

    function O(e) {
        return T.write({
            version: 0,
            timing: {
                start: 0,
                stop: 0
            },
            origin: {
                address: "127.0.0.1",
                ipVer: 4,
                netType: "IN",
                sessionId: "1420070400000",
                sessionVersion: 0,
                username: "-"
            },
            name: "-",
            msidSemantic: {
                semantic: "WMS",
                token: "*"
            },
            groups: [{
                type: "BUNDLE",
                mids: e.filter(e => null != e.mid).map(e => e.mid).join(" ")
            }],
            media: e
        })
    }

    function R(e) {
        let {
            mid: t,
            type: n,
            setup: i,
            direction: r,
            baseSDP: a,
            codec: s,
            payload: o,
            bitrate: u,
            ssrcs: d,
            extensions: _,
            rtxPayload: c,
            sendingVideo: E
        } = e;
        if ("inactive" === r && !h.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
            connection: {
                ip: "0.0.0.0",
                version: 4
            },
            direction: "inactive",
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: m,
            rtp: [{
                codec: "NULL",
                payload: o,
                rate: 0
            }],
            mid: void 0,
            type: n
        };
        let {
            media: [f]
        } = T.parse(a);
        if (f.type = n, f.protocol = m, f.payloads = o, f.setup = i, f.mid = t, f.rtcpMux = "rtcp-mux", f.direction = r, f.ssrcs = d, d.length > 0 && (null != c && (f.ssrcGroups = l()(d, 4).map(e => {
                let t = e[0].id;
                return {
                    semantics: "FID",
                    ssrcs: "".concat(t, " ").concat(t + 1)
                }
            }), f.ssrcs = l()(d, 4).map(e => {
                let t = e.map(e => (e = {
                    ...e
                }, e.id += 1, e));
                return [...e, ...t]
            }).flat()), h.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === I().name)) {
            let e = d.find(e => "msid" === e.attribute);
            if (null == e) throw Error("msid missing");
            f.msid = e.value, f.ssrcs = f.ssrcs.filter(e => "cname" === e.attribute)
        }
        switch (n) {
            case "audio":
                "Firefox" === I().name ? f.ext = _.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (f.ext = _.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), f.rtcpFb = [{
                    type: "transport-cc",
                    payload: o
                }]), f.rtp.push({
                    codec: s,
                    encoding: 2,
                    payload: o,
                    rate: 48e3
                }), s === S.Codecs.OPUS && f.fmtp.push({
                    config: "minptime=10;useinbandfec=1;usedtx=".concat(E ? "0" : "1"),
                    payload: o
                }), f.maxptime = 60;
                break;
            case "video":
                f.ext = _.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), f.rtp.push({
                    codec: s,
                    payload: o,
                    rate: 9e4
                });
                let A = "x-google-max-bitrate=".concat(u);
                s === S.Codecs.H264 && (A += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), f.fmtp.push({
                    config: A,
                    payload: o
                }), f.rtcpFb = [{
                    type: "ccm",
                    subtype: "fir",
                    payload: o
                }, {
                    type: "nack",
                    payload: o
                }, {
                    type: "nack",
                    subtype: "pli",
                    payload: o
                }, {
                    type: "goog-remb",
                    payload: o
                }, {
                    type: "transport-cc",
                    payload: o
                }], null != c && (f.rtp.push({
                    codec: "rtx",
                    payload: c,
                    rate: 9e4
                }), f.fmtp.push({
                    config: "apt=".concat(o),
                    payload: c
                }), f.payloads = "".concat(f.payloads, " ").concat(c))
        }
        return f
    }

    function C(e) {
        let {
            type: t,
            baseSDP: n,
            direction: i,
            audioCodec: r,
            audioPayloadType: a,
            audioBitRate: s,
            videoCodec: o,
            videoPayloadType: l,
            videoBitRate: u,
            rtxPayloadType: d,
            ssrcs: _,
            extensions: c
        } = e, E = [];
        if (A.info("generateSessionDescription: ".concat(JSON.stringify(_))), "Firefox" === I().name) {
            let e = "answer" === t ? "passive" : "active";
            _.forEach(t => {
                let [i, _, I, T, f] = t;
                if ("video" !== I || 0 !== l && 0 !== d) E.push(R({
                    mid: f,
                    type: I,
                    setup: e,
                    direction: T,
                    baseSDP: n,
                    codec: "audio" === I ? r : o,
                    payload: "audio" === I ? a : l,
                    bitrate: "audio" === I ? s : u,
                    ssrcs: p(_, i, "audio" === I ? "a" : "v"),
                    extensions: c
                }))
            })
        } else {
            let e = "answer" === t ? "passive" : "actpass",
                I = _.filter(e => {
                    let [t, n, i, r, a] = e;
                    return "inactive" !== r && "audio" === i
                }).map(e => {
                    let [t, n] = e;
                    return p(n, t, "a")
                });
            if (E.push(R({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: r,
                    payload: a,
                    bitrate: s,
                    ssrcs: I.flat(),
                    extensions: c
                })), l > 0) {
                let t = _.filter(e => {
                    let [t, n, i, r, a] = e;
                    return "inactive" !== r && "video" === i
                }).map(e => {
                    let [t, n] = e;
                    return p(n, t, "v")
                });
                E.push(R({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: c,
                    rtxPayload: d
                }))
            }
        }
        let T = O(E);
        return new RTCSessionDescription({
            type: t,
            sdp: T
        })
    }

    function g(e) {
        let {
            type: t,
            baseSDP: n,
            audioCodec: i,
            audioPayloadType: r,
            audioBitRate: a,
            videoCodec: s,
            videoPayloadType: o,
            videoBitRate: l,
            sendingVideo: u,
            rtxPayloadType: d,
            ssrcs: _,
            extensions: c
        } = e, E = [], I = "answer" === t ? "passive" : "actpass";
        _.forEach(e => {
            let t, {
                ssrc: _,
                cname: T,
                type: f,
                direction: S,
                mid: h
            } = e;
            "" !== T ? t = p(T, _, "audio" === f ? "a" : "v") : (t = [], "sendonly" === S ? S = "inactive" : "sendrecv" === S && (S = "recvonly"));
            E.push(R({
                mid: h,
                type: f,
                setup: I,
                direction: S,
                baseSDP: n,
                codec: "audio" === f ? i : s,
                payload: "audio" === f ? r : o,
                bitrate: "audio" === f ? a : l,
                ssrcs: t,
                extensions: c,
                rtxPayload: "audio" === f ? null : d,
                sendingVideo: u
            }))
        });
        let T = O(E);
        return new RTCSessionDescription({
            type: t,
            sdp: T
        })
    }

    function L(e, t, n, i, r) {
        let a = e.find(e => e.codec === i);
        if (null == a) return null;
        let s = t.find(e => RegExp("^apt=".concat(a.payload)).test(e.config)),
            o = null;
        if (null != s) {
            let t = e.find(e => e.codec === S.Codecs.RTX && e.payload === s.payload);
            null != t && (o = t.payload)
        }
        return {
            type: n,
            name: i,
            priority: r + 1,
            payloadType: a.payload,
            rtxPayloadType: o
        }
    }

    function v(e) {
        let t = T.parse(e).media.reduce((e, t) => {
            let n, {
                type: i,
                rtp: r,
                ssrcs: a,
                fmtp: s,
                direction: o,
                mid: l
            } = t;
            switch (e.outboundStreams.push({
                    type: i,
                    direction: o,
                    mid: l
                }), i) {
                case "audio":
                    [S.Codecs.OPUS].forEach((t, n) => {
                        let a = L(r, s, i, t, n);
                        null != a && e.codecs.push(a)
                    }), "sendrecv" === o && null != (n = null == a ? void 0 : a.find(e => "cname" === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case "video":
                    [S.Codecs.H264, S.Codecs.VP8, S.Codecs.VP9].forEach((t, n) => {
                        let a = L(r, s, i, t, n);
                        null != a && e.codecs.push(a)
                    }), "sendrecv" === o && (null != (n = null == a ? void 0 : a.find(e => "cname" === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == a ? void 0 : a.findLast(e => "cname" === e.attribute)) && (n.id === e.videoSSRC && A.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
            }
            return e
        }, {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        });
        return t.codecs = c()(t.codecs, d()), t
    }

    function D(e) {
        var t;
        let {
            codecs: n
        } = v(e), i = n.find(e => e.name === S.Codecs.VP8), r = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
        return {
            sdp: [...new Set(e.split(/\r\n/).filter(e => r.test(e)))].join("\n"),
            codecs: n
        }
    }

    function M(e) {
        if (!e.includes("a=fingerprint")) return A.error("Remote SDP does not include fingerprint!"), !1;
        if (!e.includes("a=ice-ufrag")) return A.error("Remote SDP does not include ICE user name!"), !1;
        if (!e.includes("a=ice-pwd")) return A.error("Remote SDP does not include ICE password!"), !1;
        if (!e.includes("a=candidate")) return A.error("Remote SDP does not include ICE candidate!"), !1;
        if (!e.includes("c=")) return A.error("Remote SDP does not include c-line!"), !1;
        let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
        return !(t.split(" ").length < 3) || (A.error("Incorrect c-line: ".concat(t)), !1)
    }

    function y(e) {
        return [...new Set(e.split(/\r\n/).filter(e => e.startsWith("a=extmap:")))].map(e => {
            let t = e.split(" ");
            return {
                value: parseInt(t[0].split("/")[0].substr(9), 10),
                uri: t[1]
            }
        })
    }
}