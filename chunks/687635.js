function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadRtcLogFiles: function() {
            return _
        }
    });
    var r = n("188129"),
        o = n("967888"),
        i = n("146591"),
        a = n("335911"),
        u = n("49657"),
        s = n("517727"),
        l = n("281767");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var d = new r.Logger("uploadRtcLogFiles");

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        var e;
        return e = function(e, t) {
            var n, r, f, _, E, p;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (null == s.default.fileManager.readLogFiles) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL);
                        n = [], m.label = 1;
                    case 1:
                        return m.trys.push([1, 3, , 4]), [4, s.default.fileManager.readLogFiles(e)];
                    case 2:
                        return n = (n = m.sent()).map(function(e) {
                            return (0, u.transformNativeFile)(e, "application/octet-stream")
                        }), [3, 4];
                    case 3:
                        throw r = m.sent(), d.error("uploadDebugFiles: read error '".concat(r, "'")), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.READ);
                    case 4:
                        if (0 === n.length) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.NO_FILE);
                        m.label = 5;
                    case 5:
                        var y;
                        return m.trys.push([5, 7, , 8]), _ = {
                            extraInfo: t,
                            mediaEngineState: a.default.getState()
                        }, [4, o.HTTP.post({
                            url: l.Endpoints.DEBUG_LOGS(l.DebugLogCategory.RTC),
                            attachments: ((function(e) {
                                if (Array.isArray(e)) return c(e)
                            })(y = n.map(function(e) {
                                return {
                                    name: e.name,
                                    file: e,
                                    filename: e.name
                                }
                            })) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(y) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return c(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                                }
                            }(y) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()).concat([{
                                name: "media_engine_state.json",
                                filename: "media_engine_state.json",
                                file: new Blob([JSON.stringify(_, void 0, 2)])
                            }])
                        })];
                    case 6:
                        return f = m.sent(), [3, 8];
                    case 7:
                        if (429 === (E = m.sent()).status) throw new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.PROGRESS);
                        throw d.error("Debug log upload error: status: ".concat(E.status, ", message: ").concat(E.message)), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.UPLOAD);
                    case 8:
                        if (p = n.length + 1, "success_count" in f.body && f.body.success_count !== p) throw d.error("Debug log upload: stored files ".concat(f.body.success_count, " !== ").concat(p)), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL);
                        if ("store_success" in f.body && !f.body.store_success || "id_match" in f.body && !f.body.id_match || "all_success" in f.body && !f.body.all_success) throw d.error("Debug log upload: store_success: ".concat(f.body.store_success, " / ") + "id_match: ".concat(f.body.id_match, " / ") + "all_success: ".concat(f.body.all_success)), new i.UploadVoiceDebugLogsError(i.UploadErrorCodes.GENERAL);
                        return [2]
                }
            })
        }, (E = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    f(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    f(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}