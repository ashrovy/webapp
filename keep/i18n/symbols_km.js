var a=this,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}};
c={c:{1E3:{other:"0\u1796\u17b6\u1793\u17cb"},1E4:{other:"00\u00a0\u1796\u17b6\u1793\u17cb"},1E5:{other:"000\u00a0\u1796\u17b6\u1793\u17cb"},1E6:{other:"0\u00a0\u179b\u17b6\u1793"},1E7:{other:"00\u00a0\u179b\u17b6\u1793"},1E8:{other:"000\u00a0\u179b\u17b6\u1793"},1E9:{other:"0\u00a0\u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E10:{other:"00\u00a0\u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E11:{other:"000\u00a0\u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E12:{other:"0\u00a0\u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"},1E13:{other:"00\u00a0\u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"},
1E14:{other:"000\u00a0\u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"}},b:{1E3:{other:"0 \u1796\u17b6\u1793\u17cb"},1E4:{other:"00 \u1796\u17b6\u1793\u17cb"},1E5:{other:"000\u1796\u17b6\u1793\u17cb"},1E6:{other:"0 \u179b\u17b6\u1793"},1E7:{other:"00 \u179b\u17b6\u1793"},1E8:{other:"000 \u179b\u17b6\u1793"},1E9:{other:"0 \u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E10:{other:"00 \u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E11:{other:"000 \u1794\u17ca\u17b8\u179b\u17b6\u1793"},1E12:{other:"0 \u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"},
1E13:{other:"00 \u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"},1E14:{other:"000 \u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"}}};var d={fa:"y",la:"y G",ga:"MMM y",ha:"MMMM y",ma:"MM/y",F:"MMM d",G:"MMMM dd",I:"M/d",H:"MMMM d",ja:"MMM d, y",da:"EEE, MMM d",ka:"EEE, MMM d, y",i:"d"};d={fa:"y",la:"y G",ga:"MMM y",ha:"MMMM y",ma:"MM/y",F:"d MMM",G:"MMMM dd",I:"d/M",H:"MMMM d",ja:"d MMM y",da:"EEE d MMM",ka:"EEE d MMM y",i:"d"};var h={s:["BC","AD"],o:["Before Christ","Anno Domini"],K:"JFMAMJJASOND".split(""),X:"JFMAMJJASOND".split(""),D:"January February March April May June July August September October November December".split(" "),W:"January February March April May June July August September October November December".split(" "),T:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Z:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ca:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
aa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),V:"Sun Mon Tue Wed Thu Fri Sat".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),L:"SMTWTFS".split(""),Y:"SMTWTFS".split(""),U:["Q1","Q2","Q3","Q4"],R:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ba:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5};
h={s:["\u1798\u17bb\u1793 \u1782.\u179f.","\u1782.\u179f."],o:["\u1798\u17bb\u1793\u200b\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787","\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787"],K:"\u1798\u1780\u1798\u1798\u17a7\u1798\u1780\u179f\u1780\u178f\u179c\u1792".split(""),X:"\u1798\u1780\u1798\u1798\u17a7\u1798\u1780\u179f\u1780\u178f\u179c\u1792".split(""),D:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
W:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),T:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
Z:"\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),ca:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u17d0\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
aa:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),V:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0 \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),$:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0 \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
L:"\u17a2\u1785\u17a2\u1796\u1796\u179f\u179f".split(""),Y:"\u17a2\u1785\u17a2\u1796\u1796\u179f\u179f".split(""),U:["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 1","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 2","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 3","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 4"],R:["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 1","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 2","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 3",
"\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 4"],a:["AM","PM"],g:["EEEE d MMMM y","d MMMM y","d MMM y","d/M/yy"],ba:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} \u1793\u17c5\u200b\u1798\u17c9\u17c4\u1784 {0}","{1} \u1793\u17c5\u200b\u1798\u17c9\u17c4\u1784 {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5};var l={l:".",A:",",M:"%",ia:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"\u00a4#,##0.00",m:"USD"};l={l:",",A:".",M:"%",ia:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"#,##0.00\u00a4",m:"KHR"};b("I18N_DATETIMESYMBOLS_ERAS",h.s);b("I18N_DATETIMESYMBOLS_ERANAMES",h.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.K);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.X);b("I18N_DATETIMESYMBOLS_MONTHS",h.D);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.W);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.T);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.Z);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ca);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.aa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.V);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.U);b("I18N_DATETIMESYMBOLS_QUARTERS",h.R);b("I18N_DATETIMESYMBOLS_AMPMS",h.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ba);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ea);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.w);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.fa);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.ha);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.F);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.I);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.da);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.i);
void 0!==h.na&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.na);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.A);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.M);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.ia);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.P);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.C);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.O);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.B);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.J);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.S);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.N);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.b);
