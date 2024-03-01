function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Directions: function() {
            return r
        },
        getDirection: function() {
            return S
        },
        generateSessionDescription: function() {
            return I
        },
        generateUnifiedSessionDescription: function() {
            return C
        },
        extractSDP: function() {
            return A
        },
        truncateSDP: function() {
            return R
        },
        validateSdp: function() {
            return N
        },
        getExtensions: function() {
            return O
        }
    }), n("222007"), n("70102"), n("424973"), n("808653"), n("700225");
    var i, r, s, a, o = n("773179"),
        l = n.n(o),
        u = n("383536"),
        c = n.n(u),
        d = n("21794"),
        f = n("811022"),
        E = n("353927"),
        p = n("53452");
    let h = new f.default("SDP");
    (s = i || (i = {})).AUDIO = "a", s.VIDEO = "v", (a = r || (r = {})).SENDRECV = "sendrecv", a.SENDONLY = "sendonly", a.RECVONLY = "recvonly", a.INACTIVE = "inactive";
    let _ = "UDP/TLS/RTP/SAVPF";

    function S(e) {
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

    function m(e, t, n) {
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

    function T(e) {
        return d.write({
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

    function g(e) {
        let {
            mid: t,
            type: n,
            setup: i,
            direction: r,
            baseSDP: s,
            codec: a,
            payload: o,
            bitrate: u,
            ssrcs: f,
            extensions: h,
            rtxPayload: S,
            sendingVideo: m
        } = e;
        if ("inactive" === r && !p.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
            connection: {
                ip: "0.0.0.0",
                version: 4
            },
            direction: "inactive",
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: _,
            rtp: [{
                codec: "NULL",
                payload: o,
                rate: 0
            }],
            mid: void 0,
            type: n
        };
        let {
            media: [T]
        } = d.parse(s);
        if (T.type = n, T.protocol = _, T.payloads = o, T.setup = i, T.mid = t, T.rtcpMux = "rtcp-mux", T.direction = r, T.ssrcs = f, f.length > 0 && (null != S && (T.ssrcGroups = l(f).chunk(4).map(e => {
                let t = e[0].id;
                return {
                    semantics: "FID",
                    ssrcs: "".concat(t, " ").concat(t + 1)
                }
            }).value(), T.ssrcs = l(f).chunk(4).map(e => {
                let t = e.map(e => (e = {
                    ...e
                }, e.id += 1, e));
                return [...e, ...t]
            }).flatten().value()), p.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === c.name)) {
            let e = f.find(e => "msid" === e.attribute);
            if (null == e) throw Error("msid missing");
            T.msid = e.value, T.ssrcs = T.ssrcs.filter(e => "cname" === e.attribute)
        }
        switch (n) {
            case "audio":
                "Firefox" === c.name ? T.ext = h.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (T.ext = h.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), T.rtcpFb = [{
                    type: "transport-cc",
                    payload: o
                }]), T.rtp.push({
                    codec: a,
                    encoding: 2,
                    payload: o,
                    rate: 48e3
                }), a === E.Codecs.OPUS && T.fmtp.push({
                    config: "minptime=10;useinbandfec=1;usedtx=".concat(m ? "0" : "1"),
                    payload: o
                }), T.maxptime = 60;
                break;
            case "video":
                T.ext = h.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), T.rtp.push({
                    codec: a,
                    payload: o,
                    rate: 9e4
                });
                let g = "x-google-max-bitrate=".concat(u);
                a === E.Codecs.H264 && (g += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), T.fmtp.push({
                    config: g,
                    payload: o
                }), T.rtcpFb = [{
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
                }], null != S && (T.rtp.push({
                    codec: "rtx",
                    payload: S,
                    rate: 9e4
                }), T.fmtp.push({
                    config: "apt=".concat(o),
                    payload: S
                }), T.payloads = "".concat(T.payloads, " ").concat(S))
        }
        return T
    }

    function I(e) {
        let {
            type: t,
            baseSDP: n,
            direction: i,
            audioCodec: r,
            audioPayloadType: s,
            audioBitRate: a,
            videoCodec: o,
            videoPayloadType: u,
            videoBitRate: d,
            rtxPayloadType: f,
            ssrcs: E,
            extensions: p
        } = e, _ = [];
        if (h.info("generateSessionDescription: ".concat(JSON.stringify(E))), "Firefox" === c.name) {
            let e = "answer" === t ? "passive" : "active";
            E.forEach(t => {
                let [i, l, c, E, h] = t;
                if ("video" !== c || 0 !== u && 0 !== f) _.push(g({
                    mid: h,
                    type: c,
                    setup: e,
                    direction: E,
                    baseSDP: n,
                    codec: "audio" === c ? r : o,
                    payload: "audio" === c ? s : u,
                    bitrate: "audio" === c ? a : d,
                    ssrcs: m(l, i, "audio" === c ? "a" : "v"),
                    extensions: p
                }))
            })
        } else {
            let e = "answer" === t ? "passive" : "actpass",
                c = l(E).filter(e => {
                    let [t, n, i, r, s] = e;
                    return "inactive" !== r && "audio" === i
                }).map(e => {
                    let [t, n] = e;
                    return m(n, t, "a")
                }).value();
            if (_.push(g({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: r,
                    payload: s,
                    bitrate: a,
                    ssrcs: l.flatten(c),
                    extensions: p
                })), u > 0) {
                let t = l(E).filter(e => {
                    let [t, n, i, r, s] = e;
                    return "inactive" !== r && "video" === i
                }).map(e => {
                    let [t, n] = e;
                    return m(n, t, "v")
                }).value();
                _.push(g({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: o,
                    payload: u,
                    bitrate: d,
                    ssrcs: l.flatten(t),
                    extensions: p,
                    rtxPayload: f
                }))
            }
        }
        let S = T(_);
        return new RTCSessionDescription({
            type: t,
            sdp: S
        })
    }

    function C(e) {
        let {
            type: t,
            baseSDP: n,
            audioCodec: i,
            audioPayloadType: r,
            audioBitRate: s,
            videoCodec: a,
            videoPayloadType: o,
            videoBitRate: l,
            sendingVideo: u,
            rtxPayloadType: c,
            ssrcs: d,
            extensions: f
        } = e, E = [], p = "answer" === t ? "passive" : "actpass";
        d.forEach(e => {
            let t, {
                ssrc: d,
                cname: h,
                type: _,
                direction: S,
                mid: T
            } = e;
            "" !== h ? t = m(h, d, "audio" === _ ? "a" : "v") : (t = [], "sendonly" === S ? S = "inactive" : "sendrecv" === S && (S = "recvonly"));
            E.push(g({
                mid: T,
                type: _,
                setup: p,
                direction: S,
                baseSDP: n,
                codec: "audio" === _ ? i : a,
                payload: "audio" === _ ? r : o,
                bitrate: "audio" === _ ? s : l,
                ssrcs: t,
                extensions: f,
                rtxPayload: "audio" === _ ? null : c,
                sendingVideo: u
            }))
        });
        let h = T(E);
        return new RTCSessionDescription({
            type: t,
            sdp: h
        })
    }

    function v(e, t, n, i, r) {
        let s = l.find(e, {
            codec: i
        });
        if (null == s) return null;
        let a = l.find(t, e => RegExp("^apt=".concat(s.payload)).test(e.config)),
            o = null;
        if (null != a) {
            let t = l.find(e, {
                codec: E.Codecs.RTX,
                payload: a.payload
            });
            null != t && (o = t.payload)
        }
        return {
            type: n,
            name: i,
            priority: r + 1,
            payloadType: s.payload,
            rtxPayloadType: o
        }
    }

    function A(e) {
        let t = d.parse(e).media.reduce((e, t) => {
            let n, {
                type: i,
                rtp: r,
                ssrcs: s,
                fmtp: a,
                direction: o,
                mid: u
            } = t;
            switch (e.outboundStreams.push({
                    type: i,
                    direction: o,
                    mid: u
                }), i) {
                case "audio":
                    [E.Codecs.OPUS].forEach((t, n) => {
                        let s = v(r, a, i, t, n);
                        null != s && e.codecs.push(s)
                    }), "sendrecv" === o && null != (n = l.find(s, {
                        attribute: "cname"
                    })) && (e.audioSSRC = n.id);
                    break;
                case "video":
                    [E.Codecs.H264, E.Codecs.VP8, E.Codecs.VP9].forEach((t, n) => {
                        let s = v(r, a, i, t, n);
                        null != s && e.codecs.push(s)
                    }), "sendrecv" === o && (null != (n = l.find(s, {
                        attribute: "cname"
                    })) && (e.videoSSRC = n.id), null != (n = l.findLast(s, {
                        attribute: "cname"
                    })) && (n.id === e.videoSSRC && h.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
            }
            return e
        }, {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        });
        return t.codecs = l.uniqWith(t.codecs, l.isEqual), t
    }

    function R(e) {
        var t;
        let {
            codecs: n
        } = A(e), i = n.find(e => e.name === E.Codecs.VP8), r = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
        return {
            sdp: l(e).split(/\r\n/).filter(e => r.test(e)).uniq().join("\n"),
            codecs: n
        }
    }

    function N(e) {
        if (!e.includes("a=fingerprint")) return h.error("Remote SDP does not include fingerprint!"), !1;
        if (!e.includes("a=ice-ufrag")) return h.error("Remote SDP does not include ICE user name!"), !1;
        if (!e.includes("a=ice-pwd")) return h.error("Remote SDP does not include ICE password!"), !1;
        if (!e.includes("a=candidate")) return h.error("Remote SDP does not include ICE candidate!"), !1;
        if (!e.includes("c=")) return h.error("Remote SDP does not include c-line!"), !1;
        let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
        return !(t.split(" ").length < 3) || (h.error("Incorrect c-line: ".concat(t)), !1)
    }

    function O(e) {
        return l(e).split(/\r\n/).filter(e => e.startsWith("a=extmap:")).uniq().map(e => {
            let t = e.split(" "),
                n = t[0].split("/");
            return {
                value: parseInt(n[0].substr(9), 10),
                uri: t[1]
            }
        }).value()
    }
}