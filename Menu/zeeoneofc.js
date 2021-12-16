exports.allmenu = (namabot, pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`Hello @${pushname} Saya ${namabot}

📛 Nama : ${pushname} 
🆔 Nomor : @${sender.split("@")[0]} 
📊 Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
🎁 Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
💳 Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
💹 Balance : ${getBalance(sender, balance)}


—————— *OWNER MENU* ——————
│${prefix}bc [text]
│${prefix}bcimage [reply foto]
│${prefix}ban @tag
│${prefix}unban @tag
│${prefix}block @tag
│${prefix}unblock @tag
│${prefix}setbiobot [text]
│${prefix}setnamabot [text]
│${prefix}resetlimit
│${prefix}prem add @tag waktu
│${prefix}prem del
│${prefix}sewa add waktu
│${prefix}sewa del
│${prefix}setcmd [reply stiker]
│${prefix}delcmd [reply stiker]
│${prefix}listcmd
│${prefix}auto [ketik/vn]
│ > [eval]
│ => [async]
│$ [cmd termux]
└──────────────────

————— *DOWNLOAD MENU* —————
│${prefix}play [query]
│${prefix}ytmp3 [url]
│${prefix}ytmp4 [url]
│${prefix}video [query]
│${prefix}igdl [url]
│${prefix}igstory [username]
│${prefix}igphoto [url]
│${prefix}igreel [url]
│${prefix}igvideo [url]
│${prefix}igtv [url]
│${prefix}tiktok [url]
│${prefix}tiktokaudio [url]
│${prefix}tiktoknowm [url]
│${prefix}mediafire [url]
└──────────────────

————— *CONVERT MENU* —————
│${prefix}sticker [tag foto/vid]
│${prefix}swm [text|text2]
│${prefix}take [text|text2]
│${prefix}attp [text]
│${prefix}semoji 🐦
│${prefix}toimg [reply stiker]
│${prefix}tourl [reply foto/vid]
│${prefix}tomp4 [reply stiker gif]
│${prefix}togif [reply stiker gif]
│${prefix}tomp3 [reply vid]
│${prefix}tovn [reply music]
│${prefix}tinyurl [link]
│${prefix}kontak 62***|nama
│${prefix}bass  [reply music]
│${prefix}slow  [reply music]
│${prefix}fast [reply music]
│${prefix}robot [reply music]
│${prefix}detikvn [durasi]
│${prefix}tupai [reply music]
│${prefix}vibrato [reply music]
└───────────────────

—————— *EDITOR MENU* ——————
│${prefix}memegen teks atas | teks bawah
│${prefix}stickmeme teks
└───────────────────

—————— *SEARCH MENU* ——————
│${prefix}pinterest [query]
│${prefix}wikipedia [query]
│${prefix}playstore [query]
│${prefix}yts [query]
└───────────────────

—————— *STORAGE MENU* ——————
│${prefix}addrespon [pesan|respon]
│${prefix}delrespon [pesan]
│${prefix}listrespon
│${prefix}listbadword
│${prefix}addbadword [text]
│${prefix}delbadword [text]
│${prefix}addvn [text]
│${prefix}listvn
│${prefix}delvn [text]
│${prefix}addimage [text]
│${prefix}listimage
│${prefix}delimage [text]
│${prefix}addvideo [text]
│${prefix}listvideo 
│${prefix}delvideo [text]
│${prefix}addsticker [text]
│${prefix}liststicker
│${prefix}delstik [text]
└───────────────────

—————— *FUN MENU* ——————
│${prefix}slot
│${prefix}truth
│${prefix}dare
│${prefix}voting @tag | alasan | waktu
│${prefix}delvote
│${prefix}vote
│${prefix}devote
└───────────────────
   
—————— *GROUP MENU* ——————
│${prefix}sider [reply pesan bot]
│${prefix}afk [reason]
│${prefix}hidetag [text]
│${prefix}notif [text]
│${prefix}jadian
│${prefix}listonline
│${prefix}tagall
│${prefix}ceksewa
│${prefix}add 628XX
│${prefix}kick @tag
│${prefix}promote @tag
│${prefix}demote @tag
│${prefix}resetlink
│${prefix}linkgc
│${prefix}setdesc [text]
│${prefix}setnamagrup [text]
│${prefix}grup [open/close]
│${prefix}antibadword [on/off]
│${prefix}welcome [on/off]
│${prefix}antilink [on/off]
│${prefix}antitroli [on/off]
└───────────────────

—————— *ANIME MENU* ——————
│${prefix}loli
│${prefix}neko
│${prefix}waifu
│${prefix}shinobu
│${prefix}megumin
│${prefix}bully
│${prefix}cuddle
│${prefix}cry
│${prefix}hug
│${prefix}awoo
│${prefix}kiss
│${prefix}lick
│${prefix}pat
│${prefix}smug
│${prefix}bonk
│${prefix}yeet
│${prefix}blush
│${prefix}smile
│${prefix}wave
│${prefix}highfive
│${prefix}handhold
│${prefix}nom
│${prefix}bite
│${prefix}glomp
│${prefix}slap
│${prefix}kill
│${prefix}happy
│${prefix}wink
│${prefix}poke
│${prefix}dance
│${prefix}cringe
└───────────────────
   
—————— *LIMIT MENU* ——————
│${prefix}topbalance
│${prefix}toplimit
│${prefix}limit
│${prefix}level
│${prefix}balance
│${prefix}buylimit [nominal]
│${prefix}giftlimit @tag | nominal
│${prefix}buyprem [need 1k limit]
└───────────────────
   
—————— *MAKER MENU* ——————
│${prefix}nuliskanan [text]
│${prefix}nuliskiri [text]
│${prefix}foliokanan [text]
│${prefix}foliokiri [text]
│${prefix}naruto [text]
│${prefix}shadow [text]
│${prefix}lovemsg [text]
│${prefix}doubleheart [text]
│${prefix}coffecup [text]
│${prefix}lovetext [text]
│${prefix}butterfly [text]
│${prefix}romantic [text]
│${prefix}smoke [text]
│${prefix}burnpaper [text]
│${prefix}grass [text]
└───────────────────

—————— *OTHER MENU* ——————
│${prefix}pantun
│${prefix}faktaunik
│${prefix}donasi
│${prefix}asupan
│${prefix}nulis
│${prefix}getnumber [reply user]
│${prefix}getpic @tag
│${prefix}wame 
│${prefix}towame
└───────────────────`
}
