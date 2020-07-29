define("js/v4/index_v2.js", function (t, a, n) {
  var l = t("js/common/music.js");
  t("js/common/indexDB.js");
  SPD.mark(34);
  var e = l.$,
    s = l.statistics,
    o = l.jQueryAjax;
  window.MUSIC = l;
  var r = l.widget.user,
    c = (l.popup, 0);
  function m(t, a) {
    return t >= 4 * a
      ? 4 * a
      : t >= 3 * a
      ? 3 * a
      : t >= 2 * a
      ? 2 * a
      : t >= a
      ? a
      : t;
  }
  function d(t, a) {
    l.jQueryAjax.jsonp({
      url: "//c.y.qq.com/mv/fcgi-bin/getmv_by_tag",
      data: { cmd: "shoubo", lan: t || "all" },
      success: function (t) {
        t && 0 == t.code && a && a(t.data.mvlist);
      },
      error: function () {},
    });
  }
  function u(t, a, i) {
    var n = { comm: { ct: 24 } };
    "category" in t &&
      e.extend(n, {
        category: {
          method: "get_hot_category",
          param: { qq: "" },
          module: "music.web_category_svr",
        },
      }),
      "recomPlaylist" in t &&
        e.extend(n, {
          recomPlaylist: {
            method: "get_hot_recommend",
            param: { async: 1, cmd: 2 },
            module: "playlist.HotRecommendServer",
          },
        }),
      "playlist" in t &&
        e.extend(n, {
          playlist: {
            method: "get_playlist_by_category",
            param: {
              id: t.playlist,
              curPage: 1,
              size: 40,
              order: 5,
              titleid: t.playlist,
            },
            module: "playlist.PlayListPlazaServer",
          },
        }),
      "new_song" in t &&
        e.extend(n, {
          new_song: {
            module: "newsong.NewSongServer",
            method: "get_new_song_info",
            param: { type: t.new_song },
          },
        }),
      "new_album" in t &&
        e.extend(n, {
          new_album: {
            module: "newalbum.NewAlbumServer",
            method: "get_new_album_info",
            param: { area: t.new_album, sin: 0, num: 20 },
          },
        }),
      "new_album_tag" in t &&
        e.extend(n, {
          new_album_tag: {
            module: "newalbum.NewAlbumServer",
            method: "get_new_album_area",
            param: {},
          },
        }),
      "toplist" in t &&
        e.extend(n, {
          toplist: {
            module: "musicToplist.ToplistInfoServer",
            method: "GetAll",
            param: {},
          },
        }),
      "focus" in t &&
        e.extend(n, {
          focus: {
            module: "music.musicHall.MusicHallPlatform",
            method: "GetFocus",
            param: {},
          },
        });
    var l = "recom" + (Math.random() + "").replace("0.", "");
    o.jsonp({
      url: "//u.y.qq.com/cgi-bin/musicu.fcg?callback=" + l,
      data: { data: JSON.stringify(n) },
      jsonpCallback: l,
      charset: "utf-8",
      success: function (i) {
        t.category && t.category, a(i);
      },
      error: function () {
        i && i();
      },
    });
  }
  function p(t, a) {
    var n = function (t) {
      var a,
        n = "";
      Array.prototype.join;
      n += "";
      var l = t;
      for (i = 0; i < l.length; i++) {
        var e = l[i];
        (n += '\r\n\r\n    <a href="javascript:;" class="index_tab__item'),
          i || (n += " index_tab__item--current"),
          (n +=
            ' js_tag" data-index="' +
            (null == (a = i) ? "" : a) +
            '" data-type="new_album" data-id="' +
            (null == (a = e.id) ? "" : a) +
            '">' +
            (null == (a = e.name) ? "" : _.escape(a)) +
            "</a>\r\n\r\n");
      }
      return (n += "");
    };
    "song" == a &&
      (n = function (t) {
        var a,
          n = "";
        Array.prototype.join;
        n += "";
        var l = t;
        for (i = 0; i < l.length; i++) {
          var e = l[i];
          (n += '\r\n    <a href="javascript:;" class="index_tab__item'),
            i || (n += " index_tab__item--current"),
            (n +=
              ' js_tag" data-index="' +
              (null == (a = i) ? "" : a) +
              '" data-type="new_song" data-id="' +
              (null == (a = e.type) ? "" : a) +
              '">' +
              (null == (a = e.lan) ? "" : _.escape(a)) +
              "</a>\r\n");
        }
        return (n += "");
      }),
      e("#new_" + a + "_box .mod_index_tab").html(n(t));
  }
  function g(t) {
    var a = {
      threshold: 0,
      failure_limit: 0,
      event: "scroll",
      effect: "show",
      container: window,
      data_attribute: "original",
      error_img: "//y.gtimg.cn/mediastyle/global/img/playlist_300.png",
      skip_invisible: !0,
      appear: null,
      load: null,
    };
    e("img", t || e("body")).each(function () {
      var t = e(this);
      e.abovethetop(this, a) ||
        e.leftofbegin(this, a) ||
        e.belowthefold(this, a) ||
        e.rightoffold(this, a) ||
        t.trigger("appear");
    });
  }
  function h(a) {
    var n = function (t) {
        var a,
          n = "";
        Array.prototype.join;
        n += "";
        var e = t.list;
        for (i = 0; i < e.length; i++) {
          var s = e[i];
          (n +=
            '\r\n                    <li class="playlist__item slide__item" onmouseover="this.className=(this.className+\' playlist__item--hover\')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, \'\')" data-disstid="' +
            (null == (a = s.tid) ? "" : a) +
            '">\r\n                        <div class="playlist__item_box">\r\n                            <div class="playlist__cover mod_cover">\r\n                                <a href="' +
            (null == (a = l.util.getPlaylistUrl(s.tid, 1)) ? "" : a) +
            '#stat=y_new.index.playlist.pic" onclick="setStatCookie&&setStatCookie();" class="js_playlist" data-stat="y_new.index.playlist.pic" data-disstid="' +
            (null == (a = s.tid) ? "" : a) +
            '">\r\n\t\t\t\t'),
            s.first
              ? (n +=
                  '\r\n                                    <img src="' +
                  (null == (a = l.util.fixUrl(s.cover_url_big))
                    ? ""
                    : _.escape(a)) +
                  '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000\';this.onerror=null;" alt="' +
                  (null == (a = s.title) ? "" : _.escape(a)) +
                  '" class="playlist__pic"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"  data-stat="y_new.index.playlist.play_btn"></i>\r\n\t\t\t\t')
              : (n +=
                  '\r\n                                    <img src="//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000" data-original="' +
                  (null == (a = l.util.fixUrl(s.cover_url_big))
                    ? ""
                    : _.escape(a)) +
                  '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000\';this.onerror=null;" alt="' +
                  (null == (a = s.title) ? "" : _.escape(a)) +
                  '" class="playlist__pic"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"  data-stat="y_new.index.playlist.play_btn"></i>\r\n\t\t\t\t'),
            (n +=
              '\r\n                                </a>\r\n                            </div>\r\n                            <h4 class="playlist__title">\r\n\r\n                                <span class="playlist__title_txt"><a href="' +
              (null == (a = l.util.getPlaylistUrl(s.tid, 1)) ? "" : a) +
              '#stat=y_new.index.playlist.name" onclick="setStatCookie&&setStatCookie();" class="js_playlist" data-stat="y_new.index.playlist.name" data-disstid="' +
              (null == (a = s.tid) ? "" : a) +
              '">' +
              (null == (a = s.title) ? "" : _.escape(a)) +
              '</a></span>\r\n\r\n                            </h4>\r\n                            <div class="playlist__other">\r\n                                播放量：' +
              (null ==
              (a =
                s.access_num / 1e4 > 1
                  ? (s.access_num / 1e4).toFixed(1) + "万"
                  : s.access_num)
                ? ""
                : a) +
              "\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n");
        }
        return (n += "");
      },
      s = m(a.length, 5),
      o = !1,
      r = !1;
    (a = a.slice(0, s).concat(a.slice(0, 5))).length - 5 > 0
      ? ((o = !0),
        (r = !0),
        (a = a.slice(a.length - 5 - 5, a.length - 5).concat(a)))
      : (a = a.slice(0, 5).concat(a)),
      t.async("js/common/html/taogelist.js", function (i) {
        i.init({
          container: e("#taogelist_box ul"),
          specilData: a,
          specialTpl: n,
          right: !0,
          callback: function () {
            e("#taogelist_box").show(),
              e("#taogelist_box ul")
                .find("img")
                .lazyload({ threshold: 2 * window.innerWidth, event: "click" }),
              setTimeout(function () {
                g(e("#taogelist_box"));
              }, 100);
          },
          reportType: l.reportMap.index,
        }),
          t.async("js/common/slider.js", function (t) {
            e(".js_switch,.mod_slide_action,.js_jump", "#taogelist_box").show(),
              e("#taogelist_box").slider({
                container: "#taogelist_box",
                box: "#taogelist_box ul",
                from: 0,
                left: o,
                right: r,
                total: s / 5,
                rate: 100,
                px: "%",
                callback: function () {
                  setTimeout(function () {
                    g(e("#taogelist_box"));
                  }, 500);
                },
              });
          });
      });
  }
  function v() {
    var t = e("#focus_box .js_list").find("a");
    if ((t = t.slice(2, t.length - 2)).length >= 4) {
      var a = [];
      a.push(e(t[2 * c]).data("focusid")),
        a.push(e(t[2 * c + 1]).data("focusid")),
        s.pgvReportStat(
          "banner",
          { banner_id: a[0], type_id: 1 },
          r.getUin().toString()
        ),
        s.pgvReportStat(
          "banner",
          { banner_id: a[1], type_id: 1 },
          r.getUin().toString()
        );
    }
  }
  var b = {
      playlist: function (t) {
        if (
          t.playlist &&
          0 == t.playlist.code &&
          t.playlist.data.v_playlist &&
          t.playlist.data.v_playlist.length > 0
        ) {
          for (
            var a = [], i = m(t.playlist.data.v_playlist.length, 5), n = 0;
            n < i;
            n++
          ) {
            var l = t.playlist.data.v_playlist[n];
            -1 != l.cover_url_big.indexOf("p.qpic.cn/music_cover/") &&
              (l.cover_url_big = l.cover_url_big.replace("/600", "/300")),
              a.push(l);
          }
          h(a);
        }
      },
      recomPlaylist: function (t) {
        if (
          t.recomPlaylist &&
          0 == t.recomPlaylist.code &&
          t.recomPlaylist.data.v_hot.length > 0
        ) {
          for (
            var a = [], i = m(t.recomPlaylist.data.v_hot.length, 5), n = 0;
            n < i;
            n++
          ) {
            var l = t.recomPlaylist.data.v_hot[n];
            a.push({
              first: !0,
              title: l.title,
              cover_url_big:
                -1 != l.cover.indexOf("p.qpic.cn/music_cover/")
                  ? l.cover.replace("/600", "/300")
                  : l.cover,
              access_num: l.listen_num,
              tid: l.content_id,
            });
          }
          h(a);
        }
      },
      new_song_init: !1,
      new_song: function (a) {
        if (
          (a.new_song &&
          0 == a.new_song.code &&
          a.new_song.data.songlist.length > 0
            ? (function (a) {
                var n = function (t) {
                    var a,
                      n = "";
                    Array.prototype.join, (n += "");
                    var e = t.list;
                    for (i = 0; i < e.length; i++) {
                      (n += "\r\n\t "),
                        i % 9 ||
                          (n += '\r\n\t\t<ul class="songlist__list">\r\n\t '),
                        (n +=
                          '\r\n                        <li class="songlist__item" mid="' +
                          (null == (a = e[i].songid) ? "" : a) +
                          '" ix="' +
                          (null == (a = e[i].ix) ? "" : a) +
                          '">\r\n\t\t\t\t'),
                        (e.length <= 9 || (i >= 9 && i < e.length - 9)) &&
                          (n +=
                            '\r\n\t\t\t\t<div class="songlist__edit songlist__edit--check sprite" style="display:none;">\r\n\t\t\t\t    <input type="checkbox" class="songlist__checkbox">\r\n\t\t\t\t</div>\r\n\t\t\t\t'),
                        (n +=
                          '\r\n                            <div class="songlist__item_box">\r\n                                <a href="' +
                          (null == (a = l.util.getAlbumUrl(e[i])) ? "" : a) +
                          '" title="' +
                          (null == (a = e[i].albumname) ? "" : _.escape(a)) +
                          '" data-albummid="' +
                          (null == (a = e[i].albummid) ? "" : a) +
                          '" data-albumid="' +
                          (null == (a = e[i].albumid) ? "" : a) +
                          '" class="album_name songlist__link mod_cover">\r\n                                    <img class="songlist__pic" src="//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000" data-original="' +
                          (null ==
                          (a = l.util.getAlbumPic({
                            mid:
                              (e[i].album && e[i].album.pmid) || e[i].albummid,
                            type: 90,
                          }))
                            ? ""
                            : a) +
                          '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000\';this.onerror=null;">\r\n                                    <i class="mod_cover__mask"></i>\r\n                                    <i class="mod_cover__icon_play js_play" data-stat="y_new.index.new_song.play_btn"></i>\r\n                                </a>\r\n                                <div class="songlist__cont">\r\n                                    <h3 class="songlist__song"><a href="' +
                          (null == (a = l.util.getSongUrl(e[i])) ? "" : a) +
                          '#stat=y_new.index.new_song.songname" onclick="setStatCookie&&setStatCookie();" data-stat="y_new.index.new_song.songname" class="js_song" title="' +
                          (null == (a = e[i].songname) ? "" : _.escape(a)) +
                          " " +
                          (null == (a = e[i].songsubtitle || e[i].albumdesc)
                            ? ""
                            : _.escape(a)) +
                          '">' +
                          (null == (a = e[i].songname) ? "" : _.escape(a))),
                        (e[i].songsubtitle || e[i].albumdesc) &&
                          (n +=
                            '<span class="songlist__song_txt">' +
                            (null == (a = e[i].songsubtitle || e[i].albumdesc)
                              ? ""
                              : _.escape(a)) +
                            "</span>"),
                        (n += "</a></h3>\r\n\t\t\t\t    \r\n\t\t\t\t");
                      for (
                        var s = [], o = 0, r = e[i].singer.length;
                        o < r;
                        o++
                      ) {
                        var c = e[i].singer[o];
                        s.push(c.name);
                      }
                      for (
                        n +=
                          '\r\n                                    <p class="songlist__author" title="' +
                          (null == (a = s.join(" / ")) ? "" : _.escape(a)) +
                          '">\r\n\t\t\t\t\t',
                          o = 0,
                          r = e[i].singer.length;
                        o < r;
                        o++
                      )
                        (c = e[i].singer[o]),
                          (n += "\r\n\t\t\t\t\t"),
                          o > 0 && (n += "/"),
                          (n +=
                            '\r\n\t\t\t\t\t<a href="' +
                            (null == (a = l.util.getSingerUrl(c)) ? "" : a) +
                            '#stat=y_new.index.new_song.singername" onclick="setStatCookie&&setStatCookie();" data-stat="y_new.index.new_song.singername" data-singermid="' +
                            (null == (a = c.mid) ? "" : a) +
                            '" data-singerid="' +
                            (null == (a = c.id) ? "" : a) +
                            '" title="' +
                            (null == (a = c.name) ? "" : _.escape(a)) +
                            '" class="c_tx_thin singer_name">' +
                            (null == (a = c.name) ? "" : _.escape(a)) +
                            "</a>\r\n\t\t\t\t\t");
                      (n +=
                        '\r\n                                    </p>\r\n                                </div>\r\n                                <div class="songlist__time c_tx_thin">' +
                        (null == (a = e[i].playTime) ? "" : a) +
                        "</div>\r\n                            </div>\r\n                        </li>\r\n\t"),
                        (i + 1) % 9 || (n += "\r\n\t\t</ul>\r\n\t "),
                        (n += "\r\n");
                    }
                    return (n += "\r\n");
                  },
                  s = a.length,
                  o = !1,
                  r = !1;
                (a = a.slice(0, s).concat(a.slice(0, 9))).length - 9 > 0
                  ? ((o = !0),
                    (r = !0),
                    (a = a.slice(a.length - 9 - 9, a.length - 9).concat(a)))
                  : (a = a.slice(0, 9).concat(a)),
                  t.async("js/common/html/songlist.js", function (i) {
                    i.init({
                      container: e("#new_song_box .js_list"),
                      specilData: a,
                      specialTpl: n,
                      callback: function () {
                        e("#new_song_box").show(),
                          e("#new_song_box .js_list")
                            .find("img")
                            .lazyload({
                              threshold: 2 * window.innerWidth,
                              event: "click",
                            }),
                          setTimeout(function () {
                            g(e("#new_song_box"));
                          }, 100);
                      },
                      reportType: l.reportMap.index,
                    }),
                      t.async("js/common/slider.js", function (t) {
                        e(
                          ".js_switch,.mod_slide_action,.js_jump",
                          "#new_song_box"
                        ).show(),
                          e("#new_song_box").slider({
                            container: "#new_song_box",
                            box: "#new_song_box .js_list",
                            from: 0,
                            left: o,
                            right: r,
                            total: Math.ceil(s / 9),
                            rate: 100,
                            px: "%",
                            callback: function () {
                              setTimeout(function () {
                                g(e("#new_song_box"));
                              }, 500);
                            },
                          });
                      });
                  });
              })(a.new_song.data.songlist)
            : this.new_song_init || !1,
          !this.new_song_init &&
            a.new_song &&
            0 == a.new_song.code &&
            a.new_song.data.lanlist.length > 0)
        ) {
          for (
            var n = [], s = a.new_song.data.lanlist.length, o = 0;
            o < s;
            o++
          ) {
            var r = a.new_song.data.lanlist[o];
            n.push(r);
          }
          p(n, "song"), (this.new_song_init = !0);
        }
      },
      new_album_init: !1,
      new_album: function (a) {
        if (
          a.new_album &&
          0 == a.new_album.code &&
          a.new_album.data.albums.length > 0
        ) {
          for (
            var n = [], s = m(a.new_album.data.albums.length, 10), o = 0;
            o < s;
            o++
          ) {
            var r = a.new_album.data.albums[o];
            n.push(r);
          }
          !(function (a) {
            var n = function (t) {
                var a,
                  n = "";
                Array.prototype.join, (n += "");
                var e = t.list;
                for (i = 0; i < e.length; i++) {
                  var s = e[i];
                  (n += "\r\n\t "),
                    i % 10 ||
                      (n += '\r\n\t\t<ul class="playlist__list">\r\n\t '),
                    (n +=
                      '\r\n                        <li class="playlist__item slide__item '),
                    i % 2 && (n += " playlist__item--even "),
                    (n +=
                      '" onmouseover="this.className=(this.className+\' playlist__item--hover\')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, \'\')" data-albummid="' +
                      (null == (a = s.mid) ? "" : a) +
                      '" data-albumid="' +
                      (null == (a = s.id) ? "" : a) +
                      '">\r\n                            <div class="playlist__item_box">\r\n                                <div class="playlist__cover mod_cover">\r\n                                   <a href="' +
                      (null == (a = l.util.getAlbumUrl({ albummid: s.mid }))
                        ? ""
                        : a) +
                      '#stat=y_new.index.album.albumpic" onclick="setStatCookie&&setStatCookie();" class="js_album" data-stat="y_new.index.album.albumpic" data-albummid="' +
                      (null == (a = s.mid) ? "" : a) +
                      '" data-albumid="' +
                      (null == (a = s.id) ? "" : a) +
                      '"><img src="//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000" data-original="' +
                      (null ==
                      (a = l.util.getAlbumPic({
                        mid: (s.photo && s.photo.pic_mid) || s.mid,
                        type: 300,
                      }))
                        ? ""
                        : a) +
                      '" alt="' +
                      (null == (a = s.name) ? "" : _.escape(a)) +
                      '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000\';this.onerror=null;" class="playlist__pic"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play" data-stat="y_new.index.album.play_btn"></i></a>\r\n                                </div>\r\n                                <h4 class="playlist__title">\r\n\t\t\t\t\t<span class="playlist__title_txt"><a href="' +
                      (null == (a = l.util.getAlbumUrl({ albummid: s.mid }))
                        ? ""
                        : a) +
                      '#stat=y_new.index.album.albumname" onclick="setStatCookie&&setStatCookie();" class="js_album" data-stat="y_new.index.album.albumname" data-albummid="' +
                      (null == (a = s.mid) ? "" : a) +
                      '" data-albumid="' +
                      (null == (a = s.id) ? "" : a) +
                      '">' +
                      (null == (a = s.name) ? "" : _.escape(a)) +
                      '</a></span>\r\n\t\t\t\t    <a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-stat="y_new.index.album.more" data-type="2" data-mid="' +
                      (null == (a = s.mid) ? "" : a) +
                      '"><span class="icon_txt">����</span></a>\r\n\t\t\t\t</h4>\r\n\t\t\t\t');
                  var o = [];
                  if (s.singers && s.singers.length > 0)
                    for (var r = 0; r < s.singers.length; r++)
                      o.push(s.singers[r].name);
                  if (
                    ((n +=
                      '\r\n\t\t\t\t<div class="playlist__author" title="' +
                      (null == (a = o.join(" / ")) ? "" : _.escape(a)) +
                      '">\r\n\t\t\t\t'),
                    s.singers && s.singers.length > 0)
                  ) {
                    for (
                      n += "\r\n\t\t\t\t\t", r = 0;
                      r < s.singers.length;
                      r++
                    )
                      (n += "\r\n\t\t\t\t\t"),
                        r > 0 && (n += " / "),
                        (n +=
                          '\r\n\t\t\t\t\t<a href="' +
                          (null ==
                          (a = l.util.getSingerUrl({ mid: s.singers[r].mid }))
                            ? ""
                            : a) +
                          '#stat=y_new.index.album.singername" onclick="setStatCookie&&setStatCookie();" class="js_singer" data-stat="y_new.index.album.singername" data-singermid="' +
                          (null == (a = s.singers[r].mid) ? "" : a) +
                          '" title="' +
                          (null == (a = s.singers[r].name) ? "" : _.escape(a)) +
                          '">' +
                          (null == (a = s.singers[r].name) ? "" : _.escape(a)) +
                          "</a>\r\n\t\t\t\t\t");
                    n += "\r\n\t\t\t\t";
                  }
                  (n +=
                    "\r\n\t\t\t\t</div>\r\n                            </div>\r\n                        </li>\r\n\t"),
                    (i + 1) % 10 || (n += "\r\n\t\t</ul>\r\n\t "),
                    (n += "\r\n");
                }
                return (n += "\r\n");
              },
              s = m(a.length, 10),
              o = !1,
              r = !1;
            (a = a.slice(0, s).concat(a.slice(0, 10))).length - 10 > 0
              ? ((o = !0),
                (r = !0),
                (a = a.slice(a.length - 10 - 10, a.length - 10).concat(a)))
              : (a = a.slice(0, 10).concat(a)),
              t.async("js/common/html/albumlist.js", function (i) {
                i.init({
                  container: e("#new_album_box .js_list"),
                  specilData: a,
                  specialTpl: n,
                  callback: function () {
                    e("#new_album_box").show(),
                      e("#new_album_box .js_list")
                        .find("img")
                        .lazyload({
                          threshold: 2 * window.innerWidth,
                          event: "click",
                        }),
                      setTimeout(function () {
                        g(e("#new_album_box"));
                      }, 100);
                  },
                  reportType: l.reportMap.index,
                }),
                  t.async("js/common/slider.js", function (t) {
                    e(
                      ".js_switch,.mod_slide_action,.js_jump",
                      "#new_album_box"
                    ).show(),
                      e("#new_album_box").slider({
                        container: "#new_album_box",
                        box: "#new_album_box .js_list",
                        from: 0,
                        left: o,
                        right: r,
                        total: s / 10,
                        rate: 100,
                        px: "%",
                        callback: function () {
                          setTimeout(function () {
                            g(e("#new_album_box"));
                          }, 500);
                        },
                      });
                  });
              });
          })(n);
        } else this.new_album_init || !1;
        if (
          !this.new_album_init &&
          a.new_album_tag &&
          0 == a.new_album_tag.code &&
          a.new_album_tag.data.area &&
          a.new_album_tag.data.area.length > 0
        ) {
          for (
            n = [], s = a.new_album_tag.data.area.length, o = 0;
            o < s;
            o++
          ) {
            r = a.new_album_tag.data.area[o];
            n.push(r);
          }
          p(n, "album"), (this.new_album_init = !0);
        }
      },
      focus: function (a) {
        if (a.focus && 0 == a.focus.code) {
          var n =
              a.focus &&
              a.focus.data &&
              a.focus.data.shelf &&
              a.focus.data.shelf.v_niche &&
              a.focus.data.shelf.v_niche[0],
            s = (n && n.v_card) || [];
          if (s.length > 0) {
            var o = s.length - (s.length % 2);
            !(function (a) {
              a.length;
              var n = a.length,
                s = !1,
                o = !1;
              (a = a.slice(0, n).concat(a.slice(0, 2))).length - 2 > 0
                ? ((s = !0),
                  (o = !0),
                  (a = a.slice(a.length - 2 - 2, a.length - 2).concat(a)))
                : (a = a.slice(0, 2).concat(a)),
                e("#focus_box .js_list").html(
                  (function (t) {
                    var a,
                      n = "";
                    Array.prototype.join, (n += "");
                    var e = t;
                    for (i = 0; i < e.length; i++) {
                      var s = e[i];
                      n +=
                        '\r\n    <li class="event_list__item slide__item">\r\n\t<a href="javascript:;" class="event_list__link js_focus_jump" data-type="' +
                        (null == (a = s.jumptype) ? "" : a) +
                        '" data-stat="y_new.index.focus.click" data-id="' +
                        (null == (a = s.subid || s.id) ? "" : a) +
                        '" data-focusid="' +
                        (null == (a = s.miscellany.CfgID) ? "" : a) +
                        '">\r\n\t    <img src="' +
                        (null == (a = l.util.fixUrl(s.cover)) ? "" : a) +
                        '" class="event_list__pic" alt="' +
                        (null == (a = s.title) ? "" : _.escape(a)) +
                        '" />\r\n\t</a>\r\n    </li>\r\n';
                    }
                    return (n += "\r\n");
                  })(a)
                ),
                e("#focus_box").show(),
                t.async("js/common/slider.js", function (t) {
                  e(
                    ".js_switch,.mod_slide_action,.js_jump",
                    "#focus_box"
                  ).show(),
                    e("#focus_box").slider({
                      container: "#focus_box",
                      box: "#focus_box .js_list",
                      from: 0,
                      left: s,
                      right: o,
                      total: n / 2,
                      rate: 100,
                      px: "%",
                      callback: function (t) {
                        (c = t.step), v();
                      },
                    });
                });
            })(s.slice(0, o));
          }
        }
      },
      mv: function (a) {
        if (a.length > 0) {
          for (var n = [], s = m(a.length, 10), o = 0; o < s; o++) {
            var r = a[o];
            n.push(r);
          }
          !(function (a) {
            var n = function (t) {
                var a,
                  n = "";
                Array.prototype.join, (n += "");
                var e = t.list;
                for (i = 0; i < e.length; i++) {
                  var s = e[i];
                  (n += "\r\n\t "),
                    i % 10 || (n += '\r\n\t <ul class="mv_list__list">\r\n\t '),
                    (n +=
                      '\r\n\t\t    <li class="mv_list__item" data-vid="' +
                      (null == (a = s.vid) ? "" : a) +
                      '" data-id="' +
                      (null == (a = s.mv_id) ? "" : a) +
                      '">\r\n\t\t\t<div class="mv_list__item_box">\r\n\t\t\t    <a href="' +
                      (null == (a = l.util.getMvUrl(s.vid)) ? "" : a) +
                      '#stat=y_new.index.mv.play_btn" onclick="setStatCookie&&setStatCookie();" class="mv_list__cover mod_cover js_mv" data-stat="y_new.index.mv.play_btn" data-vid="' +
                      (null == (a = s.vid) ? "" : a) +
                      '" data-id="' +
                      (null == (a = s.mv_id) ? "" : a) +
                      '" hidefocus="true">\r\n\t\t\t\t<img class="mv_list__pic" src="//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000" data-original="'),
                    s.picurl
                      ? (n +=
                          "" + (null == (a = l.util.fixUrl(s.picurl)) ? "" : a))
                      : (n +=
                          "//shp.qpic.cn/qqvideo_ori/0/" +
                          (null == (a = s.vid) ? "" : a) +
                          "_360_204/0"),
                    (n +=
                      '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000\';this.onerror=null;" alt="' +
                      (null == (a = s.mvtitle) ? "" : _.escape(a)) +
                      '">\r\n\t\t\t\t<i class="mod_cover__icon_play"></i>\r\n\t\t\t    </a>\r\n\t\t\t    <h3 class="mv_list__title"><a href="' +
                      (null == (a = l.util.getMvUrl(s.vid)) ? "" : a) +
                      '#stat=y_new.index.mv.mvname" onclick="setStatCookie&&setStatCookie();" class="js_mv" data-stat="y_new.index.mv.mvname"  data-vid="' +
                      (null == (a = s.vid) ? "" : a) +
                      '" data-id="' +
                      (null == (a = s.mv_id) ? "" : a) +
                      '" title="' +
                      (null == (a = s.mvtitle) ? "" : _.escape(a)) +
                      '">' +
                      (null == (a = s.mvtitle) ? "" : _.escape(a)) +
                      '</a></h3>\r\n\t\t\t    <p class="mv_list__singer">\r\n\t\t\t    <a href="' +
                      (null == (a = l.util.getSingerUrl({ mid: s.singer_mid }))
                        ? ""
                        : a) +
                      '#stat=y_new.index.mv.singername" onclick="setStatCookie&&setStatCookie();" class="js_singer" data-singermid="' +
                      (null == (a = s.singer_mid) ? "" : a) +
                      '" data-stat="y_new.index.mv.singername"  data-singerid="' +
                      (null == (a = s.singer_id) ? "" : a) +
                      '" title="' +
                      (null == (a = s.singer_name) ? "" : _.escape(a)) +
                      '">' +
                      (null == (a = s.singer_name) ? "" : _.escape(a)) +
                      '</a>\r\n\t\t\t    \x3c!--div class="mv_list__info">' +
                      (null == (a = s.pub_date) ? "" : a) +
                      '</div--\x3e\r\n\t\t\t    <div class="mv_list__info">' +
                      (null ==
                      (a =
                        0 == parseInt(s.listennum)
                          ? "最新上架"
                          : '<span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>' +
                            (parseInt(s.listennum, 10) >= 1e4
                              ? ((s.listennum / 1e4).toFixed(1) + "万").replace(
                                  ".0万",
                                  "万"
                                )
                              : s.listennum) +
                            "</span>")
                        ? ""
                        : a) +
                      "</div>\r\n\t\t\t    </p>\r\n\t\t\t</div>\r\n\t\t    </li>\r\n\t"),
                    (i + 1) % 10 || (n += "\r\n\t</ul>\r\n\t"),
                    (n += "\r\n");
                }
                return (n += "");
              },
              s = m(a.length, 10),
              o = !1,
              r = !1;
            (a = a.slice(0, s).concat(a.slice(0, 10))).length - 10 > 0
              ? ((o = !0),
                (r = !0),
                (a = a.slice(a.length - 10 - 10, a.length - 10).concat(a)))
              : (a = a.slice(0, 10).concat(a)),
              t.async("js/common/html/mvlist.js", function (i) {
                i.init({
                  container: e("#mv_box .js_list"),
                  specilData: a,
                  specialTpl: n,
                  reportType: l.reportMap.index,
                  callback: function () {
                    e("#mv_box").show(),
                      e("#mv_box .js_list")
                        .find("img")
                        .lazyload({
                          threshold: 2 * window.innerWidth,
                          event: "click",
                        }),
                      setTimeout(function () {
                        g(e("#mv_box"));
                      }, 100);
                  },
                }),
                  t.async("js/common/slider.js", function (t) {
                    e(
                      ".js_switch,.mod_slide_action,.js_jump",
                      "#mv_box"
                    ).show(),
                      e("#mv_box").slider({
                        container: "#mv_box",
                        box: "#mv_box .js_list",
                        from: 0,
                        left: o,
                        right: r,
                        total: s / 10,
                        rate: 100,
                        px: "%",
                        callback: function () {
                          setTimeout(function () {
                            g(e("#mv_box"));
                          }, 500);
                        },
                      });
                  });
              });
          })(n);
        }
      },
      toplist: function (t) {
        if (
          t.toplist &&
          0 == t.toplist.code &&
          t.toplist.data.group.length > 0 &&
          t.toplist.data.group[0].toplist &&
          t.toplist.data.group[0].toplist.length > 0
        ) {
          for (var a = [], n = t.toplist.data.group.length, s = 0; s < n; s++)
            for (
              var o = t.toplist.data.group[s].toplist.length, r = 0;
              r < o;
              r++
            ) {
              var c = t.toplist.data.group[s].toplist[r];
              (c.name = c.title.replace("榜", "")), a.push(c);
            }
          (m = a),
            e("#toplist_box .js_list").html(
              (function (t) {
                var a,
                  n = "";
                Array.prototype.join, (n += "");
                var e = t,
                  s = 0;
                for (i = 0; i < e.length; i++) {
                  var o = e[i];
                  if (
                    o.topId in { 4: 4, 26: 26, 27: 27, 3: 3, 16: 16, 17: 17 }
                  ) {
                    n +=
                      ' \r\n    <li class="toplist__item item' +
                      (null == (a = ++s) ? "" : a) +
                      ' mod_cover">\r\n\t<div class="toplist__box">\r\n\t    <div class="toplist__bg"></div>\r\n\t    <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.' +
                      (null == (a = o.topId) ? "" : a) +
                      '" data-id="' +
                      (null == (a = o.topId) ? "" : a) +
                      '" data-type="' +
                      (null == (a = o.topType) ? "" : a) +
                      '" data-date="' +
                      (null == (a = o.period) ? "" : a) +
                      '"></i>\r\n\t    <i class="toplist__line"></i>\r\n\t    <h3 class="toplist__hd"><a href="' +
                      (null == (a = l.util.getToplistUrl(o.topId)) ? "" : a) +
                      "#stat=y_new.index.toplist.detail." +
                      (null == (a = o.topId) ? "" : a) +
                      '" onclick="setStatCookie&&setStatCookie();" data-stat="y_new.index.toplist.detail.' +
                      (null == (a = o.topId) ? "" : a) +
                      '" class="toplist__tit">' +
                      (null == (a = o.name) ? "" : _.escape(a)) +
                      '</a></h3>\r\n\t    <ul class="toplist__songlist">\r\n\r\n\t    ';
                    for (var r = 0; r < 4 && r < o.song.length; r++) {
                      var c = o.song[r];
                      n +=
                        '\r\n\t    <li class="toplist__song">\r\n\t\t<div class="toplist__number">' +
                        (null == (a = r + 1) ? "" : a) +
                        '</div>\r\n\t\t<div class="toplist__songname">\r\n\t\t    <a href="' +
                        (null == (a = l.util.getSongUrl({ songid: c.songId }))
                          ? ""
                          : a) +
                        '#stat=y_new.index.toplist.songname" onclick="setStatCookie&&setStatCookie();" class="js_song" data-id="' +
                        (null == (a = c.songId) ? "" : a) +
                        '" data-stat="y_new.index.toplist.songname">' +
                        (null == (a = c.title) ? "" : _.escape(a)) +
                        '</a>\r\n\t\t</div>\r\n\t\t<div class="toplist__artist">\r\n\t\t    <a href="' +
                        (null == (a = l.util.getSingerUrl({ mid: c.singerMid }))
                          ? ""
                          : a) +
                        '#stat=y_new.index.toplist.singername" onclick="setStatCookie&&setStatCookie();" data-stat="y_new.index.toplist.singername">' +
                        (null == (a = c.singerName) ? "" : _.escape(a)) +
                        "</a>\r\n\t\t</div>\r\n\t    </li>\r\n\t    ";
                    }
                    n += "\r\n\t    </ul>\r\n\t</div>\r\n    </li>\r\n";
                  }
                  if (5 == s) break;
                }
                return (n += "\r\n");
              })(m)
            ),
            e("#toplist_box").show();
        }
        var m;
      },
    },
    y = {
      new_album: {
        href: "//y.qq.com/portal/album_lib.html",
        hash: "#area=",
        id: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
        stat: {
          0: "recom",
          1: "neidi",
          2: "gangtai",
          3: "eu",
          5: "j",
          4: "k",
          6: "other",
        },
      },
      mv: {
        href: "//y.qq.com/portal/mv_lib.html",
        hash: "#t2=",
        id: { all: -1, neidi: 1, korea: 4, gangtai: 2, oumei: 3, janpan: 5 },
      },
      toplist: { href: "//y.qq.com/n/yqq/toplist/4.html", hash: "#", id: {} },
      playlist: {},
      new_song: {
        stat: {
          0: "recom",
          1: "neidi",
          2: "gangtai",
          3: "eu",
          4: "j",
          5: "k",
          6: "other",
        },
      },
    };
  var f = !1;
  function x() {
    e(document)
      .on("click", ".js_tag", function (t) {
        var a = e(this).parents(".mod_index_tab"),
          i = e(this),
          n = e(this).parents(".js_box"),
          l = e(this).parent().data("stat");
        e(".index_tab__item--current", a).removeClass(
          "index_tab__item--current"
        ),
          i.addClass("index_tab__item--current");
        var o = i.data("type"),
          r = i.data("id"),
          c = {};
        (c[o] = r),
          "mv" == o
            ? ("all" != r ? e(".js_more", n).show() : e(".js_more", n).hide(),
              d(r, function (t) {
                b[o](t);
              }))
            : (r > 0 || "new_album" == o
                ? e(".js_more", n).show()
                : e(".js_more", n).hide(),
              u(c, function (t) {
                b[o](t);
              })),
          o in y && y[o].stat && y[o].stat[r]
            ? s.pgvClickStat(l + "." + y[o].stat[r])
            : l && s.pgvClickStat(l + "." + e(this).data("index") || "0");
      })
      .on("click", ".js_more", function (t) {
        var a = e(this).data("type"),
          i = e(this).parents(".js_box"),
          n = e(".index_tab__item--current", i).data("id");
        setStatCookie && setStatCookie(),
          (location.href =
            y[a].href +
            y[a].hash +
            (n in y[a].id ? y[a].id[n] : -1) +
            "&stat=y_new.index." +
            a.replace("new_", "") +
            ".more");
      })
      .off("click", ".js_play_toplist")
      .on("click", ".js_play_toplist", function () {
        var a = parseInt(e(this).data("id"));
        parseInt(e(this).data("type"));
        (i = parseInt(a)),
          t.async("js/common/html/toplistdata.js", function (t) {
            t.init({ topId: parseInt(i), play: 1 }, function () {});
          });
        var i,
          n = e(this).data("stat") || "";
        n && s.pgvClickStat(n);
      })
      .off("click", ".js_focus_jump")
      .on("click", ".js_focus_jump", function () {
        var t = e(this).data("id"),
          a = parseInt(e(this).data("type")),
          i = e(this).data("stat") || "",
          n = e(this).data("focusid") || 0;
        ($p = e(this).parents("li")),
          (function (t, a, i) {
            switch (a + "") {
              case "3001":
              case "3002":
                var n = t
                  .replace("//y.qq.com/portal/mv/c/", "//y.qq.com/n/yqq/mv/c/")
                  .replace("//y.qq.com/portal/mv/v/", "//y.qq.com/n/yqq/mv/v/");
                i && s.pgvClickStat(i);
                var e = window.open(n, "_blank");
                e && (e.opener = null);
                break;
              case "10002":
                l.util.gotoAlbum({ albummid: t, stat: i });
                break;
              case "10005":
                l.util.gotoToplist({ id: t, stat: i });
                break;
              case "10011":
                i && s.pgvClickStat(i), l.util.gotoMvdetail({ cid: t });
                break;
              case "10012":
                i && s.pgvClickStat(i), l.util.gotoMvdetail({ vid: t });
                break;
              case "10014":
                l.util.gotoTaogedetail({ disstid: t, stat: i });
            }
          })(t, a, i),
          s.pgvReportStat(
            "banner",
            { banner_id: n, type_id: 2 },
            r.getUin().toString()
          );
      })
      .off("scroll")
      .on("scroll", function () {
        var t = e("#focus_box").offset(),
          a = t.top - e(window).scrollTop(),
          i = t.top + e("#focus_box").height() - e(window).scrollTop(),
          n = e(window).height();
        !f && ((a < n && a > 0) || (i < n && i > 0))
          ? ((f = !0), v())
          : f && (a > n || i < 0) && (f = !1);
      });
  }
  return {
    init: function (t) {
      u(
        {
          category: 1,
          recomPlaylist: 1,
          playlist: 8,
          toplist: 1,
          focus: 1,
          new_song: 5,
          new_album: 1,
          new_album_tag: 1,
        },
        function (t) {
          t.category &&
            0 == t.category.code &&
            t.category.data.category[0].items.length > 0 &&
            ((a = t.category.data.category[0].items),
            e("#taogelist_box .mod_index_tab").html(
              (function (t) {
                var a,
                  n = "";
                Array.prototype.join,
                  (n +=
                    '\r\n<a href="javascript:;" class="index_tab__item index_tab__item--current js_tag" data-index="0" data-type="recomPlaylist" data-id="1">为你推荐</a>\r\n');
                var l = t;
                for (i = 0; i < l.length; i++) {
                  var e = l[i];
                  n +=
                    '\r\n    <a href="javascript:;" class="index_tab__item js_tag" data-type="playlist" data-index="' +
                    (null == (a = i + 1) ? "" : a) +
                    '" data-id="' +
                    (null == (a = e.item_id) ? "" : a) +
                    '">' +
                    (null == (a = e.item_name) ? "" : a) +
                    "</a>\r\n";
                }
                return (n += "");
              })(a.slice(0, 5))
            ));
          var a;
          b.recomPlaylist(t),
            b.new_song(t),
            b.focus(t),
            b.new_album(t),
            b.toplist(t),
            e.each(e(".js_tag"), function (t, a) {
              if (e(a).hasClass("index_tab__item--current")) {
                e(a).parents(".mod_index_tab");
                var i = e(a),
                  n = e(a).parents(".js_box"),
                  l = (e(a).parent().data("stat"), i.data("type")),
                  s = i.data("id");
                "mv" == l
                  ? "all" != s
                    ? e(".js_more", n).show()
                    : e(".js_more", n).hide()
                  : s > 0 || "new_album" == l
                  ? e(".js_more", n).show()
                  : e(".js_more", n).hide();
              }
            }),
            SPD.mark(36);
        }
      ),
        x(),
        d("all", function (t) {
          b.mv(t);
        });
      var a = l.util.getParameterNew("mids"),
        n = l.util.getParameterNew("play");
      a &&
        (function (t, a) {
          if (t) {
            a = a || 0;
            var i =
              "//c.y.qq.com/splcloud/fcgi-bin/fcg_list_songinfo_cp.fcg?utf8=1&callback=songListCallback&midlist=" +
              t;
            o.jsonp({
              url: i,
              charset: "utf-8",
              data: {},
              jsonpCallback: "songListCallback",
              success: function (t) {
                if (t && 0 == t.code && t.data && t.data.length > 0) {
                  for (var i, n = [], e = 0; (i = t.data[e++]); )
                    (("qqmusic" == (i = l.player.formatMusic(i)).mtype &&
                      1 == i.anyPlay) ||
                      "net" == i.mtype) &&
                      n.push(i);
                  setTimeout(function () {
                    0 == parseInt(a)
                      ? l.player.add(n, !0)
                      : l.player.play(n, 1, !0);
                  }, 1500);
                }
              },
              error: function () {},
            });
          }
        })(a, n),
        SPD.mark(35);
    },
  };
});
