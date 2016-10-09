// ==UserScript==
// @name WoC Direct Translations
// @namespace https://github.com/tsubasa2004
// @version 0.1
// @description Provides in-text translation for World of Cultivation
// @author You
// @match https://wwyxhqc.wordpress.com/*
// @grant none
// ==/UserScript==

/*
It's simpler than it looks to edit this script!
Here's an example line:

    chapter = chapter.replace(/\bling\b/g, 'spiritual');

This line will find the word 'ling' and replace it with 'spiritual'.

'/\bling\b/g' is what you want to find.  'spiritual' is the translation to replace it with.  Make sure the translation is in single quotes.

The first part is what's called a regular expression.  / and /g indicate the beginning and end of it.

\b indicates the edge of a word.  So \bling\b means "Match 'ling', but only where 'ling' is the entire word". This will match the 'ling' in 'ling grain', but not in 'falling'.

[] defines a set of characters to match.  So [sS]ky will match 'sky' or 'Sky'.  [a-z] will match one lowercase letter, [a-zA-Z] will match one uppercase or lowercase letter.

If you want to test a regular expression, http://regexr.com is a useful site.

*/

(function() {
    'use strict';
    var chapter = document.body.innerHTML;

// ————————— Spelling fixes —————————————————————————————————————————————
    chapter = chapter.replace(/liangqi/g, 'lianqi');
    chapter = chapter.replace(/Liangqi/g, 'Lianqi');
    chapter = chapter.replace(/xui/g, 'xiu');
    chapter = chapter.replace(/Xui/g, 'Xiu');
    chapter = chapter.replace(/cattie[^a-zA-Z]/g, 'catty');
    chapter = chapter.replace(/Cattie[^a-zA-Z]/g, 'Catty');
    chapter = chapter.replace(/Shixjie/g, 'Shijie');
    chapter = chapter.replace(/<\/?em>/g, '');

// ————————— Places —————————————————————————————————————————————
    chapter = chapter.replace(/[sS]ky [mM]oon [jJ]ie/g, 'Sky Moon Continent');
    chapter = chapter.replace(/[bB]loody [sS]ky [mM]etropolis [jJ]ie/g, 'Bloody Sky Metropolis Continent');
    chapter = chapter.replace(/[lL]ittle [mM]ountain [jJ]ie/g, 'Little Mountain Continent');

// ————————— Setting Terms —————————————————————————————————————————————
    chapter = chapter.replace(/\bling\b/g, 'spiritual');
    chapter = chapter.replace(/\bLing\b/g, 'Spiritual');
    chapter = chapter.replace(/\bjie\b/g, 'continent(s)');
    chapter = chapter.replace(/\bJie\b/g, 'Continent(s)');
    chapter = chapter.replace(/\bxiu(zhe)?\b/g, 'cultivator(s)');
    chapter = chapter.replace(/\bXiu(zhe)?\b/g, 'Cultivator(s)');
    chapter = chapter.replace(/\bjinzhi\b/g, 'ward(s)');
    chapter = chapter.replace(/\bjingshi\b/g, 'spirit stone(s)');
    chapter = chapter.replace(/\byaomo\b/g, 'Spirit stone(s)');
    chapter = chapter.replace(/\bYaomo\b/g, 'Spirit stone(s)');
    chapter = chapter.replace(/\byao\b/g, 'spirit(s)');
    chapter = chapter.replace(/\bYao\b/g, 'Spirit(s)');
    chapter = chapter.replace(/\b[Zz]uo [Mm]o\b/g, 'ZuoMo');         //The next couple lines are to prevent names with "Mo" from being matched as "mo = demon"
    chapter = chapter.replace(/\b[Zz]ombie [Mm]o\b/g, 'ZombMo');
    chapter = chapter.replace(/\bXi Mo Da/g, 'XMD');
    chapter = chapter.replace(/\bmo(?!( ge))\b/g, 'demon(s)');
    chapter = chapter.replace(/\bMo(?!( ge))\b/g, 'Demon(s)');
    chapter = chapter.replace(/\bZuoMo/g, 'Zuo Mo');
    chapter = chapter.replace(/\bZombMo\b/g, 'Zombie Mo');
    chapter = chapter.replace(/\bXMD\b/g, 'Xi Mo Da');
    chapter = chapter.replace(/\b[mM]o [gG]e\b/g, 'Brother Mo');
    chapter = chapter.replace(/\bdan\b/g, 'pill');
    chapter = chapter.replace(/\bDan\b/g, 'Pill');
    chapter = chapter.replace(/\blingdan\b/g, 'spiritual pill');
    chapter = chapter.replace(/\bLingdan\b/g, 'Spiritual pill');
    chapter = chapter.replace(/\bdhyana\b/g, '<em>dhyana</em>');
    chapter = chapter.replace(/\bDhyana\b/g, '<em>Dhyana</em>');

// ————————— Honorifics —————————————————————————————————————————————

    chapter = chapter.replace(/\bDong Fu [xX]ianren\b/g, 'Daoist Immortal Dong Fu');
    chapter = chapter.replace(/\bTian Yue [xX]ianren\b/g, 'Daoist Immortal Tian Yue');
    chapter = chapter.replace(/\bDong Fu [zZ]henren\b/g, 'Spiritual Master Dong Fu');
    chapter = chapter.replace(/\bChi Ye [zZ]henren\b/g, 'Spiritual Master Chi Ye');
    chapter = chapter.replace(/\bWu Ling [sS]anren\b/g, 'Roaming Cultivator Wu Ling');
    chapter = chapter.replace(/\bWen Tie [sS]anren\b/g, 'Roaming Cultivator Wen Tie');
    chapter = chapter.replace(/\bLong Zhen [sS]anren\b/g, 'Roaming Cultivator Long Zhen');
    chapter = chapter.replace(/\bBlood Mosquito [dD]aoren\b/g, 'Daoist Blood Mosquito');
    chapter = chapter.replace(/\b[xX]ianren\b/g, 'Daoist Immortal');
    chapter = chapter.replace(/\b[zZ]henren\b/g, 'Spiritual Master');
    chapter = chapter.replace(/\b[sS]anren\b/g, 'Roaming Cultivator');
    chapter = chapter.replace(/\b[dD]aoren\b/g, 'Daoist');
    chapter = chapter.replace(/\bChi Ye\b/g, 'ChiYe');
    chapter = chapter.replace(/\bye\b/g, 'grandfather');
    chapter = chapter.replace(/\bYe\b/g, 'Grandfather');
    chapter = chapter.replace(/\bChiYe\b/g, 'Chi Ye');
    chapter = chapter.replace(/\bge\b/g, 'brother');
    chapter = chapter.replace(/\bGe\b/g, 'Brother');
    chapter = chapter.replace(/\bDa ?[Gg]e\b/g, 'Elder brother');
    chapter = chapter.replace(/\bda ?[Gg]e\b/g, 'elder brother');

// ————————— Martial Kinship —————————————————————————————————————————————
    chapter = chapter.replace(/\b[sS]hixiong\b/g, 'Senior Brother');
    chapter = chapter.replace(/\b[sS]hijie\b/g, 'Senior Sister');
    chapter = chapter.replace(/\b[sS]hibo\b/g, 'Martial Uncle');
    chapter = chapter.replace(/\b[sS]hishu\b/g, 'Martial Uncle');
    chapter = chapter.replace(/\b[sS]higu\b/g, 'Martial Aunt');
    chapter = chapter.replace(/\b[sS]hidi\b/g, 'Junior Brother');
    chapter = chapter.replace(/\b[sS]himei\b/g, 'Junior Sister');

// ————————— Stages of Cultivation —————————————————————————————————————————————
    chapter = chapter.replace(/\blianqi\b/g, 'Qi Condensation');
    chapter = chapter.replace(/\bzhuji\b/g, 'Foundation Establishment');
    chapter = chapter.replace(/\bningmai\b/g, 'Congealing Channels');
    chapter = chapter.replace(/\bjindan\b/g, 'Gold Core');
    chapter = chapter.replace(/\byuanying\b/g, 'Nascent Soul');
    chapter = chapter.replace(/\bfanxu\b/g, 'Return to Nothingness');
    chapter = chapter.replace(/\bdasheng\b/g, 'Great Vehicle');

// ————————— Measurements —————————————————————————————————————————————
    chapter = chapter.replace(/\bping\b/g, '<em title="3.3 sq m - area of two sleeping mats">ping</em>');
    chapter = chapter.replace(/\bmu\b/g, '<em title="666 sq m, 1/15 hectare, or 1/6 acre">mu</em>');
    chapter = chapter.replace(/\bli\b(?! id|>| class)/g, '<em title="500m or 1,640 feet - the length of a village">li</em>');
    chapter = chapter.replace(/\bpicul\b/g, '<em title="60kg - as much as a man can carry on his shoulders">picul</em>');
    chapter = chapter.replace(/\bcun\b/g, '<em title="3.3 cm - \'Chinese inch\'">cun</em>');
    chapter = chapter.replace(/\bchi\b/g, '<em title="33.3 cm - \'Chinese foot\'">chi</em>');
    chapter = chapter.replace(/catty/g, '<em title="600g, or 1/100 picul">catty</em>');
    chapter = chapter.replace(/Catty/g, '<em title="600g, or 1/100 picul">Catty</em>');
    chapter = chapter.replace(/Catties/g, '<em title="600g, or 1/100 picul">Catties</em>');
    chapter = chapter.replace(/catties/g, '<em title="600g, or 1/100 picul">catties</em>');
    chapter = chapter.replace(/Tael/g, '<em title="37.5, or 1/16 catty">Tael</em>');
    chapter = chapter.replace(/tael/g, '<em title="37.5, or 1/16 catty">tael</em>');

// ————————— Real World Things —————————————————————————————————————————————
    chapter = chapter.replace(/\b[Ll]i [Ww]ater\b/g, '<em title="☲ - the Eight Trigrams character representing fire, radiance, clarity">Li Water</em>');
    chapter = chapter.replace(/\b[nN]an [mM]en [yY]ang\b/g, 'NMY');
    chapter = chapter.replace(/\byin\b/g, '<em title="Femenine, Negative, Cold, Wet">yin</em>');
    chapter = chapter.replace(/\byang\b/g, '<em title="Masculine, Positive, Hot, Dry">yang</em>');
    chapter = chapter.replace(/\bYin\b/g, '<em title="Femenine, Negative, Cold, Wet">Yin</em>');
    chapter = chapter.replace(/\bYang\b/g, '<em title="Masculine, Positive, Hot, Dry">Yang</em>');
    chapter = chapter.replace(/\bNMY\b/g, 'Nan Men Yang');
    chapter = chapter.replace(/\brenyao\b/g, '<em title="Slang for a transvestite.  A pun, literally reads \'Humanoid Spirit\'">renyao</em>');
    chapter = chapter.replace(/\bRenyao\b/g, '<em title="Slang for a transvestite.  A pun, literally reads \'Humanoid Spirit\'">Renyao</em>');
    chapter = chapter.replace(/\bweiqi\b/g, '<em>go</em>');
    chapter = chapter.replace(/\b[bB]agua\b/g, 'Eight Trigrams');

    document.body.innerHTML = chapter;
})();
