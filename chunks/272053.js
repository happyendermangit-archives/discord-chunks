function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104"), n("653041"), n("998459");
    var i, r = n("348327"),
        s = n.n(r),
        a = n("442837"),
        o = n("544891"),
        l = n("570140"),
        u = n("457330"),
        d = n("726542"),
        _ = n("81063"),
        c = n("70956"),
        E = n("553795"),
        I = n("246946"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = 1 * c.default.Millis.MINUTE,
        h = e => "https://youtube.com/watch?v=".concat(e),
        A = 5 * c.default.Millis.MINUTE,
        m = /live_user_(.*)-\{width\}/,
        N = null,
        p = 0,
        O = null,
        R = new Set,
        C = {};

    function g(e, t, n) {
        return o.HTTP.get({
            url: "".concat("https://api.twitch.tv/helix").concat(e),
            query: t,
            headers: {
                "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                Authorization: "Bearer ".concat(n)
            }
        })
    }
    async function L(e, t) {
        let n = C[e];
        if (null != n) return n;
        let {
            body: {
                data: i
            }
        } = await g("/games", {
            id: e
        }, t), r = i[0].name;
        return C[e] = r, r
    }
    let v = new class e {
        start() {
            !this._started && (this._started = !0, E.default.isFetching() ? u.default.fetch() : this._check())
        }
        stop() {
            this._started = !1, O = null, p = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.default.dispatch({
                type: "STREAMING_UPDATE",
                stream: null
            })
        }
        async _checkTwitch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
            try {
                var n, i, r, s, a;
                let {
                    body: {
                        data: o
                    }
                } = await g("/streams", {
                    user_id: e.id,
                    first: 1
                }, t), l = o[0];
                if (null == l || "live" !== l.type) throw Error("no stream");
                let {
                    thumbnail_url: u,
                    game_id: c,
                    title: E
                } = l, I = {
                    large_image: null != u && null !== (i = (0, _.getAssetFromImageURL)(T.PlatformTypes.TWITCH, u)) && void 0 !== i ? i : void 0
                }, f = await L(c, t), S = d.default.get(T.PlatformTypes.TWITCH);
                let h = null !== (s = u, r = null === (a = m.exec(s)) || void 0 === a ? void 0 : a[1]) && void 0 !== r ? r : e.name;
                return {
                    url: null === (n = S.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(S, {
                        id: e.id,
                        name: h
                    }),
                    name: S.name,
                    assets: I,
                    details: E,
                    state: f
                }
            } catch (n) {
                if (401 === n.status && null == t) return u.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                return null
            }
        }
        async _checkYouTube(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (O = null, e.revoked || R.has(e.id)) return null;
            try {
                var n;
                let {
                    body: {
                        items: i
                    }
                } = await o.HTTP.get({
                    url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                    query: {
                        part: "id,snippet",
                        broadcastStatus: "active",
                        broadcastType: "all"
                    },
                    headers: {
                        Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
                    },
                    oldFormErrors: !0
                });
                if (i.length < 1) throw Error("no stream");
                let {
                    id: r,
                    snippet: {
                        title: s,
                        thumbnails: a
                    }
                } = i[0], l = {
                    large_image: null !== (n = (0, _.getAssetFromImageURL)(T.PlatformTypes.YOUTUBE, a.high.url)) && void 0 !== n ? n : void 0
                };
                return O = {
                    url: h(r),
                    name: d.default.get(T.PlatformTypes.YOUTUBE).name,
                    details: s,
                    assets: l
                }
            } catch (n) {
                if (401 === n.status && null == t) return u.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
                return 403 === n.status && R.add(e.id), null
            }
        }
        _check() {
            if (!this._started) return;
            let e = E.default.getAccounts();
            if (null == e) return;
            null != this._nextCheck && clearTimeout(this._nextCheck);
            let t = [T.PlatformTypes.TWITCH],
                n = Date.now();
            p <= n && (t.push(T.PlatformTypes.YOUTUBE), p = n + A), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === T.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
                if (this._started) {
                    var t;
                    let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                    null == n && null != O && (n = O), l.default.dispatch({
                        type: "STREAMING_UPDATE",
                        stream: n
                    })
                }
                this._scheduleCheck()
            })
        }
        _scheduleCheck() {
            this._started && (this._nextCheck = setTimeout(() => this._check(), S))
        }
        constructor() {
            f(this, "_nextCheck", void 0), f(this, "_started", void 0), this._started = !1
        }
    };

    function D() {
        I.default.enabled ? v.start() : v.stop()
    }
    class M extends(i = a.default.Store) {
        initialize() {
            D(), this.waitFor(E.default), this.syncWith([I.default], D)
        }
        getStream() {
            return N
        }
    }
    f(M, "displayName", "ExternalStreamingStore"), t.default = new M(l.default, {
        STREAMING_UPDATE: function(e) {
            var t;
            if (s()(e.stream, N)) return !1;
            N = null !== (t = e.stream) && void 0 !== t ? t : null
        },
        USER_CONNECTIONS_UPDATE: () => v._check()
    })
}