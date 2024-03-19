function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        isSpotifyPlayable: function() {
            return _
        },
        ensureSpotifyPlayable: function() {
            return f
        },
        isSpotifyPremium: function() {
            return I
        },
        ensureSpotifyPremium: function() {
            return A
        },
        getSpotifyMetadataFromActivity: function() {
            return C
        }
    }), i("70102"), i("860677"), i("222007");
    var n = i("968194"),
        l = i("376556"),
        a = i("161454"),
        u = i("718517"),
        r = i("613691"),
        d = i("155815"),
        s = i("662285"),
        o = i("450484"),
        c = i("49111");
    let E = 30 * u.default.Millis.SECOND;

    function _(t) {
        return null != t.getActiveSocketAndDevice() || d.default.isProtocolRegistered()
    }

    function f() {
        let t = s.default.getActiveSocketAndDevice();
        if (null != t) return Promise.resolve(t);
        if (!d.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
        let e = s.default.getPlayableComputerDevices();
        if (a.default.isObservedAppRunning(l.default.get(c.PlatformTypes.SPOTIFY).name) && e.length > 0) {
            let {
                socket: t,
                device: i
            } = e[0];
            return (0, r.setActiveDevice)(t.accountId, i.id), Promise.resolve({
                socket: t,
                device: i
            })
        }
        return new Promise((t, i) => {
            let n = setTimeout(() => {
                    s.default.removeChangeListener(l), i(Error("timeout launching spotify"))
                }, E),
                l = () => {
                    let i = s.default.getPlayableComputerDevices();
                    for (let {
                            socket: a,
                            device: u
                        }
                        of i) null == e.find(t => t.device.id === u.id) && (clearTimeout(n), s.default.removeChangeListener(l), setImmediate(() => {
                        (0, r.setActiveDevice)(a.accountId, u.id), t({
                            socket: a,
                            device: u
                        })
                    }))
                };
            s.default.addChangeListener(l), window.open("".concat(o.SPOTIFY_APP_PROTOCOL, ":"))
        })
    }

    function I() {
        let t = s.default.getActiveSocketAndDevice();
        if (null == t) return null;
        let {
            socket: e
        } = t;
        return e.isPremium
    }

    function A() {
        let t = s.default.getActiveSocketAndDevice();
        if (null == t) return Promise.reject(Error("no active profile"));
        let {
            socket: e
        } = t;
        return e.isPremium ? Promise.resolve() : (0, r.getProfile)(e.accountId, e.accessToken).then(() => {
            if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"))
        })
    }

    function T(t) {
        if ("string" == typeof t) return t;
        throw Error("value is not a string")
    }
    async function C(t, e) {
        var i;
        let l = await (0, n.getMetadata)(t, e),
            a = (0, o.getSpotifyResourceType)(T(null !== (i = l.type) && void 0 !== i ? i : o.SpotifyResourceTypes.TRACK));
        if (null === a) throw Error("invalid type ".concat(l.type));
        return {
            context_uri: "string" == typeof l.context_uri ? l.context_uri : void 0,
            album_id: T(l.album_id),
            artist_ids: Array.isArray(l.artist_ids) ? l.artist_ids.map(T) : [],
            type: a,
            button_urls: Array.isArray(l.button_url) ? l.button_url.map(T) : []
        }
    }
}