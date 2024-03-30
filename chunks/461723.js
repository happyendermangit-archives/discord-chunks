function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Directions: function() {
            return a
        },
        extractSDP: function() {
            return L
        },
        generateSessionDescription: function() {
            return C
        },
        generateUnifiedSessionDescription: function() {
            return P
        },
        getDirection: function() {
            return A
        },
        getExtensions: function() {
            return w
        },
        truncateSDP: function() {
            return M
        },
        validateSdp: function() {
            return U
        }
    });
    var r, o, i, a, u = n("403644"),
        s = n.n(u),
        l = n("565925"),
        c = n.n(l),
        f = n("21690"),
        d = n.n(f),
        _ = n("264344"),
        E = n.n(_),
        p = n("988367"),
        m = n("188129"),
        y = n("439386"),
        I = n("681751");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || S(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || S(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e, t) {
        if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
        }
    }
    var v = new m.Logger("SDP");
    (r = i || (i = {})).AUDIO = "a", r.VIDEO = "v", (o = a || (a = {})).SENDRECV = "sendrecv", o.SENDONLY = "sendonly", o.RECVONLY = "recvonly", o.INACTIVE = "inactive";
    var g = "UDP/TLS/RTP/SAVPF";

    function A(e) {
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

    function b(e, t, n) {
        var r = "".concat(e, "-").concat(t),
            o = "".concat(n).concat(r);
        return [{
            attribute: "cname",
            id: t,
            value: r
        }, {
            attribute: "msid",
            id: t,
            value: "".concat(r, " ").concat(o)
        }, {
            attribute: "mslabel",
            id: t,
            value: r
        }, {
            attribute: "label",
            id: t,
            value: o
        }]
    }

    function N(e) {
        return p.write({
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
                mids: e.filter(function(e) {
                    return null != e.mid
                }).map(function(e) {
                    return e.mid
                }).join(" ")
            }],
            media: e
        })
    }

    function R(e) {
        var t = e.mid,
            n = e.type,
            r = e.setup,
            o = e.direction,
            i = e.baseSDP,
            a = e.codec,
            u = e.payload,
            l = e.bitrate,
            c = e.ssrcs,
            f = e.extensions,
            d = e.rtxPayload,
            _ = e.sendingVideo;
        if ("inactive" === o && !I.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
            connection: {
                ip: "0.0.0.0",
                version: 4
            },
            direction: "inactive",
            fmtp: [],
            payloads: u,
            port: 0,
            protocol: g,
            rtp: [{
                codec: "NULL",
                payload: u,
                rate: 0
            }],
            mid: void 0,
            type: n
        };
        var m = O(p.parse(i).media, 1)[0];
        if (m.type = n, m.protocol = g, m.payloads = u, m.setup = r, m.mid = t, m.rtcpMux = "rtcp-mux", m.direction = o, m.ssrcs = c, c.length > 0 && (null != d && (m.ssrcGroups = s()(c, 4).map(function(e) {
                var t = e[0].id;
                return {
                    semantics: "FID",
                    ssrcs: "".concat(t, " ").concat(t + 1)
                }
            }), m.ssrcs = s()(c, 4).map(function(e) {
                var t = e.map(function(e) {
                    return e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({}, e), e.id += 1, e
                });
                return T(e).concat(T(t))
            }).flat()), I.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === E().name)) {
            var h = c.find(function(e) {
                return "msid" === e.attribute
            });
            if (null == h) throw Error("msid missing");
            m.msid = h.value, m.ssrcs = m.ssrcs.filter(function(e) {
                return "cname" === e.attribute
            })
        }
        switch (n) {
            case "audio":
                "Firefox" === E().name ? m.ext = f.filter(function(e) {
                    return "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri
                }) : (m.ext = f.filter(function(e) {
                    return "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri
                }), m.rtcpFb = [{
                    type: "transport-cc",
                    payload: u
                }]), m.rtp.push({
                    codec: a,
                    encoding: 2,
                    payload: u,
                    rate: 48e3
                }), a === y.Codecs.OPUS && m.fmtp.push({
                    config: "minptime=10;useinbandfec=1;usedtx=".concat(_ ? "0" : "1"),
                    payload: u
                }), m.maxptime = 60;
                break;
            case "video":
                m.ext = f.filter(function(e) {
                    return "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri
                }), m.rtp.push({
                    codec: a,
                    payload: u,
                    rate: 9e4
                });
                var S = "x-google-max-bitrate=".concat(l);
                a === y.Codecs.H264 && (S += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), m.fmtp.push({
                    config: S,
                    payload: u
                }), m.rtcpFb = [{
                    type: "ccm",
                    subtype: "fir",
                    payload: u
                }, {
                    type: "nack",
                    payload: u
                }, {
                    type: "nack",
                    subtype: "pli",
                    payload: u
                }, {
                    type: "goog-remb",
                    payload: u
                }, {
                    type: "transport-cc",
                    payload: u
                }], null != d && (m.rtp.push({
                    codec: "rtx",
                    payload: d,
                    rate: 9e4
                }), m.fmtp.push({
                    config: "apt=".concat(u),
                    payload: d
                }), m.payloads = "".concat(m.payloads, " ").concat(d))
        }
        return m
    }

    function C(e) {
        var t = e.type,
            n = e.baseSDP,
            r = e.direction,
            o = e.audioCodec,
            i = e.audioPayloadType,
            a = e.audioBitRate,
            u = e.videoCodec,
            s = e.videoPayloadType,
            l = e.videoBitRate,
            c = e.rtxPayloadType,
            f = e.ssrcs,
            d = e.extensions,
            _ = [];
        if (v.info("generateSessionDescription: ".concat(JSON.stringify(f))), "Firefox" === E().name) {
            var p = "answer" === t ? "passive" : "active";
            f.forEach(function(e) {
                var t = O(e, 5),
                    r = t[0],
                    f = t[1],
                    E = t[2],
                    m = t[3],
                    y = t[4];
                ("video" !== E || 0 !== s && 0 !== c) && _.push(R({
                    mid: y,
                    type: E,
                    setup: p,
                    direction: m,
                    baseSDP: n,
                    codec: "audio" === E ? o : u,
                    payload: "audio" === E ? i : s,
                    bitrate: "audio" === E ? a : l,
                    ssrcs: b(f, r, "audio" === E ? "a" : "v"),
                    extensions: d
                }))
            })
        } else {
            var m = "answer" === t ? "passive" : "actpass",
                y = f.filter(function(e) {
                    var t = O(e, 5),
                        n = (t[0], t[1], t[2]),
                        r = t[3];
                    return t[4], "inactive" !== r && "audio" === n
                }).map(function(e) {
                    var t = O(e, 2),
                        n = t[0];
                    return b(t[1], n, "a")
                });
            if (_.push(R({
                    mid: "audio",
                    type: "audio",
                    setup: m,
                    direction: r,
                    baseSDP: n,
                    codec: o,
                    payload: i,
                    bitrate: a,
                    ssrcs: y.flat(),
                    extensions: d
                })), s > 0) {
                var I = f.filter(function(e) {
                    var t = O(e, 5),
                        n = (t[0], t[1], t[2]),
                        r = t[3];
                    return t[4], "inactive" !== r && "video" === n
                }).map(function(e) {
                    var t = O(e, 2),
                        n = t[0];
                    return b(t[1], n, "v")
                });
                _.push(R({
                    mid: "video",
                    type: "video",
                    setup: m,
                    direction: r,
                    baseSDP: n,
                    codec: u,
                    payload: s,
                    bitrate: l,
                    ssrcs: I.flat(),
                    extensions: d,
                    rtxPayload: c
                }))
            }
        }
        var h = N(_);
        return new RTCSessionDescription({
            type: t,
            sdp: h
        })
    }

    function P(e) {
        var t = e.type,
            n = e.baseSDP,
            r = e.audioCodec,
            o = e.audioPayloadType,
            i = e.audioBitRate,
            a = e.videoCodec,
            u = e.videoPayloadType,
            s = e.videoBitRate,
            l = e.sendingVideo,
            c = e.rtxPayloadType,
            f = e.ssrcs,
            d = e.extensions,
            _ = [],
            E = "answer" === t ? "passive" : "actpass";
        f.forEach(function(e) {
            var t, f = e.ssrc,
                p = e.cname,
                m = e.type,
                y = e.direction,
                I = e.mid;
            "" !== p ? t = b(p, f, "audio" === m ? "a" : "v") : (t = [], "sendonly" === y ? y = "inactive" : "sendrecv" === y && (y = "recvonly"));
            _.push(R({
                mid: I,
                type: m,
                setup: E,
                direction: y,
                baseSDP: n,
                codec: "audio" === m ? r : a,
                payload: "audio" === m ? o : u,
                bitrate: "audio" === m ? i : s,
                ssrcs: t,
                extensions: d,
                rtxPayload: "audio" === m ? null : c,
                sendingVideo: l
            }))
        });
        var p = N(_);
        return new RTCSessionDescription({
            type: t,
            sdp: p
        })
    }

    function D(e, t, n, r, o) {
        var i = e.find(function(e) {
            return e.codec === r
        });
        if (null == i) return null;
        var a = t.find(function(e) {
                return RegExp("^apt=".concat(i.payload)).test(e.config)
            }),
            u = null;
        if (null != a) {
            var s = e.find(function(e) {
                return e.codec === y.Codecs.RTX && e.payload === a.payload
            });
            null != s && (u = s.payload)
        }
        return {
            type: n,
            name: r,
            priority: o + 1,
            payloadType: i.payload,
            rtxPayloadType: u
        }
    }

    function L(e) {
        var t = p.parse(e).media.reduce(function(e, t) {
            var n, r = t.type,
                o = t.rtp,
                i = t.ssrcs,
                a = t.fmtp,
                u = t.direction,
                s = t.mid;
            switch (e.outboundStreams.push({
                    type: r,
                    direction: u,
                    mid: s
                }), r) {
                case "audio":
                    [y.Codecs.OPUS].forEach(function(t, n) {
                        var i = D(o, a, r, t, n);
                        null != i && e.codecs.push(i)
                    }), "sendrecv" === u && null != (n = null == i ? void 0 : i.find(function(e) {
                        return "cname" === e.attribute
                    })) && (e.audioSSRC = n.id);
                    break;
                case "video":
                    [y.Codecs.H264, y.Codecs.VP8, y.Codecs.VP9].forEach(function(t, n) {
                        var i = D(o, a, r, t, n);
                        null != i && e.codecs.push(i)
                    }), "sendrecv" === u && (null != (n = null == i ? void 0 : i.find(function(e) {
                        return "cname" === e.attribute
                    })) && (e.videoSSRC = n.id), null != (n = null == i ? void 0 : i.findLast(function(e) {
                        return "cname" === e.attribute
                    })) && (n.id === e.videoSSRC && v.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
            }
            return e
        }, {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        });
        return t.codecs = d()(t.codecs, c()), t
    }

    function M(e) {
        var t, n = L(e).codecs,
            r = n.find(function(e) {
                return e.name === y.Codecs.VP8
            }),
            o = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == r ? void 0 : r.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
        return {
            sdp: T(new Set(e.split(/\r\n/).filter(function(e) {
                return o.test(e)
            }))).join("\n"),
            codecs: n
        }
    }

    function U(e) {
        if (!e.includes("a=fingerprint")) return v.error("Remote SDP does not include fingerprint!"), !1;
        if (!e.includes("a=ice-ufrag")) return v.error("Remote SDP does not include ICE user name!"), !1;
        if (!e.includes("a=ice-pwd")) return v.error("Remote SDP does not include ICE password!"), !1;
        if (!e.includes("a=candidate")) return v.error("Remote SDP does not include ICE candidate!"), !1;
        if (!e.includes("c=")) return v.error("Remote SDP does not include c-line!"), !1;
        var t = e.split("\n").filter(function(e) {
            return e.startsWith("c=")
        }).join().trim();
        return !(t.split(" ").length < 3) || (v.error("Incorrect c-line: ".concat(t)), !1)
    }

    function w(e) {
        return T(new Set(e.split(/\r\n/).filter(function(e) {
            return e.startsWith("a=extmap:")
        }))).map(function(e) {
            var t = e.split(" ");
            return {
                value: parseInt(t[0].split("/")[0].substr(9), 10),
                uri: t[1]
            }
        })
    }
}