function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Directions: function() {
            return s
        },
        getDirection: function() {
            return m
        },
        generateSessionDescription: function() {
            return T
        },
        generateUnifiedSessionDescription: function() {
            return I
        },
        extractSDP: function() {
            return A
        },
        truncateSDP: function() {
            return y
        },
        validateSdp: function() {
            return N
        },
        getExtensions: function() {
            return R
        }
    }), n("222007"), n("70102"), n("424973"), n("808653"), n("700225");
    var i, s, r, a, o = n("773179"),
        l = n.n(o),
        u = n("383536"),
        d = n.n(u),
        c = n("21794"),
        f = n("811022"),
        _ = n("353927"),
        h = n("53452");
    let E = new f.default("SDP");
    (r = i || (i = {})).AUDIO = "a", r.VIDEO = "v", (a = s || (s = {})).SENDRECV = "sendrecv", a.SENDONLY = "sendonly", a.RECVONLY = "recvonly", a.INACTIVE = "inactive";
    let g = "UDP/TLS/RTP/SAVPF";

    function m(e) {
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

    function S(e) {
        return c.write({
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

    function v(e) {
        let {
            mid: t,
            type: n,
            setup: i,
            direction: s,
            baseSDP: r,
            codec: a,
            payload: o,
            bitrate: u,
            ssrcs: f,
            extensions: E,
            rtxPayload: m,
            sendingVideo: p
        } = e;
        if ("inactive" === s && !h.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
            connection: {
                ip: "0.0.0.0",
                version: 4
            },
            direction: "inactive",
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: g,
            rtp: [{
                codec: "NULL",
                payload: o,
                rate: 0
            }],
            mid: void 0,
            type: n
        };
        let {
            media: [S]
        } = c.parse(r);
        if (S.type = n, S.protocol = g, S.payloads = o, S.setup = i, S.mid = t, S.rtcpMux = "rtcp-mux", S.direction = s, S.ssrcs = f, f.length > 0 && (null != m && (S.ssrcGroups = l(f).chunk(4).map(e => {
                let t = e[0].id;
                return {
                    semantics: "FID",
                    ssrcs: "".concat(t, " ").concat(t + 1)
                }
            }).value(), S.ssrcs = l(f).chunk(4).map(e => {
                let t = e.map(e => (e = {
                    ...e
                }, e.id += 1, e));
                return [...e, ...t]
            }).flatten().value()), h.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === d.name)) {
            let e = f.find(e => "msid" === e.attribute);
            if (null == e) throw Error("msid missing");
            S.msid = e.value, S.ssrcs = S.ssrcs.filter(e => "cname" === e.attribute)
        }
        switch (n) {
            case "audio":
                "Firefox" === d.name ? S.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (S.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), S.rtcpFb = [{
                    type: "transport-cc",
                    payload: o
                }]), S.rtp.push({
                    codec: a,
                    encoding: 2,
                    payload: o,
                    rate: 48e3
                }), a === _.Codecs.OPUS && S.fmtp.push({
                    config: "minptime=10;useinbandfec=1;usedtx=".concat(p ? "0" : "1"),
                    payload: o
                }), S.maxptime = 60;
                break;
            case "video":
                S.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), S.rtp.push({
                    codec: a,
                    payload: o,
                    rate: 9e4
                });
                let v = "x-google-max-bitrate=".concat(u);
                a === _.Codecs.H264 && (v += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), S.fmtp.push({
                    config: v,
                    payload: o
                }), S.rtcpFb = [{
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
                }], null != m && (S.rtp.push({
                    codec: "rtx",
                    payload: m,
                    rate: 9e4
                }), S.fmtp.push({
                    config: "apt=".concat(o),
                    payload: m
                }), S.payloads = "".concat(S.payloads, " ").concat(m))
        }
        return S
    }

    function T(e) {
        let {
            type: t,
            baseSDP: n,
            direction: i,
            audioCodec: s,
            audioPayloadType: r,
            audioBitRate: a,
            videoCodec: o,
            videoPayloadType: u,
            videoBitRate: c,
            rtxPayloadType: f,
            ssrcs: _,
            extensions: h
        } = e, g = [];
        if (E.info("generateSessionDescription: ".concat(JSON.stringify(_))), "Firefox" === d.name) {
            let e = "answer" === t ? "passive" : "active";
            _.forEach(t => {
                let [i, l, d, _, E] = t;
                if ("video" !== d || 0 !== u && 0 !== f) g.push(v({
                    mid: E,
                    type: d,
                    setup: e,
                    direction: _,
                    baseSDP: n,
                    codec: "audio" === d ? s : o,
                    payload: "audio" === d ? r : u,
                    bitrate: "audio" === d ? a : c,
                    ssrcs: p(l, i, "audio" === d ? "a" : "v"),
                    extensions: h
                }))
            })
        } else {
            let e = "answer" === t ? "passive" : "actpass",
                d = l(_).filter(e => {
                    let [t, n, i, s, r] = e;
                    return "inactive" !== s && "audio" === i
                }).map(e => {
                    let [t, n] = e;
                    return p(n, t, "a")
                }).value();
            if (g.push(v({
                    mid: "audio",
                    type: "audio",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: s,
                    payload: r,
                    bitrate: a,
                    ssrcs: l.flatten(d),
                    extensions: h
                })), u > 0) {
                let t = l(_).filter(e => {
                    let [t, n, i, s, r] = e;
                    return "inactive" !== s && "video" === i
                }).map(e => {
                    let [t, n] = e;
                    return p(n, t, "v")
                }).value();
                g.push(v({
                    mid: "video",
                    type: "video",
                    setup: e,
                    direction: i,
                    baseSDP: n,
                    codec: o,
                    payload: u,
                    bitrate: c,
                    ssrcs: l.flatten(t),
                    extensions: h,
                    rtxPayload: f
                }))
            }
        }
        let m = S(g);
        return new RTCSessionDescription({
            type: t,
            sdp: m
        })
    }

    function I(e) {
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
        } = e, _ = [], h = "answer" === t ? "passive" : "actpass";
        c.forEach(e => {
            let t, {
                ssrc: c,
                cname: E,
                type: g,
                direction: m,
                mid: S
            } = e;
            "" !== E ? t = p(E, c, "audio" === g ? "a" : "v") : (t = [], "sendonly" === m ? m = "inactive" : "sendrecv" === m && (m = "recvonly"));
            _.push(v({
                mid: S,
                type: g,
                setup: h,
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
        let E = S(_);
        return new RTCSessionDescription({
            type: t,
            sdp: E
        })
    }

    function C(e, t, n, i, s) {
        let r = l.find(e, {
            codec: i
        });
        if (null == r) return null;
        let a = l.find(t, e => RegExp("^apt=".concat(r.payload)).test(e.config)),
            o = null;
        if (null != a) {
            let t = l.find(e, {
                codec: _.Codecs.RTX,
                payload: a.payload
            });
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

    function A(e) {
        let t = c.parse(e).media.reduce((e, t) => {
            let n, {
                type: i,
                rtp: s,
                ssrcs: r,
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
                    [_.Codecs.OPUS].forEach((t, n) => {
                        let r = C(s, a, i, t, n);
                        null != r && e.codecs.push(r)
                    }), "sendrecv" === o && null != (n = l.find(r, {
                        attribute: "cname"
                    })) && (e.audioSSRC = n.id);
                    break;
                case "video":
                    [_.Codecs.H264, _.Codecs.VP8, _.Codecs.VP9].forEach((t, n) => {
                        let r = C(s, a, i, t, n);
                        null != r && e.codecs.push(r)
                    }), "sendrecv" === o && (null != (n = l.find(r, {
                        attribute: "cname"
                    })) && (e.videoSSRC = n.id), null != (n = l.findLast(r, {
                        attribute: "cname"
                    })) && (n.id === e.videoSSRC && E.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
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

    function y(e) {
        var t;
        let {
            codecs: n
        } = A(e), i = n.find(e => e.name === _.Codecs.VP8), s = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
        return {
            sdp: l(e).split(/\r\n/).filter(e => s.test(e)).uniq().join("\n"),
            codecs: n
        }
    }

    function N(e) {
        if (!e.includes("a=fingerprint")) return E.error("Remote SDP does not include fingerprint!"), !1;
        if (!e.includes("a=ice-ufrag")) return E.error("Remote SDP does not include ICE user name!"), !1;
        if (!e.includes("a=ice-pwd")) return E.error("Remote SDP does not include ICE password!"), !1;
        if (!e.includes("a=candidate")) return E.error("Remote SDP does not include ICE candidate!"), !1;
        if (!e.includes("c=")) return E.error("Remote SDP does not include c-line!"), !1;
        let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
        return !(t.split(" ").length < 3) || (E.error("Incorrect c-line: ".concat(t)), !1)
    }

    function R(e) {
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