function(e, t, n) {
    "use strict";
    n.r(t), n("411104"), n("47120");
    var i = n("274616"),
        r = n("710845"),
        a = n("893988"),
        s = n("812967"),
        o = n("314897"),
        l = n("757266"),
        u = n("906467"),
        d = n("6132"),
        _ = n("830168"),
        c = n("358085"),
        E = n("591759"),
        I = n("998502"),
        T = n("981631");
    let f = new r.default("Games"),
        S = {},
        h = 0,
        A = null;

    function m() {
        return null != A ? Promise.resolve(A) : (0, c.isDesktop)() ? I.default.ensureModule("discord_game_utils").then(() => {
            let e = I.default.getGameUtils();
            return null != e && null != e.findLaunchable ? (A = e, e) : Promise.reject(Error("game utils not found"))
        }) : Promise.reject(Error("not desktop client"))
    }

    function N(e) {
        let t = {
                id: e.id,
                name: e.name,
                thirdPartySkus: e.thirdPartySkus,
                executables: e.executables.filter(e => e.os === (0, c.getPlatformName)()).map(e => e.name)
            },
            n = e.aliases.map(e => ({
                ...t,
                name: e
            }));
        return [t, ...n]
    }

    function p(e) {
        return {
            id: e
        }
    }
    async function O(e) {
        if (!Array.isArray(e) && (e = [e]), !u.default.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
                let {
                    distributor: t
                } = e;
                return t === T.Distributors.BATTLENET
            }))), 0 === e.length) throw Error("No remaining launchable queries");
        let t = Date.now();
        t > h && (h = t + 36e5, S = {});
        let n = await m();
        for (let t of e) {
            let e = S[t.id];
            if (null != e) return e;
            let i = await new Promise(e => n.findLaunchable(t, e));
            if (null != i) return S[t.id] = i, i
        }
        throw Error("could not find launchable")
    }

    function R(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (e()) {
            t();
            return
        }
        setTimeout(() => {
            250 * i <= 12e4 ? R(e, t, n, i + 1) : n()
        }, 250)
    }

    function C(e) {
        return f.info("launch", e), new Promise((t, n) => {
            null == E.default.safeParseWithQuery(e.launchTarget) ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
        })
    }
    t.default = {
        waitSubscribed: (e, t) => new Promise((n, i) => R(() => s.default.isSubscribed(e, t), n, i)),
        waitConnected(e) {
            return new Promise(R.bind(this, () => l.default.isConnected(e)))
        },
        isLaunchable: e => O(N(e)).then(e => null != e).catch(() => !1),
        launch: e => O(N(e)).then(C),
        launchDispatchApplication(e, t, n, r, s) {
            let {
                launchOptions: l,
                defaultLaunchOptionId: u,
                installPath: c,
                applicationId: E,
                branchId: I,
                buildId: f,
                shouldPatch: S
            } = e;
            if (null == l || null == u || null == c) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
            null == s && (s = u);
            let h = l[s];
            if (null == h) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
            return (0, i.fetchBranches)([I]).then(e => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let {
                    liveBuildId: n
                } = t;
                if (S && n !== f) return Promise.reject(Error("live build id changed"))
            }).then(() => _.default.runLaunchSetup(E, I)).then(() => {
                let e = (0, a.default)(c),
                    i = {
                        DISCORD_INSTANCE_ID: d.default.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: T.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(e, o.default.getId())
                    };
                return _.default.launch(E, I, h.name, i)
            })
        },
        removeShortcuts: e => (0, c.isWindows)() ? m().then(t => {
            var n, i;
            return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }) : Promise.resolve(!1),
        createShortcuts(e, t, n, i, r) {
            if (null == r || !(0, c.isWindows)()) return Promise.resolve(!1);
            let a = "discord:///library/".concat(i, "/launch"),
                s = "".concat(r, "\\icon.ico");
            return m().then(i => {
                var r, o;
                return null !== (o = null === (r = i.createShortcuts) || void 0 === r ? void 0 : r.call(i, e, t, n, a, s)) && void 0 !== o && o
            })
        },
        isGameLaunchable: e => O({
            id: e
        }).then(e => null != e).catch(() => !1),
        launchGame(e) {
            if (l.default.isConnected(e)) return Promise.resolve();
            return O({
                id: e
            }).then(C)
        },
        isProtocolRegistered: e => m().then(t => {
            var n, i;
            return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }),
        setRecentGames(e) {
            m().then(t => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
            }).catch(() => {})
        }
    }
}