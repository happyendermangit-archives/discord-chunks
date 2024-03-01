function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var s = n("872717"),
        i = n("913144"),
        r = n("568734"),
        a = n("299285"),
        o = n("49111"),
        d = {
            async createApplication(e) {
                let {
                    name: t,
                    guildId: n,
                    type: r,
                    teamId: a
                } = e, d = await s.default.post({
                    url: o.Endpoints.APPLICATIONS,
                    body: {
                        name: t,
                        type: r,
                        guild_id: n,
                        team_id: a
                    }
                }), u = d.body;
                return null != n && null != r && i.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: u
                }), u
            },
            async getApplicationsForGuild(e) {
                let {
                    includeTeam: t,
                    ...n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await s.default.get({
                    url: o.Endpoints.GUILD_APPLICATIONS(e),
                    query: {
                        ...n,
                        include_team: t
                    }
                }), a = r.body;
                return i.default.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: a
                }), a
            },
            async transferApplication(e) {
                let {
                    applicationId: t,
                    teamId: n
                } = e, r = await s.default.post({
                    url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                    body: {
                        team_id: n
                    }
                }), a = r.body;
                return i.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: a
                }), a
            },
            async fetchApplications(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e;
                if (!t && (n = e.filter(e => {
                        var t, n;
                        let s = a.default.getApplication(e),
                            i = (0, r.hasFlag)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                            d = i && (null == s ? void 0 : null === (t = s.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                        return !(null != s && !d) && !a.default.isFetchingApplication(e) && !a.default.didFetchingApplicationFail(e) && e.length > 0
                    })), n.length > 0) {
                    let e;
                    i.default.dispatch({
                        type: "APPLICATIONS_FETCH",
                        applicationIds: n
                    });
                    try {
                        e = await s.default.get({
                            url: o.Endpoints.APPLICATIONS_PUBLIC,
                            query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                            oldFormErrors: !0
                        })
                    } catch (e) {
                        throw i.default.dispatch({
                            type: "APPLICATIONS_FETCH_FAIL",
                            applicationIds: n
                        }), e
                    }
                    i.default.dispatch({
                        type: "APPLICATIONS_FETCH_SUCCESS",
                        applications: e.body
                    })
                }
            },
            fetchApplication(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return i.default.dispatch({
                    type: "APPLICATION_FETCH",
                    applicationId: e
                }), s.default.get({
                    url: o.Endpoints.APPLICATION_PUBLIC(e),
                    query: {
                        with_guild: t
                    },
                    oldFormErrors: !0
                }).then(e => (i.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: e.body
                }), e.body)).catch(t => (i.default.dispatch({
                    type: "APPLICATION_FETCH_FAIL",
                    applicationId: e
                }), Promise.reject(t)))
            }
        }
}