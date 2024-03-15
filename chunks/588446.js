function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Directions: function() {
            return s
        },
        getDirection: function() {
            return T
        },
        generateSessionDescription: function() {
            return y
        },
        generateUnifiedSessionDescription: function() {
            return N
        },
        extractSDP: function() {
            return O
        },
        truncateSDP: function() {
            return D
        },
        validateSdp: function() {
            return P
        },
        getExtensions: function() {
            return L
        }
    }), n("222007"), n("834022"), n("70102"), n("424973"), n("808653"), n("700225");
    var i, s, r, a, o = n("798680"),
        l = n.n(o),
        u = n("782720"),
        d = n.n(u),
        c = n("847747"),
        f = n.n(c),
        _ = n("383536"),
        E = n.n(_),
        h = n("21794"),
        g = n("811022"),
        m = n("353927"),
        p = n("53452");
    let S = new g.default("SDP");
    (r = i || (i = {})).AUDIO = "a", r.VIDEO = "v", (a = s || (s = {})).SENDRECV = "sendrecv", a.SENDONLY = "sendonly", a.RECVONLY = "recvonly", a.INACTIVE = "inactive";
    let v = "UDP/TLS/RTP/SAVPF";

    function T(e) {
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

    function I(e, t, n) {
        let i = "".concat(e, "-").concat(t),
            s = "".concat(n).concat(i);
        return [{
            attribute: "cname",
            id: t,
            value: i
        }, {
            attribute: "msid",
            id: t,
            value: "".concat(i, " ").concat(s)
        }, {
            attribute: "mslabel",
            id: t,
            value: i
        }, {
            attribute: "label",
            id: t,
            value: s
        }]
    }

    function A(e) {
        return h.write({
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

    function C(e) {
        let {
            mid: t,
            type: n,
            setup: i,
            direction: s,
            baseSDP: r,
            codec: a,
            payload: o,
            bitrate: u,
            ssrcs: d,
            extensions: c,
            rtxPayload: f,
            sendingVideo: _
        } = e;
        if ("inactive" === s && !p.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
            connection: {
                ip: "0.0.0.0",
                version: 4
            },
            direction: "inactive",
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: v,
            rtp: [{
                codec: "NULL",
                payload: o,
                rate: 0
            }],
            mid: void 0,
            type: n
        };
        let {
            media: [g]
        } = h.parse(r);
        if (g.type = n, g.protocol = v, g.payloads = o, g.setup = i, g.mid = t, g.rtcpMux = "rtcp-mux", g.direction = s, g.ssrcs = d, d.length > 0 && (null != f && (g.ssrcGroups = l(d, 4).map(e => {
                let t = e[0].id;
                return {
                    semantics: "FID",
                    ssrcs: "".concat(t, " ").concat(t + 1)
                }
            }), g.ssrcs = l(d, 4).map(e => {
                let t = e.map(e => (e = {
                    ...e
                }, e.id += 1, e));
                return [...e, ...t]
            }).flat()), p.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === E.name)) {
            let e = d.find(e => "msid" === e.attribute);
            if (null == e) throw Error("msid missing");
            g.msid = e.value, g.ssrcs = g.ssrcs.filter(e => "cname" === e.attribute)
        }
        switch (n) {
            case "audio":
                "Firefox" === E.name ? g.ext = c.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (g.ext = c.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), g.rtcpFb = [{
                    type: "transport-cc",
                    payload: o
                }]), g.rtp.push({
                    codec: a,
                    encoding: 2,
                    payload: o,
                    rate: 48e3
                }), a === m.Codecs.OPUS && g.fmtp.push({
                    config: "minptime=10;useinbandfec=1;usedtx=".concat(_ ? "0" : "1"),
                    payload: o
                }), g.maxptime = 60;
                break;
            case "video":
                g.ext = c.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), g.rtp.push({
                    codec: a,
                    payload: o,
                    rate: 9e4
                });
                let S = "x-google-max-bitrate=".concat(u);
                a === m.Codecs.H264 && (S += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), g.fmtp.push({
                    config: S,
                    payload: o
                }), g.rtcpFb = [{
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
                }], null != f && (g.rtp.push({
                    codec: "rtx",
                    payload: f,
                    rate: 9e4
                }), g.fmtp.push({
                    config: "apt=".concat(o),
                    payload: f
                }), g.payloads = "".concat(g.payloads, " ").concat(f))
        }
        return g
    }

    function y(e) {
        let {
            type: t,
            baseSDP: n,
            direction: i,
            audioCodec: s,
            audioPayloadType: r,
            audioBitRate: a,
            videoCodec: o,
            videoPayloadType: l,
            videoBitRate: u,
            rtxPayloadType: d,
            ssrcs: c,
            extensions: f
        } = e, _ = [];
        if (S.info("generateSessionDescription: ".concat(JSON.stringify(c))), "Firefox" === E.name) {
            let e = "answer" === t ? "passive" : "active";
            c.forEach(t => {
                let [i, c, E, h, g] = t;
                if ("video" !== E || 0 !== l && 0 !== d) _.push(C({
                    mid: g,
                    type: E,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: "audio" === E ? s : o,
                    payload: "audio" === E ? r : l,
                    bitrate: "audio" === E ? a : u,
                    ssrcs: I(c, i, "audio" === E ? "a" : "v"),
                    extensions: f
                }))
            })
        } else {
            let e = "answer" === t ? "passive" : "actpass",
                E = c.filter(e => {
                    let [t, n, i, s, r] = e;
                    return "inactive" !== s && "audio" === i
                }).map(e => {
                    let [t, n] = e;
                    return I(n, t, "a")
                });
            if (_.push(C({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: s,
                    payload: r,
                    bitrate: a,
                    ssrcs: E.flat(),
                    extensions: f
                })), l > 0) {
                let t = c.filter(e => {
                    let [t, n, i, s, r] = e;
                    return "inactive" !== s && "video" === i
                }).map(e => {
                    let [t, n] = e;
                    return I(n, t, "v")
                });
                _.push(C({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: f,
                    rtxPayload: d
                }))
            }
        }
        let h = A(_);
        return new RTCSessionDescription({
            type: t,
            sdp: h
        })
    }

    function N(e) {
        let {
            type: t,
            baseSDP: n,
            audioCodec: i,
            audioPayloadType: s,
            audioBitRate: r,
            videoCodec: a,
            videoPayloadType: o,
            videoBitRate: l,
            sendingVideo: u,
            rtxPayloadType: d,
            ssrcs: c,
            extensions: f
        } = e, _ = [], E = "answer" === t ? "passive" : "actpass";
        c.forEach(e => {
            let t, {
                ssrc: c,
                cname: h,
                type: g,
                direction: m,
                mid: p
            } = e;
            "" !== h ? t = I(h, c, "audio" === g ? "a" : "v") : (t = [], "sendonly" === m ? m = "inactive" : "sendrecv" === m && (m = "recvonly"));
            _.push(C({
                mid: p,
                type: g,
                setup: E,
                direction: m,
                baseSDP: n,
                codec: "audio" === g ? i : a,
                payload: "audio" === g ? s : o,
                bitrate: "audio" === g ? r : l,
                ssrcs: t,
                extensions: f,
                rtxPayload: "audio" === g ? null : d,
                sendingVideo: u
            }))
        });
        let h = A(_);
        return new RTCSessionDescription({
            type: t,
            sdp: h
        })
    }

    function R(e, t, n, i, s) {
        let r = e.find(e => e.codec === i);
        if (null == r) return null;
        let a = t.find(e => RegExp("^apt=".concat(r.payload)).test(e.config)),
            o = null;
        if (null != a) {
            let t = e.find(e => e.codec === m.Codecs.RTX && e.payload === a.payload);
            null != t && (o = t.payload)
        }
        return {
            type: n,
            name: i,
            priority: s + 1,
            payloadType: r.payload,
            rtxPayloadType: o
        }
    }

    function O(e) {
        let t = h.parse(e).media.reduce((e, t) => {
            let n, {
                type: i,
                rtp: s,
                ssrcs: r,
                fmtp: a,
                direction: o,
                mid: l
            } = t;
            switch (e.outboundStreams.push({
                    type: i,
                    direction: o,
                    mid: l
                }), i) {
                case "audio":
                    [m.Codecs.OPUS].forEach((t, n) => {
                        let r = R(s, a, i, t, n);
                        null != r && e.codecs.push(r)
                    }), "sendrecv" === o && null != (n = null == r ? void 0 : r.find(e => "cname" === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case "video":
                    [m.Codecs.H264, m.Codecs.VP8, m.Codecs.VP9].forEach((t, n) => {
                        let r = R(s, a, i, t, n);
                        null != r && e.codecs.push(r)
                    }), "sendrecv" === o && (null != (n = null == r ? void 0 : r.find(e => "cname" === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == r ? void 0 : r.findLast(e => "cname" === e.attribute)) && (n.id === e.videoSSRC && S.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
            }
            return e
        }, {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        });
        return t.codecs = f(t.codecs, d), t
    }

    function D(e) {
        var t;
        let {
            codecs: n
        } = O(e), i = n.find(e => e.name === m.Codecs.VP8), s = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
        return {
            sdp: [...new Set(e.split(/\r\n/).filter(e => s.test(e)))].join("\n"),
            codecs: n
        }
    }

    function P(e) {
        if (!e.includes("a=fingerprint")) return S.error("Remote SDP does not include fingerprint!"), !1;
        if (!e.includes("a=ice-ufrag")) return S.error("Remote SDP does not include ICE user name!"), !1;
        if (!e.includes("a=ice-pwd")) return S.error("Remote SDP does not include ICE password!"), !1;
        if (!e.includes("a=candidate")) return S.error("Remote SDP does not include ICE candidate!"), !1;
        if (!e.includes("c=")) return S.error("Remote SDP does not include c-line!"), !1;
        let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
        return !(t.split(" ").length < 3) || (S.error("Incorrect c-line: ".concat(t)), !1)
    }

    function L(e) {
        return [...new Set(e.split(/\r\n/).filter(e => e.startsWith("a=extmap:")))].map(e => {
            let t = e.split(" "),
                n = t[0].split("/");
            return {
                value: parseInt(n[0].substr(9), 10),
                uri: t[1]
            }
        })
    }
}