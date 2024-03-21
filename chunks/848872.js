function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007"), n("70102"), n("424973"), n("462568");
    var i = n("714617"),
        s = n.n(i),
        r = n("446674"),
        a = n("872717"),
        o = n("913144"),
        l = n("619340"),
        u = n("376556"),
        d = n("550368"),
        c = n("718517"),
        _ = n("47319"),
        f = n("102985"),
        E = n("49111");
    let h = 1 * c.default.Millis.MINUTE,
        g = e => "https://youtube.com/watch?v=".concat(e),
        m = 5 * c.default.Millis.MINUTE,
        p = /live_user_(.*)-\{width\}/,
        S = null,
        v = 0,
        T = null,
        I = new Set,
        A = {};

    function C(e, t, n) {
        return a.default.get({
            url: "".concat("https://api.twitch.tv/helix").concat(e),
            query: t,
            headers: {
                "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                Authorization: "Bearer ".concat(n)
            }
        })
    }
    async function y(e, t) {
        let n = A[e];
        if (null != n) return n;
        let {
            body: {
                data: i
            }
        } = await C("/games", {
            id: e
        }, t), s = i[0].name;
        return A[e] = s, s
    }
    let N = new class e {
        start() {
            !this._started && (this._started = !0, _.default.isFetching() ? l.default.fetch() : this._check())
        }
        stop() {
            this._started = !1, T = null, v = 0, null != this._nextCheck && clearTimeout(this._nextCheck), o.default.dispatch({
                type: "STREAMING_UPDATE",
                stream: null
            })
        }
        async _checkTwitch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
            try {
                var n, i, s, r, a;
                let {
                    body: {
                        data: o
                    }
                } = await C("/streams", {
                    user_id: e.id,
                    first: 1
                }, t), l = o[0];
                if (null == l || "live" !== l.type) throw Error("no stream");
                let {
                    thumbnail_url: c,
                    game_id: _,
                    title: f
                } = l, h = {
                    large_image: null != c && null !== (i = (0, d.getAssetFromImageURL)(E.PlatformTypes.TWITCH, c)) && void 0 !== i ? i : void 0
                }, g = await y(_, t), m = u.default.get(E.PlatformTypes.TWITCH);
                let S = null !== (r = c, s = null === (a = p.exec(r)) || void 0 === a ? void 0 : a[1]) && void 0 !== s ? s : e.name;
                return {
                    url: null === (n = m.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(m, {
                        id: e.id,
                        name: S
                    }),
                    name: m.name,
                    assets: h,
                    details: f,
                    state: g
                }
            } catch (n) {
                if (401 === n.status && null == t) return l.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                return null
            }
        }
        async _checkYouTube(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (T = null, e.revoked || I.has(e.id)) return null;
            try {
                var n;
                let {
                    body: {
                        items: i
                    }
                } = await a.default.get({
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
                    id: s,
                    snippet: {
                        title: r,
                        thumbnails: o
                    }
                } = i[0], l = {
                    large_image: null !== (n = (0, d.getAssetFromImageURL)(E.PlatformTypes.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0
                };
                return T = {
                    url: g(s),
                    name: u.default.get(E.PlatformTypes.YOUTUBE).name,
                    details: r,
                    assets: l
                }
            } catch (n) {
                if (401 === n.status && null == t) return l.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
                return 403 === n.status && I.add(e.id), null
            }
        }
        _check() {
            if (!this._started) return;
            let e = _.default.getAccounts();
            if (null == e) return;
            null != this._nextCheck && clearTimeout(this._nextCheck);
            let t = [E.PlatformTypes.TWITCH],
                n = Date.now();
            v <= n && (t.push(E.PlatformTypes.YOUTUBE), v = n + m);
            let i = e.filter(e => t.includes(e.type)).map(e => e.type === E.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
            Promise.allSettled(i).then(e => {
                if (this._started) {
                    var t;
                    let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                    null == n && null != T && (n = T), o.default.dispatch({
                        type: "STREAMING_UPDATE",
                        stream: n
                    })
                }
                this._scheduleCheck()
            })
        }
        _scheduleCheck() {
            this._started && (this._nextCheck = setTimeout(() => this._check(), h))
        }
        constructor() {
            this._started = !1
        }
    };

    function R() {
        f.default.enabled ? N.start() : N.stop()
    }
    class O extends r.default.Store {
        initialize() {
            R(), this.waitFor(_.default), this.syncWith([f.default], R)
        }
        getStream() {
            return S
        }
    }
    O.displayName = "ExternalStreamingStore";
    var D = new O(o.default, {
        STREAMING_UPDATE: function(e) {
            var t;
            if (s(e.stream, S)) return !1;
            S = null !== (t = e.stream) && void 0 !== t ? t : null
        },
        USER_CONNECTIONS_UPDATE: () => N._check()
    })
}