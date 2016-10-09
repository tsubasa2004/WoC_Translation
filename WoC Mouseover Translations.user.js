// ==UserScript==
// @name WoC Mouseover Translations
// @namespace https://github.com/tsubasa2004
// @version 0.1
// @description Provides mouseover translations for World of Cultivation
// @author tsubasa2004
// @match https://wwyxhqc.wordpress.com/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var italics=document.getElementsByTagName('em');
    var i=0;

// ————————— Spelling fixes —————————————————————————————————————————————
    document.body.innerHTML = document.body.innerHTML.replace(/liangqi/g, 'lianqi');
    document.body.innerHTML = document.body.innerHTML.replace(/Liangqi/g, 'Lianqi');
    document.body.innerHTML = document.body.innerHTML.replace(/xui/g, 'xiu');
    document.body.innerHTML = document.body.innerHTML.replace(/Xui/g, 'Xiu');
    document.body.innerHTML = document.body.innerHTML.replace(/cattie[^a-zA-Z]/g, 'catty');
    document.body.innerHTML = document.body.innerHTML.replace(/Cattie[^a-zA-Z]/g, 'Catty');
    document.body.innerHTML = document.body.innerHTML.replace(/Shixjie/g, 'Shijie');


    for (i = 0; i < italics.length; i++) {
        switch (italics[i].innerText.trim().toLowerCase().split(/[^a-zA-Z]/,1)[0]) {

// ————————— Setting Terms —————————————————————————————————————————————
            case 'ling':
                italics[i].title='Spiritual';
                break;
            case 'jie':
                italics[i].title='Continent, Kingdom';
                break;
            case 'jing':
                italics[i].title='Realm, Empire';
                break;
            case 'xiuzhe':
                italics[i].title='Cultivator(s)';
                break;
            case 'xiu':
                italics[i].title='Cultivator(s)';
                break;
            case 'jinzhi':
                italics[i].title='Restriction (a seal or warding spell)';
                break;
            case 'jingshi':
                italics[i].title='Spirit Stones';
                break;
            case 'yao':
                italics[i].title='Spirit(s)';
                break;
            case 'mo':
                italics[i].title='Demon(s)';
                break;
            case 'yaomo':
                italics[i].title='Spirits and Demons';
                break;
            case 'dan':
                italics[i].title='Pill';
                break;
            case 'dhyana':
                italics[i].title='Yoga Meditation';
                break;
            case 'lingdan':
                italics[i].title='Spiritual Pill';
                break;

// ————————— Honorifics —————————————————————————————————————————————
            case 'xianren':
                italics[i].title='Daoist Immortal';
                break;
            case 'ye':
                italics[i].title='Grandfather';
                break;
            case 'ge':
                italics[i].title='Brother';
                break;
            case 'zhenren':
                italics[i].title='Spiritual Master';
                break;
            case 'da':
                if(italics[i].innerText.toLowerCase().indexOf("da ge") !== -1){
                    italics[i].title='Elder Brother';
                }
                break;
            case 'dage':
                italics[i].title='Elder Brother';
                break;
            case 'sanren':
                italics[i].title='Roaming Cultivator (honorific)';
                break;
            case 'daoren':
                italics[i].title='Daoist (honorific)';
                break;

// ————————— Martial Kinship —————————————————————————————————————————————
            case 'shixiong':
                italics[i].title='Senior Martial Brother';
                break;
            case 'shijie':
                italics[i].title='Senior Martial Sister';
                break;
            case 'shibo':
                italics[i].title='Martial Uncle (the elder brother of one\'s master)';
                break;
            case 'shishu':
                italics[i].title='Martial Uncle (the junior brother of one\'s master)';
                break;
            case 'shidi':
                italics[i].title='Junior Martial Brother';
                break;
            case 'shimei':
                italics[i].title='Junior Martial Sister';
                break;
            case 'shigu':
                italics[i].title='Martial Aunt';
                break;

// ————————— Stages of Cultivation —————————————————————————————————————————————
            case 'lianqi':
                italics[i].title='Qi Condensation';
                break;
            case 'zhuji':
                italics[i].title='Foundation Establishment';
                break;
            case 'ningmai':
                italics[i].title='Congealing Channels';
                break;
            case 'jindan':
                italics[i].title='Gold Core';
                break;
            case 'yuanying':
                italics[i].title='Nascent Soul';
                break;
            case 'fanxu':
                italics[i].title='Return to Nothingness';
                break;
            case 'dasheng':
                italics[i].title='Great Vehicle';
                break;

// ————————— Measurements —————————————————————————————————————————————
            case 'ping':
                italics[i].title='3.3 sq m - area of two sleeping mats';
                break;
            case 'mu':
                italics[i].title='666 sq m, 1/15 hectare, or 1/6 acre';
                break;
            case 'li':
                if(italics[i].innerText.indexOf("Li") !== -1){
                    italics[i].title='☲ - the Eight Trigrams character representing fire';
                }
                else{
                    italics[i].title='500m - the length of a village';
                }
                break;
            case 'picul':
                italics[i].title='60kg - as much as a man can carry on his shoulders';
                break;
            case 'cun':
                italics[i].title='3.3 cm - "Chinese inch"';
                break;
            case 'chi':
                italics[i].title='33⅓ cm - "Chinese foot"';
                break;

// ————————— Real World Things —————————————————————————————————————————————
            case 'yin':
                italics[i].title='Femenine, Negative';
                break;
            case 'yang':
                italics[i].title='Masculine, Positive';
                break;
            case 'renyao':
                italics[i].title='Human Spirit; also slang for transvestite';
                break;
            case 'weiqi':
                italics[i].innerText='go';
                break;


            default:
                italics[i].title='New vocab';
                break;
        }
    }

// ————————— Chinese Words Which Don't Get Italicized for Some Reason —————————————————————————————————————————————
    document.body.innerHTML = document.body.innerHTML.replace(/catty/g, '<em title="600g, or 1/100 picul">catty</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/Catty/g, '<em title="600g, or 1/100 picul">Catty</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/Catties/g, '<em title="600g, or 1/100 picul">Catties</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/catties/g, '<em title="600g, or 1/100 picul">catties</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/Tael/g, '<em title="37.5, or 1/16 catty">Tael</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/tael/g, '<em title="37.5, or 1/16 catty">tael</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/Bagua/g, '<em title="Eight Trigrams">Bagua</em>');
    document.body.innerHTML = document.body.innerHTML.replace(/bagua/g, '<em title="Eight Trigrams">bagua</em>');
})();
