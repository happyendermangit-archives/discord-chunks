function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("70102"), n("424973"), n("462568");
    var s = n("714617"),
        i = n.n(s),
        r = n("446674"),
        a = n("872717"),
        o = n("913144"),
        d = n("619340"),
        u = n("376556"),
        l = n("550368"),
        f = n("718517"),
        _ = n("47319"),
        c = n("102985"),
        g = n("49111");
    let m = 1 * f.default.Millis.MINUTE,
        h = e => "https://youtube.com/watch?v=".concat(e),
        v = 5 * f.default.Millis.MINUTE,
        E = /live_user_(.*)-\{width\}/,
        p = null,
        y = 0,
        T = null,
        C = new Set,
        I = {};

    function S(e, t, n) {
        return a.default.get({
            url: "".concat("https://api.twitch.tv/helix").concat(e),
            query: t,
            headers: {
                "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
                Authorization: "Bearer ".concat(n)
            }
        })
    }
    async function A(e, t) {
        let n = I[e];
        if (null != n) return n;
        let {
            body: {
                data: s
            }
        } = await S("/games", {
            id: e
        }, t), i = s[0].name;
        return I[e] = i, i
    }
    let D = new class e {
        start() {
            !this._started && (this._started = !0, _.default.isFetching() ? d.default.fetch() : this._check())
        }
        stop() {
            this._started = !1, T = null, y = 0, null != this._nextCheck && clearTimeout(this._nextCheck), o.default.dispatch({
                type: "STREAMING_UPDATE",
                stream: null
            })
        }
        async _checkTwitch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
            try {
                var n, s, i, r, a;
                let {
                    body: {
                        data: o
                    }
                } = await S("/streams", {
                    user_id: e.id,
                    first: 1
                }, t), d = o[0];
                if (null == d || "live" !== d.type) throw Error("no stream");
                let {
                    thumbnail_url: f,
                    game_id: _,
                    title: c
                } = d, m = {
                    large_image: null != f && null !== (s = (0, l.getAssetFromImageURL)(g.PlatformTypes.TWITCH, f)) && void 0 !== s ? s : void 0
                }, h = await A(_, t), v = u.default.get(g.PlatformTypes.TWITCH);
                let p = null !== (r = f, i = null === (a = E.exec(r)) || void 0 === a ? void 0 : a[1]) && void 0 !== i ? i : e.name;
                return {
                    url: null === (n = v.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(v, {
                        id: e.id,
                        name: p
                    }),
                    name: v.name,
                    assets: m,
                    details: c,
                    state: h
                }
            } catch (n) {
                if (401 === n.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
                return null
            }
        }
        async _checkYouTube(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (T = null, e.revoked || C.has(e.id)) return null;
            try {
                var n;
                let {
                    body: {
                        items: s
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
                if (s.length < 1) throw Error("no stream");
                let {
                    id: i,
                    snippet: {
                        title: r,
                        thumbnails: o
                    }
                } = s[0], d = {
                    large_image: null !== (n = (0, l.getAssetFromImageURL)(g.PlatformTypes.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0
                };
                return T = {
                    url: h(i),
                    name: u.default.get(g.PlatformTypes.YOUTUBE).name,
                    details: r,
                    assets: d
                }
            } catch (n) {
                if (401 === n.status && null == t) return d.default.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
                return 403 === n.status && C.add(e.id), null
            }
        }
        _check() {
            if (!this._started) return;
            let e = _.default.getAccounts();
            if (null == e) return;
            null != this._nextCheck && clearTimeout(this._nextCheck);
            let t = [g.PlatformTypes.TWITCH],
                n = Date.now();
            y <= n && (t.push(g.PlatformTypes.YOUTUBE), y = n + v);
            let s = e.filter(e => t.includes(e.type)).map(e => e.type === g.PlatformTypes.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e));
            Promise.allSettled(s).then(e => {
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
            this._started && (this._nextCheck = setTimeout(() => this._check(), m))
        }
        constructor() {
            this._started = !1
        }
    };

    function N() {
        c.default.enabled ? D.start() : D.stop()
    }
    class O extends r.default.Store {
        initialize() {
            N(), this.waitFor(_.default), this.syncWith([c.default], N)
        }
        getStream() {
            return p
        }
    }
    O.displayName = "ExternalStreamingStore";
    var P = new O(o.default, {
        STREAMING_UPDATE: function(e) {
            var t;
            if (i(e.stream, p)) return !1;
            p = null !== (t = e.stream) && void 0 !== t ? t : null
        },
        USER_CONNECTIONS_UPDATE: () => D._check()
    })
}