// LiveValidation 1.3 (standalone version)
// Copyright (c) 2007-2008 Alec Hill (www.livevalidation.com)
// LiveValidation is licensed under the terms of the MIT License
// MODIFIED by Oracle for use in Eloqua Forms.v2

var names1 = ['012.net.il', '1000island.net', '11mail.com', '123.com', '123.net', '123box.net', '123india.com', '123mail.cl', '123qwe.co.uk', '126.com', '133sh.com', '139.com', '14035.nocoxmail.com', '150ml.com', '15meg4free.com', '163.net', '163169.net', '163bj.com', '180.net', '180com.net', '1818.com', '188.com', '189.com', '1coolplace.com', '1internetdrive.com', '1mum.com', '1netdrive.com', '1nsyncfan.com', '1under.com', '1webave.com', '1webhighway.com', '212.com', '21cn.com', '24horas.com', '263.net', '263.net.cn', '2911.net', '2bmail.co.uk', '2d2i.com', '2die4.com', '2trom.com', '3000.it', '321media.com', '32gmail.com', '3dmail.com', '3xl.net', '444.net', '4mg.com', '4newyork.com', '54.co.za', '5iron.com', '5star.com', '8163.net.cn', 'attglobal.net', '88.am', '8848.net', '888.nu', '97rock.com', '9online.fr', 'aaamail.zzn.com', 'aaanet.ru', 'aamail.net', 'aaronkwok.net', 'abcflash.net', 'abcmailbox.net', 'abdulnour.com', 'aberystwyth.com', 'ix.netcom.com', 'about.com', 'absamail.co.za', 'abv.bg', 'academicplanet.com', 'academycougars.com', 'acceso.or.cr', 'access4less.net', 'accessgcc.com', 'accountant.com', 'ace-of-base.com', 'acmecity.com', 'acmemail.net', 'activist.com', 'adexec.com', 'adfarrow.com', 'adios.net', 'ados.fr', 'advalvas.be', 'advancesigns.necoxmail.com', 'aeiou.pt', 'aemail4u.com', 'aeneasmail.com', 'aflaw.necoxmail.com', 'africamail.com', 'africaonline.co.ke', 'africaonline.co.tz', 'africaonline.com.gh', 'agoodmail.com', 'ahaa.dk', 'aichi.com', 'aim.com', 'aircraftmail.com', 'airforceemail.com', 'airmail.net', 'airpost.net', 'airtelmail.in', 'ajacied.com', 'ak47.hu', 'aknet.kg', 'albawaba.com', 'alex4all.com', 'alexandria.cc', 'algeria.com', 'alhilal.net', 'alice.de', 'alice.it', 'alive.cz', 'aliyun.com', 'allergist.com', 'allmail.net', 'alloymail.com', 'allracing.com', 'allsaintsfan.com', 'alltel.net', 'alskens.dk', 'altavista.com', 'altavista.net', 'altavista.se', 'alternativagratis.com', 'alumni.com', 'alumnidirector.com', 'alvilag.hu', 'amele.com', 'america.hm', 'americamail.com', 'ahsmail.com', 'amis.net', 'amnetsal.com', 'amrer.net', 'amuro.net', 'amuromail.com', 'ananzi.co.za', 'andylau.net', 'anfmail.com', 'angelfan.com', 'angelfire.com', 'angelic.com', 'animal.net', 'animalwoman.net', 'anjungcafe.com', 'anote.com', 'another.com', 'anotherwin95.com', 'antisocial.com', 'anti-social.com', 'antnet.net.tr', 'antongijsen.com', 'antwerpen.com', 'anymoment.com', 'anytimenow.com', 'aol.ca', 'aol.co.uk', 'aol.com.br', 'aol.com.mx', 'aol.com.ve', 'aol.de', 'aol.fr', 'aol.in', 'aol.it', 'aol.jp', 'aol.net', 'aol.net.au', 'aol.org', 'apexmail.com', 'apmail.com', 'apollo.lv', 'appraiser.net', 'approvers.net', 'arabia.com', 'arabtop.net', 'arcademaster.com', 'archaeologist.com', 'arcmail.com', 'arcor.de', 'arcormail.de', 'arcotronics.bg', 'arcticmail.com', 'argentina.com', 'aristotle.org', 'army.net', 'arnet.com.ar', 'asean-mail.com', 'asemail.att.com', 'asheville.com', 'asia.com', 'asiafind.com', 'asia-links.com', 'asia-mail.com', 'asianavenue.com', 'asiancityweb.com', 'asiansonly.net', 'asianwired.net', 'asiapoint.net', 'as-if.com', 'assala.com', 'assamesemail.com', 'astroboymail.com', 'astrosfan.com', 'astrosfan.net', 'asurfer.com', 'athenachu.net', 'atina.cl', 'atl.lv', 'atlaswebmail.com', 'atlink.com', 'atnet.ru', 'ato.check.com', 'atozasia.com', 'att.net', 'attymail.com', 'au.ru', 'auctioneer.net', 'ausi.com', 'austin.rr.com', 'australiamail.com', 'austrosearch.net', 'autoescuelanerja.com', 'automotiveauthority.com', 'avh.hu', 'awsom.net', 'axoskate.com', 'ayna.com', 'azimiweb.com', 'houston.rr.com', 'bachelorboy.com', 'bachelorgal.com', 'backpackers.com', 'backstreet-boys.com', 'backstreetboysclub.com', 'bagherpour.com', 'bak.rr.com', 'bangkok.com', 'bangkok2000.com', 'bannertown.net', 'baptistmail.com', 'baptized.com', 'barcelona.com', 'bartender.net', 'baseballmail.com', 'basketballmail.com', 'batuta.net', 'baudoinconsulting.com', 'bboy.zzn.com', 'bcvibes.com', 'beauchemin.necoxmail.com', 'beeebank.com', 'beenhad.com', 'beep.ru', 'beer.com', 'beethoven.com', 'belice.com', 'belizehome.com', 'Bell.net', 'berkscounty.com', 'berkshire.rr.com', 'berlin.com', 'berlinexpo.de', 'bestmail.us', 'bettergolf.net', 'bham.rr.com', 'bharatmail.com', 'bigassweb.com', 'bigblue.net.au', 'bigboab.com', 'bigfoot.com', 'bigfoot.de', 'bigger.com', 'bigmailbox.com', 'bigpond.com.au', 'bigpond.net.au', 'bigramp.com', 'bikemechanics.com', 'bikeracer.com', 'bikeracers.net', 'bikerider.com', 'billsfan.com', 'billsfan.net', 'bimamail.com', 'bimla.net', 'birdowner.net', 'bisons.com', 'bitmail.com', 'bitpage.net', 'biz.mail.ru', 'bizec.rr.com', 'bizhosting.com', 'bizla.rr.com', 'bizlaredo.rr.com', 'bizstx.rr.com', 'biztwmi.rr.com', 'bizwi.rr.com', 'bizwoh.rr.com', 'bk.ru', 'blackburnmail.com', 'blackplanet.com', 'blader.com', 'blazemail.com', 'bluehyppo.com', 'bluemail.ch', 'bluemail.dk', 'bluesfan.com', 'blueyonder.co.uk', 'blushmail.com', 'bmlsports.net', 'mailcity.com', 'boardermail.com', 'boatracers.com', 'bol.com.br', 'bolando.com', 'bollywoodz.com', 'bol-online.com', 'bolt.com', 'boltonfans.com', 'bom4.vsnl.net.in', 'bombdiggity.com', 'bonbon.net', 'boom.com', 'bootmail.com', 'bornnaked.com', 'bossofthemoss.com', 'bostonoffice.com', 'bounce.net', 'box.az', 'boxbg.com', 'boxemail.com', 'boxfrog.com', 'boyzoneclub.com', 'bradfordfans.com', 'brasilia.net', 'brazilmail.com', 'brazilmail.com.br', 'brcoxmail.com', 'breathe.com', 'bresnan.net', 'brew-master.com', 'brez.com', 'brfree.com.br', 'britneyclub.com', 'brittonsign.com', 'broadcast.net', 'bsdmail.com', 'bsmail.in', 'btinternet.com', 'btopenworld.co.uk', 'btp.jkmail.com', 'buffymail.com', 'bullsfan.com', 'bullsgame.com', 'bumerang.ro', 'bunko.com', 'buryfans.com', 'business-man.com', 'businessman.net', 'businessweekmail.com', 'busta-rhymes.com', 'busymail.com', 'buyersusa.com', 'bvimailbox.com', 'byteme.com', 'c2i.net', 'c3.hu', 'c4.com', 'ca.rr.com', 'cabacabana.com', 'nyc.rr.com', 'cableone.net', 'cable.net.co', 'cable1.net', 'cablenet.com.cy', 'caere.it', 'onlinehome.de', 'cairomail.com', 'cal.vsnl.net.in', 'californiamail.com', 'callnetuk.com', 'callsign.net', 'caltanet.it', 'camidge.com', 'canada.com', 'canada-11.com', 'canadianmail.com', 'canoemail.com', 'canwetalk.com', 'caramail.com', 'care2.com', 'careerbuildermail.com', 'carioca.net', 'btconnect.com', 'cartestraina.ro', 'cash4u.com', 'hawaii.rr.com', 'catcha.com', 'catholic.org', 'catsrule.garfield.com', 'cavtel.net', 'coqui.net', 'cbn.net.id', 'cbx.ru', 'ccn.net', 'ccnmail.com', 'cd2.com', 'cei.net', 'celineclub.com', 'cellular1.net', 'celtic.com', 'centennialcom.com', 'centexbiz.rr.com', 'centoper.it', 'centralpets.com', 'centrum.cz', 'centrum.sk', 'centurylink.com', 'centurylink.net', 'centurytel.net', 'cgac.es', 'chaiyomail.com', 'chance2mail.com', 'chandrasekar.net', 'charmedmail.com', 'chat.ru', 'chattown.com', 'chauhanweb.com', 'check.com', 'check1check.com', 'cheerful.com', 'chef.net', 'chek.com', 'chello.be', 'chello.cz', 'chello.hu', 'chello.nl', 'chemist.com', 'chepfd.necoxmail.com', 'chequemail.com', 'cheyenneweb.com', 'chez.com', 'chibardun.net', 'chickmail.com', 'china.net.vg', 'chinalook.com', 'chinamail.com', 'chirk.com', 'chocaholic.com.au', 'christianmail.net', 'chtts.ru', 'churchusa.com', 'cia.hu', 'cia-agent.com', 'ciaoweb.it', 'cicciociccio.com', 'cinci.rr.com', 'bizcinci.rr.com', 'cincinow.net', 'citeweb.net', 'uswest.net', 'nwlink.com', 'iowatelecom.net', 'city2city.com', 'city-of-bath.org', 'city-of-birmingham.com', 'city-of-brighton.org', 'city-of-cambridge.com', 'cityofcardiff.net', 'city-of-coventry.com', 'city-of-edinburgh.com', 'city-of-lichfield.com', 'city-of-lincoln.com', 'city-of-liverpool.com', 'cityoflondon.org', 'city-of-manchester.com', 'city-of-nottingham.com', 'city-of-oxford.com', 'city-of-swansea.com', 'city-of-westminster.com', 'city-of-westminster.net', 'city-of-york.net', 'tx.rr.com', 'claramail.com', 'classicalfan.com', 'classicmail.co.za', 'clds.net', 'clerk.com', 'cliffhanger.com', 'close2you.net', 'club4x4.net', 'clubalfa.com', 'clubbers.net', 'clubducati.com', 'clubhonda.net', 'club-internet.fr', 'clubmember.org', 'clubvdo.net', 'cluemail.com', 'cm1.hinet.net', 'cmef.necoxmail.com', 'cml.hinet.net', 'cmpmail.com', 'cnnsimail.com', 'coastalnow.net', 'cochill.net', 'codec.ro', 'coder.hu', 'coid.biz', 'coldmail.com', 'prtc.net', 'collectiblesuperstore.com', 'collector.org', 'collegebeat.com', 'collegeclub.com', 'collegemail.com', 'colleges.com', 'columbus.rr.com', 'columbusrr.com', 'columnist.com', 'comic.com', 'acninc.net', 'communityconnect.com', 'comprendemail.com', 'compuserve.com', 'computer4u.com', 'computer-freak.com', 'computermail.net', 'tiscali.it', 'conexcol.com', 'conk.com', 'connect4free.net', 'connectbox.com', 'connet.com.au', 'conok.com', 'consultant.com', 'contractor.net', 'cookiemonster.com', 'cool.br', 'coolgoose.ca', 'coolgoose.com', 'coolkiwi.com', 'coollist.com', 'coolmail.com', 'coolmail.net', 'coolsend.com', 'coolsite.net', 'cooooool.com', 'cooperation.net', 'cooperationtogo.net', 'copacabana.com', 'copper.net', 'cornells.com', 'cornerpub.com', 'corpemail.com', 'corporatedirtbag.com', 'correo.terra.com.gt', 'corrwireless.net', 'cortinet.com', 'cotas.net', 'counsellor.com', 'coxinet.net', 'cpaonline.net', 'cpmjk.jkmail.com', 'cpp114.com', 'cox-internet.com', 'cracker.hu', 'crazedanddazed.com', 'crazysexycool.com', 'cristianemail.com', 'critterpost.com', 'croeso.com', 'crosshairs.com', 'crosswinds.net', 'crwmail.com', 'cry4helponline.com', 'cs.com', 'csacomp.com', 'csdcomets.org', 'csicomputers.com', 'csinibaba.hu', 'csl.rr.com', 'cswnet.com', 'cuemail.com', 'curio-city.com', 'cuteandcuddly.com', 'cute-girl.com', 'cutey.com', 'cwixmail.com', 'cww.de', 'cyber4all.com', 'cyber-africa.net', 'cyberbabies.com', 'cybercafemaui.com', 'cyberdude.com', 'cyberforeplay.net', 'cybergal.com', 'cybergrrl.com', 'cyberinbox.com', 'cyberleports.com', 'cybermail.net', 'cybernet.it', 'cyberservices.com', 'cyberspace-asia.com', 'cybertrains.org', 'cyber-wizard.com', 'cyclefanz.com', 'cynetcity.com', 'dabsol.net', 'dadacasa.com', 'dagmail.com', 'daha.com', 'dailypioneer.com', 'dak.rr.com', 'dallas.theboys.com', 'dallasmail.com', 'dangerous-minds.com', 'dansegulvet.com', 'darrenchamley.wanadoo.co.uk', 'data54.com', 'daum.net', 'davegracey.com', 'dawnsonmail.com', 'earthlink.net', 'dawsonmail.com', 'dazedandconfused.com', 'dbzmail.com', 'dc.rr.com', 'dcemail.com', 'deadlymob.org', 'deal-maker.com', 'dearriba.com', 'death-star.com', 'dejanews.com', 'deliveryman.com', 'deneg.net', 'depechemode.com', 'deseretmail.com', 'desertmail.com', 'netzero.net', 'desilota.com', 'deskmail.com', 'deskpilot.com', 'destin.com', 'detik.com', 't-mobile.com', 'deutschland-net.com', 'devotedcouples.com', 'dfwatson.com', 'dhaka.net', 'digibel.be', 'diplomats.com', 'dirtracer.com', 'disciples.com', 'discofan.com', 'discoverymail.co.za', 'discoverymail.com', 'disinfo.net', 'disposable.com', 'di-ve.com', 'dls.net', 'dmailman.com', 'dnet.net.id', 'dnsmadeeasy.com', 'doctor.com', 'dodo.com.au', 'dog.com', 'dogmail.co.uk', 'dogsnob.net', 'doityourself.com', 'insightbb.com', 'fuse.net', 'doneasy.com', 'donjuan.com', 'dontgotmail.com', 'dontmesswithtexas.com', 'doramail.com', 'dostmail.com', 'dotcom.fr', 'dott.it', 'dplanet.ch', 'dr.com', 'dragoncon.net', 'dragracer.com', 'dropzone.com', 'drotposta.hu', 'dtgjrd.cn', 'dubaimail.com', 'dublin.com', 'dublin.ie', 'dunlopdriver.com', 'dunloprider.com', 'duno.com', 'dutchmail.com', 'dwp.net', 'dygo.com', 'dynamitemail.com', 'latinmail.com', 'eak.rr.com', 'e-apollo.lv', 'earthalliance.com', 'earthcam.net', 'earthdome.com', 'earthling.net', 'earthonline.net', 'firehousemail.com', 'eastcoast.co.za', 'eastlink.ca', 'eastmail.com', 'easy.to', 'easypost.com', 'eatmydirt.com', 'ec.rr.com', 'ecardmail.com', 'ecbsolutions.net', 'echina.com', 'eclipso.ch', 'ecompare.com', 'edmail.com', 'ednatx.com', 'edtnmail.com', 'educacao.te.pt', 'educastmail.com', 'ehmail.com', 'eircom.net', 'charter.net', 'elmore.rr.com', 'elp.rr.com', 'elsitio.com', 'em.centurylink.com', 'emadisonriver.com', 'emadisonriver.net', 'email.com', 'email.com.br', 'email.com.cn', 'email.cz', 'e-mail.dk', 'email.dp.ua', 'email.ee', 'email.it', 'email.lu', 'email.nu', 'email.ro', 'email.ru', 'e-mail.ru', 'email.si', 'e-mail.ua', 'email.women.com', 'email2me.net', 'emailacc.com', 'emailaccount.com', 'e-mailanywhere.com', 'emailchoice.com', 'emailcorner.net', 'emailem.com', 'emailengine.net', 'emailforyou.net', 'emailgroups.net', 'emailhome.co.za', 'email-london.co.uk', 'emailpinoy.com', 'emailplanet.com', 'emails.ru', 'e-mails.ru', 'emailuser.net', 'emailx.net', 'ematic.com', 'embarqmail.com', 'emcali.net.co', 'emirates.net.ae', 'myempiremedical.net', 'emumail.com', 'end-war.com', 'enel.net', 'engineer.com', 'england.com', 'englandmail.com', 'epatra.com', 'epost.de', 'eposta.hu', 'eqqu.com', 'eramail.co.za', 'eresmas.com', 'erie.net', 'eriga.lv', 'essex1.com', 'estranet.it', 'e-tapaal.com', 'eth.net', 'ethos.st', 'etoast.com', 'etrademail.com', 'eudoramail.com', 'eufaula.rr.com', 'europe.com', 'europemail.com', 'euroseek.com', 'everestkc.net', 'every1.net', 'everyday.com.kh', 'everyone.net', 'examnotes.net', 'excel.net', 'excite.co.jp', 'excite.com', 'excite.it', 'execs.com', 'kc.rr.com', 'expressasia.com', 'extenda.net', 'extended.com', 'eyou.com', 'ezcybersearch.com', 'ezmail.egine.com', 'ezmail.ru', 'ezrs.com', 'f1fans.net', 'fan.com', 'fan.theboys.com', 'fansonlymail.com', 'fantasticmail.com', 'farang.net', 'faroweb.com', 'fastem.com', 'fastemail.us', 'fastemailer.com', 'fastermail.com', 'fastimap.com', 'fastmail.ca', 'fastmail.fm', 'fastmail.net', 'fastmail.us', 'fastmailbox.net', 'fastmessaging.com', 'fastnet.co.uk', 'fastservice.com', 'fatcock.net', 'fathersrightsne.org', 'fbi.hu', 'fbi-agent.com', 'felicity.com', 'felicitymail.com', 'femenino.com', 'fetchmail.co.uk', 'fetchmail.com', 'feyenoorder.com', 'ffanet.com', 'fiberia.com', 'filipinolinks.com', 'financemail.net', 'financier.com', 'findmail.com', 'finebody.com', 'finfin.com', 'fire-brigade.com', 'fireman.net', 'fishburne.org', 'flashemail.com', 'flashmail.com', 'flashmail.net', 'flipcode.com', 'fmail.co.uk', 'fmailbox.com', 'fmgirl.com', 'fmguy.com', 'fnbmail.co.za', 'fnmail.com', 'folkfan.com', 'foodmail.com', 'football.theboys.com', 'footballmail.com', 'foothills.net', 'forfree.at', 'forpresident.com', 'for-president.com', 'fortado.nl', 'fortmail.com', 'fortuncity.com', 'fortunecity.com', 'forum.dk', 'foxmail.com', 'free.com.pe', 'free.fr', 'freeaccess.nl', 'freeaccount.com', 'freeandsingle.com', 'freedom.usa.com', 'freegates.be', 'freeghana.com', 'freeler.nl', 'freemail.c3.hu', 'freemail.com.au', 'freemail.com.pk', 'freemail.de', 'freemail.et', 'freemail.gr', 'freemail.hu', 'freemail.it', 'freemail.lt', 'freemail.nl', 'freemail.org.mk', 'freemail.ru', 'freenet.de', 'freenet.kg', 'freeola.com', 'freeola.net', 'free-org.com', 'freeserve.co.uk', 'freestamp.com', 'freestart.hu', 'freesurf.fr', 'freesurf.nl', 'freeuk.com', 'freeuk.net', 'freeukisp.co.uk', 'freeweb.org', 'freewebemail.com', 'freeyellow.com', 'freezone.co.uk', 'fresnomail.com', 'friends-cafe.com', 'friendsfan.com', 'from-africa.com', 'fromalabama.com', 'fromalaska.com', 'from-america.com', 'from-argentina.com', 'fromarizona.com', 'fromarkansas.com', 'from-asia.com', 'from-australia.com', 'from-belgium.com', 'from-brazil.com', 'fromcalifornia.com', 'from-canada.com', 'from-china.net', 'fromcolorado.com', 'fromconnecticut.com', 'fromdelaware.com', 'from-england.com', 'from-europe.com', 'fromflorida.net', 'from-france.net', 'fromgeorgia.com', 'from-germany.net', 'fromhawaii.net', 'from-holland.com', 'fromidaho.com', 'fromillinois.com', 'fromindiana.com', 'fromiowa.com', 'from-israel.com', 'from-italy.net', 'from-japan.net', 'fromjupiter.com', 'fromkansas.com', 'fromkentucky.com', 'from-korea.com', 'fromlouisiana.com', 'frommaine.net', 'frommaryland.com', 'frommassachusetts.com', 'from-mexico.com', 'frommiami.com', 'frommichigan.com', 'fromminnesota.com', 'frommississippi.com', 'frommissouri.com', 'frommontana.com', 'fromnebraska.com', 'fromnevada.com', 'fromnewhampshire.com', 'fromnewjersey.com', 'fromnewmexico.com', 'fromnewyork.net', 'fromnorthcarolina.com', 'fromnorthdakota.com', 'fromohio.com', 'fromoklahoma.com', 'fromoregon.net', 'from-outerspace.com', 'frompennsylvania.com', 'fromrhodeisland.com', 'fromru.com', 'from-russia.com', 'fromsouthcarolina.com', 'fromsouthdakota.com', 'from-spain.net', 'fromtennessee.com', 'fromtexas.com', 'fromthestates.com', 'fromutah.com', 'fromvermont.com', 'fromvirginia.com', 'fromwashington.com', 'fromwashingtondc.com', 'fromwestvirginia.com', 'fromwisconsin.com', 'fromwyoming.com', 'front.ru', 'frontier.net', 'frontiernet.net', 'frostbyte.uk.net', 'fsmail.net', 'ftml.net', 'fullmail.com', 'funkfan.com', 'fuorissimo.com', 'furnitureprovider.com', 'fut.es', 'fwnb.com', 'fxsmails.com', 'galamb.net', 'galaxy5.com', 'galaxyhit.com', 'gamboa.com', 'gamebox.net', 'gamegeek.com', 'gamespotmail.com', 'garbage.com', 'gardener.com', 'gawab.com', 'gaybrighton.co.uk', 'gaza.net', 'gazeta.pl', 'gazibooks.com', 'gbms.ae', 'gbonline.com', 'gci.net', 'gebmail.com', 'geecities.com', 'geek.com', 'geek.hu', 'geeklife.com', 'gee-wiz.com', 'gemcraft.necoxmail.com', 'general-hospital.com', 'geocities.com', 'geologist.com', 'geopia.com', 'germanymail.com', 'gh2000.com', 'ghanamail.com', 'ghostmail.com', 'giantsfan.com'];

        var names2 = ['giga4u.de', 'gigamail.nl', 'gigileung.org', 'gilanet.net', 'givepeaceachance.com', 'gjinc.necoxmail.com', 'glay.org', 'glendale.net', 'globalconnect.com.au', 'globalfree.it', 'globaloutlook.com', 'globalpagan.com', 'globalsite.com.br', 'globelines.com', 'globelines.com.ph', 'globomail.com', 'gmail.cl', 'gmail.co', 'gmail.co.uk', 'gmail.com.ar', 'gmail.com.br', 'gmail.com.co', 'gmail.com.in', 'gmail.com.mx', 'gmail.com.my', 'gmail.com.sg', 'gmail.com.vn', 'gmail.de', 'gmail.do', 'gmail.fr', 'gmail.gov', 'gmail.net', 'gmail.ru', 'gmail22.com', 'gmx.com', 'gmx.at', 'gmx.ca', 'gmx.ch', 'gmx.co.uk', 'gmx.com.mx', 'gmx.de', 'gmx.es', 'gmx.fr', 'gmx.li', 'gmx.mx', 'gmx.net', 'gmx.tm', 'gmx.us', 'gnwmail.com', 'go.com', 'go.com.jo', 'go.ro', 'go.ru', 'go2.com.py', 'go2net.com', 'gocollege.com', 'gocubs.com', 'gofree.co.uk', 'goldenmail.ru', 'goldmail.ru', 'golfemail.com', 'golfmail.be', 'gonavy.net', 'goodstick.com', 'googlemail.com', 'goplay.com', 'gorontalo.net', 'gospelfan.com', 'gotalk.net.au', 'gothere.uk.com', 'gotmail.com', 'gotomy.com', 'govolsfan.com', 'gportal.hu', 'grabmail.com', 'graduate.org', 'graffiti.net', 'gramszu.net', 'graphic-designer.com', 'grapplers.com', 'gratisweb.com', 'greatlakes.net', 'greenmail.net', 'email.msn.com', 'grics.net', 'grm.net', 'groupmail.com', 'grungecafe.com', 'gt.rr.com', 'gtemail.net', 'gtmc.net', 'gua.net', 'guessmail.com', 'guju.net', 'gulftel.com', 'gurlmail.com', 'xmission.com', 'guy.com', 'guy2.com', 'guyanafriends.com', 'gyorsposta.com', 'gyorsposta.hu', 'hackermail.com', 'hackermail.net', 'hailmail.net', 'hairdresser.net', 'hamptonroads.com', 'handbag.com', 'handleit.com', 'hang-ten.com', 'hanmail.net', 'happemail.com', 'happycounsel.com', 'mail.banner.com.cn', 'hardynet.com', 'hbchv.rr.com', 'hcm.fpt.vn', 'hcm.vnn.vn', 'heesun.net', 'hehe.com', 'helio.com', 'hello.hu', 'hello.net.au', 'hello.to', 'helter-skelter.com', 'hemc.net', 'hempseed.com', 'herediano.com', 'heremail.com', 'herono1.com', 'hetnet.nl', 'hey.to', 'hhdevel.com', 'hibox.hinet.net', 'highmilton.com', 'highquality.com', 'highveldmail.co.za', 'hilarious.com', 'hinet.net', 'hiphopfan.com', 'hispavista.com', 'hispeed.ch', 'hitthe.net', 'hkg.net', 'hkstarphoto.com', 'hmail.com', 'hockeymail.com', 'hollywoodkids.com', 'home.com', 'home.nl', 'home.no.net', 'home.pl', 'home.ro', 'home.se', 'homeart.com', 'home-email.com', 'homelocator.com', 'homemail.co.au', 'homemail.co.za', 'homemail.com', 'homemail.com.br', 'homestead.com', 'homeworkcentral.com', 'sohu.com', 'hongkong.com', 'hookup.net', 'hoopsmail.com', 'horrormail.com', 'host-it.com.sg', 'hot.ee', 'hot.rr.com', 'hotbot.com', 'hotbrev.com', 'telecom.com.co', 'une.net.co', 'icloud.com', 'hotfire.net', 'hotmail.ca', 'hotmail.cl', 'hotmail.cn', 'hotmail.co', 'hotmail.co.il', 'hotmail.co.in', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com.ar', 'hotmail.com.br', 'hotmail.com.com', 'hotmail.com.mx', 'hotmail.com.my', 'hotmail.com.sg', 'hotmail.com1', 'hotmail.de', 'hotmail.es', 'hotmail.fr', 'hotmail.it', 'hotmail.kg', 'hotmail.kz', 'hotmail.ru', 'hotmail.sg', 'hotpop.com', 'hotpop3.com', 'hot-shot.com', 'hotvoice.com', 'housemail.com', 'rangeweb.net', 'hrtc.net', 'hsuchi.net', 'humanoid.net', 'hunsa.com', 'airmail.com', 'hush.com', 'hushmail.com', 'hypernautica.com', 'i.am', 'i.ua', 'i12.com', 'icestorm.com', 'icmsconsultants.com', 'icon.co.za', 'i-connect.com', 'icq.com', 'icqmail.com', 'icrazy.com', 'id-base.com', 'idirect.com', 'idm.net.lb', 'iespana.es', 'ifoward.com', 'i-france.com', 'ig.com.br', 'ignazio.it', 'ignmail.com', 'ilse.nl', 'imaginemail.com', 'imaginet.co.za', 'i-mail.com.au', 'imail.ru', 'imailbox.com', 'imel.org', 'imneverwrong.com', 'imposter.co.uk', 'imsday.com', 'imsonline.com', 'imstressed.com', 'imt.net', 'imtoosexy.com', 'inacom-msn.com', 'iname.com', 'inbox.com', 'inbox.lt', 'inbox.lv', 'inbox.net', 'in-box.net', 'inbox.ru', 'incamail.com', 'inco.com.lb', 'incredimail.com', 'indexa.fr', 'india.com', 'indiatimes.com', 'indo.net.id', 'indocities.com', 'indomail.com', 'indo-mail.com', 'indy.rr.com', 'indyracers.com', 'ibm.net', 'info.com.ph', 'info66.com', 'infohq.com', 'infomail.es', 'infomart.or.jp', 'info-media.de', 'infospacemail.com', 'infovia.com.ar', 'ingrammicro.com.au', 'inicia.es', 'inmail.sk', 'innocent.com', 'inorbit.com', 'insidebaltimore.net', 'insight.rr.com', 'instruction.com', 'instructor.net', 'insurer.com', 'interburp.com', 'interfree.it', 'interia.pl', 'interlap.com.ar', 'intermail.co.il', 'internetbiz.com', 'internet-club.com', 'internetdrive.com', 'internetegypt.com', 'internetemails.net', 'internetmailing.net', 'internet-police.com', 'internode.on.net', 'intrstar.net', 'investormail.com', 'inwind.it', 'iobox.com', 'iobox.fi', 'iol.it', 'iowaemail.com', 'i-p.com', 'ip3.com', 'iprimus.com.au', 'iqemail.com', 'irangate.net', 'iraqmail.com', 'ireland.com', 'irelandmail.com', 'irj.hu', 'irmail.ru', 'isellcars.com', 'islamonline.net', 'isleuthmail.com', 'ismart.net', 'isnet.net.tr', 'isomedia.com', 'isonfire.com', 'isp9.net', 'israelmail.com', 'italymail.com', 'itancia.fr', 'itloox.com', 'itmom.com', 'ivebeenframed.com', 'ivillage.com', 'iwan-fals.com', 'iwmail.com', 'iwon.com', 'ixir.com', 'izadpanah.com', 'jahoopa.com', 'jakuza.hu', 'jam.rr.com', 'japan.com', 'jaydemail.com', 'jazzandjava.com', 'jazzfan.com', 'jazzgame.com', 'jerusalemmail.com', 'jetemail.net', 'jewishmail.com', 'jippii.fi', 'jkmail.com', 'jkpm.jkmail.com', 'jmail.co.za', 'job4u.com', 'joinme.com', 'jordanmail.com', 'journalist.com', 'joymail.com', 'jpopmail.com', 'jubiimail.dk', 'jules700.wanadoo.co.uk', 'jump.com', 'jumpy.it', 'juniormail.com', 'juno.com', 'justemail.net', 'justicemail.com', 'kaazoo.com', 'kaixo.com', 'kalpoint.com', 'kansascity.com', 'kapoorweb.com', 'karachian.com', 'karachioye.com', 'karbasi.com', 'katamail.com', 'kayafmmail.co.za', 'kbjrmail.com', 'kcks.com', 'keg-party.com', 'keko.com.ar', 'kellychen.com', 'kennett.net', 'kenyaweb.com', 'keromail.com', 'keyemail.com', 'kgb.hu', 'khosropour.com', 'bigpond.com', 'kimo.com', 'kinki-kids.com', 'kittymail.com', 'kitznet.at', 'kiwibox.com', 'kiwitown.com', 'kmail.com.au', 'konx.com', 'lycos.co.kr', 'korea.com', 'koreamail.com', 'kozmail.com', 'kpnmail.nl', 'kpnplanet.nl', 'krongthip.com', 'krunis.com', 'ksanmail.com', 'ksee24mail.com', 'ktp.jkmail.com', 'kube93mail.com', 'kukamail.com', 'kumarweb.com', 'kuwait-mail.com', 'la.com', 'ladymail.cz', 'lagerlouts.com', 'lahoreoye.com', 'lakmail.com', 'lamer.hu', 'land.ru', 'lankamail.com', 'lantic.net', 'laposte.net', 'latemodels.com', 'latino.com', 'law.com', 'lawyer.com', 'lc.jkmail.com', 'lcwm.jkmail.com', 'leehom.net', 'legalactions.com', 'legislator.com', 'lenta.ru', 'leonlai.net', 'letsgomets.net', 'letterbox.com', 'levele.com', 'levele.hu', 'lex.bg', 'lexis-nexis-mail.com', 'libero.it', 'liberomail.com', 'lick101.com', 'linkmaster.com', 'linuxfreemail.com', 'linuxmail.org', 'lionsfan.com.au', 'list.ru', 'live.ca', 'live.cl', 'live.co.uk', 'live.co.za', 'live.com', 'live.com.ar', 'live.com.au', 'live.com.mx', 'live.com.my', 'live.com.sg', 'live.de', 'live.fr', 'live.in', 'liverpoolfans.com', 'llandudno.com', 'llangollen.com', 'lmn.occoxmail.com', 'lmxmail.sk', 'lobbyist.com', 'local1293.necoxmail.com', 'localbar.com', 'london.com', 'longsidegolf.wanadoo.co.uk', 'loobie.com', 'looksmart.co.uk', 'looksmart.com', 'looksmart.com.au', 'lopezclub.com', 'louiskoo.com', 'lovingjesus.com', 'leaco.net', 'lowandslow.com', 'luckymail.com', 'lumos.net', 'luso.pt', 'verison.net', 'luukku.com', 'lycos.co.uk', 'lycos.com', 'lycos.es', 'lycos.it', 'lycos.jp', 'lycos.ne.jp', 'lycosemail.com', 'lycosmail.com', 'fdn.com', 'm4.org', 'ma.rr.com', 'mac.com', 'macbox.com', 'macfreak.com', 'machinecandy.com', 'mackcompanies.com', 'macmail.com', 'madcreations.com', 'madisonriver.biz', 'madnet.rs', 'madrid.com', 'maffia.hu', 'magicmail.co.za', 'mahmoodweb.com', 'mail.austria.com', 'mail.az', 'mail.be', 'mail.bg', 'mail.buct.edu.cn', 'mail.bulgaria.com', 'mail.byte.it', 'mail.co.za', 'mail.com', 'm-a-i-l.com', 'mail.de', 'mail.ee', 'mail.entrepeneurmag.com', 'mail.femh.org.tw', 'mail.freetown.com', 'mail.goo.ne.jp', 'mail.gr', 'mail.hitthebeach.com', 'mail.kmsp.com', 'mail.knu.edu.tw', 'mail.md', 'mail.neea.edu.cn', 'mail.net', 'mail.net.sa', 'mail.nsysu.edu.tw', 'mail.nu', 'mail.online.sh.cn', 'mail.org.uk', 'mail.pf', 'mail.pharmacy.com', 'mail.pt', 'mail.rcom.ru', 'mail.r-o-o-t.com', 'mail.ru', 'mail.salu.net', 'mail.shu.edu.cn', 'mail.sisna.com', 'mail.spaceports.com', 'mail.theboys.com', 'mail.tomsknet.ru', 'mail.ua', 'mail.usa.com', 'mail.vasarhely.hu', 'mail15.com', 'mail1st.com', 'mail2007.com', 'mail2web.com', 'mail2world.com', 'mail3000.com', 'mail333.com', 'mail66.ru', 'mailandftp.com', 'mailandnews.com', 'mailas.com', 'mailasia.com', 'mail-awu.de', 'mailbolt.com', 'mailbomb.net', 'mailboom.com', 'mailbox.as', 'mailbox.co.za', 'mail-box.cz', 'mailbox.gr', 'mailbox.hu', 'mailbr.com.br', 'mailc.net', 'mailcan.com', 'mailcc.com', 'mail-center.com', 'mail-central.com', 'mailchoose.co', 'mailclub.fr', 'mailclub.net', 'mailexcite.com', 'mailforce.net', 'mailftp.com', 'mailgate.gr', 'mailgenie.net', 'mailhaven.com', 'mailhood.com', 'mailinator.com', 'mailingweb.com', 'mailisent.com', 'mailite.com', 'mail-me.com', 'mailme.dk', 'mailmight.com', 'mailmij.nl', 'mailnew.com', 'mailops.com', 'mailoye.com', 'mail-page.com', 'mailpanda.com', 'mailpost.zzn.com', 'mailpride.com', 'mailpuppy.com', 'mailroom.com', 'mailru.com', 'mails.dp.ua', 'mailsent.net', 'mailshuttle.com', 'mailstart.com', 'mailstartplus.com', 'mailsurf.com', 'mailtag.com', 'mailto.de', 'mailup.net', 'mailwire.com', 'maiz.ca', 'maktoob.com', 'mantrafreenet.com', 'mantramail.com', 'mantraonline.com', 'marchmail.com', 'nyct.net', 'mariahc.com', 'tds.net', 'adelphia.net', 'martindalemail.com', 'masrawy.com', 'matmail.com', 'mauimail.com', 'mauritius.com', 'maxleft.com', 'maxmail.co.uk', 'mbox.com.au', 'frontier.com', 'mcimail.com', 'mcmo.net', 'comcast.net', 'mebtel.net', 'nycap.rr.com', 'medcomfg.com', 'medcomminc.com', 'medcomsys.com', 'mediaone.net', 'medcompnet.com', 'medical.net.au', 'medicine.necoxmail.com', 'medmail.com', 'medscape.com', 'meetingmall.com', 'megago.com', 'megamail.pt', 'megapoint.com', 'mehrani.com', 'mehtaweb.com', 'mekhong.com', 'melodymail.com', 'meloo.com', 'me-mail.hu', 'members.student.com', 'menara.ma', 'message.hu', 'messages.to', 'metacrawler.com', 'metalfan.com', 'metcom911.org', 'metta.lk', 'mexicomail.com', 'qwestoffice.net', 'm-hmail.com', 'miatadriver.com', 'midohio.twcbc.com', 'midsouth.rr.com', 'miesto.sk', 'mighty.co.za', 'miho-nakayama.com', 'mikrotamanet.com', 'milmail.com', 'mindless.com', 'mini-mail.com', 'minister.com', 'misery.net', 'mitie.co.uk', 'mittalweb.com', 'mixmail.com', 'mjfrogmail.com', 'ml1.net', 'mn.rr.com', 'mnc.com.au', 'mobilbatam.com', 'mobilmail.net', 'mochamail.com', 'mohammed.com', 'moldova.cc', 'moldova.com', 'moldovacc.com', 'money.net', 'montevideo.com.uy', 'moose-mail.com', 'rochester.rr.com', 'mortaza.com', 'mosaicfx.com', 'mosaicmobile.net', 'moscowmail.com', 'motormania.com', 'movemail.com', 'mp4.it', 'mrpost.com', 'ms1.hinet.net', 'ms10.hinet.net', 'ms11.hinet.net', 'ms12.hinet.net', 'ms13.hinet.net', 'ms14.hinet.net', 'ms15.hinet.net', 'ms16.hinet.net', 'ms17.hinet.net', 'ms18.hinet.net', 'ms19.hinet.net', 'ms2.hinet.net', 'ms21.hinet.net', 'ms22.hinet.net', 'ms23.hinet.net', 'ms24.hinet.net', 'ms25.hinet.net', 'ms26.hinet.net', 'ms27.hinet.net', 'ms28.hinet.net', 'ms29.hinet.net', 'ms3.hinet.net', 'ms31.hinet.net', 'ms32.hinet.net', 'ms33.hinet.net', 'ms34.hinet.net', 'ms35.hinet.net', 'ms36.hinet.net', 'ms37.hinet.net', 'ms38.hinet.net', 'ms39.hinet.net', 'ms4.hinet.net', 'ms41.hinet.net', 'ms42.hinet.net', 'ms43.hinet.net', 'ms45.hinet.net', 'ms46.hinet.net', 'ms47.hinet.net', 'ms48.hinet.net', 'ms49.hinet.net', 'ms5.hinet.net', 'ms51.hinet.net', 'ms52.hinet.net', 'ms53.hinet.net', 'ms54.hinet.net', 'ms57.hinet.net', 'ms58.hinet.net', 'ms59.hinet.net', 'ms6.hinet.net', 'ms61.hinet.net', 'ms62.hinet.net', 'ms63.hinet.net', 'ms64.hinet.net', 'ms65.hinet.net', 'ms67.hinet.net', 'ms69.hinet.net', 'ms7.hinet.net', 'ms71.hinet.net', 'ms72.hinet.net', 'ms74.hinet.net', 'ms75.hinet.net', 'ms76.hinet.net', 'ms8.hinet.net', 'ms9.hinet.net', 'msa.hinet.net', 'mscold.com', 'msgbox.com', 'msl.hinet.net', 'msll.hinet.net', 'msn.co.il', 'msn.com', 'msn.com.au', 'mttestdriver.com', 'mtu-net.ru', 'mundomail.net', 'munich.com', 'mweb.co.za', 'mwt.net', 'my2way.com', 'mybox.it', 'mycabin.com', 'mycampus.com', 'mycity.com', 'mycool.com', 'mycountry.com', 'mydomain.com', 'mydotcomaddress.com', 'myfamily.com', 'mygo.com', 'myiris.com', 'mynamedot.com', 'mynet.com', 'mynetaddress.com', 'myownemail.com', 'myownfriends.com', 'mypad.com', 'mypersonalemail.com', 'myplace.com', 'myrealbox.com', 'myremarq.com', 'myself.com', 'mystupidjob.com', 'mythirdage.com', 'myway.com', 'myworldmail.com', 'n2.com', 'n2business.com', 'n2mail.com', 'n2software.com', 'nabc.biz', 'nafe.com', 'nagpal.net', 'nakedgreens.com', 'name.com', 'nameplanet.com', 'nandomail.com', 'naplesnews.net', 'naseej.com', 'nate.com', 'nativestar.net', 'nativeweb.net', 'naui.net', 'citlink.net', 'naver.com', 'navigator.lv', 'naxs.net', 'naz.com', 'nc.rr.com', 'ncap.rr.com', 'nchoicemail.com', 'nda.vsnl.net.in', 'ne.rr.com', 'neb.rr.com', 'neeva.net', 'nemra1.com', 'nenter.com', 'neo.rr.com', 'neomail.co.za', 'ner.rr.com', 'nervhq.org', 'net.hr', 'net4b.pt', 'net4you.at', 'netbounce.com', 'netbroadcaster.com', 'netby.dk', 'netcenter-vn.net', 'netexecutive.com', 'netexpressway.com', 'netgenie.com', 'netian.com', 'netizen.com.ar', 'netlane.com', 'netlimit.com', 'netmail.nl', 'netmanor.com', 'netmongol.com', 'netnet.com.sg', 'net-pager.net', 'netpiper.com', 'netposta.net', 'netradiomail.com', 'netralink.com', 'netscape.net', 'netscapeonline.co.uk', 'net-shopping.com', 'netspeedway.com', 'netsquare.com', 'netster.com', 'nettaxi.com', 'neturf.necoxmail.com', 'new.rr.com', 'newbc.rr.com', 'newmail.com', 'newmail.net', 'newmail.ru', 'newyork.com', 'nexxmail.com', 'nfmail.com', 'nhmail.com', 'nicebush.com', 'nicegal.com', 'nicholastse.net', 'nicolastse.com', 'nifty.com', 'nightcap.rr.com', 'nightmail.com', 'nightmail.ru', 'nikopage.com', 'nili.ca', 'nimail.com', 'ninfan.com', 'nirvanafan.com', 'nj.rr.com', 'nl.wanadoo.com', 'nm.ru', 'nnymail.com', 'noavar.com', 'nonpartisan.com', 'norika-fujiwara.com', 'norikomail.com', 'northrock.bm', 'northgates.net', 'nospammail.net', 'nowhere.com', 'ntlworld.com', 'ntscan.com', 'null.net', 'nwmail.com', 'ny.com', 'nyc.com', 'nycao.rr.com', 'nycat.rr.com', 'nycmail.com', 'nynycap.rr.com', 'nzoomail.com', 'o2online.de', 'oaklandas-fan.com', 'oath.com', 'oceanfree.net', 'oddpost.com', 'odmail.com', 'officedomain.com', 'office-email.com', 'offroadwarrior.com', 'oi.com.br', 'oicexchange.com', 'okbank.com', 'okhuman.com', 'okmad.com', 'okmagic.com', 'okname.net', 'okuk.com', 'oldies1041.com', 'oldies104mail.com', 'ole.com', 'olemail.com', 'olympist.net', 'omaninfo.com', 'tstt.net.tt', 'one.com', 'one.net', 'onebox.com', 'onenet.com.ar', 'onet.pl', 'oninet.pt', 'online.be', 'online.co.th', 'online.com.au', 'online.com.br', 'online.com.kh', 'online.cq.cn', 'online.de', 'online.fr', 'online.hr', 'online.ie', 'online.kz', 'online.ln.cn', 'online.ms', 'online.net', 'online.nl', 'online.no', 'online.nsk.su', 'online.ro', 'online.ru', 'online.sh.com', 'online.sinor.ru', 'online.ua', 'online.yn.cn', 'online-dubai.com', 'onlinewebmailinloggen.nl', 'onlinewiz.com', 'onmilwaukee.com', 'onobox.com', 'onvillage.com', 'op.pl', 'operafan.com', 'operamail.com', 'optician.com', 'optonline.com', 'optushome.com.au', 'optusnet.com', 'optusnet.com.au', 'orangeinbox.net', 'orbitel.bg', 'orc.ru', 'orgmail.net', 'orthodontist.net', 'osaictelecom.net', 'knology.net', 'osite.com.br', 'oso.com', 'otakumail.com', 'o-tay.com', 'otenet.gr', 'stny.rr.com', 'our.st', 'ourbrisbane.com', 'our-computer.com', 'ournet.md', 'our-office.com', 'outel.com', 'outgun.com', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.fr', 'outlook.in', 'outlook.jp', 'over-the-rainbow.com', 'ownmail.com', 'ownmail.net', 'oyoony.at', 'oyoony.de', 'oyoony.net', 'suddenlinkmail.com', 'ozbytes.net.au', 'ozemail.com.au', 'pa.net', 'pacific.net.id', 'pacific.net.ph', 'pacific.net.sg', 'pacific-ocean.com', 'pacific-re.com', 'pacificwest.com', 'packersfan.com', 'pagenet.net', 'pagina.de', 'pagons.org', 'pakistanoye.com', 'tisd.net', 'palestinemail.com', 'pandora.be', 'pannonmail.hu', 'paran.com', 'wi.rr.com', 'parkjiyoon.com', 'parrot.com', 'parsmail.com', 'partlycloudy.com', 'partynight.at', 'parvazi.com', 'passwordmail.com', 'pathfindermail.com', 'pconnections.net', 'pcpostal.com', 'pcsrock.com', 'peachworld.com', 'pediatrician.com', 'pemail.net', 'penpen.com', 'peoplepc.com', 'peopleweb.com', 'perfectmail.com', 'perm.ru', 'personal.ro', 'personales.com', 'pettypool.com', 'pezeshkpour.com', 'pfl.rr.com', 'phayze.com', 'photographer.net', 'phreaker.net', 'physicist.net', 'pickupman.com', 'picusnet.com', 'pigpig.net', 'redshift.com', 'pinoymail.com', 'piracha.net', 'pisem.net', 'planet.nl', 'planetaccess.com', 'planetall.com', 'planetarymotion.net', 'planetdirect.com', 'planetearthinter.net', 'planetmail.com', 'planet-mail.com', 'planetmail.net', 'planetout.com', 'plasa.com', 'playersodds.com', 'playful.com', 'pldtdsl.net', 'plusmail.com.br', 'pmail.net', 'pobox.com', 'pobox.hu', 'pobox.sk', 'pochta.ru'];

        var names3 = ['poczta.fm', 'poczta.pl', 'poetic.com', 'polandmail.com', 'polbox.com', 'policeoffice.com', 'politician.com', 'pool-sharks.com', 'poond.com', 'popaccount.com', 'popmail.com', 'popsmail.com', 'popstar.com', 'populus.net', 'portableoffice.com', 'portugalmail.com', 'portugalmail.pt', 'portugalnet.com', 'positive-thinking.com', 'post.com', 'post.cz', 'post.sk', 'posta.net', 'posta.ro', 'postaccesslite.com', 'postafree.com', 'postaweb.com', 'postinbox.com', 'postino.ch', 'postmark.net', 'postmaster.co.uk', 'postpro.net', 'pousa.com', 'powerfan.com', 'powerup.com.au', 'ppcofri.necoxmail.com', 'praize.com', 'aol.com', 'premiumservice.com', 'presidency.com', 'press.co.jp', 'priest.com', 'primposta.com', 'primposta.hu', 'pro.hu', 'probemail.com', 'progetplus.it', 'programmer.net', 'programozo.hu', 'proinbox.com', 'project2k.com', 'prolaunch.com', 'promessage.com', 'prontomail.com', 'protestant.com', 'protonmail.com', 'psmail.com', 'psv-supporter.com', 'rad.net.id', 'ptd.net', 'ptzygoda.necoxmail.com', 'public.bta.net.cn', 'public.east.cn.net', 'public.usa.com', 'public.yc.sx.cn', 'publicist.com', 'pulp-fiction.com', 'punkass.com', 'optimum.net', 'pwcny.rr.com', 'qabmail.com', 'qatar.net.qa', 'qatarmail.com', 'qip.ru', 'qprfans.com', 'qrio.com', 'quackquack.com', 'quakemail.com', 'qualityservice.com', 'qudsmail.com', 'quepasa.com', 'quest.net', 'quickwebmail.com', 'shaw.ca', 'quik.com', 'quiklinks.com', 'quikmail.com', 'qwest.net', 'swbell.net', 'r66.ru', 'r7.com', 'raakim.com', 'racedriver.com', 'racefanz.com', 'racingfan.com.au', 'racingmail.com', 'radicalz.com', 'radiologist.net', 'cwjamaica.com', 'ragingbull.com', 'rambler.ru', 'ranmamail.com', 'rastogi.net', 'rattle-snake.com', 'ratt-n-roll.com', 'ravearena.com', 'ravemail.com', 'razormail.com', 'rbcmail.ru', 'rccgmail.org', 'rdslink.ro', 'realemail.net', 'reallyfast.biz', 'realradiomail.com', 'realtyagent.com', 'reborn.com', 'recycler.com', 'rediff.co.in', 'rediff.com', 'rediffmail.com', 'rediffmailpro.com', 'rednecks.com', 'redseven.de', 'redsfans.com', 'reggaefan.com', 'reggafan.com', 'registerednurses.com', 'reincarnate.com', 'religious.com', 'time4lime.com', 'repairman.com', 'reply.hu', 'representative.com', 'rescueteam.com', 'skynet.be', 'resumemail.com', 'retired.rr.com', 'rezai.com', 'rgv.rr.com', 'richmondhill.com', 'rickymail.com', 'rin.ru', 'riopreto.com.br', 'bellnet.ca', 'riverview.net', 'rlholden.wanadoo.co.uk', 'rn.com', 'roanokemail.com', 'rock.com', 'rocketmail.com', 'rocketship.com', 'rockfan.com', 'rodchester.rr.com', 'rodrun.com', 'rome.com', 'roosh.com', 'r-o-o-t.com', 'rotchester.rr.com', 'rotfl.com', 'roughnet.com', 'rr.com', 'rrohio.com', 'rsub.com', 'rubyridge.com', 'runbox.com', 'rushpost.com', 'windstream.net', 'ruttolibero.com', 'rvshop.com', 'sabreshockey.com', 'sacbeemail.com', 'safarimail.com', 'safe-mail.net', 'safrica.com', 'sagra.lu', 'sympatico.ca', 'sailormoon.com', 'saintly.com', 'saintmail.net', 'salehi.net', 'sale-sale-sale.com', 'salesperson.net', 'samerica.com', 'samilan.net', 'sammimail.com', 'san.rr.com', 'sancharnet.in', 'sanfranmail.com', 'sanook.com', 'sapo.pt', 'sasktel.net', 'sativa.ro.org', 'satx.rr.com', 'saudia.com', 'sayhi.net', 'scandalmail.com', 'schizo.com', 'schoolemail.com', 'maine.rr.com', 'schoolmail.com', 'schoolsucks.com', 'schweiz.org', 'sci.fi', 'science.com.au', 'scientist.com', 'scifianime.com', 'scotlandmail.com', 'scottishmail.co.uk', 'scrtc.com', 'scubadiving.com', 'seanet.com', 'searchwales.com', 'sebil.com', 'prodigy.net.mx', 'secretary.net', 'secret-police.com', 'secretservices.net', 'gate.net', 'seductive.com', 'seekstoyboy.com', 'seguros.com.br', 'send.hu', 'sendme.cz', 'sent.com', 'sentrismail.com', 'serga.com.ar', 'servemymail.com', 'sesmail.com', 'sexmagnet.com', 'seznam.cz', 'sfr.fr', 'shahweb.net', '163.com', 'online.sh.cn', 'shaniastuff.com', 'sharewaredevelopers.com', 'sharmaweb.com', 'she.com', 'shootmail.com', 'shotgun.hu', 'shuf.com', 'sialkotcity.com', 'sialkotian.com', 'sialkotoye.com', 'sibmail.com', 'si.rr.com', 'sify.com', 'cox.net', 'silkroad.net', 'simmetrypcs.com', 'sina.com', 'sina.com.cn', 'sinamail.com', 'singapore.com', 'singmail.com', 'singnet.com.sg', 'skafan.com', 'skim.com', 'skizo.hu', 'sky.com', 'slamdunkfan.com', 'slingshot.com', 'slo.net', 'slotter.com', 's-mail.com', 'smapxsmap.net', 'smileyface.comsmithemail.net', 'smmail.cn', 'smoothmail.com', 'snail-mail.net', 'snail-mail.ney', 'snakebite.com', 'snakemail.com', 'sndt.net', 'sneakemail.com', 'snet.net', 'sniper.hu', 'snoopymail.com', 'snowboarding.com', 'snowdonia.net', 'snowmail.com', 'socal.rr.com', 'socamail.com', 'socceramerica.net', 'soccermail.com', 'soccermomz.com', 'socialworker.net', 'sociologist.com', 'socket.net', 'softhome.net', 'sol.dk', 'soldier.hu', 'songwriter.net', 'soon.com', 'soonerventures.com', 'telus.net', 'soulfoodcookbook.com', 'oh.rr.com', 'southernlinc.com', 'sover.net', 'sp.nl', 'space.com', 'spaceart.com', 'spacebank.com', 'space-bank.com', 'space-man.com', 'spacemart.com', 'space-ship.com', 'spacetowns.com', 'space-travel.com', 'spacewar.com', 'spainmail.com', 'spamex.com', 'spartapiet.com', 'spazmail.com', 'speakeasy.net', 'speedemail.net', 'speedpost.net', 'speedrules.com', 'speedrulz.com', 'spils.com', 'spinfinder.com', 'sport.rr.com', 'sportemail.com', 'sportsmail.com', 'sporttruckdriver.com', 'spray.no', 'spray.se', 'sprintmail.com', 'sprintpcs.com', 'spumonis.necoxmail.com', 'spx.rr.com', 'spymac.com', 'srilankan.net', 'rcn.com', 'stade.fr', 'stalag13.com', 'stargateradio.com', 'starmail.com', 'starmail.org', 'starmedia.com', 'starplace.com', 'starspath.com', 'start.com.au', 'starting-point.com', 'startrekmail.com', 'st-davids.net', 'stealthmail.com', 'wxs.nl', 'epix.net', 'pacbell.net', 'stn.rr.com', 'stockracer.com', 'suddenlink.net', 'stones.com', 'stopdropandroll.com', 'storksite.com', 'stribmail.com', 'strompost.com', 'strongguy.com', 'studentcenter.org', 'stx.rr.com', 'subnetwork.com', 'subram.com', 'sudanmail.net', 'suhabi.com', 'suisse.org', 'suite224.net', 'sukhumvit.net', 'sunpoint.net', 'sunrise-sunset.com', 'sunsgame.com', 'sunumail.sn', 'supanet.com', 'superdada.com', 'supereva.it', 'supermail.ru', 'superonline.net', 'surat.com', 'surf3.net', 'surfree.com', 'surfy.net', 'surgical.net', 'surimail.com', 'survivormail.com', 'sw.rr.com', 'sweb.cz', 'swedenmail.com', 'swiftdesk.com', 'swiftkenya.com', 'swingeasyhithard.com', 'swingfan.com', 'swipermail.zzn.com', 'swirve.com', 'swissinfo.org', 'swissmail.com', 'swissmail.net', 'swissmail.org', 'switchboardmail.com', 'switzerland.org', 'sx172.com', 'syom.com', 'syriamail.com', 't2mail.com', 'takuyakimura.com', 'talk21.com', 'talkcity.com', 'talktalk.net', 'tamil.com', 'tampabay.rr.com', 'tampabbay.rr.com', 'taosnet.com', 'tatanova.com', 'tbwt.com', 'gte.net', 'teachers.org', 'teamdiscovery.com', 'teamtulsa.net', 'tech4peace.org', 'techemail.com', 'techie.com', 'technisamail.co.za', 'technologist.com', 'techpointer.com', 'techscout.com', 'techseek.com', 'techspot.com', 'teenagedirtbag.com', 'telco.wlink.com.np', 'telebot.com', 'telebot.net', 'telecom.at', 'teleline.es', 'telenet.be', 'telerymd.com', 'teleserve.dynip.com', 'telia.com', 'telinco.net', 'telkom.net', 'telmarnt.com', 'telmex.net.co', 'telmexmail.com', 'telpage.net', 'telsur.net', 'telusplanet.net', 'temtulsa.net', 'tenchiclub.com', 'tenderkiss.com', 'tennismail.com', 'teol.net', 'terc.terra.com.pe', 'terra.cl', 'terra.com', 'terra.com.ar', 'terra.com.br', 'terra.com.kr', 'terra.com.mx', 'terra.com.pe', 'terra.es', 'tesco.net', 'tfanus.com.er', 'tfz.net', 'thai.com', 'thaimail.com', 'thaimail.net', 'thc.necoxmail.com', 'execpc.com', 'me.com', 'the18th.com', 'the-fastest.net', 'theheadoffice.com', 'theoffice.net', 'thepostmaster.net', 'the-professional.com', 'the-quickest.com', 'theracetrack.com', 'thewatercooler.com', 'thewebpros.co.uk', 'the-wild-west.com', 'thirdage.com', 'thoic.com', 'thundermail.com', 'tidata.net', 'tidni.com', 'tim.it', 'timein.net', 'tiscali.at', 'tiscali.be', 'tiscali.ch', 'tiscali.co.uk', 'tiscali.co.za', 'tiscali.cz', 'tiscali.de', 'tiscali.dk', 'tiscali.fr', 'tiscali.lu', 'tiscali.nl', 'tiscali.se', 'tiscalinet.it', 'tkcity.com', 'tm.net.my', 'tmail.com', 'tnn.net', 'toke.com', 'tongdamail.com', 't-online.de', 't-online.hu', 'toolsource.com', 'toothfairy.com', 'topchat.com', 'topgamers.co.uk', 'topletter.com', 'topmail.com.ar', 'topsurf.com', 'topteam.bg', 'torchmail.com', 'torontomail.com', 'touchlinevideo.co.uk', 'toughguy.net', 'hvc.rr.com', 'townisp.com', 'tpg.com.au', 'prodigy.net', 'travel.li', 'triad.rr.com', 'triadbiz.rr.com', 'trialbytrivia.com', 'wowway.com', 'tritium.net', 'trmailbox.com', 'cfl.rr.com', 'truckers.com', 'truckerz.com', 'truckracer.com', 'trust-me.com', 'tsamail.co.za', 'ttmail.com', 'ttml.co.in', 'tula.net', 'tunisiamail.com', 'turkey.com', 'tut.by', 'tutanota.com', 'tvstar.com', 'twcny.rr.com', 'twinstarsmail.com', 'twmi.rr.com', 'roadrunner.com', 'tycoonmail.com', 'mindspring.com', 'u2club.com', 'ua.fm', 'uae.ac', 'ubbi.com', 'ubbi.com.br', 'ubmail.com', 'uboot.com', 'netzero.com', 'uk.wanadoo.com', 'uk2k.com', 'uk2net.com', 'uk7.net', 'uk8.net', 'ukbuilder.com', 'ukcool.com', 'ukdreamcast.com', 'ukmail.org', 'ukmax.com', 'ukr.net', 'uku.co.uk', 'ulss7.it', 'ultapulta.com', 'ultrapostman.com', 'umail.hinet.net', 'ummah.org', 'umpire.com', 'unbounded.com', 'unforgettable.com', 'uni.de', 'unican.es', 'unihome.com', 'hotmail.com', 'union-tel.com', 'universal.pt', 'uniweb.net.co', 'uno.ee', 'uno.it', 'unofree.it', 'unomail.com', 'uol.com', 'uol.com.ar', 'uol.com.br', 'uol.com.co', 'uol.com.mx', 'uol.com.ve', 'uole.com', 'uole.com.ve', 'uolmail.com', 'uomail.com', 'upf.org', 'yahoo.com', 'uplink.net', 'optonline.net', 'ureach.com', 'urgentmail.biz', 'us.corp.terra.com', 'usa.com', 'usa.net', 'usa2net.net', 'usaaccess.net', 'usamailbox.com', 'usanetmail.com', 'usermail.com', 'usma.net', 'usmc.net', 'uswestmail.net', 'uymail.com', 'uyuyuy.com', 'vahoo.com', 'vancouverbc.net', 'varbizmail.com', 'vcmail.com', 'velnet.co.uk', 'velocall.com', 'veloxmail.com.br', 'venturecomm.net', 'verizon.net', 'verizonmail.com', 'veryfast.biz', 'veryspeedy.net', 'vianet.ca', 'videoconmail.com', 'vip.163.com', 'vip.gr', 'vipmail.ru', 'virgilio.it', 'virgin.net', 'virtualactive.com', 'virtualmail.com', 'visi.net', 'visitmail.com', 'visitweb.com', 'visto.com', 'visualcities.com', 'plus.google.com', 'vivavelocity.com', 'vivianhsu.net', 'vjmail.com', 'vjtimail.com', 'vlmail.com', 'vmail.me', 'vmail.net.au', 'vmail.ru', 'vnn.vn', 'vodamail.co.za', 'voicenet.com', 'voila.fr', 'volcanomail.com', 'vote4gop.org', 'vote-democrats.com', 'vote-hillary.com', 'votenet.com', 'vote-republicans.com', 'voyager.net', 'vr9.com', 'v-sexi.com', 'vsnl.in', 'vtext.com', 'w3.to', 'wahoye.com', 'wales2000.net', 'bellsouth.net', 'walla.com', 'wam.co.za', 'wanadoo.com', 'wanadoo.es', 'wanadoo.fr', 'wanadoo.nl', 'wanadoo.tn', 'warmmail.com', 'warpmail.net', 'warrior.hu', 'waumail.com', 'wbdet.com', 'wearab.net', 'web.de', 'webave.com', 'webcammail.com', 'webcity.ca', 'webdream.com', 'webinbox.com', 'webindia123.com', 'webjump.com', 'webmail.bellsouth.net', 'webmail.co.yu', 'webmail.co.za', 'web-mail.com.ar', 'webmail.hu', 'webmail.it', 'webmail.us', 'webmails.com', 'webname.com', 'web-police.com', 'webprogramming.com', 'webstation.com', 'websurfer.co.za', 'webtopmail.com', 'webtv.net', 'weedmail.com', 'weekmail.com', 'weekonline.com', 'wehshee.com', 'weinet.com', 'chello.at', 'welchmail.org', 'welsh-lady.com', 'gmail.com', 'westnet.com.au', 'wfbiz.rr.com', 'whale-mail.com', 'whartontx.com', 'wheelweb.com', 'whipmail.com', 'whoever.com', 'whoopymail.com', 'wickedmail.com', 'wideband.net.au', 'sbcglobal.net', 'wildmail.com', 'integra.net', 'sc.rr.com', 'windowslive.com', 'windrivers.net', 'wingnutz.com', 'hughes.net', 'winmail.co.in', 'winmail.com.au', 'winning.com', 'witty.com', 'wiz.cc', 'wkbwmail.com', 'woh.rr.com', 'wolf-web.com', 'wombles.com', 'wonder-net.com', 'wongfaye.com', 'wooow.it', 'workmail.co.za', 'workmail.com', 'worldmailer.com', 'worldnet.att.net', 'worldonline.co.za', 'wosaddict.com', 'wouldilie.com', 'wowgirl.com', 'wowmail.com', 'wp.pl', 'wpa.net', 'wpgvp.com', 'wptamail.com', 'wrestlingpages.com', 'wrexham.net', 'writeme.com', 'writemeback.com', 'wtvhmail.com', 'wwdg.com', 'www.com', 'www2000.net', 'wx88.net', 'wxs.net', 'wyrm.supernews.com', 'x5g.com', 'x-mail.net', 'xmastime.com', 'xmsg.com', 'x-networks.net', 'xoom.com', 'xoommail.com', 'xpressmail.zzn.com', 'xsinet.co.za', 'xsmail.com', 'xtra.co.nz', 'xuno.com', 'xzapmail.com', 'ya.ru', 'yada-yada.com', 'yadtel.net', 'yahoo.ac', 'yahoo.ca', 'yahoo.cl', 'yahoo.cm', 'yahoo.cn', 'yahoo.co', 'yahoo.co.id', 'yahoo.co.in', 'yahoo.co.jp', 'yahoo.co.kr', 'yahoo.co.nz', 'yahoo.co.th', 'yahoo.co.uk', 'yahoo.co.za', 'yahoo.com.ar', 'yahoo.com.au', 'yahoo.com.br', 'yahoo.com.cn', 'yahoo.com.hk', 'yahoo.com.is', 'yahoo.com.mx', 'yahoo.com.my', 'yahoo.com.pe', 'yahoo.com.ph', 'yahoo.com.ru', 'yahoo.com.sg', 'yahoo.com.sh', 'yahoo.com.tr', 'yahoo.com.tw', 'yahoo.com.vn', 'yahoo.de', 'yahoo.dk', 'yahoo.es', 'yahoo.fr', 'yahoo.gr', 'yahoo.ie', 'yahoo.in', 'yahoo.it', 'yahoo.jp', 'yahoo.net', 'yahoo.ru', 'yahoo.se', 'yahoofs.com', 'yahoogroups.com', 'yahoomail.com', 'yalla.com', 'yalla.com.lb', 'yalook.com', 'yam.com', 'yandex.by', 'yandex.com', 'yandex.kz', 'yandex.ru', 'yandex.ua', 'yapost.com', 'yaroslavl.ru', 'yawmail.com', 'ybb.ne.jp', 'yclub.com', 'yeah.net', 'yebox.com', 'yehaa.com', 'yehey.com', 'yemenmail.com', 'yepmail.net', 'yesbox.net', 'yifan.net', 'ymail.com', 'ynnmail.com', 'yogotemail.com', 'yopolis.com', 'youareadork.com', 'bellsouth.com', 'carolina.rr.com', 'youpy.com', 'your-house.com', 'yourinbox.com', 'yourname.freeservers.com', 'yours.com', 'yourwap.com', 'youtube.com', 'youvegotmail.net', 'youwager.eu', 'yowmail.com', 'qq.com', 'yuuhuu.net', 'yyhmail.com', 'zahadum.com', 'zcities.com', 'zdnetmail.com', 'zeeks.com', 'zeepost.nl', 'zensearch.net', 'zhaowei.net', 'zionweb.org', 'zip.net', 'zipido.com', 'ziplip.com', 'zipmail.com', 'zipmail.com.br', 'zipmax.com', 'zmail.ril.com', 'zmail.ru', 'zonnet.nl', 'zoominternet.net', 'zubee.com', 'zuvio.com', 'zuzzurello.com', 'zwallet.com', 'zybermail.com', 'zydecofan.com', 'zzn.com', 'zzom.co.uk'];


var LiveValidation=function(e,i){this.initialize(e,i)};LiveValidation.VERSION="1.3 standalone eloqua-19A",LiveValidation.TEXTAREA=1,LiveValidation.TEXT=2,LiveValidation.PASSWORD=3,LiveValidation.CHECKBOX=4,LiveValidation.SELECT=5,LiveValidation.FILE=6,LiveValidation.GROUP=7,LiveValidation.massValidate=function(e){for(var i=!0,t=0,a=e.length;t<a;++t){var n=e[t].validate();i&&(i=n)}return i},LiveValidation.prototype={validClass:"LV_valid",invalidClass:"LV_invalid",messageClass:"LV_validation_message",validFieldClass:"LV_valid_field",invalidFieldClass:"LV_invalid_field",initialize:function(e,i){var t=this,a=i||{};if(!e)throw new Error("LiveValidation::initialize - No element reference or element id has been provided!");if(a.isGroup?(this.element=e,this.form=this.element[0].form,this.elementType=LiveValidation.GROUP):(this.element=e.nodeName?e:document.getElementById(e),this.form=this.element.form,this.elementType=this.getElementType()),!this.element)throw new Error("LiveValidation::initialize - No element with reference or id of '"+e+"' exists!");this.validations=[],this.validMessage=a.validMessage||"Thankyou!",this.isGroup=a.isGroup||!1;var n=a.insertAfterWhatNode||this.element;if(this.insertAfterWhatNode=n.nodeType?n:document.getElementById(n),this.onValid=a.onValid||function(){this.insertMessage(this.createMessageSpan()),this.addFieldClass()},this.onInvalid=a.onInvalid||function(){this.insertMessage(this.createMessageSpan()),this.addFieldClass()},this.onlyOnBlur=a.onlyOnBlur||!1,this.wait=a.wait||0,this.onlyOnSubmit=a.onlyOnSubmit||!1,this.form&&(this.formObj=LiveValidationForm.getInstance(this.form),this.formObj.addField(this)),this.oldOnFocus=this.element.onfocus||function(){},this.oldOnBlur=this.element.onblur||function(){},this.oldOnClick=this.element.onclick||function(){},this.oldOnChange=this.element.onchange||function(){},this.oldOnKeyup=this.element.onkeyup||function(){},this.element.onfocus=function(e){return t.doOnFocus(e),t.oldOnFocus.call(this,e)},!this.onlyOnSubmit)switch(this.elementType){case LiveValidation.CHECKBOX:this.element.onclick=function(e){return t.validate(),t.oldOnClick.call(this,e)};case LiveValidation.SELECT:case LiveValidation.FILE:this.element.onchange=function(e){return t.validate(),t.oldOnChange.call(this,e)};break;case LiveValidation.GROUP:for(var s=0,l=this.element.length;s<l;s++)this.element[s].onchange=function(e){return t.validate(),t.oldOnChange.call(this,e)};default:this.onlyOnBlur||(this.element.onkeyup=function(e){return t.deferValidation(),t.oldOnKeyup.call(this,e)}),this.element.onblur=function(e){return t.doOnBlur(e),t.oldOnBlur.call(this,e)}}},destroy:function(){if(this.formObj&&(this.formObj.removeField(this),this.formObj.destroy()),this.element.onfocus=this.oldOnFocus,!this.onlyOnSubmit)switch(this.elementType){case LiveValidation.CHECKBOX:this.element.onclick=this.oldOnClick;case LiveValidation.SELECT:case LiveValidation.FILE:this.element.onchange=this.oldOnChange;break;default:this.onlyOnBlur||(this.element.onkeyup=this.oldOnKeyup),this.element.onblur=this.oldOnBlur}this.validations=[],this.removeMessageAndFieldClass()},add:function(e,i){return this.validations.push({type:e,params:i||{}}),this},remove:function(e,i){for(var t=!1,a=0,n=this.validations.length;a<n;a++)if(this.validations[a].type==e&&this.validations[a].params==i){t=!0;break}return t&&this.validations.splice(a,1),this},deferValidation:function(e){300<=this.wait&&this.removeMessageAndFieldClass();var i=this;this.timeout&&clearTimeout(i.timeout),this.timeout=setTimeout(function(){i.validate()},i.wait)},doOnBlur:function(e){this.focused=!1,this.validate(e)},doOnFocus:function(e){this.focused=!0,this.removeMessageAndFieldClass()},getElementType:function(){switch(!0){case"TEXTAREA"==this.element.nodeName.toUpperCase():return LiveValidation.TEXTAREA;case"INPUT"==this.element.nodeName.toUpperCase()&&"TEXT"==this.element.type.toUpperCase():return LiveValidation.TEXT;case"INPUT"==this.element.nodeName.toUpperCase()&&"PASSWORD"==this.element.type.toUpperCase():return LiveValidation.PASSWORD;case"INPUT"==this.element.nodeName.toUpperCase()&&"CHECKBOX"==this.element.type.toUpperCase():return LiveValidation.CHECKBOX;case"INPUT"==this.element.nodeName.toUpperCase()&&"FILE"==this.element.type.toUpperCase():return LiveValidation.FILE;case"SELECT"==this.element.nodeName.toUpperCase():return LiveValidation.SELECT;case"INPUT"==this.element.nodeName.toUpperCase():throw new Error("LiveValidation::getElementType - Cannot use LiveValidation on an "+this.element.type+" input!");default:throw new Error("LiveValidation::getElementType - Element must be an input, select, or textarea!")}},doValidations:function(){this.validationFailed=!1;for(var e=0,i=this.validations.length;e<i;++e){var t=this.validations[e];switch(t.type){case Validate.Presence:case Validate.Confirmation:case Validate.Acceptance:this.displayMessageWhenEmpty=!0,this.validationFailed=!this.validateElement(t.type,t.params);break;default:this.validationFailed=!this.validateElement(t.type,t.params)}if(this.validationFailed)return!1}return this.message=this.validMessage,!0},validateElement:function(e,i){if(this.elementType==LiveValidation.SELECT)var t=-1!==this.element.selectedIndex?this.element.options[this.element.selectedIndex].value:"";else t=this.element.value;if(e==Validate.Acceptance){if(this.elementType!=LiveValidation.CHECKBOX)throw new Error("LiveValidation::validateElement - Element to validate acceptance must be a checkbox!");t=this.element.checked}else if(this.isGroup){t="";for(var a=0,n=this.element.length;a<n;a++)if(this.element[a].checked){t=!0;break}}var s=!0;try{e(t,i)}catch(e){if(!(e instanceof Validate.Error))throw e;(""!==t||""===t&&this.displayMessageWhenEmpty)&&(this.validationFailed=!0,this.message=e.message,s=!1)}finally{return s}},validate:function(){return!!this.element.disabled||(this.doValidations()?(this.onValid(),!0):(this.onInvalid(),!1))},enable:function(){return this.element.disabled=!1,this},disable:function(){return this.element.disabled=!0,this.removeMessageAndFieldClass(),this},createMessageSpan:function(){var e=document.createElement("span"),i=document.createTextNode(this.message);return e.appendChild(i),e},insertMessage:function(e){if(this.removeMessage(),this.displayMessageWhenEmpty&&(this.elementType==LiveValidation.CHECKBOX||""==this.element.value)||""!=this.element.value){var i=this.validationFailed?this.invalidClass:this.validClass;e.className+=" "+this.messageClass+" "+i,this.insertAfterWhatNode.nextSibling?this.insertAfterWhatNode.parentNode.parentElement.insertBefore(e,this.insertAfterWhatNode.parentElement.nextSibling):this.insertAfterWhatNode.parentNode.parentElement.appendChild(e)}},addFieldClass:function(){this.removeFieldClass(),this.validationFailed?this.isGroup?-1==this.insertAfterWhatNode.parentElement.className.indexOf(this.invalidFieldClass)&&(this.insertAfterWhatNode.parentElement.className+=" "+this.invalidFieldClass):-1==this.element.className.indexOf(this.invalidFieldClass)&&(this.element.className+=" "+this.invalidFieldClass):(this.displayMessageWhenEmpty||""!=this.element.value)&&(this.isGroup?-1==this.insertAfterWhatNode.parentElement.className.indexOf(this.invalidFieldClass)&&(this.insertAfterWhatNode.parentElement.className+=" "+this.validFieldClass):-1==this.element.className.indexOf(this.validFieldClass)&&(this.element.className+=" "+this.validFieldClass))},removeMessage:function(){for(var e,i=this.insertAfterWhatNode.parentElement;i.nextSibling;){if(1===i.nextSibling.nodeType){e=i.nextSibling;break}i=i.nextSibling}e&&-1!=e.className.indexOf(this.messageClass)&&this.insertAfterWhatNode.parentElement.parentNode.removeChild(e)},removeFieldClass:function(){this.isGroup?(-1!=this.insertAfterWhatNode.parentElement.className.indexOf(this.invalidFieldClass)&&(this.insertAfterWhatNode.parentElement.className=this.insertAfterWhatNode.parentElement.className.split(this.invalidFieldClass).join("")),-1!=this.insertAfterWhatNode.parentElement.className.indexOf(this.validFieldClass)&&(this.insertAfterWhatNode.parentElement.className=this.insertAfterWhatNode.parentElement.className.split(this.validFieldClass).join(" "))):(-1!=this.element.className.indexOf(this.invalidFieldClass)&&(this.element.className=this.element.className.split(this.invalidFieldClass).join("")),-1!=this.element.className.indexOf(this.validFieldClass)&&(this.element.className=this.element.className.split(this.validFieldClass).join(" ")))},removeMessageAndFieldClass:function(){this.removeMessage(),this.removeFieldClass()}};var LiveValidationForm=function(e){this.initialize(e)};LiveValidationForm.instances={},LiveValidationForm.getInstance=function(e){var i=Math.random()*Math.random();return e.id||(e.id="formId_"+i.toString().replace(/\./,"")+(new Date).valueOf()),LiveValidationForm.instances[e.id]||(LiveValidationForm.instances[e.id]=new LiveValidationForm(e)),LiveValidationForm.instances[e.id]},LiveValidationForm.prototype={initialize:function(e){this.name=e.id,this.element=e,this.fields=[],this.oldOnSubmit=this.element.onsubmit||function(){};var i=this;this.element.onsubmit=function(e){return!!LiveValidation.massValidate(i.fields)&&!1!==i.oldOnSubmit.call(this,e||window.event)}},addField:function(e){this.fields.push(e)},removeField:function(e){for(var i=[],t=0,a=this.fields.length;t<a;t++)this.fields[t]!==e&&i.push(this.fields[t]);this.fields=i},destroy:function(e){return!(0!=this.fields.length&&!e)&&(this.element.onsubmit=this.oldOnSubmit,!(LiveValidationForm.instances[this.name]=null))}};var Validate={Presence:function(e,i){var t=(i=i||{}).failureMessage||"Can't be empty!";return""!==e&&null!=e||Validate.fail(t),!0},Numericality:function(e,i){var t=e,a=(e=Number(e),(i=i||{}).minimum||0==i.minimum?i.minimum:null),n=i.maximum||0==i.maximum?i.maximum:null,s=i.is||0==i.is?i.is:null,l=i.notANumberMessage||"Must be a number!",o=i.notAnIntegerMessage||"Must be an integer!",r=i.wrongNumberMessage||"Must be "+s+"!",d=i.tooLowMessage||"Must not be less than "+a+"!",h=i.tooHighMessage||"Must not be more than "+n+"!";switch(isFinite(e)||Validate.fail(l),i.onlyInteger&&(/\.0+$|\.$/.test(String(t))||e!=parseInt(e))&&Validate.fail(o),!0){case null!==s:e!=Number(s)&&Validate.fail(r);break;case null!==a&&null!==n:Validate.Numericality(e,{tooLowMessage:d,minimum:a}),Validate.Numericality(e,{tooHighMessage:h,maximum:n});break;case null!==a:e<Number(a)&&Validate.fail(d);break;case null!==n:e>Number(n)&&Validate.fail(h)}return!0},Format:function(e,i){e=String(e);var t=(i=i||{}).failureMessage||"Not valid!",a=i.pattern||/./,n=i.negate||!1;return n||a.test(e)||Validate.fail(t),n&&a.test(e)&&Validate.fail(t),!0},Email:function(e,i){var t=(i=i||{}).failureMessage||"Must be a valid email address!";return Validate.Format(e,{failureMessage:t,pattern:/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i}),!0},Length:function(e,i){e=String(e);var t=(i=i||{}).minimum||0==i.minimum?i.minimum:null,a=i.maximum||0==i.maximum?i.maximum:null,n=i.is||0==i.is?i.is:null,s=i.wrongLengthMessage||"Must be "+n+" characters long!",l=i.tooShortMessage||"Must not be less than "+t+" characters long!",o=i.tooLongMessage||"Must not be more than "+a+" characters long!";switch(!0){case null!==n:e.length!=Number(n)&&Validate.fail(s);break;case null!==t&&null!==a:Validate.Length(e,{tooShortMessage:l,minimum:t}),Validate.Length(e,{tooLongMessage:o,maximum:a});break;case null!==t:e.length<Number(t)&&Validate.fail(l);break;case null!==a:e.length>Number(a)&&Validate.fail(o);break;default:throw new Error("Validate::Length - Length(s) to validate against must be provided!")}return!0},Inclusion:function(e,i){var t=(i=i||{}).failureMessage||"Must be included in the list!",a=!1!==i.caseSensitive;if(i.allowNull&&null==e)return!0;i.allowNull||null!=e||Validate.fail(t);var n=i.within||[];if(!a){for(var s=[],l=0,o=n.length;l<o;++l){var r=n[l];"string"==typeof r&&(r=r.toLowerCase()),s.push(r)}n=s,"string"==typeof e&&(e=e.toLowerCase())}var d=!1,h=0;for(o=n.length;h<o;++h)n[h]==e&&(d=!0),i.partialMatch&&-1!=e.indexOf(n[h])&&(d=!0);return(!i.negate&&!d||i.negate&&d)&&Validate.fail(t),!0},Exclusion:function(e,i){return(i=i||{}).failureMessage=i.failureMessage||"Must not be included in the list!",i.negate=!0,Validate.Inclusion(e,i),!0},Confirmation:function(e,i){if(!i.match)throw new Error("Validate::Confirmation - Error validating confirmation: Id of element to match must be provided!");var t=(i=i||{}).failureMessage||"Does not match!",a=i.match.nodeName?i.match:document.getElementById(i.match);if(!a)throw new Error("Validate::Confirmation - There is no reference with name of, or element with id of '"+i.match+"'!");return e!=a.value&&Validate.fail(t),!0},Acceptance:function(e,i){var t=(i=i||{}).failureMessage||"Must be accepted!";return e||Validate.fail(t),!0},Custom:function(e,i){var t=(i=i||{}).against||function(){return!0},a=i.args||{},n=i.failureMessage||"Not valid!";return t(e,a)||Validate.fail(n),!0},now:function(e,i,t){if(!e)throw new Error("Validate::now - Validation function must be provided!");var a=!0;try{e(i,t||{})}catch(e){if(!(e instanceof Validate.Error))throw e;a=!1}finally{return a}},fail:function(e){throw new Validate.Error(e)},Error:function(e){this.message=e,this.name="ValidationError"}};

function handleFormSubmit(ele) { var submitButton = ele.querySelector('input[type=submit]'); var spinner = document.createElement('span'); spinner.setAttribute('class', 'loader'); submitButton.setAttribute('disabled', true); submitButton.style.cursor = 'wait'; submitButton.parentNode.appendChild(spinner); return true; }function resetSubmitButton(e){ var submitButtons = e.target.form.getElementsByClassName('submit-button'); for(var i=0;i<submitButtons.length;i++){  submitButtons[i].disabled = false; }  }function addChangeHandler(elements){  for(var i=0; i<elements.length; i++){   elements[i].addEventListener('change', resetSubmitButton); }  }var form = document.getElementById('form3600'); addChangeHandler(form.getElementsByTagName('input')); addChangeHandler(form.getElementsByTagName('select')); addChangeHandler(form.getElementsByTagName('textarea'));var nodes = document.querySelectorAll('#form3600 input[data-subscription]');  if (nodes) { for (var i = 0, len = nodes.length; i < len; i++) {var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription'); if(status ==='true') {nodes[i].checked = true;}}};var nodes = document.querySelectorAll('#form3600 select[data-value]');   if (nodes) { for (var i = 0; i < nodes.length; i++) { var node = nodes[i]; var selectedValue = node.dataset ? node.dataset.value : node.getAttribute('data-value'); if (selectedValue) { for (var j = 0; j < node.options.length; j++) { if(node.options[j].value === selectedValue) { node.options[j].selected = 'selected';break;}}}}}this.getParentElement = function(list) { return list[list.length-1].parentElement};var dom0 = document.querySelector('#form3600 #fe107230');var fe107230 = new LiveValidation(dom0, {validMessage: "", onlyOnBlur: false, wait: 300});var dom1 = document.querySelector('#form3600 #fe107231');var fe107231 = new LiveValidation(dom1, {validMessage: "", onlyOnBlur: false, wait: 300});var dom2 = document.querySelector('#form3600 #fe107232');var fe107232 = new LiveValidation(dom2, {validMessage: "", onlyOnBlur: false, wait: 300});var dom3 = document.querySelector('#form3600 #fe107233');var fe107233 = new LiveValidation(dom3, {validMessage: "", onlyOnBlur: false, wait: 300});var dom4 = document.querySelector('#form3600 #fe107234');var fe107234 = new LiveValidation(dom4, {validMessage: "", onlyOnBlur: false, wait: 300});var dom5 = document.querySelector('#form3600 #fe107235');var fe107235 = new LiveValidation(dom5, {validMessage: "", onlyOnBlur: false, wait: 300});var dom7 = document.querySelector('#form3600 #fe107348');var fe107348 = new LiveValidation(dom7, {validMessage: "", onlyOnBlur: false, wait: 300});var dom8 = document.querySelector('#form3600 #fe107237');var fe107237 = new LiveValidation(dom8, {validMessage: "", onlyOnBlur: false, wait: 300});

var legal_characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_´abcdefghijklmnopqrstuvwxyz{|}~€_‚ƒ„...†‡ˆ‰_‹Œ____''" + '"' + '"' + "–—˜™_›œ__Ÿ ¡¢£€x_§¨©ª«¬_®¯°z__´μ¶·¸_º»___¿ÀÁÃÄÅÆÇÈÉÊËÌÍÎÏ_ÑÒÓÔÕÖ_ØÙÚÛÜ__ßàáãäåæçèéêëìíîï_ñòóôõö÷øùúûü__ÿ";
var enstring = "";

var emailadd1;

function encrypt_cookie(cookie_value, encrypt_key) {
  var cookie_character
  var character_location
  var encrypted_location
  var encrypted_character
  var encrypted_string = ""  
  for (var counter = 0; counter < cookie_value.length; counter++) {  
    cookie_character = cookie_value.substring(counter, counter + 1)
    character_location = legal_characters.indexOf(cookie_character)  
    encrypted_location = character_location ^ encrypt_key    
    encrypted_character = legal_characters.substring(encrypted_location, encrypted_location + 1)  
    encrypted_string += encrypted_character     
  }
  //console.log(encrypted_string);
  enstring = encrypted_string;
  return encrypted_string;
}

function decrypt_cookie(encrypted_string, encrypt_key) {
  var cookie_character
  var character_location
  var encrypted_location
  var encrypted_character
  var cookie_value = ""  
  for (var counter = 0; counter < encrypted_string.length; counter++) {
    encrypted_character = encrypted_string.substring(counter, counter + 1)   
    encrypted_location = legal_characters.indexOf(encrypted_character)  
    character_location = encrypted_location ^ encrypt_key    
    cookie_character = legal_characters.substring(character_location, character_location + 1)   
    cookie_value += cookie_character 
  }
  console.log(cookie_value);
	return cookie_value;  
}

function insertBefore(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode);
}
function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}
function labelatt(x) {
    var labels = document.getElementsByTagName('label');
    for(var i = 0; i < labels.length; i ++) {
        var attr = labels[i].getAttribute('for'); //or labels[i].htmlFor
        if(attr === x) {
           // labels[i].style.visibility = 'hidden';
           labels[i].style.display = 'none';
        }
	}
}
  var today = new Date();
// var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
var expiry = new Date(today.getTime() + (1000 * 60 * 60 * 24 *30));

function setCookie(name, value) {
    document.cookie=name + "=" + encodeURIComponent(escape(value)) + ";domain=avaya.com; path=/; expires="+ expiry.toUTCString();
  }
function setCookieSecure(name, value) {
    document.cookie=name + "=" + encodeURIComponent(escape(value)) + ";Secure;domain=avaya.com; path=/; expires=" + expiry.toUTCString()+"; HttpOnly:true; SameSite:None";
}
  
function getCookie(name){
	var re=new RegExp(name+"=([^;]+)");var value=re.exec(document.cookie);return(value!=null)?unescape(value[1]):null;
} 
 
var GTM1 = document.getElementsByName("GACLIENTID")[0];
var GTM2 = document.getElementsByName("GAUSERID")[0];
var GTM3 = document.getElementsByName("GATRACKID")[0];
GTM1.id = "GACLIENTID";
GTM2.id = "ruid";
GTM3.id = "GATRACKID";

// document.getElementsByName("thankyou_url")[0].value="https://www.avaya.com/en/products/ucaas/public-demo-experience/";

document.getElementsByName("thankyou_url")[0].value=document.getElementById("cms_redirectUrl").innerText;
/*if (!!getCookie('FName')){
	console.log("firstnamehide");
	labelatt('fe107230');//hide EmailOptin label
	document.getElementById("fe107230").type = "hidden";
} else {
	console.log("firstnameshow");
	
}
if (!!getCookie('LName')){
	console.log("lastnamehide");
	labelatt('fe107231');//hide EmailOptin label
	document.getElementById("fe107231").type = "hidden";
} else {
	console.log("lastnameshow");
	
}
if (!!getCookie('country')){
	console.log("countrynamehide");
	labelatt('fe107235');//hide EmailOptin label
	document.getElementById("fe107235").type = "hidden";
} else {
	console.log("countrynameshow");
	
}*/


 /* var formValues = {"firstName":"Test1","lastName":"Test2","company":"Test3","email":"test@test.com"};
  console.log("values = "+JSON.stringify(formValues));
                    setCookie("roiAAWFOregData",JSON.stringify(formValues));
*/

labelatt('fe107348');//hide EmailOptin label
document.getElementById("fe107348").type = "hidden"; //EmailOptin is text field to hide this field

/*** GDPR Optin / Optout Code **************/
var d = new Date(); // Define current date
var month = d.getMonth()+1; // get month
var day = d.getDate(); // get day
var fullyear =  d.getFullYear(); // get full year
var output =  ((''+month).length<2 ? '0' : '')+ month +  '-' + ((''+day).length<2 ? '0' : '') + day + '-' + fullyear;

// check checkbox for optin / oupt out
function checkOptin(){
	var checkbox1 =  document.getElementById("optin");
	if(checkbox1.checked == true){
		document.getElementsByName("emailOptinDate1")[0].value = output;
		document.getElementsByName("emailOptinSource1")[0].value = "21CCAAS-GL-DEMOVID";
		document.getElementsByName("permissionemail")[0].value = "Yes";
		document.getElementsByName("optin")[0].value = "Yes";
		document.getElementsByName("EmoptIn")[0].value = "Yes";
	} else {
		document.getElementsByName("emailOptinDate1")[0].value = "";
		document.getElementsByName("emailOptinSource1")[0].value = "";
		document.getElementsByName("permissionemail")[0].value = "";
		document.getElementsByName("optin")[0].value = "";
		document.getElementsByName("EmoptIn")[0].value = "";
	}
}
	
var ctacookievalue;
var taccookievalue;
if (!!getUrlVar('CTA')){
	//$.cookie('CTA',getUrlVar('CTA'),{expires:date,path:'/',domain:'avaya.com'});
	//setCookie("CTA", getUrlVar('CTA'));
	ctacookievalue = getUrlVar('CTA');
	document.getElementsByName("cta_code")[0].value = getUrlVar('CTA');
} else {
	document.getElementsByName("cta_code")[0].value = "21CCAAS-GL-DEMOVID";
	/*if (getCookie('CTA')!="" || getCookie('cta')!=""){ 
        //var length1 = getCookie('cta');
        //console.log(length1.length);
        // console.log("length = "+getCookie('CTA').length);
      if (!!getCookie('CTA')){
        console.log("CTA Code"+getCookie('CTA'));
        ctacookievalue = getCookie('CTA');
		document.getElementsByName("cta_code")[0].value = getCookie('CTA');
      } else if (!!getCookie('cta')){
        console.log("CTA Code"+getCookie('cta'));
        ctacookievalue = getCookie('cta');
		document.getElementsByName("cta_code")[0].value = getCookie('cta');
      }
     }*/
}
if (!!getUrlVar('TAC')){
	//$.cookie('TAC',getUrlVar('TAC'),{expires:date,path:'/',domain:'avaya.com'});
	//setCookie("TAC", getUrlVar('TAC'));
	taccookievalue = getUrlVar('TAC');
	document.getElementsByName("tactic_code")[0].value = getUrlVar('TAC');
} else {
	document.getElementsByName("tactic_code")[0].value = "21CCAAS-GL-DEMOVID-CO";
	/*if (getCookie('TAC')!="" || getCookie('tac')!=""){  
          console.log("TAC Code");
      if (!!getCookie('TAC')){
        console.log("TAC Code =="+getCookie('TAC'));
        taccookievalue = getCookie('TAC');
		document.getElementsByName("tactic_code")[0].value = getCookie('TAC');
      } else if (!!getCookie('tac')){
        console.log("tac code =="+getCookie('tac'));
        taccookievalue = getCookie('tac');
		document.getElementsByName("tactic_code")[0].value = getCookie('tac');
      }
	}*/
}

for(var k = 0; k < 8; k++) {
/*var ch1 = "document.getElementById('formElement";
ch1 = ch1 + k + "').parentNode";
console.log("ch1 == " + ch1);
ch1.setAttribute("style", "padding-bottom:10px;");*/
var ch2 = document.getElementById('formElement'+k).getAttribute("style");
//console.log("ch2 == "+ch2);
if (ch2 === null){
	document.getElementById('formElement'+k).setAttribute('style','padding-bottom:10px;');
} else {
	document.getElementById('formElement'+k).setAttribute('style','padding-bottom:10px;'+ch2);
}
var ch3 = document.getElementById('formElement'+k).parentNode.innerHTML;

//console.log("ch3 == "+ch3);
}

var formTop = document.getElementsByClassName("layout container-fluid")[0];
var formTop1 = document.getElementById('formElementid0');
var pInstruct = document.createElement("p");
pInstruct.id="pInstruct";
pInstruct.style.marginBottom= '0px';
pInstruct.innerHTML = "<font style='color: #313133;font-weight: 500;font-size:12px'>Fields marked with <span style='color: #da291c; font-size: 12px;'>*</span> are required.</font>";
formTop.insertBefore(pInstruct, formTop.firstChild);

var labelc = document.getElementsByClassName('elq-label');
for(var p = 0; p < 7; p++) {
	//if(p !== 4){
var labelch = document.getElementsByClassName('elq-label')[p].innerHTML;
console.log("labelch === "+labelch);
labelch = labelch + "<span style='color: #da291c;font-weight: bold;font-size: 0.875rem;font-size: 14px;'>*</span>";
document.getElementsByClassName('elq-label')[p].innerHTML = labelch;
	//}
}


//eloqua hidden fields 
var fnfld = document.getElementById("formElement0");
var newdiv1 = document.createElement('div');
newdiv1.innerHTML = "<input type='hidden' name='elqCustomerGUID' value=''><input type='hidden' name='elqCookieWrite' value='0'>";
insertBefore(newdiv1, fnfld);


var btn1 = document.getElementsByClassName("submit-button-style")[0]; 
btn1.style.width = "100%";
btn1.style.display = "block";
btn1.style.marginTop = "0";
btn1.style.marginBottom = "0";
btn1.style.marginLeft = "auto";
btn1.style.marginright = "auto";
//btn1.style.backgroundColor = "#DA291C";
btn1.style.backgroundColor = "#1B77AF";
btn1.style.color = "#FFFFFF";
btn1.value="Access All Demos";
document.getElementById('formElement7').style.visibility = 'hidden';
document.getElementById('formElement7').style.height = "1px";

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "EmoptIn";
checkbox.value = "";
checkbox.id = "optin";
var linebreak = document.createElement("br");
linebreak.id = "lineb1";
var label = document.createElement('label')
label.htmlFor = "id";
label.id = "lb1";
label.style.width = "90%";
label.style.marginLeft = "25px"; 
label.style.marginBottom = "0px"; 
label.appendChild(document.createTextNode(' Yes, I also agree to receive marketing emails from Avaya.'));
label.setAttribute("for","optin");
var divGDPRtext = document.createElement("div");
divGDPRtext.id="gdprtext";
divGDPRtext.innerHTML = "<div style='color: #313133;width: 95%;margin-left: 5px;margin-bottom: 30px;margin-top: 15px;font-size:12px;line-height:20px;' class='formStatement'>By submitting this form, I agree to my information being processed in the Avaya database for the above mentioned purpose. See our <a href='https://www.avaya.com/en/privacy/website/' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color:#1B77AF;'>Privacy Statement</a> for more details, or manage your <a href='https://news.avaya.com/global-subscription' class='formStatLink' target='_blank' style='text-decoration:underline;font-size: 12px;border-bottom: 0px solid;color: #1B77AF;'>Email Preferences</a> at any time.</div>";
document.getElementById('formElement6').style.marginTop = "20px";
var container=document.getElementById('formElement6')
container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(divGDPRtext);
document.getElementById("optin").style.marginTop = "5px";
document.getElementById("optin").style.width = "20px"; 
document.getElementById("optin").style.float = "left"; 
document.getElementById("lb1").style.fontWeight = "normal";
document.getElementById("lb1").style.color = "#313133"; 
document.getElementById("lb1").style.fontSize = "12px"; 
var checkbox = document.querySelector("input[name=EmoptIn]");
checkbox.addEventListener( 'change', function() {checkOptin();});
document.getElementById("optin").setAttribute("aria-label", "Yes, I also agree to receive marketing emails from Avaya.");

/*document.getElementById("form3600").setAttribute("aria-label", "One easy sign-up gives you access to all the demos.");
document.getElementsByName("first_name")[0].setAttribute("aria-label", "First Name");
document.getElementsByName("last_name")[0].setAttribute("aria-label", "Last Name");
document.getElementsByName("email")[0].setAttribute("aria-label", "Business Email");
document.getElementsByName("country")[0].setAttribute("aria-label", "Country");*/

document.getElementsByName('first_name')[0].setAttribute("placeholder"," ");//add empty placeholder for all visible fields
document.getElementsByName('last_name')[0].setAttribute("placeholder"," ");
document.getElementsByName('email')[0].setAttribute("placeholder"," ");
document.getElementsByName('country')[0].setAttribute("placeholder"," ");
//document.getElementsByName('company_name')[0].setAttribute("placeholder"," ");

document.getElementsByName("lastReferralPageURL")[0].value = document.referrer;//this assigns refferer value to ref variable
//document.getElementsByName("content_url")[0].value = window.location;

document.getElementsByName("buying_cycle")[0].value="Research";
if(getUrlVar('CTA') =="22CCSGL-CUSREV-DMO")
{
//document.getElementsByName("cta_code")[0].value = "22CCSGL-CUSREV-DMO";
document.getElementsByName("buying_cycle")[0].value="Evaluation";
}
document.getElementsByName("area_of_interest")[0].value="CCaaS";
document.getElementsByName("rPProductFamily1")[0].value="OneCloud CCaaS Public";
document.getElementsByName("content_vertical")[0].value="General Business";
document.getElementsByName("content_persona")[0].value="All";
document.getElementsByName('content_title')[0].value=document.title;
document.getElementsByName("comments")[0].value="Title= "+document.getElementsByName('content_title')[0].value + "; URL= "+document.getElementsByName('content_url')[0].value + "; Referral Page URL= "+document.getElementsByName('lastReferralPageURL')[0].value;


var alink1 = document.getElementsByClassName("formStatLink")[0];
var alink2 = document.getElementsByClassName("formStatLink")[1];
  alink1.addEventListener("mouseover", function() {
    alink1.style.color = "#004E6C";
  });
  alink1.addEventListener("mouseout", function() {
    alink1.style.color = "#1B77AF";
  });
    alink2.addEventListener("mouseover", function() {
    alink2.style.color = "#004E6C";
  });
  alink2.addEventListener("mouseout", function() {
    alink2.style.color = "#1B77AF";
  });
  
  
var Countrysel;
Countrysel= document.getElementsByName("country")[0];
Countrysel.addEventListener('change', detect_ccode);//Code to implement on change on country select field

function detect_ccode(){
		var strUser=document.getElementsByName("country")[0].value;
		if (strUser== "United States" ){
				document.getElementsByName("country_iso")[0].value=("USA");
		} else if (strUser== "Canada" ){
				 document.getElementsByName("country_iso")[0].value=("CAN");
		} else if (strUser== "Afghanistan" ){
				 document.getElementsByName("country_iso")[0].value=("AFG");
		} else if (strUser== "Albania" ){
				 document.getElementsByName("country_iso")[0].value=("ALB");
		} else if (strUser== "Algeria" ){
				 document.getElementsByName("country_iso")[0].value=("DZA");
		} else if (strUser== "American Samoa" ){
				 document.getElementsByName("country_iso")[0].value=("ASM");
		} else if (strUser== "Andorra" ){
				 document.getElementsByName("country_iso")[0].value=("AND");
		} else if (strUser== "Angola" ){
				 document.getElementsByName("country_iso")[0].value=("AGO");
		} else if (strUser== "Anguilla" ){
				 document.getElementsByName("country_iso")[0].value=("AIA");
		} else if (strUser== "Antigua and Barbuda"){
				 document.getElementsByName("country_iso")[0].value=("ATG");
		} else if (strUser== "Argentina" ){
				 document.getElementsByName("country_iso")[0].value=("ARG");
		} else if (strUser== "Armenia" ){
				 document.getElementsByName("country_iso")[0].value=("ARM");
		} else if (strUser== "Aruba" ){
				 document.getElementsByName("country_iso")[0].value=("ABW");
		} else if (strUser== "Australia" ){
				 document.getElementsByName("country_iso")[0].value=("AUS");
		} else if (strUser== "Austria" ){
				 document.getElementsByName("country_iso")[0].value=("AUT");
		} else if (strUser== "Azerbaijan" ){
				 document.getElementsByName("country_iso")[0].value=("AZE");
		} else if (strUser== "Bahamas" ){
				 document.getElementsByName("country_iso")[0].value=("BHS");
		} else if (strUser== "Bahrain" ){
				 document.getElementsByName("country_iso")[0].value=("BHR");
		} else if (strUser== "Bangladesh" ){
				 document.getElementsByName("country_iso")[0].value=("BGD");
		} else if (strUser== "Barbados" ){
				 document.getElementsByName("country_iso")[0].value=("BRB");
		} else if (strUser== "Belarus" ){
				 document.getElementsByName("country_iso")[0].value=("BLR");
		} else if (strUser== "Belgium" ){
				 document.getElementsByName("country_iso")[0].value=("BEL");
		} else if (strUser== "Belize" ){
				 document.getElementsByName("country_iso")[0].value=("BLZ");
		} else if (strUser== "Benin" ){
				 document.getElementsByName("country_iso")[0].value=("BEN");
		} else if (strUser== "Bermuda" ){
				 document.getElementsByName("country_iso")[0].value=("BMU");
		} else if (strUser== "Bhutan" ){
				 document.getElementsByName("country_iso")[0].value=("BTN");
		} else if (strUser== "Bolivia" ){
				 document.getElementsByName("country_iso")[0].value=("BOL");
		} else if (strUser== "Bosnia and Herzegovina" ){
				 document.getElementsByName("country_iso")[0].value=("BIH");
		} else if (strUser== "Botswana" ){
				 document.getElementsByName("country_iso")[0].value=("BWA");
		} else if (strUser== "Brazil" ){
				document.getElementsByName("country_iso")[0].value=("BRA");
		} else if (strUser== "British Indian Ocean Territory" ){
				 document.getElementsByName("country_iso")[0].value=("IOT");
		} else if (strUser== "Brunei Darussalam" ){
				 document.getElementsByName("country_iso")[0].value=("BRN");
		} else if (strUser== "Bulgaria" ){
				 document.getElementsByName("country_iso")[0].value=("BGR");
		} else if (strUser== "Burkina Faso" ){
				 document.getElementsByName("country_iso")[0].value=("BFA");
		} else if (strUser== "Burundi" ){
				 document.getElementsByName("country_iso")[0].value=("BDI");
		} else if (strUser== "Cambodia" ){
				 document.getElementsByName("country_iso")[0].value=("KHM");
		} else if (strUser== "Cameroon" ){
				 document.getElementsByName("country_iso")[0].value=("CMR");
		} else if (strUser== "Cape Verde" ){
				 document.getElementsByName("country_iso")[0].value=("CPV");
		} else if (strUser== "Cayman Islands" ){
				 document.getElementsByName("country_iso")[0].value=("CYM");
		} else if (strUser== "Central African Republic" ){
				 document.getElementsByName("country_iso")[0].value=("CAF");
		} else if (strUser== "Chad" ){
				 document.getElementsByName("country_iso")[0].value=("TCD");
		} else if (strUser== "Chile" ){
				document.getElementsByName("country_iso")[0].value=("CHL");
		} else if (strUser== "China" ){
				 document.getElementsByName("country_iso")[0].value=("CHN");
		} else if (strUser== "Christmas Island" ){
				 document.getElementsByName("country_iso")[0].value=("CXR");
		} else if (strUser== "Cocos (Keeling) Islands" ){
				 document.getElementsByName("country_iso")[0].value=("CCK");
		} else if (strUser== "Colombia" ){
				 document.getElementsByName("country_iso")[0].value=("COL");
		} else if (strUser== "Comoros" ){
				 document.getElementsByName("country_iso")[0].value=("COM");
		} else if (strUser== "Congo" ){
				 document.getElementsByName("country_iso")[0].value=("COG");
		} else if (strUser== "Congo, The Democratic Republic Of The"){
				 document.getElementsByName("country_iso")[0].value=("COD");
		} else if (strUser== "Cook Islands"){
				 document.getElementsByName("country_iso")[0].value=("COK");
		} else if (strUser== "Costa Rica" ){
				 document.getElementsByName("country_iso")[0].value=("CRI");
		} else if (strUser== "Croatia" ){
				 document.getElementsByName("country_iso")[0].value=("HRV");
		} else if (strUser== "Curaçao" ){
				 document.getElementsByName("country_iso")[0].value=("CUW");
		} else if (strUser== "Cyprus" ){
				 document.getElementsByName("country_iso")[0].value=("CYP");
		} else if (strUser== "Czech Republic" ){
				 document.getElementsByName("country_iso")[0].value=("CZE");
		} else if (strUser== "Denmark" ){
				 document.getElementsByName("country_iso")[0].value=("DNK");
		} else if (strUser== "Djibouti" ){
				 document.getElementsByName("country_iso")[0].value=("DJI");
		} else if (strUser== "Dominica" ){
				 document.getElementsByName("country_iso")[0].value=("DMA");
		} else if (strUser== "Dominican Republic" ){
				 document.getElementsByName("country_iso")[0].value=("DOM");
		} else if (strUser== "East Timor" ){
				 document.getElementsByName("country_iso")[0].value=("TLS");
		} else if (strUser== "Ecuador" ){
				 document.getElementsByName("country_iso")[0].value=("ECU");
		} else if (strUser== "Egypt" ){
				 document.getElementsByName("country_iso")[0].value=("EGY");
		} else if (strUser== "El Salvador" ){
				 document.getElementsByName("country_iso")[0].value=("SLV");
		} else if (strUser== "Equatorial Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("GNQ");
		} else if (strUser== "Eritrea" ){
				 document.getElementsByName("country_iso")[0].value=("ERI");
		} else if (strUser== "Estonia" ){
				 document.getElementsByName("country_iso")[0].value=("EST");
		} else if (strUser== "Ethiopia" ){
				 document.getElementsByName("country_iso")[0].value=("ETH");
		} else if (strUser== "Falkland Islands (Malvinas)" ){
				 document.getElementsByName("country_iso")[0].value=("FLK");
		} else if (strUser== "Faroe Islands" ){
				 document.getElementsByName("country_iso")[0].value=("FRO");
		} else if (strUser== "Fiji" ){
				 document.getElementsByName("country_iso")[0].value=("FJI");
		} else if (strUser== "Finland" ){
				 document.getElementsByName("country_iso")[0].value=("FIN");
		} else if (strUser== "France" ){
				 document.getElementsByName("country_iso")[0].value=("FRA");
		} else if (strUser== "Gabon" ){
				 document.getElementsByName("country_iso")[0].value=("GAB");
		} else if (strUser== "Gambia" ){
				 document.getElementsByName("country_iso")[0].value=("GMB");
		} else if (strUser== "Georgia" ){
				 document.getElementsByName("country_iso")[0].value=("GEO");
		} else if (strUser== "Germany" ){
				 document.getElementsByName("country_iso")[0].value=("DEU");
		} else if (strUser== "Ghana" ){
				 document.getElementsByName("country_iso")[0].value=("GHA");
		} else if (strUser== "Gibraltar" ){
				 document.getElementsByName("country_iso")[0].value=("GIB");
		} else if (strUser== "Greece" ){
				 document.getElementsByName("country_iso")[0].value=("GRC");
		} else if (strUser== "Greenland" ){
				 document.getElementsByName("country_iso")[0].value=("GRL");
		} else if (strUser== "Grenada" ){
				 document.getElementsByName("country_iso")[0].value=("GRD");
		} else if (strUser== "Guam" ){
				 document.getElementsByName("country_iso")[0].value=("GUM");
		} else if (strUser== "Guatemala" ){
				 document.getElementsByName("country_iso")[0].value=("GTM");
		} else if (strUser== "Guernsey" ){
				 document.getElementsByName("country_iso")[0].value=("GGY");
		} else if (strUser== "Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("GIN");
		} else if (strUser== "Guinea-Bissau" ){
				 document.getElementsByName("country_iso")[0].value=("GNB");
		} else if (strUser== "Guyana" ){
				 document.getElementsByName("country_iso")[0].value=("GUY");
		} else if (strUser== "Haiti" ){
				 document.getElementsByName("country_iso")[0].value=("HTI");
		} else if (strUser== "Vatican City State" ){
				 document.getElementsByName("country_iso")[0].value=("VAT");
		} else if (strUser== "Honduras" ){
				 document.getElementsByName("country_iso")[0].value=("HND");
		} else if (strUser== "Hong Kong" ){
				 document.getElementsByName("country_iso")[0].value=("HKG");
		} else if (strUser== "Hungary" ){
				 document.getElementsByName("country_iso")[0].value=("HUN");
		} else if (strUser== "Iceland" ){
				 document.getElementsByName("country_iso")[0].value=("ISL");
		}  else if (strUser== "India" ){
				 document.getElementsByName("country_iso")[0].value=("IND");
		} else if (strUser== "Indonesia" ){
				 document.getElementsByName("country_iso")[0].value=("IDN");
		} else if (strUser== "Ireland" ){
				 document.getElementsByName("country_iso")[0].value=("IRL");
		} else if (strUser== "Isle of Man" ){
				 document.getElementsByName("country_iso")[0].value=("IMN");
		} else if (strUser== "Israel" ){
				 document.getElementsByName("country_iso")[0].value=("ISR");
		} else if (strUser== "Italy" ){
				 document.getElementsByName("country_iso")[0].value=("ITA");
		} else if (strUser== "Ivory Coast (Côte d'Ivoire)" ){
				 document.getElementsByName("country_iso")[0].value=("CIV");
		} else if (strUser== "Jamaica" ){
				 document.getElementsByName("country_iso")[0].value=("JAM");
		} else if (strUser== "Japan" ){
				 document.getElementsByName("country_iso")[0].value=("JPN");
		} else if (strUser== "Jersey" ){
				 document.getElementsByName("country_iso")[0].value=("JEY");
		} else if (strUser== "Jordan" ){
				 document.getElementsByName("country_iso")[0].value=("JOR");
		} else if (strUser== "Kazakhstan" ){
				 document.getElementsByName("country_iso")[0].value=("KAZ");
		} else if (strUser== "Kenya" ){
				 document.getElementsByName("country_iso")[0].value=("KEN");
		} else if (strUser== "Kiribati" ){
				 document.getElementsByName("country_iso")[0].value=("KIR");
		} else if (strUser== "Korea, Democratic People's Republic of" ){
				 document.getElementsByName("country_iso")[0].value=("PRK");
		} else if (strUser== "Korea Republic of" ){
				 document.getElementsByName("country_iso")[0].value=("KOR");
		} else if (strUser== "Kuwait" ){
				 document.getElementsByName("country_iso")[0].value=("KWT");
		} else if (strUser== "Kyrgyzstan" ){
				 document.getElementsByName("country_iso")[0].value=("KGZ");
		} else if (strUser== "Lao People's Democratic Republic" ){
				 document.getElementsByName("country_iso")[0].value=("LAO");
		} else if (strUser== "Latvia" ){
				 document.getElementsByName("country_iso")[0].value=("LVA");
		} else if (strUser== "Lebanon" ){
				 document.getElementsByName("country_iso")[0].value=("LBN");
		} else if (strUser== "Lesotho" ){
				 document.getElementsByName("country_iso")[0].value=("LSO");
		} else if (strUser== "Liberia" ){
				 document.getElementsByName("country_iso")[0].value=("LBR");
		} else if (strUser== "Libya" ){
				 document.getElementsByName("country_iso")[0].value=("LBY");
		} else if (strUser== "Liechtenstein" ){
				 document.getElementsByName("country_iso")[0].value=("LIE");
		} else if (strUser== "Lithuania" ){
				 document.getElementsByName("country_iso")[0].value=("LTU");
		} else if (strUser== "Luxembourg" ){
				 document.getElementsByName("country_iso")[0].value=("LUX");
		} else if (strUser== "Macau" ){
				 document.getElementsByName("country_iso")[0].value=("MAC");
		} else if (strUser== "Macedonia" ){
				 document.getElementsByName("country_iso")[0].value=("MKD");
		} else if (strUser== "Madagascar" ){
				 document.getElementsByName("country_iso")[0].value=("MDG");
		} else if (strUser== "Malawi" ){
				 document.getElementsByName("country_iso")[0].value=("MWI");
		} else if (strUser== "Malaysia" ){
				 document.getElementsByName("country_iso")[0].value=("MYS");
		} else if (strUser== "Maldives" ){
				 document.getElementsByName("country_iso")[0].value=("MDV");
		} else if (strUser== "Mali" ){
				 document.getElementsByName("country_iso")[0].value=("MLI");
		} else if (strUser== "Malta" ){
				 document.getElementsByName("country_iso")[0].value=("MLT");
		} else if (strUser== "Marshall Islands" ){
				 document.getElementsByName("country_iso")[0].value=("MHL");

		} else if (strUser== "Martinique" ){
				 document.getElementsByName("country_iso")[0].value=("MTQ");
		} else if (strUser== "Mauritania" ){
				 document.getElementsByName("country_iso")[0].value=("MRT");
		} else if (strUser== "Mauritius" ){
				 document.getElementsByName("country_iso")[0].value=("MUS");
		} else if (strUser== "Mexico" ){
				 document.getElementsByName("country_iso")[0].value=("MEX");
		} else if (strUser== "Micronesia, Federated States of" ){
				 document.getElementsByName("country_iso")[0].value=("FSM");
		} else if (strUser== "Moldova" ){
				 document.getElementsByName("country_iso")[0].value=("MDA");
		} else if (strUser== "Monaco" ){
				 document.getElementsByName("country_iso")[0].value=("MCO");
		} else if (strUser== "Mongolia" ){
				 document.getElementsByName("country_iso")[0].value=("MNG");
		} else if (strUser== "Montenegro" ){
				 document.getElementsByName("country_iso")[0].value=("MNE");
		} else if (strUser== "Montserrat" ){
				 document.getElementsByName("country_iso")[0].value=("MSR");
		} else if (strUser== "Morocco" ){
				 document.getElementsByName("country_iso")[0].value=("MAR");
		} else if (strUser== "Mozambique" ){
				 document.getElementsByName("country_iso")[0].value=("MOZ");
		} else if (strUser== "Myanmar" ){
				 document.getElementsByName("country_iso")[0].value=("MMR");
		} else if (strUser== "Namibia" ){
				 document.getElementsByName("country_iso")[0].value=("NAM");
		} else if (strUser== "Nauru" ){
				 document.getElementsByName("country_iso")[0].value=("NRU");
		} else if (strUser== "The Federal Democratic Republic of Nepal" ){
				 document.getElementsByName("country_iso")[0].value=("NPL");
		} else if (strUser== "Netherlands" ){
				 document.getElementsByName("country_iso")[0].value=("NLD");
		} else if (strUser== "New Caledonia" ){
				 document.getElementsByName("country_iso")[0].value=("NCL");
		} else if (strUser== "New Zealand" ){
				 document.getElementsByName("country_iso")[0].value=("NZL");
		} else if (strUser== "Nicaragua" ){
				 document.getElementsByName("country_iso")[0].value=("NIC");
		} else if (strUser== "Niger" ){
				 document.getElementsByName("country_iso")[0].value=("NER");
		} else if (strUser== "Nigeria" ){
				 document.getElementsByName("country_iso")[0].value=("NGA");
		} else if (strUser== "Niue" ){
				 document.getElementsByName("country_iso")[0].value=("NIU");
		} else if (strUser== "Norfolk Island" ){
				 document.getElementsByName("country_iso")[0].value=("NFK");
		} else if (strUser== "Norway" ){
				 document.getElementsByName("country_iso")[0].value=("NOR");
		} else if (strUser== "Oman" ){
				 document.getElementsByName("country_iso")[0].value=("OMN");
		} else if (strUser== "Pakistan" ){
				 document.getElementsByName("country_iso")[0].value=("PAK");
		} else if (strUser== "Palau" ){
				 document.getElementsByName("country_iso")[0].value=("PLW");
		} else if (strUser== "Palestinian Territory" ){
				 document.getElementsByName("country_iso")[0].value=("PSE");
		} else if (strUser== "Panama" ){
				 document.getElementsByName("country_iso")[0].value=("PAN");
		} else if (strUser== "Papua New Guinea" ){
				 document.getElementsByName("country_iso")[0].value=("PNG");
		} else if (strUser== "Paraguay" ){
				document.getElementsByName("country_iso")[0].value=("PRY");
		} else if (strUser== "Peru" ){
				document.getElementsByName("country_iso")[0].value=("PER");
		} else if (strUser== "Philippines" ){
				document.getElementsByName("country_iso")[0].value=("PHL");
		} else if (strUser== "Pitcairn" ){
				 document.getElementsByName("country_iso")[0].value=("PCN");
		} else if (strUser== "Poland" ){
				 document.getElementsByName("country_iso")[0].value=("POL");
		} else if (strUser== "Portugal" ){
				 document.getElementsByName("country_iso")[0].value=("PRT");
		} else if (strUser== "Puerto Rico" ){
				 document.getElementsByName("country_iso")[0].value=("PRI");
		} else if (strUser== "Qatar" ){
				 document.getElementsByName("country_iso")[0].value=("QAT");
		} else if (strUser== "Reunion" ){
				 document.getElementsByName("country_iso")[0].value=("REU");
		} else if (strUser== "Romania" ){
				 document.getElementsByName("country_iso")[0].value=("ROM");
		} else if (strUser== "Russian Federation" ){
				 document.getElementsByName("country_iso")[0].value=("RUS");
		} else if (strUser== "Rwanda" ){
				 document.getElementsByName("country_iso")[0].value=("RWA");
		} else if (strUser== "Saint Helena" ){
				 document.getElementsByName("country_iso")[0].value=("SHN");
		} else if (strUser== "Saint Kitts and Nevis" ){
				 document.getElementsByName("country_iso")[0].value=("KNA");
		} else if (strUser== "Saint Lucia" ){
				 document.getElementsByName("country_iso")[0].value=("LCA");
		} else if (strUser== "Saint Vincent And The Grenadines" ){
				 document.getElementsByName("country_iso")[0].value=("VCT");
		} else if (strUser== "Samoa" ){
				 document.getElementsByName("country_iso")[0].value=("WSM");
		} else if (strUser== "San Marino" ){
				 document.getElementsByName("country_iso")[0].value=("SMR");
		} else if (strUser== "Sao Tome And Principe" ){
				 document.getElementsByName("country_iso")[0].value=("STP");
		} else if (strUser== "Saudi Arabia" ){
				 document.getElementsByName("country_iso")[0].value=("SAU");
		} else if (strUser== "Senegal" ){
				 document.getElementsByName("country_iso")[0].value=("SEN");
		} else if (strUser== "Serbia" ){
				 document.getElementsByName("country_iso")[0].value=("SRB");
		} else if (strUser== "Seychelles" ){
				 document.getElementsByName("country_iso")[0].value=("SYC");
		} else if (strUser== "Sierra Leone" ){
				 document.getElementsByName("country_iso")[0].value=("SLE");
		} else if (strUser== "Singapore" ){
				 document.getElementsByName("country_iso")[0].value=("SGP");
		} else if (strUser== "Slovakia" ){
				 document.getElementsByName("country_iso")[0].value=("SVK");
		} else if (strUser== "Slovenia" ){
				 document.getElementsByName("country_iso")[0].value=("SVN");
		} else if (strUser== "Solomon Islands" ){
				 document.getElementsByName("country_iso")[0].value=("SLB");
		} else if (strUser== "Somalia" ){
				 document.getElementsByName("country_iso")[0].value=("SOM");
		} else if (strUser== "South Africa" ){
				 document.getElementsByName("country_iso")[0].value=("ZAF");
		} else if (strUser== "South Georgia and the South Sandwich Islands" ){
				 document.getElementsByName("country_iso")[0].value=("SGS");
		} else if (strUser== "Spain" ){
				 document.getElementsByName("country_iso")[0].value=("ESP");
		} else if (strUser== "Sri Lanka" ){
				 document.getElementsByName("country_iso")[0].value=("LKA");
		} else if (strUser== "Sudan" ){
				 document.getElementsByName("country_iso")[0].value=("SDN");
		} else if (strUser== "Suriname" ){
				 document.getElementsByName("country_iso")[0].value=("SUR");
		} else if (strUser== "Swaziland" ){
				 document.getElementsByName("country_iso")[0].value=("SWZ");
		} else if (strUser== "Sweden" ){
				 document.getElementsByName("country_iso")[0].value=("SWE");
		} else if (strUser== "Switzerland" ){
				 document.getElementsByName("country_iso")[0].value=("CHE");
		} else if (strUser== "Taiwan, ROC" ){
				 document.getElementsByName("country_iso")[0].value=("TWN");
		} else if (strUser== "Tajikistan" ){
				 document.getElementsByName("country_iso")[0].value=("TJK");
		} else if (strUser== "Tanzania, United Republic Of" ){
				 document.getElementsByName("country_iso")[0].value=("TZA");
		} else if (strUser== "Thailand" ){
				 document.getElementsByName("country_iso")[0].value=("THA");
		} else if (strUser== "Timor-Leste" ){
				 document.getElementsByName("country_iso")[0].value=("TLS");
		} else if (strUser== "Togo" ){
				 document.getElementsByName("country_iso")[0].value=("TGO");
		} else if (strUser== "Tokelau" ){
				 document.getElementsByName("country_iso")[0].value=("TKL");
		} else if (strUser== "Tonga" ){
				 document.getElementsByName("country_iso")[0].value=("TON");
		} else if (strUser== "Trinidad and Tobago" ){
				 document.getElementsByName("country_iso")[0].value=("TTO");
		} else if (strUser== "Tunisia" ){
				 document.getElementsByName("country_iso")[0].value=("TUN");
		} else if (strUser== "Turkey" ){
				 document.getElementsByName("country_iso")[0].value=("TUR");
		} else if (strUser== "Turkmenistan" ){
				 document.getElementsByName("country_iso")[0].value=("TKM");
		} else if (strUser== "Turks and Caicos Islands" ){
				 document.getElementsByName("country_iso")[0].value=("TCA");
		} else if (strUser== "Tuvalu" ){
				 document.getElementsByName("country_iso")[0].value=("TUV");
		} else if (strUser== "Uganda" ){
				 document.getElementsByName("country_iso")[0].value=("UGA");
		} else if (strUser== "Ukraine" ){
				 document.getElementsByName("country_iso")[0].value=("UKR");
		} else if (strUser== "United Arab Emirates" ){
				 document.getElementsByName("country_iso")[0].value=("ARE");
		} else if (strUser== "United Kingdom" ){
				 document.getElementsByName("country_iso")[0].value=("GBR");
		} else if (strUser== "US Minor Outlying Islands" ){
				 document.getElementsByName("country_iso")[0].value=("UMI");
		} else if (strUser== "Uruguay" ){
				 document.getElementsByName("country_iso")[0].value=("URY");
		} else if (strUser== "Uzbekistan" ){
				 document.getElementsByName("country_iso")[0].value=("UZB");
		} else if (strUser== "Vanuatu" ){
				 document.getElementsByName("country_iso")[0].value=("VUT");
		} else if (strUser== "Venezuela" ){
				 document.getElementsByName("country_iso")[0].value=("VEN");
		} else if (strUser== "Vietnam" ){
				 document.getElementsByName("country_iso")[0].value=("VNM");
		} else if (strUser== "Virgin Islands, British" ){
				 document.getElementsByName("country_iso")[0].value=("VGB");
		} else if (strUser== "Virgin Islands, U.S." ){
				 document.getElementsByName("country_iso")[0].value=("VIR");
		} else if (strUser== "Western Sahara" ){
				 document.getElementsByName("country_iso")[0].value=("ESH");
		} else if (strUser== "Yugoslavia" ){
				 document.getElementsByName("country_iso")[0].value=("YUG");
		} else if (strUser== "Zambia" ){
				 document.getElementsByName("country_iso")[0].value=("ZMB");
		} else if (strUser== "Zimbabwe" ){
				 document.getElementsByName("country_iso")[0].value=("ZWE");
		} else {
			document.getElementsByName("country_iso")[0].value=("");
		}			  			
}




document.getElementsByName('email')[0].addEventListener("blur", emailOnBlurEvent, true);
var regex = "/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i";
function emailOnBlurEvent(){
	var emailfieldvalue = document.getElementsByName('email')[0].value;
	//var match1 = regex.test(emailfieldvalue);
	if (/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(emailfieldvalue)){
    	emailadd1 = encrypt_cookie(document.getElementsByName('email')[0].value, 5);
		console.log("emailadd1  ===========  "+emailadd1);
	} else {
    	emailadd1 = document.getElementsByName('email')[0].value;
		console.log("emailadd2  ===========  "+emailadd1);
	}
//var emailfieldvalue = $('#fe84445').val(); // To Get Value (can use getElementById)
     
     var splitArray = emailfieldvalue.split('@'); // To Get Array
    if (names1.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe107238").disabled = true;
        document.getElementsByName('email')[0].value = "";
        console.log("public domain email clear");
    } else if (names2.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe107238").disabled = true;
        document.getElementsByName('email')[0].value = "";
        console.log("public domain email clear");
    } else if (names3.indexOf(splitArray[1]) >= 0) {
        alert("Please provide a business email address. We are unable to process requests from public domain email addresses.");
        document.getElementById("fe107238").disabled = true;
        document.getElementsByName('email')[0].value = "";
       console.log("public domain email clear");
    } else {
        //return true;
        document.getElementById("fe107238").disabled = false;
        kickfirecheck();
    }
 
}



/*(function() {
  var nTimer1 = setInterval(function() {
    if (document.getElementsByName('email')[0].value) {
		console.log("email value");
      emailOnBlurEvent();
      clearInterval(nTimer1);
    };
	//console.log("outside == " + Date())
  }, 1000);
})();*/

(function() {
	console.log("window.onload");
	var checktimer = 1;
	var nTimer1 = setInterval(function() {
	if (window.jQuery) {
		checktimer = checktimer+1;
		if (document.getElementsByName('email')[0].value || checktimer == 5) {
			console.log("email value");
		  emailOnBlurEvent();
		  clearInterval(nTimer1);
		};
	}
	console.log("outside == " + Date());
  }, 1000);
})();

handleFormSubmit = (function() { 

    var cached_function = handleFormSubmit;
	// var encryptedEmailAddress = encrypt_cookie(document.getElementsByName('email')[0].value, 25);
	// console.log("encryptedEmailAddress",encryptedEmailAddress);
	
    return function() {
        // your code
		
		if(document.getElementsByName("nb-result")[0]){
			  if(document.getElementsByName("nb-result")[0].value == "catchall"){
					document.getElementsByName("nameAnalyzerStatus1")[0].value = "unverifiable";
			  } else {
					document.getElementsByName("nameAnalyzerStatus1")[0].value =document.getElementsByName("nb-result")[0].value;   
			  }
		   }
		   
		var date = new Date();
		var m = 720*60;
		date.setTime(date.getTime() + (m * 60 * 1000));
		if(document.getElementsByName('first_name')[0].value){
			// setCookie('FName', document.getElementsByName('first_name')[0].value);
			$.cookie('FName',document.getElementsByName('first_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('last_name')[0].value){
			// setCookie('LName', document.getElementsByName('last_name')[0].value);
			$.cookie('LName',document.getElementsByName('last_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('country')[0].value){
			// setCookie('country', document.getElementsByName('country')[0].value);
			$.cookie('country',document.getElementsByName('country')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(emailadd1){
			// setCookie('EmailAddress', emailadd1);
			console.log("emailadd1aa == "+ emailadd1);
			$.cookie('EmailAddress',emailadd1,{expires:date,path:'/',domain:'avaya.com'});
		} else {
			console.log("emailadd1ab == "+ emailadd1);
			// setCookie('EmailAddress', document.getElementsByName('email')[0].value);
			$.cookie('EmailAddress',document.getElementsByName('email')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if (document.getElementsByName('company_name')[0].value){
			// setCookie('company', document.getElementsByName('company_name')[0].value);
			$.cookie('company',document.getElementsByName('company_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if (document.getElementsByName('phone')[0].value){
			// setCookie('phone', document.getElementsByName('phone')[0].value);
			$.cookie('phone',document.getElementsByName('phone')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('optin')[0].value){
			$.cookie('optin',document.getElementsByName('optin')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			 //setCookie('optin', document.getElementsByName('optin')[0].value);
		}
		if(document.getElementsByName('cta_code')[0].value){
			$.cookie('CTA',document.getElementsByName('cta_code')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('CTA', document.getElementsByName('cta_code')[0].value);
		}
		if(document.getElementsByName('tactic_code')[0].value){
			$.cookie('TAC',document.getElementsByName('tactic_code')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('TAC', document.getElementsByName('tactic_code')[0].value);
		}
		if(document.getElementsByName('area_of_interest')[0].value){
			$.cookie('area_of_interest',document.getElementsByName('area_of_interest')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('area_of_interest', document.getElementsByName('area_of_interest')[0].value);
		}
		if(document.getElementsByName('content_vertical')[0].value){
			$.cookie('Vertical',document.getElementsByName('content_vertical')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('Vertical', document.getElementsByName('content_vertical')[0].value);
		}
		if(document.getElementsByName('content_persona')[0].value){
			$.cookie('Persona',document.getElementsByName('content_persona')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('Persona', document.getElementsByName('content_persona')[0].value);
		}
		if(document.getElementsByName('country_iso')[0].value){
			$.cookie('country_iso',document.getElementsByName('country_iso')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('country_iso', document.getElementsByName('country_iso')[0].value);
		}
		if(document.getElementsByName('emailOptinSource1')[0].value){
			$.cookie('emailOptinSource1',document.getElementsByName('emailOptinSource1')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('emailOptinSource1', document.getElementsByName('emailOptinSource1')[0].value);
		}
		if(document.getElementsByName('lastReferralPageURL')[0].value){
			$.cookie('lastReferralPageURL',document.getElementsByName('lastReferralPageURL')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('lastReferralPageURL', document.getElementsByName('lastReferralPageURL')[0].value);
		}
		if(document.getElementsByName('comments')[0].value){
			$.cookie('rpcomments',document.getElementsByName('comments')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('rpcomments', document.getElementsByName('comments')[0].value);
		}
		if(document.getElementsByName('content_title')[0].value){
			$.cookie('title',document.getElementsByName('content_title')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('title', document.getElementsByName('content_title')[0].value);
		}
		if(document.getElementsByName('GACLIENTID')[0].value){
			$.cookie('GACLIENTID',document.getElementsByName('GACLIENTID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GACLIENTID', document.getElementsByName('GACLIENTID')[0].value);
		}
		if(document.getElementsByName('GAUSERID')[0].value){
			$.cookie('GAUSERID',document.getElementsByName('GAUSERID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GAUSERID', document.getElementsByName('GAUSERID')[0].value);
		}
		if(document.getElementsByName('GATRACKID')[0].value){
			$.cookie('GATRACKID',document.getElementsByName('GATRACKID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GATRACKID', document.getElementsByName('GATRACKID')[0].value);
		}
		if(document.getElementsByName('thankyou_url')[0].value){
			$.cookie('thankyou_url',document.getElementsByName('thankyou_url')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('thankyou_url', document.getElementsByName('thankyou_url')[0].value);
		}
		if(document.getElementsByName('PrimarySubmission')[0].value){
			$.cookie('PrimarySubmission',document.getElementsByName('PrimarySubmission')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('PrimarySubmission', document.getElementsByName('PrimarySubmission')[0].value);
		}
		
        var result = cached_function.apply(this, arguments); // use .apply() to call it
		console.log("result",result);
        
		// more of your code
		return result;
		/*var checktimer2 = 0;
		var nTimer2 = setInterval(function() {
		if (window.jQuery) {
			checktimer2 = checktimer2+1;
			if (document.getElementsByName('kickfireVisitorLatitude')[0].value || checktimer2 >= 8) {
				console.log("email value");			  
			  clearInterval(nTimer2);
			  return result;
			};
			}
			console.log("outside == " + Date());
		  }, 1000);		*/
		
    };
})();

var subonclick= document.getElementsByClassName("submit-button-style")[0];
subonclick.addEventListener('click', fireGTM);
var ae = 0;
function fireGTM(){
	//if(ae == 0){
		document.getElementsByName("PrimarySubmission")[0].value="Yes";
	//	ae++;	
	//} else {
	//	document.getElementsByName("PrimarySubmission")[0].value="";
	//}
	console.log("triggered");
	setTimeout(function(){ 
	var validationClass = document.getElementsByClassName('LV_invalid_field');
	if (validationClass.length > 0) {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event':'salesContactFormSubmissionError'
		});
		console.log("salesContactFormSubmissionError");
	} else {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event':'salesContactFormSubmission'
		});
		console.log("salesContactFormSubmission");
	}
	 }, 1000);
}

var x = window.matchMedia("(max-width: 768px)");
//document.getElementById("formElement3").style.display = "none";
//document.getElementById("formElement4").style.display = "none";
var jack = document.getElementById("formElement3").parentElement.nodeName; 
console.log("jack == "+jack);
 var re = /\S+@\S+\.\S+/;

 if (document.cookie.indexOf('EmailAddress=') > 0 && re.test(getCookie("EmailAddress"))) {
	document.getElementsByName('email')[0].value = getCookie("EmailAddress");
	//emailOnBlurEvent();
} else if (document.cookie.indexOf('EmailAddress=') > 0 && !re.test(getCookie("EmailAddress"))) {	
	document.getElementsByName('email')[0].value = decrypt_cookie(getCookie("EmailAddress"), 5);
	//document.getElementsByName('email')[0].value = getCookie("EmailAddress");
	//emailOnBlurEvent();
}

function isOdd(num) { return num % 2;}
var imgsrc = document.getElementsByClassName('container-fluid')[0].getElementsByClassName('row');

function myFunction(x) {
	  if (x.matches) { // If media query matches
	  		document.getElementsByClassName('av-form')[0].style.marginLeft="0px";
			for(var i = 0; i < imgsrc.length - 9; i ++) {
			var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
			//var imgsrc3 = parseInt(imgsrc2);
			//var imgsrc3 = new String(imgsrc2);
			var imgsrc3 = Object.entries(imgsrc2).toString();
			//var imgsrc4 = Object.entries("1").toString();
			//console.log("imgsrc3 ==  "+imgsrc3);
			//console.log("imgsrc4 ==  "+imgsrc4);
			//if (typeof imgsrc2 === 'object' && imgsrc2 !== null){
				
			if (imgsrc2.length > 0){
					if (isOdd(i)){
						imgsrc[i].style.float = "right"; 
						imgsrc[i].style.width = "100%"; 
						imgsrc[i].style.minHeight = "105px";
					} else {
						imgsrc[i].style.float = "left"; 
						imgsrc[i].style.width = "100%"; 
						imgsrc[i].style.minHeight = "105px";
					}
				//console.log("imgsrc2 ==  "+imgsrc2.length);
					if (imgsrc[i].querySelector("#formElement3") != null || imgsrc[i].querySelector("#formElement4") != null){
						imgsrc[i].style.display = "none";
					}
					console.log("i ==  "+i);
			}
		}
} else {
		for(var i = 0; i < imgsrc.length - 9; i ++) {
			var imgsrc2 = document.getElementsByClassName('row')[i].getElementsByClassName('grid-layout-col');
			//var imgsrc3 = parseInt(imgsrc2);
			//var imgsrc3 = new String(imgsrc2);
			var imgsrc3 = Object.entries(imgsrc2).toString();
			//var imgsrc4 = Object.entries("1").toString();
			//console.log("imgsrc3 ==  "+imgsrc3);
			//console.log("imgsrc4 ==  "+imgsrc4);
			//if (typeof imgsrc2 === 'object' && imgsrc2 !== null){
				
			if (imgsrc2.length > 0){
				if (isOdd(i)){
					imgsrc[i].style.float = "right"; 
					imgsrc[i].style.width = "48%"; 
					imgsrc[i].style.minHeight = "105px";
				} else {
					imgsrc[i].style.float = "left"; 
					imgsrc[i].style.width = "48%"; 
					imgsrc[i].style.minHeight = "105px";
				}
			//console.log("imgsrc2 ==  "+imgsrc2.length);
			if (imgsrc[i].querySelector("#formElement3") != null || imgsrc[i].querySelector("#formElement4") != null){
				imgsrc[i].style.display = "none";
			}
			console.log("i ==  "+i);
			}
		}
		for(var i = imgsrc.length - 9; i < imgsrc.length; i ++) {
			imgsrc[i].style.width = "100%";
			imgsrc[i].style.clear = "both";
		}
	}
}
window.onresize = function() {
	myFunction(x);	
} 

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

fe107230.add(Validate.Presence, {failureMessage:"This field is required"});
fe107231.add(Validate.Presence, {failureMessage:"This field is required"});
fe107232.add(Validate.Presence, {failureMessage:"This field is required"});
fe107232.add(Validate.Format, {pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "A valid email address is required"});
fe107235.add(Validate.Presence, {failureMessage:"This field is required"});

/*public domain block*/


/*hover*/

var css = 'input[type="text"]:hover{ border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:active { border-color: #1B77AF }';
css = css+ '.av-form .elq-form .LV_valid_field { border-color: #1B77AF }';
css = css+ '.LV_valid_field { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ 'input.LV_valid_field:active { border-color: #1B77AF }';
css = css+ 'textarea.LV_valid_field:hover { border-color: #1B77AF }';
css = css+ '.elq-form textarea.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.elq-form input.LV_valid_field { border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form select:hover { border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form textarea:hover{ border-color: #1B77AF !important}';
css = css+ '.av-form .elq-form label{margin-bottom: 5px;}';
css = css+ '.av-form .elq-form input, .av-form .elq-form select, .av-form .elq-form textarea{background-color: #f1f1f3;}';//field background color
css = css+ '.av-form .elq-form input:focus, .av-form .elq-form select:focus, .av-form .elq-form textarea:focus{background-color: #ffffff;}';
css = css+ '.av-form .form-text p {color:#313133}';
css = css+ '.LV_valid_field { border-color: #1B77AF;background-color: #FFFFFF !important}';
css = css+ '.av-form .elq-form label { font-family: "Noto Sans JP";font-size: 12px;line-height: 20px !important;color: #313133;}';
css = css+ '.av-form .grid-layout-col .form-element-layout {padding-bottom: 0px !important;margin-bottom: 15px !important;}';
css = css+ '.av-form .elq-form label{width: 100%;font-family: "Noto Sans JP";}';
css = css+ '.av-form .extBoth{clear:both !important}';


//css = css+ '.av-form .elq-form input:placeholder-shown{background-color: #ffffff;}';
//css = css+ '.av-form .elq-form input:placeholder-shown {background-color: #f1f1f3;}';
css = css+ '#formElement8 .row .submit-button-style { color: #ffffff !important;background-color:transparent !important;position: relative;z-index: 1;margin: 0 !important;font-weight:400;border: 0px solid #1B77AF;}';
css = css+ '#formElement8 .row > div > div {position: relative;overflow: hidden;cursor: pointer;clear: both;border-radius: 5px; background-color:#1B77AF  !important;box-shadow: 3px 2px 20px #4e4c4c59;border: 0px solid #1B77AF;}';
css = css+ '#formElement8 .row > div > div:before {content: close-quote;position: absolute;z-index: 0;width: 0;height: 100%;left: -50%;top: 0;-webkit-transform: skew(50deg);-moz-transform: skew(50deg);-o-transform: skew(50deg);-ms-transform: skew(50deg);transform: skew(50deg);-webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;-webkit-transform-origin: top left;-moz-transform-origin: top left;-o-transform-origin: top left;-ms-transform-origin: top left;transform-origin: top left;transition-duration: 0.6s;}';
css = css+ '#formElement8 .row > div > div:hover::before {width: 150%;background-color: #004E6C;}';



css = css+ '.av-form .elq-form input:-webkit-autofill, .av-form .elq-form input:-webkit-autofill:hover, .av-form .elq-form input:-webkit-autofill:focus, .av-form .elq-form input:-webkit-autofill:active { background-color: #ffffff !important; -webkit-box-shadow: 0 0 0 30px white inset !important;}';

//css = css+ '.av-form .elq-form select:focus{background-color: #ffffff !important}';
//css = css+ '.LV_valid_field:-webkit-autofill, .LV_valid_field:-webkit-autofill:hover, .LV_valid_field:-webkit-autofill:focus { background-color: #ffffff !important; -webkit-box-shadow: 0 0 0 30px white inset !important;}';

//css = css+ '.av-form .elq-form input a:hover{color: #004E6C;}';
//css = css+ '.av-form .elq-form input a{color: #FF0000;}';
//css = css+ '.formStatement .formStatLink:hover{color: #004E6C;}';
//css = css+ '.grid-layout-col .submit-button-style:hover{background-color:#004E6C;}';

var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);



_NBSettings = {
      
      acceptedStatusCodes: [0,1,2,3,4],
	  feedback: false,
	   apiKey: 'public_d3103376c0d9de0acc210ec8c389f284'
      	
};
var script = document.createElement('script');
script.src = "https://cdn.neverbounce.com/widget/dist/NeverBounce.js";
document.body.appendChild(script);

						var emAdd1 = "";
						var ficreated = "";
                        function popFormFieldsKF(){  
						
                          document.getElementsByName("companyPhone1")[0].value = "";
                          //document.getElementsByName("employees_total_range")[0].value = "";
                          //document.getElementsByName("company_name")[0].value = "";
                          document.getElementsByName("industry")[0].value = "";
                          var countryValue =document.getElementsByName("kickfireVisitorCountry")[0].value;
                          console.log("length of country field =="+countryValue.length);
                          if(document.getElementsByName("kickfireVisitorCountry").length>0){
                            console.log("enterfunction1");
                            if(document.getElementsByName("kickfireCompanyPhone")[0].value){
                              console.log("kickfireCompanyPhone == "+document.getElementsByName("kickfireCompanyPhone")[0].value);
                              document.getElementsByName("companyPhone1")[0].value = document.getElementsByName("kickfireCompanyPhone")[0].value;
                            }
                            if(document.getElementsByName("kickfireCompanyName")[0].value){
                              console.log("kickfireCompanyName == "+document.getElementsByName("kickfireCompanyName")[0].value);
                              document.getElementsByName("company_name")[0].value = document.getElementsByName("kickfireCompanyName")[0].value;
						  
                              /*var fe140845 = new LiveValidation('fe140845');
                              fe140845.disable();
							  document.getElementById("formElement3").style.display = "none";*/
                        
                            }/* else {
								if (ficreated != "Yes"){
								ficreated = "Yes";
								document.getElementById("formElement3").style.display = "block";
								
								document.getElementsByName("company")[0].addEventListener("blur", companyonBlur);
								//fe140486.add(Validate.Presence, {failureMessage:"This field is required"});
								var fe140845 = new LiveValidation("fe140845", { validMessage: "", onlyOnBlur: true });
								 fe140845.add(Validate.Presence, { failureMessage: "This field is required" });
								  fe140845.enable();			  				
							}
                            }*/
                            if(document.getElementsByName("kickfireEmployees")[0].value){
                              console.log("kickfireEmployees == "+document.getElementsByName("kickfireEmployees")[0].value);
                              var kfEmpVal = document.getElementsByName("kickfireEmployees")[0].value;
                              if (kfEmpVal == "1 to 10" || kfEmpVal == "10 to 50") {
                                document.getElementsByName("employees_total_range")[0].value = "1 - 49";
                              } else if (kfEmpVal == "50 to 100") {
                                document.getElementsByName("employees_total_range")[0].value = "50-99";
                              } else if (kfEmpVal == "100 to 250" || kfEmpVal == "250 to 500" || kfEmpVal == "500 to 1,000") {
                                document.getElementsByName("employees_total_range")[0].value = "250-999";
                              } else if (kfEmpVal == "1,000 to 2,500") {
                                document.getElementsByName("employees_total_range")[0].value = "1000-1999";
                              } else if (kfEmpVal == "2,500 to 5,000") {
                                document.getElementsByName("employees_total_range")[0].value = "2000-4999";
                              } else if (kfEmpVal == "5,000 to 10,000" || kfEmpVal == "10,000 to 25,000") {
                                document.getElementsByName("employees_total_range")[0].value = "5000-19999";
                              } else if (kfEmpVal == "25,000+") {
                                document.getElementsByName("employees_total_range")[0].value = "20000+";
                              }
                            } 
                            if(document.getElementsByName("kickfireIndustrySIC")[0].value){                              
                              document.getElementsByName("industry")[0].value = document.getElementsByName("kickfireIndustrySIC")[0].value;
							  console.log("kickfireIndustrySIC == "+document.getElementsByName("industry")[0].value);
                            }    
							if (document.getElementsByName("kickfireVisitorRegionShort")[0].value){
										console.log("added value");
										document.getElementsByName("state_province")[0].value = "";
									  	document.getElementsByName("state_province")[0].value = document.getElementsByName("kickfireVisitorRegionShort")[0].value;
							  }
							  if(document.getElementsByName("kickfireVisitorCity")[0].value){                              
                              document.getElementsByName("city")[0].value = document.getElementsByName("kickfireVisitorCity")[0].value;
							  console.log("kickfireVisitorCity == "+document.getElementsByName("city")[0].value);
                            } 
                          }             
                        }


var runc = 0;
function popFormFieldsKF1(){
if(document.getElementsByName("email").length > 0){
  console.log("email field");
	var emailValue = document.getElementsByName('email')[0].value;
} else if(document.getElementsByName("emailAddress").length > 0){
  console.log("emailaddress field");
	var emailValue = document.getElementsByName('emailAddress')[0].value;
}
  console.log("cleared if");
  var emailDomain = emailValue.substring(emailValue.indexOf('@') + 1);
    console.log("step1");
    console.log("runc == "+runc);

    var CheckTimer1 = 1;
    console.log("step2");
	/*if(emailDomain == 'avaya.com' || emailDomain == 'sw-at.com' || emailDomain == 'portent.com') {
        document.getElementById("companyField").style.display = "block";
       var companyName = new LiveValidation("companyName", {
           validMessage: "",
           onlyOnBlur: true
        });
        companyName.add(Validate.Presence, {
            failureMessage: "This field is required"
         }); 
      companyName.enable();
    } else {*/
    var nCheckTimer1 = setInterval(function() {
      CheckTimer1 = CheckTimer1+1;
      console.log("CheckTimer1 == "+CheckTimer1);
      if(runc==0 || CheckTimer1>3){
          var chVCountry = document.getElementsByName("kickfireVisitorCountry")[0].value;
          console.log("chVCountry == " + chVCountry);
          console.log("step3");

          console.log("step4");
          if (chVCountry || CheckTimer1 == 10) {
              console.log("fCF");
              if (chVCountry){
                  popFormFieldsKF();   
              }
              clearInterval(nCheckTimer1);
          };	
          console.log("outside1 == " + Date());
        }
  	}, 1000);	
  runc = runc + 1;
   // }
}


/*Kickfire code open*/
function kickfirecheck(){

 var emailFieldKF = document.getElementsByName('email')[0].value;
  console.log(emailFieldKF);
        //const address3 = document.getElementsByName("address3")[0].value;
       $(function() {
                var $kickfireFormEmailAddress = $('[name="email"]');
                console.log($kickfireFormEmailAddress.value);
                var $kickfireFormCompany =  $('[name="company"]');

                var $kickfireCompanyName = $('[name="kickfireCompanyName"]');
                var $kickfireCompanyTradeName = $('[name="kickfireCompanyTradeName"]');
                var $kickfireCompanyWebsite = $('[name="kickfireCompanyWebsite"]');
                var $kickfireCompanyStreet = $('[name="kickfireCompanyStreet"]');
                var $kickfireCompanyCity = $('[name="kickfireCompanyCity"]');
                var $kickfireCompanyRegion = $('[name="kickfireCompanyRegion"]');
                var $kickfireCompanyCountry = $('[name="kickfireCompanyCountry"]');
                var $kickfireCompanyPostal = $('[name="kickfireCompanyPostal"]');
                var $kickfireCompanyPhone = $('[name="kickfireCompanyPhone"]');
                var $kickfireEmployees = $('[name="kickfireEmployees"]');
                var $kickfireRevenue = $('[name="kickfireRevenue"]');
                var $kickfireIndustrySIC = $('[name="kickfireIndustrySIC"]');
                var $kickfireIndustryNAICS = $('[name="kickfireIndustryNAICS"]');

                var $kickfireVisitorCity = $('[name="kickfireVisitorCity"]');
                var $kickfireVisitorRegionShort = $('[name="kickfireVisitorRegionShort"]');
                var $kickfireVisitorRegion = $('[name="kickfireVisitorRegion"]');
                var $kickfireVisitorCountryShort = $('[name="kickfireVisitorCountryShort"]');
                var $kickfireVisitorCountry = $('[name="kickfireVisitorCountry"]');
                var $kickfireVisitorLatitude = $('[name="kickfireVisitorLatitude"]');
                var $kickfireVisitorLongitude = $('[name="kickfireVisitorLongitude"]');


                var kfkey = '8b117c14cf29b01b';
                var kfvlocKey = '92c76fcs094596b6';
                if( emailFieldKF != "")                {
                    var emailDomain = emailFieldKF.substring(emailFieldKF.indexOf('@') + 1);
                    if(emailDomain != 'avaya1a.com') {
                        if(emailDomain != 'sw-at1a.com') {
                            console.log(emailDomain + ": success");
                            kfprocessAPI(kfkey, kfvlocKey);
                            console.log("kfprocessAPI Runs");
                               
                            setTimeout(function() { 
                                var kickFireValues = "Company { Name: " + document.getElementsByName("kickfireCompanyTradeName")[0].value + "; Website: "+ document.getElementsByName("kickfireCompanyWebsite")[0].value + "; Country: "+ document.getElementsByName("kickfireCompanyCountry")[0].value + "; Region: "+ document.getElementsByName("kickfireCompanyRegion")[0].value + "}, Visitor { Country: " + document.getElementsByName("kickfireVisitorCountry")[0].value + "; Region: " + document.getElementsByName("kickfireVisitorRegion")[0].value + "; City: " + document.getElementsByName("kickfireVisitorCity")[0].value +"}";
                                        console.log(kickFireValues);
										popFormFieldsKF1();
                                    }, 3000);
                                      
                        } else {
                           
                            console.log(emailDomain);
                         
                        }
                    } else {
                       
                        console.log(emailDomain);
                     
                    }                 // <=== FOR CUSTOMER

                }


                //==================== kfprocessAPI  ====================
                function kfprocessAPI(f,r,l){var g=$kickfireFormEmailAddress.val().split("@").slice(1),b="",m="",h="",n="//api.kickfire.com/v3/company:(all)?website="+g+"&key="+f;$kickfireFormCompany.val("");$.getJSON("//api.kickfire.com/gip",function(d){function p(){$.getJSON(n,function(a){"success"===a.status&&0===a.data["0"].isISP&&($kickfireFormCompany.val(a.data[0].companyName),e(a))})}function e(a){0<$kickfireCompanyName.length&&$kickfireCompanyName.val(a.data[0].companyName);0<$kickfireCompanyTradeName.length&&$kickfireCompanyTradeName.val(a.data[0].tradeName);0<$kickfireCompanyWebsite.length&&$kickfireCompanyWebsite.val(a.data[0].website);0<$kickfireCompanyStreet.length&&$kickfireCompanyStreet.val(a.data[0].street);0<$kickfireCompanyCity.length&&$kickfireCompanyCity.val(a.data[0].city);0<$kickfireCompanyRegion.length&&$kickfireCompanyRegion.val(a.data[0].region);0<$kickfireCompanyCountry.length&&$kickfireCompanyCountry.val(a.data[0].country);0<$kickfireCompanyPostal.length&&$kickfireCompanyPostal.val(a.data[0].postal);0<$kickfireCompanyPhone.length&&$kickfireCompanyPhone.val(a.data[0].phone);0<$kickfireEmployees.length&&$kickfireEmployees.val(a.data[0].employees);
                0<$kickfireRevenue.length&&$kickfireRevenue.val(a.data[0].revenue);0<$kickfireIndustrySIC.length&&$kickfireIndustrySIC.val(a.data[0].sicDesc);0<$kickfireIndustryNAICS.length&&$kickfireIndustryNAICS.val(a.data[0].naicsDesc)}function k(a){0<$kickfireVisitorCity.length&&$kickfireVisitorCity.val(a.data[0].visitorCity);0<$kickfireVisitorRegionShort.length&&$kickfireVisitorRegionShort.val(a.data[0].visitorRegionShort);0<$kickfireVisitorRegion.length&&$kickfireVisitorRegion.val(a.data[0].visitorRegion);
                0<$kickfireVisitorCountryShort.length&&$kickfireVisitorCountryShort.val(a.data[0].visitorCountryShort);0<$kickfireVisitorCountry.length&&$kickfireVisitorCountry.val(a.data[0].visitorCountry);0<$kickfireVisitorLatitude.length&&$kickfireVisitorLatitude.val(a.data[0].visitorLatitude);0<$kickfireVisitorLongitude.length&&$kickfireVisitorLongitude.val(a.data[0].visitorLongitude)}function q(a,c,b){$.getJSON("//forms.visistat.com/kfwf.php?&e="+a,function(a){a=a.iswifi;0===c&&"1"!==a&&($kickfireFormCompany.val(b.data[0].name),
                e(b));k(b)})}"undefined"!==typeof l&&(d=l);var t="//api.kickfire.com/v3/company:(all)?ip="+d+"&key="+f+"&vlocKey="+r;d?$.getJSON(t,function(a){"success"===a.status?(b=a.data[0].website,h=a.data["0"].isISP,$.getJSON("//forms.visistat.com/kfc.php?ip="+d+"&e="+g+"&key="+f,function(){}),g==b?($kickfireFormCompany.val(a.data[0].name),e(a),k(a)):$.getJSON(n,function(c){"success"===c.status?(m=c.data["0"].isISP,0===m?($kickfireFormCompany.val(c.data[0].name),e(c),k(a)):q(b,h,a)):q(b,h,a)})):p()}):p()})};
                    //==================== kfprocessAPI  //====================
            });
}


//GA Script
document.getElementById('form3600').addEventListener(
 'submit', function(event) {
 ga(function() {
 var tracker = ga.getAll()[0];
 var clientId = tracker.get('clientId');
 document.getElementById('GACLIENTID').value = clientId;
 });
 });

document.getElementsByClassName("submit-button-style")[0].addEventListener("click", function(event){
setTimeout(function(){ 
var validationClass = document.getElementsByClassName('LV_invalid_field');
console.log("validationClass.length == "+validationClass.length);
	if (validationClass.length == 0) {
  event.preventDefault();
  
  var date = new Date();
		var m = 720*60;
		date.setTime(date.getTime() + (m * 60 * 1000));
		if(document.getElementsByName('first_name')[0].value){
			// setCookie('FName', document.getElementsByName('first_name')[0].value);
			$.cookie('FName',document.getElementsByName('first_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('last_name')[0].value){
			// setCookie('LName', document.getElementsByName('last_name')[0].value);
			$.cookie('LName',document.getElementsByName('last_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('country')[0].value){
			// setCookie('country', document.getElementsByName('country')[0].value);
			$.cookie('country',document.getElementsByName('country')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(emailadd1){
			// setCookie('EmailAddress', emailadd1);
			console.log("emailadd1aa == "+ emailadd1);
			$.cookie('EmailAddress',emailadd1,{expires:date,path:'/',domain:'avaya.com'});
		} else {
			console.log("emailadd1ab == "+ emailadd1);
			// setCookie('EmailAddress', document.getElementsByName('email')[0].value);
			$.cookie('EmailAddress',document.getElementsByName('email')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if (document.getElementsByName('company_name')[0].value){
			// setCookie('company', document.getElementsByName('company_name')[0].value);
			$.cookie('company',document.getElementsByName('company_name')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if (document.getElementsByName('phone')[0].value){
			// setCookie('phone', document.getElementsByName('phone')[0].value);
			$.cookie('phone',document.getElementsByName('phone')[0].value,{expires:date,path:'/',domain:'avaya.com'});
		}
		if(document.getElementsByName('optin')[0].value){
			$.cookie('optin',document.getElementsByName('optin')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			 //setCookie('optin', document.getElementsByName('optin')[0].value);
		}
		if(document.getElementsByName('cta_code')[0].value){
			$.cookie('CTA',document.getElementsByName('cta_code')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('CTA', document.getElementsByName('cta_code')[0].value);
		}
		if(document.getElementsByName('tactic_code')[0].value){
			$.cookie('TAC',document.getElementsByName('tactic_code')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('TAC', document.getElementsByName('tactic_code')[0].value);
		}
		if(document.getElementsByName('area_of_interest')[0].value){
			$.cookie('area_of_interest',document.getElementsByName('area_of_interest')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('area_of_interest', document.getElementsByName('area_of_interest')[0].value);
		}
		if(document.getElementsByName('content_vertical')[0].value){
			$.cookie('Vertical',document.getElementsByName('content_vertical')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('Vertical', document.getElementsByName('content_vertical')[0].value);
		}
		if(document.getElementsByName('content_persona')[0].value){
			$.cookie('Persona',document.getElementsByName('content_persona')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('Persona', document.getElementsByName('content_persona')[0].value);
		}
		if(document.getElementsByName('country_iso')[0].value){
			$.cookie('country_iso',document.getElementsByName('country_iso')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('country_iso', document.getElementsByName('country_iso')[0].value);
		}
		if(document.getElementsByName('emailOptinSource1')[0].value){
			$.cookie('emailOptinSource1',document.getElementsByName('emailOptinSource1')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('emailOptinSource1', document.getElementsByName('emailOptinSource1')[0].value);
		}
		if(document.getElementsByName('lastReferralPageURL')[0].value){
			$.cookie('lastReferralPageURL',document.getElementsByName('lastReferralPageURL')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('lastReferralPageURL', document.getElementsByName('lastReferralPageURL')[0].value);
		}
		if(document.getElementsByName('comments')[0].value){
			$.cookie('rpcomments',document.getElementsByName('comments')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('rpcomments', document.getElementsByName('comments')[0].value);
		}
		if(document.getElementsByName('content_title')[0].value){
			$.cookie('title',document.getElementsByName('content_title')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('title', document.getElementsByName('content_title')[0].value);
		}
		if(document.getElementsByName('GACLIENTID')[0].value){
			$.cookie('GACLIENTID',document.getElementsByName('GACLIENTID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GACLIENTID', document.getElementsByName('GACLIENTID')[0].value);
		}
		if(document.getElementsByName('GAUSERID')[0].value){
			$.cookie('GAUSERID',document.getElementsByName('GAUSERID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GAUSERID', document.getElementsByName('GAUSERID')[0].value);
		}
		if(document.getElementsByName('GATRACKID')[0].value){
			$.cookie('GATRACKID',document.getElementsByName('GATRACKID')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('GATRACKID', document.getElementsByName('GATRACKID')[0].value);
		}
		if(document.getElementsByName('thankyou_url')[0].value){
			$.cookie('thankyou_url',document.getElementsByName('thankyou_url')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('thankyou_url', document.getElementsByName('thankyou_url')[0].value);
		}
		if(document.getElementsByName('PrimarySubmission')[0].value){
			$.cookie('PrimarySubmission',document.getElementsByName('PrimarySubmission')[0].value,{expires:date,path:'/',domain:'avaya.com'});
			//setCookie('PrimarySubmission', document.getElementsByName('PrimarySubmission')[0].value);
		}
  
  		var checktimer2 = 0;
  		var nTimer2 = setInterval(function() {		
			checktimer2 = checktimer2+1;
			if (document.getElementsByName('kickfireVisitorLatitude')[0].value || checktimer2 >= 8) {
				console.log("email value");			  
			  clearInterval(nTimer2);
			document.getElementsByClassName("elq-form")[0].submit();
			};
		
			console.log("outside == " + Date());
		  }, 1000);
		
}
}, 1500);
});


function checkforvalue(){
	if(document.getElementsByName('first_name')[0].value){
		document.getElementsByName('first_name')[0].style.backgroundColor = "#ffffff";
	} else {
		document.getElementsByName('first_name')[0].style.backgroundColor = "#f1f1f3";
	}
	if(document.getElementsByName('last_name')[0].value){
		document.getElementsByName('last_name')[0].style.backgroundColor = "#ffffff";
	} else {
		document.getElementsByName('last_name')[0].style.backgroundColor = "#f1f1f3";
	}
	if(document.getElementsByName('email')[0].value){
		document.getElementsByName('email')[0].style.backgroundColor = "#ffffff";
	} else {
		document.getElementsByName('email')[0].style.backgroundColor = "#f1f1f3";
	}
	if(document.getElementsByName('country')[0].value){
		document.getElementsByName('country')[0].style.backgroundColor = "#ffffff";
	} else {
		document.getElementsByName('country')[0].style.backgroundColor = "#f1f1f3";
	}
}

checkforvalue();



/*document.getElementsByName("email")[0].addEventListener("blur", myScript);
function myScript(){
	var date = new Date();
		var m = 720*60;
		date.setTime(date.getTime() + (m * 60 * 1000));
	var emailadd11 = encrypt_cookie(document.getElementsByName('email')[0].value, 5);
	var emailadd12 = encrypt_cookie(document.getElementsByName('email')[0].value, 5);
	console.log("emailadd11  ======  " +emailadd11);
	console.log("emailadd12  ======  " +emailadd12);
	$.cookie('emailadd12',emailadd12,{expires:date,path:'/',domain:'avaya.com'});
	$.cookie('emailadd11',encodeURIComponent(emailadd11),{expires:date,path:'/',domain:'avaya.com'});
	setCookie('emailadd13', emailadd11);
	var emailadd1111 = getCookie('emailadd12');
	var emailadd1211 = getCookie('emailadd11');
	console.log("emailadd1111  ======  " +decodeURI(emailadd1111));
	console.log("emailadd1211  ======  " +emailadd1211);
	//console.log("emailadd11  ======  " +emailadd11);
	var emailadd111 = decodeURIComponent(decrypt_cookie(emailadd11, 5));
	var emailadd121 = decrypt_cookie(emailadd11, 5);
	//emailadd131 = "G{z}|€~‚_srutwvyxkjmlonqpc'GoGpG5zvt";
	var emailadd131 = decrypt_cookie(getCookie('emailadd13'), 5);
	console.log("emailadd1111  ======  " +emailadd111);
	console.log("emailadd121  ======  " +emailadd121);
	console.log("emailadd131  ======  " +emailadd131);
	console.log(decrypt_cookie(emailadd131, 5));
}*/