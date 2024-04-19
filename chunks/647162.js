function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ensureSpotifyPlayable: function() {
            return I
        },
        ensureSpotifyPremium: function() {
            return f
        },
        getSpotifyMetadataFromActivity: function() {
            return h
        },
        isSpotifyPlayable: function() {
            return E
        },
        isSpotifyPremium: function() {
            return T
        }
    }), n("411104"), n("177593"), n("47120");
    var i = n("763472"),
        r = n("726542"),
        s = n("594190"),
        a = n("70956"),
        o = n("781518"),
        l = n("18323"),
        u = n("768419"),
        d = n("616922"),
        _ = n("981631");
    let c = 30 * a.default.Millis.SECOND;

    function E(e) {
        return null != e.getActiveSocketAndDevice() || l.default.isProtocolRegistered()
    }

    function I() {
        let e = u.default.getActiveSocketAndDevice();
        if (null != e) return Promise.resolve(e);
        if (!l.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
        let t = u.default.getPlayableComputerDevices();
        if (s.default.isObservedAppRunning(r.default.get(_.PlatformTypes.SPOTIFY).name) && t.length > 0) {
            let {
                socket: e,
                device: n
            } = t[0];
            return (0, o.setActiveDevice)(e.accountId, n.id), Promise.resolve({
                socket: e,
                device: n
            })
        }
        return new Promise((e, n) => {
            let i = setTimeout(() => {
                    u.default.removeChangeListener(r), n(Error("timeout launching spotify"))
                }, c),
                r = () => {
                    for (let {
                            socket: n,
                            device: s
                        }
                        of u.default.getPlayableComputerDevices()) null == t.find(e => e.device.id === s.id) && (clearTimeout(i), u.default.removeChangeListener(r), setImmediate(() => {
                        (0, o.setActiveDevice)(n.accountId, s.id), e({
                            socket: n,
                            device: s
                        })
                    }))
                };
            u.default.addChangeListener(r), window.open("".concat(d.SPOTIFY_APP_PROTOCOL, ":"))
        })
    }

    function T() {
        let e = u.default.getActiveSocketAndDevice();
        if (null == e) return null;
        let {
            socket: t
        } = e;
        return t.isPremium
    }

    function f() {
        let e = u.default.getActiveSocketAndDevice();
        if (null == e) return Promise.reject(Error("no active profile"));
        let {
            socket: t
        } = e;
        return t.isPremium ? Promise.resolve() : (0, o.getProfile)(t.accountId, t.accessToken).then(() => {
            if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
        })
    }

    function S(e) {
        if ("string" == typeof e) return e;
        throw Error("value is not a string")
    }
    async function h(e, t) {
        var n;
        let r = await (0, i.getMetadata)(e, t),
            s = (0, d.getSpotifyResourceType)(S(null !== (n = r.type) && void 0 !== n ? n : d.SpotifyResourceTypes.TRACK));
        if (null === s) throw Error("invalid type ".concat(r.type));
        return {
            context_uri: "string" == typeof r.context_uri ? r.context_uri : void 0,
            album_id: S(r.album_id),
            artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(S) : [],
            type: s,
            button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(S) : []
        }
    }
}