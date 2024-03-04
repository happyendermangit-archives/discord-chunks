function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("854508"), n("70102"), n("222007");
    var i, s = n("811022"),
        r = n("571877"),
        a = n("773364"),
        o = n("784063"),
        l = n("149416");
    let u = new s.default("SpeedTester"),
        d = 0;
    i = class e extends r.default {
        static create(t, n) {
            let i = new e(t);
            return u.info("Creating connection to ".concat(n.address, ":").concat(n.port, " with audio ssrc: ").concat(n.ssrc)), i.initialize(n), i
        }
        initialize(e) {
            let t;
            this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.pingInterval = l.PING_INTERVAL, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
            let n = (0, o.getVoiceEngine)();
            t = this.conn = n.createSpeedTestConnectionWithOptions(this.ids.userId, e, (n, i) => {
                if (this.destroyed) return;
                if (null != n && "" !== n) {
                    this.setConnectionState(l.ConnectionStates.NO_ROUTE), this.emit(a.BaseSpeedTesterEvent.Error, n);
                    return
                }
                if (null == i) throw Error("Invalid transport info");
                let {
                    protocol: s,
                    address: r,
                    port: o
                } = i;
                u.info("Connected with local address ".concat(r, ":").concat(o, " and protocol: ").concat(s)), this.codecs = [{
                    type: "audio",
                    name: l.Codecs.OPUS,
                    priority: 1,
                    payloadType: 120
                }, {
                    type: "test",
                    name: l.Codecs.TEST,
                    priority: 1,
                    payloadType: 127
                }], t.getEncryptionModes(n => {
                    var i, d;
                    u.info("Encryption modes: ".concat(n)), t.setTransportOptions(this.getConnectionTransportOptions()), null === (i = t.setPingInterval) || void 0 === i || i.call(t, this.pingInterval), t.setPingCallback(this.handlePing), null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout), this.setConnectionState(l.ConnectionStates.CONNECTED), this.emit(a.BaseSpeedTesterEvent.Connected, s, {
                        address: r,
                        port: o,
                        mode: this.chooseEncryptionMode(e.modes, n),
                        codecs: this.codecs
                    })
                })
            }), this.on("newListener", this.handleNewListenerNative)
        }
        destroy() {
            this.conn.destroy(), this.setConnectionState(l.ConnectionStates.DISCONNECTED), super.destroy()
        }
        setCodecs(e, t) {
            this.conn.setTransportOptions(this.getCodecOptions(e, t))
        }
        setEncryption(e, t) {
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t
                }
            })
        }
        setSDP(e) {}
        getNetworkOverhead(e) {
            this.conn.getNetworkOverhead(e)
        }
        setPingInterval(e) {
            var t, n;
            this.pingInterval = e, null === (t = (n = this.conn).setPingInterval) || void 0 === t || t.call(n, this.pingInterval)
        }
        startSpeedTestSender(e, t, n, i) {
            null != this.conn.startSpeedTestSender ? this.conn.startSpeedTestSender({
                clusterSize: t,
                clusterIntervalMs: n,
                numClusters: i
            }, e) : this.conn.startClientToServerSpeedTest({
                doneCb: e,
                clusterSize: t,
                clusterIntervalMs: n,
                numClusters: i
            })
        }
        stopSpeedTestSender() {
            null != this.conn.stopSpeedTestSender ? this.conn.stopSpeedTestSender() : this.conn.endClientToServerSpeedTest({})
        }
        startSpeedTestReceiver(e, t) {
            null != this.conn.startSpeedTestReceiver ? this.conn.startSpeedTestReceiver({
                packetLimit: t
            }, e) : this.conn.startServerToClientSpeedTest({
                readyCb: e,
                packetLimit: t
            })
        }
        stopSpeedTestReceiver(e) {
            null != this.conn.stopSpeedTestReceiver ? this.conn.stopSpeedTestReceiver(e) : this.conn.endServerToClientSpeedTest({
                doneCb: e
            })
        }
        chooseEncryptionMode(e, t) {
            for (let n of t)
                for (let t of e)
                    if (n === t) return n;
            return "xsalsa20_poly1305"
        }
        getConnectionTransportOptions() {
            let e = {
                qos: this.qos,
                reconnectInterval: this.reconnectInterval,
                userChannelIds: this.ids
            };
            return e
        }
        getCodecOptions(e, t) {
            var n, i, s, r;
            let a;
            a = this.codecs.find(t => t.name === e);
            let o = {
                    type: null !== (n = null == a ? void 0 : a.payloadType) && void 0 !== n ? n : 0,
                    name: e,
                    freq: 48e3,
                    pacsize: 960,
                    channels: 1,
                    rate: 64e3
                },
                l = [{
                    type: null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0,
                    name: e,
                    freq: 48e3,
                    channels: 2,
                    params: {
                        stereo: "1"
                    }
                }];
            a = this.codecs.find(e => e.name === t);
            let u = {
                    type: null !== (s = null == a ? void 0 : a.payloadType) && void 0 !== s ? s : 0
                },
                d = {
                    type: null !== (r = null == a ? void 0 : a.payloadType) && void 0 !== r ? r : 0
                };
            return {
                audioEncoder: o,
                audioDecoders: l,
                testEncoder: u,
                testDecoder: d
            }
        }
        getUserIdBySsrc(e) {}
        constructor(e) {
            super(e), this.mediaEngineConnectionId = "Native-".concat(d++), this.codecs = [], this.qos = !0, this.reconnectInterval = 6e4, this.pingInterval = l.PING_INTERVAL, this.handlePing = (e, t, n) => {
                this.emit(a.BaseSpeedTesterEvent.Ping, e)
            }, this.handlePingTimeout = (e, t, n, i) => {
                this.emit(a.BaseSpeedTesterEvent.PingTimeout, n, i > 0 ? i : 4e3)
            }, this.handleNewListenerNative = e => {
                if (e === a.BaseSpeedTesterEvent.ConnectionStateChange) this.emit(e, this.connectionState)
            }
        }
    }
}